"use client";

import Link from "next/link";

export default function CompanyTab({ language }: { language: "ko" | "en" }) {
  return (
    <>
      {/* Vision */}
      <section className="py-20 bg-white" id="contilab">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl reveal">
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">
              {language === "ko" ? "Our Vision" : "Our Vision"}
            </p>
            <div className="w-12 h-0.5 bg-amber-400 mb-8" />
            <div className="space-y-6 text-[22px] text-gray-600 leading-relaxed">
              <p>
                {language === "ko"
                  ? "산업현장의 안전은 규정과 점검만으로 완성되지 않습니다. 실제 작업환경과 작업 특성이 반영된 위험성평가, 현장 중심의 안전교육, 그리고 근로자 스스로 참여하는 안전문화가 함께 구축되어야 합니다."
                  : "Safety at industrial sites is not achieved through regulations and inspections alone. It requires risk assessments that reflect the actual working environment and task characteristics, site-centered safety education, and a safety culture in which workers themselves actively participate."}
              </p>
              <p>
                {language === "ko"
                  ? "콘티랩은 실제 현장에서 수집되는 영상과 데이터를 기반으로 위험성평가와 안전교육을 지원하고, Vision AI를 활용하여 작업 중 발생하는 위험상황을 실시간으로 감지합니다. 또한 현장의 다양한 안전활동과 작업 이력을 기록·분석하여 안전수준을 객관적으로 평가하고, 구성원들이 자발적으로 안전관리에 참여할 수 있는 환경을 만들어가고 있습니다."
                  : "ConTI Lab supports risk assessment and safety education based on video and data collected from actual sites, and uses Vision AI to detect hazardous situations during work in real time. We also record and analyze diverse on-site safety activities and work histories to objectively evaluate safety levels, building an environment where members voluntarily participate in safety management."}
              </p>
              <p>
                {language === "ko"
                  ? "우리는 단순한 위험 탐지를 넘어, 데이터와 AI를 통해 사고를 예방하고 안전문화를 혁신하는 산업안전 플랫폼 기업으로 성장해 나가겠습니다."
                  : "Beyond simple hazard detection, we will grow into an industrial safety platform company that prevents accidents and innovates safety culture through data and AI."}
              </p>
              <p>{language === "ko" ? "감사합니다." : "Thank you."}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                {language === "ko" ? "콘티랩 대표이사" : "CEO of ConTI Lab"}
              </p>
              <p className="text-lg font-bold text-gray-900">
                {language === "ko" ? "박찬식" : "Chan-sik Park"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b2a3b] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-3xl font-black mb-5">
            {language === "ko" ? "파트너십 및 기술 협력 문의" : "Partnership & Technical Collaboration"}
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
            {language === "ko"
              ? "ConTILab은 공공기관 및 국내외 탑티어 건설사들과 협력하며 기술 검증을 완료했습니다.\n도입 상담, 공동 연구, 파트너십 제안을 환영합니다."
              : "ConTI Lab has completed technology validation in collaboration with public agencies and top-tier construction companies nationwide.\nWe welcome inquiries about implementation, joint research, and partnership proposals."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:contilab@contilab.co.kr" className="px-8 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg">contilab@contilab.co.kr</a>
            <Link href="/platform" className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors">
              {language === "ko" ? "iSafePlatform 보기" : "View iSafePlatform"}
            </Link>
          </div>
          <p className="text-blue-300/60 text-xs mt-6">
            {language === "ko"
              ? "서울특별시 동작구 흑석로 84 중앙대학교 208관 201호"
              : "Rm 201, Building 208, Chung-Ang University, 84 Heukseok-ro, Dongjak-gu, Seoul"}
          </p>
        </div>
      </section>
    </>
  );
}
