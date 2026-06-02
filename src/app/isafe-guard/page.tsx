import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ISafeGuardTabs from "@/components/ISafeGuardTabs";

export const metadata: Metadata = {
  title: "ISafeGuard | ConTILab - 실시간 AI 영상 관제 · 기본 모델 무료 제공",
  description: "AI가 100채널 이상을 24시간 동시에 관제합니다. 기본 AI 모델 5종 무료 제공. 온디바이스 카메라·AI 엣지 박스·멀티채널 NPU 서버 3종 하드웨어 구성.",
};

const steps = [
  { step: "01", title: "하드웨어 설치 및 카메라 연결", desc: "현장 규모에 맞는 장비를 선택합니다. 카메라 교체만으로 되는 온디바이스 AI 카메라, 기존 CCTV에 연결하는 AI 엣지 박스, 100채널 이상을 위한 NPU PC 서버 중 선택. 전문 엔지니어가 직접 설치합니다." },
  { step: "02", title: "AI 모델 선택 및 위험구역 설정", desc: "기본 AI 모델 5종은 무료로 즉시 활성화됩니다. 특수 공정이 있다면 Pro·Custom 패키지를 추가하세요. 마우스로 위험구역을 그리면 그 순간부터 AI가 감지합니다." },
  { step: "03", title: "설치 당일부터 AI 관제 시작", desc: "설정 완료 즉시 AI 관제가 시작됩니다. 위험 감지 시 즉시 알림, 매일 VLM 보고서가 자동으로 발행됩니다." },
];

export default function ISafeGuardPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#060f1a] via-[#0c2340] to-[#1d6fa4] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">ISafeGuard</span>
                  <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">Monitor Module</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  당신이 자리를 비웠을 때도<br />
                  <span className="text-blue-300">AI는 현장에 있습니다</span>
                </h1>
                <p className="text-blue-100 text-base leading-relaxed mb-4 max-w-md">
                  안전 관리자가 100대 카메라를 24시간 동안 놓치지 않고 볼 수는 없습니다. 집중력이 흐트러지는 순간 사고는 일어납니다.
                </p>
                <p className="text-white font-semibold text-base mb-3 max-w-md">
                  ISafeGuard AI는 지치지 않고, 졸지 않으며, 매 프레임을 분석합니다.
                </p>
                <p className="text-green-300 font-bold text-sm mb-8 max-w-md">
                  ✓ 기본 AI 모델 5종 · ISafePlatform Core · 관제 뷰어 — 조건 없이 무료 제공
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-3 text-sm font-bold text-green-900 bg-green-400 hover:bg-green-300 rounded-xl transition-colors shadow-lg"
                  >
                    무료 방문 설치 신청
                  </Link>
                  <Link
                    href="#tabs"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    솔루션·모델·디바이스 보기 ↓
                  </Link>
                </div>
              </div>

              {/* Right: AI Monitor Mockup */}
              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-blue-500/30 p-4 shadow-2xl shadow-blue-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">ISafeGuard · 100CH+ 관제 중</span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      LIVE
                    </span>
                  </div>
                  <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-700/30 to-gray-900/60" />
                    <div className="absolute inset-0 flex items-end justify-around px-8 pb-6">
                      <div className="relative flex flex-col items-center">
                        <div className="absolute -inset-x-4 -inset-y-2 border-2 border-red-500 rounded" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">⚠ 안전모 미착용</div>
                        <div className="w-6 h-6 rounded-full bg-gray-400 mb-0.5" />
                        <div className="w-7 h-9 bg-blue-700 rounded-sm" />
                        <div className="flex gap-1 mt-0.5">
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center">
                        <div className="absolute -inset-x-4 -inset-y-2 border-2 border-green-400 rounded" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">✓ 안전</div>
                        <div className="w-7 h-4 bg-yellow-400 rounded-t-full" />
                        <div className="w-6 h-6 rounded-full bg-gray-400 mb-0.5" />
                        <div className="w-7 h-9 bg-orange-600 rounded-sm" />
                        <div className="flex gap-1 mt-0.5">
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                        </div>
                      </div>
                      <div className="relative flex flex-col items-center">
                        <div className="absolute -inset-x-4 -inset-y-2 border-2 border-green-400 rounded" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">✓ 안전</div>
                        <div className="w-7 h-4 bg-white rounded-t-full" />
                        <div className="w-6 h-6 rounded-full bg-gray-400 mb-0.5" />
                        <div className="w-7 h-9 bg-gray-600 rounded-sm" />
                        <div className="flex gap-1 mt-0.5">
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 text-[10px] text-blue-300 font-mono bg-black/40 px-2 py-1 rounded">CAM_08 · A구역 외부비계</div>
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-blue-900/70 rounded px-2 py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-[10px] text-blue-300 font-mono">AI 분석 중</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-red-900/40 border border-red-500/40 rounded-lg px-3 py-2">
                      <span className="text-red-400 text-xs">⚠</span>
                      <span className="text-[12px] text-red-300 font-medium">안전모 미착용 — A구역 외부비계 CAM_08</span>
                      <span className="ml-auto text-[10px] text-gray-500 flex-shrink-0">방금</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                      <span className="text-green-400 text-xs">✓</span>
                      <span className="text-[12px] text-gray-400">위험구역 침입 없음 — 전체 100CH+</span>
                      <span className="ml-auto text-[10px] text-gray-500 flex-shrink-0">2분 전</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-blue-600 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-500">
              {[
                { value: "100CH+", label: "동시 AI 관제" },
                { value: "24/7", label: "무중단 자동 운영" },
                { value: "0분", label: "VLM 보고서 작성 시간" },
                { value: "기본 무료", label: "필수 AI 모델 5종 제공" },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-blue-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Tab Section */}
        <div id="tabs">
          <ISafeGuardTabs />
        </div>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">도입 절차</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">설치 당일부터 AI 관제가 시작됩니다</h2>
              <p className="text-gray-500">복잡한 IT 설정 없이, 전문 엔지니어가 현장에서 직접 구성합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-blue-200" />
              {steps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0c2340] to-[#1d6fa4] flex items-center justify-center mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#0c2340] to-[#1d6fa4] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">지금 현장에서 일어나는 일,<br />당신은 알고 계십니까?</h2>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  매일 현장에서 수십 건의 아차사고가 기록 없이 지나가고 있습니다.<br />
                  ISafeGuard가 그 모든 순간을 관제하고, 반복을 막습니다.
                </p>
                <p className="text-green-300 text-sm font-semibold mb-8">
                  기본 AI 모델 5종과 ISafePlatform Core는 무료입니다. 지금 바로 시작하세요.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 text-sm font-bold text-green-900 bg-green-400 hover:bg-green-300 rounded-xl transition-colors shadow-lg"
                  >
                    무료 방문 설치 신청
                  </Link>
                  <Link
                    href="/platform"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    Platform Core 알아보기
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block bg-white/5 rounded-2xl border-2 border-dashed border-white/20 aspect-[4/3] flex flex-col items-center justify-center p-8 gap-3">
                <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white/60 font-semibold text-sm text-center">ISafeGuard 도입 현장 실사 사진</p>
                <p className="text-white/40 text-xs text-center max-w-xs">실제 건설현장에 설치된 ISafeGuard 엣지 장비 및 관제 화면</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
