"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const featureGifs: Record<string, string> = {
  "immutable-record": "/images/blockchain.jpg",
  "smart-contract": "/gif/reward.gif",
  "feedback-loop": "/gif/6 iSafeMeta Token Economy Technology.gif",
};

const getChainFeatures = (language: "ko" | "en") => [
  {
    id: "immutable-record",
    reverse: false,
    tag: language === "ko" ? "위변조 불가 안전 기록" : "Forge-Proof Safety Records",
    tagColor: "bg-orange-100 text-orange-700",
    headline: language === "ko"
      ? "안전관리의 노력을\n신뢰할 수 있는 기록으로 남깁니다"
      : "Leave safety management efforts\nas reliable records",
    subhead: language === "ko"
      ? "안전관리의 가치는 기록될 때 증명됩니다."
      : "The value of safety management is proven when it is recorded.",
    desc: language === "ko"
      ? "iSafeIncentive는 현장에서 발생하는 모든 안전활동을 자동으로 기록하고 관리합니다. 기록된 데이터는 안전수준 평가와 성과 분석, 그리고 신뢰할 수 있는 증빙의 기반이 됩니다."
      : "iSafeIncentive automatically records and manages all safety activities occurring on-site. The recorded data becomes the foundation for safety level evaluations, performance analyses, and reliable evidence.",
    bullets: language === "ko"
      ? [
          "모든 안전 이벤트 자동 기록",
          "블록체인 기반 이력 관리",
          "안전수준 및 성과 평가",
          "증빙 문서 자동 생성",
        ]
      : [
          "Automatic recording of all safety events",
          "Blockchain-based history management",
          "Evaluation of safety levels and performance",
          "Automatic generation of evidence documents",
        ],
    placeholder: {
      title: language === "ko"
        ? "안전 기록 블록체인 저장 및 증빙 문서 화면"
        : "Safety Records Blockchain Storage & Proof Document",
      description: language === "ko"
        ? "안전 이벤트 타임라인과 법적 증빙용 블록체인 기록 조회 화면"
        : "Safety event timeline and blockchain record query for legal proof",
    },
    ctaBg: "bg-orange-600 hover:bg-orange-700",
    bgClass: "bg-white",
  },
  {
    id: "smart-contract",
    reverse: true,
    tag: language === "ko" ? "스마트 컨트랙트 리워드" : "Smart Contract Rewards",
    tagColor: "bg-yellow-100 text-yellow-700",
    headline: language === "ko"
      ? "안전은 의무가 아니라,\n모두가 얻는 가치가 됩니다"
      : "Safety is not an obligation,\nbut a value everyone gains",
    subhead: language === "ko"
      ? "iSafeIncentive는 안전하게 행동한 만큼 인정받고 보상받는 환경을 만듭니다"
      : "iSafeIncentive creates an environment where acting safely is recognized and rewarded.",
    desc: language === "ko"
      ? "교육, 위험예방, 안전수칙 준수 활동이 자동으로 평가되어 포인트와 인센티브로 연결됩니다."
      : "Training, risk prevention, and safety compliance activities are automatically evaluated and linked to points and incentives.",
    bullets: language === "ko"
      ? [
          "안전활동 자동 평가",
          "포인트 자동 적립",
          "우수 근로자 자동 선정",
          "자발적 안전문화 조성",
        ]
      : [
          "Automatic evaluation of safety activities",
          "Automatic accumulation of points",
          "Automatic selection of excellent workers",
          "Fostering a voluntary safety culture",
        ],
    placeholder: {
      title: language === "ko"
        ? "스마트 컨트랙트 리워드 현황 대시보드"
        : "Smart Contract Rewards Dashboard",
      description: language === "ko"
        ? "근로자별 인센티브 포인트 적립 현황과 자동 지급 내역 화면"
        : "Per-worker incentive point status and auto-payment history",
    },
    ctaBg: "bg-yellow-600 hover:bg-yellow-700",
    bgClass: "bg-gray-50",
  },
];

const getSteps = (language: "ko" | "en") => [
  {
    step: "01",
    title: language === "ko" ? "암호화 식별자 등록" : "Register Encrypted IDs",
    desc: language === "ko"
      ? "개인정보는 마스킹 처리되며, 안전활동 기록만 안전하게 관리됩니다."
      : "Personal information is masked, and only safety activity records are securely managed.",
  },
  {
    step: "02",
    title: language === "ko" ? "안전 활동 자동 기록" : "Auto-Record Safety Activity",
    desc: language === "ko"
      ? "발생한 모든 안전 이벤트는 자동으로 수집되어 블록체인 해시 기반의 위변조 방지 기록으로 보관됩니다."
      : "All safety events that occur are automatically collected and stored as forge-proof records based on blockchain hashes.",
  },
  {
    step: "03",
    title: language === "ko" ? "보상 지급" : "Rewards Payout",
    desc: language === "ko"
      ? "스마트 컨트랙트가 인센티브를 자동 지급하고, 축적된 안전 데이터는 플랫폼 전체의 안전문화와 안전수준을 지속적으로 향상시킵니다."
      : "Smart contracts automatically pay out incentives, and the accumulated safety data continuously improves the safety culture and standards across the entire platform.",
  },
];

export default function ISafeChainPage() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
    if (savedLang) {
      setLanguage(savedLang);
    }

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#3d1200] via-[#7c2d12] to-[#ea580c] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:h-[560px]">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">iSafeIncentive</span>
                  <span className="px-3 py-1 bg-white/10 text-orange-200 text-xs rounded-full">
                    {language === "ko" ? "기록 모듈" : "Measure Module"}
                  </span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  {language === "ko" ? (
                    <>
                      안전활동은 사라지지 않습니다<br />
                      <span className="text-orange-300">모두 데이터로</span><br />
                      남습니다
                    </>
                  ) : (
                    <>
                      Every safety activity<br />
                      <span className="text-orange-300">stays as a record</span><br />
                      that can't be erased
                    </>
                  )}
                </h1>
                <p className="text-orange-100 text-base leading-relaxed mb-4 max-w-md">
                  {language === "ko"
                    ? "누가, 언제, 어떤 안전활동을 수행했는지 기록되지 않으면 평가도 개선도 어렵습니다."
                    : "If who, when, and what kind of safety activities were performed are not recorded, it is difficult to evaluate or improve."}
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  {language === "ko"
                    ? "iSafeIncentive는 현장의 모든 안전활동을 자동으로 기록하고 분석하여 안전수준을 객관적으로 측정합니다."
                    : "iSafeIncentive automatically records and analyzes all safety activities on-site to objectively measure safety levels."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-orange-900 bg-white hover:bg-orange-50 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  </a>
                  <Link
                    href="#immutable-record"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "기능 살펴보기 ↓" : "Explore Features ↓"}
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-orange-500/30 p-4 shadow-2xl shadow-orange-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">
                      iSafeIncentive · {language === "ko" ? "블록체인 안전 거버넌스" : "Blockchain Safety Governance"}
                    </span>
                  </div>
                  <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/gif/iSafeChain.gif"
                      alt={language === "ko" ? "블록체인 안전 기록 저장" : "Blockchain Safety Record Storage"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-orange-400 text-sm flex-shrink-0">🔗</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "감지·교육·출입 등 모든 안전 활동을 위변조 불가 블록체인에 자동으로 저장합니다."
                          : "Automatically stores all safety activity—detection, training, access—on a tamper-proof blockchain."}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-green-400 text-sm flex-shrink-0">🎁</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "법적 증빙이 완성되고, 스마트 컨트랙트로 근로자에게 보상이 자동 지급됩니다."
                          : "Builds legal evidence and automatically rewards workers via smart contracts."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-orange-600 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-orange-500">
              {[
                {
                  value: "Record",
                  label: language === "ko" ? "모든 안전활동 자동 기록" : "Automatic recording of all safety activities",
                },
                {
                  value: "Trust",
                  label: language === "ko" ? "블록체인 기반 신뢰성 확보" : "Securing reliability based on blockchain",
                },
                {
                  value: "Measure",
                  label: language === "ko" ? "안전수준 및 안전성과 평가" : "Evaluation of safety levels and safety performance",
                },
                {
                  value: "Improve",
                  label: language === "ko" ? "인센티브 기반 안전문화 혁신" : "Incentive-based safety culture innovation",
                },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-orange-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature sections */}
        {getChainFeatures(language).map((feature) => (
          <section key={feature.id} id={feature.id} className={`py-20 ${feature.bgClass}`}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${feature.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                <div className="flex flex-col justify-center">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold ${feature.tagColor} rounded-full mb-4 w-fit`}>
                    {feature.tag}
                  </span>
                  <h2 className="text-[30px] font-black text-gray-900 whitespace-pre-line leading-tight mb-3">
                    {feature.headline}
                  </h2>
                  <p className="text-[18px] font-semibold text-orange-600 mb-3">{feature.subhead}</p>
                  <p className="text-[19px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[18px] text-gray-700">
                        <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {featureGifs[feature.id] ? (
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <img
                      src={featureGifs[feature.id]}
                      alt={feature.placeholder.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    title={feature.placeholder.title}
                    description={feature.placeholder.description}
                    aspectRatio="4/3"
                  />
                )}
              </div>
            </div>
          </section>
        ))}

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-2xl font-semibold text-orange-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "도입 절차" : "Implementation Process"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko" ? "설정 이후 모든 것은 자동입니다" : "Everything Runs Automatically After Setup"}
              </h2>
              <p className="text-gray-500">
                {language === "ko"
                  ? "한 번 설정하면 iSafeIncentive이 알아서 기록하고, 보상하고, 개선합니다."
                  : "Once configured, iSafeIncentive auto-records, auto-rewards, auto-improves."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-orange-200" />
              {getSteps(language).map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7c2d12] to-[#ea580c] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer language={language} />
    </>
  );
}
