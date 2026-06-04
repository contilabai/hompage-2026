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
    label: "iSafePlanner",
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
    desc: language === "ko" ? "32채널 AI 관제 · VLM 자동 보고서" : "32-Channel AI Monitoring · VLM Auto-Reports",
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
    label: "iSafeChain",
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

const getAboutSections = (language: "ko" | "en") => [
  {
    group: language === "ko" ? "회사" : "Company",
    items: [
      {
        label: language === "ko" ? "ConTILab" : "ConTILab",
        href: "/about",
        desc: language === "ko" ? "회사 소개 · 파트너십" : "Company Overview · Partnerships",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-600",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
    ],
  },
  {
    group: language === "ko" ? "연구" : "Research",
    items: [
      {
        label: language === "ko" ? "연구" : "Research",
        href: "/about/research",
        desc: language === "ko" ? "R&D · 기술 혁신 · 특허" : "R&D · Technology Innovation · Patents",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
    ],
  },
  {
    group: language === "ko" ? "채용" : "Careers",
    items: [
      {
        label: language === "ko" ? "비전 및 채용" : "Vision & Careers",
        href: "/about/careers",
        desc: language === "ko" ? "우리의 가치 · 채용 공고" : "Our Values · Job Openings",
        iconBg: "bg-purple-50",
        iconColor: "text-rose-500",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

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
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
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
            {/* 회사소개 dropdown */}
            <div ref={aboutRef} className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1.5 px-5 py-3 text-[30px] font-semibold rounded-lg transition-colors ${
                  aboutOpen ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {language === "ko" ? "회사소개" : "About"}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-3 space-y-1">
                    {getAboutSections(language).map((section, si) => (
                      <div key={section.group}>
                        {si > 0 && <div className="my-2 border-t border-gray-100" />}
                        <p className="px-4 pt-2 pb-1 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          {section.group}
                        </p>
                        {section.items.map((item) => (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            onClick={() => setAboutOpen(false)}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}>
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[17px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-0.5">
                                {item.label}
                              </p>
                              <p className="text-[13px] text-gray-400 leading-snug">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 제품 dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className={`flex items-center gap-1.5 px-5 py-3 text-[30px] font-semibold rounded-lg transition-colors ${
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
              className="px-5 py-3 text-[30px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {language === "ko" ? "소식" : "News"}
            </Link>

            <Link
              href="/contact"
              className="px-5 py-3 text-[30px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {language === "ko" ? "문의하기" : "Contact"}
            </Link>
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-lg p-1.5 mr-4 cursor-pointer">
            <button
              onClick={() => {
                console.log("KO clicked");
                handleLanguageChange("ko");
              }}
              className={`px-4 py-2 text-sm font-bold rounded transition-all ${
                language === "ko"
                  ? "bg-white text-gray-900 shadow-md border border-gray-200"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              한국어
            </button>
            <button
              onClick={() => {
                console.log("EN clicked");
                handleLanguageChange("en");
              }}
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
            {/* 회사소개 mobile accordion */}
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-700 border-b border-gray-50"
            >
              {language === "ko" ? "회사소개" : "About"}
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAboutOpen && (
              <div className="py-1 pl-3">
                {getAboutSections(language).map((section) => (
                  <div key={section.group}>
                    <p className="pt-2 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                      {section.group}
                    </p>
                    {section.items.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => { setMobileOpen(false); setMobileAboutOpen(false); }}
                      >
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconBg} ${item.iconColor}`}>
                          {item.icon}
                        </div>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

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
