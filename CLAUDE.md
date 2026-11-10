@AGENTS.md
# iSafePlatform 프로젝트

## 라우팅
- / → 플랫폼 홈
- /isafe-planner, /isafe-meta, /isafe-guard, /isafe-chain

## 모듈 색상
iSafePlanner: #14532d → #16a34a (초록)
iSafeMeta:    #7f1d1d → #dc2626 (빨강)
iSafeGuard:   #0c2340 → #1d6fa4 (파랑)
iSafeChain:   #7c2d12 → #ea580c (주황)

## 카피라이팅 규칙
- 기술명 나열 금지 → 페인포인트 먼저
- 실무자용: 현장 용어, 공감 톤
- 승인권자용: ROI, 법적 대응, 전문 어조

## 페이지 제작 규칙 (2026-06-04 업데이트)
**모든 새 페이지는 다국어(한국어/영어) 지원 필수:**
1. 페이지에 `"use client"` 추가
2. `useState<"ko" | "en">("ko")` 로 language state 생성
3. 콘텐츠 배열들을 `const getXxx = (language: "ko" | "en") => [...]` 형태 함수로 변환
4. 텍스트: `language === "ko" ? "한국어" : "English"` 패턴 사용
5. useEffect에 localStorage 동기화 추가:
```typescript
useEffect(() => {
  const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
  if (savedLang) setLanguage(savedLang);

  const handleLanguageChange = (e: Event) => {
    const customEvent = e as CustomEvent;
    setLanguage(customEvent.detail);
  };

  window.addEventListener("languageChange", handleLanguageChange);
  return () => window.removeEventListener("languageChange", handleLanguageChange);
}, []);
```
6. `<Footer language={language} />` 로 Footer에 language prop 전달
7. Header의 토글 버튼이 자동으로 모든 페이지 제어

## 브로셔 (2026-08-03 추가)
- `public/brochure/` — 자체 완결형 단일 페이지 HTML 브로셔(12MB, 영상 13개). Next 라우터 밖의 정적 파일이므로 헤더 링크는 `<Link>`가 아닌 `<a href="/brochure/">` 사용 필수(Link면 클라이언트 라우팅이 가로채 404).
- 에셋 경로가 전부 상대경로(`assets/…`)라 하위 디렉터리 어디에 두어도 동작.
- `public/images/qr-brochure.png` (1200px, 인쇄용) / `.svg` — `http://contilab.co.kr/brochure/` 인코딩, 오류정정 레벨 H. 재생성: `npx qrcode -o <경로> -t png -w 1200 -q 2 -e H -d 0E1114 "<URL>"`
- **public/에 한글 파일명을 두지 말 것** — `콘티랩_플랫폼.html`(같은 브로셔의 15.4MB 단일 파일본)은 `out/`으로 복사되어 배포 대상에 잡히고, FTP 업로드 시 한글명이 깨질 수 있음. 폴더판(`public/brochure/`)과 내용이 중복이므로 프로젝트 루트로 빼둘 것.

## 브로셔 다국어 (2026-08-25 추가)
- 브로셔는 Next 밖의 정적 HTML이라 사이트의 `languageChange` 이벤트와 별개로 **자체 전환기**를 갖는다. 우상단 고정 토글(`.langsw`, 1080px 이하에서는 우하단), 선택값은 `localStorage.brochureLang`.
- 전환 방식은 두 갈래:
  1. **텍스트 노드 사전 치환** — 한글 문자열 → 영문 (약 300개). 스크립트 하단 `T` 객체.
  2. **블록 통째 교체** — 태그로 쪼개진 문장(h1·sub·비용 주석·가격 등 16곳)은 `data-i18n="키"` 를 달고 `BLOCK` 객체의 영문 HTML로 innerHTML 교체. 조각 단위로 번역하면 영문이 부자연스러워지기 때문.
- 새 문구를 추가하면 두 사전 중 맞는 쪽에 넣어야 한다. 빠뜨리면 EN 상태에서 그 문구만 한글로 남는다.
- **영상 자막은 한국어로 구워져 있어 전환되지 않는다.** 영문 사용자에겐 화면 밖 캡션으로만 보완 가능.

## 자동 기록 규칙
작업 완료 후 아래 항목이 생기면 CLAUDE.md에 자동으로 추가해줘:
- 새로 만든 컴포넌트/페이지 경로
- 결정한 데이터 구조나 API 스펙
- 해결한 버그와 원인
- 건드리면 안 되는 파일/이유