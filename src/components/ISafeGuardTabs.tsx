"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type Lang = "ko" | "en";
type TabId = "solution" | "model" | "device" | "deployment";

const getTabs = (language: Lang): { id: TabId; label: string; sub: string }[] => [
  { id: "solution", label: language === "ko" ? "솔루션" : "Solution", sub: language === "ko" ? "웹 관제 플랫폼" : "Web Monitoring" },
  { id: "model", label: language === "ko" ? "AI 모델" : "AI Models", sub: language === "ko" ? "3단계 패키지" : "3-Tier Packages" },
  { id: "device", label: language === "ko" ? "디바이스" : "Devices", sub: language === "ko" ? "엣지 하드웨어" : "Edge Hardware" },
  { id: "deployment", label: language === "ko" ? "현장 실증" : "Field Validation", sub: language === "ko" ? "도입 사례" : "Case Studies" },
];

// ───────────── 솔루션 탭 ─────────────

const getSolutionFeatures = (language: Lang) => [
  {
    id: "multichannel",
    reverse: false,
    tag: language === "ko" ? "웹 관제 플랫폼" : "Web Monitoring Platform",
    tagColor: "bg-blue-100 text-blue-700",
    headline: language === "ko"
      ? "몸이 열 개라도\n100CH+ 카메라를 동시에\n볼 수는 없습니다"
      : "Even with ten pairs of eyes,\nyou can't watch 100+ cameras\nat once",
    subhead: language === "ko"
      ? "iSafeGuard가 모든 채널을 동시에 분석하고 이상 징후만 알립니다"
      : "iSafeGuard analyzes every channel at once and alerts you only on anomalies",
    desc: language === "ko"
      ? "브라우저 하나로 현장 전체 카메라를 동시에 관제합니다. AI가 매 프레임을 분석하고 위험 카테고리별로 분류하여 이상 상황만 즉시 화면에 띄웁니다. 안전 관리자는 진짜 위험 상황에만 집중할 수 있습니다."
      : "Monitor every camera on site from a single browser. AI analyzes every frame, classifies by hazard category, and surfaces only anomalies—so safety managers focus only on real risks.",
    bullets: language === "ko"
      ? [
          "최대 100+채널 동시 AI 분석·관제",
          "위험 카테고리 자동 분류 및 알람 리스트업",
          "이벤트 전후 2분 영상 클립 자동 보존",
          "근로자·중장비 간 실제 거리 실시간 측정",
          "모바일 앱으로 현장 밖에서도 즉시 확인",
        ]
      : [
          "Up to 100+ channels analyzed and monitored at once",
          "Automatic hazard categorization and alarm listing",
          "Auto-saves 2-min clips before and after each event",
          "Real-time distance measurement between workers and equipment",
          "Instant check from anywhere via mobile app",
        ],
    placeholder: {
      title: language === "ko" ? "iSafeGuard 100+채널 웹 관제 화면" : "iSafeGuard 100+ Channel Web Monitoring",
      description: language === "ko"
        ? "브라우저에서 100+개 카메라를 동시에 모니터링하는 실제 대시보드 스크린샷"
        : "Actual dashboard monitoring 100+ cameras at once in a browser",
    },
    ctaBg: "bg-blue-600 hover:bg-blue-700",
    bgClass: "bg-white",
  },
  {
    id: "danger-zone",
    reverse: true,
    tag: language === "ko" ? "동적 위험구역 설정" : "Dynamic Hazard Zones",
    tagColor: "bg-indigo-100 text-indigo-700",
    headline: language === "ko"
      ? "오늘 공사 구역이\n바뀌었습니까?\n5초면 반영됩니다"
      : "Work zone changed today?\nIt's reflected\nin 5 seconds",
    subhead: language === "ko"
      ? "마우스로 구역을 그리면 그 순간부터 AI가 감지합니다"
      : "Draw a zone with your mouse and AI detects from that moment",
    desc: language === "ko"
      ? "관리자가 화면 위에 마우스로 구역을 그리면 즉시 AI 감지 영역이 적용됩니다. 타워크레인 인양 범위, 중장비 이동 경로, 당일 위험 공정 구역을 실시간으로 갱신하세요. IT 지식이 필요 없습니다."
      : "Draw a zone on screen with your mouse and the AI detection area applies instantly. Update tower-crane lifting ranges, equipment paths, and daily hazard zones in real time—no IT knowledge required.",
    bullets: language === "ko"
      ? [
          "마우스 드래그로 위험구역 즉시 설정",
          "다각형·원형 등 자유로운 구역 형태",
          "구역별 알람 민감도 개별 조정",
          "시간대별 구역 자동 활성화 스케줄",
        ]
      : [
          "Set hazard zones instantly by mouse drag",
          "Free-form zones—polygon, circle, and more",
          "Per-zone alarm sensitivity adjustment",
          "Time-based automatic zone activation schedule",
        ],
    placeholder: {
      title: language === "ko" ? "마우스 드래그 위험구역 설정 인터페이스" : "Mouse-Drag Hazard Zone Setup",
      description: language === "ko"
        ? "관리자가 화면 위에 직접 위험구역을 그리는 실제 설정 화면"
        : "Actual setup screen where a manager draws hazard zones directly",
    },
    ctaBg: "bg-indigo-600 hover:bg-indigo-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "vlm-report",
    reverse: false,
    tag: language === "ko" ? "VLM 자동 보고서" : "VLM Auto Reports",
    tagColor: "bg-teal-100 text-teal-700",
    headline: language === "ko"
      ? "보고서 작성에\n매일 2시간씩\n쓰고 계십니까?"
      : "Spending 2 hours\nevery day\nwriting reports?",
    subhead: language === "ko"
      ? "VLM AI가 오늘 현장에서 일어난 일을 보고서로 자동 작성합니다"
      : "VLM AI automatically writes a report of what happened on site today",
    desc: language === "ko"
      ? "VLM(Vision Language Model) 엔진이 오늘의 감지 이벤트와 영상을 분석하여 자연어 안전 평가 보고서를 자동으로 작성합니다. 발주처 제출, 내부 보고, 법적 기록을 모두 커버합니다. 관리자는 검토하고 승인만 하면 됩니다."
      : "The VLM (Vision Language Model) engine analyzes today's detection events and footage to auto-generate a natural-language safety report—covering client submissions, internal reporting, and legal records. Managers just review and approve.",
    bullets: language === "ko"
      ? [
          "VLM AI가 오늘의 감지 이벤트를 자연어로 서술",
          "발주처 제출용 형식으로 자동 포맷팅",
          "위험 등급별 통계 및 반복 위반 패턴 분석",
          "이메일·앱·웹 동시 발행",
        ]
      : [
          "VLM AI describes today's detection events in natural language",
          "Auto-formatted for client submission",
          "Statistics by risk grade and recurring-violation analysis",
          "Published to email, app, and web simultaneously",
        ],
    placeholder: {
      title: language === "ko" ? "VLM AI 자동 생성 안전 평가 보고서 샘플" : "VLM AI Auto-Generated Safety Report Sample",
      description: language === "ko"
        ? "AI가 생성한 자연어 안전 보고서의 실제 출력 화면"
        : "Actual output of an AI-generated natural-language safety report",
    },
    ctaBg: "bg-teal-600 hover:bg-teal-700",
    bgClass: "bg-white",
  },
  {
    id: "relearning",
    reverse: true,
    tag: language === "ko" ? "오탐지 자동 재학습" : "False-Positive Auto-Retraining",
    tagColor: "bg-purple-100 text-purple-700",
    headline: language === "ko"
      ? "처음엔 100%가\n아니어도 됩니다.\n쓸수록 정확해지니까요"
      : "It needn't be\n100% at first—\nit sharpens with use",
    subhead: language === "ko"
      ? "오탐지를 원클릭으로 피드백하면 AI가 스스로 재학습합니다"
      : "One-click feedback on false positives, and the AI retrains itself",
    desc: language === "ko"
      ? "관제 중 오탐지를 발견하면 클릭 하나로 피드백을 보냅니다. AI가 자동으로 재학습하여 우리 현장 고유의 정확한 모델로 진화합니다. 시간이 지날수록 오탐지는 줄고 감지 정확도는 올라갑니다."
      : "Spot a false positive while monitoring and send feedback with one click. The AI retrains automatically, evolving into a model precisely tuned to your site. Over time, false positives drop and accuracy rises.",
    bullets: language === "ko"
      ? [
          "오탐지 원클릭 피드백 전송",
          "수집된 피드백으로 백그라운드 자동 재학습",
          "공정별·카메라별 독립 모델 관리",
          "정확도 향상 추적 대시보드",
        ]
      : [
          "One-click false-positive feedback",
          "Background auto-retraining from collected feedback",
          "Independent model management per process and camera",
          "Accuracy-improvement tracking dashboard",
        ],
    placeholder: {
      title: language === "ko" ? "오탐지 피드백 및 AI 재학습 대시보드" : "False-Positive Feedback & Retraining Dashboard",
      description: language === "ko"
        ? "원클릭 오탐지 피드백 인터페이스와 모델 재학습 진행 상태 화면"
        : "One-click false-positive feedback interface and model retraining progress",
    },
    ctaBg: "bg-purple-600 hover:bg-purple-700",
    bgClass: "bg-gray-50",
  },
];

function SolutionTab({ language }: { language: Lang }) {
  return (
    <>
      {getSolutionFeatures(language).map((feature) => (
        <section key={feature.id} id={feature.id} className={`py-20 ${feature.bgClass}`}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${feature.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
              <div className="flex flex-col justify-center">
                <span className={`inline-block px-3 py-1 text-xs font-semibold ${feature.tagColor} rounded-full mb-4 w-fit`}>
                  {feature.tag}
                </span>
                <h2 className="text-[30px] font-black text-gray-900 whitespace-pre-line leading-tight mb-3">
                  {feature.headline}
                </h2>
                <p className="text-sm font-semibold text-blue-600 mb-3">{feature.subhead}</p>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                <ul className="space-y-3 mb-8">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="mailto:contilab@contilab.co.kr"
                  className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white ${feature.ctaBg} rounded-lg transition-colors w-fit`}
                >
                  {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <ImagePlaceholder title={feature.placeholder.title} description={feature.placeholder.description} aspectRatio="4/3" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

// ───────────── AI 모델 탭 ─────────────

// Basic CTA 경로 — 추후 라이선스 자동화 페이지 생성 시 이 값만 변경
const BASIC_CTA_HREF = "/contact";

const getModelPackages = (language: Lang) => [
  {
    id: "basic",
    tier: "Basic",
    tierColor: "bg-green-100 text-green-800 border-green-300",
    headerBg: "bg-gradient-to-br from-[#052e16] to-[#166534]",
    accentColor: "text-green-600",
    borderColor: "border-green-300",
    badge: language === "ko" ? "기본 모델 무료 제공" : "Basic Models Free",
    freeLabel: undefined,
    headline: language === "ko"
      ? "어느 현장에서나\n즉시 쓸 수 있는\n필수 감지 모델"
      : "Essential detection models\nready to use instantly\non any site",
    target: language === "ko"
      ? "처음 AI 관제를 도입하는 현장, 공통 공정이 대부분인 중소형 현장.\niSafePlatform Core, 관제 뷰어, 필수 AI 모델 5종을 전문 엔지니어가 현장에 직접 무상으로 설치해 드립니다."
      : "For sites adopting AI monitoring for the first time, or small-to-mid sites with mostly common processes.\nOur engineers install iSafePlatform Core, the monitoring viewer, and 5 essential AI models on site, free of charge.",
    valuePoint: language === "ko" ? "튜닝 없이 설치 당일부터 감지 시작" : "Detection starts on install day—no tuning needed",
    models: language === "ko"
      ? [
          { name: "개인 보호구 감지", detail: "안전모 착용 여부 실시간 파악", tags: ["외부비계", "사다리", "크레인", "터파기 등 대부분 공정"] },
          { name: "필수 체결 장비 감지", detail: "안전고리 체결 여부 확인", tags: ["외부비계", "철골 작업"] },
          { name: "안전 인력 배치 감지", detail: "신호수 정상 배치 여부 확인", tags: ["고소작업대", "타워크레인", "지게차 등 장비 운용"] },
          { name: "장비·근로자 충돌 방지", detail: "장비-작업자 간 안전거리 최소 유지 범위 파악", tags: ["터파기", "백호", "지게차"] },
          { name: "현장 기본 안전 수칙", detail: "지게차 제한속도 준수, 소화기 비치 여부", tags: ["물류 및 화기 작업"] },
        ]
      : [
          { name: "PPE Detection", detail: "Real-time helmet-wearing check", tags: ["Scaffolding", "Ladder", "Crane", "Excavation & most processes"] },
          { name: "Essential Fastening Equipment", detail: "Safety-hook fastening check", tags: ["Scaffolding", "Steel framing"] },
          { name: "Safety Personnel Placement", detail: "Signaler placement check", tags: ["Aerial platform", "Tower crane", "Forklift & equipment ops"] },
          { name: "Equipment–Worker Collision Prevention", detail: "Monitors minimum safe distance between equipment and workers", tags: ["Excavation", "Backhoe", "Forklift"] },
          { name: "Site Basic Safety Rules", detail: "Forklift speed-limit compliance, fire-extinguisher presence", tags: ["Logistics & hot work"] },
        ],
    cta: language === "ko" ? "무료 방문 설치 신청" : "Request Free On-Site Install",
    ctaHref: BASIC_CTA_HREF,
  },
  {
    id: "pro",
    tier: "Pro",
    tierColor: "bg-blue-600 text-white border-blue-600",
    headerBg: "bg-gradient-to-br from-[#0c2340] to-[#1d6fa4]",
    accentColor: "text-blue-600",
    borderColor: "border-blue-300",
    badge: language === "ko" ? "기본+특화 패키지" : "Basic + Specialized",
    freeLabel: undefined,
    headline: language === "ko"
      ? "크레인 양중 중\n하방에 사람이 들어가는 것,\nBasic으로는 못 잡습니다"
      : "A person stepping under\na crane lift—Basic alone\ncan't catch that",
    target: language === "ko"
      ? "타워크레인·고소작업 등 특수 공정이 포함된 중대형 현장"
      : "Mid-to-large sites with special processes like tower cranes and aerial work",
    valuePoint: language === "ko"
      ? "Basic 전체 포함 + 복합 행동 분석·공정별 전문 모델 추가"
      : "Includes all of Basic + complex behavior analysis and process-specific models",
    models: language === "ko"
      ? [
          { name: "중장비 디테일 감지", detail: "전도방지·침하방지 장치 정상 설치 여부", tags: ["사다리", "이동식 비계", "크레인", "펌프카"] },
          { name: "복합 행동·상태 인식", detail: "비계 이상 오르기, 불안전 자재 밟기 행동 감지", tags: ["외부비계", "고소작업"] },
          { name: "고위험 고소작업 특화", detail: "고소작업대 3인 이상 탑승, 탑승 중 주행 이동 감지", tags: ["고소작업대", "차량 탑재형"] },
          { name: "크레인·양중 특화", detail: "낙하구역 내 작업자 진입 통제, 3초 정지 룰 준수 확인", tags: ["이동식 크레인", "타워크레인"] },
          { name: "가설구조물·환경 안전", detail: "외부비계 상하부 동시작업 통제, 철근캡·개구부 덮개·안전난간 설치 확인", tags: ["외부비계", "개구부", "철근"] },
        ]
      : [
          { name: "Heavy Equipment Detail Detection", detail: "Checks proper installation of anti-overturn and anti-subsidence devices", tags: ["Ladder", "Mobile scaffold", "Crane", "Pump car"] },
          { name: "Complex Behavior & State Recognition", detail: "Detects abnormal scaffold climbing and stepping on unsafe materials", tags: ["Scaffolding", "Aerial work"] },
          { name: "High-Risk Aerial Work", detail: "Detects 3+ riders on an aerial platform and travel while occupied", tags: ["Aerial platform", "Vehicle-mounted"] },
          { name: "Crane & Lifting", detail: "Controls worker entry into drop zones, verifies the 3-second stop rule", tags: ["Mobile crane", "Tower crane"] },
          { name: "Temporary Structure & Environment", detail: "Controls simultaneous work above/below scaffolds; checks rebar caps, opening covers, guardrails", tags: ["Scaffolding", "Openings", "Rebar"] },
        ],
    cta: language === "ko" ? "Pro 패키지 문의" : "Inquire About Pro",
    ctaHref: "mailto:contilab@contilab.co.kr",
    popular: true,
  },
  {
    id: "custom",
    tier: "Custom",
    tierColor: "bg-orange-500 text-white border-orange-500",
    headerBg: "bg-gradient-to-br from-[#7c2d12] to-[#ea580c]",
    accentColor: "text-orange-600",
    borderColor: "border-orange-200",
    badge: language === "ko" ? "맞춤 제작 패키지" : "Custom-Built Package",
    freeLabel: undefined,
    headline: language === "ko"
      ? "다른 현장에서\n학습한 AI는\n우리 현장에 맞지 않습니다"
      : "AI trained on\nother sites won't\nfit your site",
    target: language === "ko"
      ? "특수 장비·자재를 보유한 대형 건설사, 자체 안전 내규가 있는 엔터프라이즈 현장"
      : "Large contractors with special equipment/materials and enterprise sites with their own safety rules",
    valuePoint: language === "ko"
      ? "현장 실측 데이터로 처음부터 학습, 전담 엔지니어 지속 관리"
      : "Trained from scratch on your site's measured data, with dedicated ongoing engineer support",
    models: language === "ko"
      ? [
          { name: "커스텀 장비·자재 데이터셋 학습", detail: "기성 모델로 탐지 불가한 특수 시공 자재, 자체 제작 인양박스, 규격 외 중장비 정밀 학습", tags: ["엔터프라이즈 전용"] },
          { name: "현장 전용 복합 룰 베이스", detail: "특정 구역에 장비 2대·근로자 3명 이상 동시 진입 시에만 알람 발생 등 다중 조건 맞춤 로직", tags: ["엔터프라이즈 전용"] },
          { name: "밀착형 오탐지 보정 파이프라인", detail: "역광, 특수 조명, 분진, 특이 카메라 화각 등 현장 고유 환경 변수에 완전 동기화", tags: ["전담 엔지니어 관리"] },
          { name: "지속 파인튜닝 지원", detail: "전담 엔지니어가 오탐지 데이터를 지속 필터링하고 백엔드 모델 가중치 업데이트 유지", tags: ["전담 엔지니어 관리"] },
        ]
      : [
          { name: "Custom Equipment/Material Dataset Training", detail: "Precision training for special materials, custom lifting boxes, and non-standard equipment off-the-shelf models can't detect", tags: ["Enterprise only"] },
          { name: "Site-Specific Complex Rule Base", detail: "Multi-condition custom logic, e.g., alarm only when 2+ machines and 3+ workers enter a zone together", tags: ["Enterprise only"] },
          { name: "Hands-On False-Positive Correction", detail: "Fully synced to site-specific variables like backlight, special lighting, dust, and unusual camera angles", tags: ["Dedicated engineer"] },
          { name: "Continuous Fine-Tuning Support", detail: "A dedicated engineer continuously filters false-positive data and maintains backend model weight updates", tags: ["Dedicated engineer"] },
        ],
    cta: language === "ko" ? "Custom 패키지 문의" : "Inquire About Custom",
    ctaHref: "mailto:contilab@contilab.co.kr",
  },
];

function ModelTab({ language }: { language: Lang }) {
  const [openPackage, setOpenPackage] = useState<string>("pro");
  const modelPackages = getModelPackages(language);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "AI 모델 패키지" : "AI Model Packages"}
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {language === "ko" ? (
              <>현장 규모와 공정에 맞는<br className="hidden sm:block" /> AI 모델 패키지를 선택하세요</>
            ) : (
              <>Choose the AI model package<br className="hidden sm:block" /> that fits your site and processes</>
            )}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {language === "ko"
              ? "단순 객체 인식부터 복합 행동 분석, 현장 맞춤 학습까지. 116개 AI 디텍터를 3단계로 구조화했습니다."
              : "From simple object recognition to complex behavior analysis and site-specific training—116 AI detectors structured into 3 tiers."}
          </p>
        </div>

        {/* Package cards — outer wrapper */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-5 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {modelPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setOpenPackage(openPackage === pkg.id ? "" : pkg.id)}
              className={`rounded-2xl border-2 ${pkg.borderColor} overflow-hidden relative cursor-pointer select-none transition-shadow hover:shadow-lg ${pkg.popular ? "shadow-xl" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {language === "ko" ? "추천" : "Popular"}
                </div>
              )}

              {/* Header */}
              <div className={`${pkg.headerBg} px-6 pt-6 pb-8`}>
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${pkg.tierColor} border`}>
                    {pkg.badge}
                  </span>
                  {pkg.freeLabel && (
                    <span className="inline-block px-3 py-1 text-xs font-black rounded-full bg-green-400 text-green-950">
                      {pkg.freeLabel}
                    </span>
                  )}
                </div>
                <h3 className="text-[22px] font-black text-white whitespace-pre-line leading-tight mb-3">
                  {pkg.headline}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed whitespace-pre-line">{pkg.target}</p>
              </div>

              {/* Value point */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-start gap-2">
                  <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className={`text-sm font-semibold ${pkg.accentColor}`}>{pkg.valuePoint}</p>
                </div>
              </div>

              {/* Model list */}
              <div className="px-6 py-5">
                {/* Toggle hint row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">
                    {language === "ko" ? `포함 AI 모델 (${pkg.models.length}개)` : `Included AI Models (${pkg.models.length})`}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openPackage === pkg.id ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {openPackage === pkg.id && (
                  <ul className="space-y-4 mb-4 pt-2 border-t border-gray-100">
                    {pkg.models.map((model) => (
                      <li key={model.name} className="pt-3">
                        <p className="text-base font-bold text-gray-900 mb-1">{model.name}</p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-2">{model.detail}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {model.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {pkg.ctaHref?.startsWith("/") ? (
                  <Link
                    href={pkg.ctaHref}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors border bg-green-500 text-white border-green-500 hover:bg-green-600"
                  >
                    {pkg.cta}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <a
                    href={pkg.ctaHref}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                      pkg.popular
                        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                        : `border-current ${pkg.accentColor} hover:bg-gray-50`
                    }`}
                  >
                    {pkg.cta}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
          <p className="text-sm text-blue-700 font-semibold mb-1">
            {language === "ko" ? "패키지 선택이 어려우신가요?" : "Not sure which package?"}
          </p>
          <p className="text-sm text-blue-600">
            {language === "ko"
              ? "현장 규모와 공정 특성을 공유해 주시면 ConTILab 엔지니어가 직접 적합한 패키지를 추천해 드립니다."
              : "Share your site scale and process details, and a ConTILab engineer will recommend the right package."}
          </p>
          <a
            href="mailto:contilab@contilab.co.kr"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
          >
            {language === "ko" ? "패키지 추천 받기" : "Get a Recommendation"}
          </a>
        </div>
      </div>
    </section>
  );
}

// ───────────── 디바이스 탭 ─────────────

const getHardwareProducts = (language: Lang) => [
  {
    name: language === "ko" ? "온디바이스 AI 카메라" : "On-Device AI Camera",
    nameEn: "On-Device AI Camera",
    badge: language === "ko" ? "설치 간편" : "Easy Install",
    badgeColor: "bg-green-100 text-green-700",
    channels: language === "ko" ? "카메라 단독" : "Camera-only",
    target: language === "ko" ? "별도 AI PC 없이 즉시 도입이 필요한 모든 현장" : "Any site needing instant deployment without a separate AI PC",
    headline: language === "ko" ? "카메라 자체에서 AI가 분석합니다" : "AI analyzes right inside the camera",
    desc: language === "ko"
      ? "NPU 모듈이 내장된 AI 카메라. 별도의 AI 연산 PC 없이 카메라 단에서 직접 AI 분석을 수행하고, 분석 결과만 iSafePlatform으로 전송합니다. 네트워크 대역폭을 최소화하면서 즉시 관제를 시작할 수 있습니다."
      : "An AI camera with a built-in NPU module. It runs AI analysis directly in the camera without a separate compute PC and sends only the results to iSafePlatform—minimizing bandwidth while starting monitoring immediately.",
    features: language === "ko"
      ? [
          "NPU 모듈 내장 — 별도 AI PC 불필요",
          "카메라 단 실시간 AI 분석 처리",
          "분석 결과만 플랫폼 전송 (대역폭 절약)",
          "기존 CCTV 교체 방식으로 간편 도입",
        ]
      : [
          "Built-in NPU module—no separate AI PC",
          "Real-time AI analysis at the camera",
          "Sends only results to the platform (bandwidth-saving)",
          "Easy deployment by replacing existing CCTV",
        ],
    iconBg: "bg-green-700",
    image: "/images/on-device.png",
  },
  {
    name: language === "ko" ? "AI 엣지 박스" : "AI Edge Box",
    nameEn: "AI Edge Box",
    badge: language === "ko" ? "중소현장" : "Small-Mid Site",
    badgeColor: "bg-blue-100 text-blue-700",
    channels: language === "ko" ? "최대 10CH" : "Up to 10CH",
    target: language === "ko" ? "기존 CCTV를 그대로 활용하는 중소형 현장" : "Small-to-mid sites reusing existing CCTV",
    headline: language === "ko" ? "기존 CCTV 그대로, 랜선만 연결하세요" : "Keep your CCTV—just plug in a LAN cable",
    desc: language === "ko"
      ? "현장에 이미 설치된 CCTV에 랜선으로 연결하는 소형 AI 분석 장비. 별도의 AI 연산 PC 없이 최대 10채널 영상을 NPU로 분석하고 결과를 iSafePlatform으로 전송합니다."
      : "A compact AI analysis device that connects via LAN to your existing CCTV. It analyzes up to 10 channels on its NPU without a separate compute PC and sends results to iSafePlatform.",
    features: language === "ko"
      ? [
          "기존 설치·운영 중인 CCTV에 즉시 적용",
          "랜선 연결만으로 설치 완료",
          "NPU 기반 — 최대 10채널 동시 AI 분석",
          "별도 AI 연산 PC 불필요",
        ]
      : [
          "Works instantly with already-installed CCTV",
          "Installed with just a LAN connection",
          "NPU-based—up to 10 channels analyzed at once",
          "No separate AI compute PC needed",
        ],
    iconBg: "bg-blue-700",
    image: "/images/edge-ai.png",
  },
  {
    name: language === "ko" ? "멀티채널 NPU PC 서버" : "Multi-Channel NPU Server",
    nameEn: "Multi-Channel NPU Server",
    badge: language === "ko" ? "대형현장" : "Large Site",
    badgeColor: "bg-orange-100 text-orange-700",
    channels: "100CH+",
    target: language === "ko" ? "대형 건설사, 100대 이상 CCTV를 운영하는 현장" : "Large contractors operating 100+ CCTVs",
    headline: language === "ko" ? "100채널 이상 CCTV를 한 서버로 분석합니다" : "Analyze 100+ CCTV channels on a single server",
    desc: language === "ko"
      ? "NPU 기반 고성능 PC 서버를 현장에 구축해 100채널 이상의 대규모 CCTV를 동시에 AI 분석합니다. 대형 건설사의 멀티 현장 통합 관제 및 대용량 영상 처리에 최적화되어 있습니다."
      : "Deploy a high-performance NPU-based PC server on site to analyze 100+ CCTV channels simultaneously—optimized for large contractors' multi-site monitoring and high-volume video processing.",
    features: language === "ko"
      ? [
          "NPU 기반 고성능 서버 아키텍처",
          "100채널 이상 대용량 동시 AI 분석",
          "대형 건설사 멀티 현장 통합 관제",
          "온프레미스 또는 클라우드 구축 모두 지원",
        ]
      : [
          "High-performance NPU-based server architecture",
          "Large-scale simultaneous AI analysis of 100+ channels",
          "Integrated multi-site monitoring for large contractors",
          "Supports both on-premise and cloud deployment",
        ],
    iconBg: "bg-orange-700",
    image: "/images/Multi channel NPU server.png",
  },
];

function DeviceTab({ language }: { language: Lang }) {
  const hardwareProducts = getHardwareProducts(language);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "엣지 AI 하드웨어" : "Edge AI Hardware"}
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {language === "ko" ? "현장 규모에 맞는 엣지 AI 디바이스를 선택하세요" : "Choose the edge AI device that fits your site scale"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {language === "ko"
              ? "카메라 한 대부터 100채널 이상 대형 현장까지. 기존 CCTV 활용 여부와 현장 규모에 맞는 장비를 선택하세요. 모두 동일한 iSafeGuard 플랫폼으로 관제합니다."
              : "From a single camera to large sites with 100+ channels. Choose equipment based on whether you reuse existing CCTV and your site scale—all monitored on the same iSafeGuard platform."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hardwareProducts.map((product) => (
            <div key={product.nameEn} className="rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all overflow-hidden group flex flex-col">
              {"image" in product && product.image ? (
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image as string}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold ${product.badgeColor} rounded-full z-10 shadow-sm`}>
                    {product.badge}
                  </span>
                </div>
              ) : (
                <div className={`${product.iconBg} aspect-[4/3] flex flex-col items-center justify-center gap-3 relative`}>
                  <span className="text-5xl">🖥️</span>
                  <p className="text-white/60 text-sm font-medium">{product.nameEn}</p>
                  <span className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold ${product.badgeColor} rounded-full`}>
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">{product.channels}</span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-3">{product.headline}</p>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  {language === "ko" ? "적합한 현장: " : "Best for: "}{product.target}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{product.desc}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:contilab@contilab.co.kr"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-xl transition-colors mt-auto"
                >
                  {language === "ko" ? "이 제품 문의하기" : "Inquire About This Product"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Device comparison note */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {(language === "ko"
              ? [
                  { label: "AI PC 없이 카메라 교체만으로 도입", value: "온디바이스 AI 카메라" },
                  { label: "기존 CCTV 활용 · 10채널 이하 중소현장", value: "AI 엣지 박스" },
                  { label: "100채널 이상 대형 건설사", value: "멀티채널 NPU PC 서버" },
                ]
              : [
                  { label: "Deploy by just swapping cameras—no AI PC", value: "On-Device AI Camera" },
                  { label: "Reuse existing CCTV · small-mid sites up to 10CH", value: "AI Edge Box" },
                  { label: "Large contractors with 100+ channels", value: "Multi-Channel NPU Server" },
                ]).map((item) => (
              <div key={item.value}>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-base font-black text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            {language === "ko"
              ? "현장 환경이 명확하지 않다면 ConTILab 엔지니어가 직접 현장을 방문하여 최적 구성을 제안합니다."
              : "If your site conditions are unclear, a ConTILab engineer will visit and propose the optimal setup."}
          </p>
        </div>
      </div>
    </section>
  );
}

// ───────────── 현장 실증 탭 ─────────────

interface DeploymentMedia {
  src: string;   // gif 경로 (추후 채움)
  caption: string;
}

interface DeploymentCase {
  image: string;
  name: string;
  category?: string;            // 현장 유형 (예: 공공기관, 대형 건설사)
  summary?: string;             // 현장 개요 설명 (추후 채움)
  models?: string[];            // 적용 AI 모델 (추후 채움)
  media?: DeploymentMedia[];    // 실증 GIF + 설명 (추후 채움)
}

const getDeploymentCases = (language: Lang): DeploymentCase[] => [
  { image: "/images/accounts/SK ecoplant.png", name: language === "ko" ? "SK에코플랜트" : "SK ecoplant" },
  { image: "/images/accounts/DLE&C.png", name: "DL E&C" },
  { image: "/images/accounts/Nexilis.png", name: "SK Nexilis" },
  { image: "/images/accounts/Korea Expressway Corporation.png", name: language === "ko" ? "한국도로공사" : "Korea Expressway Corp." },
  { image: "/images/accounts/HDC I&CONS Mixed-Use Development.png", name: language === "ko" ? "HDC I&CONS 복합개발" : "HDC I&CONS Mixed-Use" },
  { image: "/images/accounts/Jinhae Harbor.png", name: language === "ko" ? "진해항" : "Jinhae Harbor" },
  { image: "/images/accounts/National Assembly Boulevard, Seoul.png", name: language === "ko" ? "국회대로 (서울)" : "National Assembly Blvd, Seoul" },
  { image: "/images/accounts/Highway Express.png", name: language === "ko" ? "고속도로 현장" : "Highway Site" },
  { image: "/images/accounts/Approtium.png", name: "APPROTIUM" },
  { image: "/images/accounts/PIC Grobal.png", name: "PIC Global" },
];

function DeploymentTab({ language }: { language: Lang }) {
  const [selected, setSelected] = useState<DeploymentCase | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "현장 실증" : "Field Validation"}
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {language === "ko" ? "실제 현장에서 검증된 iSafeGuard" : "iSafeGuard, validated on real sites"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {language === "ko"
              ? "공공기관부터 대형 건설사 현장까지, 현장별로 적용한 AI 모델과 실증 영상으로 어떻게 운영되고 있는지 보여드립니다."
              : "From public agencies to large contractor sites—see how it operates through the AI models applied and validation footage at each site."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDeploymentCases(language).map((c) => (
            <button
              key={c.image}
              onClick={() => setSelected(c)}
              className="text-left rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all overflow-hidden group flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[15px] font-bold text-gray-900 mb-3">{c.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-gray-400">{language === "ko" ? "현장 실증 보기" : "View Case"}</span>
                  <svg className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 현장 실증 상세 팝업 */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white w-full max-w-[760px] max-h-[88vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col"
            style={{ animation: "fadeSlide 0.25s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-7 pb-5 border-b border-gray-100 flex items-start gap-4">
              <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                <Image src={selected.image} alt={selected.name} fill className="object-cover" sizes="80px" />
              </div>
              <div className="flex-1 pr-8">
                {selected.category && (
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold bg-blue-50 text-blue-600 rounded-full mb-2">
                    {selected.category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">{selected.name}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {language === "ko" ? "iSafeGuard 현장 실증 사례" : "iSafeGuard Field Validation Case"}
                </p>
              </div>
              <button
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors text-xl leading-none"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
            </div>

            {/* Body (scrollable) */}
            <div className="p-7 overflow-y-auto">
              {/* 현장 개요 */}
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                {language === "ko" ? "현장 개요" : "Site Overview"}
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-7">
                {selected.summary ?? (language === "ko" ? "현장 개요 설명이 들어갈 영역입니다. (준비 중)" : "Site overview description will go here. (Coming soon)")}
              </p>

              {/* 적용 AI 모델 */}
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                {language === "ko" ? "적용 AI 모델" : "Applied AI Models"}
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {selected.models && selected.models.length > 0 ? (
                  selected.models.map((m) => (
                    <span key={m} className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-lg">
                      {m}
                    </span>
                  ))
                ) : (
                  <span className="px-3 py-1 text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-lg">
                    {language === "ko" ? "적용 모델 목록 준비 중" : "Model list coming soon"}
                  </span>
                )}
              </div>

              {/* 실증 영상 */}
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                {language === "ko" ? "실증 영상" : "Validation Footage"}
              </p>
              {selected.media && selected.media.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selected.media.map((m) => (
                    <figure key={m.src} className="rounded-xl overflow-hidden border border-gray-100">
                      <div className="relative aspect-video bg-gray-900">
                        <img src={m.src} alt={m.caption} className="w-full h-full object-cover" />
                      </div>
                      <figcaption className="px-3 py-2 text-xs text-gray-500">{m.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 text-gray-300"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs">{language === "ko" ? "실증 GIF 준비 중" : "Validation GIF coming soon"}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ───────────── Main Export ─────────────

export default function ISafeGuardTabs({ language = "ko" }: { language?: Lang }) {
  const [activeTab, setActiveTab] = useState<TabId>("solution");
  const tabs = getTabs(language);

  return (
    <>
      {/* Sticky Tab Navigation */}
      <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                }`}
              >
                {tab.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                }`}>
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "solution" && <SolutionTab language={language} />}
      {activeTab === "model" && <ModelTab language={language} />}
      {activeTab === "device" && <DeviceTab language={language} />}
      {activeTab === "deployment" && <DeploymentTab language={language} />}
    </>
  );
}
