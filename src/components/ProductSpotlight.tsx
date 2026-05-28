import Link from "next/link";

export default function ProductSpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">핵심 제품</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            현장 안전을 바꾸는 두 가지 솔루션
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            엣지 AI CCTV와 스마트 안전장비. 두 솔루션의 시너지로 현장 사고를 획기적으로 줄이세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI CCTV Card */}
          <Link
            href="/ai-cctv"
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f2557] to-[#1e3a8a] p-8 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 flex flex-col min-h-[480px]"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative flex-1 flex flex-col">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">엣지 AI CCTV</span>
                <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">3종 제품</span>
              </div>

              {/* Headline */}
              <h3 className="text-[28px] font-black text-white leading-tight mb-4">
                CCTV 교체없이<br />
                <span className="text-blue-300">현장에서 바로</span><br />
                사용 가능한 AI
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                기존 CCTV에 엣지 박스를 연결하면 끝. 안전모 미착용, 위험구역 침입, 쓰러짐 감지 등 8가지 AI 기능을 30분 안에 도입합니다.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["안전모 미착용 감지", "쓰러짐 감지", "위험구역 침입", "화재·연기 감지", "흡연 감지"].map((f) => (
                  <span key={f} className="px-2.5 py-1 text-xs font-medium bg-white/10 text-blue-100 rounded-lg">
                    {f}
                  </span>
                ))}
              </div>

              {/* Mini monitor mockup */}
              <div className="bg-gray-900/70 rounded-xl border border-blue-400/20 p-3 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">CAM_01 · AI 분석 중</span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    LIVE
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 bg-red-900/50 border border-red-500/30 rounded-lg px-2.5 py-1.5">
                    <span className="text-red-400 text-[10px]">⚠</span>
                    <span className="text-[11px] text-red-300">안전모 미착용 — A구역 1명</span>
                    <span className="ml-auto text-[9px] text-gray-500">방금</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-2.5 py-1.5">
                    <span className="text-green-400 text-[10px]">✓</span>
                    <span className="text-[11px] text-gray-400">위험구역 침입 없음 — 전체 정상</span>
                    <span className="ml-auto text-[9px] text-gray-500">1분 전</span>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { v: "99%", l: "감지 정확도" },
                  { v: "30분", l: "설치 시간" },
                  { v: "8종", l: "AI 감지 기능" },
                ].map((s) => (
                  <div key={s.l} className="text-center bg-white/5 rounded-xl py-3">
                    <p className="text-xl font-black text-white">{s.v}</p>
                    <p className="text-[11px] text-blue-200">{s.l}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 mt-auto text-sm font-bold text-white group-hover:gap-4 transition-all">
                엣지 AI CCTV 상세보기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Smart Safety Card */}
          <Link
            href="/smart-safety"
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#7c2d12] to-[#ea580c] p-8 hover:shadow-2xl hover:shadow-orange-900/30 transition-all duration-300 flex flex-col min-h-[480px]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative flex-1 flex flex-col">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">스마트 안전장비</span>
                <span className="px-3 py-1 bg-white/10 text-orange-100 text-xs rounded-full">15종 제품</span>
              </div>

              {/* Headline */}
              <h3 className="text-[28px] font-black text-white leading-tight mb-4">
                작업자 중심의<br />
                <span className="text-orange-200">기록 확보</span>와<br />
                안전관리비 계상
              </h3>
              <p className="text-orange-100 text-sm leading-relaxed mb-6">
                스마트 안전모, 밴드, 안전고리부터 CCTV, 가스측정기, 중장비 GPS까지. 현장 전체를 커버하는 15종 스마트 안전장비.
              </p>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["스마트 착용장비", "현장 측정장비", "스마트 CCTV", "웨어러블 카메라"].map((cat) => (
                  <span key={cat} className="px-2.5 py-1 text-xs font-medium bg-white/10 text-orange-100 rounded-lg">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Equipment grid mini mockup */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  { emoji: "🪖", name: "스마트 안전모", status: "정상", ok: true },
                  { emoji: "⌚", name: "스마트 밴드", status: "정상", ok: true },
                  { emoji: "🌡️", name: "체감온도계", status: "체감 34°C", ok: false },
                  { emoji: "📷", name: "지능형 CCTV", status: "녹화중", ok: true },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                    <span className="text-lg">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium text-white truncate">{item.name}</p>
                      <p className={`text-[10px] ${item.ok ? "text-green-300" : "text-yellow-300"}`}>{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key benefit */}
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-6 flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="text-sm font-black text-white">안전관리비 100% 계상</p>
                  <p className="text-xs text-orange-100">정부 인정 스마트 장비 — 비용 전액 처리 가능</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { v: "15종", l: "전체 장비" },
                  { v: "4종", l: "CCTV 라인업" },
                  { v: "100%", l: "안전관리비" },
                ].map((s) => (
                  <div key={s.l} className="text-center bg-white/5 rounded-xl py-3">
                    <p className="text-xl font-black text-white">{s.v}</p>
                    <p className="text-[11px] text-orange-200">{s.l}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 mt-auto text-sm font-bold text-white group-hover:gap-4 transition-all">
                스마트 안전장비 상세보기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
