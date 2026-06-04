"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ISafeGuardTabs from "@/components/ISafeGuardTabs";

const getSteps = (language: "ko" | "en") => [
  {
    step: "01",
    title: language === "ko" ? "하드웨어 설치 및 카메라 연결" : "Install Hardware & Connect Cameras",
    desc: language === "ko"
      ? "현장 규모에 맞는 장비를 선택합니다. 카메라 교체만으로 되는 온디바이스 AI 카메라, 기존 CCTV에 연결하는 AI 엣지 박스, 100채널 이상을 위한 NPU PC 서버 중 선택. 전문 엔지니어가 직접 설치합니다."
      : "Choose equipment matching your site. On-device AI cameras, edge boxes for existing CCTV, or NPU servers for 100+ channels. Professional engineers install everything.",
  },
  {
    step: "02",
    title: language === "ko" ? "AI 모델 선택 및 위험구역 설정" : "Select AI Models & Set Hazard Zones",
    desc: language === "ko"
      ? "기본 AI 모델 5종은 무료로 즉시 활성화됩니다. 특수 공정이 있다면 Pro·Custom 패키지를 추가하세요. 마우스로 위험구역을 그리면 그 순간부터 AI가 감지합니다."
      : "5 essential AI models activate free, instantly. Add Pro or Custom packages for specialized processes. Draw hazard zones with mouse—AI starts detecting immediately.",
  },
  {
    step: "03",
    title: language === "ko" ? "설치 당일부터 AI 관제 시작" : "AI Monitoring Starts Day One",
    desc: language === "ko"
      ? "설정 완료 즉시 AI 관제가 시작됩니다. 위험 감지 시 즉시 알림, 매일 VLM 보고서가 자동으로 발행됩니다."
      : "AI monitoring begins immediately after setup. Instant alerts on hazard detection, automatic daily VLM reports.",
  },
];

export default function ISafeGuardPage() {
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
        <section className="pt-[88px] bg-gradient-to-br from-[#060f1a] via-[#0c2340] to-[#1d6fa4] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">iSafeGuard</span>
                  <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">
                    {language === "ko" ? "관제 모듈" : "Monitor Module"}
                  </span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  {language === "ko" ? (
                    <>
                      당신이 자리를 비웠을 때도<br />
                      <span className="text-blue-300">AI는 현장에 있습니다</span>
                    </>
                  ) : (
                    <>
                      When you step away,<br />
                      <span className="text-blue-300">AI stays on the job</span>
                    </>
                  )}
                </h1>
                <p className="text-blue-100 text-base leading-relaxed mb-4 max-w-md">
                  {language === "ko"
                    ? "안전 관리자가 100대 카메라를 24시간 동안 놓치지 않고 볼 수는 없습니다. 집중력이 흐트러지는 순간 사고는 일어납니다."
                    : "No safety manager can watch 100+ cameras 24/7 without missing something. Accidents happen in moments of lost focus."}
                </p>
                <p className="text-white font-semibold text-base mb-3 max-w-md">
                  {language === "ko"
                    ? "iSafeGuard AI는 지치지 않고, 졸지 않으며, 매 프레임을 분석합니다."
                    : "iSafeGuard AI never tires, never dozes, analyzes every frame."}
                </p>
                <p className="text-green-300 font-bold text-sm mb-8 max-w-md">
                  {language === "ko"
                    ? "✓ 기본 AI 모델 5종 · iSafePlatform Core · 관제 뷰어 — 조건 없이 무료 제공"
                    : "✓ 5 Essential AI Models · iSafePlatform Core · Viewer—Completely Free"}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-3 text-sm font-bold text-green-900 bg-green-400 hover:bg-green-300 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "무료 방문 설치 신청" : "Request Free Installation"}
                  </Link>
                  <Link
                    href="#tabs"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "솔루션·모델·디바이스 보기 ↓" : "View Solutions & Devices ↓"}
                  </Link>
                </div>
              </div>

              {/* Right: AI Monitor with Detection Video */}
              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-blue-500/30 p-4 shadow-2xl shadow-blue-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">
                      iSafeGuard · {language === "ko" ? "실시간 AI 영상 관제" : "Real-time AI Monitoring"}
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      LIVE
                    </span>
                  </div>
                  <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/gif/detection.gif"
                      alt={language === "ko" ? "AI 위험 감지" : "AI Hazard Detection"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-blue-400 text-sm flex-shrink-0">🎯</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "딥러닝 비전 AI가 안전모·안전고리 등 PPE 미착용과 위험 행동을 실시간 감지합니다."
                          : "Deep-learning vision AI detects missing PPE like helmets & harnesses and unsafe behavior in real time."}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 bg-gray-800/60 rounded-lg px-3 py-2.5">
                      <span className="text-green-400 text-sm flex-shrink-0">📝</span>
                      <span className="text-[12px] text-gray-300 leading-snug">
                        {language === "ko"
                          ? "이상 상황은 즉시 알림하고, 매일 VLM 보고서를 자동으로 작성합니다."
                          : "Instant alerts on anomalies, with daily VLM reports generated automatically."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-blue-600 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-500">
              {[
                {
                  value: "100CH+",
                  label: language === "ko" ? "동시 AI 관제" : "Simultaneous AI Monitoring",
                },
                {
                  value: "24/7",
                  label: language === "ko" ? "무중단 자동 운영" : "Uninterrupted Auto Operation",
                },
                {
                  value: "10초",
                  label: language === "ko" ? "VLM 보고서 작성 시간" : "VLM Report Generation",
                },
                {
                  value: language === "ko" ? "기본 무료" : "Free Basic",
                  label: language === "ko" ? "필수 AI 모델 5종 제공" : "5 Essential AI Models",
                },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-blue-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Tab Section */}
        <div id="tabs">
          <ISafeGuardTabs />
        </div>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {language === "ko" ? "도입 절차" : "Implementation Process"}
              </p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {language === "ko"
                  ? "설치 당일부터 AI 관제가 시작됩니다"
                  : "AI Monitoring Starts on Installation Day"}
              </h2>
              <p className="text-gray-500">
                {language === "ko"
                  ? "복잡한 IT 설정 없이, 전문 엔지니어가 현장에서 직접 구성합니다."
                  : "No complex IT setup—professional engineers configure everything on site."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-blue-200" />
              {getSteps(language).map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0c2340] to-[#1d6fa4] flex items-center justify-center mb-6 shadow-lg relative z-10">
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
        <section className="py-20 bg-gradient-to-r from-[#0c2340] to-[#1d6fa4] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">
                  {language === "ko" ? (
                    <>
                      지금 현장에서 일어나는 일,<br />
                      당신은 알고 계십니까?
                    </>
                  ) : (
                    <>
                      What's happening on site<br />
                      right now—do you know?
                    </>
                  )}
                </h2>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  {language === "ko"
                    ? "매일 현장에서 수십 건의 아차사고가 기록 없이 지나가고 있습니다.\niSafeGuard가 그 모든 순간을 관제하고, 반복을 막습니다."
                    : "Dozens of near-misses slip by every day with no record.\niSafeGuard monitors every moment and stops repeat incidents."}
                </p>
                <p className="text-green-300 text-sm font-semibold mb-8">
                  {language === "ko"
                    ? "기본 AI 모델 5종과 iSafePlatform Core는 무료입니다. 지금 바로 시작하세요."
                    : "5 essential AI models and iSafePlatform Core are free. Start today."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 text-sm font-bold text-green-900 bg-green-400 hover:bg-green-300 rounded-xl transition-colors shadow-lg"
                  >
                    {language === "ko" ? "무료 방문 설치 신청" : "Request Free Installation"}
                  </Link>
                  <Link
                    href="/platform"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    {language === "ko" ? "Platform Core 알아보기" : "Learn About Platform Core"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}
