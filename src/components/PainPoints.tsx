const getPainPoints = (language: "ko" | "en") => [
  {
    emoji: "📋",
    problem: language === "ko" ? "보고서 작성에 하루 2시간" : "2 hours a day writing reports",
    reality: language === "ko"
      ? "사진 첨부, 수기 기록, 제출 반복. 정작 현장을 볼 시간이 없습니다."
      : "Attaching photos, manual logging, repeated submissions—no time left to actually watch the site.",
    solution: language === "ko"
      ? "iSafeGuard의 VLM AI가 오늘의 현장을 자연어 보고서로 자동 작성합니다."
      : "iSafeGuard's VLM AI automatically writes today's site report in natural language.",
  },
  {
    emoji: "📷",
    problem: language === "ko" ? "CCTV는 있는데 항상 볼 수가 없다" : "You have CCTV, but can't always watch it",
    reality: language === "ko"
      ? "카메라가 100+개여도 사람이 동시에 볼 수 없다면, 있는 것과 같습니다."
      : "Even with 100+ cameras, if no one can watch them all at once, they might as well not exist.",
    solution: language === "ko"
      ? "iSafeGuard AI가 100+채널을 동시에 분석하고 이상 징후만 즉시 알림합니다."
      : "iSafeGuard AI analyzes 100+ channels simultaneously and alerts you only on anomalies.",
  },
  {
    emoji: "⚖️",
    problem: language === "ko" ? "중대재해처벌법, 혼자 감당하기엔 너무 무겁다" : "Serious accident law is too heavy to bear alone",
    reality: language === "ko"
      ? "사고 발생 시 경영진도 형사처벌. 하지만 현장은 너무 넓고 인력은 부족합니다."
      : "Executives face criminal charges when accidents happen. But the site is vast and staff are scarce.",
    solution: language === "ko"
      ? "iSafeChain이 모든 안전 활동을 위변조 불가 기록으로 남깁니다."
      : "iSafeChain records all safety activities as tamper-proof evidence.",
  },
  {
    emoji: "🪖",
    problem: language === "ko" ? "교육을 받았는데도 또 사고가 난다" : "Accidents recur even after training",
    reality: language === "ko"
      ? "종이 한 장, PPT 한 시간. 근로자가 실제 위험을 체험한 적이 없습니다."
      : "One sheet of paper, one hour of slides. Workers have never experienced real danger.",
    solution: language === "ko"
      ? "iSafeMeta가 실제 현장 3D 환경에서 위험 상황을 직접 체험하게 합니다."
      : "iSafeMeta lets workers experience hazards firsthand in a real-site 3D environment.",
  },
];

export default function PainPoints({ language = "ko" }: { language?: "ko" | "en" }) {
  const painPoints = getPainPoints(language);

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
            {language === "ko" ? "현실" : "The Reality"}
          </p>
          <h2 className="text-3xl font-black text-white mb-4">
            {language === "ko"
              ? "안전 관리자라면 누구나 아는 그 답답함"
              : "The frustration every safety manager knows"}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {language === "ko"
              ? "iSafePlatform은 현장 안전 실무자들이 매일 마주하는 이 문제들을 자동화로 해결합니다."
              : "iSafePlatform solves the daily problems site safety practitioners face—through automation."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-gray-900 border border-gray-800 p-7 hover:border-gray-600 transition-colors"
            >
              {/* Problem */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl flex-shrink-0">{point.emoji}</span>
                <div>
                  <p className="text-base font-bold text-white mb-1">{point.problem}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{point.reality}</p>
                </div>
              </div>

              {/* Divider with arrow */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-800" />
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="flex-1 h-px bg-gray-800" />
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-blue-300 leading-relaxed font-medium">{point.solution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-base mb-2">
            {language === "ko"
              ? "반복되는 문제들, 이제 플랫폼이 대신합니다."
              : "Recurring problems—now the platform handles them for you."}
          </p>
          <p className="text-white text-xl font-black">
            {language === "ko"
              ? "안전 관리자가 진짜 중요한 일에 집중할 수 있도록."
              : "So safety managers can focus on what truly matters."}
          </p>
        </div>
      </div>
    </section>
  );
}
