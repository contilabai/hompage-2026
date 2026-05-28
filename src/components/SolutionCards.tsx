import Link from "next/link";

const solutions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    badgeColor: "bg-red-50 text-red-700",
    badge: "중대재해처벌법 대응",
    title: "중대재해 예방",
    desc: "위험성 평가와 모바일 TBM으로 중대재해를 사전에 예방하세요.",
    items: ["위험성 평가 자동화", "모바일 TBM 작성", "안전교육 이력 관리", "아차사고 신고"],
    href: "#accident-prevention",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    badgeColor: "bg-orange-50 text-orange-700",
    badge: "IoT 안전장비",
    title: "스마트 안전장비",
    desc: "작업자 중심의 스마트 안전장비로 현장 안전수준을 높이세요.",
    items: ["스마트 안전모/조끼", "작업자별 영상기록", "안전관리 비용 배분", "장비 현황 모니터링"],
    href: "#smart-safety",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-50 text-blue-700",
    badge: "법정 영상 기록",
    title: "동영상 기록관리",
    desc: "촬영부터 편집, 관리까지 건설현장 영상기록 전 과정을 한 곳에서.",
    items: ["촬영계획서 자동 생성", "장비 대여/관리", "영상 편집 서비스", "클라우드 보관"],
    href: "#video",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    badgeColor: "bg-green-50 text-green-700",
    badge: "디지털 전환",
    title: "공정관리 시스템",
    desc: "일보, 공정표, 원격 감리로 현장 공정관리를 디지털화하세요.",
    items: ["일일 현장일보", "공정표 자동 생성", "원격 감리 지원", "관계사 협업 포털"],
    href: "#process-management",
  },
];

export default function SolutionCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">솔루션</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            건설현장에 필요한 모든 솔루션
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            중대재해 예방부터 공정관리 디지털 전환까지, 현장의 모든 요구사항을 하나의 플랫폼으로 해결합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => (
            <Link
              key={sol.title}
              href={sol.href}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200 bg-white flex flex-col"
            >
              <div className={`w-12 h-12 ${sol.iconBg} ${sol.iconColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {sol.icon}
              </div>

              <span className={`inline-block px-2 py-0.5 text-xs font-medium ${sol.badgeColor} rounded-md mb-3 w-fit`}>
                {sol.badge}
              </span>

              <h3 className="text-[17px] font-bold text-gray-900 mb-2">{sol.title}</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed flex-1">{sol.desc}</p>

              <ul className="space-y-2">
                {sol.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-blue-600">
                자세히 보기
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
