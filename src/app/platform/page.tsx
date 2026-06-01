import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "ISafePlatform Core | ConTILab - 4개 모듈이 순환하는 통합 안전 플랫폼",
  description: "계획하고, 교육하고, 관제하고, 측정한다. ISafePlanner·ISafeMeta·ISafeGuard·ISafeChain 4개 모듈이 데이터를 공유하며 현장이 스스로 안전해집니다.",
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
    desc: "BIM 기반 동적 공정 분석으로 위험 발생 전에 예측하고 오늘의 훈련 시나리오를 ISafeMeta에 전달합니다.",
    href: "/isafe-planner",
    color: "border-green-200 hover:border-green-400",
    gradientFrom: "#14532d",
    gradientTo: "#16a34a",
    step: "① 계획",
  },
  {
    name: "ISafeMeta",
    badge: "Train",
    badgeColor: "bg-red-100 text-red-700",
    desc: "ISafePlanner의 현장 3D 환경에서 AI Agent 아바타와 함께 오늘 투입될 공정을 미리 훈련합니다.",
    href: "/isafe-meta",
    color: "border-red-200 hover:border-red-400",
    gradientFrom: "#7f1d1d",
    gradientTo: "#dc2626",
    step: "② 교육",
  },
  {
    name: "ISafeGuard",
    badge: "Monitor",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "훈련받은 근로자가 현장에 투입되면 AI가 32채널을 실시간 감시하고 위반 즉시 알림을 보냅니다.",
    href: "/isafe-guard",
    color: "border-blue-200 hover:border-blue-400",
    gradientFrom: "#0c2340",
    gradientTo: "#1d6fa4",
    step: "③ 관제",
  },
  {
    name: "ISafeChain",
    badge: "Measure",
    badgeColor: "bg-orange-100 text-orange-700",
    desc: "ISafeGuard의 관제 데이터와 이수 기록을 블록체인에 저장해 성과를 측정하고 인센티브를 지급합니다.",
    href: "/isafe-chain",
    color: "border-orange-200 hover:border-orange-400",
    gradientFrom: "#7c2d12",
    gradientTo: "#ea580c",
    step: "④ 측정",
  },
];

const steps = [
  { step: "01", title: "서버 환경 구성", desc: "온프레미스 또는 클라우드 서버에 ISafePlatform을 설치합니다. VPN 등 폐쇄망 환경에서도 온프레미스 구조로 운영할 수 있습니다." },
  { step: "02", title: "모듈 라이선스 해금", desc: "구매한 모듈의 라이선스 키를 입력하면 즉시 해당 모듈이 활성화됩니다. 필요에 따라 모듈을 추가 구매할 수 있습니다." },
  { step: "03", title: "사용자 권한 설정", desc: "관리자, 현장 소장, 안전 관리자, 근로자 등 역할을 설정하고 각 역할에 맞는 화면과 데이터 접근 권한을 구성합니다." },
];

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="pt-[88px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: text */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full">ISafePlatform Core</span>
                  <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">솔루션 기본 탑재</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  계획하고, 교육하고,<br />
                  관제하고, 측정한다<br />
                  <span className="text-blue-300">안전의 완전한 순환</span>
                </h1>
                <p className="text-blue-100 text-base leading-relaxed mb-6 max-w-lg">
                  각각 따로 쓰면 도구입니다. ISafePlatform으로 연결하면 현장이 스스로 안전해집니다.
                </p>
                <ul className="space-y-3 mb-8 max-w-lg">
                  {[
                    { color: "bg-green-400", text: "ISafePlanner가 오늘의 위험 공정을 예측하고" },
                    { color: "bg-red-400",   text: "ISafeMeta가 근로자를 투입 전 가상환경에서 교육하고" },
                    { color: "bg-blue-400",  text: "ISafeGuard가 현장 전체를 AI로 실시간 관제하고" },
                    { color: "bg-orange-400", text: "ISafeChain이 모든 데이터를 측정·기록·보상합니다" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-blue-100">
                      <span className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0 mt-1.5`} />
                      {item.text}
                    </li>
                  ))}
                </ul>
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
                    4개 모듈 살펴보기 ↓
                  </Link>
                </div>
              </div>

              {/* Right: circular flow diagram */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-[440px] h-[440px]">

                  {/* SVG: dashed orbit + connecting arrows */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 440" overflow="visible">
                    <defs>
                      {[
                        { id: "ag", color: "#4ade80" },
                        { id: "ar", color: "#f87171" },
                        { id: "ab", color: "#60a5fa" },
                        { id: "ao", color: "#fb923c" },
                      ].map(({ id, color }) => (
                        <marker key={id} id={id} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                          <path d="M0,0.5 L8,4 L0,7.5 Z" fill={color} />
                        </marker>
                      ))}
                    </defs>

                    {/* Dashed orbit ring — r=150, center=(220,220) */}
                    <circle cx="220" cy="220" r="150" fill="none" stroke="rgba(147,197,253,0.15)" strokeWidth="2" strokeDasharray="7 5" />

                    {/* Plan → Train */}
                    <path d="M 268 80 A 150 150 0 0 1 358 172" fill="none" stroke="#4ade80" strokeWidth="2" markerEnd="url(#ag)" />
                    {/* Train → Monitor */}
                    <path d="M 358 268 A 150 150 0 0 1 268 358" fill="none" stroke="#f87171" strokeWidth="2" markerEnd="url(#ar)" />
                    {/* Monitor → Measure */}
                    <path d="M 172 358 A 150 150 0 0 1 82 268" fill="none" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#ab)" />
                    {/* Measure → Plan */}
                    <path d="M 82 172 A 150 150 0 0 1 172 82" fill="none" stroke="#fb923c" strokeWidth="2" markerEnd="url(#ao)" />

                    {/* Subtle spokes to center */}
                    {[[220,70],[370,220],[220,370],[70,220]].map(([x,y], i) => (
                      <line key={i} x1={x} y1={y} x2="220" y2="220" stroke="rgba(147,197,253,0.07)" strokeWidth="1" strokeDasharray="4 5" />
                    ))}
                  </svg>

                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full bg-[#0a1628] border-2 border-blue-400/50 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/30 z-10">
                    <span className="text-[11px] font-black text-blue-300 uppercase tracking-wider text-center leading-tight">iSafe<br />Platform</span>
                    <span className="text-[10px] text-blue-500/80 mt-1 font-semibold">Core</span>
                  </div>

                  {/* Plan – top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#0a1f0f] border border-green-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-green-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-green-400 uppercase tracking-widest block mb-0.5">Plan</span>
                      <span className="text-[15px] font-black text-white">ISafePlanner</span>
                    </div>
                  </div>

                  {/* Train – right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-[#1f0a0a] border border-red-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-red-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block mb-0.5">Train</span>
                      <span className="text-[15px] font-black text-white">ISafeMeta</span>
                    </div>
                  </div>

                  {/* Monitor – bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#070f1f] border border-blue-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-blue-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block mb-0.5">Monitor</span>
                      <span className="text-[15px] font-black text-white">ISafeGuard</span>
                    </div>
                  </div>

                  {/* Measure – left */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-[#1f0f07] border border-orange-500/50 rounded-xl px-5 py-3 text-center shadow-lg shadow-orange-900/40 min-w-[120px]">
                      <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest block mb-0.5">Measure</span>
                      <span className="text-[15px] font-black text-white">ISafeChain</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Stats bar ─────────────────────────────────────── */}
        <section className="bg-blue-700 text-white py-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-blue-600">
              {[
                { value: "4개", label: "순환 연동 모듈" },
                { value: "24/7", label: "무중단 자동 운영" },
                { value: "실시간", label: "모듈 간 데이터 동기화" },
                { value: "단계별", label: "필요한 모듈만 선택 도입" },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 first:pl-0 last:pr-0">
                  <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-blue-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4 Core Modules (moved up) ─────────────────────── */}
        <section id="modules" className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <div className="flex justify-center mb-5">
                <Image
                  src="/images/logo-icon.png"
                  alt="ConTILab"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">4대 핵심 연동 모듈</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">순서대로 작동하고, 데이터가 순환합니다</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                현장의 요구에 맞춰 필요한 모듈부터 도입하고, 성장에 맞춰 추가로 해금하세요.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((m) => (
                <Link
                  key={m.name}
                  href={m.href}
                  className={`group rounded-2xl border-2 ${m.color} overflow-hidden hover:shadow-lg transition-all bg-white flex flex-col`}
                >
                  <div
                    className="h-28 flex items-center justify-between px-5"
                    style={{ background: `linear-gradient(135deg, ${m.gradientFrom} 0%, ${m.gradientTo} 100%)` }}
                  >
                    <span className="text-white text-5xl font-black opacity-15">{m.badge[0]}</span>
                    <span className="text-white text-xl font-black tracking-wide">{m.step}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`inline-block px-2 py-0.5 text-xs font-bold ${m.badgeColor} rounded-md mb-2 w-fit`}>{m.badge}</span>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-2">{m.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{m.desc}</p>
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

        {/* ── Core Infrastructure ───────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">플랫폼 Core 기능</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">4개 모듈을 하나로 묶는 3대 인프라</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                모든 솔루션 고객에게 기본 탑재되는 통제 본부입니다.
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

        {/* ── How it works / Installation (moved down) ──────── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">도입 절차</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">3단계로 완료되는 플랫폼 도입</h2>
              <p className="text-gray-500">
                온프레미스 또는 클라우드 서버에 설치하며, VPN·폐쇄망 환경도 지원합니다. 전문 엔지니어가 함께합니다.
              </p>
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

            {/* Deployment note */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🖥️", title: "온프레미스", desc: "자체 서버에 직접 설치. 데이터가 외부로 나가지 않습니다." },
                { icon: "☁️", title: "클라우드", desc: "AWS·Azure 등 클라우드 서버에 동일하게 배포 가능합니다." },
                { icon: "🔒", title: "VPN·폐쇄망", desc: "가상 사설망 내 온프레미스 구조로도 완전히 운영 가능합니다." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
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
