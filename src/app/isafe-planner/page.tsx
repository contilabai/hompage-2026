"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const getPlannerFeatures = (language: "ko" | "en") => [
  {
    id: "3d-convert",
    reverse: false,
    tag: language === "ko" ? "도면 자동 3D 전환" : "Automatic 2D to 3D Conversion",
    tagColor: "bg-green-100 text-green-700",
    headline: language === "ko"
      ? "2D 도면을 들고\n현장을 상상하는 시대는\n끝났습니다"
      : "Stop imagining sites\nwith 2D drawings.\nVisualize with 3D.",
    subhead: language === "ko"
      ? "도면을 올리면, AI가 3D 공정 지도를 만들어 드립니다"
      : "Upload plans, AI creates 3D site maps automatically.",
    desc: language === "ko"
      ? "dxf 도면이나 WBS 문서를 업로드하면 업계 표준 IFC 3D 모델이 자동으로 생성됩니다. BIM 전문가 없이도 3D 현장 분석이 가능합니다. 공정 스케줄에 맞춰 구조물이 실시간으로 변하는 모습을 시각화합니다."
      : "Upload DXF drawings or WBS documents to auto-generate industry-standard IFC 3D models. Analyze construction sites in 3D without BIM experts. Visualize real-time structural changes aligned with project schedules.",
    bullets: language === "ko"
      ? ["dxf 도면·WBS 문서 업로드만으로 3D 변환", "업계 표준 IFC 포맷 자동 출력", "공정 단계별 구조물 메쉬 실시간 분할 시각화", "iSafeGuard·iSafeMeta와 동일 3D 환경 공유"]
      : ["3D conversion with just DXF or WBS uploads", "Auto-export in industry-standard IFC format", "Real-time mesh visualization by project phase", "Unified 3D environment shared with iSafeGuard and iSafeMeta"],
    placeholder: {
      title: language === "ko" ? "2D 도면 → 3D IFC 모델 자동 변환 화면" : "Automatic 2D to 3D IFC Conversion Screen",
      description: language === "ko"
        ? "dxf 도면 업로드 후 3D 모델로 자동 변환된 결과를 보여주는 iSafePlanner 인터페이스"
        : "iSafePlanner interface showing auto-converted 3D model results after DXF upload",
    },
    ctaBg: "bg-green-700 hover:bg-green-800",
    bgClass: "bg-white",
  },
  {
    id: "risk-assessment",
    reverse: true,
    tag: language === "ko" ? "동적 위험도 평가" : "Dynamic Risk Assessment",
    tagColor: "bg-yellow-100 text-yellow-700",
    headline: language === "ko"
      ? "\"이번 주 비 예보\"\n현장 위험도가\n얼마나 올라가는지 압니까?"
      : "\"Rain forecast this week\"\nDo you know how much\nsite risk increases?",
    subhead: language === "ko"
      ? "기상 데이터부터 공정 스케줄까지, 위험도를 숫자로 보여줍니다"
      : "From weather data to construction schedules, visualize risk as numbers.",
    desc: language === "ko"
      ? "자체 내장된 위험 요소 데이터베이스와 기상청 API를 실시간으로 연동합니다. '외부비계 공정 + 강풍 예보 = 위험도 HIGH'처럼 구체적이고 즉각적인 위험 지수를 제공합니다. 관리자의 직감이 아닌 데이터로 판단합니다."
      : "Real-time integration with built-in hazard database and weather APIs. Provides specific, immediate risk indices like 'scaffolding + strong wind forecast = HIGH risk'. Data-driven decisions, not intuition.",
    bullets: language === "ko"
      ? ["기상청 날씨 예측 API 실시간 연동", "공정별·날짜별 위험 지수 자동 산출", "위험 임계치 초과 시 사전 경보", "위험 요소 데이터베이스 지속 업데이트"]
      : ["Real-time weather forecast API integration", "Auto-calculate risk indices by phase and date", "Pre-alerts when risk thresholds exceeded", "Continuous hazard database updates"],
    placeholder: {
      title: language === "ko" ? "공정별 동적 위험도 평가 대시보드" : "Dynamic Risk Assessment Dashboard by Phase",
      description: language === "ko"
        ? "기상 데이터와 공정 스케줄을 결합한 위험 지수 시각화 화면"
        : "Risk index visualization combining weather data and project schedules",
    },
    ctaBg: "bg-yellow-600 hover:bg-yellow-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "camera-placement",
    reverse: false,
    tag: language === "ko" ? "AI 카메라 배치 추천" : "AI Camera Placement Recommendation",
    tagColor: "bg-teal-100 text-teal-700",
    headline: language === "ko"
      ? "어디에 카메라를\n놓아야 사각지대가\n없는지 아십니까?"
      : "Do you know where to place\ncameras to eliminate\nblind spots?",
    subhead: language === "ko"
      ? "AI가 현재 공정의 사각지대를 분석하고 최적 위치를 알려줍니다"
      : "AI analyzes blind spots in current phase and recommends optimal camera positions.",
    desc: language === "ko"
      ? "3D 공간 분석으로 현재 공정에서 카메라가 닿지 않는 사각지대를 자동으로 도출합니다. 이동형 카메라의 최적 배치 위치를 수치와 함께 제안합니다. iSafeGuard 설치 전 시뮬레이션으로 비용을 최소화합니다."
      : "3D spatial analysis automatically identifies camera blind spots. Numerically recommends optimal placement for mobile cameras. Simulate before iSafeGuard deployment to minimize costs.",
    bullets: language === "ko"
      ? ["3D 공간 사각지대 자동 분석", "최적 카메라 위치 및 각도 수치 제안", "공정 변화에 따른 카메라 재배치 알림", "iSafeGuard와 연동하여 설정 자동 전달"]
      : ["Automatic 3D blind spot analysis", "Numerical recommendations for optimal position and angle", "Alerts for camera repositioning as phases change", "Auto-transfer settings to iSafeGuard integration"],
    placeholder: {
      title: language === "ko" ? "3D 공간 사각지대 분석 및 카메라 배치 추천 화면" : "3D Blind Spot Analysis & Camera Placement Screen",
      description: language === "ko"
        ? "3D 현장 모델 위에 최적 카메라 위치가 표시된 iSafePlanner 시뮬레이션 화면"
        : "iSafePlanner simulation showing optimal camera positions overlaid on 3D site model",
    },
    ctaBg: "bg-teal-600 hover:bg-teal-700",
    bgClass: "bg-white",
  },
];

const getSteps = (language: "ko" | "en") => [
  {
    step: "01",
    title: language === "ko" ? "도면·WBS 업로드" : "Upload Plans & WBS",
    desc: language === "ko"
      ? "2D dxf 도면 파일이나 WBS 문서를 업로드합니다. 다양한 포맷을 지원합니다."
      : "Upload 2D DXF drawings or WBS documents. We support multiple formats.",
  },
  {
    step: "02",
    title: language === "ko" ? "3D 모델 자동 생성 및 위험도 분석" : "Auto-Generate 3D & Analyze Risk",
    desc: language === "ko"
      ? "AI가 3D 모델을 자동 생성하고, 공정 스케줄과 기상 데이터를 결합하여 위험도 지수를 산출합니다."
      : "AI auto-generates 3D models and calculates risk indices by combining schedules with weather data.",
  },
  {
    step: "03",
    title: language === "ko" ? "현장 투입 전 브리핑 완료" : "Complete Pre-Deployment Briefing",
    desc: language === "ko"
      ? "위험도 보고서와 최적 카메라 위치를 확인합니다. 이 데이터는 iSafeMeta 훈련과 iSafeGuard 설치에 자동으로 활용됩니다."
      : "Review risk reports and optimal camera positions. Data auto-integrates with iSafeMeta training and iSafeGuard deployment.",
  },
];

export default function ISafePlannerPage() {
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
        <section className="pt-[88px] bg-gradient-to-br from-[#0a2612] via-[#14532d] to-[#16a34a] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">iSafePlanner</span>
                  <span className="px-3 py-1 bg-white/10 text-green-200 text-xs rounded-full">
                    {language === "ko" ? "계획 모듈" : "Plan Module"}
                  </span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  {language === "ko" ? (
                    <>
                      현장 투입 전,<br />
                      <span className="text-green-300">이미 모든 위험을</span><br />
                      알고 있습니다
                    </>
                  ) : (
                    <>
                      Before deployment,<br />
                      <span className="text-green-300">we already know</span><br />
                      all the risks
                    </>
                  )}
                </h1>
                <p className="text-green-100 text-base leading-relaxed mb-4 max-w-md">
                  {language === "ko"
                    ? "중대재해의 70%는 \"예상 못 했다\"가 아닙니다. \"확인하지 않았다\"입니다."
                    : "70% of major incidents aren't \"unexpected\"—they're \"unchecked.\""}
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  {language === "ko"
                    ? "iSafePlanner는 도면 하나로 공정별 위험 지도를 자동으로 만들어 냅니다."
                    : "iSafePlanner auto-creates risk maps by phase from a single drawing."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-green-900 bg-white hover:bg-green-50 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  </a>
                  <Link
                    href="#3d-convert"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "기능 살펴보기 ↓" : "Explore Features ↓"}
                  </Link>
                </div>
              </div>

              {/* Right: BIM mockup placeholder */}
              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-green-500/30 p-4 shadow-2xl shadow-green-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">
                      iSafePlanner · {language === "ko" ? "BIM 3D 공정 시뮬레이터" : "BIM 3D Process Simulator"}
                    </span>
                  </div>
                  <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/gif/iSafePlanner.gif"
                      alt={language === "ko" ? "IFC 3D 모델 변환" : "IFC 3D Model Transform"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-green-400 text-sm flex-shrink-0">🧱</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "2D 도면을 IFC 기반 3D 모델로 자동 변환하고 공정(WBS)과 연동합니다."
                          : "Auto-converts 2D drawings into IFC 3D models linked to the work schedule (WBS)."}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-yellow-400 text-sm flex-shrink-0">⚡</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "공정·기상 데이터를 반영해 구간별 위험도를 산출하고 최적 카메라 배치를 추천합니다."
                          : "Calculates phase-by-phase risk from schedule & weather data and recommends optimal camera placement."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-green-700 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-600">
              {[
                {
                  value: language === "ko" ? "자동" : "Automatic",
                  label: language === "ko" ? "2D → 3D 도면 변환" : "2D → 3D Drawing Conversion",
                },
                {
                  value: language === "ko" ? "실시간" : "Real-time",
                  label: language === "ko" ? "기상 연동 위험 지수" : "Weather-Linked Risk Index",
                },
                {
                  value: language === "ko" ? "AI 추천" : "AI-Recommended",
                  label: language === "ko" ? "최적 카메라 배치" : "Optimal Camera Placement",
                },
                {
                  value: language === "ko" ? "3종" : "3 Types",
                  label: language === "ko" ? "모듈 자동 연동" : "Module Auto-Integration",
                },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-2xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-green-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature sections */}
        {getPlannerFeatures(language).map((feature) => (
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
                  <p className="text-sm font-semibold text-green-600 mb-3">{feature.subhead}</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    도입 문의하기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <ImagePlaceholder
                  title={feature.placeholder.title}
                  description={feature.placeholder.description}
                  aspectRatio="4/3"
                />
              </div>
            </div>
          </section>
        ))}

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-2xl font-semibold text-green-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "도입 절차" : "Implementation Process"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko"
                  ? "도면 업로드부터 현장 투입 브리핑까지"
                  : "From Plan Upload to Pre-Deployment Briefing"}
              </h2>
              <p className="text-gray-500">
                {language === "ko"
                  ? "3단계로 현장 투입 전 안전 계획이 완성됩니다."
                  : "Complete your pre-deployment safety plan in 3 steps."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-green-200" />
              {getSteps(language).map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#14532d] to-[#16a34a] flex items-center justify-center mb-6 shadow-lg relative z-10">
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
        <section className="py-20 bg-gradient-to-r from-[#14532d] to-[#16a34a] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">
                  {language === "ko" ? (
                    <>
                      다음 공정, 위험을<br />
                      미리 알고 시작하십시오
                    </>
                  ) : (
                    <>
                      Know risks beforehand<br />
                      for your next phase
                    </>
                  )}
                </h2>
                <p className="text-green-100 mb-8 leading-relaxed">
                  {language === "ko"
                    ? "중대재해는 갑자기 일어나지 않습니다. 예측되지 않은 위험, 확인되지 않은 공정이 쌓여서 일어납니다.\n\niSafePlanner로 현장 투입 전 모든 위험 요소를 파악하세요."
                    : "Major incidents don't happen suddenly—they accumulate from unexpected risks and unchecked phases.\n\nIdentify all hazards before deployment with iSafePlanner."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-green-800 bg-white hover:bg-green-50 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  </a>
                  <Link
                    href="/isafe-meta"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "iSafeMeta 훈련 연동 보기" : "View iSafeMeta Training"}
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImagePlaceholder
                  title={language === "ko" ? "iSafePlanner 활용 현장 사진" : "iSafePlanner in Action"}
                  description={language === "ko"
                    ? "iSafePlanner로 3D 위험 분석을 수행하는 안전 관리자의 실제 사용 장면"
                    : "Safety manager performing 3D risk analysis with iSafePlanner"}
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
