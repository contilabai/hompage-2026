"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const featureGifs: Record<string, string> = {
  "smart-contract": "/gif/reward.gif",
  "feedback-loop": "/gif/6 iSafeMeta Token Economy Technology.gif",
};

const getChainFeatures = (language: "ko" | "en") => [
  {
    id: "immutable-record",
    reverse: false,
    tag: language === "ko" ? "위변조 불가 안전 기록" : "Tamper-Proof Safety Records",
    tagColor: "bg-orange-100 text-orange-700",
    headline: language === "ko"
      ? "사고 이후\n\"몰랐다\"는 말이\n통하지 않습니다"
      : "After an accident,\n\"I didn't know\" won't fly\nanymore",
    subhead: language === "ko"
      ? "모든 안전 활동이 자동으로 블록체인에 기록됩니다"
      : "Every safety activity automatically recorded on blockchain",
    desc: language === "ko"
      ? "중대재해처벌법 위반 시 사업주와 경영진도 형사처벌을 받습니다. '우리는 관리했다'는 주장만으로는 부족합니다. iSafeChain은 iSafeGuard의 감지 기록, iSafeMeta의 교육 이수, 위험구역 출입 이력을 위변조 불가 블록체인에 자동으로 저장합니다."
      : "Major accident penalties apply to executives too. Just saying \"we managed it\" isn't enough. iSafeChain auto-saves iSafeGuard detections, iSafeMeta completions, and hazard zone access to tamper-proof blockchain.",
    bullets: language === "ko"
      ? [
          "모든 안전 이벤트 자동 온체인 기록",
          "개인정보 마스킹 처리 후 해시값만 저장",
          "iSafeGuard·iSafeMeta 기록 자동 연동",
          "언제든지 출력 가능한 법적 증빙 문서",
        ]
      : [
          "All safety events auto-recorded on-chain",
          "PII masked, only hashes stored",
          "iSafeGuard & iSafeMeta records auto-synced",
          "Printable legal documentation anytime",
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
      ? "안전 수칙을\n지킨 근로자에게\n자동으로 보상합니다"
      : "Reward workers who\nfollow safety—\nautomatically",
    subhead: language === "ko"
      ? "규정과 처벌만으로는 안전 문화를 만들 수 없습니다"
      : "Rules and penalties alone don't build safety culture",
    desc: language === "ko"
      ? "스마트 컨트랙트가 안전 수칙 준수, 교육 이수, 위험 구역 신고를 자동으로 감지하고 인센티브 포인트를 즉시 지급합니다. 근로자가 스스로 안전을 지키고 싶어지는 환경을 만듭니다. 관리자의 개입 없이 자동으로 운영됩니다."
      : "Smart contracts auto-detect safety compliance, training completion, and hazard reporting—instantly issuing incentive points. Workers want to stay safe. Zero manual management.",
    bullets: language === "ko"
      ? [
          "안전 수칙 연속 준수 시 자동 포인트 적립",
          "가상 교육 이수 완료 시 자동 보상",
          "위험 구역 발견·신고 시 즉시 인센티브",
          "월간 안전 우수 근로자 자동 선정",
        ]
      : [
          "Auto-award points for continuous safety compliance",
          "Auto-reward when virtual training completes",
          "Instant incentive for hazard discovery and reporting",
          "Auto-select monthly safety excellence workers",
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
  {
    id: "feedback-loop",
    reverse: false,
    tag: language === "ko" ? "자율 진화 피드백 루프" : "Self-Evolving Feedback Loop",
    tagColor: "bg-red-100 text-red-700",
    headline: language === "ko"
      ? "쓸수록 강해지는\niSafePlatform의\n비밀"
      : "The secret to\niSafePlatform's power:\nit gets stronger with use",
    subhead: language === "ko"
      ? "iSafeChain이 수집한 데이터로 모든 모듈이 스스로 개선됩니다"
      : "Every module self-improves using iSafeChain's data",
    desc: language === "ko"
      ? "iSafeChain에 누적된 사고·위반·이수 데이터는 단순 기록으로 끝나지 않습니다. iSafePlanner의 위험도 가중치를 재조정하고, iSafeMeta가 특화 훈련을 자동 할당하며, iSafeGuard의 감지 임계치를 강화합니다. 플랫폼이 사용될수록 우리 현장에 맞게 진화합니다."
      : "iSafeChain data—incidents, violations, completions—isn't just stored. It reweights iSafePlanner's risk scores, auto-assigns iSafeMeta specialized training, and sharpens iSafeGuard detection thresholds. The platform evolves to fit your site.",
    bullets: language === "ko"
      ? [
          "누적 위반 데이터 → iSafePlanner 위험도 자동 재조정",
          "반복 위반 패턴 → iSafeMeta 특화 훈련 자동 할당",
          "위반율 트렌드 → iSafeGuard 감지 임계치 자동 강화",
          "월별 플랫폼 개선 리포트 자동 발행",
        ]
      : [
          "Violation data → iSafePlanner risk scores auto-recalibrate",
          "Repeat patterns → iSafeMeta specialized training auto-assigned",
          "Violation trends → iSafeGuard detection thresholds auto-strengthen",
          "Monthly platform improvement report auto-generated",
        ],
    placeholder: {
      title: language === "ko"
        ? "3종 피드백 루프 자동 개선 현황 화면"
        : "3-Module Feedback Loop Auto-Improvement Dashboard",
      description: language === "ko"
        ? "iSafeChain 데이터가 Planner·Meta·Guard에 어떻게 피드백되는지 보여주는 시각화 화면"
        : "Visualization of how iSafeChain data feeds back to Planner, Meta, and Guard",
    },
    ctaBg: "bg-red-600 hover:bg-red-700",
    bgClass: "bg-white",
  },
];

const getSteps = (language: "ko" | "en") => [
  {
    step: "01",
    title: language === "ko" ? "암호화 식별자 등록" : "Register Encrypted IDs",
    desc: language === "ko"
      ? "모든 근로자와 카메라 노드에 암호화된 고유 ID를 등록합니다. 개인정보는 마스킹 처리됩니다."
      : "Register encrypted unique IDs for all workers and camera nodes. Personal info is masked.",
  },
  {
    step: "02",
    title: language === "ko" ? "안전 활동 자동 기록" : "Auto-Record Safety Activity",
    desc: language === "ko"
      ? "iSafeGuard와 iSafeMeta의 모든 안전 이벤트가 자동으로 수집되어 블록체인 해시로 저장됩니다."
      : "All safety events from iSafeGuard and iSafeMeta auto-collected and stored as blockchain hashes.",
  },
  {
    step: "03",
    title: language === "ko" ? "리워드 지급 및 피드백 루프 가동" : "Rewards & Feedback Loop Live",
    desc: language === "ko"
      ? "스마트 컨트랙트가 보상을 자동 지급하고, 누적 데이터가 플랫폼 전체를 자동으로 강화합니다."
      : "Smart contracts auto-issue rewards, cumulative data auto-strengthens the entire platform.",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">iSafeChain</span>
                  <span className="px-3 py-1 bg-white/10 text-orange-200 text-xs rounded-full">
                    {language === "ko" ? "기록 모듈" : "Measure Module"}
                  </span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  {language === "ko" ? (
                    <>
                      사고 이후<br />
                      <span className="text-orange-300">기록이 없으면</span><br />
                      당신을 지킬 수 없습니다
                    </>
                  ) : (
                    <>
                      After an accident,<br />
                      <span className="text-orange-300">no record means</span><br />
                      we can't protect you
                    </>
                  )}
                </h1>
                <p className="text-orange-100 text-base leading-relaxed mb-4 max-w-md">
                  {language === "ko"
                    ? "중대재해처벌법 위반 시 사업주도 형사처벌을 받습니다. \"관리를 했다\"는 주장은 증거 없이 인정되지 않습니다."
                    : "Major accident penalties apply to executives too. \"We managed it\" won't hold up without evidence."}
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  {language === "ko"
                    ? "iSafeChain은 모든 안전 활동을 위변조 불가 기록으로 자동으로 쌓습니다."
                    : "iSafeChain auto-builds tamper-proof records of every safety activity."}
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
                      iSafeChain · {language === "ko" ? "블록체인 안전 거버넌스" : "Blockchain Safety Governance"}
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
                  value: language === "ko" ? "위변조 불가" : "Tamper-Proof",
                  label: language === "ko" ? "블록체인 기록" : "Blockchain Records",
                },
                {
                  value: language === "ko" ? "자동" : "Automatic",
                  label: language === "ko" ? "스마트 컨트랙트 리워드" : "Smart Contract Rewards",
                },
                {
                  value: language === "ko" ? "3종" : "3 Types",
                  label: language === "ko" ? "자율 피드백 루프" : "Self-Feedback Loop",
                },
                {
                  value: "24/7",
                  label: language === "ko" ? "무중단 기록 저장" : "Uninterrupted Recording",
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
                  <p className="text-sm font-semibold text-orange-600 mb-3">{feature.subhead}</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white ${feature.ctaBg} rounded-lg transition-colors w-fit`}
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                {featureGifs[feature.id] ? (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={featureGifs[feature.id]}
                      alt={feature.placeholder.title}
                      className="absolute inset-0 w-full h-full object-cover"
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
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "도입 절차" : "Implementation Process"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko" ? "설정 이후 모든 것은 자동입니다" : "Everything Runs Automatically After Setup"}
              </h2>
              <p className="text-gray-500">
                {language === "ko"
                  ? "한 번 설정하면 iSafeChain이 알아서 기록하고, 보상하고, 개선합니다."
                  : "Once configured, iSafeChain auto-records, auto-rewards, auto-improves."}
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#7c2d12] to-[#ea580c] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">
                  {language === "ko" ? (
                    <>
                      사고가 나기 전에 기록을<br />
                      준비해야 합니다
                    </>
                  ) : (
                    <>
                      Build your record<br />
                      before trouble hits
                    </>
                  )}
                </h2>
                <p className="text-orange-100 mb-8 leading-relaxed">
                  {language === "ko"
                    ? "사고가 발생한 후에 기록을 모으려 하면 늦습니다. iSafeChain은 매일의 안전 활동을 자동으로 쌓아두어, 필요할 때 언제든지 꺼낼 수 있는 법적 증빙을 만들어 줍니다."
                    : "Waiting until after an accident to gather records is too late. iSafeChain auto-builds a daily record, ready to pull whenever you need legal proof."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-orange-800 bg-white hover:bg-orange-50 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  </a>
                  <Link
                    href="/platform"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "Platform Core 알아보기" : "Learn About Platform Core"}
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImagePlaceholder
                  title={language === "ko" ? "iSafeChain 법적 증빙 문서 샘플" : "iSafeChain Legal Proof Document Sample"}
                  description={language === "ko"
                    ? "iSafeChain이 생성하는 법원 제출용 안전 활동 기록 증빙 문서"
                    : "Court-ready safety activity record proof generated by iSafeChain"}
                  aspectRatio="4/3"
                  className="border-white/20 bg-white/5"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}
