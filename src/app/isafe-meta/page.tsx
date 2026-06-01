import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "ISafeMeta | ConTILab - 근로자 중심 몰입형 가상 안전 훈련 시스템",
  description: "오늘 투입될 현장과 똑같은 3D 환경에서 위험을 직접 체험합니다. 한 번 몸으로 겪은 위험은 잊히지 않습니다.",
};

const metaFeatures = [
  {
    id: "digital-twin",
    reverse: false,
    tag: "디지털 트윈 연동",
    tagColor: "bg-red-100 text-red-700",
    headline: "오늘 들어갈\n그 현장에서\n이미 훈련합니다",
    subhead: "A 현장 훈련이 B 현장에서는 의미가 없습니다",
    desc: "ISafePlanner가 만든 실제 현장의 3D 모델을 그대로 가져옵니다. 오늘 오전에 들어갈 외부비계 구역, 이번 주에 시작되는 용접 작업. 그 공간에서 미리 훈련합니다. 어떤 교과서도 대신할 수 없는 경험입니다.",
    bullets: [
      "ISafePlanner 3D 모델 즉시 연동",
      "실제 현장 구조·공정과 동일한 훈련 환경",
      "오늘의 위험 공정을 오늘 아침 훈련 가능",
      "ISafeGuard 위험구역 설정도 훈련에 반영",
    ],
    placeholder: {
      title: "실제 현장 3D 디지털 트윈 훈련 환경",
      description: "ISafePlanner 모델을 이식한 ISafeMeta 가상 훈련 공간 - 실제 현장과 동일한 구조",
    },
    ctaBg: "bg-red-600 hover:bg-red-700",
    bgClass: "bg-white",
  },
  {
    id: "crisis-experience",
    reverse: true,
    tag: "위기 체험 모듈",
    tagColor: "bg-orange-100 text-orange-700",
    headline: "추락을 경험해본\n근로자와 아닌 근로자는\n현장에서 다릅니다",
    subhead: "안전한 환경에서 위험을 몸으로 배웁니다",
    desc: "추락, 낙하물, 중장비 충돌, 용접 화재. 실제 현장에서 이 상황을 경험하면 돌이킬 수 없습니다. ISafeMeta는 1인칭 시점으로 이 모든 위험 상황을 직접 체험하게 합니다. 단 한 번의 체험이 수십 번의 강의보다 오래 기억됩니다.",
    bullets: [
      "추락·낙하·중장비 충돌·화재 1인칭 체험",
      "상황별 올바른 대처 방법 즉각 피드백",
      "체험 후 결과 분석 및 복습 기능",
      "팀 단위 협동 작업 멀티플레이어 시나리오",
    ],
    placeholder: {
      title: "중대재해 위기 체험 시나리오 화면",
      description: "외부비계 추락 위험 상황을 1인칭으로 체험하는 ISafeMeta 훈련 화면",
    },
    ctaBg: "bg-orange-600 hover:bg-orange-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "ai-avatar",
    reverse: false,
    tag: "다국어 AI 아바타",
    tagColor: "bg-pink-100 text-pink-700",
    headline: "외국인 근로자\n30%를 위한 안전 교육,\n어떻게 하고 계십니까?",
    subhead: "언어가 달라도, 안전 교육은 동일하게",
    desc: "건설현장 근로자의 약 30%가 외국인입니다. 한국어로만 진행되는 안전 교육을 그들이 얼마나 이해하는지 확인한 적이 있습니까? iSafeLLM 기반 AI 아바타는 20여 개국 언어로 안전 법령과 매뉴얼을 가르칩니다.",
    bullets: [
      "20개국 언어 실시간 안전 교육",
      "안전 법령·매뉴얼 마스터한 전문 AI",
      "자유로운 질의응답 가능",
      "이해도 테스트 및 결과 자동 기록",
    ],
    placeholder: {
      title: "다국어 AI 아바타 안전 교육 화면",
      description: "ISafeMeta AI 아바타와 근로자가 질의응답하는 다국어 훈련 인터페이스",
    },
    ctaBg: "bg-pink-600 hover:bg-pink-700",
    bgClass: "bg-white",
  },
  {
    id: "certification",
    reverse: true,
    tag: "교육 이수 자동 기록",
    tagColor: "bg-purple-100 text-purple-700",
    headline: "\"교육을 했다\"\n증거가\n지금 있습니까?",
    subhead: "훈련 이수 기록이 ISafeChain에 자동으로 저장됩니다",
    desc: "중대재해 발생 시 '우리는 교육을 충분히 했다'를 증명해야 합니다. ISafeMeta는 모든 훈련 이수 기록을 디지털로 영구 보존하고 ISafeChain에 자동 전달합니다. 위변조 불가능한 법적 증빙이 쌓입니다.",
    bullets: [
      "테스트 통과 기준 설정 및 자동 이수 확인",
      "ISafeChain 블록체인에 이수 기록 자동 전달",
      "부족한 항목 감지 시 특화 훈련 자동 재할당",
      "개인별 교육 이력 관리 대시보드",
    ],
    placeholder: {
      title: "교육 이수 현황 및 이력 관리 대시보드",
      description: "근로자별 훈련 이수 현황, 테스트 결과, ISafeChain 연동 기록 화면",
    },
    ctaBg: "bg-purple-600 hover:bg-purple-700",
    bgClass: "bg-gray-50",
  },
];

const steps = [
  { step: "01", title: "현장 3D 환경 자동 이식", desc: "ISafePlanner가 생성한 현장 IFC 모델을 ISafeMeta로 가져옵니다. 실제 현장과 동일한 가상 훈련 공간이 구성됩니다." },
  { step: "02", title: "공정별 훈련 시나리오 설정", desc: "이번 주 시작되는 공정의 주요 위험 시나리오를 선택합니다. AI가 해당 공정에 맞는 훈련 내용을 자동으로 제안합니다." },
  { step: "03", title: "훈련 이수 및 기록 완료", desc: "근로자가 훈련을 완료하면 이수 기록이 ISafeChain에 자동 저장됩니다. 부족한 부분은 다음 훈련에 반영됩니다." },
];

export default function ISafeMetaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#3d0e0e] via-[#7f1d1d] to-[#dc2626] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">ISafeMeta</span>
                  <span className="px-3 py-1 bg-white/10 text-red-200 text-xs rounded-full">Train Module</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  종이 교육으로<br />
                  <span className="text-red-300">근로자를 지킬 수</span><br />
                  없는 이유
                </h1>
                <p className="text-red-100 text-base leading-relaxed mb-4 max-w-md">
                  위험을 한 번도 겪어보지 못한 사람은 위험을 알아보지 못합니다. 이것은 교육의 실패가 아니라, 방식의 한계입니다.
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  ISafeMeta는 오늘 들어갈 그 현장에서 미리 위험을 체험하게 합니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-red-900 bg-white hover:bg-red-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="#digital-twin"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    기능 살펴보기 ↓
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-red-500/30 p-4 shadow-2xl shadow-red-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">ISafeMeta · 가상 안전 훈련</span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      훈련 중
                    </span>
                  </div>
                  <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-gray-900/60" />
                    <div className="relative text-center">
                      <div className="text-4xl mb-2">🥽</div>
                      <p className="text-red-300 text-sm font-bold">외부비계 추락 위험 체험</p>
                      <p className="text-gray-400 text-xs mt-1">1인칭 시점 · 안전고리 미착용 상황</p>
                    </div>
                    <div className="absolute top-2 left-2 text-[10px] text-red-300 font-mono bg-black/40 px-2 py-1 rounded">훈련 진행률: 67%</div>
                    <div className="absolute bottom-2 right-2 text-[10px] text-gray-400 font-mono bg-black/40 px-2 py-1 rounded">참여자: 박○○ · 한국어</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                      <span className="text-blue-400 text-xs">🤖</span>
                      <span className="text-[12px] text-gray-300">AI 아바타: 안전고리를 먼저 체결해야 합니다.</span>
                      <span className="ml-auto text-[9px] text-gray-500">방금</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-900/40 border border-green-500/40 rounded-lg px-3 py-2">
                      <span className="text-green-400 text-xs">✓</span>
                      <span className="text-[12px] text-gray-300 font-medium">단계 2 완료 — 이수 기록 저장 중</span>
                      <span className="ml-auto text-[9px] text-gray-500">30초 전</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-red-600 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-red-500">
              {[
                { value: "20+", label: "지원 언어" },
                { value: "1인칭", label: "몰입형 위험 체험" },
                { value: "실제 현장", label: "3D 환경 이식" },
                { value: "자동", label: "이수 기록 블록체인 저장" },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-2xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-red-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature sections */}
        {metaFeatures.map((feature) => (
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
                  <p className="text-sm font-semibold text-red-600 mb-3">{feature.subhead}</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">도입 절차</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">오늘 아침 현장 투입 전 훈련까지</h2>
              <p className="text-gray-500">ISafePlanner와 연동되어 오늘의 현장 데이터로 즉시 훈련을 구성합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-red-200" />
              {steps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7f1d1d] to-[#dc2626] flex items-center justify-center mb-6 shadow-lg relative z-10">
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
        <section className="py-20 bg-gradient-to-r from-[#7f1d1d] to-[#dc2626] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">교육받은 근로자와<br />훈련받은 근로자는<br />다릅니다</h2>
                <p className="text-red-100 mb-8 leading-relaxed">
                  지식과 경험은 다릅니다. ISafeMeta는 근로자가 위험을 체험하고, 대처를 연습하고, 현장에 투입될 수 있도록 준비시킵니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-red-800 bg-white hover:bg-red-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="/isafe-chain"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    ISafeChain 이수 기록 연동
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImagePlaceholder
                  title="ISafeMeta 훈련 현장 사진"
                  description="근로자가 ISafeMeta 가상 안전 훈련을 진행하는 실제 현장 사진"
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
