"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const getInfraFeatures = (language: "ko" | "en") => [
  {
    icon: "🔌",
    title: language === "ko" ? "모듈 라이선스 관리자" : "Module License Manager",
    desc: language === "ko"
      ? "구매한 핵심 모듈들을 플러그인 방식으로 즉각 해금하고 중앙 제어하는 스마트 통제 룰 적용"
      : "Instantly unlock purchased modules plug-in-style with centralized smart control rules",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: "👥",
    title: language === "ko" ? "통합 역할 기반 권한 관리" : "Unified Role-Based Access Control",
    desc: language === "ko"
      ? "최고 관리자, 현장 소장, 안전 관리자, 현장 근로자 등 접근 주체별 맞춤형 화면 및 데이터 차등 표출"
      : "Customized screens and tiered data visibility for admins, site managers, safety officers, and workers",
    color: "bg-slate-50 border-slate-200",
    iconBg: "bg-slate-100",
  },
  {
    icon: "🔄",
    title: language === "ko" ? "중앙 데이터 통합 파이프라인" : "Central Data Integration Pipeline",
    desc: language === "ko"
      ? "분산된 개별 모듈의 원천 데이터를 메시지 큐 기반 마이크로서비스 아키텍처로 끊김 없이 수집 및 동기화"
      : "Message-queue microservices architecture seamlessly collects and syncs data from distributed modules",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
];

const getModules = (language: "ko" | "en") => [
  {
    name: "iSafePlan",
    badge: language === "ko" ? "계획" : "Plan",
    badgeColor: "bg-green-100 text-green-700",
    desc: language === "ko"
      ? "경량 BIM 기반으로 주요 위험공종 일정을 반영하고 맞춤형 위험성 평가 정보를 제공합니다."
      : "Reflects key high-risk work schedules on a lightweight BIM and provides tailored risk-assessment information.",
    href: "/isafe-planner",
    color: "border-green-200 hover:border-green-400",
    gradientFrom: "#14532d",
    gradientTo: "#16a34a",
    step: language === "ko" ? "① 계획" : "① Plan",
  },
  {
    name: "iSafeMeta",
    badge: language === "ko" ? "교육" : "Train",
    badgeColor: "bg-red-100 text-red-700",
    desc: language === "ko"
      ? "실제 작업 현장 환경을 반영한 맞춤형 안전교육 콘텐츠를 생성하여 오늘의 위험작업을 이해합니다."
      : "Generates safety-training content based on the real work-site environment to understand today's hazardous tasks.",
    href: "/isafe-meta",
    color: "border-red-200 hover:border-red-400",
    gradientFrom: "#7f1d1d",
    gradientTo: "#dc2626",
    step: language === "ko" ? "② 교육" : "② Train",
  },
  {
    name: "iSafeGuard",
    badge: language === "ko" ? "관제" : "Monitor",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: language === "ko"
      ? "Vision AI 카메라가 작업 유형별 위험상황을 탐지하여 사고를 사전에 예방합니다."
      : "Vision AI cameras detect task-specific hazards to prevent accidents in advance.",
    href: "/isafe-guard",
    color: "border-blue-200 hover:border-blue-400",
    gradientFrom: "#0c2340",
    gradientTo: "#1d6fa4",
    step: language === "ko" ? "③ 관제" : "③ Monitor",
  },
  {
    name: "iSafeIncentive",
    badge: language === "ko" ? "측정" : "Measure",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: language === "ko"
      ? "안전계획·교육·작업 중 생성된 안전활동을 기록하고 측정하여 인센티브를 지급합니다."
      : "Records and measures safety activities from planning, training, and work to pay out incentives.",
    href: "/isafe-chain",
    color: "border-orange-200 hover:border-orange-400",
    gradientFrom: "#7c2d12",
    gradientTo: "#ea580c",
    step: language === "ko" ? "④ 측정" : "④ Measure",
  },
];

const getSteps = (language: "ko" | "en") => [
  {
    step: "01",
    title: language === "ko" ? "서버 환경 구성" : "Configure Server Environment",
    desc: language === "ko"
      ? "온프레미스 또는 클라우드 서버에 iSafePlatform을 설치합니다. VPN 등 폐쇄망 환경에서도 온프레미스 구조로 운영할 수 있습니다."
      : "Install iSafePlatform on-premise or cloud. Supports closed-network VPN environments.",
  },
  {
    step: "02",
    title: language === "ko" ? "모듈 라이선스 권한 설정" : "Set Module License Permissions",
    desc: language === "ko"
      ? "iSafeGuard 기본 모델은 무상 제공됩니다. 추가 패키지나 다른 모듈은 라이선스 키 입력으로 즉시 활성화되며, 필요에 따라 단계적으로 확장할 수 있습니다."
      : "iSafeGuard basic model is free. Additional packages activate instantly with license keys.",
  },
  {
    step: "03",
    title: language === "ko" ? "사용자 권한 설정" : "Set Up User Permissions",
    desc: language === "ko"
      ? "관리자, 현장 소장, 안전 관리자, 근로자 등 역할을 설정하고 각 역할에 맞는 화면과 데이터 접근 권한을 구성합니다."
      : "Configure roles (admin, manager, safety officer, worker) with tailored screens and data access.",
  },
];

export default function PlatformPage() {
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
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="pt-[88px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:h-[560px]">

              {/* Left: text */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full">iSafePlatform Core</span>
                  <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">
                    {language === "ko" ? "솔루션 기본 탑재" : "Base Solution"}
                  </span>
                </div>
                <h1 className="text-[26px] lg:text-[34px] font-black text-white leading-snug mb-8 max-w-xl">
                  {language === "ko" ? (
                    <>실제 현장 상황을 반영한 위험성평가부터 안전교육, 실시간 관제, 안전성과 측정까지 <span className="text-blue-300">하나의 플랫폼으로 연결합니다.</span></>
                  ) : (
                    <>From field-reflected risk assessment to safety training, real-time monitoring, and safety-performance measurement, <span className="text-blue-300">all connected in one platform.</span></>
                  )}
                </h1>
                <ul className="space-y-3 mb-8 max-w-lg">
                  {(language === "ko"
                    ? [
                        { color: "bg-green-400", text: "iSafePlan은 작업별 위험요인을 분석하고 위험을 사전에 예측합니다." },
                        { color: "bg-red-400", text: "iSafeMeta는 실제 현장을 반영한 가상환경에서 근로자를 교육합니다." },
                        { color: "bg-blue-400", text: "iSafeGuard는 Vision AI 기반으로 현장을 실시간 모니터링하고 위험을 감지합니다." },
                        { color: "bg-orange-400", text: "iSafeIncentive는 안전활동을 기록·분석하여 안전수준을 측정하고 자발적 참여를 유도합니다." },
                      ]
                    : [
                        { color: "bg-green-400", text: "iSafePlan analyzes task-specific hazards and predicts risks in advance." },
                        { color: "bg-red-400", text: "iSafeMeta trains workers in a virtual environment that reflects the real site." },
                        { color: "bg-blue-400", text: "iSafeGuard monitors the site in real time and detects hazards with Vision AI." },
                        { color: "bg-orange-400", text: "iSafeIncentive records and analyzes safety activities to measure safety levels and encourage voluntary participation." },
                      ]
                  ).map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-blue-100">
                      <span className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0 mt-1.5`} />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  </a>
                  <Link
                    href="#modules"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "4개 모듈 살펴보기 ↓" : "Explore 4 Modules ↓"}
                  </Link>
                </div>
              </div>

              {/* Right: circular flow diagram */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-[520px] h-[520px]">

                  {/* SVG: dashed orbit + connecting arrows */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 440" overflow="visible">
                    <defs>
                      {[
                        { id: "ag", color: "#4ade80" },
                        { id: "ar", color: "#f87171" },
                        { id: "ab", color: "#60a5fa" },
                        { id: "ao", color: "#fb923c" },
                      ].map(({ id, color }) => (
                        <marker key={id} id={id} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M0,0.5 L8,4 L0,7.5 Z" fill={color} />
                        </marker>
                      ))}
                    </defs>

                    {/* Dashed orbit ring — r=150, center=(220,220) */}
                    <circle cx="220" cy="220" r="150" fill="none" stroke="rgba(147,197,253,0.15)" strokeWidth="2" strokeDasharray="7 5" />

                    {/* Plan → Train */}
                    <path d="M 295 90 A 150 150 0 0 1 350 145" fill="none" stroke="#4ade80" strokeWidth="3" markerEnd="url(#ag)" />
                    {/* Train → Monitor */}
                    <path d="M 350 295 A 150 150 0 0 1 295 350" fill="none" stroke="#f87171" strokeWidth="3" markerEnd="url(#ar)" />
                    {/* Monitor → Measure */}
                    <path d="M 145 350 A 150 150 0 0 1 90 295" fill="none" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#ab)" />
                    {/* Measure → Plan */}
                    <path d="M 90 145 A 150 150 0 0 1 145 90" fill="none" stroke="#fb923c" strokeWidth="3" markerEnd="url(#ao)" />

                    {/* Subtle spokes to center */}
                    {[[220,70],[370,220],[220,370],[70,220]].map(([x,y], i) => (
                      <line key={i} x1={x} y1={y} x2="220" y2="220" stroke="rgba(147,197,253,0.07)" strokeWidth="1" strokeDasharray="4 5" />
                    ))}
                  </svg>

                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[156px] h-[156px] rounded-full bg-[#0a1628] border-2 border-blue-400/50 flex flex-col items-center justify-center text-center px-5 shadow-2xl shadow-blue-500/30 z-10">
                    <svg className="w-7 h-7 text-blue-300 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                    <span className="text-[14px] font-black text-white leading-tight">iSafePlatform</span>
                    <span className="text-[10px] text-blue-300/90 leading-snug mt-1">
                      {language === "ko" ? <>데이터로 연결된<br />통합 안전관리 플랫폼</> : <>Integrated safety platform<br />connected by data</>}
                    </span>
                  </div>

                  {/* Plan – top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#0a1f0f] border border-green-500/50 rounded-xl px-4 py-3 text-center shadow-lg shadow-green-900/40 w-[156px]">
                      <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest block">Plan</span>
                      <svg className="w-5 h-5 text-green-400 mx-auto my-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                      <span className="text-[14px] font-black text-white block">iSafePlan</span>
                      <span className="text-[10px] text-gray-300 leading-snug block mt-1">
                        {language === "ko" ? <>현장 공정 반영<br />맞춤형 위험성 평가</> : <>Reflects site processes<br />Tailored risk assessment</>}
                      </span>
                    </div>
                  </div>

                  {/* Train – right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-[#1f0a0a] border border-red-500/50 rounded-xl px-4 py-3 text-center shadow-lg shadow-red-900/40 w-[156px]">
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">Train</span>
                      <svg className="w-5 h-5 text-red-400 mx-auto my-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 14l6.16-3.422a12.083 12.083 0 01-.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01-.665-6.479L12 14z" /></svg>
                      <span className="text-[14px] font-black text-white block">iSafeMeta</span>
                      <span className="text-[10px] text-gray-300 leading-snug block mt-1">
                        {language === "ko" ? <>작업 현장 반영<br />AI 기반 안전 교육</> : <>Reflects the work site<br />AI-based safety training</>}
                      </span>
                    </div>
                  </div>

                  {/* Monitor – bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#070f1f] border border-blue-500/50 rounded-xl px-4 py-3 text-center shadow-lg shadow-blue-900/40 w-[156px]">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Monitor</span>
                      <svg className="w-5 h-5 text-blue-400 mx-auto my-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>
                      <span className="text-[14px] font-black text-white block">iSafeGuard</span>
                      <span className="text-[10px] text-gray-300 leading-snug block mt-1">
                        {language === "ko" ? <>AI 기반 위험 감지<br />실시간 모니터링·알람</> : <>AI-based hazard detection<br />Real-time monitoring &amp; alerts</>}
                      </span>
                    </div>
                  </div>

                  {/* Measure – left */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-[#1f0f07] border border-orange-500/50 rounded-xl px-4 py-3 text-center shadow-lg shadow-orange-900/40 w-[156px]">
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">Measure</span>
                      <svg className="w-5 h-5 text-orange-400 mx-auto my-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                      <span className="text-[14px] font-black text-white block">iSafeIncentive</span>
                      <span className="text-[10px] text-gray-300 leading-snug block mt-1">
                        {language === "ko" ? <>안전활동 기록 및 평가<br />보상기반 자율 안전활동</> : <>Records &amp; evaluates safety activity<br />Reward-based voluntary safety</>}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────── */}
        <section className="bg-blue-700 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-600">
              {(language === "ko"
                ? [
                    { value: "4개", label: "순환 연동 모듈" },
                    { value: "24/7", label: "무중단 자동 운영" },
                    { value: "실시간", label: "모듈 간 데이터 동기화" },
                    { value: "단계별", label: "필요한 모듈만 선택 도입" },
                  ]
                : [
                    { value: "4", label: "Cyclically Linked Modules" },
                    { value: "24/7", label: "Uninterrupted Auto Operation" },
                    { value: "Real-time", label: "Inter-Module Data Sync" },
                    { value: "Modular", label: "Adopt Only What You Need" },
                  ]
              ).map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-blue-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── iSafePlatform Architecture (modules + core merged) ─ */}
        <section id="modules" className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <div className="flex justify-center mb-5">
                <Image
                  src="/images/logo-icon.png"
                  alt="ConTILab"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <p className="text-2xl font-semibold text-blue-600 tracking-wider mb-3">
                iSafePlatform Architecture
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko" ? "하나의 Core, 네 개의 모듈, 하나의 안전관리 체계" : "One Core, four modules, one safety system"}
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto">
                {language === "ko"
                  ? "위험성평가(iSafePlan), 안전교육(iSafeMeta), 실시간 관제(iSafeGuard), 안전성과 측정(iSafeIncentive)이 하나의 플랫폼으로 연결됩니다. 현장 데이터는 순환하며 학습되고, 안전문화 혁신으로 이어집니다."
                  : "Risk assessment (iSafePlan), safety training (iSafeMeta), real-time monitoring (iSafeGuard), and safety-performance measurement (iSafeIncentive) connect in one platform. Site data circulates and is continually learned from, leading to safety-culture innovation."}
              </p>
            </div>
            {/* Layered architecture diagram */}
            <div className="max-w-[940px] mx-auto">
              {/* Apex — outcome */}
              <div className="rounded-2xl bg-gradient-to-r from-[#0d1b2a] to-[#1d6fa4] text-white text-center py-5 px-6">
                <p className="text-[11px] font-bold text-blue-200 tracking-[0.2em] mb-1">OUTCOME</p>
                <p className="text-lg font-black">
                  {language === "ko" ? "현장 반영 안전관리 · 사고예방 · 안전문화 혁신" : "Field-reflected Safety Management · Accident Prevention · Safety Culture Innovation"}
                </p>
              </div>

              {/* connector */}
              <div className="flex flex-col items-center py-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
              </div>

              {/* Module layer */}
              <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-4">
                <p className="text-center text-[11px] font-bold text-gray-400 tracking-[0.2em] mb-3">
                  {language === "ko" ? "4대 연동 모듈" : "4 INTEGRATED MODULES"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {getModules(language).map((m) => (
                    <Link
                      key={m.name}
                      href={m.href}
                      className={`group rounded-xl border-2 ${m.color} overflow-hidden hover:shadow-lg transition-all bg-white flex flex-col`}
                    >
                      <div
                        className="h-16 flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${m.gradientFrom} 0%, ${m.gradientTo} 100%)` }}
                      >
                        <span className="text-white text-lg font-black">{m.step}</span>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">{m.name}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-3 flex-1">{m.desc}</p>
                        <div className="flex items-center gap-1 text-xs font-medium text-blue-600">
                          {language === "ko" ? "상세보기" : "View Details"}
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Core foundation */}
              <div className="rounded-2xl bg-gray-900 text-white p-6">
                <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                  <Image src="/images/logo-icon.png" alt="ConTILab" width={28} height={28} className="object-contain" />
                  <p className="text-lg font-black">iSafePlatform Core</p>
                  <span className="px-2.5 py-0.5 text-[11px] font-bold bg-blue-500/20 text-blue-300 rounded-full">
                    {language === "ko" ? "모든 솔루션 기본 탑재" : "Included in all solutions"}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {getInfraFeatures(language).map((f) => (
                    <div key={f.title} className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <div className="text-2xl mb-2">{f.icon}</div>
                      <p className="text-sm font-bold text-white mb-1.5">{f.title}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works / Installation (moved down) ──────── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-2xl font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "도입 절차" : "Implementation Process"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko" ? "3단계로 완료되는 플랫폼 도입" : "3-Step Platform Deployment"}
              </h2>
              <p className="text-gray-500">
                {language === "ko"
                  ? "온프레미스 또는 클라우드 서버에 설치하며, VPN·폐쇄망 환경도 지원합니다. 전문 엔지니어가 함께합니다."
                  : "Install on-premise or cloud. Supports VPN and closed-network environments. Expert engineers included."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-blue-200" />
              {getSteps(language).map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d1b2a] to-[#1b2a3b] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Deployment note */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(language === "ko"
                ? [
                    { icon: "🖥️", title: "온프레미스", desc: "자체 서버에 직접 설치. 데이터가 외부로 나가지 않습니다." },
                    { icon: "☁️", title: "클라우드", desc: "AWS·Azure 등 클라우드 서버에 동일하게 배포 가능합니다." },
                    { icon: "🔒", title: "VPN·폐쇄망", desc: "가상 사설망 내 온프레미스 구조로도 완전히 운영 가능합니다." },
                  ]
                : [
                    { icon: "🖥️", title: "On-Premise", desc: "Installed directly on your own servers—data never leaves your site." },
                    { icon: "☁️", title: "Cloud", desc: "Deployable the same way on cloud servers such as AWS and Azure." },
                    { icon: "🔒", title: "VPN · Closed Network", desc: "Fully operable as an on-premise setup within a virtual private network." },
                  ]
              ).map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
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
