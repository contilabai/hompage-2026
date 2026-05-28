import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "엣지 AI CCTV | ConTILab - CCTV 교체없이 현장에서 바로 사용 가능한 AI",
  description: "기존 CCTV를 그대로 활용하면서 안전모 미착용, 쓰러짐, 위험구역 침입 등 AI 감지 기능을 즉시 도입하세요.",
};

const products = [
  {
    name: "엣지 박스",
    nameEn: "Edge Box",
    badge: "가장 경제적",
    badgeColor: "bg-green-100 text-green-700",
    desc: "기존 CCTV에 연결하는 AI 처리 장치. CCTV 교체 없이 AI 기능을 즉시 추가합니다.",
    features: ["기존 CCTV 100% 호환", "별도 서버 불필요", "30분 이내 설치 완료", "최대 4채널 동시 처리"],
    iconBg: "bg-green-600",
  },
  {
    name: "엣지 AI CCTV 고정형",
    nameEn: "Fixed Type",
    badge: "가장 인기",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "AI 기능이 내장된 고정형 IP CCTV. 주요 구역 상시 감시에 최적화된 솔루션입니다.",
    features: ["AI 엔진 내장", "야간·역광 지원", "4MP 고화질 촬영", "방진·방수 IP67"],
    iconBg: "bg-blue-600",
    image: "/images/fixed1.jpg",
  },
  {
    name: "엣지 AI CCTV 이동형",
    nameEn: "Mobile Type",
    badge: "유연한 설치",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: "배터리 내장 이동형 AI CCTV. 공정 진행에 따라 자유롭게 위치를 변경하세요.",
    features: ["배터리 72시간 구동", "무선 데이터 전송", "충격 내구성 인증", "빠른 이동 설치"],
    iconBg: "bg-orange-500",
    image: "/images/moving1.png",
  },
];

const detections = [
  {
    emoji: "🪖",
    title: "안전모 미착용 감지",
    desc: "헬멧 착용 여부를 실시간으로 감지하고 미착용 시 즉시 알림을 발송합니다.",
    accuracy: "99%",
  },
  {
    emoji: "🦺",
    title: "안전벨트 미착용 감지",
    desc: "고소작업 안전벨트 미착용 여부를 자동으로 확인합니다.",
    accuracy: "97%",
  },
  {
    emoji: "🚨",
    title: "쓰러짐·낙상 감지",
    desc: "작업자 쓰러짐 및 낙상을 즉시 감지하여 긴급 구조 알림을 발송합니다.",
    accuracy: "96%",
  },
  {
    emoji: "⛔",
    title: "위험구역 침입 감지",
    desc: "사전에 설정된 위험구역 무단 침입을 즉시 감지하고 차단 알림을 보냅니다.",
    accuracy: "99%",
  },
  {
    emoji: "🔥",
    title: "화재·연기 감지",
    desc: "초기 화재 및 연기 발생을 자동으로 감지하여 빠른 대응을 지원합니다.",
    accuracy: "98%",
  },
  {
    emoji: "🚬",
    title: "흡연 감지",
    desc: "현장 내 흡연 행위를 자동으로 감지하여 화재 위험을 사전에 예방합니다.",
    accuracy: "95%",
  },
  {
    emoji: "🌙",
    title: "야간 저조도 감지",
    desc: "야간 및 어두운 환경에서도 정확한 AI 감지 성능을 유지합니다.",
    accuracy: "95%",
  },
  {
    emoji: "👷",
    title: "작업자 밀집도 분석",
    desc: "특정 구역의 인원 밀집 상황을 실시간으로 모니터링합니다.",
    accuracy: "98%",
  },
];

const steps = [
  {
    step: "01",
    title: "엣지 박스 연결",
    desc: "기존 CCTV 또는 신규 엣지 AI CCTV를 설치하고 엣지 박스를 연결합니다. 전문 기사가 현장에서 직접 설치합니다.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    step: "02",
    title: "AI 모델 설정",
    desc: "현장 특성에 맞는 AI 감지 항목을 설정합니다. 위험구역 설정, 감지 민감도 조절 등을 앱에서 간편하게 조작합니다.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    step: "03",
    title: "실시간 모니터링",
    desc: "감지 이벤트는 관리자 앱과 웹 대시보드로 즉시 전달됩니다. 영상 증거와 함께 정확한 상황 파악이 가능합니다.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const stats = [
  { value: "99%", label: "안전모 감지 정확도" },
  { value: "30분", label: "평균 현장 설치 시간" },
  { value: "0원", label: "기존 CCTV 교체 비용" },
  { value: "24/7", label: "무중단 AI 모니터링" },
];

export default function AiCctvPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[64px] bg-gradient-to-br from-[#06111f] via-[#0f2557] to-[#1e3a8a] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">엣지 AI CCTV</span>
                  <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">Edge Computing</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  CCTV 교체없이<br />
                  <span className="text-blue-300">현장에서 바로</span><br />
                  사용 가능한 AI
                </h1>
                <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-md">
                  기존 CCTV 인프라를 그대로 유지하면서 안전모 미착용, 쓰러짐 감지, 위험구역 침입 등 8가지 AI 안전 기능을 즉시 도입하세요.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#inquiry"
                    className="px-6 py-3 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
                  >
                    무료 상담 신청
                  </Link>
                  <Link
                    href="#products"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    제품 라인업 보기 ↓
                  </Link>
                </div>
              </div>

              {/* Right: AI Monitor Mockup */}
              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-blue-500/30 p-4 shadow-2xl shadow-blue-900/50">
                  {/* Window bar */}
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">ConTILab AI Monitor · CAM_01 · 현장A동</span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      LIVE
                    </span>
                  </div>

                  {/* Camera feed */}
                  <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-3">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-700/30 to-gray-900/60" />

                    {/* Simulated scene */}
                    <div className="absolute inset-0 flex items-end justify-around px-8 pb-6">
                      {/* Worker 1 - NO HELMET → RED box */}
                      <div className="relative flex flex-col items-center">
                        <div className="absolute -inset-x-4 -inset-y-2 border-2 border-red-500 rounded" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                          ⚠ 안전모 미착용
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-400 mb-0.5" />
                        <div className="w-7 h-9 bg-blue-700 rounded-sm" />
                        <div className="flex gap-1 mt-0.5">
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                        </div>
                      </div>

                      {/* Worker 2 - SAFE → GREEN box */}
                      <div className="relative flex flex-col items-center">
                        <div className="absolute -inset-x-4 -inset-y-2 border-2 border-green-400 rounded" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                          ✓ 안전
                        </div>
                        <div className="w-7 h-4 bg-yellow-400 rounded-t-full" />
                        <div className="w-6 h-6 rounded-full bg-gray-400 mb-0.5" />
                        <div className="w-7 h-9 bg-orange-600 rounded-sm" />
                        <div className="flex gap-1 mt-0.5">
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                        </div>
                      </div>

                      {/* Worker 3 - SAFE → GREEN box */}
                      <div className="relative flex flex-col items-center">
                        <div className="absolute -inset-x-4 -inset-y-2 border-2 border-green-400 rounded" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                          ✓ 안전
                        </div>
                        <div className="w-7 h-4 bg-white rounded-t-full" />
                        <div className="w-6 h-6 rounded-full bg-gray-400 mb-0.5" />
                        <div className="w-7 h-9 bg-gray-600 rounded-sm" />
                        <div className="flex gap-1 mt-0.5">
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                          <div className="w-2.5 h-6 bg-gray-500 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* HUD overlay */}
                    <div className="absolute top-2 left-2 text-[10px] text-blue-300 font-mono bg-black/40 px-2 py-1 rounded">
                      CAM_01 · 2026-05-28 14:32:10
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-blue-900/70 rounded px-2 py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-[10px] text-blue-300 font-mono">AI 분석 중</span>
                    </div>
                    <div className="absolute bottom-2 right-2 text-[10px] text-gray-500 font-mono">
                      감지: 3명 / 이상: 1건
                    </div>
                  </div>

                  {/* Alert list */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-red-900/40 border border-red-500/40 rounded-lg px-3 py-2">
                      <span className="text-red-400 text-xs">⚠</span>
                      <span className="text-[12px] text-red-300 font-medium">안전모 미착용 감지 — 현장A동 구역B</span>
                      <span className="ml-auto text-[10px] text-gray-500 flex-shrink-0">방금</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                      <span className="text-green-400 text-xs">✓</span>
                      <span className="text-[12px] text-gray-400">위험구역 침입 없음 — 전체 구역</span>
                      <span className="ml-auto text-[10px] text-gray-500 flex-shrink-0">1분 전</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                      <span className="text-green-400 text-xs">✓</span>
                      <span className="text-[12px] text-gray-400">화재·연기 이상 없음 — CAM 전체</span>
                      <span className="ml-auto text-[10px] text-gray-500 flex-shrink-0">3분 전</span>
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
              {stats.map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-blue-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product lineup */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">제품 라인업</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">현장에 맞는 제품을 선택하세요</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                소규모 현장부터 대형 건설 현장까지, 다양한 환경에 최적화된 세 가지 제품 라인업을 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.name} className="rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all overflow-hidden group">
                  {/* Product image area */}
                  {"image" in product && product.image ? (
                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                      <Image
                        src={product.image as string}
                        alt={product.name}
                        fill
                        className={`group-hover:scale-105 transition-transform duration-300 ${
                          (product.image as string).endsWith(".png")
                            ? "object-contain p-6"
                            : "object-cover"
                        }`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold ${product.badgeColor} rounded-full z-10 shadow-sm`}>
                        {product.badge}
                      </span>
                    </div>
                  ) : (
                    <div className={`${product.iconBg} aspect-[4/3] flex flex-col items-center justify-center gap-3 relative`}>
                      <span className="text-5xl">📷</span>
                      <p className="text-white/70 text-sm font-medium">{product.nameEn}</p>
                      <span className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold ${product.badgeColor} rounded-full`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-lg font-black text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{product.desc}</p>
                    <ul className="space-y-2.5">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#inquiry"
                      className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-xl transition-colors"
                    >
                      이 제품 문의하기
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">도입 절차</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">3단계로 완료되는 AI 도입</h2>
              <p className="text-gray-500">복잡한 IT 인프라 없이, 30분 이내에 현장에 AI가 작동합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-blue-200" />

              {steps.map((step, i) => (
                <div key={step.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 relative z-10">
                      <span className="text-2xl font-black text-white">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Detection features */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">AI 감지 기능</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">8가지 AI 안전 감지 기능</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                건설현장에 꼭 필요한 안전 감지 기능만 선별하여 제공합니다. 각 기능은 독립적으로 ON/OFF 설정이 가능합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detections.map((d) => (
                <div key={d.title} className="p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{d.emoji}</span>
                    <span className="px-2 py-0.5 text-xs font-bold text-blue-700 bg-blue-50 rounded-full">
                      정확도 {d.accuracy}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">{d.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="inquiry" className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-black mb-4">지금 바로 현장에 AI를 도입하세요</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              전문가가 현장을 직접 방문하여 최적의 솔루션을 제안합니다.<br />
              도입 비용, 설치 기간, 예상 효과를 무료로 상담받으세요.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#"
                className="px-8 py-3.5 text-sm font-bold text-blue-800 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
              >
                무료 현장 방문 상담
              </Link>
              <Link
                href="tel:1666-1967"
                className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
              >
                📞 1666-1967 전화 문의
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
