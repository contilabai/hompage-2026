import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "ISafePlatform Core | ConTILab - 자율 진화형 올인원 웹 관제 플랫폼",
  description: "강력한 온프레미스 서버 기반 ISafePlatform Core. 모듈 라이선스 관리, 역할 기반 권한 제어, 중앙 데이터 파이프라인을 탑재한 핵심 인프라.",
};

const infraFeatures = [
  {
    icon: "🔌",
    title: "모듈 라이선스 관리자",
    desc: "구매한 핵심 모듈들을 플러그인 방식으로 즉각 해금하고 중앙 제어하는 스마트 통제 룰 적용",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    icon: "👥",
    title: "통합 역할 기반 권한 관리",
    desc: "최고 관리자, 현장 소장, 안전 관리자, 현장 근로자 등 접근 주체별 맞춤형 화면 및 데이터 차등 표출",
    color: "bg-slate-50 border-slate-200",
    iconBg: "bg-slate-100",
  },
  {
    icon: "🔄",
    title: "중앙 데이터 통합 파이프라인",
    desc: "분산된 개별 모듈의 원천 데이터를 메시지 큐 기반 마이크로서비스 아키텍처로 끊김 없이 수집 및 동기화",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
];

const modules = [
  {
    name: "ISafePlanner",
    badge: "Plan",
    badgeColor: "bg-green-100 text-green-700",
    desc: "BIM 기반 동적 공정 및 안전 예측 스케줄러",
    href: "/isafe-planner",
    color: "border-green-200 hover:border-green-400",
    gradientFrom: "#14532d",
    gradientTo: "#16a34a",
  },
  {
    name: "ISafeMeta",
    badge: "Train",
    badgeColor: "bg-red-100 text-red-700",
    desc: "근로자 중심 몰입형 가상 안전 훈련 및 테스트 시스템",
    href: "/isafe-meta",
    color: "border-red-200 hover:border-red-400",
    gradientFrom: "#7f1d1d",
    gradientTo: "#dc2626",
  },
  {
    name: "ISafeGuard",
    badge: "Monitor",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "실시간 지능형 비전 관제 및 엣지 AI 솔루션",
    href: "/isafe-guard",
    color: "border-blue-200 hover:border-blue-400",
    gradientFrom: "#0c2340",
    gradientTo: "#1d6fa4",
  },
  {
    name: "ISafeChain",
    badge: "Measure",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: "블록체인 기반 안전 거버넌스 및 보상 인센티브 플랫폼",
    href: "/isafe-chain",
    color: "border-orange-200 hover:border-orange-400",
    gradientFrom: "#7c2d12",
    gradientTo: "#ea580c",
  },
];

const steps = [
  { step: "01", title: "온프레미스 서버 설치", desc: "가상 사설망(VPN) 환경 내에 온프레미스 서버를 설치합니다. 기업 데이터는 외부에 유출되지 않습니다." },
  { step: "02", title: "모듈 라이선스 해금", desc: "구매한 모듈의 라이선스 키를 입력하면 즉시 해당 모듈이 활성화됩니다. 필요에 따라 모듈을 추가 구매할 수 있습니다." },
  { step: "03", title: "사용자 권한 설정", desc: "관리자, 현장 소장, 안전 관리자, 근로자 등 역할을 설정하고 각 역할에 맞는 화면과 데이터 접근 권한을 구성합니다." },
];

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[64px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full">ISafePlatform Core</span>
                  <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">기본 탑재</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  4개 모듈이 하나로<br />
                  <span className="text-blue-300">현장 안전의 모든 것을</span><br />
                  자동화합니다
                </h1>
                <p className="text-blue-100 text-base leading-relaxed mb-4 max-w-md">
                  계획부터 훈련, 관제, 기록까지. 각각 따로 쓰면 도구지만, ISafePlatform으로 연결하면 현장이 스스로 안전해집니다.
                </p>
                <p className="text-white font-semibold text-base mb-8 max-w-md">
                  솔루션 구매 고객에게 기본 탑재됩니다. 가상 사설망 내에서 안전하게 구동됩니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-6 py-3 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="#modules"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    모듈 살펴보기 ↓
                  </Link>
                </div>
              </div>

              {/* Right: Platform mockup */}
              <div className="hidden lg:block">
                <div className="bg-gray-900/80 backdrop-blur rounded-2xl border border-blue-500/30 p-4 shadow-2xl shadow-blue-900/50">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-400 ml-2 font-mono">ISafePlatform Core · 관제 대시보드</span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      운영 중
                    </span>
                  </div>
                  {/* Module status grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {[
                      { name: "ISafePlanner", status: "활성", color: "text-green-400", bg: "bg-green-900/30 border-green-500/30" },
                      { name: "ISafeMeta", status: "활성", color: "text-red-400", bg: "bg-red-900/30 border-red-500/30" },
                      { name: "ISafeGuard", status: "활성", color: "text-blue-400", bg: "bg-blue-900/30 border-blue-500/30" },
                      { name: "ISafeChain", status: "활성", color: "text-orange-400", bg: "bg-orange-900/30 border-orange-500/30" },
                    ].map((m) => (
                      <div key={m.name} className={`flex items-center gap-2 ${m.bg} border rounded-lg px-3 py-2`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${m.color.replace("text-", "bg-")}`} />
                        <span className="text-[11px] text-white font-medium">{m.name}</span>
                        <span className={`ml-auto text-[10px] ${m.color}`}>{m.status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-2.5 py-1.5">
                      <span className="text-green-400 text-[10px]">✓</span>
                      <span className="text-[11px] text-gray-400">VPN 연결 정상 · 데이터 동기화 완료</span>
                      <span className="ml-auto text-[9px] text-gray-500">방금</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-2.5 py-1.5">
                      <span className="text-blue-400 text-[10px]">◉</span>
                      <span className="text-[11px] text-gray-400">접속 사용자: 관리자 3명, 현장 소장 12명</span>
                      <span className="ml-auto text-[9px] text-gray-500">1분 전</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-blue-700 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-600">
              {[
                { value: "온프레미스", label: "서버 기반 구동" },
                { value: "VPN", label: "가상 사설망 보호" },
                { value: "4종", label: "연동 가능 모듈" },
                { value: "24/7", label: "무중단 운영" },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-blue-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Infrastructure */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">핵심 인프라</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">ISafePlatform Core 3대 기능</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                솔루션 도입 시 기본 탑재되는 통제 본부입니다. 같은 가상 사설망 내부라면 언제 어디서든 실시간 보안 관제 뷰에 접속할 수 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {infraFeatures.map((f) => (
                <div key={f.title} className={`p-6 rounded-2xl border ${f.color} bg-white`}>
                  <div className={`w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center mb-4 text-2xl`}>
                    {f.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Modules */}
        <section id="modules" className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">연동 모듈</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">4대 핵심 연동 모듈</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                현장의 요구에 맞춰 4가지 핵심 예방 모듈을 자유롭게 해금하고 결합할 수 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((m) => (
                <Link
                  key={m.name}
                  href={m.href}
                  className={`group rounded-2xl border-2 ${m.color} overflow-hidden hover:shadow-lg transition-all bg-white`}
                >
                  <div
                    className="h-24 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${m.gradientFrom} 0%, ${m.gradientTo} 100%)` }}
                  >
                    <span className="text-white text-3xl font-black opacity-30">{m.badge[0]}</span>
                  </div>
                  <div className="p-5">
                    <span className={`inline-block px-2 py-0.5 text-xs font-bold ${m.badgeColor} rounded-md mb-2`}>{m.badge}</span>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-1">{m.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{m.desc}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-blue-600">
                      상세보기
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">도입 절차</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">3단계로 완료되는 플랫폼 도입</h2>
              <p className="text-gray-500">온프레미스 설치부터 모듈 운영까지, 전문 엔지니어가 함께합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-0.5 bg-blue-200" />
              {steps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d1b2a] to-[#1b2a3b] flex items-center justify-center mb-6 shadow-lg relative z-10">
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
        <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">지금 쓰는 안전 관리 방식,<br />5년 뒤에도 유지할 수 있습니까?</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  규제는 강화되고, 현장은 복잡해지고, 인력은 부족합니다. ISafePlatform은 그 간극을 AI와 자동화로 채웁니다.<br /><br />
                  ConTILab이 공공기관 및 탑티어 건설사들과 함께 검증한 솔루션입니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
                  >
                    도입 문의하기
                  </a>
                  <Link
                    href="#modules"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    모듈 살펴보기
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <ImagePlaceholder
                  title="ISafePlatform 도입 현장 전경 사진"
                  description="ISafePlatform을 도입한 건설현장의 실제 운영 사진"
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
