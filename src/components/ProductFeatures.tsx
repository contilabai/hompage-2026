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
  ctaBg: string;
  reverse?: boolean;
  bgClass: string;
  mockupBg: string;
  mockupIcon: React.ReactNode;
  mockupLabel: string;
}

const getFeatures = (language: "ko" | "en"): FeatureItem[] => [
  {
    id: "module-license",
    tag: "iSafePlatform Core",
    tagColor: "bg-blue-100 text-blue-700",
    title: language === "ko"
      ? "필요한 모듈만 켭니다.\n쓰지 않는 기능에\n비용을 낼 필요가 없습니다"
      : "Turn on only what you need.\nNo paying for\nfeatures you don't use",
    subtitle: language === "ko"
      ? "플러그인 방식으로 필요한 시점에 즉시 활성화"
      : "Plug-in style activation, instantly when you need it",
    desc: language === "ko"
      ? "4개 모듈은 각각 독립 라이선스로 제공됩니다. 지금 당장 필요한 모듈부터 시작하고, 현장이 성장하면 추가로 해금하세요. 온프레미스와 클라우드 서버 모두 지원하며, VPN 등 폐쇄망 환경에서도 안정적으로 운영됩니다."
      : "All 4 modules come as independent licenses. Start with what you need now and unlock more as your site grows. Supports both on-premise and cloud servers, running reliably even in closed networks like VPN.",
    bullets: language === "ko"
      ? [
          "iSafePlanner·Meta·Guard·Chain 개별 선택 구매",
          "모듈 추가 시 서비스 중단 없이 즉시 적용",
          "온프레미스·클라우드 서버 환경 모두 지원",
          "VPN 등 폐쇄망 환경 내 온프레미스 구조 운영 가능",
          "실시간 모듈 활성화 상태 중앙 모니터링",
        ]
      : [
          "Buy iSafePlanner·Meta·Guard·Chain individually",
          "Add modules instantly with zero downtime",
          "Supports both on-premise and cloud servers",
          "On-premise operation in closed networks like VPN",
          "Central monitoring of real-time module status",
        ],
    ctaText: language === "ko" ? "Platform Core 알아보기" : "Learn About Platform Core",
    ctaHref: "/platform",
    ctaBg: "bg-blue-600 hover:bg-blue-700",
    reverse: false,
    bgClass: "bg-white",
    mockupBg: "bg-gradient-to-br from-[#0d1b2a] to-[#1b2a3b]",
    mockupIcon: (
      <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    mockupLabel: language === "ko" ? "iSafePlatform Core 관제 화면" : "iSafePlatform Core Dashboard",
  },
  {
    id: "role-access",
    tag: language === "ko" ? "통합 권한 관리" : "Unified Access Control",
    tagColor: "bg-slate-100 text-slate-700",
    title: language === "ko"
      ? "현장 소장이 볼 화면과\n근로자가 볼 화면은\n달라야 합니다"
      : "What the site manager sees\nand what the worker sees\nshould be different",
    subtitle: language === "ko"
      ? "역할별로 딱 필요한 정보만, 딱 그 사람에게만"
      : "Only the right information, only to the right person",
    desc: language === "ko"
      ? "최고 관리자는 전체 현황을, 현장 소장은 담당 현장을, 근로자는 본인 안전 정보만 봅니다. 각 역할에 맞는 화면과 데이터만 표출하여 보안 사고를 원천 차단합니다."
      : "Admins see the full picture, site managers see their sites, workers see only their own safety info. Showing each role only relevant screens and data eliminates security incidents at the source.",
    bullets: language === "ko"
      ? [
          "관리자·소장·안전관리자·근로자 4단계 역할 권한",
          "역할별 접근 가능 모듈 및 메뉴 독립 설정",
          "생체 인식 및 보안 로그인 지원",
          "접근 이력·감사 로그 영구 보존으로 내부 감사 대응",
          "복수 현장 통합 관리 대시보드",
        ]
      : [
          "4-tier roles: admin, manager, safety officer, worker",
          "Independent module and menu access per role",
          "Biometric and secure login support",
          "Permanent access and audit logs for internal audits",
          "Unified multi-site management dashboard",
        ],
    ctaText: language === "ko" ? "Platform Core 알아보기" : "Learn About Platform Core",
    ctaHref: "/platform",
    ctaBg: "bg-slate-700 hover:bg-slate-800",
    reverse: true,
    bgClass: "bg-gray-50",
    mockupBg: "bg-gradient-to-br from-slate-800 to-slate-600",
    mockupIcon: (
      <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    mockupLabel: language === "ko" ? "역할 기반 권한 관리 화면" : "Role-Based Access Control",
  },
  {
    id: "data-pipeline",
    tag: language === "ko" ? "데이터 통합 파이프라인" : "Data Integration Pipeline",
    tagColor: "bg-green-100 text-green-700",
    title: language === "ko"
      ? "각 모듈이 따로 돌아도\n데이터는 항상\n하나로 모입니다"
      : "Even when modules run apart,\ntheir data always\nconverges into one",
    subtitle: language === "ko"
      ? "iSafePlanner에서 시작한 데이터가 iSafeChain까지 자동으로 흐릅니다"
      : "Data flows automatically from iSafePlanner all the way to iSafeChain",
    desc: language === "ko"
      ? "도면 위험 분석, 가상 훈련 이수, 현장 감지 이벤트, 블록체인 기록. 각 모듈의 데이터가 끊김 없이 연결됩니다. iSafeChain이 이 데이터를 분석하여 iSafePlanner 위험도를 조정하고, iSafeMeta 훈련을 재편성하고, iSafeGuard 임계치를 강화합니다."
      : "Blueprint risk analysis, virtual training completion, on-site detection events, blockchain records—each module's data connects seamlessly. iSafeChain analyzes it to adjust iSafePlanner's risk levels, reorganize iSafeMeta training, and strengthen iSafeGuard thresholds.",
    bullets: language === "ko"
      ? [
          "4개 모듈 데이터 실시간 중앙 수집·동기화",
          "iSafeChain → Planner·Meta·Guard 자동 피드백",
          "누적 데이터로 플랫폼 전체 정확도 자동 개선",
          "단일 데이터베이스로 통합 관리, 중복 입력 없음",
        ]
      : [
          "Real-time central collection and sync of 4 modules",
          "iSafeChain → Planner·Meta·Guard auto-feedback",
          "Accumulated data auto-improves platform-wide accuracy",
          "Unified single database, no duplicate entry",
        ],
    ctaText: language === "ko" ? "Platform Core 알아보기" : "Learn About Platform Core",
    ctaHref: "/platform",
    ctaBg: "bg-green-700 hover:bg-green-800",
    reverse: false,
    bgClass: "bg-white",
    mockupBg: "bg-gradient-to-br from-green-900 to-green-700",
    mockupIcon: (
      <svg className="w-16 h-16 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    mockupLabel: language === "ko" ? "중앙 데이터 파이프라인 시각화" : "Central Data Pipeline Visualization",
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
        className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white ${feature.ctaBg} rounded-lg transition-colors w-fit`}
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

export default function ProductFeatures({ language = "ko" }: { language?: "ko" | "en" }) {
  const features = getFeatures(language);
  return (
    <>
      {features.map((f) => (
        <FeatureBlock key={f.id} feature={f} />
      ))}
    </>
  );
}
