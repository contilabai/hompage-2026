"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const getProducts = (language: "ko" | "en") => [
  {
    label: "iSafePlatform Core",
    href: "/platform",
    badge: "Core",
    desc: language === "ko" ? "모듈 관리 · 권한 제어 · 데이터 파이프라인" : "Module Management · Access Control · Data Pipeline",
    badgeColor: "bg-gray-100 text-gray-600",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    label: "iSafePlan",
    href: "/isafe-planner",
    badge: "Plan",
    desc: language === "ko" ? "BIM 기반 공정 분석 · 위험도 예측" : "BIM-based Schedule Analysis · Risk Prediction",
    badgeColor: "bg-green-50 text-green-700",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    label: "iSafeMeta",
    href: "/isafe-meta",
    badge: "Train",
    desc: language === "ko" ? "가상 현장 훈련 · 다국어 AI 아바타" : "Virtual Site Training · Multilingual AI Avatars",
    badgeColor: "bg-red-50 text-red-700",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    label: "iSafeGuard",
    href: "/isafe-guard",
    badge: "Monitor",
    desc: language === "ko" ? "100채널+ AI 관제 · VLM 자동 보고서" : "100+ Channel AI Monitoring · VLM Auto-Reports",
    badgeColor: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    label: "iSafeIncentive",
    href: "/isafe-chain",
    badge: "Measure",
    desc: language === "ko" ? "블록체인 기록 · 스마트 컨트랙트 리워드" : "Blockchain Records · Smart Contract Rewards",
    badgeColor: "bg-orange-50 text-orange-700",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
      if (savedLang) setLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: "ko" | "en") => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      // 커스텀 이벤트로 다른 컴포넌트에 알림
      window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 bg-white ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center h-[88px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/images/logo-icon.png"
              alt="ConTILab"
              width={42}
              height={42}
              className="object-contain"
            />
            <span className="text-[24px] font-black text-gray-900 tracking-tight">ConTILab</span>
          </Link>

          {/* Desktop nav — centered, click-only dropdown */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-2">
            {/* 회사소개 — 단일 링크 */}
            <Link
              href="/about"
              className="flex items-center gap-1.5 px-5 py-3 text-[20px] font-semibold rounded-lg transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {language === "ko" ? "회사소개" : "About"}
            </Link>

            {/* 제품 dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className={`flex items-center gap-1.5 px-5 py-3 text-[20px] font-semibold rounded-lg transition-colors ${
                  productOpen ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {language === "ko" ? "제품" : "Products"}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-3">
                    {getProducts(language).map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setProductOpen(false)}
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${p.iconBg} ${p.iconColor}`}>
                          {p.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2.5 mb-0.5">
                            <span className="text-[17px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {p.label}
                            </span>
                            <span className={`px-2 py-0.5 text-[11px] font-bold rounded-md ${p.badgeColor}`}>
                              {p.badge}
                            </span>
                          </div>
                          <p className="text-[13px] text-gray-400 leading-snug">{p.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/news"
              className="px-5 py-3 text-[20px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {language === "ko" ? "소식" : "News"}
            </Link>

            <Link
              href="/contact"
              className="px-5 py-3 text-[20px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {language === "ko" ? "문의하기" : "Contact"}
            </Link>
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-lg p-1.5 mr-4 cursor-pointer">
            <button
              onClick={() => handleLanguageChange("ko")}
              className={`px-4 py-2 text-sm font-bold rounded transition-all ${
                language === "ko"
                  ? "bg-white text-gray-900 shadow-md border border-gray-200"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              한국어
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded transition-all ${
                language === "en"
                  ? "bg-white text-gray-900 shadow-md border border-gray-200"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <Globe size={16} />
              <span>EN</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={language === "ko" ? "메뉴 열기" : "Open menu"}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-2">
            {/* 회사소개 — 단일 링크 */}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center py-3 text-sm font-semibold text-gray-700 border-b border-gray-50"
            >
              {language === "ko" ? "회사소개" : "About"}
            </Link>

            <button
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-700 border-b border-gray-50"
            >
              {language === "ko" ? "제품" : "Products"}
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProductOpen && (
              <div className="py-1 pl-3">
                {getProducts(language).map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => { setMobileOpen(false); setMobileProductOpen(false); }}
                  >
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${p.iconBg} ${p.iconColor}`}>
                      {p.icon}
                    </div>
                    {p.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/news"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              {language === "ko" ? "소식" : "News"}
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              {language === "ko" ? "문의하기" : "Contact"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
