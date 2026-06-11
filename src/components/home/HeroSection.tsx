"use client";

import Link from "next/link";
import Image from "next/image";

type Lang = "ko" | "en";

const getFeatures = (l: Lang) => [
  {
    title: l === "ko" ? "현장 기반 위험성평가" : "Field-based Risk Assessment",
    desc: l === "ko" ? "실제 작업 환경을 반영한 정확한 위험성평가" : "Accurate assessment reflecting the real work environment",
    color: "bg-green-50 text-green-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: l === "ko" ? "실제 사례 기반 안전교육" : "Case-based Safety Training",
    desc: l === "ko" ? "메타버스와 AI로 더 효과적인 안전교육 제공" : "More effective training powered by metaverse & AI",
    color: "bg-red-50 text-red-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
    ),
  },
  {
    title: l === "ko" ? "Vision AI 위험 감지" : "Vision AI Hazard Detection",
    desc: l === "ko" ? "실시간 위험 감지와 즉시 경고 알림" : "Real-time detection with instant alerts",
    color: "bg-blue-50 text-blue-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
  },
  {
    title: l === "ko" ? "안전수준 평가 및 개선" : "Safety-level Evaluation",
    desc: l === "ko" ? "데이터 기반 분석으로 지속적인 안전관리 혁신" : "Continuous innovation through data-driven analysis",
    color: "bg-orange-50 text-orange-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
  },
];

export default function HeroSection({ language = "ko" }: { language?: Lang }) {
  const features = getFeatures(language);

  return (
    <section className="pt-[88px] bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-lg sm:text-xl font-bold text-blue-600 mb-4">
              AI-Driven Safety Transformation
            </p>
            <h1 className="text-[40px] sm:text-[52px] font-black text-gray-900 leading-[1.12] mb-6">
              {language === "ko" ? (
                <>
                  위험을 예측하고,
                  <br />
                  <span className="text-blue-600">안전문화를 혁신합니다</span>
                </>
              ) : (
                <>
                  Predict hazards,
                  <br />
                  <span className="text-blue-600">transform safety culture</span>
                </>
              )}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[480px] mb-8">
              {language === "ko"
                ? "실제 작업현장이 반영된 위험성평가와 안전교육, Vision AI 기반 위험 감지, 안전활동 분석을 통해 자발적 안전관리를 실현합니다."
                : "We realize voluntary safety management through field-reflected risk assessment and training, Vision AI-based hazard detection, and safety-activity analysis."}
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
            >
              {language === "ko" ? "솔루션 보기" : "Explore Solutions"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: AI safety monitoring visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/2] bg-gray-200">
            <Image
              src="/images/main.png"
              alt={language === "ko" ? "AI 안전 관제 현장" : "AI-monitored construction site"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </div>
        </div>

        {/* Feature bar */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 border-t border-gray-100 pt-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-start">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${f.color}`}>
                {f.icon}
              </div>
              <p className="text-[15px] font-bold text-gray-900 mb-1">{f.title}</p>
              <p className="text-sm text-gray-500 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
