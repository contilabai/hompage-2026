"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    id: "wearable",
    label: "스마트 착용장비",
    emoji: "🦺",
    products: [
      {
        name: "스마트 안전모",
        desc: "AI 기반 안전모 미착용 감지 + 긴급 신고 + 실시간 위치 추적 기능을 갖춘 차세대 안전모입니다.",
        specs: ["미착용 자동 감지 알림", "긴급 SOS 버튼", "GPS 실시간 위치 추적", "충격 감지 알림"],
        highlight: "중대재해처벌법 필수 대응",
        emoji: "🪖",
        color: "bg-yellow-500",
      },
      {
        name: "스마트 밴드",
        desc: "작업자의 체온·심박을 실시간으로 모니터링하고 이상 징후 및 쓰러짐 감지 시 즉시 알림을 발송합니다.",
        specs: ["체온·심박 실시간 모니터링", "쓰러짐·낙상 자동 감지", "이상 징후 즉시 알림", "방수·내구성"],
        highlight: "온열질환 예방",
        emoji: "⌚",
        color: "bg-green-600",
      },
      {
        name: "스마트 안전고리",
        desc: "고소작업 시 안전고리 착용 여부와 고도를 감지하여 추락 사고를 사전에 예방합니다.",
        specs: ["착용 여부 자동 감지", "고도 센서 내장", "충격·진동 감지", "미착용 시 즉시 경보"],
        highlight: "고소작업 필수",
        emoji: "🔗",
        color: "bg-orange-500",
      },
    ],
  },
  {
    id: "site",
    label: "현장 측정장비",
    emoji: "🌡️",
    products: [
      {
        name: "건설현장 체감온도계",
        desc: "온도·습도를 측정하여 체감온도를 자동 계산합니다. 온열질환·한랭질환 예방을 위한 경보를 발송합니다.",
        specs: ["온도·습도 자동 측정", "체감온도 자동 계산", "위험 수준 경보 알림", "데이터 자동 기록"],
        highlight: "여름철 필수 장비",
        emoji: "🌡️",
        color: "bg-red-500",
      },
      {
        name: "복합 가스측정기",
        desc: "4종 유해가스를 실시간으로 모니터링하여 질식 사고를 사전에 예방합니다.",
        specs: ["4종 유해가스 동시 감지", "실시간 농도 표시", "위험 수준 자동 경보", "밀폐공간 작업 필수"],
        highlight: "밀폐공간 필수 장비",
        emoji: "💨",
        color: "bg-purple-600",
      },
      {
        name: "기울기 변위 감지센서",
        desc: "기울기, 충격, 진동을 자동으로 감지하여 구조물 이상 징후 발생 시 관리자에게 즉시 알림을 발송합니다.",
        specs: ["기울기 자동 감지", "진동·충격 감지", "즉시 알림 발송", "실시간 데이터 모니터링"],
        highlight: "붕괴 사고 예방",
        emoji: "📐",
        color: "bg-teal-600",
      },
      {
        name: "중장비 GPS 관제",
        desc: "중장비의 실시간 위치를 추적하고 충돌·과속·사고를 자동으로 감지합니다.",
        specs: ["실시간 위치 추적", "충돌·과속 자동 감지", "이동 경로 기록", "관제 센터 연동"],
        highlight: "중장비 사고 예방",
        emoji: "🏗️",
        color: "bg-gray-700",
      },
    ],
  },
  {
    id: "cctv",
    label: "스마트 CCTV",
    emoji: "📸",
    products: [
      {
        name: "지능형 CCTV",
        desc: "PTZ 기능과 무선 설치를 지원하는 고성능 지능형 CCTV. 빠른 데이터 전송으로 실시간 감시가 가능합니다.",
        specs: ["PTZ 팬틸트 줌", "무선 설치 지원", "고속 데이터 전송", "AI 연동 가능"],
        highlight: "넓은 구역 감시",
        emoji: "📷",
        color: "bg-blue-700",
      },
      {
        name: "이동형 CCTV",
        desc: "배터리 내장 무선 이동형 CCTV. 공정 진행에 따라 자유롭게 위치를 변경할 수 있습니다.",
        specs: ["배터리 내장", "무선 데이터 전송", "간편 이동 설치", "야간 촬영 지원"],
        highlight: "공정 유동성 대응",
        emoji: "🎥",
        color: "bg-slate-600",
      },
      {
        name: "4K CCTV",
        desc: "무선 4K 고화질 영상을 전송하는 CCTV. 세밀한 작업 기록과 증거 영상 확보에 최적화되어 있습니다.",
        specs: ["무선 4K 전송", "초고화질 녹화", "영상기록 법정 제출 가능", "장시간 저장"],
        highlight: "법정 영상기록 적합",
        emoji: "🎬",
        color: "bg-indigo-600",
      },
      {
        name: "열화상 CCTV",
        desc: "열화상 카메라로 야간·불꽃 없는 초기 화재를 감지하여 빠른 대응을 지원합니다.",
        specs: ["초기 화재 감지", "야간 열화상 감지", "즉시 경보 발송", "24시간 모니터링"],
        highlight: "화재 조기 감지",
        emoji: "🔥",
        color: "bg-red-700",
      },
    ],
  },
  {
    id: "camera",
    label: "스마트 카메라",
    emoji: "📱",
    products: [
      {
        name: "포팩트 바디캠",
        desc: "실시간 모니터링 시스템과 연동되는 초소형 바디캠. 현장 상황을 실시간으로 관제 센터에 전송합니다.",
        specs: ["실시간 모니터링 연동", "초소형·경량 설계", "작업자 작업 영상 자동 기록", "앱 연동"],
        highlight: "실시간 현장 모니터링",
        emoji: "📷",
        color: "bg-zinc-700",
      },
      {
        name: "헤드캠",
        desc: "안전모에 장착하는 헤드캠. USB-C 연결 및 앱 연동으로 작업자 시점 영상을 자동으로 기록합니다.",
        specs: ["안전모 장착형", "USB-C 연결", "앱 연동 관리", "자동 영상 업로드"],
        highlight: "작업자 시점 기록",
        emoji: "🎩",
        color: "bg-stone-600",
      },
      {
        name: "바디캠",
        desc: "조끼에 부착하는 전용 바디캠. 전용 앱으로 영상 관리가 가능하며 작업자 활동을 상세히 기록합니다.",
        specs: ["조끼 부착형", "USB-C 연결", "전용 앱 지원", "자동 업로드"],
        highlight: "상세 활동 기록",
        emoji: "📹",
        color: "bg-neutral-700",
      },
      {
        name: "이어캠",
        desc: "귀에 착용하는 초소형 웨어러블 카메라. 앱과 연동하여 세밀한 작업 내용을 기록합니다.",
        specs: ["귀 착용형 초소형", "USB-C 연결", "앱 연동 관리", "장시간 배터리"],
        highlight: "초소형 웨어러블",
        emoji: "👂",
        color: "bg-slate-700",
      },
    ],
  },
];

export default function SmartSafetyPage() {
  const [activeTab, setActiveTab] = useState("wearable");
  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[64px] bg-gradient-to-br from-[#1a0a00] via-[#7c2d12] to-[#ea580c] text-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">스마트 안전장비</span>
                  <span className="px-3 py-1 bg-white/10 text-orange-100 text-xs rounded-full">IoT Safety</span>
                </div>
                <h1 className="text-[38px] lg:text-[48px] font-black text-white leading-tight mb-5">
                  작업자 중심의<br />
                  <span className="text-orange-200">기록 확보</span>와<br />
                  안전관리비 계상
                </h1>
                <p className="text-orange-100 text-base leading-relaxed mb-6 max-w-md">
                  스마트 착용장비부터 현장 측정장비, CCTV, 웨어러블 카메라까지. 작업자 안전을 지키는 스마트 장비 전체 라인업을 만나보세요.
                </p>
                <div className="inline-flex items-center gap-3 bg-white/15 border border-white/20 rounded-xl px-5 py-3 mb-8">
                  <span className="text-2xl font-black text-white">100%</span>
                  <span className="text-sm text-orange-100">안전관리비 계상 가능 제품</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#inquiry"
                    className="px-6 py-3 text-sm font-bold text-orange-800 bg-white hover:bg-orange-50 rounded-xl transition-colors shadow-lg"
                  >
                    무료 상담 신청
                  </Link>
                  <Link
                    href="#products"
                    className="px-6 py-3 text-sm font-bold text-white border border-white/30 hover:border-white rounded-xl transition-colors"
                  >
                    전체 제품 보기 ↓
                  </Link>
                </div>
              </div>

              {/* Right: Equipment grid mockup */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { emoji: "🪖", name: "스마트 안전모", status: "연결됨", statusColor: "text-green-400", detail: "위치 추적 ON" },
                  { emoji: "⌚", name: "스마트 밴드", status: "정상", statusColor: "text-green-400", detail: "심박 72bpm" },
                  { emoji: "🌡️", name: "체감온도계", status: "주의", statusColor: "text-yellow-400", detail: "체감 34°C" },
                  { emoji: "💨", name: "가스측정기", status: "정상", statusColor: "text-green-400", detail: "유해가스 안전" },
                  { emoji: "📷", name: "지능형 CCTV", status: "녹화중", statusColor: "text-blue-400", detail: "4K · AI ON" },
                  { emoji: "🏗️", name: "중장비 GPS", status: "추적중", statusColor: "text-blue-400", detail: "굴착기 #3" },
                ].map((item) => (
                  <div key={item.name} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{item.name}</p>
                      <p className="text-xs text-white/50">{item.detail}</p>
                    </div>
                    <span className={`text-xs font-bold ${item.statusColor} flex-shrink-0`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety cost callout */}
        <section className="bg-orange-600 py-6">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <span className="text-3xl">💰</span>
              <div>
                <p className="text-white font-black text-lg">
                  안전관리비 100% 계상 가능
                </p>
                <p className="text-orange-100 text-sm">
                  스마트 안전장비 도입 비용을 안전관리비로 전액 처리하세요. 정부 스마트 장비 인정 제품입니다.
                </p>
              </div>
              <Link
                href="#inquiry"
                className="flex-shrink-0 px-5 py-2 text-sm font-bold text-orange-600 bg-white hover:bg-orange-50 rounded-lg transition-colors"
              >
                자세히 알아보기
              </Link>
            </div>
          </div>
        </section>

        {/* Product tabs */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">전체 제품 라인업</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">4가지 카테고리, 15종 스마트 장비</h2>
              <p className="text-gray-500">현장의 모든 위험 요소를 커버하는 완전한 스마트 안전 생태계를 구성하세요.</p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === cat.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {active.products.map((product) => (
                <div key={product.name} className="rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all overflow-hidden group">
                  <div className={`${product.color} aspect-square flex flex-col items-center justify-center gap-2 relative`}>
                    <span className="text-5xl">{product.emoji}</span>
                    <span className="px-2.5 py-1 bg-black/30 text-white text-[11px] font-bold rounded-full">
                      {product.highlight}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[15px] font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{product.desc}</p>
                    <ul className="space-y-1.5">
                      {product.specs.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-xs text-gray-600">
                          <svg className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">통합 플랫폼</p>
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  모든 장비 데이터를<br />하나의 대시보드로
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  스마트 안전장비에서 수집된 모든 데이터는 ConTILab 통합 플랫폼으로 자동 전송됩니다. 관리자는 언제 어디서나 현장의 안전 상태를 한눈에 파악할 수 있습니다.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: "📊", text: "작업자별·장비별 실시간 현황 모니터링" },
                    { icon: "🔔", text: "이상 감지 시 관리자 즉시 알림 (앱/SMS/이메일)" },
                    { icon: "📋", text: "안전관리비 계상을 위한 자동 증빙 서류 생성" },
                    { icon: "📈", text: "월별·현장별 안전관리 리포트 자동 생성" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <span className="text-[15px] text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dashboard mockup */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400 ml-2">ConTILab 통합 대시보드 · 현장A동</span>
                </div>
                <div className="p-5 bg-gray-50">
                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "총 작업자", value: "48명", color: "text-blue-600" },
                      { label: "안전 이상", value: "2건", color: "text-red-500" },
                      { label: "장비 가동", value: "31개", color: "text-green-600" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                        <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
                        <p className="text-[11px] text-gray-500">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Worker list */}
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-600">실시간 작업자 현황</p>
                    </div>
                    {[
                      { name: "김철수 (A구역)", status: "정상", statusColor: "text-green-500 bg-green-50", time: "업데이트 1분 전" },
                      { name: "이영희 (B구역)", status: "안전모 미착용", statusColor: "text-red-500 bg-red-50", time: "방금" },
                      { name: "박민수 (C구역)", status: "정상", statusColor: "text-green-500 bg-green-50", time: "업데이트 2분 전" },
                      { name: "최지은 (A구역)", status: "체온 주의", statusColor: "text-yellow-600 bg-yellow-50", time: "업데이트 1분 전" },
                    ].map((w) => (
                      <div key={w.name} className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-50 last:border-0">
                        <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                          {w.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-800 truncate">{w.name}</p>
                          <p className="text-[10px] text-gray-400">{w.time}</p>
                        </div>
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${w.statusColor}`}>
                          {w.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="inquiry" className="py-20 bg-gradient-to-r from-orange-700 to-orange-500 text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-black mb-4">스마트 안전장비 도입 문의</h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">
              현장 규모와 작업 특성에 맞는 최적의 장비 조합을 전문가가 제안합니다.<br />
              안전관리비 계상 방법도 함께 안내해드립니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#"
                className="px-8 py-3.5 text-sm font-bold text-orange-700 bg-white hover:bg-orange-50 rounded-xl transition-colors shadow-lg"
              >
                무료 상담 신청
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
