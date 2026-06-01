import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "ISafeMeta | ConTILab - 현장 맞춤 가상 안전 교육 플랫폼",
  description: "실제 현장의 3D 환경에서 교육하고, 디지털 수강 시스템으로 이수를 관리하며, 현장 특화 다국어 AI Agent 아바타가 근로자를 안내합니다.",
};

const metaFeatures = [
  {
    id: "virtual-env",
    reverse: false,
    tag: "현장 가상환경",
    tagColor: "bg-red-100 text-red-700",
    headline: "오늘 들어갈\n그 현장에서\n이미 훈련합니다",
    subhead: "A 현장 훈련이 B 현장에서는 의미가 없습니다",
    desc: "ISafePlanner의 3D BIM 모델을 그대로 가져오거나, 360도 카메라로 실제 현장을 촬영해 디지털 트윈을 구축합니다. 오늘 오전에 들어갈 외부비계 구역, 이번 주에 시작되는 용접 공정. 그 공간에서 미리 훈련합니다.",
    bullets: [
      "ISafePlanner 3D BIM 모델 즉시 연동",
      "360도 카메라 촬영 → 디지털 트윈 자동 구축",
      "실제 현장 구조·공정과 동일한 가상 훈련 환경",
      "ISafeGuard 위험구역 설정도 훈련에 자동 반영",
    ],
    placeholder: {
      title: "ISafePlanner 연동 / 360카메라 디지털 트윈 가상환경",
      description: "BIM 3D 모델 또는 360도 카메라로 구축한 실제 현장 가상 훈련 공간",
    },
    ctaBg: "bg-red-600 hover:bg-red-700",
    bgClass: "bg-white",
  },
  {
    id: "lms",
    reverse: true,
    tag: "디지털 수강 시스템",
    tagColor: "bg-orange-100 text-orange-700",
    headline: "현장별 맞춤\n교육 커리큘럼을\n디지털로 운영합니다",
    subhead: "종이 출석부와 PPT 교육에서 벗어나세요",
    desc: "건설 현장 안전 교육 자료를 디지털 수강 시스템으로 관리합니다. 공정별·직종별로 필요한 교육 콘텐츠를 배정하고, 근로자가 가상환경 안에서 수강합니다. 수강 진도·테스트 결과·이수 여부가 모두 자동으로 기록됩니다.",
    bullets: [
      "공정별·직종별 맞춤 교육 커리큘럼 구성",
      "가상환경 내 몰입형 교육 콘텐츠 수강",
      "수강 진도·테스트 결과 실시간 관리",
      "미이수 근로자 자동 감지 및 재배정",
    ],
    placeholder: {
      title: "공정별 디지털 수강 시스템 대시보드",
      description: "근로자별 수강 현황, 공정별 커리큘럼 배정, 이수율 관리 화면",
    },
    ctaBg: "bg-orange-600 hover:bg-orange-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "ai-agent",
    reverse: false,
    tag: "현장 특화 AI Agent 아바타",
    tagColor: "bg-pink-100 text-pink-700",
    headline: "우리 현장을 아는\nAI가 20개 언어로\n근로자를 안내합니다",
    subhead: "현장 도면·규정·공정 데이터를 학습한 전담 AI Agent",
    desc: "단순 번역 수준이 아닙니다. 이 현장의 위험구역, 오늘의 공정 계획, 회사 안전 내규를 학습한 AI Agent 아바타가 근로자 곁에서 20여 개 언어로 실시간 안내합니다. 외국인 근로자도, 신입 근로자도 현장을 이해하고 투입됩니다.",
    bullets: [
      "현장 도면·위험구역·공정 데이터 기반 AI Agent",
      "20개국 언어 실시간 질의응답 및 안전 안내",
      "안전 법령·사내 내규 학습한 전문 지식 탑재",
      "이해도 테스트 결과 자동 기록 및 이수 연동",
    ],
    placeholder: {
      title: "현장 특화 다국어 AI Agent 아바타 인터페이스",
      description: "현장 데이터를 학습한 AI Agent가 근로자와 다국어로 질의응답하는 화면",
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
    subhead: "모든 수강 이력이 ISafeChain에 자동으로 저장됩니다",
    desc: "중대재해 발생 시 '우리는 교육을 충분히 했다'를 증명해야 합니다. 디지털 수강 시스템의 모든 이수 기록이 자동으로 ISafeChain에 전달되어 위변조 불가능한 법적 증빙으로 남습니다.",
    bullets: [
      "수강 완료 즉시 ISafeChain 블록체인에 자동 저장",
      "테스트 통과 기준 설정 및 자동 이수 확인",
      "개인별 교육 이력 관리 대시보드",
      "부족 항목 감지 시 특화 교육 자동 재배정",
    ],
    placeholder: {
      title: "교육 이수 현황 및 ISafeChain 연동 대시보드",
      description: "근로자별 수강 이력, 테스트 결과, 블록체인 저장 상태 확인 화면",
    },
    ctaBg: "bg-purple-600 hover:bg-purple-700",
    bgClass: "bg-gray-50",
  },
];

const steps = [
  { step: "01", title: "현장 가상환경 구축", desc: "ISafePlanner 3D BIM 모델을 연동하거나, 360도 카메라로 실제 현장을 촬영해 디지털 트윈 가상환경을 구성합니다." },
  { step: "02", title: "커리큘럼 배정 및 수강", desc: "공정별·직종별 교육 콘텐츠를 배정합니다. 근로자는 가상환경 안에서 AI Agent 아바타와 함께 수강합니다." },
  { step: "03", title: "이수 기록 자동 저장", desc: "수강 완료 즉시 이수 기록이 ISafeChain에 자동 저장됩니다. 미이수자는 시스템이 자동으로 감지해 재배정합니다." },
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
                  오늘 들어갈 현장을<br />
                  <span className="text-red-300">가상으로 미리 경험하고</span><br />
                  AI가 함께 안내합니다
                </h1>
                <p className="text-red-100 text-base leading-relaxed mb-4 max-w-md">
                  실제 현장의 3D 가상환경, 디지털 수강 시스템, 현장 특화 다국어 AI Agent 아바타. 세 가지가 하나로 작동합니다.
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  ISafePlanner와 연동하거나 360도 카메라로 현장을 찍으면 즉시 가상 교육 환경이 만들어집니다.
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
                { value: "20+", label: "AI Agent 지원 언어" },
                { value: "2가지", label: "가상환경 구축 방식" },
                { value: "디지털", label: "수강 시스템 운영" },
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
              <h2 className="text-3xl font-black text-gray-900 mb-4">현장 구축부터 이수 기록까지 3단계</h2>
              <p className="text-gray-500">ISafePlanner 연동 또는 360도 카메라 촬영으로 즉시 시작할 수 있습니다.</p>
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
                <h2 className="text-3xl font-black mb-4">우리 현장을 아는 AI가<br />20개 언어로 근로자를<br />직접 교육합니다</h2>
                <p className="text-red-100 mb-8 leading-relaxed">
                  현장 가상환경 + 디지털 수강 시스템 + 현장 특화 AI Agent 아바타. ISafeMeta는 세 가지를 하나의 플랫폼으로 제공합니다.
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
