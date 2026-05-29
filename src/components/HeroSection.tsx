"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "ISafePlatform",
    tagColor: "bg-blue-700",
    badge: "All-in-One Platform",
    headline: "안전 사고,\n예측할 수 있다면\n막을 수 있습니다",
    desc: "지금 이 순간에도 현장 어딘가에서 사고의 전조가 쌓이고 있습니다. ISafePlatform은 그 전조를 데이터로 읽어 사고가 일어나기 전에 개입합니다.",
    href: "/platform",
    gradientFrom: "#0d1b2a",
    gradientTo: "#1b2a3b",
    mockupBg: "bg-blue-900",
    mockupLabel: "ISafePlatform Core 대시보드",
    accentText: "text-blue-300",
    mockupIcon: (
      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    tag: "ISafePlanner",
    tagColor: "bg-green-600",
    badge: "Plan Module",
    headline: "현장 투입 전,\n이미 모든 위험을\n알고 있습니다",
    desc: "근로자가 들어가기 전에 그 공간의 위험을 먼저 파악해야 합니다. ISafePlanner는 도면 하나로 공정별 위험 지도를 자동으로 그립니다.",
    href: "/isafe-planner",
    gradientFrom: "#14532d",
    gradientTo: "#16a34a",
    mockupBg: "bg-green-800",
    mockupLabel: "BIM 3D 공정 시뮬레이션",
    accentText: "text-green-300",
    mockupIcon: (
      <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    tag: "ISafeMeta",
    tagColor: "bg-red-600",
    badge: "Train Module",
    headline: "종이 교육으로\n근로자를 지킬 수\n없는 이유",
    desc: "위험을 한 번도 겪어보지 못한 사람은 위험을 알아보지 못합니다. ISafeMeta는 실제 현장과 똑같은 공간에서 위험을 직접 체험하게 합니다.",
    href: "/isafe-meta",
    gradientFrom: "#7f1d1d",
    gradientTo: "#dc2626",
    mockupBg: "bg-red-800",
    mockupLabel: "가상 안전 훈련 시뮬레이터",
    accentText: "text-red-300",
    mockupIcon: (
      <svg className="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    tag: "ISafeGuard",
    tagColor: "bg-blue-500",
    badge: "Monitor Module",
    headline: "당신이 자리를\n비웠을 때도\nAI는 현장에 있습니다",
    desc: "안전 관리자 한 명이 32개 카메라를 동시에 볼 수는 없습니다. ISafeGuard AI는 지치지 않고, 졸지 않으며, 매 프레임을 분석합니다.",
    href: "/isafe-guard",
    gradientFrom: "#0c2340",
    gradientTo: "#1d6fa4",
    mockupBg: "bg-blue-900",
    mockupLabel: "다채널 실시간 관제 화면",
    accentText: "text-blue-300",
    mockupIcon: (
      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    tag: "ISafeChain",
    tagColor: "bg-orange-500",
    badge: "Measure Module",
    headline: "사고 이후\n기록이 없으면\n당신을 지킬 수 없습니다",
    desc: "중대재해 발생 시 '우리는 교육했다', '우리는 관리했다'를 증명해야 합니다. ISafeChain은 그 증거를 위변조 불가 블록체인에 자동으로 쌓습니다.",
    href: "/isafe-chain",
    gradientFrom: "#7c2d12",
    gradientTo: "#ea580c",
    mockupBg: "bg-orange-800",
    mockupLabel: "블록체인 안전 거버넌스 대시보드",
    accentText: "text-orange-300",
    mockupIcon: (
      <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative pt-[64px] min-h-[540px] flex flex-col"
      style={{
        background: `linear-gradient(135deg, ${slide.gradientFrom} 0%, ${slide.gradientTo} 100%)`,
        transition: "background 0.7s ease",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center flex-1">
          {/* Left: text */}
          <div key={current} className="hero-slide-content text-white">
            <div className="flex items-center gap-2 mb-5">
              <span className={`inline-block px-3 py-1 text-xs font-semibold text-white ${slide.tagColor} rounded-full`}>
                {slide.tag}
              </span>
              <span className="inline-block px-3 py-1 text-xs text-white/70 bg-white/10 rounded-full">
                {slide.badge}
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[44px] font-black text-white whitespace-pre-line leading-[1.2] mb-5">
              {slide.headline}
            </h1>
            <p className={`text-base ${slide.accentText} mb-8 max-w-[480px] leading-relaxed`}>
              {slide.desc}
            </p>
            <Link
              href={slide.href}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              상세보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: mockup */}
          <div key={`img-${current}`} className="hidden lg:block hero-slide-content">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-3">
              <div
                className={`${slide.mockupBg} rounded-xl aspect-video flex flex-col items-center justify-center gap-3 border border-white/10`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  {slide.mockupIcon}
                </div>
                <span className={`inline-block px-3 py-1 text-xs font-bold text-white ${slide.tagColor} rounded-full`}>
                  {slide.badge}
                </span>
                <p className="text-white/50 text-sm">{slide.mockupLabel}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
