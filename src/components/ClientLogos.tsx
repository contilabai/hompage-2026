const logos = [
  "서울특별시",
  "서울주택도시공사",
  "해양수산부",
  "국토교통부",
  "LH한국토지주택공사",
  "GS건설",
  "삼성물산",
  "현대건설",
  "대우건설",
  "롯데건설",
  "SK에코플랜트",
  "포스코이앤씨",
  "한화건설",
  "HDC현대산업개발",
  "한국전력공사",
  "GS파워",
  "SK텔레콤",
  "삼성전자",
  "서울교통공사",
  "한국도로공사",
  "코레일",
  "부산항만공사",
];

export default function ClientLogos() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-10 text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
          고객사
        </p>
        <h2 className="text-3xl font-black text-gray-900">
          국내 최고 기관이 신뢰하는 <span className="text-blue-600">ISafePlatform</span>
        </h2>
        <p className="mt-3 text-gray-500 text-base">
          공공기관 및 국내외 탑티어 건설사들과 협력하며 기술 검증을 완료했습니다
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <div className="flex gap-4 marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-100 text-[13px] font-medium text-gray-600 whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "4,500+", label: "도입 현장 수" },
            { value: "99%", label: "AI 감지 정확도" },
            { value: "4종", label: "핵심 AI 모듈" },
            { value: "24/7", label: "기술 지원" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-6 px-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-black text-blue-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
