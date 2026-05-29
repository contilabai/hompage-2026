import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "ISafePlanner | ConTILab - BIM 기반 동적 공정 및 안전 예측 스케줄러",
  description: "도면 하나로 3D 위험 지도를 자동 생성합니다. 근로자가 투입되기 전에 어떤 위험이 기다리는지 이미 알 수 있습니다.",
};

const plannerFeatures = [
  {
    id: "3d-convert",
    reverse: false,
    tag: "도면 자동 3D 전환",
    tagColor: "bg-green-100 text-green-700",
    headline: "2D 도면을 들고\n현장을 상상하는 시대는\n끝났습니다",
    subhead: "도면을 올리면, AI가 3D 공정 지도를 만들어 드립니다",
    desc: "dxf 도면이나 WBS 문서를 업로드하면 업계 표준 IFC 3D 모델이 자동으로 생성됩니다. BIM 전문가 없이도 3D 현장 분석이 가능합니다. 공정 스케줄에 맞춰 구조물이 실시간으로 변하는 모습을 시각화합니다.",
    bullets: [
      "dxf 도면·WBS 문서 업로드만으로 3D 변환",
      "업계 표준 IFC 포맷 자동 출력",
      "공정 단계별 구조물 메쉬 실시간 분할 시각화",
      "ISafeGuard·ISafeMeta와 동일 3D 환경 공유",
    ],
    placeholder: {
      title: "2D 도면 → 3D IFC 모델 자동 변환 화면",
      description: "dxf 도면 업로드 후 3D 모델로 자동 변환된 결과를 보여주는 ISafePlanner 인터페이스",
    },
    ctaBg: "bg-green-700 hover:bg-green-800",
    bgClass: "bg-white",
  },
  {
    id: "risk-assessment",
    reverse: true,
    tag: "동적 위험도 평가",
    tagColor: "bg-yellow-100 text-yellow-700",
    headline: "\"이번 주 비 예보\"\n현장 위험도가\n얼마나 올라가는지 압니까?",
    subhead: "기상 데이터부터 공정 스케줄까지, 위험도를 숫자로 보여줍니다",
    desc: "자체 내장된 위험 요소 데이터베이스와 기상청 API를 실시간으로 연동합니다. '외부비계 공정 + 강풍 예보 = 위험도 HIGH'처럼 구체적이고 즉각적인 위험 지수를 제공합니다. 관리자의 직감이 아닌 데이터로 판단합니다.",
    bullets: [
      "기상청 날씨 예측 API 실시간 연동",
      "공정별·날짜별 위험 지수 자동 산출",
      "위험 임계치 초과 시 사전 경보",
      "위험 요소 데이터베이스 지속 업데이트",
    ],
    placeholder: {
      title: "공정별 동적 위험도 평가 대시보드",
      description: "기상 데이터와 공정 스케줄을 결합한 위험 지수 시각화 화면",
    },
    ctaBg: "bg-yellow-600 hover:bg-yellow-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "camera-placement",
    reverse: false,
    tag: "AI 카메라 배치 추천",
    tagColor: "bg-teal-100 text-teal-700",
    headline: "어디에 카메라를\n놓아야 사각지대가\n없는지 아십니까?",
    subhead: "AI가 현재 공정의 사각지대를 분석하고 최적 위치를 알려줍니다",
    desc: "3D 공간 분석으로 현재 공정에서 카메라가 닿지 않는 사각지대를 자동으로 도출합니다. 이동형 카메라의 최적 배치 위치를 수치와 함께 제안합니다. ISafeGuard 설치 전 시뮬레이션으로 비용을 최소화합니다.",
    bullets: [
      "3D 공간 사각지대 자동 분석",
      "최적 카메라 위치 및 각도 수치 제안",
      "공정 변화에 따른 카메라 재배치 알림",
      "ISafeGuard와 연동하여 설정 자동 전달",
    ],
    placeholder: {
      title: "3D 공간 사각지대 분석 및 카메라 배치 추천 화면",
      description: "3D 현장 모델 위에 최적 카메라 위치가 표시된 ISafePlanner 시뮬레이션 화면",
    },
    ctaBg: "bg-teal-600 hover:bg-teal-700",
    bgClass: "bg-white",
  },
];

const steps = [
  { step: "01", title: "도면·WBS 업로드", desc: "2D dxf 도면 파일이나 WBS 문서를 업로드합니다. 다양한 포맷을 지원합니다." },
  { step: "02", title: "3D 모델 자동 생성 및 위험도 분석", desc: "AI가 3D 모델을 자동 생성하고, 공정 스케줄과 기상 데이터를 결합하여 위험도 지수를 산출합니다." },
  { step: "03", title: "현장 투입 전 브리핑 완료", desc: "위험도 보고서와 최적 카메라 위치를 확인합니다. 이 데이터는 ISafeMeta 훈련과 ISafeGuard 설치에 자동으로 활용됩니다." },
];

export default function ISafePlannerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[64px] bg-gradient-to-br from-[#0a2612] via-[#14532d] to-[#16a34a] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">ISafePlanner</span>
                  <span className="px-3 py-1 bg-white/10 text-green-200 text-xs rounded-full">Plan Module</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  현장 투입 전,<br />
                  <span className="text-green-300">이미 모든 위험을</span><br />
                  알고 있습니다
                </h1>
                <p className="text-green-100 text-base leading-relaxed mb-4 max-w-md">
                  중대재해의 70%는 &ldquo;예상 못 했다&rdquo;가 아닙니다. &ldquo;확인하지 않았다&rdquo;입니다.
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  ISafePlanner는 도면 하나로 공정별 위험 지도를 자동으로 만들어 냅니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-green-900 bg-white hover:bg-green-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="#3d-convert"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    기능 살펴보기 ↓
                  </Link>
                </div>
              </div>

              {/* Right: BIM mockup placeholder */}
              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-green-500/30 p-4 shadow-2xl shadow-green-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">ISafePlanner · 3D 공정 시뮬레이터</span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      분석 완료
                    </span>
                  </div>
                  <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-gray-900/60" />
                    <div className="relative text-center">
                      <div className="text-4xl mb-2">🏗️</div>
                      <p className="text-green-300 text-sm font-bold">3D IFC 모델 생성 완료</p>
                      <p className="text-gray-400 text-xs mt-1">공정률 40% · 위험도 지수 산출 중</p>
                    </div>
                    <div className="absolute top-2 left-2 text-[10px] text-green-300 font-mono bg-black/40 px-2 py-1 rounded">IFC 3D · WBS 연동</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 bg-yellow-900/40 border border-yellow-500/40 rounded-lg px-3 py-2">
                      <span className="text-yellow-400 text-xs">⚠</span>
                      <span className="text-[12px] text-yellow-300 font-medium">3주차 외부비계 + 강풍 예보 — 위험도 HIGH</span>
                      <span className="ml-auto text-[10px] text-gray-500 flex-shrink-0">방금</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                      <span className="text-green-400 text-xs">📸</span>
                      <span className="text-[12px] text-gray-400">최적 카메라 위치 5곳 추천 완료</span>
                      <span className="ml-auto text-[10px] text-gray-500 flex-shrink-0">1분 전</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-green-700 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-600">
              {[
                { value: "자동", label: "2D → 3D 도면 변환" },
                { value: "실시간", label: "기상 연동 위험 지수" },
                { value: "AI 추천", label: "최적 카메라 배치" },
                { value: "3종", label: "모듈 자동 연동" },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-2xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-green-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature sections */}
        {plannerFeatures.map((feature) => (
          <section key={feature.id} id={feature.id} className={`py-20 ${feature.bgClass}`}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${feature.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                <div className="flex flex-col justify-center">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold ${feature.tagColor} rounded-full mb-4 w-fit`}>
                    {feature.tag}
                  </span>
                  <h2 className="text-[30px] font-black text-gray-900 whitespace-pre-line leading-tight mb-3">
                    {feature.headline}
                  </h2>
                  <p className="text-sm font-semibold text-green-600 mb-3">{feature.subhead}</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white ${feature.ctaBg} rounded-lg transition-colors w-fit`}
                  >
                    도입 문의하기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <ImagePlaceholder
                  title={feature.placeholder.title}
                  description={feature.placeholder.description}
                  aspectRatio="4/3"
                />
              </div>
            </div>
          </section>
        ))}

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">도입 절차</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">도면 업로드부터 현장 투입 브리핑까지</h2>
              <p className="text-gray-500">3단계로 현장 투입 전 안전 계획이 완성됩니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-green-200" />
              {steps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#14532d] to-[#16a34a] flex items-center justify-center mb-6 shadow-lg relative z-10">
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
        <section className="py-20 bg-gradient-to-r from-[#14532d] to-[#16a34a] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">다음 공정, 위험을<br />미리 알고 시작하십시오</h2>
                <p className="text-green-100 mb-8 leading-relaxed">
                  중대재해는 갑자기 일어나지 않습니다. 예측되지 않은 위험, 확인되지 않은 공정이 쌓여서 일어납니다.<br /><br />
                  ISafePlanner로 현장 투입 전 모든 위험 요소를 파악하세요.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-green-800 bg-white hover:bg-green-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="/isafe-meta"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    ISafeMeta 훈련 연동 보기
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImagePlaceholder
                  title="ISafePlanner 활용 현장 사진"
                  description="ISafePlanner로 3D 위험 분석을 수행하는 안전 관리자의 실제 사용 장면"
                  aspectRatio="4/3"
                  className="border-white/20 bg-white/5"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
