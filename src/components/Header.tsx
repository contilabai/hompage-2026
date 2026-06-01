"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  {
    label: "ISafePlatform Core",
    href: "/platform",
    badge: "Core",
    desc: "모듈 관리 · 권한 제어 · 데이터 파이프라인",
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
    label: "ISafePlanner",
    href: "/isafe-planner",
    badge: "Plan",
    desc: "BIM 기반 공정 분석 · 위험도 예측",
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
    label: "ISafeMeta",
    href: "/isafe-meta",
    badge: "Train",
    desc: "가상 현장 훈련 · 다국어 AI 아바타",
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
    label: "ISafeGuard",
    href: "/isafe-guard",
    badge: "Monitor",
    desc: "32채널 AI 관제 · VLM 자동 보고서",
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
    label: "ISafeChain",
    href: "/isafe-chain",
    badge: "Measure",
    desc: "블록체인 기록 · 스마트 컨트랙트 리워드",
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

const aboutSections = [
  {
    group: "About",
    items: [
      {
        label: "ConTILab",
        href: "/about",
        desc: "회사 소개 · 파트너십 현황",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-600",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
      {
        label: "Our Journey",
        href: "/about#history",
        desc: "2003년 연구실부터 현재까지의 연혁",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    group: "연구",
    items: [
      {
        label: "Research Areas",
        href: "/about/research",
        desc: "비전 AI · 합성 데이터 · LLM 핵심 연구",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
      {
        label: "인증 & 특허",
        href: "/about/research#credentials",
        desc: "KTL · ONYCOM 인증 · 29건 특허 포트폴리오",
        iconBg: "bg-green-50",
        iconColor: "text-green-600",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        ),
      },
    ],
  },
  {
    group: "채용",
    items: [
      {
        label: "우리의 비전",
        href: "/about/careers",
        desc: "ConTI Lab이 함께 만드는 안전의 가치",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ),
      },
      {
        label: "채용 공고",
        href: "/about/careers",
        desc: "AI Engineer · 건설안전 프로젝트 매니저",
        iconBg: "bg-rose-50",
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

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
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProductOpen(!productOpen)}
                className={`flex items-center gap-1.5 px-5 py-3 text-[30px] font-semibold rounded-lg transition-colors ${
                  productOpen ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                제품
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-3">
                    {products.map((p) => (
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

            {/* 회사소개 dropdown */}
            <div ref={aboutRef} className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1.5 px-5 py-3 text-[30px] font-semibold rounded-lg transition-colors ${
                  aboutOpen ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                회사소개
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-3 space-y-1">
                    {aboutSections.map((section, si) => (
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

            <Link
              href="/news"
              className="px-5 py-3 text-[30px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              소식
            </Link>

            <Link
              href="/contact"
              className="px-5 py-3 text-[30px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              문의하기
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden ml-auto p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-2">
            <button
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-700 border-b border-gray-50"
            >
              제품
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProductOpen && (
              <div className="py-1 pl-3">
                {products.map((p) => (
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

            {/* 회사소개 mobile accordion */}
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-700 border-b border-gray-50"
            >
              회사소개
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAboutOpen && (
              <div className="py-1 pl-3">
                {aboutSections.map((section) => (
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
            <Link
              href="/news"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              소식
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
