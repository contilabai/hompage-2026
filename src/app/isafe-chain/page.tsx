import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "ISafeChain | ConTILab - 블록체인 기반 안전 거버넌스 및 보상 인센티브 플랫폼",
  description: "사고 발생 후 증거가 없으면 당신을 지킬 수 없습니다. ISafeChain은 모든 안전 기록을 위변조 불가 블록체인에 자동으로 저장합니다.",
};

const chainFeatures = [
  {
    id: "immutable-record",
    reverse: false,
    tag: "위변조 불가 안전 기록",
    tagColor: "bg-orange-100 text-orange-700",
    headline: "사고 이후\n\"몰랐다\"는 말이\n통하지 않습니다",
    subhead: "모든 안전 활동이 자동으로 블록체인에 기록됩니다",
    desc: "중대재해처벌법 위반 시 사업주와 경영진도 형사처벌을 받습니다. '우리는 관리했다'는 주장만으로는 부족합니다. ISafeChain은 ISafeGuard의 감지 기록, ISafeMeta의 교육 이수, 위험구역 출입 이력을 위변조 불가 블록체인에 자동으로 저장합니다.",
    bullets: [
      "모든 안전 이벤트 자동 온체인 기록",
      "개인정보 마스킹 처리 후 해시값만 저장",
      "ISafeGuard·ISafeMeta 기록 자동 연동",
      "언제든지 출력 가능한 법적 증빙 문서",
    ],
    placeholder: {
      title: "안전 기록 블록체인 저장 및 증빙 문서 화면",
      description: "안전 이벤트 타임라인과 법적 증빙용 블록체인 기록 조회 화면",
    },
    ctaBg: "bg-orange-600 hover:bg-orange-700",
    bgClass: "bg-white",
  },
  {
    id: "smart-contract",
    reverse: true,
    tag: "스마트 컨트랙트 리워드",
    tagColor: "bg-yellow-100 text-yellow-700",
    headline: "안전 수칙을\n지킨 근로자에게\n자동으로 보상합니다",
    subhead: "규정과 처벌만으로는 안전 문화를 만들 수 없습니다",
    desc: "스마트 컨트랙트가 안전 수칙 준수, 교육 이수, 위험 구역 신고를 자동으로 감지하고 인센티브 포인트를 즉시 지급합니다. 근로자가 스스로 안전을 지키고 싶어지는 환경을 만듭니다. 관리자의 개입 없이 자동으로 운영됩니다.",
    bullets: [
      "안전 수칙 연속 준수 시 자동 포인트 적립",
      "가상 교육 이수 완료 시 자동 보상",
      "위험 구역 발견·신고 시 즉시 인센티브",
      "월간 안전 우수 근로자 자동 선정",
    ],
    placeholder: {
      title: "스마트 컨트랙트 리워드 현황 대시보드",
      description: "근로자별 인센티브 포인트 적립 현황과 자동 지급 내역 화면",
    },
    ctaBg: "bg-yellow-600 hover:bg-yellow-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "feedback-loop",
    reverse: false,
    tag: "자율 진화 피드백 루프",
    tagColor: "bg-red-100 text-red-700",
    headline: "쓸수록 강해지는\nISafePlatform의\n비밀",
    subhead: "ISafeChain이 수집한 데이터로 모든 모듈이 스스로 개선됩니다",
    desc: "ISafeChain에 누적된 사고·위반·이수 데이터는 단순 기록으로 끝나지 않습니다. ISafePlanner의 위험도 가중치를 재조정하고, ISafeMeta가 특화 훈련을 자동 할당하며, ISafeGuard의 감지 임계치를 강화합니다. 플랫폼이 사용될수록 우리 현장에 맞게 진화합니다.",
    bullets: [
      "누적 위반 데이터 → ISafePlanner 위험도 자동 재조정",
      "반복 위반 패턴 → ISafeMeta 특화 훈련 자동 할당",
      "위반율 트렌드 → ISafeGuard 감지 임계치 자동 강화",
      "월별 플랫폼 개선 리포트 자동 발행",
    ],
    placeholder: {
      title: "3종 피드백 루프 자동 개선 현황 화면",
      description: "ISafeChain 데이터가 Planner·Meta·Guard에 어떻게 피드백되는지 보여주는 시각화 화면",
    },
    ctaBg: "bg-red-600 hover:bg-red-700",
    bgClass: "bg-white",
  },
];

const steps = [
  { step: "01", title: "암호화 식별자 등록", desc: "모든 근로자와 카메라 노드에 암호화된 고유 ID를 등록합니다. 개인정보는 마스킹 처리됩니다." },
  { step: "02", title: "안전 활동 자동 기록", desc: "ISafeGuard와 ISafeMeta의 모든 안전 이벤트가 자동으로 수집되어 블록체인 해시로 저장됩니다." },
  { step: "03", title: "리워드 지급 및 피드백 루프 가동", desc: "스마트 컨트랙트가 보상을 자동 지급하고, 누적 데이터가 플랫폼 전체를 자동으로 강화합니다." },
];

const rewards = [
  { emoji: "✅", action: "안전 수칙 연속 준수", points: "+50P", desc: "하루 단위 자동 확인" },
  { emoji: "🎓", action: "가상 안전 교육 이수", points: "+30P", desc: "ISafeMeta 연동" },
  { emoji: "📢", action: "위험 구역 발견·신고", points: "+20P", desc: "즉시 자동 지급" },
  { emoji: "🏆", action: "월간 안전 우수 근로자", points: "+100P", desc: "자동 선정·공표" },
];

export default function ISafeChainPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#3d1200] via-[#7c2d12] to-[#ea580c] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">ISafeChain</span>
                  <span className="px-3 py-1 bg-white/10 text-orange-200 text-xs rounded-full">Measure Module</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  사고 이후<br />
                  <span className="text-orange-300">기록이 없으면</span><br />
                  당신을 지킬 수 없습니다
                </h1>
                <p className="text-orange-100 text-base leading-relaxed mb-4 max-w-md">
                  중대재해처벌법 위반 시 사업주도 형사처벌을 받습니다. &ldquo;관리를 했다&rdquo;는 주장은 증거 없이 인정되지 않습니다.
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  ISafeChain은 모든 안전 활동을 위변조 불가 기록으로 자동으로 쌓습니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-orange-900 bg-white hover:bg-orange-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="#immutable-record"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    기능 살펴보기 ↓
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-orange-500/30 p-4 shadow-2xl shadow-orange-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">ISafeChain · 안전 거버넌스 대시보드</span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      온체인
                    </span>
                  </div>
                  <div className="space-y-2 mb-3">
                    {rewards.map((r) => (
                      <div key={r.action} className="flex items-center gap-2 bg-orange-900/30 border border-orange-500/30 rounded-lg px-3 py-2">
                        <span className="text-sm">{r.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] text-white font-medium truncate">{r.action}</p>
                          <p className="text-[10px] text-gray-400">{r.desc}</p>
                        </div>
                        <span className="text-[11px] font-bold text-orange-300 flex-shrink-0">{r.points}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-2.5 py-1.5">
                    <span className="text-orange-400 text-[10px]">🔗</span>
                    <span className="text-[11px] text-gray-400">Block #4821 · 오늘 안전 기록 37건 저장 완료</span>
                    <span className="ml-auto text-[9px] text-gray-500">방금</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-orange-600 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-orange-500">
              {[
                { value: "위변조 불가", label: "블록체인 기록" },
                { value: "자동", label: "스마트 컨트랙트 리워드" },
                { value: "3종", label: "자율 피드백 루프" },
                { value: "24/7", label: "무중단 기록 저장" },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-orange-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature sections */}
        {chainFeatures.map((feature) => (
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
                  <p className="text-sm font-semibold text-orange-600 mb-3">{feature.subhead}</p>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">도입 절차</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">설정 이후 모든 것은 자동입니다</h2>
              <p className="text-gray-500">한 번 설정하면 ISafeChain이 알아서 기록하고, 보상하고, 개선합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-orange-200" />
              {steps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7c2d12] to-[#ea580c] flex items-center justify-center mb-6 shadow-lg relative z-10">
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
        <section className="py-20 bg-gradient-to-r from-[#7c2d12] to-[#ea580c] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">사고가 나기 전에 기록을<br />준비해야 합니다</h2>
                <p className="text-orange-100 mb-8 leading-relaxed">
                  사고가 발생한 후에 기록을 모으려 하면 늦습니다. ISafeChain은 매일의 안전 활동을 자동으로 쌓아두어, 필요할 때 언제든지 꺼낼 수 있는 법적 증빙을 만들어 줍니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-orange-800 bg-white hover:bg-orange-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="/platform"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    Platform Core 알아보기
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImagePlaceholder
                  title="ISafeChain 법적 증빙 문서 샘플"
                  description="ISafeChain이 생성하는 법원 제출용 안전 활동 기록 증빙 문서"
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
