"use client";

export default function PartnersTab({ language }: { language: "ko" | "en" }) {
  return (
    <section className="py-20 bg-white" id="partners">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="mb-12 reveal">
          <p className="text-[18px] font-semibold text-amber-500 uppercase tracking-widest mb-3">Partners</p>
          <div className="w-12 h-0.5 bg-amber-400 mb-5" />
          <p className="text-[21px] text-gray-500 max-w-2xl leading-relaxed">
            {language === "ko"
              ? "공공기관, 민간 기업, 기술 협력사와 함께 현장 검증을 거치며 iSafePlatform을 발전시켜 왔습니다."
              : "We've advanced iSafePlatform through field validation alongside public agencies, private enterprises, and technology partners."}
          </p>
        </div>
        <div className="space-y-14">
          {[
            {
              label: language === "ko" ? "공공기관" : "Public Agency",
              delay: "",
              items: [
                { name: "ex 한국도로공사", color: "text-red-600" },
                { name: "서울특별시\n도시기반시설본부", color: "" },
                { name: "국토안전관리원", color: "text-green-700" },
                { name: "SH 서울주택도시공사", color: "" },
                { name: "경기주택도시공사", color: "" },
              ],
            },
            {
              label: language === "ko" ? "민간 기업" : "Private Enterprises",
              delay: "d1",
              items: [
                { name: "코오롱글로벌(주)", color: "text-[#009639]" },
                { name: "SK Nexilis", color: "text-[#EA002C]" },
                { name: "DL E&C", color: "text-[#003087]" },
                { name: "APPROTIUM", color: "text-[#00857C]" },
                { name: "ISC", color: "text-[#0067B1]" },
              ],
            },
            {
              label: language === "ko" ? "기술협력사" : "Collaboration Tech Company",
              delay: "d2",
              items: [
                { name: "Deeper-I", color: "" }, { name: "SimPlatform", color: "" },
                { name: "HANLIM", color: "" }, { name: "RiskZero", color: "text-red-600" },
                { name: "씨아이솔루션", color: "" }, { name: "AIChemist", color: "" }, { name: "musma", color: "" },
              ],
            },
          ].map((group, gi) => (
            <div key={gi} className={`reveal ${group.delay}`}>
              <h3 className="text-[18px] font-semibold text-amber-500 uppercase tracking-widest mb-2">{group.label}</h3>
              <div className="w-8 h-0.5 bg-amber-400 mb-6" />
              <div className="flex flex-wrap gap-3">
                {group.items.map((p) => (
                  <div key={p.name} className="px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-[21px] font-semibold text-center whitespace-pre-line leading-snug">
                    <span className={p.color || "text-gray-700"}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
