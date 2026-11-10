<#
  contilab.co.kr 가비아 웹호스팅 FTP 배포 스크립트

  사용법:
    .\deploy-ftp.ps1 -DryRun            # 올릴 목록만 확인 (접속 안 함)
    .\deploy-ftp.ps1                    # 업로드 (원격 루트 자동 판별)
    .\deploy-ftp.ps1 -All               # gif/pdf/images 대용량까지 전부 (약 364MB)
    .\deploy-ftp.ps1 -Purge www_root    # 잘못 올라간 디렉터리 통째로 삭제

  중요 — FTP 계정은 로그인 즉시 웹 루트 안이다. SFTP(홈 디렉터리 → www_root)와 다르다.
  그래서 원격 경로는 비워두는 것이 정상이며, 스크립트가 목록을 보고 자동 판별한다.

  비밀번호는 실행 시 입력받으며 파일·이력에 남지 않는다.
#>
param(
  [string]$Root       = "C:\contilab-deploy",
  [string]$FtpHost    = "211.47.74.39",
  [string]$User       = "contilab",
  [string]$RemoteRoot,          # 지정하지 않으면 접속 후 자동 판별
  [string]$Purge,               # 지정하면 업로드 대신 해당 원격 디렉터리를 삭제
  [int]   $BatchSize  = 40,
  [switch]$All,
  [switch]$DryRun,
  [switch]$SaveCredential      # 비밀번호를 이 PC·이 계정에서만 풀 수 있게 암호화 저장
)

$ErrorActionPreference = "Stop"

# ── 1. 대상 파일 선별 ────────────────────────────────────────────────
if (-not (Test-Path $Root)) { throw "빌드 폴더가 없습니다: $Root  (npm run build 후 robocopy 하셨나요?)" }

$files = Get-ChildItem $Root -Recurse -File -Force | ForEach-Object {
  [pscustomobject]@{
    Local = $_.FullName
    Rel   = $_.FullName.Substring($Root.Length + 1).Replace('\', '/')
    Size  = $_.Length
  }
}

if (-not $All) {
  # 코드가 바뀌어도 변하지 않는 대용량 에셋은 제외.
  # 단, 새로 만든 QR 이미지는 images/ 안에 있으므로 예외로 포함한다.
  $files = $files | Where-Object {
    $top = $_.Rel.Split('/')[0]
    if ($top -in @('gif', 'pdf')) { return $false }
    if ($top -eq 'images' -and $_.Rel -notlike 'images/qr-brochure.*') { return $false }
    return $true
  }
}

$risky = $files | Where-Object { $_.Rel -match '[^\x20-\x7E]|\s' }
if ($risky) {
  Write-Warning "비ASCII/공백이 포함된 파일명 $($risky.Count)개 — FTP에서 깨질 수 있습니다:"
  $risky | ForEach-Object { "    $($_.Rel)" }
}

$totalMB = ($files | Measure-Object Size -Sum).Sum / 1MB
"대상   : {0}개 파일, {1:N1} MB" -f $files.Count, $totalMB

if ($DryRun) {
  ""
  $files | Group-Object { $_.Rel.Split('/')[0] } | Sort-Object Count -Descending |
    ForEach-Object { "  {0,-16} {1,4}개  {2,7:N1} MB" -f $_.Name, $_.Count, (($_.Group | Measure-Object Size -Sum).Sum / 1MB) }
  ""
  "DryRun 이므로 접속하지 않고 종료합니다."
  return
}

# ── 2. 비밀번호 입력 → curl 설정 파일 (명령줄 노출 방지) ─────────────
# 저장된 자격증명이 있으면 프롬프트 없이 진행한다.
# Windows DPAPI 로 암호화되므로 이 PC의 이 사용자 계정에서만 복호화된다.
$credPath = Join-Path $env:USERPROFILE ".contilab-ftp.cred"

if ($SaveCredential) {
  $sec = Read-Host "FTP password ($User@$FtpHost) - 저장용" -AsSecureString
  $sec | ConvertFrom-SecureString | Set-Content $credPath -Encoding utf8
  "자격증명 저장 완료 -> $credPath"
  "이제 .\deploy-ftp.ps1 을 비밀번호 입력 없이 실행할 수 있습니다."
  return
}

if (Test-Path $credPath) {
  $sec = (Get-Content $credPath -Raw).Trim() | ConvertTo-SecureString   # 끝 개행이 섞이면 복호화 실패
  "  저장된 자격증명 사용 ($credPath)"
} else {
  $sec = Read-Host "FTP password ($User@$FtpHost)" -AsSecureString
}
$bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec)
try   { $plain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr) }
finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr) }

# curl 설정 파일의 따옴표 문자열 규칙: \ 와 " 는 이스케이프해야 한다.
$escaped = $plain -replace '\\', '\\' -replace '"', '\"'
$cfg = Join-Path $env:TEMP ("contilab-ftp-{0}.cfg" -f [guid]::NewGuid())
[IO.File]::WriteAllText($cfg, "user = `"${User}:${escaped}`"`n", (New-Object Text.UTF8Encoding $false))
$plain = $null

# 원격 경로 조립 — 루트가 비어 있으면 슬래시를 겹치지 않게 한다.
function Get-RemoteUrl([string]$root, [string]$rel) {
  if ([string]::IsNullOrWhiteSpace($root)) { return "ftp://$FtpHost/$rel" }
  return "ftp://$FtpHost/$root/$rel"
}

try {
  # ── 3. 접속 및 원격 루트 자동 판별 ─────────────────────────────────
  "접속 확인 중..."
  $listing = curl.exe -s --connect-timeout 15 -K $cfg "ftp://$FtpHost/"
  if ($LASTEXITCODE -ne 0) {
    throw "로그인 거부 (curl exit $LASTEXITCODE). 가비아 콘솔의 'FTP/SFTP/SSH 접속 설정 → 접속 허용 기한'이 만료되지 않았는지 먼저 확인하세요. 비밀번호가 맞아도 기한이 지나면 같은 오류가 납니다."
  }

  # 목록 각 줄의 마지막 토큰이 파일/디렉터리 이름
  $names = $listing | ForEach-Object { ($_ -split '\s+')[-1] } | Where-Object { $_ }

  # 판정 순서 주의 — 웹 루트 표지(index.html + _next)를 먼저 본다.
  # www_root 존재 여부를 먼저 보면, 과거 오배포로 생긴 www_root/ 를 보고
  # "홈 디렉터리"로 오판해 같은 실수를 반복한다.
  if (-not $PSBoundParameters.ContainsKey('RemoteRoot')) {
    if (($names -contains 'index.html') -and ($names -contains '_next')) {
      $RemoteRoot = ''
      "  웹 루트로 직접 접속됨 → 업로드 경로: / (FTP는 웹 루트로 chroot됩니다)"
      if ($names -contains 'www_root') {
        Write-Warning "웹 루트 안에 'www_root' 디렉터리가 있습니다 — 오배포 잔재로 보입니다. 업로드 후 '.\deploy-ftp.ps1 -Purge www_root' 로 정리하세요."
      }
    } elseif ($names -contains 'www_root') {
      $RemoteRoot = 'www_root'
      "  홈 디렉터리로 접속됨 → 업로드 경로: www_root/"
    } else {
      Write-Warning "원격 루트를 판별하지 못했습니다. 실제 목록:"
      $names | ForEach-Object { "    $_" }
      throw "-RemoteRoot 를 직접 지정해 다시 실행하세요."
    }
  }

  # ── 4A. 삭제 모드 ──────────────────────────────────────────────────
  if ($Purge) {
    if ($names -notcontains $Purge) {
      "'$Purge' 가 원격에 없습니다. 이미 정리된 것으로 보입니다."
      return
    }

    # 올렸던 파일 목록으로부터 삭제 대상을 그대로 역산한다.
    $delFiles = $files | ForEach-Object { "$Purge/$($_.Rel)" }
    $delDirs  = $files | ForEach-Object {
                  $p = $_.Rel; $acc = @()
                  while ($p -match '/') { $p = $p -replace '/[^/]+$', ''; $acc += "$Purge/$p" }
                  $acc
                } | Select-Object -Unique
    # 깊은 것부터 지워야 rmdir 이 성공한다.
    $delDirs = @($delDirs | Sort-Object { ($_ -split '/').Count } -Descending) + @($Purge)

    "삭제 대상: 파일 $($delFiles.Count)개, 디렉터리 $($delDirs.Count)개"
    if ((Read-Host "정말 '$Purge' 를 지울까요? (y/N)") -ne 'y') { return }

    # '*' 접두사 = 실패해도 계속 진행 (이미 없는 항목 무시)
    foreach ($chunk in @('DELE', 'RMD')) {
      $targets = if ($chunk -eq 'DELE') { $delFiles } else { $delDirs }
      for ($i = 0; $i -lt $targets.Count; $i += 50) {
        $slice = $targets[$i..([Math]::Min($i + 49, $targets.Count - 1))]
        $a = @('-s', '-K', $cfg, '--connect-timeout', '20')
        foreach ($t in $slice) { $a += @('-Q', "*$chunk $t") }
        $a += @("ftp://$FtpHost/", '-o', 'NUL')
        & curl.exe @a | Out-Null
        "  $chunk {0}/{1}" -f [Math]::Min($i + 50, $targets.Count), $targets.Count
      }
    }
    "'$Purge' 정리 완료"
    return
  }

  # ── 4B. 업로드 ─────────────────────────────────────────────────────
  ""
  $done = 0; $failed = @()
  for ($i = 0; $i -lt $files.Count; $i += $BatchSize) {
    $batch = $files[$i..([Math]::Min($i + $BatchSize - 1, $files.Count - 1))]

    $curlArgs = @('-s', '--connect-timeout', '20', '--retry', '2', '--ftp-create-dirs',
                  '-K', $cfg, '-w', "%{exitcode} %{url_effective}`n")
    foreach ($f in $batch) {
      $curlArgs += @('-T', $f.Local, (Get-RemoteUrl $RemoteRoot $f.Rel))
    }

    $out = & curl.exe @curlArgs
    foreach ($line in $out) {
      if ($line -match '^(\d+)\s+(\S+)') {
        if ([int]$Matches[1] -eq 0) { $done++ } else { $failed += $Matches[2] }
      }
    }
    "  [{0,3}%] {1} / {2}" -f [int](($i + $batch.Count) / $files.Count * 100), $done, $files.Count
  }
  ""

  if ($failed.Count -gt 0) {
    Write-Warning "실패 $($failed.Count)개:"
    $failed | ForEach-Object { "    $_" }
  } else {
    "업로드 완료 — $done 개 전부 성공"
  }
}
finally {
  # 비밀번호가 담긴 임시 파일은 어떤 경로로 끝나든 반드시 삭제
  if (Test-Path $cfg) { Remove-Item $cfg -Force }
}

# ── 5. 라이브 검증 ───────────────────────────────────────────────────
""
"라이브 확인:"
foreach ($p in @('/', '/brochure/', '/brochure/assets/mark.png', '/images/qr-brochure.png')) {
  try {
    $r = Invoke-WebRequest "http://contilab.co.kr$p" -UseBasicParsing -TimeoutSec 20 -Method Head
    "  {0,-32} HTTP {1}" -f $p, $r.StatusCode
  } catch {
    "  {0,-32} 실패: {1}" -f $p, $_.Exception.Message
  }
}
