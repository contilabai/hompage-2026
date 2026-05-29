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
    dotColor: "bg-gray-400",
  },
  {
    label: "ISafePlanner",
    href: "/isafe-planner",
    badge: "Plan",
    desc: "BIM 기반 공정 분석 · 위험도 예측",
    badgeColor: "bg-green-50 text-green-700",
    dotColor: "bg-green-500",
  },
  {
    label: "ISafeMeta",
    href: "/isafe-meta",
    badge: "Train",
    desc: "가상 현장 훈련 · 다국어 AI 아바타",
    badgeColor: "bg-red-50 text-red-700",
    dotColor: "bg-red-500",
  },
  {
    label: "ISafeGuard",
    href: "/isafe-guard",
    badge: "Monitor",
    desc: "32채널 AI 관제 · VLM 자동 보고서",
    badgeColor: "bg-blue-50 text-blue-700",
    dotColor: "bg-blue-500",
  },
  {
    label: "ISafeChain",
    href: "/isafe-chain",
    badge: "Measure",
    desc: "블록체인 기록 · 스마트 컨트랙트 리워드",
    badgeColor: "bg-orange-50 text-orange-700",
    dotColor: "bg-orange-500",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo-icon.png"
              alt="ConTILab"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-[20px] font-black text-gray-900 tracking-tight">ConTILab</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                onClick={() => setProductOpen(!productOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-[13.5px] font-semibold rounded-md transition-colors ${
                  productOpen ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                제품
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-2">
                    {products.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setProductOpen(false)}
                        className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${p.dotColor} flex-shrink-0 mt-1.5`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[13.5px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {p.label}
                            </span>
                            <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded-md ${p.badgeColor}`}>
                              {p.badge}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-gray-400 leading-snug">{p.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-[13.5px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              회사소개
            </Link>

            <Link
              href="/news"
              className="px-4 py-2 text-[13.5px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              소식
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <a
              href="mailto:contilab@contilab.co.kr"
              className="px-4 py-1.5 text-[13.5px] font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              도입 문의
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
                    className="flex items-center gap-2 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => { setMobileOpen(false); setMobileProductOpen(false); }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dotColor}`} />
                    {p.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              회사소개
            </Link>
            <Link
              href="/news"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600"
              onClick={() => setMobileOpen(false)}
            >
              소식
            </Link>
          </nav>
          <div className="px-4 py-3">
            <a
              href="mailto:contilab@contilab.co.kr"
              className="block text-center py-2 text-sm font-medium text-white bg-blue-600 rounded-md"
            >
              도입 문의
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
