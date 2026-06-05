"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

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
    name: "iSafePlanner",
    badge: language === "ko" ? "계획" : "Plan",
    badgeColor: "bg-green-100 text-green-700",
    desc: language === "ko"
      ? "BIM 기반 동적 공정 분석으로 위험 발생 전에 예측하고 오늘의 훈련 시나리오를 iSafeMeta에 전달합니다."
      : "Predict risks before they occur with BIM-based analysis. Transfer training scenarios to iSafeMeta.",
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
      ? "iSafePlanner의 현장 3D 환경에서 AI Agent 아바타와 함께 오늘 투입될 공정을 미리 훈련합니다."
      : "Train workers in 3D site environment with AI avatar before deployment.",
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
      ? "교육받은 근로자가 현장에 투입되면 AI가 32채널을 실시간 관제합니다. 기본 AI 모델 5종은 조건 없이 무료 제공됩니다."
      : "Real-time AI monitoring of 32 channels on-site. 5 basic AI models provided free.",
    href: "/isafe-guard",
    color: "border-blue-200 hover:border-blue-400",
    gradientFrom: "#0c2340",
    gradientTo: "#1d6fa4",
    step: language === "ko" ? "③ 관제" : "③ Monitor",
  },
  {
    name: "iSafeChain",
    badge: language === "ko" ? "측정" : "Measure",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: language === "ko"
      ? "iSafeGuard의 관제 데이터와 이수 기록을 블록체인에 저장해 성과를 측정하고 인센티브를 지급합니다."
      : "Store monitoring data and records on blockchain. Measure performance and distribute incentives.",
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
    title: language === "ko" ? "모듈 라이선스 해금" : "Unlock Module Licenses",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: text */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full">iSafePlatform Core</span>
                  <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">
                    {language === "ko" ? "솔루션 기본 탑재" : "Base Solution"}
                  </span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  {language === "ko" ? (
                    <>
                      계획하고, 교육하고,<br />
                      관제하고, 측정한다<br />
                      <span className="text-blue-300">안전의 완전한 순환</span>
                    </>
                  ) : (
                    <>
                      Plan, Train,<br />
                      Monitor, Measure<br />
                      <span className="text-blue-300">Complete Safety Cycle</span>
                    </>
                  )}
                </h1>
                <p className="text-blue-100 text-base leading-relaxed mb-6 max-w-lg">
                  {language === "ko"
                    ? "각각 따로 쓰면 도구입니다. iSafePlatform으로 연결하면 현장이 스스로 안전해집니다."
                    : "Alone, they're tools. Connected through iSafePlatform, the site becomes inherently safe."}
                </p>
                <ul className="space-y-3 mb-8 max-w-lg">
                  {(language === "ko"
                    ? [
                        { color: "bg-green-400", text: "iSafePlanner가 오늘의 위험 공정을 예측하고" },
                        { color: "bg-red-400", text: "iSafeMeta가 근로자를 투입 전 가상환경에서 교육하고" },
                        { color: "bg-blue-400", text: "iSafeGuard가 현장 전체를 AI로 실시간 관제하고" },
                        { color: "bg-orange-400", text: "iSafeChain이 모든 데이터를 측정·기록·보상합니다" },
                      ]
                    : [
                        { color: "bg-green-400", text: "iSafePlanner predicts today's risks" },
                        { color: "bg-red-400", text: "iSafeMeta trains workers in virtual environments" },
                        { color: "bg-blue-400", text: "iSafeGuard monitors the entire site in real-time" },
                        { color: "bg-orange-400", text: "iSafeChain measures, records, and rewards" },
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
                <div className="relative w-[440px] h-[440px]">

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
                    <path d="M 268 80 A 150 150 0 0 1 358 172" fill="none" stroke="#4ade80" strokeWidth="2" markerEnd="url(#ag)" />
                    {/* Train → Monitor */}
                    <path d="M 358 268 A 150 150 0 0 1 268 358" fill="none" stroke="#f87171" strokeWidth="2" markerEnd="url(#ar)" />
                    {/* Monitor → Measure */}
                    <path d="M 172 358 A 150 150 0 0 1 82 268" fill="none" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#ab)" />
                    {/* Measure → Plan */}
                    <path d="M 82 172 A 150 150 0 0 1 172 82" fill="none" stroke="#fb923c" strokeWidth="2" markerEnd="url(#ao)" />

                    {/* Subtle spokes to center */}
                    {[[220,70],[370,220],[220,370],[70,220]].map(([x,y], i) => (
                      <line key={i} x1={x} y1={y} x2="220" y2="220" stroke="rgba(147,197,253,0.07)" strokeWidth="1" strokeDasharray="4 5" />
                    ))}
                  </svg>

                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-[#0a1628] border-2 border-blue-400/50 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/30 z-10">
                    <span className="text-[11px] font-black text-blue-300 uppercase tracking-wider text-center leading-tight">iSafe<br />Platform</span>
                    <span className="text-[10px] text-blue-500/80 mt-1 font-semibold">Core</span>
                  </div>

                  {/* Plan – top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#0a1f0f] border border-green-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-green-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-green-400 uppercase tracking-widest block mb-0.5">Plan</span>
                      <span className="text-[15px] font-black text-white">iSafePlanner</span>
                    </div>
                  </div>

                  {/* Train – right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-[#1f0a0a] border border-red-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-red-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block mb-0.5">Train</span>
                      <span className="text-[15px] font-black text-white">iSafeMeta</span>
                    </div>
                  </div>

                  {/* Monitor – bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#070f1f] border border-blue-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-blue-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block mb-0.5">Monitor</span>
                      <span className="text-[15px] font-black text-white">iSafeGuard</span>
                    </div>
                  </div>

                  {/* Measure – left */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-[#1f0f07] border border-orange-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-orange-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest block mb-0.5">Measure</span>
                      <span className="text-[15px] font-black text-white">iSafeChain</span>
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

        {/* ── 4 Core Modules (moved up) ─────────────────────── */}
        <section id="modules" className="py-20 bg-white">
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
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "4대 핵심 연동 모듈" : "4 Core Integrated Modules"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko" ? "순서대로 작동하고, 데이터가 순환합니다" : "Execute in sequence, data flows continuously"}
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                {language === "ko"
                  ? "현장의 요구에 맞춰 필요한 모듈부터 도입하고, 성장에 맞춰 추가로 해금하세요."
                  : "Deploy modules based on your needs, unlock additional ones as you grow."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getModules(language).map((m) => (
                <Link
                  key={m.name}
                  href={m.href}
                  className={`group rounded-2xl border-2 ${m.color} overflow-hidden hover:shadow-lg transition-all bg-white flex flex-col`}
                >
                  <div
                    className="h-28 flex items-center justify-center px-5"
                    style={{ background: `linear-gradient(135deg, ${m.gradientFrom} 0%, ${m.gradientTo} 100%)` }}
                  >
                    <span className="text-white text-4xl font-black">{m.badge}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`inline-block px-2 py-0.5 text-xs font-bold ${m.badgeColor} rounded-md mb-2 w-fit`}>{m.badge}</span>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-2">{m.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{m.desc}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-blue-600">
                      {language === "ko" ? "상세보기" : "View Details"}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Infrastructure ───────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "플랫폼 Core 기능" : "Platform Core Features"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko" ? "4개 모듈을 하나로 묶는 3대 인프라" : "3 Core Infrastructures Unifying 4 Modules"}
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                {language === "ko"
                  ? "모든 솔루션 고객에게 기본 탑재되는 통제 본부입니다."
                  : "Command center included in all solution packages."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getInfraFeatures(language).map((f) => (
                <div key={f.title} className={`p-6 rounded-2xl border ${f.color} bg-white`}>
                  <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center mb-4 text-2xl`}>
                    {f.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works / Installation (moved down) ──────── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
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
              {[
                { icon: "🖥️", title: "온프레미스", desc: "자체 서버에 직접 설치. 데이터가 외부로 나가지 않습니다." },
                { icon: "☁️", title: "클라우드", desc: "AWS·Azure 등 클라우드 서버에 동일하게 배포 가능합니다." },
                { icon: "🔒", title: "VPN·폐쇄망", desc: "가상 사설망 내 온프레미스 구조로도 완전히 운영 가능합니다." },
              ].map((item) => (
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

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">
                  {language === "ko" ? (
                    <>
                      지금 쓰는 안전 관리 방식,<br />
                      5년 뒤에도 유지할 수 있습니까?
                    </>
                  ) : (
                    <>
                      Can your current safety management<br />
                      sustain for the next 5 years?
                    </>
                  )}
                </h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  {language === "ko"
                    ? "규제는 강화되고, 현장은 복잡해지고, 인력은 부족합니다. iSafePlatform은 그 간극을 AI와 자동화로 채웁니다.\n\nConTILab이 공공기관 및 탑티어 건설사들과 함께 검증한 솔루션입니다."
                    : "Regulations tighten, sites grow complex, resources shrink. iSafePlatform fills the gap with AI and automation.\n\nValidated with government agencies and top-tier construction firms."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "도입 문의하기" : "Request Deployment"}
                  </a>
                  <Link
                    href="#modules"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "모듈 살펴보기" : "Explore Modules"}
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImagePlaceholder
                  title={language === "ko" ? "iSafePlatform 도입 현장 전경 사진" : "iSafePlatform Deployment Site"}
                  description={language === "ko"
                    ? "iSafePlatform을 도입한 건설현장의 실제 운영 사진"
                    : "Actual operational photo of a construction site with iSafePlatform"}
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
