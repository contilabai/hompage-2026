"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const featureGifs: Record<string, string> = {
  "3d-convert": "/gif/2dto3d.gif",
  "viewer": "/images/planner/planner5.png",
  "scheduler": "/images/planner/planner6.png",
  "risk-assessment": "/images/planner/planner9.png",
};

const getPlannerFeatures = (language: "ko" | "en") => [
  {
    id: "3d-convert",
    reverse: false,
    tag: language === "ko" ? "iSafe 3D 트레이서" : "iSafe 3D Tracer",
    tagColor: "bg-green-100 text-green-700",
    headline: language === "ko"
      ? "BIM 툴이 없어도\n도면만 있으면\n3D로 시작합니다"
      : "No BIM tool needed—\nstart in 3D\nwith just a drawing",
    subhead: language === "ko"
      ? "AutoCAD DXF 도면을 직접 3D BIM 모델로 변환합니다"
      : "Trace AutoCAD DXF drawings directly into a 3D BIM model.",
    desc: language === "ko"
      ? "AutoCAD DXF 도면을 올려 직접 3D BIM 모델을 작성합니다. BIM 전문 도구 없이 도면 한 장으로 시작해, 업계 표준 IFC 포맷으로 출력합니다."
      : "Build a 3D BIM model directly from an AutoCAD DXF drawing. Start with a single drawing—no BIM tools required—and export in the industry-standard IFC format.",
    bullets: language === "ko"
      ? ["AutoCAD DXF → IFC 직접 변환", "BIM 툴 없이 도면만으로 시작", "직접 트레이스로 3D 모델 작성", "업계 표준 IFC 포맷 출력"]
      : ["Direct AutoCAD DXF → IFC conversion", "Start with just a drawing—no BIM tool", "Build 3D models by direct tracing", "Export in industry-standard IFC format"],
    placeholder: {
      title: language === "ko" ? "DXF 도면 → 3D BIM 트레이스 화면" : "DXF Drawing → 3D BIM Tracing",
      description: language === "ko"
        ? "AutoCAD DXF 도면을 직접 3D BIM 모델로 변환하는 iSafePlan 화면"
        : "iSafePlan screen tracing an AutoCAD DXF drawing into a 3D BIM model",
    },
    ctaBg: "bg-green-700 hover:bg-green-800",
    bgClass: "bg-white",
  },
  {
    id: "viewer",
    reverse: true,
    tag: language === "ko" ? "iSafe 3D 뷰어" : "iSafe 3D Viewer",
    tagColor: "bg-blue-100 text-blue-700",
    headline: language === "ko"
      ? "여러 IFC를 한 화면에\n합쳐서 보고\n안전을 매핑합니다"
      : "Merge multiple IFCs\ninto one view\nand map safety on them",
    subhead: language === "ko"
      ? "트레이서 변환 IFC와 외부 BIM을 다중으로 합쳐 봅니다"
      : "Open and merge tracer-converted IFCs with external BIM.",
    desc: language === "ko"
      ? "트레이서로 변환한 IFC는 물론 Revit·ArchiCAD 등 외부 BIM IFC를 열고 다중으로 합쳐 봅니다. 3D 화면 위에서 작업과 안전관리 항목을 위치별로 매핑하고 위험성 평가를 진행합니다."
      : "Open tracer-converted IFCs and external BIM IFCs from Revit, ArchiCAD, and more—merging several into one view. Map work and safety items by location on the 3D model and run risk assessment.",
    bullets: language === "ko"
      ? ["IFC 열기 및 다중 모델 합치기", "Revit·ArchiCAD 등 외부 BIM 호환", "3D 위치별 작업·안전 항목 매핑", "위치 기반 위험성 평가 연동"]
      : ["Open and merge multiple IFC models", "Compatible with external BIM (Revit, ArchiCAD…)", "Map work & safety items by 3D location", "Location-based risk assessment"],
    placeholder: {
      title: language === "ko" ? "IFC 다중 합치기 및 작업·안전 매핑 화면" : "IFC Merge & Work/Safety Mapping Screen",
      description: language === "ko"
        ? "여러 IFC 모델을 합쳐 위치별 작업·안전 항목을 매핑하는 3D 뷰어"
        : "3D viewer merging multiple IFCs and mapping work/safety items by location",
    },
    ctaBg: "bg-blue-600 hover:bg-blue-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "scheduler",
    reverse: false,
    tag: language === "ko" ? "주간 작업/일정 작성기" : "Weekly Schedule Builder",
    tagColor: "bg-indigo-100 text-indigo-700",
    headline: language === "ko"
      ? "층수·구조만 입력하면\n공정과 안전관리 항목이\n자동으로 채워집니다"
      : "Enter floors & structure—\nschedule and safety items\nfill in automatically",
    subhead: language === "ko"
      ? "층수·공사비·구조형식 입력만으로 공정 WBS를 자동 생성합니다"
      : "Auto-generate a work schedule (WBS) from floors, cost, and structure type.",
    desc: language === "ko"
      ? "층수·공사비·구조형식만 입력하면 공정 WBS와 안전관리 항목이 자동으로 생성됩니다. 3D 뷰어와 연동해 공정별 매핑과 평가까지 자연스럽게 이어집니다."
      : "Just enter floors, cost, and structure type, and the work schedule (WBS) and safety items are generated automatically—flowing into mapping and assessment alongside the 3D viewer.",
    bullets: language === "ko"
      ? ["층수·공사비·구조형식 입력만으로 WBS 자동 생성", "공정별 안전관리 항목 자동 구성", "3D 뷰어와 연동한 공정 매핑", "주간 단위 작업·일정 관리"]
      : ["Auto-generate WBS from floors, cost, structure type", "Auto-compose safety items per phase", "Phase mapping integrated with the 3D viewer", "Weekly work and schedule management"],
    placeholder: {
      title: language === "ko" ? "공정 WBS·안전관리 항목 자동 생성 화면" : "Auto WBS & Safety-Item Generation Screen",
      description: language === "ko"
        ? "층수·구조 입력으로 공정 WBS와 안전관리 항목이 자동 생성되는 화면"
        : "Screen auto-generating a WBS and safety items from floor and structure inputs",
    },
    ctaBg: "bg-indigo-600 hover:bg-indigo-700",
    bgClass: "bg-white",
  },
  {
    id: "risk-assessment",
    reverse: true,
    tag: language === "ko" ? "iSafe 위험성 평가" : "iSafe Risk Assessment",
    tagColor: "bg-yellow-100 text-yellow-700",
    headline: language === "ko"
      ? "매핑된 데이터를\n룰 기반으로 분석해\n위험도를 산정합니다"
      : "Rule-based analysis\nof mapped data\nto score the risk",
    subhead: language === "ko"
      ? "객체·공종·시점을 분석해 위험성평가서·안전교육 자료를 자동 생성합니다"
      : "Analyze objects, trades, and timing to auto-generate risk reports and training materials.",
    desc: language === "ko"
      ? "뷰어에서 매핑된 객체·공종·시점을 룰 기반으로 분석해 위험도를 산정합니다. 위험성평가서와 현장 맞춤 안전교육 자료를 자동으로 생성합니다."
      : "Analyze the objects, trades, and timing mapped in the viewer using a rule base to score risk, then auto-generate risk-assessment reports and site-tailored safety-training materials.",
    bullets: language === "ko"
      ? ["룰 기반 위험도 자동 산정", "객체·공종·시점 종합 분석", "위험성평가서 자동 생성", "현장 맞춤 안전교육 자료 생성"]
      : ["Rule-based automatic risk scoring", "Combined analysis of objects, trades, timing", "Auto-generated risk-assessment reports", "Site-tailored safety-training materials"],
    placeholder: {
      title: language === "ko" ? "룰 기반 위험성 평가 화면" : "Rule-based Risk Assessment Screen",
      description: language === "ko"
        ? "매핑 데이터를 룰 기반으로 분석해 위험성평가서를 생성하는 화면"
        : "Screen generating a risk-assessment report by rule-based analysis of mapped data",
    },
    ctaBg: "bg-yellow-600 hover:bg-yellow-700",
    bgClass: "bg-gray-50",
  },
];

const getSteps = (language: "ko" | "en") => [
  {
    step: "01",
    title: language === "ko" ? "도면 트레이스 또는 일정 입력" : "Trace Drawing or Enter Schedule",
    desc: language === "ko"
      ? "AutoCAD DXF 도면을 3D BIM으로 직접 트레이스하거나, 층수·구조형식만 입력해 공정 WBS를 자동 생성합니다."
      : "Trace an AutoCAD DXF drawing into 3D BIM, or auto-generate a WBS by entering floors and structure type.",
  },
  {
    step: "02",
    title: language === "ko" ? "3D 뷰어에서 작업·안전 매핑" : "Map Work & Safety in the 3D Viewer",
    desc: language === "ko"
      ? "변환한 IFC와 외부 BIM을 합쳐 보고, 3D 화면 위에서 공정·작업과 안전관리 항목을 위치별로 매핑합니다."
      : "Merge converted IFCs with external BIM, then map phases, work, and safety items by location on the 3D model.",
  },
  {
    step: "03",
    title: language === "ko" ? "위험성 평가서·교육자료 자동 생성" : "Auto-Generate Reports & Training Materials",
    desc: language === "ko"
      ? "매핑된 객체·공종·시점을 룰 기반으로 분석해 위험도를 산정하고, 위험성평가서와 안전교육 자료를 자동 생성합니다."
      : "Rule-based analysis of mapped objects, trades, and timing scores the risk and auto-generates risk reports and safety-training materials.",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:h-[560px]">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">iSafePlan</span>
                  <span className="px-3 py-1 bg-white/10 text-green-200 text-xs rounded-full">
                    {language === "ko" ? "계획 모듈" : "Plan Module"}
                  </span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  {language === "ko" ? (
                    <>
                      근로자가 들어가기 전에<br />
                      <span className="text-green-300">위험을 먼저</span><br />
                      확인합니다
                    </>
                  ) : (
                    <>
                      Before workers enter,<br />
                      <span className="text-green-300">we map the risks</span><br />
                      first
                    </>
                  )}
                </h1>
                <p className="text-green-100 text-base leading-relaxed mb-4 max-w-md">
                  {language === "ko"
                    ? "안전은 현장에 들어가기 전부터 시작됩니다. 도면과 공정에 실제 작업 특성을 반영해 어디가 위험한지 먼저 파악합니다."
                    : "Safety starts before anyone steps on site. We reflect real task characteristics onto drawings and schedules to see where the risks are—first."}
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  {language === "ko"
                    ? "iSafePlan는 도면 하나로 공정별 위험 지도를 자동으로 그려, 현장 맞춤 위험성평가의 출발점이 됩니다."
                    : "From a single drawing, iSafePlan auto-maps risk by phase—the starting point of site-tailored risk assessment."}
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
                      iSafePlan · {language === "ko" ? "BIM 3D 공정 시뮬레이터" : "BIM 3D Process Simulator"}
                    </span>
                  </div>
                  <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/images/planner/planner7.png"
                      alt={language === "ko" ? "iSafe 3D 뷰어" : "iSafe 3D Viewer"}
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
                          ? "여러 IFC를 합쳐 보고 작업·안전 항목을 위치별로 매핑해 위험성 평가를 진행합니다."
                          : "Merge multiple IFCs, map work & safety items by location, and run risk assessment."}
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
                  value: "DXF→IFC",
                  label: language === "ko" ? "도면 직접 3D 변환" : "Direct Drawing-to-3D",
                },
                {
                  value: "Multi-merge",
                  label: language === "ko" ? "외부 BIM IFC 통합" : "External BIM IFC Integration",
                },
                {
                  value: language === "ko" ? "자동" : "Automatic",
                  label: language === "ko" ? "공정 WBS·안전항목 생성" : "WBS & Safety-Item Generation",
                },
                {
                  value: "Rule-based",
                  label: language === "ko" ? "위험성 평가·교육자료" : "Risk Assessment & Training",
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
        {getPlannerFeatures(language).map((feature) => {
          const isWide = feature.id === "scheduler" || feature.id === "risk-assessment";
          const textBlock = (
            <div className="flex flex-col justify-center">
              <span className={`inline-block px-3 py-1 text-xs font-semibold ${feature.tagColor} rounded-full mb-4 w-fit`}>
                {feature.tag}
              </span>
              <h2 className="text-[30px] font-black text-gray-900 whitespace-pre-line leading-tight mb-3">
                {feature.headline}
              </h2>
              <p className="text-[18px] font-semibold text-green-600 mb-3">{feature.subhead}</p>
              <p className="text-[19px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
              <ul className="space-y-3">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[18px] text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
          const imageBlock = featureGifs[feature.id] ? (
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img src={featureGifs[feature.id]} alt={feature.placeholder.title} className="w-full h-full object-cover rounded-2xl" />
            </div>
          ) : (
            <ImagePlaceholder title={feature.placeholder.title} description={feature.placeholder.description} aspectRatio="4/3" />
          );
          return (
            <section key={feature.id} id={feature.id} className={`py-20 ${feature.bgClass}`}>
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                {isWide ? (
                  <>
                    <div className="mb-10">{textBlock}</div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                      <img
                        src={featureGifs[feature.id]}
                        alt={feature.placeholder.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </>
                ) : (
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${feature.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                    {textBlock}
                    {imageBlock}
                  </div>
                )}
              </div>
            </section>
          );
        })}

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

      </main>
      <Footer language={language} />
    </>
  );
}
