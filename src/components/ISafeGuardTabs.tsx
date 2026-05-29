"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type TabId = "solution" | "model" | "device";

const tabs: { id: TabId; label: string; sub: string }[] = [
  { id: "solution", label: "솔루션", sub: "웹 관제 플랫폼" },
  { id: "model", label: "AI 모델", sub: "3단계 패키지" },
  { id: "device", label: "디바이스", sub: "엣지 하드웨어" },
];

// ───────────── 솔루션 탭 ─────────────

const solutionFeatures = [
  {
    id: "multichannel",
    reverse: false,
    tag: "웹 관제 플랫폼",
    tagColor: "bg-blue-100 text-blue-700",
    headline: "몸이 열 개라도\n32개 카메라를 동시에\n볼 수는 없습니다",
    subhead: "ISafeGuard가 모든 채널을 동시에 분석하고 이상 징후만 알립니다",
    desc: "브라우저 하나로 현장 전체 카메라를 동시에 관제합니다. AI가 매 프레임을 분석하고 위험 카테고리별로 분류하여 이상 상황만 즉시 화면에 띄웁니다. 안전 관리자는 진짜 위험 상황에만 집중할 수 있습니다.",
    bullets: [
      "최대 32채널 동시 AI 분석·관제",
      "위험 카테고리 자동 분류 및 알람 리스트업",
      "이벤트 전후 2분 영상 클립 자동 보존",
      "근로자·중장비 간 실제 거리 실시간 측정",
      "모바일 앱으로 현장 밖에서도 즉시 확인",
    ],
    placeholder: { title: "ISafeGuard 32채널 웹 관제 화면", description: "브라우저에서 32개 카메라를 동시에 모니터링하는 실제 대시보드 스크린샷" },
    ctaBg: "bg-blue-600 hover:bg-blue-700",
    bgClass: "bg-white",
  },
  {
    id: "danger-zone",
    reverse: true,
    tag: "동적 위험구역 설정",
    tagColor: "bg-indigo-100 text-indigo-700",
    headline: "오늘 공사 구역이\n바뀌었습니까?\n5초면 반영됩니다",
    subhead: "마우스로 구역을 그리면 그 순간부터 AI가 감지합니다",
    desc: "관리자가 화면 위에 마우스로 구역을 그리면 즉시 AI 감지 영역이 적용됩니다. 타워크레인 인양 범위, 중장비 이동 경로, 당일 위험 공정 구역을 실시간으로 갱신하세요. IT 지식이 필요 없습니다.",
    bullets: [
      "마우스 드래그로 위험구역 즉시 설정",
      "다각형·원형 등 자유로운 구역 형태",
      "구역별 알람 민감도 개별 조정",
      "시간대별 구역 자동 활성화 스케줄",
    ],
    placeholder: { title: "마우스 드래그 위험구역 설정 인터페이스", description: "관리자가 화면 위에 직접 위험구역을 그리는 실제 설정 화면" },
    ctaBg: "bg-indigo-600 hover:bg-indigo-700",
    bgClass: "bg-gray-50",
  },
  {
    id: "vlm-report",
    reverse: false,
    tag: "VLM 자동 보고서",
    tagColor: "bg-teal-100 text-teal-700",
    headline: "보고서 작성에\n매일 2시간씩\n쓰고 계십니까?",
    subhead: "VLM AI가 오늘 현장에서 일어난 일을 보고서로 자동 작성합니다",
    desc: "VLM(Vision Language Model) 엔진이 오늘의 감지 이벤트와 영상을 분석하여 자연어 안전 평가 보고서를 자동으로 작성합니다. 발주처 제출, 내부 보고, 법적 기록을 모두 커버합니다. 관리자는 검토하고 승인만 하면 됩니다.",
    bullets: [
      "VLM AI가 오늘의 감지 이벤트를 자연어로 서술",
      "발주처 제출용 형식으로 자동 포맷팅",
      "위험 등급별 통계 및 반복 위반 패턴 분석",
      "이메일·앱·웹 동시 발행",
    ],
    placeholder: { title: "VLM AI 자동 생성 안전 평가 보고서 샘플", description: "AI가 생성한 자연어 안전 보고서의 실제 출력 화면" },
    ctaBg: "bg-teal-600 hover:bg-teal-700",
    bgClass: "bg-white",
  },
  {
    id: "relearning",
    reverse: true,
    tag: "오탐지 자동 재학습",
    tagColor: "bg-purple-100 text-purple-700",
    headline: "처음엔 100%가\n아니어도 됩니다.\n쓸수록 정확해지니까요",
    subhead: "오탐지를 원클릭으로 피드백하면 AI가 스스로 재학습합니다",
    desc: "관제 중 오탐지를 발견하면 클릭 하나로 피드백을 보냅니다. AI가 자동으로 재학습하여 우리 현장 고유의 정확한 모델로 진화합니다. 시간이 지날수록 오탐지는 줄고 감지 정확도는 올라갑니다.",
    bullets: [
      "오탐지 원클릭 피드백 전송",
      "수집된 피드백으로 백그라운드 자동 재학습",
      "공정별·카메라별 독립 모델 관리",
      "정확도 향상 추적 대시보드",
    ],
    placeholder: { title: "오탐지 피드백 및 AI 재학습 대시보드", description: "원클릭 오탐지 피드백 인터페이스와 모델 재학습 진행 상태 화면" },
    ctaBg: "bg-purple-600 hover:bg-purple-700",
    bgClass: "bg-gray-50",
  },
];

function SolutionTab() {
  return (
    <>
      {solutionFeatures.map((feature) => (
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
                <p className="text-sm font-semibold text-blue-600 mb-3">{feature.subhead}</p>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-lg">{feature.desc}</p>
                <ul className="space-y-3 mb-8">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="mailto:contilab@contilab.co.kr"
                  className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white ${feature.ctaBg} rounded-lg transition-colors w-fit`}
                >
                  도입 문의하기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <ImagePlaceholder title={feature.placeholder.title} description={feature.placeholder.description} aspectRatio="4/3" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

// ───────────── AI 모델 탭 ─────────────

const modelPackages = [
  {
    id: "basic",
    tier: "Basic",
    tierColor: "bg-gray-100 text-gray-700 border-gray-200",
    headerBg: "bg-gradient-to-br from-gray-700 to-gray-900",
    accentColor: "text-gray-600",
    borderColor: "border-gray-200",
    badge: "기본 패키지",
    headline: "어느 현장에서나\n즉시 쓸 수 있는\n필수 감지 모델",
    target: "처음 AI 관제를 도입하는 현장, 공통 공정이 대부분인 중소형 현장",
    valuePoint: "튜닝 없이 설치 당일부터 감지 시작",
    models: [
      { name: "개인 보호구 감지", detail: "안전모 착용 여부 실시간 파악", tags: ["외부비계", "사다리", "크레인", "터파기 등 대부분 공정"] },
      { name: "필수 체결 장비 감지", detail: "안전고리 체결 여부 확인", tags: ["외부비계", "철골 작업"] },
      { name: "안전 인력 배치 감지", detail: "신호수 정상 배치 여부 확인", tags: ["고소작업대", "타워크레인", "지게차 등 장비 운용"] },
      { name: "장비·근로자 충돌 방지", detail: "장비-작업자 간 안전거리 최소 유지 범위 파악", tags: ["터파기", "백호", "지게차"] },
      { name: "현장 기본 안전 수칙", detail: "지게차 제한속도 준수, 소화기 비치 여부", tags: ["물류 및 화기 작업"] },
    ],
    cta: "Basic 패키지 문의",
  },
  {
    id: "pro",
    tier: "Pro",
    tierColor: "bg-blue-600 text-white border-blue-600",
    headerBg: "bg-gradient-to-br from-[#0c2340] to-[#1d6fa4]",
    accentColor: "text-blue-600",
    borderColor: "border-blue-300",
    badge: "기본+특화 패키지",
    headline: "크레인 양중 중\n하방에 사람이 들어가는 것,\nBasic으로는 못 잡습니다",
    target: "타워크레인·고소작업 등 특수 공정이 포함된 중대형 현장",
    valuePoint: "Basic 전체 포함 + 복합 행동 분석·공정별 전문 모델 추가",
    models: [
      { name: "중장비 디테일 감지", detail: "전도방지·침하방지 장치 정상 설치 여부", tags: ["사다리", "이동식 비계", "크레인", "펌프카"] },
      { name: "복합 행동·상태 인식", detail: "비계 이상 오르기, 불안전 자재 밟기 행동 감지", tags: ["외부비계", "고소작업"] },
      { name: "고위험 고소작업 특화", detail: "고소작업대 3인 이상 탑승, 탑승 중 주행 이동 감지", tags: ["고소작업대", "차량 탑재형"] },
      { name: "크레인·양중 특화", detail: "낙하구역 내 작업자 진입 통제, 3초 정지 룰 준수 확인", tags: ["이동식 크레인", "타워크레인"] },
      { name: "가설구조물·환경 안전", detail: "외부비계 상하부 동시작업 통제, 철근캡·개구부 덮개·안전난간 설치 확인", tags: ["외부비계", "개구부", "철근"] },
    ],
    cta: "Pro 패키지 문의",
    popular: true,
  },
  {
    id: "custom",
    tier: "Custom",
    tierColor: "bg-orange-500 text-white border-orange-500",
    headerBg: "bg-gradient-to-br from-[#7c2d12] to-[#ea580c]",
    accentColor: "text-orange-600",
    borderColor: "border-orange-200",
    badge: "맞춤 제작 패키지",
    headline: "다른 현장에서\n학습한 AI는\n우리 현장에 맞지 않습니다",
    target: "특수 장비·자재를 보유한 대형 건설사, 자체 안전 내규가 있는 엔터프라이즈 현장",
    valuePoint: "현장 실측 데이터로 처음부터 학습, 전담 엔지니어 지속 관리",
    models: [
      { name: "커스텀 장비·자재 데이터셋 학습", detail: "기성 모델로 탐지 불가한 특수 시공 자재, 자체 제작 인양박스, 규격 외 중장비 정밀 학습", tags: ["엔터프라이즈 전용"] },
      { name: "현장 전용 복합 룰 베이스", detail: "특정 구역에 장비 2대·근로자 3명 이상 동시 진입 시에만 알람 발생 등 다중 조건 맞춤 로직", tags: ["엔터프라이즈 전용"] },
      { name: "밀착형 오탐지 보정 파이프라인", detail: "역광, 특수 조명, 분진, 특이 카메라 화각 등 현장 고유 환경 변수에 완전 동기화", tags: ["전담 엔지니어 관리"] },
      { name: "지속 파인튜닝 지원", detail: "전담 엔지니어가 오탐지 데이터를 지속 필터링하고 백엔드 모델 가중치 업데이트 유지", tags: ["전담 엔지니어 관리"] },
    ],
    cta: "Custom 패키지 문의",
  },
];

function ModelTab() {
  const [openPackage, setOpenPackage] = useState<string>("pro");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">AI 모델 패키지</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            현장 규모와 공정에 맞는<br className="hidden sm:block" /> AI 모델 패키지를 선택하세요
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            단순 객체 인식부터 복합 행동 분석, 현장 맞춤 학습까지. 116개 AI 디텍터를 3단계로 구조화했습니다.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {modelPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl border-2 ${pkg.borderColor} overflow-hidden relative ${pkg.popular ? "shadow-xl" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  추천
                </div>
              )}

              {/* Header */}
              <div className={`${pkg.headerBg} px-6 pt-6 pb-8`}>
                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${pkg.tierColor} border`}>
                  {pkg.badge}
                </span>
                <h3 className="text-[22px] font-black text-white whitespace-pre-line leading-tight mb-3">
                  {pkg.headline}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">{pkg.target}</p>
              </div>

              {/* Value point */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-start gap-2">
                  <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className={`text-sm font-semibold ${pkg.accentColor}`}>{pkg.valuePoint}</p>
                </div>
              </div>

              {/* Model list toggle */}
              <div className="px-6 py-5">
                <button
                  onClick={() => setOpenPackage(openPackage === pkg.id ? "" : pkg.id)}
                  className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 mb-3"
                >
                  <span>포함 AI 모델 ({pkg.models.length}개)</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${openPackage === pkg.id ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openPackage === pkg.id && (
                  <ul className="space-y-3 mb-5">
                    {pkg.models.map((model) => (
                      <li key={model.name} className="text-sm">
                        <p className="font-semibold text-gray-900 mb-0.5">{model.name}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mb-1">{model.detail}</p>
                        <div className="flex flex-wrap gap-1">
                          {model.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="mailto:contilab@contilab.co.kr"
                  className={`flex items-center justify-center w-full py-2.5 text-sm font-semibold rounded-xl transition-colors border-2 ${
                    pkg.popular
                      ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                      : `border-current ${pkg.accentColor} hover:bg-gray-50`
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
          <p className="text-sm text-blue-700 font-semibold mb-1">패키지 선택이 어려우신가요?</p>
          <p className="text-sm text-blue-600">
            현장 규모와 공정 특성을 공유해 주시면 ConTILab 엔지니어가 직접 적합한 패키지를 추천해 드립니다.
          </p>
          <a
            href="mailto:contilab@contilab.co.kr"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
          >
            패키지 추천 받기
          </a>
        </div>
      </div>
    </section>
  );
}

// ───────────── 디바이스 탭 ─────────────

const hardwareProducts = [
  {
    name: "대형 가속 서버",
    nameEn: "High-Performance NPU Server",
    badge: "최고 성능",
    badgeColor: "bg-blue-100 text-blue-700",
    channels: "32CH",
    target: "대형 건설현장, 동시 관제 채널 수가 많은 현장",
    headline: "현장 전체를 한 서버로 커버합니다",
    desc: "고성능 NPU 보드를 탑재한 대형 가속 서버가 동시 32채널을 정밀 분석합니다. 대형 건설현장의 수십 대 카메라를 단일 장비로 처리합니다.",
    features: ["고성능 지능형 NPU 보드 탑재", "동시 32채널 정밀 AI 분석 처리", "랙 마운트형 설계", "이중화 전원 공급"],
    iconBg: "bg-blue-700",
  },
  {
    name: "중형 컴팩트 서버",
    nameEn: "Compact NPU Server",
    badge: "공간 효율",
    badgeColor: "bg-green-100 text-green-700",
    channels: "16CH",
    target: "공간이 협소한 현장사무소, 중소형 현장",
    headline: "좁은 공간에서도 16채널을 처리합니다",
    desc: "공간이 협소한 현장에 맞춘 컴팩트 섀시로 동시 16채널 가속 처리를 제공합니다. 설치 공간의 제약 없이 AI 관제를 시작하세요.",
    features: ["공간 절약형 컴팩트 섀시", "동시 16채널 AI 가속 처리", "저소음 쿨링 시스템", "간편 설치"],
    iconBg: "bg-green-600",
  },
  {
    name: "단독형 NPU 카메라",
    nameEn: "ISafeGuard-Edge",
    badge: "올인원",
    badgeColor: "bg-orange-100 text-orange-700",
    channels: "독립 운용",
    target: "인터넷이 없는 오지 현장, 이동 설치가 필요한 공정",
    headline: "인터넷도 서버도 없는 현장에서 혼자 작동합니다",
    desc: "LTE 모뎀, 경광등, 고출력 스피커가 내장된 올인원 엣지 카메라입니다. 배터리로 48시간 독자 연산하며 무선 OTA 펌웨어로 원격 업데이트합니다.",
    features: ["LTE 모뎀 내장 (무선 연결)", "경광등·고출력 스피커 탑재", "배터리 기반 48시간 독자 구동", "무선 OTA 펌웨어 업데이트"],
    iconBg: "bg-orange-500",
    image: "/images/moving1.png",
  },
];

function DeviceTab() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">엣지 AI 하드웨어</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            현장 규모에 맞는 엣지 AI 디바이스를 선택하세요
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            소형 현장부터 수십 채널의 대형 현장, 인터넷이 없는 오지 현장까지. 모두 동일한 ISafeGuard 플랫폼으로 관제합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hardwareProducts.map((product) => (
            <div key={product.name} className="rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all overflow-hidden group flex flex-col">
              {"image" in product && product.image ? (
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image as string}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold ${product.badgeColor} rounded-full z-10 shadow-sm`}>
                    {product.badge}
                  </span>
                </div>
              ) : (
                <div className={`${product.iconBg} aspect-[4/3] flex flex-col items-center justify-center gap-3 relative`}>
                  <span className="text-5xl">🖥️</span>
                  <p className="text-white/60 text-sm font-medium">{product.nameEn}</p>
                  <span className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-bold ${product.badgeColor} rounded-full`}>
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">{product.channels}</span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-3">{product.headline}</p>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">적합한 현장: {product.target}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{product.desc}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:contilab@contilab.co.kr"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-xl transition-colors mt-auto"
                >
                  이 제품 문의하기
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Device comparison note */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { label: "서버 장비가 필요 없는 현장", value: "단독형 NPU 카메라" },
              { label: "16채널 이하 중소형 현장", value: "중형 컴팩트 서버" },
              { label: "17채널 이상 대형 현장", value: "대형 가속 서버" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-base font-black text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            현장 환경이 명확하지 않다면 ConTILab 엔지니어가 직접 현장을 방문하여 최적 구성을 제안합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

// ───────────── Main Export ─────────────

export default function ISafeGuardTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("solution");

  return (
    <>
      {/* Sticky Tab Navigation */}
      <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                }`}
              >
                {tab.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                }`}>
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "solution" && <SolutionTab />}
      {activeTab === "model" && <ModelTab />}
      {activeTab === "device" && <DeviceTab />}
    </>
  );
}
