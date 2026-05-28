export default function AppDownload() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">모바일 앱</p>
            <h2 className="text-3xl font-black text-white mb-4">
              현장에서 바로 사용하는<br />
              모바일 앱
            </h2>
            <p className="text-blue-100 text-base mb-8 max-w-md leading-relaxed">
              iOS와 Android 모두 지원합니다. TBM 작성, 안전점검, 현장일보까지 스마트폰 하나로 현장의 모든 업무를 처리하세요.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Google Play */}
              <a
                href="#google-play"
                className="flex items-center gap-3 px-5 py-3 bg-black/30 hover:bg-black/50 border border-white/20 rounded-xl transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                  <path d="M3.18 23.76c.3.17.63.24.97.24.42 0 .84-.12 1.2-.36l10.32-5.96-2.87-2.87-9.62 8.95zm-1.8-21.04C1.14 3.1 1 3.58 1 4.07v15.86c0 .5.14.97.38 1.36l.08.08 8.88-8.88v-.2L1.46 2.64l-.08.08zm18.09 9.12l-2.5-1.44-3.2 3.2 3.2 3.2 2.52-1.45c.72-.41.72-1.1 0-1.51zm-17.25 9.2l9.43-9.43-3.1-3.1-9.18 8.56 2.85 3.97z" />
                </svg>
                <div>
                  <p className="text-white/60 text-[10px]">다운로드</p>
                  <p className="text-white text-sm font-semibold">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#app-store"
                className="flex items-center gap-3 px-5 py-3 bg-black/30 hover:bg-black/50 border border-white/20 rounded-xl transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-white/60 text-[10px]">다운로드</p>
                  <p className="text-white text-sm font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[240px] h-[480px] bg-black/30 border-2 border-white/20 rounded-[40px] flex flex-col overflow-hidden shadow-2xl">
                <div className="h-6 bg-black/40 flex justify-center items-center mt-2">
                  <div className="w-20 h-1.5 bg-white/30 rounded-full" />
                </div>
                <div className="flex-1 bg-gradient-to-b from-blue-600/50 to-blue-800/50 flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">ConTILab</p>
                  <p className="text-white/50 text-xs text-center">현장 안전관리 앱</p>
                  <div className="w-full mt-2 space-y-2">
                    {["TBM 작성", "안전점검", "현장일보", "영상기록"].map((item) => (
                      <div key={item} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-white/80 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
