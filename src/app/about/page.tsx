"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Patent Data ─────────────────────────────────────────────────────────────
const patentDetails = {
  p1: {
    title: "Video-Based Risk Detection AI for Construction Sites",
    desc: "This patent introduces an AI-based risk event recording and analysis system for construction sites. The technology utilizes deep learning-based object detection models, including YOLO-based video analysis, to identify hazardous situations involving workers, equipment, and materials in real time.\n\nThe system determines unsafe conditions by analyzing bounding-box detection frequency, dynamic and static risk factors, and rule-violation events over continuous video frames. The invention enables automatic recording and storage of dangerous events when predefined risk thresholds are exceeded, significantly improving safety monitoring efficiency and reducing manual supervision requirements.",
  },
  p2: {
    title: "Simultaneous Vertical & Horizontal Hazard Detection System",
    desc: "This patent presents a video analytics system capable of simultaneously detecting hazardous activities occurring in both vertical and horizontal workspaces within construction environments. The system identifies multiple object classes from video streams, generates bounding boxes for detected workers and equipment, and evaluates dangerous conditions according to task-specific risk scenarios.\n\nBy analyzing consecutive frames over a defined period, the system determines whether a hazardous event has occurred and records the event automatically. The invention is particularly effective for detecting falls, overhead work risks, crane-related hazards, and unsafe interactions between workers and heavy machinery.",
  },
  p3: {
    title: "Dynamic Object Collision Prediction for Industrial Safety",
    desc: "This patent proposes a predictive safety monitoring technology capable of forecasting collisions between moving objects in industrial environments. The system analyzes trajectories, movement patterns, and spatial relationships between workers, vehicles, and machinery to predict potential collision risks before accidents occur.\n\nThe invention enhances proactive safety management by providing early warning notifications and automated monitoring functions for industrial facilities and construction sites.",
  },
  p4: {
    title: "AI Camera & Cloud-Based Safety Monitoring System",
    desc: "This invention describes an integrated AI camera and cloud server platform for industrial site safety monitoring. The system combines intelligent video acquisition, AI-based hazard analysis, and cloud-based centralized management to provide scalable safety monitoring across multiple industrial sites.\n\nThe platform supports real-time video analytics, abnormal event detection, worker activity monitoring, and remote management functions.",
  },
  p5: {
    title: "Lightweight AI Optimization for Mobile Applications",
    desc: "This patent introduces a lightweight AI optimization method designed for mobile and edge devices operating under limited computing resources. Using TensorFlow Lite-based lightweight runtime architectures, the invention minimizes computational overhead while maintaining efficient deep-learning inference performance on CPUs and NPUs.\n\nThe optimized AI model enables real-time risk detection on smartphones and embedded edge devices, supporting industrial safety applications where low latency and reduced power consumption are essential.",
  },
  p6: {
    title: "BIM-Based Optimal Camera Placement System",
    desc: "This patent provides a BIM-integrated simulation system for optimizing surveillance camera placement within construction sites. The technology extracts geometric and scheduling information from 4D BIM models and generates virtual construction site layouts reflecting time-dependent construction progress.\n\nThe system simulates surveillance coverage areas using virtual camera models and automatically generates optimal camera deployment plans according to construction stages.",
  },
  p7: {
    title: "AI-Based Construction Accident Prediction System",
    desc: "This patent utilizes image recognition and AI-based analysis techniques to predict potential accidents in construction environments. By analyzing visual patterns, worker behavior, and environmental conditions, the system identifies high-risk situations before accidents occur.\n\nThe technology supports intelligent safety decision-making by continuously monitoring site conditions and generating predictive risk assessments.",
  },
  p8: {
    title: "Safety Compliance Management Platform",
    desc: "This invention provides a digital platform for verifying compliance with construction safety guidelines and operational procedures. The server-based system automatically checks work activities against predefined safety regulations and operational standards.\n\nThe platform improves construction safety governance by enabling automated compliance auditing, safety documentation management, and real-time monitoring of procedural violations.",
  },
  p9: {
    title: "Blockchain-Based Construction Quality Management System",
    desc: "This patent introduces a blockchain-based quality management framework for construction projects. The system securely stores quality management records including photos, videos, BIM data, sensor information, and work documentation, while preventing tampering and unauthorized modifications.\n\nBy storing data hashes and verification records on a blockchain network while maintaining original data in off-chain databases, the system ensures transparency, traceability, and reliability.",
  },
  p10: {
    title: "Industrial Safety Monitoring Edge Device & Cloud System",
    desc: "This patent describes an edge AI-based industrial safety monitoring architecture combining edge devices, cloud servers, and intelligent analytics systems. The platform performs real-time AI inference directly on edge devices while synchronizing critical monitoring data with cloud infrastructure.\n\nThe system minimizes latency, reduces network traffic, and enables scalable deployment of intelligent safety monitoring services across industrial and construction sites.",
  },
  p11: {
    title: "PTZ Camera Control-Based Risk Event Detection Technology",
    desc: "This invention provides an intelligent PTZ (Pan-Tilt-Zoom) camera control system capable of dynamically tracking hazardous situations in industrial environments. The technology automatically adjusts camera direction and zoom levels according to detected risk events, enabling more precise monitoring of workers, equipment, and hazardous zones.\n\nBy integrating AI-based event recognition with automated PTZ control, the system improves surveillance responsiveness and enhances detection accuracy.",
  },
  p12: {
    title: "Virtual Data Generation for Construction Safety",
    desc: "This patent generates synthetic 3D virtual construction environments using game-engine-based simulations and 3D object models. The technology automatically creates labeled training datasets for AI safety systems by simulating interactions among workers, equipment, and construction objects.\n\nThe generated virtual datasets improve AI training efficiency, support rare hazard scenario generation, and enhance the accuracy of safety-related computer vision models.",
  },
  p13: {
    title: "Linked Data-Based Safety Information Sharing Platform",
    desc: "This patent establishes a linked-data framework for integrating and sharing construction safety information across distributed organizations and systems. The platform combines BIM data, unstructured web data, accident cases, technical documents, and safety regulations into a unified RDF-based knowledge structure.\n\nThe system supports semantic reasoning and SPARQL-based information retrieval, enabling intelligent safety knowledge sharing.",
  },
  p14: {
    title: "Blockchain-Based Facility Procurement & Installation Management System",
    desc: "This patent introduces a blockchain-enabled integrated management platform for procurement, installation, inspection, and lifecycle management of construction facilities and materials. The system assigns role-based permissions to stakeholders and validates process integrity through blockchain-based comparison and verification mechanisms.\n\nThe technology improves transparency, trustworthiness, and traceability throughout the construction supply chain.",
  },
};

type Tab = "company" | "credentials" | "careers";

// ─── CheckIcon ────────────────────────────────────────────────────────────────
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>("company");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", desc: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
    }, 60);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeTab]);

  const openModal = (title: string, desc: string) => {
    setModalContent({ title, desc });
    setModalOpen(true);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "company", label: "회사 소개" },
    { id: "credentials", label: "인증 & 특허" },
    { id: "careers", label: "채용" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ── 페이지 헤더 ──────────────────────────────────────── */}
        <section className="pt-[64px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-20 lg:py-28">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">About</p>
            <h1 className="text-[40px] lg:text-[56px] font-black leading-tight mb-5">
              ConTI Lab Co., Ltd.
            </h1>
            <p className="text-blue-200 text-base max-w-xl leading-relaxed">
              Connecting Innovation, Protecting Lives — 2022년 중앙대학교에서 시작한 iSafe 플랫폼 전문 스타트업입니다.
            </p>
          </div>
        </section>

        {/* ── 탭 네비게이션 ────────────────────────────────────── */}
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex gap-0 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-amber-500 border-amber-400"
                      : "text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            TAB: 회사 소개
        ══════════════════════════════════════════════════════ */}
        {activeTab === "company" && (
          <>
            {/* Vision */}
            <section className="py-20 bg-white" id="contilab">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="reveal">
                    <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Our Vision</p>
                    <div className="w-12 h-0.5 bg-amber-400 mb-8" />
                    <p className="text-xs text-gray-400 mb-4">ConTI Lab Founder, Chan-sik Park</p>
                    <div className="relative max-w-xs aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                      <Image
                        src="/legacy-images/founder-park-chansik.png"
                        alt="박찬식 교수 (ConTI Lab 창업자)"
                        fill
                        className="object-cover object-top"
                        sizes="320px"
                      />
                    </div>
                  </div>
                  <div className="reveal d1">
                    <h2 className="text-[28px] lg:text-[34px] font-black text-gray-900 leading-tight mb-6">
                      Connecting Innovation, Protecting Lives.<br />
                      <span className="text-amber-500">ConTI Lab</span>이 함께 만드는<br />
                      안전의 가치
                    </h2>
                    <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                      2022년 중앙대학교 건설기술혁신연구실에서 설립된 ConTI Lab은 산업 현장의 사고를 예방하기 위한 iSafe 플랫폼을 적극적으로 개발하고 있습니다.
                    </p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                        <span>
                          <span className="font-semibold">iSafe-Guard</span> — AI 기반 컴퓨터 비전으로 실시간 위험 감지를 자동화하여 근로자 안전을 강화합니다.
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                        <span>
                          <span className="font-semibold">iSafe-Meta</span> — 토큰 기반 인센티브 시스템으로 구동되는 안전 평가 및 전문가 협업을 위한 실감형 메타버스입니다.
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 italic">
                      &ldquo;Towards Zero-Accidents at Jobsites&rdquo; — 기술 중심, 근로자 주도의 산업 안전 미래를 만들어 갑니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Partners Banner */}
            <section id="partners" className="relative py-24 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/legacy-images/bg-construction-site.png"
                  alt="건설현장 배경"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[#0d1b2a]/80" />
              </div>
              <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Mission</p>
                <h2 className="text-[36px] lg:text-[48px] font-black text-white mb-5">
                  Safe Sites, Smarter AI
                </h2>
                <p className="text-blue-200 text-base max-w-lg mx-auto leading-relaxed">
                  현장에 특화된 AI로 실시간 위험을 감지합니다.<br />
                  파트너와 함께 진화하며 무사고 현장을 만들어 갑니다.
                </p>
              </div>
            </section>

            {/* Partners Grid */}
            <section className="py-20 bg-white">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-14">
                <div className="reveal">
                  <h3 className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">Public Agency</h3>
                  <div className="w-8 h-0.5 bg-amber-400 mb-6" />
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "ex 한국도로공사", color: "text-red-600" },
                      { name: "서울특별시\n도시기반시설본부", color: "" },
                      { name: "국토안전관리원", color: "text-green-700" },
                      { name: "SH 서울주택도시공사", color: "" },
                      { name: "경기주택도시공사", color: "" },
                    ].map((p) => (
                      <div key={p.name} className="px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-center whitespace-pre-line leading-snug">
                        <span className={p.color || "text-gray-700"}>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal d1">
                  <h3 className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">Private Company</h3>
                  <div className="w-8 h-0.5 bg-amber-400 mb-6" />
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "금호건설", color: "" },
                      { name: "SK ecoplant", color: "text-orange-600" },
                      { name: "SK Nexilis", color: "text-orange-600" },
                      { name: "DL E&C", color: "" },
                      { name: "APPROTIUM", color: "" },
                      { name: "ISC", color: "" },
                    ].map((p) => (
                      <div key={p.name} className="px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold">
                        <span className={p.color || "text-gray-700"}>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reveal d2">
                  <h3 className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">Collaboration Tech Company</h3>
                  <div className="w-8 h-0.5 bg-amber-400 mb-6" />
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Deeper-I", color: "" },
                      { name: "SimPlatform", color: "" },
                      { name: "HANLIM", color: "" },
                      { name: "RiskZero", color: "text-red-600" },
                      { name: "씨아이솔루션", color: "" },
                      { name: "AIChemist", color: "" },
                      { name: "musma", color: "" },
                    ].map((p) => (
                      <div key={p.name} className="px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold">
                        <span className={p.color || "text-gray-700"}>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* History Timeline */}
            <section className="py-20 bg-gray-50" id="history">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

                {/* Section header */}
                <div className="mb-16 reveal">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">History</p>
                  <h2 className="text-3xl font-black text-gray-900 mb-3">Our Journey</h2>
                  <div className="w-12 h-0.5 bg-amber-400 mb-5" />
                  <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
                    중앙대학교 건설기술혁신연구실의 20년 연구가 쌓인 토대 위에, ConTI Lab은 iSafePlatform으로 스마트 건설 안전의 새로운 기준을 만들어 갑니다.
                  </p>
                </div>

                {/* Phase 1: 연구 기반 */}
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8 reveal">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm">
                      <span className="text-xs font-black text-white">1</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Phase 1 · 2003 – 2019</p>
                      <p className="text-lg font-black text-gray-900 leading-tight">연구 기반 구축</p>
                    </div>
                    <div className="flex-1 h-px bg-blue-100 hidden sm:block" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:ml-14">
                    {[
                      { period: "2003 – 2005", title: "결합형 안전관리시스템 구축", desc: "건설현장관리를 위한 결합형 안전관리시스템 구축 연구 수행" },
                      { period: "2004 – 2009", title: "건설프로젝트 분류체계 연구", desc: "건설프로젝트 분류체계 및 사전제어모델 구축에 관한 연구" },
                      { period: "2009 – 2013", title: "BIM 기반 현장관리시스템 개발", desc: "BIM PDA 기반 지식과 건설현장관리시스템 개발" },
                      { period: "2016 – 2019", title: "Linked Data 건설안전 플랫폼", desc: "Linked Data 기반 건설안전 소셜 네트워크 플랫폼 개발" },
                    ].map((item) => (
                      <div key={item.period} className="reveal bg-white rounded-xl border border-blue-50 p-5 hover:border-blue-200 transition-colors">
                        <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-500 rounded text-[10px] font-bold mb-2">{item.period}</span>
                        <p className="text-sm font-bold text-gray-800 mb-1.5">{item.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase 2: AI 전환 & 창업 준비 */}
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8 reveal">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm">
                      <span className="text-xs font-black text-white">2</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Phase 2 · 2020 – 2022</p>
                      <p className="text-lg font-black text-gray-900 leading-tight">AI 기술 전환 & 창업 준비</p>
                    </div>
                    <div className="flex-1 h-px bg-orange-100 hidden sm:block" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:ml-14">
                    {[
                      { period: "2020 – 2022", title: "Vision AI 건설안전 연구 집중", desc: "Vision AI 기반 건설안전 시스템 개발 연구 집중 수행 — 건설 현장 위험 상태 판단 데이터 수집 착수" },
                      { period: "2020 – 2022", title: "블록체인 안전 플랫폼 개발", desc: "블록체인 기반 건설안전 소셜 플랫폼 개발 및 직업창안 인전 데이터 수집" },
                      { period: "2021 – 2022", title: "메타버스 훈련 플랫폼 개발", desc: "메타버스 기반 건설안전 훈련 환경 개발 — iSafeMeta의 원형 연구 착수" },
                    ].map((item) => (
                      <div key={item.title} className="reveal bg-white rounded-xl border border-orange-50 p-5 hover:border-orange-200 transition-colors">
                        <span className="inline-block px-2 py-0.5 bg-orange-50 text-orange-500 rounded text-[10px] font-bold mb-2">{item.period}</span>
                        <p className="text-sm font-bold text-gray-800 mb-1.5">{item.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase 3: 창업 & 성장 */}
                <div>
                  <div className="flex items-center gap-4 mb-8 reveal">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-sm">
                      <span className="text-xs font-black text-white">3</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Phase 3 · 2022 – 현재</p>
                      <p className="text-lg font-black text-gray-900 leading-tight">창업 & 성장</p>
                    </div>
                    <div className="flex-1 h-px bg-amber-200 hidden sm:block" />
                  </div>

                  <div className="relative sm:ml-14">
                    <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-amber-200 hidden sm:block" />
                    <div className="space-y-8">
                      {[
                        {
                          year: "2022",
                          title: "ConTI Lab Co., Ltd. 설립",
                          tags: ["창업"],
                          accent: "bg-amber-400",
                          bullets: [
                            "중앙대학교 건설기술혁신연구실에서 스핀오프 창업",
                            "iSafe 플랫폼 개발을 위한 시드 투자 유치",
                            "건설 현장 위험 상태 판단 데이터 수집 본격화",
                          ],
                          delay: "",
                        },
                        {
                          year: "2023",
                          title: "iSafeGuard 출시 & KTL 인증 취득",
                          tags: ["기술인증", "제품출시"],
                          accent: "bg-amber-400",
                          bullets: [
                            "컴퓨터 비전 AI 기반 120개+ 위험 시나리오 감지 엔진 구축",
                            "Unity 기반 합성 데이터 학습 파이프라인 구축",
                            "KTL 성능 인증 취득 — 20 FPS 이상, F1-score 0.90+",
                            "디지털 건설안전모델 개발 과제 착수",
                          ],
                          delay: "d1",
                        },
                        {
                          year: "2024",
                          title: "iSafeMeta & iSafeLLM 출시",
                          tags: ["플랫폼 확장", "AI 모델"],
                          accent: "bg-amber-400",
                          bullets: [
                            "Gaussian Splatting 기반 iSafeMeta Reality Capture 플랫폼 출시",
                            "20개국 언어 지원 iSafeLLM 온톨로지 언어 모델 개발",
                            "영상 AI 기반 산업현장 작업자 실시간 모니터링 과제 착수",
                            "산업안전 중대재해 저감 온디바이스 AI 솔루션 R&D 개시",
                          ],
                          delay: "d2",
                        },
                        {
                          year: "2025",
                          title: "ONYCOM 검증 완료 & 글로벌 확장",
                          tags: ["인증완료", "특허 29건"],
                          accent: "bg-amber-400",
                          bullets: [
                            "ONYCOM AI 모델 검증 완료 — mAP 0.751, F1-score 0.824",
                            "자체 보유 9건 + 산학협력단 20건, 총 29건 특허 등록",
                            "공동주택 고층화 기술개발사업(OSC) 참여",
                            "국내외 현장 배포 확장 및 글로벌 시장 진출",
                          ],
                          delay: "d3",
                        },
                      ].map((item) => (
                        <div key={item.year} className={`reveal ${item.delay} flex gap-6 sm:gap-8 items-start`}>
                          <div className="flex-shrink-0 relative z-10">
                            <div className={`w-10 h-10 rounded-full ${item.accent} flex items-center justify-center shadow-md`}>
                              <span className="text-[10px] font-black text-white leading-none">{item.year.slice(2)}</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex-1 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <p className="text-xs font-bold text-amber-500">{item.year}</p>
                              {item.tags.map((tag) => (
                                <span key={tag} className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full text-[10px] font-semibold border border-amber-100">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <p className="text-base font-bold text-gray-900 mb-3">{item.title}</p>
                            <ul className="space-y-1.5">
                              {item.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-500">
                                  <span className="w-1 h-1 rounded-full bg-amber-300 flex-shrink-0 mt-[7px]" />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* R&D */}
            <section className="py-20 bg-white" id="rnd">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="mb-14 reveal">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">R&D History</p>
                  <h2 className="text-3xl font-black text-gray-900 mb-3">Core Research Areas</h2>
                  <div className="w-12 h-0.5 bg-amber-400" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="reveal d1 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/legacy-images/isafeguard-detection-demo.png"
                        alt="AI 기반 현장 위험 감지"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Computer Vision</span>
                      </div>
                      <p className="text-base font-bold text-gray-900 mb-3">위험 감지 알고리즘</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        객체 인식 + 다중 알고리즘 로직: Tracking, Height Estimation, Edge Detection, Background Subtraction, Object Relationships, Coordinate Identification.
                      </p>
                    </div>
                  </div>

                  <div className="reveal d2 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="relative aspect-video overflow-hidden bg-gray-900">
                      <img
                        src="/legacy-images/synthetic-data-unity-sim.gif"
                        alt="Unity 기반 합성 데이터 생성 파이프라인"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Synthetic Data</span>
                      </div>
                      <p className="text-base font-bold text-gray-900 mb-3">Unity 기반 학습 데이터 파이프라인</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        3D 메쉬 현장 모델 + 가상 시나리오 시뮬레이션으로 대규모 어노테이션 데이터셋을 생성하여 실제 데이터 수집 비용을 획기적으로 절감.
                      </p>
                    </div>
                  </div>

                  <div className="reveal d1 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="relative overflow-hidden bg-[#f5b800]">
                      <Image
                        src="/legacy-images/isafemeta-tech-banner.png"
                        alt="ISafeMeta Reality Capture + Conversational AI 통합 기술"
                        width={1100}
                        height={242}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Reality Capture</span>
                      </div>
                      <p className="text-base font-bold text-gray-900 mb-3">Gaussian Splatting 파이프라인</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        드론 기반 사진측량과 Gaussian Splatting으로 실제 현장에서 비용 효율적인 몰입형 3D 메쉬 환경을 생성.
                      </p>
                    </div>
                  </div>

                  <div className="reveal d2 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src="/legacy-images/isafellm-vlm-report.png"
                        alt="iSafeLLM — VLM 기반 현장 안전 평가 보고서 자동 생성"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Safety LLM</span>
                      </div>
                      <p className="text-base font-bold text-gray-900 mb-3">iSafeLLM</p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        안전 규칙, 법령, 기준, 매뉴얼, 사고 보고서로 학습한 온톨로지 강화 언어 모델. 20개국 이상 언어 멀티링구얼 아바타 지원.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b2a3b] text-white">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Contact</p>
                <h2 className="text-3xl font-black mb-5">파트너십 및 기술 협력 문의</h2>
                <p className="text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
                  ConTILab은 공공기관 및 국내외 탑티어 건설사들과 협력하며 기술 검증을 완료했습니다.<br />
                  도입 상담, 공동 연구, 파트너십 제안을 환영합니다.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
                  >
                    contilab@contilab.co.kr
                  </a>
                  <Link
                    href="/platform"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    ISafePlatform 보기
                  </Link>
                </div>
                <p className="text-blue-300/60 text-xs mt-6">
                  서울특별시 동작구 흑석로 84 중앙대학교 208관 201호
                </p>
              </div>
            </section>
          </>
        )}

        {/* ══════════════════════════════════════════════════════
            TAB: 인증 & 특허
        ══════════════════════════════════════════════════════ */}
        {activeTab === "credentials" && (
          <>
            {/* Certifications */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="mb-14 reveal">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Certifications</p>
                  <h2 className="text-3xl font-black text-gray-900 mb-3">시험성적서 및 인증</h2>
                  <div className="w-12 h-0.5 bg-amber-400 mb-4" />
                  <p className="text-sm text-gray-500 max-w-2xl">
                    국내 공인 시험 기관의 성능 검증을 통해 iSafe 플랫폼의 기술적 신뢰성을 입증합니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left: cert list */}
                  <div className="space-y-6">
                    <div className="reveal bg-white rounded-2xl border border-gray-100 p-6">
                      <p className="text-base font-bold text-gray-900 mb-1">
                        KTL 성능 인증
                        <span className="ml-2 text-sm font-normal text-gray-400">(2023.12)</span>
                      </p>
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          실시간 감지: 20 FPS 이상 검증
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          위험 식별 F1-score 0.90 이상
                        </li>
                      </ul>
                    </div>

                    <div className="reveal d1 bg-white rounded-2xl border border-gray-100 p-6">
                      <p className="text-base font-bold text-gray-900 mb-1">
                        ONYCOM AI 모델 검증
                        <span className="ml-2 text-sm font-normal text-gray-400">(2025.12)</span>
                      </p>
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          mAP 0.751, F1-score 0.824
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          PPE, 중장비 포함 10개 이상 위험 시나리오
                        </li>
                      </ul>
                    </div>

                    <div className="reveal d2 bg-white rounded-2xl border border-gray-100 p-6">
                      <p className="text-base font-bold text-gray-900 mb-3">지식재산권 및 특허</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          자체 보유 9건 + 산학협력 20건, 총 29건 특허
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          수직·수평 위험 감지 및 경량 AI 최적화 기술
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right: cert images */}
                  <div className="reveal d1 flex flex-col gap-6 pt-4">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                      <Image
                        src="/legacy-images/cert-ktl.png"
                        alt="KTL 시험성적서"
                        fill
                        className="object-contain bg-white p-2"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                      <Image
                        src="/legacy-images/cert-onycom.png"
                        alt="ONYCOM AI 모델 검증 결과"
                        fill
                        className="object-contain bg-white p-2"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Patents */}
            <section className="py-20 bg-white">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="mb-14 reveal">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Intellectual Property</p>
                  <h2 className="text-3xl font-black text-gray-900 mb-3">Representative Patents</h2>
                  <div className="w-12 h-0.5 bg-amber-400 mb-6" />
                  <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
                    ConTILab은 스마트 건설 및 산업 안전 환경을 위한 첨단 AI 기술을 개발합니다. 특허 포트폴리오는 실시간 위험 감지, Edge AI 모니터링, 지능형 감시 및 스마트 인프라 관리에 집중되어 있습니다.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    자체 보유 9건 + 중앙대학교 산학협력단 공동 20건, 총 29건의 특허를 보유하고 있습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      tag: "AI Safety & Monitoring",
                      delay: "d1",
                      items: [
                        { key: "p1" as keyof typeof patentDetails, label: "Video-Based Risk Detection AI for Construction Sites" },
                        { key: "p2" as keyof typeof patentDetails, label: "Simultaneous Vertical & Horizontal Hazard Detection System" },
                        { key: "p3" as keyof typeof patentDetails, label: "Dynamic Object Collision Prediction for Industrial Safety" },
                        { key: "p4" as keyof typeof patentDetails, label: "AI Camera & Cloud-Based Safety Monitoring System" },
                        { key: "p5" as keyof typeof patentDetails, label: "Lightweight AI Optimization for Mobile Applications" },
                      ],
                    },
                    {
                      tag: "Smart Construction & Infrastructure",
                      delay: "d2",
                      items: [
                        { key: "p6" as keyof typeof patentDetails, label: "BIM-Based Optimal Camera Placement System" },
                        { key: "p7" as keyof typeof patentDetails, label: "AI-Based Construction Accident Prediction System" },
                        { key: "p8" as keyof typeof patentDetails, label: "Safety Compliance Management Platform" },
                        { key: "p9" as keyof typeof patentDetails, label: "Blockchain-Based Construction Quality Management System" },
                      ],
                    },
                    {
                      tag: "Edge AI & Intelligent Surveillance",
                      delay: "d1",
                      items: [
                        { key: "p10" as keyof typeof patentDetails, label: "Industrial Safety Monitoring Edge Device & Cloud System" },
                        { key: "p11" as keyof typeof patentDetails, label: "PTZ Camera Control-Based Risk Event Detection Technology" },
                      ],
                    },
                    {
                      tag: "Additional Smart Safety",
                      delay: "d2",
                      items: [
                        { key: "p12" as keyof typeof patentDetails, label: "Virtual Data Generation for Construction Safety" },
                        { key: "p13" as keyof typeof patentDetails, label: "Linked Data-Based Safety Information Sharing Platform" },
                        { key: "p14" as keyof typeof patentDetails, label: "Blockchain-Based Facility Procurement & Installation Management System" },
                      ],
                    },
                  ].map((group) => (
                    <div key={group.tag} className={`reveal ${group.delay} bg-gray-50 rounded-2xl border border-gray-100 p-7`}>
                      <div className="flex items-center gap-2 mb-5">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{group.tag}</span>
                      </div>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.key}>
                            <button
                              onClick={() => openModal(patentDetails[item.key].title, patentDetails[item.key].desc)}
                              className="text-left text-sm text-gray-700 hover:text-blue-600 transition-colors leading-relaxed w-full flex items-start gap-2 group"
                            >
                              <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ══════════════════════════════════════════════════════
            TAB: 채용
        ══════════════════════════════════════════════════════ */}
        {activeTab === "careers" && (
          <>
            {/* 채용 인트로 배너 */}
            <section className="py-20 bg-white">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="reveal max-w-3xl">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-4">Careers</p>
                  <h2 className="text-[32px] lg:text-[40px] font-black text-gray-900 leading-tight mb-6">
                    함께 안전의 미래를 만들<br />
                    <span className="text-amber-500">인재를 모십니다</span>
                  </h2>
                  <div className="w-12 h-0.5 bg-amber-400 mb-8" />
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                    인력은 부족하고 책임은 무거운 산업 현장, 콘티랩은 자율 진화형 통합 안전 플랫폼인 iSafePlatform을 통해 스마트 건설 안전의 새로운 패키지 기준을 제시합니다.
                  </p>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    현장과 근로자의 생명을 지키는 가치 있는 여정에 몰입할 경력자 분들의 많은 지원을 바랍니다. 본 채용은 우수 인재 영입을 위한 <strong className="text-gray-800">상시 채용</strong>으로 진행됩니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 공통 근무 조건 */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="mb-10 reveal">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Common Conditions</p>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">공통 근무 조건 및 전형 안내</h3>
                  <div className="w-10 h-0.5 bg-amber-400" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "근무 형태",
                      value: "정규직",
                      sub: "수습기간 3개월 적용",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: "근무 지역",
                      value: "서울 동작구",
                      sub: "중앙대학교 208관 201호",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ),
                      label: "채용 유형",
                      value: "경력 상시채용",
                      sub: "2년 차 ~ 10년 차",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ),
                      label: "지원 방법",
                      value: "이력서 + 포트폴리오",
                      sub: "사람인 전용 접수 링크",
                    },
                  ].map((item) => (
                    <div key={item.label} className="reveal bg-white rounded-2xl border border-gray-100 p-6">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 mb-4">
                        {item.icon}
                      </div>
                      <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                      <p className="text-base font-bold text-gray-900">{item.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 채용 부문 */}
            <section className="py-20 bg-white">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="mb-14 reveal">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Open Positions</p>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">채용 부문 명세</h3>
                  <div className="w-10 h-0.5 bg-amber-400" />
                </div>

                <div className="space-y-10">
                  {/* AI Engineer */}
                  <div className="reveal bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0d1b2a] to-[#1a3050] p-8 text-white">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-3">경력 2~10년</span>
                          <h4 className="text-[22px] font-black leading-tight mb-2">AI Engineer</h4>
                          <p className="text-blue-200 text-sm">Vision &amp; Automation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-blue-300/70">상시채용</p>
                        </div>
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed mt-4 max-w-2xl">
                        콘티랩의 고성능 영상 분석 인프라인 iSafeGuard 엔진을 고도화하고, 현장 맞춤형 인공지능 모델을 최적화하여 엣지 디바이스와 서버에 배포하는 업무를 담당합니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                      {/* 주요 업무 */}
                      <div className="p-7">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">주요 업무</span>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "YOLO, SegFormer 등 최신 비전 알고리즘 기반 객체 탐지 및 행동 인식 모델 개발",
                            "공정별 특화 딥러닝 가중치 학습 및 배포 (외부비계, 크레인, 상부 슬래브 등)",
                            "오탐지 프레임 자동 재학습 파이프라인 구축",
                            "멀티모달 VLM / LLM 기반 일일 안전 보고서 자동 생성 고도화",
                          ].map((v) => (
                            <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 자격 요건 */}
                      <div className="p-7">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                          <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">자격 요건</span>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "관련 분야 실무 경력 2년 이상 10년 이하",
                            "Python 및 PyTorch 등 딥러닝 프레임워크 숙련자",
                            "컴퓨터 비전 모델 라이브러리 핸들링 및 파인 튜닝 유경험자",
                            "오픈소스 및 외부 API 연동 AI 자동화 역량 보유자",
                          ].map((v) => (
                            <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 우대 사항 */}
                      <div className="p-7 bg-amber-50/40">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="w-2 h-2 rounded-full bg-orange-400" />
                          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">우대 사항</span>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "컴퓨터공학, 인공지능학 등 관련 학과 학위 보유자",
                            "TensorRT, TFLite 등 NPU/엣지 디바이스 최적화 경험자",
                            "메시지 큐 기반 마이크로서비스 및 MLOps 파이프라인 구축 경험자",
                          ].map((v) => (
                            <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Project Manager */}
                  <div className="reveal d1 bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#1a2a1a] to-[#1e3a1e] p-8 text-white">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-green-400/20 text-green-300 text-xs font-semibold mb-3">경력 2~10년</span>
                          <h4 className="text-[22px] font-black leading-tight mb-2">건설 안전 프로젝트 매니저</h4>
                          <p className="text-green-200 text-sm">Project Manager</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-green-300/70">상시채용</p>
                        </div>
                      </div>
                      <p className="text-green-100 text-sm leading-relaxed mt-4 max-w-2xl">
                        BIM 기반 스케줄러인 iSafePlanner와 현장 관제 시스템인 iSafeGuard가 건설 현장에 유기적으로 결합되도록 프로젝트 전체를 리딩하고 결정권자들과 소통하는 업무를 담당합니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                      {/* 주요 업무 */}
                      <div className="p-7">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">주요 업무</span>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "iSafePlatform 현장 도입 프로세스 총괄 및 공정별 마일스톤 관리",
                            "엣지 하드웨어 (가속 서버·NPU 카메라 등) 현장 배치 계획 수립",
                            "안전팀장·현장소장·발주처 담당자 요구사항 수렴 및 커스텀 솔루션 조율",
                            "WBS 데이터 및 도면 분석 기반 동적 위험도 평가 가이드라인 수립",
                          ].map((v) => (
                            <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 자격 요건 */}
                      <div className="p-7">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                          <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">자격 요건</span>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "관련 분야 실무 경력 2년 이상 10년 이하",
                            "건설 현장 안전·시공 관리 또는 스마트 건설 기술 프로젝트 리딩 경험자",
                            "AI 비전 솔루션 및 디지털 트윈 플랫폼 메커니즘 이해 및 실무 활용 능력",
                            "다양한 이해관계자와의 서술형 소통 및 협상 능력 보유자",
                          ].map((v) => (
                            <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 우대 사항 */}
                      <div className="p-7 bg-amber-50/40">
                        <div className="flex items-center gap-2 mb-5">
                          <span className="w-2 h-2 rounded-full bg-orange-400" />
                          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">우대 사항</span>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "건축공학, 안전공학 등 관련 학과 전공자",
                            "건설안전기사, 산업안전기사 등 자격증 소지자",
                            "2D dxf 도면 이해 또는 3D IFC 모델·WBS 공정 관리 기초 지식 보유자",
                            "스마트 건설 스타트업 또는 B2B 엔터프라이즈 기술 영업 경험자",
                          ].map((v) => (
                            <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 성장 환경 */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                <div className="mb-14 reveal">
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Why ConTI Lab</p>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">콘티랩이 제공하는 성장 환경</h3>
                  <div className="w-10 h-0.5 bg-amber-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: "기술적 몰입 지원",
                      desc: "고성능 가속 서버 및 최신 AI 하드웨어 연구 환경을 전폭적으로 지원합니다.",
                      color: "text-blue-500 bg-blue-50",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                      title: "주도적 역할 보장",
                      desc: "관료적인 승인 절차를 최소화하고, 실무자가 진짜 중요한 연구와 문제 해결에 집중할 수 있는 파이프라인을 지향합니다.",
                      color: "text-amber-500 bg-amber-50",
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      ),
                      title: "산학협력 네트워크",
                      desc: "중앙대학교 인프라를 기반으로 한 안정적인 R&D 환경과 탑티어 건설사 및 공공기관 파트너십 협업 기회를 제공합니다.",
                      color: "text-green-500 bg-green-50",
                    },
                  ].map((item) => (
                    <div key={item.title} className="reveal bg-white rounded-2xl border border-gray-100 p-8">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} mb-6`}>
                        {item.icon}
                      </div>
                      <p className="text-base font-bold text-gray-900 mb-3">{item.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 채용 CTA */}
            <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b2a3b] text-white">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Apply Now</p>
                <h2 className="text-3xl font-black mb-5">지원하기</h2>
                <p className="text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
                  이력서와 포트폴리오를 사람인 채용 플랫폼을 통해 제출해 주세요.<br />
                  서류 검토 후 개별 연락드립니다.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    className="px-8 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg"
                  >
                    사람인 지원하기
                  </a>
                  <a
                    href="mailto:contilab@contilab.co.kr"
                    className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors"
                  >
                    이메일 문의
                  </a>
                </div>
                <p className="text-blue-300/60 text-xs mt-6">
                  서울특별시 동작구 흑석로 84 중앙대학교 208관 201호
                </p>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />

      {/* ── Patent Modal ──────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-[640px] rounded-2xl p-9 shadow-2xl relative border-t-4 border-amber-400"
            style={{ animation: "fadeSlide 0.25s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-[18px] font-bold text-gray-900 mb-5 pr-6 leading-snug">
              {modalContent.title}
            </h3>
            <div className="text-[14px] text-gray-500 leading-relaxed max-h-[400px] overflow-y-auto whitespace-pre-wrap">
              {modalContent.desc}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
