"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ISafeMetaScenario from "@/components/isafe-meta/ISafeMetaScenario";

const featureGifs: Record<string, string> = {
  "virtual-env": "/gif/reality-capture-pipeline.gif",
  "lms": "/gif/3 iSafeMeta Gangform Content Retrieval and training progress.gif",
  "ai-agent": "/gif/synthetic-data-simulation.gif",
  "certification": "/gif/reward.gif",
};

const getMetaFeatures = (language: "ko" | "en") => [
  {
    id: "virtual-env",
    reverse: false,
    tag: language === "ko" ? "현장 가상환경" : "Site Virtual Environment",
    tagColor: "bg-red-100 text-red-700",
    headline: language === "ko"
      ? "오늘 들어갈\n실제 현장에서\n미리 위험상황을 확인합니다."
      : "Check hazard situations in advance\non the actual site\nyou will enter today.",
    subhead: language === "ko"
      ? "현장마다 작업환경과 공정이 달라, 위험도 역시 다릅니다."
      : "Each site has a different work environment and process, so the level of risk varies accordingly.",
    desc: language === "ko"
      ? "iSafeMeta는 iSafePlan의 3D BIM 모델을 그대로 활용하거나, 360도 카메라로 실제 현장을 촬영하여 디지털 트윈을 자동 구축합니다."
      : "iSafeMeta utilizes iSafePlan's 3D BIM model as is, or automatically builds a digital twin by capturing the actual site with a 360-degree camera.",
    bullets: language === "ko"
      ? [
          "iSafePlan 3D BIM 모델 즉시 연동",
          "360도 카메라 촬영 → 디지털 트윈 자동 구축",
          "실제 현장 구조·공정과 동일한 가상 교육 훈련 환경",
          "iSafeGuard 위험구역 설정도 훈련에 자동 반영",
        ]
      : [
          "Instant integration with iSafePlan 3D BIM models",
          "360° camera capture → Automatic digital twin construction",
          "Virtual training environment matching the actual site structure and processes",
          "iSafeGuard hazard zone settings automatically reflected in training",
        ],
    placeholder: {
      title: language === "ko"
        ? "iSafePlan 연동 / 360카메라 디지털 트윈 가상환경"
        : "iSafePlan Integration / 360° Digital Twin Virtual Environment",
      description: language === "ko"
        ? "BIM 3D 모델 또는 360도 카메라로 구축한 실제 현장 가상 훈련 공간"
        : "BIM 3D model or 360° camera-built real-site virtual training space",
    },
    ctaBg: "bg-red-600 hover:bg-red-700",
    bgClass: "bg-white",
  },
  {
    id: "lms",
    reverse: true,
    tag: language === "ko" ? "디지털 수강 시스템" : "Digital Learning Management",
    tagColor: "bg-orange-100 text-orange-700",
    headline: language === "ko"
      ? "현장별 맞춤\n교육을\n디지털로 운영합니다"
      : "Run site-specific\ncustomized training\ndigitally",
    subhead: language === "ko"
      ? "교육은 일회성 행사가 아닌 데이터로 관리되는 안전활동이 됩니다."
      : "Training becomes a data-managed safety activity, rather than a one-time event.",
    desc: language === "ko"
      ? "iSafeMeta는 실제 현장을 반영한 가상환경에서 근로자별 맞춤형 안전교육을 제공합니다. 공정과 직종에 따라 필요한 교육 콘텐츠를 자동 생성 및 배정하고, 교육 이수 여부와 평가 결과를 디지털로 관리합니다."
      : "iSafeMeta provides site-tailored safety training for each worker within a virtual environment that reflects the actual job site. It automatically generates and assigns necessary training content based on processes and trades, and digitally manages training completion and assessment results.",
    bullets: language === "ko"
      ? [
          "공정별·직종별 맞춤 교육 커리큘럼 구성",
          "가상환경 내 안전 교육 콘텐츠 수강",
          "수강 진도·테스트 결과 실시간 관리",
          "미이수 근로자 자동 관리 및 재교육 지원",
        ]
      : [
          "Customized training curriculum composition by process and trade",
          "Taking safety training content within the virtual environment",
          "Real-time management of learning progress and test results",
          "Automatic management of non-completed workers and re-education support",
        ],
    placeholder: {
      title: language === "ko"
        ? "공정별 디지털 수강 시스템 대시보드"
        : "Phase-Based Digital Learning Dashboard",
      description: language === "ko"
        ? "근로자별 수강 현황, 공정별 커리큘럼 배정, 이수율 관리 화면"
        : "Per-worker progress, phase curriculum assignments, completion tracking",
    },
    ctaBg: "bg-orange-600 hover:bg-orange-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "ai-agent",
    reverse: false,
    tag: language === "ko" ? "현장 특화 AI Agent 아바타" : "Site-Specific AI Agent Avatar",
    tagColor: "bg-pink-100 text-pink-700",
    headline: language === "ko"
      ? "우리 현장을 이해하는\nAI가 20개 언어로\n근로자를 안내합니다"
      : "Our site's AI guide,\nin 20 languages,\nby your side",
    subhead: language === "ko"
      ? "SafeMeta AI Agent는 단순 번역기가 아닙니다. 현장 도면, 위험구역, 공정계획, 안전규정을 학습하여 작업자에게 필요한 안전정보를 실시간으로 제공합니다."
      : "The SafeMeta AI Agent is not a simple translator. It learns site drawings, hazard zones, process plans, and safety regulations to provide necessary safety information to workers in real time.",
    desc: language === "ko"
      ? "외국인 근로자도, 처음 투입되는 근로자도 자신의 언어로 현장을 이해하고 안전하게 작업을 시작할 수 있습니다."
      : "Foreign workers and new hires alike can understand the site in their own language and start working safely.",
    bullets: language === "ko"
      ? [
          "현장 도면·공정·위험정보를 학습한 AI Agent",
          "20개 이상 언어 지원 및 실시간 질의응답",
          "안전 법령 및 사내 규정 기반 전문 안내",
          "교육 결과·이해도 평가·이수 이력 자동 관리",
        ]
      : [
          "AI Agent trained on site drawings, processes, and hazard information",
          "Support for 20+ languages and real-time question and answering",
          "Expert guidance based on safety regulations and company policies",
          "Automatic management of training results, comprehension assessments, and completion history",
        ],
    placeholder: {
      title: language === "ko"
        ? "현장 특화 다국어 AI Agent 아바타 인터페이스"
        : "Site-Specific Multilingual AI Agent Avatar Interface",
      description: language === "ko"
        ? "현장 데이터를 학습한 AI Agent가 근로자와 다국어로 질의응답하는 화면"
        : "AI agent trained on site data answering worker Q&A in multiple languages",
    },
    ctaBg: "bg-pink-600 hover:bg-pink-700",
    bgClass: "bg-white",
  },
  {
    id: "certification",
    reverse: true,
    tag: language === "ko" ? "교육 이수 자동 기록" : "Auto Training Records",
    tagColor: "bg-purple-100 text-purple-700",
    headline: language === "ko"
      ? "교육은 끝나는 것이 아니라,\n신뢰할 수 있는 기록으로 남습니다"
      : "Training does not just end;\nit remains as a reliable record.",
    subhead: language === "ko"
      ? "iSafeMeta에서 학습한 모든 과정은 자동으로 iSafeIncentive에 기록됩니다"
      : "Every process learned in iSafeMeta is automatically recorded in iSafeIncentive.",
    desc: language === "ko"
      ? "교육 이수 여부뿐 아니라 이해도 평가, 안전활동 참여 이력까지 데이터로 축적되어 개인과 조직의 안전수준을 객관적으로 관리할 수 있습니다."
      : "Not only training completion but also comprehension assessments and safety activity participation history are accumulated as data, allowing for the objective management of the safety levels of individuals and organizations.",
    bullets: language === "ko"
      ? [
          "교육 이수 및 평가 결과 자동 기록",
          "블록체인 기반 디지털 증빙 관리",
          "개인별 교육·안전활동 이력 통합 관리",
          "미흡 분야 자동 분석 및 맞춤형 재교육 지원",
        ]
      : [
          "Automatic recording of training completion and assessment results",
          "Blockchain-based digital evidence management",
          "Integrated management of individual training and safety activity history",
          "Automatic analysis of insufficient areas and support for tailored re-education",
        ],
    placeholder: {
      title: language === "ko"
        ? "교육 이수 현황 및 iSafeIncentive 연동 대시보드"
        : "Training Completion & iSafeIncentive Integration Dashboard",
      description: language === "ko"
        ? "근로자별 수강 이력, 테스트 결과, 블록체인 저장 상태 확인 화면"
        : "Per-worker training history, test results, blockchain storage status",
    },
    ctaBg: "bg-purple-600 hover:bg-purple-700",
    bgClass: "bg-gray-50",
  },
];

const getSteps = (language: "ko" | "en") => [
  {
    step: "01",
    title: language === "ko" ? "현장 가상환경 구축" : "Build Site Virtual Environment",
    desc: language === "ko"
      ? "iSafePlan 3D BIM 모델을 연동하거나, 360도 카메라로 실제 현장을 촬영해 디지털 트윈 가상환경을 구성합니다."
      : "Link iSafePlan's 3D BIM or capture the real site with 360° cameras to create the digital twin training environment.",
  },
  {
    step: "02",
    title: language === "ko" ? "맞춤형 안전교육 자료 배포" : "Distribution of Custom Safety Training Materials",
    desc: language === "ko"
      ? "공정별·직종별 교육 콘텐츠를 배정합니다. 근로자는 가상환경 안에서 AI Agent 아바타와 함께 수강합니다."
      : "Assign phase and role-specific content. Workers train in the virtual environment alongside the AI Agent avatar.",
  },
  {
    step: "03",
    title: language === "ko" ? "이수 기록 자동 저장" : "Auto-Save Completion Records",
    desc: language === "ko"
      ? "수강 완료와 동시에 교육 이력이 iSafeIncentive에 자동 저장됩니다. 미이수자와 미흡 항목은 시스템이 자동으로 식별하여 맞춤형 교육을 재배정합니다."
      : "Completion records auto-save to iSafeIncentive immediately upon course completion. The system automatically identifies non-completed workers and insufficient areas to reassign customized training.",
  },
];

export default function ISafeMetaPage() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const [activeTab, setActiveTab] = useState<"solution" | "scenario">("solution");

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
        <section className="pt-[88px] bg-gradient-to-br from-[#3d0e0e] via-[#7f1d1d] to-[#dc2626] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:h-[560px]">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">iSafeMeta</span>
                  <span className="px-3 py-1 bg-white/10 text-red-200 text-xs rounded-full">
                    {language === "ko" ? "훈련 모듈" : "Train Module"}
                  </span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  {language === "ko" ? (
                    <>
                      오늘 작업할 현장의<br />
                      <span className="text-red-300">위험을 경험하고</span><br />
                      안전을 습관으로 만듭니다
                    </>
                  ) : (
                    <>
                      Experience the risks of<br />
                      <span className="text-red-300">today's job site</span><br />
                      and turn safety into a habit
                    </>
                  )}
                </h1>
                <p className="text-red-100 text-base leading-relaxed mb-4 max-w-md">
                  {language === "ko"
                    ? "위험을 경험해보지 못한 사람은 위험을 인식하기 어렵습니다. iSafeMeta는 실제 현장을 기반으로 구축된 가상환경에서 작업 전 위험요인을 직접 체험하고 안전수칙을 학습할 수 있도록 지원합니다."
                    : "Those who have never experienced danger find it difficult to recognize it. iSafeMeta allows workers to experience hazards firsthand and learn safety rules within a virtual environment built from the actual site before starting work."}
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  {language === "ko"
                    ? "AI 아바타가 작업 절차와 위험상황을 안내하고, 교육 결과와 이수 이력을 관리하여 현장 투입 전 안전역량을 높입니다. 체험으로 익힌 안전은 현장에서의 올바른 행동으로 이어집니다."
                    : "An AI avatar guides workers through work procedures and hazardous situations, and manages training results and completion history to enhance safety capabilities before entering the site. Safety learned through firsthand experience leads to correct actions on-site."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-red-900 bg-white hover:bg-red-50 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  </a>
                  <Link
                    href="#virtual-env"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "기능 살펴보기 ↓" : "Explore Features ↓"}
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-red-500/30 p-4 shadow-2xl shadow-red-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">
                      iSafeMeta · {language === "ko" ? "가상 현장 안전 훈련" : "Virtual Site Safety Training"}
                    </span>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                    <img
                      src="/gif/iSafeMeta Reality Capture and Mesh based Training.gif"
                      alt={language === "ko" ? "Reality Capture 메쉬 훈련" : "Reality Capture Mesh Training"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-red-400 text-sm flex-shrink-0">🏗️</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "Reality Capture로 실제 현장과 동일한 3D 메쉬 환경에서 위험을 직접 체험합니다."
                          : "Reality capture builds a 3D mesh twin of the real site to experience hazards firsthand."}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-blue-400 text-sm flex-shrink-0">🤖</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "20개 언어 AI 아바타가 안내하고, 이수 기록은 자동으로 저장됩니다."
                          : "AI avatars guide in 20+ languages, with completion records saved automatically."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-red-600 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-red-500">
              {[
                {
                  value: "20+",
                  label: language === "ko" ? "AI Agent 지원 언어" : "AI Agent Languages",
                },
                {
                  value: language === "ko" ? "2가지" : "2 Ways",
                  label: language === "ko" ? "디지털트윈 및 BIM 환경" : "Digital Twin & BIM Environment",
                },
                {
                  value: language === "ko" ? "교육 시스템" : "Training System",
                  label: language === "ko" ? "맞춤형 교육자료 생성" : "Custom Safety Material Generation",
                },
                {
                  value: language === "ko" ? "자동" : "Auto",
                  label: language === "ko" ? "이수 기록 블록체인 저장" : "Blockchain Record Storage",
                },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-2xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-red-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tab bar */}
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex gap-0">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === "solution"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {language === "ko" ? "솔루션 소개" : "Solution"}
              </button>
              <button
                onClick={() => setActiveTab("scenario")}
                className={`px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === "scenario"
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {language === "ko" ? "사용 시나리오" : "Use Scenario"}
              </button>
            </div>
          </div>
        </div>

        {activeTab === "scenario" ? (
          <ISafeMetaScenario language={language} />
        ) : (
        <>
        {/* Feature sections */}
        {getMetaFeatures(language).map((feature) => (
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
                  <p className="text-[18px] font-semibold text-red-600 mb-3">{feature.subhead}</p>
                  <p className="text-[19px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[18px] text-gray-700">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {featureGifs[feature.id] ? (
                  feature.id === "certification" ? (
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={featureGifs[feature.id]}
                        alt={feature.placeholder.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src={featureGifs[feature.id]}
                        alt={feature.placeholder.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  )
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
              <p className="text-2xl font-semibold text-red-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "도입 절차" : "Implementation Process"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko"
                  ? "현장 구축부터 이수 기록까지 3단계"
                  : "3 Steps from Site Setup to Training Records"}
              </h2>
              <p className="text-gray-500">
                {language === "ko"
                  ? "iSafePlan 연동 또는 360도 카메라 촬영으로 즉시 시작할 수 있습니다."
                  : "Start immediately with iSafePlan integration or 360° camera capture."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-red-200" />
              {getSteps(language).map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7f1d1d] to-[#dc2626] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        </>
        )}
      </main>
      <Footer language={language} />
    </>
  );
}
