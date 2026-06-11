"use client";

import Image from "next/image";
import Link from "next/link";

const getProductLinks = (language: "ko" | "en") => [
  { label: "iSafePlatform Core", href: "/platform" },
  { label: "iSafePlan", href: "/isafe-planner" },
  { label: "iSafeMeta", href: "/isafe-meta" },
  { label: "iSafeGuard", href: "/isafe-guard" },
  { label: "iSafeIncentive", href: "/isafe-chain" },
];

const getCompanyLinks = (language: "ko" | "en") => [
  { label: language === "ko" ? "회사소개" : "About", href: "/about" },
  { label: "R&D History", href: "/about?tab=research" },
  { label: language === "ko" ? "파트너 및 고객사" : "Partners & Clients", href: "/about#partners" },
  { label: language === "ko" ? "특허 및 인증" : "Patents & Certifications", href: "/about?tab=research" },
  { label: language === "ko" ? "채용" : "Careers", href: "#jobs" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Naver Blog",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
      </svg>
    ),
  },
  {
    label: "KakaoTalk",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3C6.477 3 2 6.477 2 10.87c0 2.79 1.77 5.24 4.44 6.68l-1.1 4.04 4.64-3.07C10.62 18.84 11.3 18.9 12 18.9c5.523 0 10-3.477 10-7.87C22 6.477 17.523 3 12 3z" />
      </svg>
    ),
  },
];

interface FooterProps {
  language?: "ko" | "en";
}

export default function Footer({ language = "ko" }: FooterProps) {
  const productLinks = getProductLinks(language);
  const companyLinks = getCompanyLinks(language);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* 제품 */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">
              {language === "ko" ? "제품" : "Products"}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">
              {language === "ko" ? "회사" : "Company"}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">
              {language === "ko" ? "문의" : "Contact"}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  {language === "ko" ? "이메일" : "Email"}
                </p>
                <a
                  href="mailto:contilab@contilab.co.kr"
                  className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  contilab@contilab.co.kr
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  {language === "ko" ? "주소" : "Address"}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {language === "ko" ? (
                    <>
                      서울특별시 동작구 흑석로 84<br />
                      중앙대학교 208관 201호
                    </>
                  ) : (
                    <>
                      Rm 201, Building 208, Chung-Ang University<br />
                      84 Heukseok-ro, Dongjak-gu, Seoul
                    </>
                  )}
                </p>
              </div>
              <div>
                <Link
                  href="/news"
                  className="text-sm text-gray-400 hover:text-white transition-colors block"
                >
                  {language === "ko" ? "소식·공지" : "News & Updates"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/logo-full.png"
                alt="ConTILab"
                width={130}
                height={34}
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              {language === "ko" ? (
                <>
                  ConTILab · 중앙대학교 건설 및 산업기술 연구실<br />
                  서울특별시 동작구 흑석로 84 중앙대학교 208관 201호
                </>
              ) : (
                <>
                  ConTILab · Construction & Industry Technology Lab, Chung-Ang University<br />
                  Rm 201, Building 208, 84 Heukseok-ro, Dongjak-gu, Seoul
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <Link href="#terms" className="hover:text-white transition-colors">
                {language === "ko" ? "이용약관" : "Terms"}
              </Link>
              <Link href="#privacy" className="hover:text-white transition-colors">
                {language === "ko" ? "개인정보처리방침" : "Privacy"}
              </Link>
              <Link href="/about" className="hover:text-white transition-colors">
                {language === "ko" ? "회사소개" : "About"}
              </Link>
              <a href="mailto:contilab@contilab.co.kr" className="hover:text-white transition-colors">
                {language === "ko" ? "파트너십 문의" : "Partnership Inquiry"}
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-6">
          Copyright © {new Date().getFullYear()} ConTILab Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
