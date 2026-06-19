import type { NextConfig } from "next";

// 가비아 웹호스팅(Apache) 정적 배포 — 전 페이지 정적이라 Node 서버 불필요.
// `npm run build` 시 out/ 폴더가 생성되며, 그 내용을 웹호스팅 루트에 업로드.
// 보안 헤더는 정적 익스포트에서 next.config로 적용되지 않으므로 public/.htaccess에서 처리.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,        // /isafe-guard/ → index.html (Apache 폴더 인덱싱 호환)
  poweredByHeader: false,
  images: { unoptimized: true }, // 정적 호스팅에는 이미지 최적화 서버가 없으므로 원본 제공
};

export default nextConfig;
