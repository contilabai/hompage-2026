"use client";

import Image from "next/image";

interface Partner {
  name: string;
  logo?: string;
  color?: string;
}

const getGroups = (language: "ko" | "en"): { label: string; delay: string; items: Partner[] }[] => [
  {
    label: language === "ko" ? "공공기관" : "Public Agency",
    delay: "",
    items: [
      { name: "한국도로공사", logo: "partner-ex.png" },
      { name: language === "ko" ? "서울특별시 도시기반시설본부" : "Seoul Metropolitan Government", logo: "partners-seoul-city.jpg" },
      { name: language === "ko" ? "국토안전관리원" : "KALIS", logo: "partners-kalis.jpg" },
      { name: "SH 서울주택도시공사", logo: "partners-seoul-housing.jpg" },
      { name: language === "ko" ? "경기주택도시공사" : "Gyeonggi Housing", logo: "partners-gyeonggi-housing.jpg" },
    ],
  },
  {
    label: language === "ko" ? "민간 기업" : "Private Enterprises",
    delay: "d1",
    items: [
      { name: "SK Nexilis", logo: "sk nexilis.png" },
      { name: language === "ko" ? "SK에코플랜트" : "SK ecoplant", logo: "partners-sk-ecoplant.jpg" },
      { name: "APPROTIUM", logo: "partners-posco-approtium.jpg" },
      { name: "DL E&C", logo: "DL-E&C(좌우).jpg" },
      { name: "코오롱글로벌(주)", logo: "kolon global.png" },
      { name: "ISC", logo: "ISC.png" },
    ],
  },
  {
    label: language === "ko" ? "기술협력사" : "Collaboration Tech Company",
    delay: "d2",
    items: [
      { name: "Deeper-I", logo: "partners-deeper-i.jpg" },
      { name: "SimPlatform", logo: "partners-simplatform.jpg" },
      { name: "HANLIM", logo: "partners-hanraim.jpg" },
      { name: "RiskZero", logo: "partners-risk-zero.jpg" },
      { name: language === "ko" ? "씨아이솔루션" : "CI Solution", logo: "partners-ci-solution.jpg" },
      { name: "musma", logo: "partners-musma.jpg" },
      { name: "K-DeepLearning", logo: "partners-k-deeplearning.jpg" },
      { name: "AIChemist", color: "" },
    ],
  },
];

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
          {getGroups(language).map((group, gi) => (
            <div key={gi} className={`reveal ${group.delay}`}>
              <h3 className="text-[20px] font-bold text-gray-900 mb-2">{group.label}</h3>
              <div className="w-8 h-0.5 bg-amber-400 mb-6" />
              <div className="flex flex-wrap gap-4">
                {group.items.map((p) =>
                  p.logo ? (
                    <div
                      key={p.name}
                      className="w-[180px] h-[96px] bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center shadow-sm"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={`/images/clients/${p.logo}`}
                          alt={p.name}
                          fill
                          className="object-contain"
                          sizes="160px"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      key={p.name}
                      className="w-[180px] h-[96px] bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center px-4 text-center"
                    >
                      <span className={`text-[19px] font-semibold whitespace-pre-line leading-snug ${p.color || "text-gray-700"}`}>
                        {p.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
