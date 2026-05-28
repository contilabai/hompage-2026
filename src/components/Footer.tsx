import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { label: "동영상 기록관리", href: "#video" },
  { label: "엣지 AI CCTV", href: "#ai-cctv" },
  { label: "스마트 안전장비", href: "#smart-safety" },
  { label: "중대재해 예방", href: "#accident-prevention" },
  { label: "공정관리 시스템", href: "#process-management" },
];

const featureLinks = [
  { label: "위험성 평가", href: "#" },
  { label: "모바일 TBM", href: "#" },
  { label: "AI 안전감지", href: "#" },
  { label: "영상 편집 서비스", href: "#" },
  { label: "원격 감리", href: "#" },
  { label: "관계사 협업 포털", href: "#" },
];

const supportLinks = [
  { label: "전문가 컨설팅", href: "#consulting" },
  { label: "도입 문의", href: "#inquiry" },
  { label: "소식·공지", href: "#news" },
  { label: "블로그", href: "#blog" },
  { label: "고객센터", href: "#support" },
];

const companyLinks = [
  { label: "회사소개", href: "#company" },
  { label: "채용", href: "#jobs" },
  { label: "파트너십", href: "#partner" },
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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Products */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">제품</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">기능</h4>
            <ul className="space-y-2.5">
              {featureLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">지원</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">회사</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">문의</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-0.5">대표전화</p>
                <a href="tel:1666-1967" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                  1666-1967
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">이메일</p>
                <a href="mailto:info@contilab.kr" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@contilab.kr
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">운영시간</p>
                <p className="text-sm text-gray-400">평일 09:00 ~ 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/logo-full.png"
                alt="ConTILab"
                width={140}
                height={36}
                className="object-contain"
              />
              <span className="px-2 py-0.5 text-[10px] font-bold text-green-400 border border-green-600 rounded">
                ISO/IEC 27001
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-lg">
              (주)콘티랩 · 대표이사: 홍길동<br />
              서울특별시 강남구 테헤란로 123, OO빌딩 7층
            </p>
          </div>

          {/* Social + Legal */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <Link href="#terms" className="hover:text-white transition-colors">이용약관</Link>
              <Link href="#privacy" className="hover:text-white transition-colors font-semibold">개인정보처리방침</Link>
              <Link href="#company" className="hover:text-white transition-colors">회사소개</Link>
              <Link href="#partner" className="hover:text-white transition-colors">하우스플래너</Link>
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
