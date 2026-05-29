"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Patent Data ───────────────────────────────────────────────────────────────
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

// ─── Component ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
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
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openModal = (title: string, desc: string) => {
    setModalContent({ title, desc });
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* ── 페이지 헤더 ─────────────────────────────────────── */}
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

        {/* ── 서브 내비게이션 ─────────────────────────────────── */}
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex gap-0 overflow-x-auto">
              {[
                { label: "ConTILab", href: "#contilab" },
                { label: "Partners", href: "#partners" },
                { label: "History", href: "#history" },
                { label: "R&D", href: "#rnd" },
                { label: "Patents", href: "#patents" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-5 py-4 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Vision ──────────────────────────────────────────── */}
        <section className="py-20 bg-white" id="contilab">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: founder */}
              <div className="reveal">
                <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Our Vision</p>
                <div className="w-12 h-0.5 bg-amber-400 mb-8" />
                <p className="text-xs text-gray-400 mb-4">ConTI Lab Founder, Chan-sik Park</p>
                <div className="relative max-w-xs aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                  <Image
                    src="/legacy-images/founder.png"
                    alt="박찬식 교수 (ConTI Lab 창업자)"
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                  />
                </div>
              </div>

              {/* Right: vision text */}
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

        {/* ── Certifications ──────────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: cert list */}
              <div>
                <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Certifications</p>
                <div className="w-12 h-0.5 bg-amber-400 mb-10" />

                <div className="space-y-6">
                  <div className="reveal bg-white rounded-2xl border border-gray-100 p-6">
                    <p className="text-base font-bold text-gray-900 mb-1">
                      KTL 성능 인증
                      <span className="ml-2 text-sm font-normal text-gray-400">(2023.12)</span>
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        실시간 감지: 20 FPS 이상 검증
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
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
                        <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        mAP 0.751, F1-score 0.824
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        PPE, 중장비 포함 10개 이상 위험 시나리오
                      </li>
                    </ul>
                  </div>

                  <div className="reveal d2 bg-white rounded-2xl border border-gray-100 p-6">
                    <p className="text-base font-bold text-gray-900 mb-3">지식재산권 및 특허</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        자체 보유 9건 + 산학협력 20건, 총 29건 특허
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        수직·수평 위험 감지 및 경량 AI 최적화 기술
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: cert images */}
              <div className="reveal d1 flex flex-col gap-6 pt-16">
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

        {/* ── Partners Banner ─────────────────────────────────── */}
        <section
          id="partners"
          className="relative py-24 overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/legacy-images/bg-hero.png"
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

        {/* ── Partners Grid ────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-14">
            {/* Public Agency */}
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

            {/* Private Company */}
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

            {/* Collaboration */}
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

        {/* ── History Timeline ─────────────────────────────────── */}
        <section className="py-20 bg-gray-50" id="history">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-14 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">History</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">Our Journey</h2>
              <div className="w-12 h-0.5 bg-amber-400" />
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-amber-200 hidden sm:block" />

              <div className="space-y-10">
                {[
                  {
                    year: "2022",
                    title: "ConTI Lab Co., Ltd. 설립",
                    desc: "중앙대학교 건설기술혁신연구실에서 설립. iSafe 플랫폼 개발을 위한 시드 투자 유치.",
                    delay: "",
                  },
                  {
                    year: "2023",
                    title: "iSafeGuard 개발 및 KTL 인증 획득",
                    desc: "컴퓨터 비전 AI 기반 120개+ 위험 시나리오 감지 엔진 구축. Unity 기반 합성 데이터 학습 파이프라인 구축. KTL 성능 인증 획득.",
                    delay: "d1",
                  },
                  {
                    year: "2024",
                    title: "iSafeMeta 출시 및 iSafeLLM 개발",
                    desc: "Reality Capture 기술을 적용한 메타버스 기반 안전 훈련 플랫폼 출시. 20개국 언어를 지원하는 건설 안전 특화 언어 모델 iSafeLLM 개발.",
                    delay: "d2",
                  },
                  {
                    year: "2025",
                    title: "ONYCOM 검증 완료 및 글로벌 확장",
                    desc: "ONYCOM AI 모델 검증 완료 (mAP 0.751). 국내 특허 9건 등록 (산학협력 포함 총 29건). 현장 배포 진행 중 및 글로벌 시장 진출.",
                    delay: "d3",
                  },
                ].map((item) => (
                  <div key={item.year} className={`reveal ${item.delay} flex gap-8 items-start`}>
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-md">
                        <span className="text-[10px] font-black text-white leading-none">{item.year.slice(2)}</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex-1">
                      <p className="text-xs font-semibold text-amber-500 mb-1">{item.year}</p>
                      <p className="text-base font-bold text-gray-900 mb-2">{item.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── R&D History ─────────────────────────────────────── */}
        <section className="py-20 bg-white" id="rnd">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-14 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">R&D History</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">Core Research Areas</h2>
              <div className="w-12 h-0.5 bg-amber-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Computer Vision */}
              <div className="reveal d1 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/legacy-images/ai-detection.png"
                    alt="AI 기반 현장 위험 감지 — 바운딩 박스와 안전거리 측정"
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

              {/* Synthetic Data */}
              <div className="reveal d2 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <img
                    src="/legacy-images/image18-540x253.gif"
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

              {/* Reality Capture */}
              <div className="reveal d1 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="relative overflow-hidden bg-[#f5b800]">
                  <Image
                    src="/legacy-images/iSafeMeta-Integrated-Technologies-1100x242-new.png"
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

              {/* Safety LLM */}
              <div className="reveal d2 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/legacy-images/vlm1.png"
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

        {/* ── Patents ─────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50" id="patents">
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
                <div key={group.tag} className={`reveal ${group.delay} bg-white rounded-2xl border border-gray-100 p-7`}>
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

        {/* ── CTA ─────────────────────────────────────────────── */}
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
      </main>
      <Footer />

      {/* ── Patent Modal ─────────────────────────────────────── */}
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
