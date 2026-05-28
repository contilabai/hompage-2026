"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    tag: "엣지 AI CCTV",
    tagColor: "bg-blue-500",
    headline: "CCTV 교체없이\n현장에서 바로 사용 가능한 AI",
    desc: "기존 CCTV를 그대로 활용하면서 안전모 미착용 감지, 위험구역 침입 감지 등 AI 안전관리 기능을 즉시 도입하세요.",
    href: "#ai-cctv",
    gradientFrom: "#0f2557",
    gradientTo: "#1e3a8a",
    mockupBg: "bg-blue-800",
    mockupLabel: "AI CCTV 대시보드 스크린샷",
    accentText: "text-blue-300",
  },
  {
    tag: "동영상 기록관리",
    tagColor: "bg-slate-500",
    headline: "촬영계획서, 촬영 장비,\n영상 편집까지 한번에!",
    desc: "공사현장의 모든 영상 기록을 체계적으로 관리하세요. 촬영부터 편집, 저장, 공유까지 하나의 통합 플랫폼에서.",
    href: "#video",
    gradientFrom: "#1e293b",
    gradientTo: "#334155",
    mockupBg: "bg-slate-700",
    mockupLabel: "동영상 관리 화면",
    accentText: "text-slate-300",
  },
  {
    tag: "모바일 TBM",
    tagColor: "bg-emerald-600",
    headline: "작업 전 안전점검,\n작업자 서명까지 손쉬운 관리!",
    desc: "모바일로 간편하게 TBM(Tool Box Meeting)을 진행하고 작업자 서명을 디지털로 관리하세요.",
    href: "#smart-safety",
    gradientFrom: "#064e3b",
    gradientTo: "#065f46",
    mockupBg: "bg-emerald-800",
    mockupLabel: "모바일 TBM 앱 화면",
    accentText: "text-emerald-300",
  },
  {
    tag: "관계사 협업",
    tagColor: "bg-orange-500",
    headline: "협력사와 실시간으로\n안전정보를 공유하세요",
    desc: "원도급사와 하도급사가 하나의 플랫폼에서 안전 관련 정보를 실시간으로 공유하고 관리합니다.",
    href: "#process-management",
    gradientFrom: "#7c2d12",
    gradientTo: "#9a3412",
    mockupBg: "bg-orange-800",
    mockupLabel: "협업 대시보드 화면",
    accentText: "text-orange-300",
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
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold text-white ${slide.tagColor} rounded-full mb-5`}
            >
              {slide.tag}
            </span>
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
              자세히 보기
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
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
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
