import Link from "next/link";

interface FeatureItem {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  reverse?: boolean;
  bgClass: string;
  mockupBg: string;
  mockupIcon: React.ReactNode;
  mockupLabel: string;
}

const features: FeatureItem[] = [
  {
    id: "ai-cctv",
    tag: "엣지 AI CCTV",
    tagColor: "bg-blue-100 text-blue-700",
    title: "CCTV 교체없이\n현장에서 바로 사용가능한 AI",
    subtitle: "기존 CCTV 인프라를 그대로 활용",
    desc: "별도 서버 없이 엣지 디바이스 하나로 기존 CCTV에 AI 기능을 추가합니다. 안전모 미착용, 위험구역 침입, 화재 감지 등 현장에 꼭 필요한 기능만 담았습니다.",
    bullets: [
      "안전모/안전벨트 미착용 실시간 감지",
      "위험구역 무단 침입 알림",
      "화재·연기 조기 감지",
      "야간 및 악천후 환경 대응",
      "기존 CCTV 100% 호환",
    ],
    ctaText: "AI CCTV 상세보기",
    ctaHref: "#ai-cctv",
    reverse: false,
    bgClass: "bg-white",
    mockupBg: "bg-gradient-to-br from-blue-900 to-blue-700",
    mockupIcon: (
      <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    mockupLabel: "AI CCTV 모니터링 화면",
  },
  {
    id: "video",
    tag: "동영상 기록관리",
    tagColor: "bg-slate-100 text-slate-700",
    title: "촬영계획서, 장비, 편집\n모두 한 플랫폼에서",
    subtitle: "법정 영상기록 의무화 완벽 대응",
    desc: "건설기술진흥법에 따른 영상기록 의무를 손쉽게 이행하세요. 촬영계획서 자동 생성부터 편집 대행까지, 영상기록에 필요한 모든 것을 제공합니다.",
    bullets: [
      "공종별 촬영계획서 자동 생성",
      "드론·카메라 장비 렌탈 서비스",
      "전문 편집팀 편집 대행",
      "클라우드 안전 보관 (10년 이상)",
      "발주처 제출용 보고서 자동 생성",
    ],
    ctaText: "동영상 기록관리 보기",
    ctaHref: "#video",
    reverse: true,
    bgClass: "bg-gray-50",
    mockupBg: "bg-gradient-to-br from-slate-800 to-slate-600",
    mockupIcon: (
      <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    mockupLabel: "영상 관리 플랫폼 화면",
  },
  {
    id: "smart-safety",
    tag: "스마트 안전장비",
    tagColor: "bg-orange-100 text-orange-700",
    title: "작업자 중심의\n스마트 안전장비 시스템",
    subtitle: "IoT 기반 안전관리 혁신",
    desc: "스마트 안전모와 스마트 조끼를 통해 작업자의 위치, 생체신호, 위험상황을 실시간으로 모니터링합니다. 안전관리 비용도 투명하게 배분하세요.",
    bullets: [
      "GPS 기반 작업자 위치 추적",
      "심박·체온 이상 즉시 알림",
      "작업자별 영상기록 자동화",
      "협력사별 안전관리 비용 자동 배분",
      "스마트 장비 통합 관리 포털",
    ],
    ctaText: "스마트 장비 알아보기",
    ctaHref: "#smart-safety",
    reverse: false,
    bgClass: "bg-white",
    mockupBg: "bg-gradient-to-br from-orange-800 to-orange-600",
    mockupIcon: (
      <svg className="w-16 h-16 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    mockupLabel: "스마트 안전장비 대시보드",
  },
  {
    id: "process-management",
    tag: "공정관리 시스템",
    tagColor: "bg-green-100 text-green-700",
    title: "현장일보, 공정표,\n원격 감리까지 디지털로",
    subtitle: "공정관리 디지털 전환",
    desc: "종이 현장일보, 수작업 공정표에서 벗어나세요. 모바일로 현장일보를 작성하고, AI가 공정표를 자동으로 업데이트합니다. 발주처도 실시간으로 현장 상황을 확인할 수 있습니다.",
    bullets: [
      "모바일 현장일보 작성",
      "AI 기반 공정표 자동 갱신",
      "원격 감리 영상 통화",
      "협력사 협업 포털",
      "발주처 실시간 현장 모니터링",
    ],
    ctaText: "공정관리 시스템 보기",
    ctaHref: "#process-management",
    reverse: true,
    bgClass: "bg-gray-50",
    mockupBg: "bg-gradient-to-br from-green-800 to-green-600",
    mockupIcon: (
      <svg className="w-16 h-16 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    mockupLabel: "공정관리 대시보드",
  },
];

function FeatureBlock({ feature }: { feature: FeatureItem }) {
  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className={`inline-block px-3 py-1 text-xs font-semibold ${feature.tagColor} rounded-full mb-4 w-fit`}>
        {feature.tag}
      </span>
      <h2 className="text-[30px] font-black text-gray-900 whitespace-pre-line leading-tight mb-3">
        {feature.title}
      </h2>
      <p className="text-sm font-semibold text-blue-600 mb-3">{feature.subtitle}</p>
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
      <Link
        href={feature.ctaHref}
        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors w-fit"
      >
        {feature.ctaText}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );

  const imageBlock = (
    <div className={`rounded-2xl ${feature.mockupBg} aspect-[4/3] flex flex-col items-center justify-center gap-4 shadow-lg`}>
      {feature.mockupIcon}
      <p className="text-white/50 text-sm">{feature.mockupLabel}</p>
    </div>
  );

  return (
    <section id={feature.id} className={`py-20 ${feature.bgClass}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${feature.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
          {textBlock}
          {imageBlock}
        </div>
      </div>
    </section>
  );
}

export default function ProductFeatures() {
  return (
    <>
      {features.map((f) => (
        <FeatureBlock key={f.id} feature={f} />
      ))}
    </>
  );
}
