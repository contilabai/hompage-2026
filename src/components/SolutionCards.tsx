import Link from "next/link";

const getSolutions = (language: "ko" | "en") => [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    badgeColor: "bg-green-50 text-green-700",
    badge: "Plan",
    title: "iSafePlanner",
    question: language === "ko"
      ? "근로자가 투입되기 전, 그 현장에 어떤 위험이 있는지 알고 계십니까?"
      : "Before workers are deployed, do you know what risks await them on site?",
    desc: language === "ko"
      ? "도면을 올리면 AI가 3D 공정 지도와 위험도 등급을 자동으로 만들어줍니다. 기상 데이터까지 반영해 \"오늘 비가 오면 이 구역은 HIGH\"처럼 구체적으로 알려줍니다."
      : "Upload a blueprint and AI automatically builds a 3D process map with risk grades. It even factors in weather data—\"if it rains today, this zone is HIGH.\"",
    outcomes: language === "ko"
      ? ["도면 한 장 → 3D 위험 지도 자동 생성", "기상 연동 실시간 위험 지수", "최적 카메라 배치까지 AI 추천"]
      : ["One blueprint → auto 3D risk map", "Weather-linked real-time risk index", "AI-recommended optimal camera placement"],
    href: "/isafe-planner",
    ctaColor: "text-green-600",
    borderHover: "hover:border-green-200",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    badgeColor: "bg-red-50 text-red-700",
    badge: "Train",
    title: "iSafeMeta",
    question: language === "ko"
      ? "매년 똑같은 안전 교육, 근로자가 정말 위험을 이해하고 있을까요?"
      : "The same training every year—do workers truly understand the danger?",
    desc: language === "ko"
      ? "오늘 들어갈 현장과 똑같은 3D 공간에서 추락, 낙하, 충돌을 직접 체험합니다. 한 번 몸으로 겪은 위험은 잊히지 않습니다. 20개국 언어로 외국인 근로자도 동일하게."
      : "Workers experience falls, drops, and collisions firsthand in a 3D space identical to today's site. Danger felt once is never forgotten—available in 20+ languages for foreign workers too.",
    outcomes: language === "ko"
      ? ["실제 현장 3D 환경에서 위험 선체험", "AI 아바타 1:1 안전 교육", "이수 기록 자동 블록체인 저장"]
      : ["Pre-experience hazards in real-site 3D", "1:1 safety training with AI avatar", "Auto blockchain storage of records"],
    href: "/isafe-meta",
    ctaColor: "text-red-600",
    borderHover: "hover:border-red-200",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    badgeColor: "bg-blue-50 text-blue-700",
    badge: "Monitor",
    title: "iSafeGuard",
    question: language === "ko"
      ? "퇴근 후 현장에서 사고가 난다면, 알 수 있는 방법이 있습니까?"
      : "If an accident happens after hours, is there any way you'd know?",
    desc: language === "ko"
      ? "AI가 100+채널을 동시에 분석하고 이상 징후가 감지되면 즉시 알림을 보냅니다. 보고서도 AI가 씁니다. 관리자는 검토·승인만 하면 됩니다."
      : "AI analyzes 100+ channels at once and alerts you instantly when anomalies are detected. AI writes the reports too—managers just review and approve.",
    outcomes: language === "ko"
      ? ["100+채널 24시간 AI 자동 감시", "이상 감지 즉시 모바일 알림", "AI 안전 보고서 자동 생성"]
      : ["24/7 AI monitoring of 100+ channels", "Instant mobile alerts on anomalies", "Auto-generated AI safety reports"],
    href: "/isafe-guard",
    ctaColor: "text-blue-600",
    borderHover: "hover:border-blue-200",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    badgeColor: "bg-orange-50 text-orange-700",
    badge: "Measure",
    title: "iSafeChain",
    question: language === "ko"
      ? "사고 발생 후 '관리를 했다'는 증거를 지금 당장 제출할 수 있습니까?"
      : "After an accident, can you submit proof that 'we managed it' right now?",
    desc: language === "ko"
      ? "모든 안전 활동이 자동으로 블록체인에 기록됩니다. 위변조가 불가능하므로 법적 분쟁에서 완벽한 증거가 됩니다. 동시에 근로자에게는 자동으로 보상이 지급됩니다."
      : "Every safety activity is automatically recorded on the blockchain. Being tamper-proof, it becomes perfect evidence in legal disputes—while workers are automatically rewarded.",
    outcomes: language === "ko"
      ? ["모든 안전 기록 자동 블록체인 저장", "위변조 불가 법적 증빙 완비", "스마트 컨트랙트 자동 인센티브"]
      : ["Auto blockchain storage of all records", "Tamper-proof legal evidence", "Smart-contract auto incentives"],
    href: "/isafe-chain",
    ctaColor: "text-orange-600",
    borderHover: "hover:border-orange-200",
  },
];

export default function SolutionCards({ language = "ko" }: { language?: "ko" | "en" }) {
  const solutions = getSolutions(language);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "4대 핵심 모듈" : "4 Core Modules"}
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {language === "ko" ? (
              <>안전 관리에서 반복되는 4가지 문제,<br className="hidden sm:block" /> 각각에 답이 있습니다</>
            ) : (
              <>Four recurring problems in safety management,<br className="hidden sm:block" /> each with an answer</>
            )}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {language === "ko"
              ? "한 모듈씩 도입해도, 전체를 조합해도 작동합니다. 지금 가장 급한 문제부터 해결하세요."
              : "Adopt one module at a time or combine them all. Start with your most urgent problem."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => (
            <Link
              key={sol.title}
              href={sol.href}
              className={`group p-6 rounded-2xl border border-gray-100 ${sol.borderHover} hover:shadow-lg transition-all duration-200 bg-white flex flex-col`}
            >
              <div className={`w-12 h-12 ${sol.iconBg} ${sol.iconColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {sol.icon}
              </div>

              <span className={`inline-block px-2 py-0.5 text-xs font-medium ${sol.badgeColor} rounded-md mb-3 w-fit`}>
                {sol.badge}
              </span>

              <h3 className="text-[17px] font-bold text-gray-900 mb-3">{sol.title}</h3>

              {/* Problem question */}
              <p className="text-sm font-semibold text-gray-700 mb-3 leading-snug italic">
                &ldquo;{sol.question}&rdquo;
              </p>

              <p className="text-sm text-gray-500 mb-5 leading-relaxed flex-1">{sol.desc}</p>

              <ul className="space-y-2 mb-5">
                {sol.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className={`flex items-center gap-1 text-sm font-medium ${sol.ctaColor}`}>
                {language === "ko" ? "자세히 보기" : "Learn More"}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
