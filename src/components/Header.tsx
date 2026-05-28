"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "동영상 기록관리", href: "#video" },
  { label: "엣지 AI CCTV", href: "/ai-cctv", highlight: true },
  { label: "스마트 안전장비", href: "/smart-safety", highlight: true },
  { label: "중대재해 예방", href: "#accident-prevention" },
  { label: "공정관리 시스템", href: "#process-management" },
  { label: "전문가 컨설팅", href: "#consulting" },
  { label: "소식·공지", href: "#news" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <nav className="hidden xl:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[13.5px] font-medium whitespace-nowrap transition-colors ${"highlight" in item && item.highlight ? "text-blue-600 font-semibold hover:text-blue-700" : "text-gray-600 hover:text-blue-600"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            <Link
              href="#login"
              className="px-4 py-1.5 text-[13.5px] font-medium text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md transition-colors"
            >
              로그인
            </Link>
            <Link
              href="#signup"
              className="px-4 py-1.5 text-[13.5px] font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              회원가입
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-blue-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 px-4 py-3">
            <Link
              href="#login"
              className="flex-1 text-center py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md"
            >
              로그인
            </Link>
            <Link
              href="#signup"
              className="flex-1 text-center py-2 text-sm font-medium text-white bg-blue-600 rounded-md"
            >
              회원가입
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
