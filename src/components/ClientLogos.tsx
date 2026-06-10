const logos = [
  "한국도로공사",
  "서울특별시 도시기반시설본부",
  "국토안전관리원",
  "SH 서울주택도시공사",
  "경기주택도시공사",
  "코오롱글로벌(주)",
  "SK Nexilis",
  "DL E&C",
  "APPROTIUM",
  "ISC",
  "Deeper-I",
  "SimPlatform",
  "HANLIM",
  "RiskZero",
  "씨아이솔루션",
  "AIChemist",
  "musma"
];

const logosEn = [
  "Korea Expressway Corp.",
  "Seoul Metropolitan Infrastructure Headquarters",
  "Korea Authority of Land & Infrastructure Safety",
  "Seoul Housing & Communities",
  "Gyeonggi Housing & Urban Development Corp.",
  "Kolon Global Corp.",
  "SK Nexilis",
  "DL E&C",
  "APPROTIUM",
  "ISC",
  "Deeper-I",
  "SimPlatform",
  "HANLIM",
  "RiskZero",
  "CI Solution",
  "AIChemist",
  "musma"
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
            ? "공공기관 및 건설·제조·기술 분야의 핵심 기업, 파트너사들과 협력하여 기술 검증을 완료했습니다"
            : "We have completed technology verification in collaboration with public institutions, leading companies in the construction, manufacturing, and technology sectors, as well as our partner firms"}
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
