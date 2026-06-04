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

const logosEn = [
  "Seoul Metropolitan Gov.",
  "Seoul Housing & Communities",
  "Ministry of Oceans & Fisheries",
  "Ministry of Land & Transport",
  "LH Korea Land & Housing",
  "GS E&C",
  "Samsung C&T",
  "Hyundai E&C",
  "Daewoo E&C",
  "Lotte E&C",
  "SK ecoplant",
  "POSCO E&C",
  "Hanwha E&C",
  "HDC HYUNDAI",
  "KEPCO",
  "GS Power",
  "SK Telecom",
  "Samsung Electronics",
  "Seoul Metro",
  "Korea Expressway Corp.",
  "KORAIL",
  "Busan Port Authority",
];

export default function ClientLogos({ language = "ko" }: { language?: "ko" | "en" }) {
  const list = language === "ko" ? logos : logosEn;
  const doubled = [...list, ...list];

  const stats = [
    { value: "100+", label: language === "ko" ? "도입 현장 수" : "Deployment Sites" },
    { value: "99%", label: language === "ko" ? "AI 감지 정확도" : "AI Detection Accuracy" },
    { value: language === "ko" ? "4종" : "4", label: language === "ko" ? "핵심 AI 모듈" : "Core AI Modules" },
    { value: "24/7", label: language === "ko" ? "기술 지원" : "Technical Support" },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-10 text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
          {language === "ko" ? "고객사" : "Our Clients"}
        </p>
        <h2 className="text-3xl font-black text-gray-900">
          {language === "ko" ? (
            <>국내 최고 기관이 신뢰하는 <span className="text-blue-600">iSafePlatform</span></>
          ) : (
            <><span className="text-blue-600">iSafePlatform</span>, trusted by Korea&apos;s leading institutions</>
          )}
        </h2>
        <p className="mt-3 text-gray-500 text-base">
          {language === "ko"
            ? "공공기관 및 국내외 탑티어 건설사들과 협력하며 기술 검증을 완료했습니다"
            : "Technology validated through partnerships with public agencies and top-tier construction firms"}
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
          {stats.map((stat) => (
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
