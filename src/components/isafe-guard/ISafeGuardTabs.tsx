"use client";

import { useState, useEffect, useRef } from "react";
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
      ? "AI가 위험을 찾고,\n관리자는 대응에 집중합니다"
      : "AI finds the risks,\nand managers focus on responding.",
    subhead: language === "ko"
      ? "iSafeGuard는 현장 영상을 실시간 분석하여 위험상황만 선별하고 즉시 알려줍니다"
      : "iSafeGuard analyzes site footage in real time to filter hazard situations and notify you immediately.",
    desc: language === "ko"
      ? "반복적인 모니터링은 AI가 수행하고, 관리자는 중요한 의사결정에 집중할 수 있습니다."
      : "AI performs repetitive monitoring, allowing managers to focus on important decision-making.",
    bullets: language === "ko"
      ? [
          "100+ 채널 통합 관제",
          "실시간 위험 감지 및 알림",
          "이벤트 영상 자동 기록",
          "현장 위험도 분석 및 레포트 제공",
        ]
      : [
          "Integrated monitoring for 100+ channels",
          "Real-time hazard detection and notifications",
          "Automatic recording of event videos",
          "Provision of site risk analysis and reports",
        ],
    placeholder: {
      title: language === "ko" ? "iSafeGuard 100+채널 웹 관제 화면" : "iSafeGuard 100+ Channel Web Monitoring",
      description: language === "ko"
        ? "브라우저에서 100+개 카메라를 동시에 모니터링하는 실제 대시보드 스크린샷"
        : "Actual dashboard monitoring 100+ cameras at once in a browser",
    },
    gif: "/gif/detection.gif",
    ctaBg: "bg-blue-600 hover:bg-blue-700",
    bgClass: "bg-white",
  },
  {
    id: "danger-zone",
    reverse: true,
    tag: language === "ko" ? "AutoPTZ 기능" : "AutoPTZ Feature",
    tagColor: "bg-indigo-100 text-indigo-700",
    headline: language === "ko"
      ? "사람이 카메라를 조작하는 것이 아니라,\nAI가 스스로 현장을 살펴봅니다"
      : "AI observes the site on its own,\nrather than people operating the cameras",
    subhead: language === "ko"
      ? "iSafeGuard AutoPTZ는 사전 정의된 위험작업 구간에 대해 자동으로 카메라를 회전·확대·추적하여 가장 중요한 장면을 보여줍니다."
      : "iSafeGuard AutoPTZ automatically rotates, zooms in, and tracks pre-defined high-risk work sections to show the most important scenes.",
    desc: language === "ko"
      ? "관리자는 수많은 화면을 직접 조작할 필요 없이 실제 위험에 집중할 수 있습니다."
      : "Managers can focus on actual risks without the need to manually operate numerous screens.",
    bullets: language === "ko"
      ? [
          "자동 추적 (Tracking)",
          "자동 확대 (Zoom-In)",
          "자동 순찰 (Patrol)",
          "위험구역 자동 관찰",
          "AI 기반 PTZ 최적 제어",
        ]
      : [
          "Automatic tracking",
          "Automatic zoom-in",
          "Automatic patrol",
          "Automatic observation of hazard zones",
          "AI-based PTZ optimal control",
        ],
    placeholder: {
      title: language === "ko" ? "마우스 드래그 위험구역 설정 인터페이스" : "Mouse-Drag Hazard Zone Setup",
      description: language === "ko"
        ? "관리자가 화면 위에 직접 위험구역을 그리는 실제 설정 화면"
        : "Actual setup screen where a manager draws hazard zones directly",
    },
    gifs: [
      { src: "/gif/한국도로공사-고소작업.gif", ms: 9000 },
      { src: "/gif/한국도로공사-양중작업.gif", ms: 26000 },
      { src: "/gif/한국도로공사-스케줄러.gif", ms: 19000 },
    ],
    ctaBg: "bg-indigo-600 hover:bg-indigo-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "vlm-report",
    reverse: false,
    tag: language === "ko" ? "VLM 자동 보고서" : "VLM Auto Reports",
    tagColor: "bg-teal-100 text-teal-700",
    headline: language === "ko"
      ? "현장을 분석하고,\n보고서까지 스스로 작성합니다"
      : "AI analyzes the site\nand even writes the reports itself.",
    subhead: language === "ko"
      ? "iSafeGuard VLM AI는 오늘 현장에서 발생한 위험상황과 안전활동을 분석하여 자연어 기반 안전 레포트를 자동 생성합니다"
      : "iSafeGuard VLM AI analyzes the hazard situations and safety activities that occurred on-site today to automatically generate natural-language-based safety reports.",
    desc: language === "ko"
      ? "반복적인 보고서 작성은 AI가 수행하고, 관리자는 중요한 의사결정에 집중할 수 있습니다."
      : "AI handles repetitive report writing, allowing managers to focus on important decision-making.",
    bullets: language === "ko"
      ? [
          "오늘의 위험 이벤트 자동 요약",
          "현장 위험도 및 안전수준 평가",
          "반복 위반 및 주요 이슈 자동 분석",
          "보고서 자동 생성 및 공유",
        ]
      : [
          "Automatic summary of today's hazard events",
          "Assessment of site risk levels and safety standards",
          "Automatic analysis of recurring violations and major issues",
          "Automatic generation and sharing of reports",
        ],
    placeholder: {
      title: language === "ko" ? "VLM AI 자동 생성 안전 평가 보고서 샘플" : "VLM AI Auto-Generated Safety Report Sample",
      description: language === "ko"
        ? "AI가 생성한 자연어 안전 보고서의 실제 출력 화면"
        : "Actual output of an AI-generated natural-language safety report",
    },
    gif: "/gif/vlm%20report.gif",
    ctaBg: "bg-teal-600 hover:bg-teal-700",
    bgClass: "bg-white",
  },
];

function GifCycler({ items, alt }: { items: { src: string; ms: number }[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    // 현재 gif를 1회 재생할 시간만큼 보여준 뒤 다음으로 전환
    const t = setTimeout(() => setIdx((i) => (i + 1) % items.length), items[idx].ms);
    return () => clearTimeout(t);
  }, [idx, items]);
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-900 shadow-sm relative aspect-video">
      <img src={encodeURI(items[idx].src)} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

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
                <p className="text-[18px] font-semibold text-blue-600 mb-3">{feature.subhead}</p>
                <p className="text-[19px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                <ul className="space-y-3 mb-8">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[18px] text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {"gifs" in feature && feature.gifs ? (
                <GifCycler items={feature.gifs} alt={feature.placeholder.title} />
              ) : "gif" in feature && feature.gif ? (
                <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-900 shadow-sm aspect-video">
                  <img src={feature.gif} alt={feature.placeholder.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <ImagePlaceholder title={feature.placeholder.title} description={feature.placeholder.description} aspectRatio="4/3" />
              )}
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

type ModelItem = {
  name: string;
  detail: string;
  tags: string[];
  // 특화(Pro) 패키지 전용 — 스토어형 카드 렌더링에 사용
  level?: string;        // 위험도 배지 (고위험 / 필수 / 범용)
  levelColor?: string;   // 배지 색상 클래스
  items?: string[];      // 감지 항목 (체크 그리드)
  scope?: string;        // 적용 공종
  desc?: string;         // 상세 설명 (모달)
};

type ModelPackage = {
  id: string;
  tier: string;
  tierColor: string;
  headerBg: string;
  accentColor: string;
  borderColor: string;
  badge: string;
  freeLabel?: string;
  headline: string;
  target: string;
  valuePoint: string;
  models: ModelItem[];
  cta: string;
  ctaHref: string;
  ctaBg: string;       // 신청/문의 버튼 색상 (티어별)
  popular?: boolean;
};

const getModelPackages = (language: Lang): ModelPackage[] => [
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
      ? "처음 AI 관제를 도입하는 현장, 공통 공정이 대부분인 중소형 현장.\niSafePlatform Core, 관제 뷰어, 필수 AI 모델 2종을 전문 엔지니어가 현장에 직접 무상으로 설치해 드립니다."
      : "For sites adopting AI monitoring for the first time, or small-to-mid sites with mostly common processes.\nOur engineers install iSafePlatform Core, the monitoring viewer, and 2 essential AI models on site, free of charge.",
    valuePoint: language === "ko" ? "튜닝 없이 설치 당일부터 감지 시작" : "Detection starts on install day—no tuning needed",
    models: language === "ko"
      ? [
          { name: "개인 보호구 감지", detail: "안전모 착용 여부 실시간 파악", tags: ["외부비계", "사다리", "크레인", "터파기 등 대부분 공정"] },
          { name: "안전 인력 배치 감지", detail: "신호수 정상 배치 여부 확인", tags: ["고소작업대", "타워크레인", "지게차 등 장비 운용"] },
        ]
      : [
          { name: "PPE Detection", detail: "Real-time helmet-wearing check", tags: ["Scaffolding", "Ladder", "Crane", "Excavation & most processes"] },
          { name: "Safety Personnel Placement", detail: "Signaler placement check", tags: ["Aerial platform", "Tower crane", "Forklift & equipment ops"] },
        ],
    cta: language === "ko" ? "무료 방문 설치 신청" : "Request Free On-Site Install",
    ctaHref: BASIC_CTA_HREF,
    ctaBg: "bg-green-600 hover:bg-green-700 shadow-green-600/20",
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
      ? "AI 모델 스토어"
      : "AI Model Store",
    target: language === "ko"
      ? "현장의 공종과 작업환경에 맞는 AI 모델을 선택하여 쉽고 빠르게 적용할 수 있습니다."
      : "Select the AI models that fit your site's processes and work environment, and apply them quickly and easily.",
    valuePoint: language === "ko"
      ? "Basic 전체 포함 + 복합 행동 분석·공정별 전문 모델 추가"
      : "Includes all of Basic + complex behavior analysis and process-specific models",
    models: language === "ko"
      ? [
          {
            name: "원경 안전관제 AI",
            detail: "중장비-근로자 충돌방지",
            level: "범용",
            levelColor: "bg-green-500 text-white",
            items: ["근접거리", "위험구역 진입", "안전모 착용", "침입 감지"],
            scope: "전체",
            tags: ["터파기", "장비 운용", "공통 공정"],
            desc: "CCTV·원격 카메라 영상만으로 넓은 현장 전반의 위험을 한 번에 관제합니다. 중장비와 근로자 간 근접 거리를 실시간으로 계산해 충돌 위험을 사전 경보하고, 사전에 지정한 위험구역 진입과 안전모 미착용을 동시에 감지합니다. 별도 디바이스 없이 기존 카메라에 즉시 적용할 수 있어 도입 부담이 가장 낮은 모델입니다.",
          },
          {
            name: "외부비계 작업 AI",
            detail: "추락 예방 패키지",
            level: "고위험",
            levelColor: "bg-orange-500 text-white",
            items: ["안전고리 체결", "안전모 착용", "상하 동시작업", "비계 무단등반"],
            scope: "비계",
            tags: ["외부비계", "쌍줄비계"],
            desc: "외부비계는 추락 재해가 가장 빈번한 공종입니다. 작업자의 안전고리 체결 여부와 안전모 착용을 프레임 단위로 확인하고, 상·하부 동시작업이나 비계 무단 등반처럼 추락으로 직결되는 불안전 행동을 즉시 감지해 경보합니다.",
          },
          {
            name: "사다리 작업 AI",
            detail: "사다리 안전수칙 패키지",
            level: "고위험",
            levelColor: "bg-orange-500 text-white",
            items: ["작업높이 측정", "2인 1조 확인", "아웃트리거 확인"],
            scope: "전체",
            tags: ["A형 사다리", "연장 사다리"],
            desc: "사다리 작업 시 위험 작업 높이를 자동 측정하고, 2인 1조 안전수칙 준수와 아웃트리거 고정 상태를 확인합니다. 간단해 보이지만 사망사고 비중이 높은 사다리 작업의 핵심 수칙을 자동으로 점검합니다.",
          },
          {
            name: "이동식 비계 AI",
            detail: "이동식 비계 안전 패키지",
            level: "고위험",
            levelColor: "bg-orange-500 text-white",
            items: ["탑승인원 확인", "아웃트리거 확인", "이동 중 탑승"],
            scope: "비계",
            tags: ["이동식 비계", "BT 비계"],
            desc: "이동식(BT) 비계의 적정 탑승 인원과 아웃트리거 전개 상태를 확인하고, 작업자가 탑승한 채 비계를 이동시키는 가장 위험한 행동을 감지해 전도·추락 사고를 예방합니다.",
          },
          {
            name: "시저리프트 AI",
            detail: "고소작업대 안전 패키지",
            level: "고위험",
            levelColor: "bg-orange-500 text-white",
            items: ["탑승상태 이동", "위험행동 감지", "안전대 체결"],
            scope: "고소작업대",
            tags: ["시저리프트", "차량 탑재형"],
            desc: "시저리프트·고소작업대에서 작업자가 탑승한 상태로 주행 이동하는 상황과 난간을 넘는 위험 행동을 감지하고, 안전대 체결 여부를 확인해 고소작업대 특유의 추락·협착 위험을 관리합니다.",
          },
          {
            name: "양중 안전 AI",
            detail: "T/C 양중 위험 패키지",
            level: "필수",
            levelColor: "bg-red-600 text-white",
            items: ["양중하부 접근", "작업중지 확인", "신호수 배치", "아웃트리거 확인"],
            scope: "양중 / 크레인",
            tags: ["타워크레인", "이동식 크레인"],
            desc: "크레인 양중 작업 중 인양물 하부로 작업자가 진입하는 순간을 감지해 즉시 경보합니다. 신호수 정상 배치와 작업중지 룰 준수, 이동식 크레인 아웃트리거 전개 상태를 함께 확인해 중량물 낙하 재해를 예방합니다.",
          },
          {
            name: "슬래브 작업 AI",
            detail: "상부작업 안전 패키지",
            level: "고위험",
            levelColor: "bg-orange-500 text-white",
            items: ["단부 접근", "자재 하부 작업", "개구부 덮개", "고소작업대 위험"],
            scope: "슬래브",
            tags: ["슬래브", "데크플레이트"],
            desc: "슬래브·데크플레이트 상부작업에서 단부 접근, 개구부 덮개 미설치, 자재 적재 하부 작업 등 추락·낙하 위험 요인을 종합 감지합니다. 개구부와 단부가 많은 골조 공사 구간의 핵심 안전 모델입니다.",
          },
          {
            name: "지게차 AI",
            detail: "충돌방지 패키지",
            level: "필수",
            levelColor: "bg-red-600 text-white",
            items: ["허용속도 초과", "근로자 근접", "충돌 위험 알림"],
            scope: "장비 / 차량",
            tags: ["지게차", "전동 운반차"],
            desc: "지게차의 현장 내 허용속도 초과 운행을 감지하고, 보행 근로자와의 근접 상황을 실시간으로 판별해 충돌 위험을 운전자와 관제실에 동시 경보합니다. 물류·운반 동선의 충돌 재해를 예방합니다.",
          },
          {
            name: "중장비 AI",
            detail: "협착방지 패키지",
            level: "필수",
            levelColor: "bg-red-600 text-white",
            items: ["신호수 배치", "근접거리 측정", "위험반경 침입"],
            scope: "장비 / 차량",
            tags: ["굴착기", "백호", "펌프카"],
            desc: "굴착기·백호 등 중장비의 회전 반경과 작업 반경 내 근로자 진입을 감지하고, 신호수 배치와 근접 거리를 측정해 협착·충돌 사고를 예방합니다. 장비와 인력이 혼재하는 토공 구간에 필수적입니다.",
          },
          {
            name: "말비계 작업 AI",
            detail: "단부 추락 예방 패키지",
            level: "고위험",
            levelColor: "bg-orange-500 text-white",
            items: ["단부 근접", "위험작업 자세", "작업구역 이탈"],
            scope: "전체",
            tags: ["말비계", "실내 마감"],
            desc: "말비계(우마) 작업 시 단부 근접, 불안정한 작업 자세, 지정 작업구역 이탈을 감지합니다. 실내 마감 공사에서 빈번하지만 관리 사각지대에 놓이기 쉬운 저고도 추락 위험을 보완합니다.",
          },
        ]
      : [
          {
            name: "Remote Monitoring AI",
            detail: "Equipment–worker collision prevention",
            level: "Universal",
            levelColor: "bg-green-500 text-white",
            items: ["Proximity distance", "Danger-zone entry", "Helmet wearing", "Intrusion detection"],
            scope: "All",
            tags: ["Excavation", "Equipment ops", "Common processes"],
            desc: "Monitors hazards across a wide site using only CCTV and remote camera feeds. It calculates the real-time distance between heavy equipment and workers to warn of collision risks in advance, while simultaneously detecting entry into predefined danger zones and missing helmets. It runs on existing cameras with no extra devices, making it the easiest model to adopt.",
          },
          {
            name: "Exterior Scaffold AI",
            detail: "Fall-prevention package",
            level: "High-Risk",
            levelColor: "bg-orange-500 text-white",
            items: ["Safety-hook fastening", "Helmet wearing", "Above/below work", "Unauthorized climbing"],
            scope: "Scaffold",
            tags: ["Exterior scaffold", "Double-row scaffold"],
            desc: "Exterior scaffolding sees the most frequent fall accidents. The model verifies safety-hook fastening and helmet wearing frame by frame, and instantly detects unsafe behaviors that lead directly to falls, such as simultaneous above/below work or unauthorized scaffold climbing.",
          },
          {
            name: "Ladder Work AI",
            detail: "Ladder safety-rule package",
            level: "High-Risk",
            levelColor: "bg-orange-500 text-white",
            items: ["Work-height check", "Two-person rule", "Outrigger check"],
            scope: "All",
            tags: ["A-frame ladder", "Extension ladder"],
            desc: "Automatically measures hazardous working heights on ladders and verifies the two-person safety rule and outrigger fixation. It auto-checks the core rules of ladder work—deceptively simple tasks that account for a high share of fatal accidents.",
          },
          {
            name: "Mobile Scaffold AI",
            detail: "Mobile-scaffold safety package",
            level: "High-Risk",
            levelColor: "bg-orange-500 text-white",
            items: ["Rider count check", "Outrigger check", "Riding while moving"],
            scope: "Scaffold",
            tags: ["Mobile scaffold", "BT scaffold"],
            desc: "Verifies the proper rider count and outrigger deployment on mobile (BT) scaffolds, and detects the most dangerous behavior—moving the scaffold while workers are still aboard—to prevent tip-over and fall accidents.",
          },
          {
            name: "Scissor Lift AI",
            detail: "Aerial-platform safety package",
            level: "High-Risk",
            levelColor: "bg-orange-500 text-white",
            items: ["Movement while boarded", "Risky behavior", "Lanyard fastening"],
            scope: "Aerial platform",
            tags: ["Scissor lift", "Vehicle-mounted"],
            desc: "Detects traveling while workers are aboard a scissor lift or aerial platform and risky behaviors such as leaning over guardrails, and verifies lanyard fastening to manage the fall and pinch hazards specific to aerial platforms.",
          },
          {
            name: "Lifting Safety AI",
            detail: "T/C lifting hazard package",
            level: "Essential",
            levelColor: "bg-red-600 text-white",
            items: ["Approach under lift", "Work-stop check", "Signaler placement", "Outrigger check"],
            scope: "Lifting / Crane",
            tags: ["Tower crane", "Mobile crane"],
            desc: "Detects the instant a worker enters beneath a suspended load during crane lifting and alerts immediately. It also verifies proper signaler placement, work-stop rule compliance, and mobile-crane outrigger deployment to prevent dropped-load accidents.",
          },
          {
            name: "Slab Work AI",
            detail: "Upper-work safety package",
            level: "High-Risk",
            levelColor: "bg-orange-500 text-white",
            items: ["Edge approach", "Work under materials", "Opening covers", "Aerial-platform risk"],
            scope: "Slab",
            tags: ["Slab", "Deck plate"],
            desc: "Comprehensively detects fall and drop hazards in slab and deck-plate upper work—edge approach, missing opening covers, and working beneath stacked materials. It is a core safety model for structural-frame zones with many openings and edges.",
          },
          {
            name: "Forklift AI",
            detail: "Collision-prevention package",
            level: "Essential",
            levelColor: "bg-red-600 text-white",
            items: ["Over speed limit", "Worker proximity", "Collision-risk alert"],
            scope: "Equipment / Vehicle",
            tags: ["Forklift", "Electric cart"],
            desc: "Detects forklifts exceeding the site speed limit and identifies proximity to pedestrian workers in real time, alerting both the driver and the control room of collision risk. It prevents collision accidents along logistics and transport routes.",
          },
          {
            name: "Heavy Equipment AI",
            detail: "Pinch-prevention package",
            level: "Essential",
            levelColor: "bg-red-600 text-white",
            items: ["Signaler placement", "Proximity measurement", "Danger-radius intrusion"],
            scope: "Equipment / Vehicle",
            tags: ["Excavator", "Backhoe", "Pump car"],
            desc: "Detects worker entry into the slewing and working radius of heavy equipment such as excavators and backhoes, and measures signaler placement and proximity to prevent pinch and collision accidents. Essential for earthwork zones where equipment and workers mix.",
          },
          {
            name: "Horse Scaffold AI",
            detail: "Edge fall-prevention package",
            level: "High-Risk",
            levelColor: "bg-orange-500 text-white",
            items: ["Edge approach", "Risky posture", "Leaving work zone"],
            scope: "All",
            tags: ["Horse scaffold", "Interior finishing"],
            desc: "Detects edge approach, unstable working postures, and leaving the designated work zone during horse-scaffold (baby scaffold) work. It covers the low-height fall hazards that are common in interior finishing yet easily fall into management blind spots.",
          },
        ],
    cta: language === "ko" ? "Pro 패키지 문의" : "Inquire About Pro",
    ctaHref: "mailto:contilab@contilab.co.kr",
    ctaBg: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
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
    ctaBg: "bg-orange-500 hover:bg-orange-600 shadow-orange-500/20",
  },
];

// 위/아래 보조 패키지(Basic·Custom)용 컴팩트 카드
function CompactPackageCard({ pkg }: { pkg: ModelPackage }) {
  const isLink = pkg.ctaHref?.startsWith("/");
  const ctaClass = `inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-xl transition-colors shadow-lg ${pkg.ctaBg}`;
  const ctaInner = (
    <>
      {pkg.cta}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </>
  );

  return (
    <div className={`rounded-2xl border-2 ${pkg.borderColor} overflow-hidden bg-white`}>
      {/* Hero (상단) */}
      <div className={`${pkg.headerBg} px-6 sm:px-8 pt-7 pb-6`}>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${pkg.tierColor} border`}>
            {pkg.badge}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white whitespace-pre-line leading-tight mb-2">
          {pkg.headline}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line max-w-2xl">{pkg.target}</p>
      </div>

      {/* Models (하단) */}
      <div className="px-6 sm:px-8 py-6 flex flex-col">
        <div className="flex items-start gap-2 mb-4">
          <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <p className={`text-sm font-semibold ${pkg.accentColor}`}>{pkg.valuePoint}</p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-5">
          {pkg.models.map((model) => (
            <li key={model.name} className="flex items-start gap-2">
              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-sm font-bold text-gray-900">{model.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{model.detail}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex justify-end">
          {isLink ? (
            <Link href={pkg.ctaHref} className={ctaClass}>
              {ctaInner}
            </Link>
          ) : (
            <a href={pkg.ctaHref} className={ctaClass}>
              {ctaInner}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// 모델 카테고리 — 새 모델 추가 시 이 맵에 한 줄만 추가하면 필터 탭에 자동 반영
const CATEGORY_BY_MODEL: Record<string, string> = {
  // ko
  "원경 안전관제 AI": "remote",
  "외부비계 작업 AI": "aerial",
  "사다리 작업 AI": "aerial",
  "이동식 비계 AI": "aerial",
  "시저리프트 AI": "aerial",
  "양중 안전 AI": "lifting",
  "슬래브 작업 AI": "slab",
  "지게차 AI": "equipment",
  "중장비 AI": "equipment",
  "말비계 작업 AI": "etc",
  // en
  "Remote Monitoring AI": "remote",
  "Exterior Scaffold AI": "aerial",
  "Ladder Work AI": "aerial",
  "Mobile Scaffold AI": "aerial",
  "Scissor Lift AI": "aerial",
  "Lifting Safety AI": "lifting",
  "Slab Work AI": "slab",
  "Forklift AI": "equipment",
  "Heavy Equipment AI": "equipment",
  "Horse Scaffold AI": "etc",
};

// 필터 탭 — 향후 확장 시 여기 항목만 늘리면 됨
const getModelCategories = (language: Lang): { key: string; label: string }[] => [
  { key: "all", label: language === "ko" ? "전체" : "All" },
  { key: "remote", label: language === "ko" ? "원경 관제" : "Remote Monitoring" },
  { key: "aerial", label: language === "ko" ? "고소작업" : "Aerial Work" },
  { key: "lifting", label: language === "ko" ? "양중 / 크레인" : "Lifting / Crane" },
  { key: "equipment", label: language === "ko" ? "장비 / 차량" : "Equipment / Vehicle" },
  { key: "slab", label: language === "ko" ? "슬래브 / 상부작업" : "Slab / Upper Work" },
  { key: "etc", label: language === "ko" ? "기타 작업" : "Other Work" },
];

// 가로 드래그 스크롤 훅 (필터 탭이 늘어나면 드래그/스와이프로 탐색)
function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    state.current = { down: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, moved: false };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !state.current.down) return;
    const x = e.pageX - el.offsetLeft;
    const walk = x - state.current.startX;
    if (Math.abs(walk) > 4) state.current.moved = true;
    el.scrollLeft = state.current.scrollLeft - walk;
  };
  const endDrag = () => {
    state.current.down = false;
  };
  // 드래그 직후 발생하는 클릭은 무시 (탭 선택 오작동 방지)
  const didDrag = () => state.current.moved;

  return { ref, onMouseDown, onMouseMove, endDrag, didDrag };
}

// 중앙 강조 — 특화(Pro) 패키지: 스토어형 모델 카드 그리드
function FeaturedProPackage({
  pkg,
  language,
  onSelectModel,
}: {
  pkg: ModelPackage;
  language: Lang;
  onSelectModel: (model: ModelItem) => void;
}) {
  const categories = getModelCategories(language);
  const riskLevels = Array.from(new Set(pkg.models.map((m) => m.level).filter(Boolean))) as string[];
  const [activeCat, setActiveCat] = useState("all");
  const [risk, setRisk] = useState("all");
  const [query, setQuery] = useState("");
  const drag = useDragScroll();

  const q = query.trim().toLowerCase();
  const filtered = pkg.models.filter((m) => {
    const catOk = activeCat === "all" || CATEGORY_BY_MODEL[m.name] === activeCat;
    const riskOk = risk === "all" || m.level === risk;
    const searchOk =
      q === "" ||
      m.name.toLowerCase().includes(q) ||
      m.detail.toLowerCase().includes(q) ||
      (m.items ?? []).some((i) => i.toLowerCase().includes(q)) ||
      m.tags.some((t) => t.toLowerCase().includes(q));
    return catOk && riskOk && searchOk;
  });

  return (
    <div className="rounded-3xl border-2 border-blue-400 overflow-hidden shadow-2xl bg-white relative">
      {/* 강조 헤더 */}
      <div className={`${pkg.headerBg} px-8 pt-8 pb-7 relative`}>
        <div className="absolute top-5 right-6 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
          {language === "ko" ? "가장 많이 선택" : "Most Chosen"}
        </div>
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${pkg.tierColor} border`}>
            {pkg.badge}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white whitespace-pre-line leading-tight mb-3">
          {pkg.headline}
        </h3>
        <p className="text-white/75 text-sm leading-relaxed whitespace-pre-line max-w-2xl">{pkg.target}</p>
        <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm">
          <svg className="w-4 h-4 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm font-semibold text-white">{pkg.valuePoint}</p>
        </div>
      </div>

      {/* 스토어형 모델 카드 그리드 */}
      <div className="px-6 sm:px-8 py-8 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="flex items-center justify-between mb-5">
          <p className="text-base font-bold text-gray-900">
            {language === "ko" ? `포함 특화 AI 모델 ${pkg.models.length}종` : `${pkg.models.length} Specialized AI Models Included`}
          </p>
          <p className="text-xs text-gray-400">
            {language === "ko" ? "Basic 2종 전체 포함 +" : "All 2 Basic models included +"}
          </p>
        </div>

        {/* 검색·필터 바 */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-6">
          {/* 카테고리 탭 (가로 드래그 가능) */}
          <div
            ref={drag.ref}
            onMouseDown={drag.onMouseDown}
            onMouseMove={drag.onMouseMove}
            onMouseUp={drag.endDrag}
            onMouseLeave={drag.endDrag}
            className="flex-1 flex items-center gap-2 overflow-x-auto cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  if (drag.didDrag()) return;
                  setActiveCat(cat.key);
                }}
                className={`whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex-shrink-0 ${
                  activeCat === cat.key
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 위험도 + 검색 */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <select
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
              className="px-3 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
            >
              <option value="all">{language === "ko" ? "위험도 전체" : "All risk levels"}</option>
              {riskLevels.map((lv) => (
                <option key={lv} value={lv}>{lv}</option>
              ))}
            </select>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={language === "ko" ? "모델명 검색" : "Search models"}
                className="w-40 pl-9 pr-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-gray-400">
            {language === "ko" ? "조건에 맞는 모델이 없습니다." : "No models match your filters."}
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((model) => (
            <div
              key={model.name}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col hover:shadow-md hover:border-blue-300 transition-all"
            >
              {/* 카드 헤더: 배지 + 타이틀 */}
              <div className="px-4 pt-4 pb-3 border-b border-gray-100">
                <span className={`inline-block px-2.5 py-1 text-[11px] font-bold rounded-md mb-2 ${model.levelColor ?? "bg-gray-200 text-gray-700"}`}>
                  {model.level}
                </span>
                <h4 className="text-base font-black text-gray-900 leading-snug">{model.name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{model.detail}</p>
              </div>

              {/* 감지 항목 체크 그리드 */}
              <div className="px-4 py-3 grid grid-cols-2 gap-x-3 gap-y-2 flex-1">
                {model.items?.map((item) => (
                  <div key={item} className="flex items-start gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[12px] text-gray-700 leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* 메타 푸터 */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {language === "ko" ? `감지 항목 ${model.items?.length ?? 0}개` : `${model.items?.length ?? 0} checks`}
                </span>
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {language === "ko" ? `적용 공종 ${model.scope}` : model.scope}
                </span>
              </div>

              {/* 모델 자세히 보기 버튼 */}
              <button
                type="button"
                onClick={() => onSelectModel(model)}
                className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-xs font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {language === "ko" ? "모델 자세히 보기" : "View model details"}
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-blue-200 text-blue-500">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
        )}

        {/* CTA */}
        <div className="mt-7 flex justify-end">
          <a
            href={pkg.ctaHref}
            className={`inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-xl transition-colors shadow-lg ${pkg.ctaBg}`}
          >
            {pkg.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// 모델 상세 모달
function ModelDetailModal({
  model,
  language,
  onClose,
}: {
  model: ModelItem | null;
  language: Lang;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!model) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [model, onClose]);

  if (!model) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="bg-gradient-to-br from-[#0c2340] to-[#1d6fa4] px-7 pt-7 pb-6 rounded-t-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label={language === "ko" ? "닫기" : "Close"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className={`inline-block px-2.5 py-1 text-[11px] font-bold rounded-md mb-3 ${model.levelColor ?? "bg-gray-200 text-gray-700"}`}>
            {model.level}
          </span>
          <h3 className="text-2xl font-black text-white leading-tight">{model.name}</h3>
          <p className="text-white/70 text-sm mt-1">{model.detail}</p>
        </div>

        {/* 본문 */}
        <div className="px-7 py-6">
          {model.desc && (
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{model.desc}</p>
          )}

          {/* 감지 항목 */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            {language === "ko" ? `감지 항목 ${model.items?.length ?? 0}개` : `Detection Items (${model.items?.length ?? 0})`}
          </p>
          <ul className="grid sm:grid-cols-2 gap-2.5 mb-6">
            {model.items?.map((item) => (
              <li key={item} className="flex items-start gap-2 px-3 py-2 bg-blue-50/60 rounded-lg">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700 leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {/* 적용 공종 / 대상 */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
            {language === "ko" ? `적용 공종 · ${model.scope}` : `Applicable Processes · ${model.scope}`}
          </p>
          <div className="flex flex-wrap gap-2">
            {model.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ConTI Lab AI 개발 프로세스 (AI 모델 패키지 상단) ──
function ProcessIcon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    clipboard: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l2 2 4-4" />,
    database: <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3zM4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" />,
    building: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m6-14h.01M9 11h.01M9 15h.01M15 7h.01M15 11h.01M15 15h.01" />,
    monitor: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v2m6-2v2M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM9 19h6" />,
    chip: <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6zM9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2M10 10h4v4h-4z" />,
    camera: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />,
    trending: <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    target: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 13a1 1 0 100-2 1 1 0 000 2z" />,
    cube: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  };
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

type ProcessStep = {
  no: string;
  icon: string;
  numBg: string;
  iconColor: string;
  dot: string;
  title: string;
  sub: string;
  items: string[];
};

const getDevProcess = (language: Lang): ProcessStep[] => {
  const ko = language === "ko";
  return [
    {
      no: "01", icon: "clipboard", numBg: "bg-blue-700", iconColor: "text-blue-700", dot: "bg-blue-400",
      title: ko ? "위험 정의" : "Risk Definition",
      sub: ko ? "법규정·사고사례 분석" : "Regulation & incident analysis",
      items: ko
        ? ["산업안전보건법", "KOSHA 가이드", "중대재해 사고사례", "작업절차서 분석"]
        : ["Occupational Safety Act", "KOSHA guidelines", "Serious-accident cases", "Work-procedure analysis"],
    },
    {
      no: "02", icon: "database", numBg: "bg-purple-600", iconColor: "text-purple-600", dot: "bg-purple-400",
      title: ko ? "위험 시나리오 구축" : "Risk Scenario Building",
      sub: ko ? "100+ 위험상황 라이브러리" : "100+ hazard library",
      items: ko
        ? ["추락", "안전고리 미체결", "위험구역 침입", "중장비 접근 등", "14종 이상 위험상황"]
        : ["Falls", "Unfastened safety hook", "Danger-zone intrusion", "Heavy-equipment approach", "14+ hazard types"],
    },
    {
      no: "03", icon: "building", numBg: "bg-teal-600", iconColor: "text-teal-600", dot: "bg-teal-400",
      title: ko ? "가상현장 생성" : "Virtual Site Creation",
      sub: ko ? "3D 디지털 트윈 구축" : "3D digital-twin build",
      items: ko
        ? ["BIM / 도면", "Reality Capture", "360° 데이터", "디지털 트윈 구축"]
        : ["BIM / drawings", "Reality Capture", "360° data", "Digital-twin build"],
    },
    {
      no: "04", icon: "monitor", numBg: "bg-green-600", iconColor: "text-green-600", dot: "bg-green-400",
      title: ko ? "AI 학습데이터 생성" : "AI Training Data",
      sub: ko ? "위험상황 자동 재현" : "Auto hazard re-creation",
      items: ko
        ? ["위험행동 시뮬레이션", "Auto Labeling", "데이터 증강", "품질 검증"]
        : ["Hazard-behavior simulation", "Auto labeling", "Data augmentation", "Quality validation"],
    },
    {
      no: "05", icon: "chip", numBg: "bg-orange-500", iconColor: "text-orange-500", dot: "bg-orange-400",
      title: ko ? "Vision AI 개발" : "Vision AI Development",
      sub: ko ? "작업특화 AI 모델 개발" : "Task-specialized AI models",
      items: ko
        ? ["외부비계 AI", "사다리 AI", "양중 AI", "지게차 AI", "중장비 AI 등"]
        : ["Exterior Scaffold AI", "Ladder AI", "Lifting AI", "Forklift AI", "Heavy Equipment AI"],
    },
    {
      no: "06", icon: "camera", numBg: "bg-blue-600", iconColor: "text-blue-600", dot: "bg-blue-400",
      title: ko ? "현장 적용" : "Field Deployment",
      sub: ko ? "On-device AI + AutoPTZ" : "On-device AI + AutoPTZ",
      items: ko
        ? ["AI 카메라", "Edge AI Box", "NPU Server", "Auto PTZ 자동 추적"]
        : ["AI Camera", "Edge AI Box", "NPU Server", "Auto PTZ tracking"],
    },
    {
      no: "07", icon: "trending", numBg: "bg-[#1e3a5f]", iconColor: "text-blue-900", dot: "bg-blue-500",
      title: ko ? "지속 고도화" : "Continuous Improvement",
      sub: ko ? "현장 데이터 재학습" : "On-site data retraining",
      items: ko
        ? ["위험 이벤트 수집", "신규 시나리오 추가", "모델 재학습", "성능 개선 및 업데이트"]
        : ["Hazard-event collection", "New scenario addition", "Model retraining", "Performance updates"],
    },
  ];
};

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <div className="relative h-full flex flex-col rounded-xl border border-gray-200 bg-white px-4 pt-6 pb-4">
      <div className={`absolute -top-3 left-4 w-7 h-7 rounded-full ${step.numBg} text-white text-[11px] font-black flex items-center justify-center shadow-md`}>
        {step.no}
      </div>
      {/* 헤더 — 고정 높이 + 단어 단위 줄바꿈, 글자 축소로 최대 2줄 */}
      <div className="h-[68px]">
        <div className="flex items-start gap-1.5 mb-1">
          <ProcessIcon name={step.icon} className={`w-4 h-4 flex-shrink-0 mt-0.5 ${step.iconColor}`} />
          <h4 className="text-xs font-black text-gray-900 leading-tight break-keep tracking-tight">{step.title}</h4>
        </div>
        <p className="text-[11px] text-gray-400 leading-snug break-keep">{step.sub}</p>
      </div>
      {/* 항목 — 상단 정렬 + 구분선으로 통일 */}
      <ul className="space-y-1.5 pt-3 mt-2 border-t border-gray-100">
        {step.items.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-[12px] text-gray-600 leading-snug">
            <span className={`mt-1.5 w-1 h-1 rounded-full ${step.dot} flex-shrink-0`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AIDevProcess({ language }: { language: Lang }) {
  const steps = getDevProcess(language);

  return (
    <div className="rounded-2xl border-2 border-blue-200 overflow-hidden bg-white">
      {/* Hero (상단) */}
      <div className="bg-gradient-to-br from-[#060f1a] via-[#0c2340] to-[#1d6fa4] px-6 sm:px-8 pt-7 pb-6">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-blue-500/20 text-blue-100 border border-blue-400/40">
            {language === "ko" ? "AI 개발 프로세스" : "AI Development Process"}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
          {language === "ko" ? "ConTI Lab AI 개발 프로세스" : "ConTI Lab AI Development Process"}
        </h3>
        <p className="text-blue-100/80 text-sm leading-relaxed max-w-2xl">
          {language === "ko"
            ? "법규정과 사고사례를 분석하고, 가상현장에서 학습시켜 실제 현장에 적용합니다."
            : "We analyze regulations and incident cases, train AI in virtual sites, and apply it to real sites."}
        </p>
      </div>

      {/* Body (하단) */}
      <div className="px-6 sm:px-8 py-8">

      {/* 데스크탑: 가로 플로우 + 화살표 */}
      <div className="hidden lg:flex items-stretch gap-1 pt-2">
        {steps.map((s, i) => (
          <div key={s.no} className="flex items-stretch flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <ProcessStepCard step={s} />
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center px-0.5 text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 모바일·태블릿: 그리드 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden pt-3">
        {steps.map((s) => (
          <ProcessStepCard key={s.no} step={s} />
        ))}
      </div>
      </div>
    </div>
  );
}

function ModelTab({ language }: { language: Lang }) {
  const modelPackages = getModelPackages(language);
  const basic = modelPackages.find((p) => p.id === "basic")!;
  const pro = modelPackages.find((p) => p.id === "pro")!;
  const custom = modelPackages.find((p) => p.id === "custom")!;
  const [selectedModel, setSelectedModel] = useState<ModelItem | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-2xl font-semibold text-blue-600 uppercase tracking-wider mb-3">
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

        {/* ConTI Lab AI 개발 프로세스 */}
        <div className="mb-6">
          <AIDevProcess language={language} />
        </div>

        {/* 1단 — 기본(Basic) */}
        <div className="mb-6">
          <CompactPackageCard pkg={basic} />
        </div>

        {/* 2단 — 특화(Pro) 강조 */}
        <div className="relative mb-6">
          <FeaturedProPackage pkg={pro} language={language} onSelectModel={setSelectedModel} />
        </div>

        {/* 3단 — 맞춤 제작(Custom) */}
        <div className="mb-12">
          <CompactPackageCard pkg={custom} />
        </div>

      </div>

      <ModelDetailModal model={selectedModel} language={language} onClose={() => setSelectedModel(null)} />
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
    image2: "/images/Multi channel NPU PC.png",
  },
];

function DeviceTab({ language }: { language: Lang }) {
  const hardwareProducts = getHardwareProducts(language);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-2xl font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "엣지 AI 하드웨어" : "Edge AI Hardware"}
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {language === "ko" ? "작게 시작하고, 현장과 함께 확장합니다" : "Start small, expand with your site"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {language === "ko"
              ? "iSafeGuard는 카메라 한 대의 현장부터 수백 대의 카메라를 운영하는 대형 현장까지 동일한 플랫폼으로 지원합니다. 기존 CCTV를 그대로 활용하면서도 필요에 따라 AI 관제 범위를 단계적으로 확대할 수 있습니다."
              : "iSafeGuard supports sites of all sizes on the same platform, from projects with a single camera to large-scale operations with hundreds of cameras. You can utilize your existing CCTV as is, while phasing in and expanding the AI monitoring scope as needed."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hardwareProducts.map((product) => (
            <div key={product.nameEn} className="rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all overflow-hidden group flex flex-col">
              {"image" in product && product.image ? (
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  {"image2" in product && (product as { image2?: string }).image2 ? (
                    <div className="absolute inset-0 flex">
                      <div className="relative w-1/2 h-full">
                        <Image
                          src={product.image as string}
                          alt={product.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 17vw"
                        />
                      </div>
                      <div className="relative w-1/2 h-full">
                        <Image
                          src={(product as { image2: string }).image2}
                          alt={product.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 17vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={product.image as string}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
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
                <p className="text-[18px] font-semibold text-blue-600 mb-3">{product.headline}</p>
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
  logo?: string;                // 기업 로고 (있으면 이름 대신 표시)
  category?: string;            // 현장 유형 (예: 공공기관, 대형 건설사)
  summary?: string;             // 현장 개요 설명 (추후 채움)
  models?: string[];            // 적용 AI 모델 (추후 채움)
  media?: DeploymentMedia[];    // 실증 GIF + 설명 (추후 채움)
}

const getDeploymentCases = (language: Lang): DeploymentCase[] => [
  {
    image: "/images/accounts/SK ecoplant.png",
    name: language === "ko" ? "SK에코플랜트" : "SK ecoplant",
    logo: "/images/clients/partners-sk-ecoplant.jpg",
    category: language === "ko" ? "건설 현장 · 상하동시 작업" : "Construction · Simultaneous Vertical Work",
    summary: language === "ko"
      ? "SK에코플랜트 현장에서 상부와 하부에서 동시에 이뤄지는 위험 작업(상하동시 작업)을 AI로 실시간 탐지해, 낙하물·협착 위험 상황을 식별합니다."
      : "At an SK ecoplant site, AI detects in real time the hazardous situation of simultaneous work above and below (vertical-simultaneous work), identifying drop and crushing risks.",
    models: language === "ko"
      ? ["상하동시 작업 탐지", "객체 탐지"]
      : ["Simultaneous vertical-work detection", "Object detection"],
    media: [
      { src: "/gif/상하동시 작업.gif", caption: language === "ko" ? "상하동시 작업 실시간 탐지" : "Real-time simultaneous vertical-work detection" },
    ],
  },
  {
    image: "/images/accounts/DL.png",
    name: "DL E&C",
    logo: "/images/clients/DL-logo.jpg",
    category: language === "ko" ? "대형 건설사 · 현장 맞춤형 PoC" : "Major Contractor · Site-tailored PoC",
    summary: language === "ko"
      ? "DL E&C 검단 웰카운티·일산 메이포레 현장의 이동식·타워크레인 CCTV 19대 이상을 연동해, 현장 맞춤형 Vision AI와 카메라 PTZ 자동제어를 결합한 위험 상황 판별 PoC를 수행했습니다. 작업자·안전모 탐지, 중장비-작업자 수평 거리 측정, 위험구역 침범 탐지를 실증했고, 카메라가 움직여도 위험구역을 자동으로 추적·맵핑하는 동적 PTZ 맵핑 기술로 특허를 출원했습니다(10-2026-0058231). 〈2025 서울창업허브 오픈이노베이션〉"
      : "At DL E&C's Geomdan Wellcounty and Ilsan Mayfore sites, we integrated 19+ mobile and tower-crane CCTVs and ran a PoC combining site-tailored Vision AI with automatic PTZ control. We validated worker/helmet detection, equipment-worker distance measurement, and hazard-zone intrusion detection, and filed a patent for dynamic PTZ hazard-zone auto-mapping that keeps tracking zones even as the camera moves (10-2026-0058231).",
    models: language === "ko"
      ? ["작업자·안전모 탐지", "중장비-작업자 거리 측정", "위험구역 침범 탐지", "PTZ 위험구역 자동 맵핑", "객체 추적(Re-ID)", "Auto PTZ 제어(ONVIF)"]
      : ["Worker & helmet detection", "Equipment–worker distance", "Hazard-zone intrusion", "PTZ hazard-zone auto-mapping", "Object tracking (Re-ID)", "Auto PTZ control (ONVIF)"],
    media: [
      { src: "/images/poc/DL1.png", caption: language === "ko" ? "작업자 탐지 및 안전모 착용 여부 체크" : "Worker detection & helmet check" },
      { src: "/images/poc/DL2.png", caption: language === "ko" ? "중장비–작업자 수평 거리 측정" : "Equipment–worker distance measurement" },
      { src: "/images/poc/DL3.png", caption: language === "ko" ? "위험구역 설정 및 침범 탐지" : "Hazard-zone setup & intrusion detection" },
      { src: "/images/poc/DL4.png", caption: language === "ko" ? "PTZ 연동 위험구역 자동 맵핑" : "PTZ-linked hazard-zone auto-mapping" },
    ],
  },
  {
    image: "/images/accounts/Nexilis.png",
    name: "SK Nexilis",
    logo: "/images/clients/sk%20nexilis.png",
    category: language === "ko" ? "제조 현장 · 가상 데이터 학습" : "Manufacturing · Synthetic-data Training",
    summary: language === "ko"
      ? "SK Nexilis 제조 현장에 지게차와 작업자 간 수평 거리 측정, 안전모 착용 여부 체크 등 현장 맞춤형 위험 판별 모델을 적용했습니다. 실제 촬영이 어려운 위험 상황은 가상 데이터(synthetic data)를 생성해 학습시킴으로써, 데이터 수집 비용을 줄이면서도 다양한 위험 시나리오에 대한 탐지 정확도를 확보했습니다."
      : "At the SK Nexilis manufacturing site, we applied site-tailored hazard models such as forklift-worker distance measurement and helmet-wearing checks. For hazardous situations that are hard to capture on real footage, we generated synthetic data to train the models—cutting data-collection costs while securing detection accuracy across diverse risk scenarios.",
    models: language === "ko"
      ? ["지게차-작업자 거리 측정", "안전모 착용 탐지", "가상 데이터 기반 모델 학습", "객체 탐지"]
      : ["Forklift–worker distance", "Helmet-wearing detection", "Synthetic-data model training", "Object detection"],
    media: [
      { src: "/gif/거리 측정.gif", caption: language === "ko" ? "지게차–작업자 거리 측정 및 안전모 착용 체크" : "Forklift–worker distance & helmet check" },
      { src: "/images/poc/AIChemist1.png", caption: language === "ko" ? "가상 데이터 생성 기반 모델 학습" : "Synthetic-data-based model training" },
    ],
  },
  {
    image: "/images/accounts/Korea Expressway Corporation.png",
    name: language === "ko" ? "한국도로공사" : "Korea Expressway Corp.",
    logo: "/images/clients/partner-ex.png",
    category: language === "ko" ? "공공기관 · 도로 건설현장" : "Public Agency · Road Construction",
    summary: language === "ko"
      ? "한국도로공사 도로 건설현장에서 고소작업·양중작업·안전고리 체결·작업 스케줄 등 주요 위험 상황을 AI로 실시간 탐지·관제했습니다."
      : "At Korea Expressway Corporation road-construction sites, AI detected and monitored key hazards in real time—high-place work, lifting work, safety-hook fastening, and work scheduling.",
    models: language === "ko"
      ? ["고소작업 탐지", "양중작업 탐지", "안전고리 체결 탐지", "작업 스케줄"]
      : ["High-place work detection", "Lifting work detection", "Safety-hook detection", "Work scheduling"],
    media: [
      { src: "/gif/한국도로공사-고소작업.gif", caption: language === "ko" ? "고소작업 탐지" : "High-place work detection" },
      { src: "/gif/한국도로공사-양중작업.gif", caption: language === "ko" ? "양중작업 탐지" : "Lifting work detection" },
      { src: "/gif/한국도로공사-안전고리.gif", caption: language === "ko" ? "안전고리 체결 탐지" : "Safety-hook fastening detection" },
      { src: "/gif/한국도로공사-스케줄러.gif", caption: language === "ko" ? "작업 스케줄러" : "Work scheduler" },
    ],
  },
  {
    image: "/images/accounts/HDC.png",
    name: language === "ko" ? "HDC I&CONS 복합개발" : "HDC I&CONS Mixed-Use",
    logo: "/images/clients/HDC-logo.png",
    category: language === "ko" ? "대형 건설사 · Auto PTZ" : "Major Contractor · Auto PTZ",
    summary: language === "ko"
      ? "HDC I&CONS 현장에서 카메라 Auto PTZ 제어를 통해 작업자를 자동으로 추적하고, 안전고리 등 화면에서 작게 보이는 소형 객체까지 탐지하는 데 성공했습니다."
      : "At an HDC I&CONS site, automatic PTZ camera control continuously tracked workers and successfully detected small objects—such as safety hooks—that appear tiny on screen.",
    models: language === "ko"
      ? ["Auto PTZ 작업자 추적", "소형 객체 탐지", "객체 탐지"]
      : ["Auto-PTZ worker tracking", "Small-object detection", "Object detection"],
    media: [
      { src: "/gif/auto-ptz.gif", caption: language === "ko" ? "Auto PTZ 작업자 추적 및 소형 객체 탐지" : "Auto-PTZ worker tracking & small-object detection" },
    ],
  },
  {
    image: "/images/poc/hanlim3.png",
    name: language === "ko" ? "한림 (진해항)" : "HANLIM (Jinhae Harbor)",
    logo: "/images/clients/partners-hanraim.jpg",
    category: language === "ko" ? "해상 · 선박 충돌 경고" : "Marine · Vessel Collision Alert",
    summary: language === "ko"
      ? "진해항 해상 작업 현장에서 DCM 작업선 등 해상 장비와 접근 선박을 AI로 식별하고, AIS 정보(선박명·MMSI·속도·방향)를 연동해 선박 충돌 위험을 실시간으로 경고합니다."
      : "At a Jinhae Harbor marine worksite, AI identifies marine equipment such as DCM work vessels and approaching ships, and—integrating AIS data (name, MMSI, speed, heading)—warns of vessel collision risks in real time.",
    models: language === "ko"
      ? ["해상 작업선·선박 식별", "선박 충돌 경고", "AIS 정보 연동", "객체 탐지"]
      : ["Work-vessel & ship detection", "Vessel collision alert", "AIS data integration", "Object detection"],
    media: [
      { src: "/images/poc/Hanlim1.png", caption: language === "ko" ? "선박 충돌 경고 및 AIS 정보 연동" : "Collision alert & AIS data" },
      { src: "/images/poc/hanlim2.png", caption: language === "ko" ? "해상 작업선·접근 선박 식별" : "Work-vessel & approaching-ship detection" },
      { src: "/images/poc/hanlim3.png", caption: language === "ko" ? "실시간 해상 관제 화면" : "Real-time marine monitoring" },
    ],
  },
  {
    image: "/images/poc/ISC1.png",
    name: "ISC",
    logo: "/images/clients/ISC.png",
    category: language === "ko" ? "반도체 · 도입 예정" : "Semiconductor · Upcoming",
    summary: language === "ko"
      ? "ISC와 함께 곧 시작할 사업으로, 반도체 공장의 미작업(유휴) 실험장비의 Door Open 여부를 자동으로 체크하는 AI 모델을 개발·납품할 예정입니다."
      : "An upcoming project with ISC: developing and supplying an AI model that automatically checks whether idle (non-operating) experimental equipment doors are left open in semiconductor fabs.",
    models: language === "ko" ? ["실험장비 Door Open 감지", "객체 탐지"] : ["Equipment door-open detection", "Object detection"],
    media: [
      { src: "/images/poc/ISC2.png", caption: language === "ko" ? "실험장비 Door Open 감지 1" : "Equipment door-open detection 1" },
      { src: "/images/poc/ISC3.png", caption: language === "ko" ? "실험장비 Door Open 감지 2" : "Equipment door-open detection 2" },
      { src: "/images/poc/ISC4.png", caption: language === "ko" ? "실험장비 Door Open 감지 3" : "Equipment door-open detection 3" },
      { src: "/images/poc/ISC5.png", caption: language === "ko" ? "실험장비 Door Open 감지 4" : "Equipment door-open detection 4" },
    ],
  },
  {
    image: "/images/accounts/Approtium.png",
    name: "APPROTIUM",
    logo: "/images/clients/partners-posco-approtium.jpg",
    category: language === "ko" ? "에너지 · 수소/CO2 충전소" : "Energy · H2/CO2 Charging Station",
    summary: language === "ko"
      ? "APPROTIUM 수소·CO2 충전소 현장에 카메라별로 특화된 AI 관제를 적용했습니다. 수소가스 압력 게이지를 실시간으로 측정해 이상을 감지하고(CAM1·CAM3), 충전 연결 상태와 관리자(노란 안전모) 부재를 확인·경보하며(CAM6·CAM10·CAM11), 전체 카메라에서 작업자 안전모 미착용과 설정 구역 무단 침입을 감지합니다."
      : "At APPROTIUM's hydrogen/CO2 charging stations, we applied camera-specific AI monitoring. It measures hydrogen-gas pressure gauges in real time to detect anomalies (CAM1·CAM3), verifies charging connections and alerts when a supervisor (yellow helmet) is absent (CAM6·CAM10·CAM11), and across all cameras detects workers without helmets and unauthorized intrusion into set zones.",
    models: language === "ko"
      ? ["수소가스 압력 게이지 이상 감지", "충전 연결 확인", "관리자 부재 경보", "안전모 미착용 감지", "설정 구역 침입 감지"]
      : ["H2-gas gauge anomaly detection", "Charging connection check", "Missing-supervisor alert", "No-helmet detection", "Zone intrusion detection"],
    media: [
      { src: "/gif/detection.gif", caption: language === "ko" ? "실시간 AI CCTV 위험 감지" : "Real-time AI CCTV detection" },
    ],
  },
  {
    image: "/images/accounts/PIC Grobal.png",
    name: "PIC Global",
    logo: "/images/clients/pic%20global.png",
    category: language === "ko" ? "장비 속도 측정" : "Equipment Speed Measurement",
    summary: language === "ko"
      ? "PIC Global 현장에서 중장비의 이동 속도를 실시간으로 측정·관제했습니다."
      : "At a PIC Global site, heavy-equipment movement speed was measured and monitored in real time.",
    models: language === "ko" ? ["장비 속도 측정", "객체 탐지"] : ["Equipment speed measurement", "Object detection"],
    media: [
      { src: "/gif/장비 속도 측정.gif", caption: language === "ko" ? "장비 속도 측정" : "Equipment speed measurement" },
    ],
  },
];

function DeploymentTab({ language }: { language: Lang }) {
  const [selected, setSelected] = useState<DeploymentCase | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-2xl font-semibold text-blue-600 uppercase tracking-wider mb-3">
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
              <div className="relative aspect-video bg-gray-50 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                {c.logo ? (
                  <img src={c.logo} alt={c.name} className="h-8 w-auto max-w-[150px] object-contain mb-3" />
                ) : (
                  <h3 className="text-[15px] font-bold text-gray-900 mb-3">{c.name}</h3>
                )}
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
            className="bg-white w-full max-w-[1040px] max-h-[90vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col"
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
                <div className={`grid grid-cols-1 gap-4 ${selected.media.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {selected.media.map((m) => (
                    <figure key={m.src} className="rounded-xl overflow-hidden border border-gray-100">
                      <div className="relative aspect-video bg-gray-900">
                        <img src={encodeURI(m.src)} alt={m.caption} className="w-full h-full object-contain" />
                      </div>
                      <figcaption className="px-3 py-2 text-sm text-gray-500">{m.caption}</figcaption>
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
