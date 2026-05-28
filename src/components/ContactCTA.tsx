import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Download resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="flex items-center gap-5 p-6 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-400 mb-1">자료 다운로드</p>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">회사 소개서</h3>
              <p className="text-sm text-gray-500">ConTILab 전체 솔루션 소개 및 도입 사례를 담은 브로셔</p>
            </div>
            <Link
              href="#download-brochure"
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              다운로드
            </Link>
          </div>

          <div className="flex items-center gap-5 p-6 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-400 mb-1">자료 다운로드</p>
              <h3 className="text-[15px] font-bold text-gray-900 mb-1">영상기록 장비 카탈로그</h3>
              <p className="text-sm text-gray-500">드론, 카메라, 영상 장비 전체 라인업 카탈로그</p>
            </div>
            <Link
              href="#download-catalog"
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              다운로드
            </Link>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 lg:p-14 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-4">지금 시작하세요</p>
            <h2 className="text-3xl font-black mb-4">
              전문가와 무료로 상담하세요
            </h2>
            <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
              현장 규모와 요구사항에 맞는 최적의 솔루션을 제안해드립니다.<br />
              도입 비용, 기간, 효과 등을 전문가가 직접 안내합니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#inquiry"
                className="px-8 py-3.5 text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
              >
                무료 상담 신청
              </Link>
              <Link
                href="tel:1666-1967"
                className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
              >
                📞 1666-1967
              </Link>
            </div>
            <p className="text-blue-200 text-xs mt-5">
              평일 09:00 ~ 18:00 · 담당자 배정까지 평균 1시간 이내
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
