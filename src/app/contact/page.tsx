import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "문의하기 | ConTILab",
  description: "ConTILab 도입 상담, 기술 협력, 파트너십 문의. 서울시 동작구 중앙대학교 내 오피스에서 함께합니다.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "주소",
    lines: ["서울특별시 동작구 흑석로 84", "중앙대학교 208관 201호 (우편번호 06974)"],
    href: undefined,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "전화 / 팩스",
    lines: ["Tel. 02-827-0184", "FAX. 02-812-4150"],
    href: "tel:02-827-0184",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "이메일",
    lines: ["contilab@contilab.co.kr"],
    href: "mailto:contilab@contilab.co.kr",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-20 lg:py-28">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-[40px] lg:text-[56px] font-black leading-tight mb-5">문의하기</h1>
            <p className="text-blue-200 text-base max-w-xl leading-relaxed">
              도입 상담, 기술 협력, 파트너십 제안 등 어떤 문의든 환영합니다.<br />
              빠르게 검토하여 회신드리겠습니다.
            </p>
          </div>
        </section>

        {/* Contact info + Map */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: contact cards */}
              <div>
                <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Get in Touch</p>
                <h2 className="text-[28px] font-black text-gray-900 mb-3">ConTI Lab에 연락하세요</h2>
                <div className="w-12 h-0.5 bg-amber-400 mb-8" />
                <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
                  궁금한 점이 있거나 협력을 제안하고 싶다면 아래 연락처로 연락해 주세요.
                  전문 담당자가 신속하게 답변드립니다.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-colors">
                      <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">{item.label}</p>
                        {item.lines.map((line) =>
                          item.href ? (
                            <a
                              key={line}
                              href={item.href}
                              className="block text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-[15px] font-semibold text-gray-800">{line}</p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* SNS */}
                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/conti-lab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://youtube.com/@contilab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:border-red-300 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube
                  </a>
                </div>
              </div>

              {/* Right: Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] lg:aspect-auto lg:h-[520px]">
                <iframe
                  src="https://maps.google.com/maps?q=37.510893758013076,126.92427951593936&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ConTILab 위치"
                />
              </div>

            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg font-black text-gray-900 mb-1">이메일로 바로 문의하기</p>
              <p className="text-sm text-gray-500">담당자가 영업일 기준 1~2일 내 회신드립니다.</p>
            </div>
            <a
              href="mailto:contilab@contilab.co.kr"
              className="flex-shrink-0 px-7 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
            >
              contilab@contilab.co.kr
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
