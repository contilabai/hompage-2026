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

## 자동 기록 규칙
작업 완료 후 아래 항목이 생기면 CLAUDE.md에 자동으로 추가해줘:
- 새로 만든 컴포넌트/페이지 경로
- 결정한 데이터 구조나 API 스펙
- 해결한 버그와 원인
- 건드리면 안 되는 파일/이유