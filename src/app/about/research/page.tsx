"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const patentDetails = {
  p1: { title: "Video-Based Risk Detection AI for Construction Sites", desc: "This patent introduces an AI-based risk event recording and analysis system for construction sites. The technology utilizes deep learning-based object detection models, including YOLO-based video analysis, to identify hazardous situations involving workers, equipment, and materials in real time. The system determines unsafe conditions by analyzing bounding-box detection frequency, dynamic and static risk factors, and rule-violation events over continuous video frames.\n\nThe invention enables automatic recording and storage of dangerous events when predefined risk thresholds are exceeded, significantly improving safety monitoring efficiency and reducing manual supervision requirements. The technology is optimized for construction environments where rapid detection and event traceability are critical for accident prevention and compliance management." },
  p2: { title: "Simultaneous Vertical & Horizontal Hazard Detection System", desc: "This patent presents a video analytics system capable of simultaneously detecting hazardous activities occurring in both vertical and horizontal workspaces within construction environments. The system identifies multiple object classes from video streams, generates bounding boxes for detected workers and equipment, and evaluates dangerous conditions according to task-specific risk scenarios.\n\nBy analyzing consecutive frames over a defined period, the system determines whether a hazardous event has occurred and records the event automatically. The invention is particularly effective for detecting falls, overhead work risks, crane-related hazards, and unsafe interactions between workers and heavy machinery in complex construction environments." },
  p3: { title: "Dynamic Object Collision Prediction for Industrial Safety", desc: "This patent proposes a predictive safety monitoring technology capable of forecasting collisions between moving objects in industrial environments. The system analyzes trajectories, movement patterns, and spatial relationships between workers, vehicles, and machinery to predict potential collision risks before accidents occur.\n\nThe invention enhances proactive safety management by providing early warning notifications and automated monitoring functions for industrial facilities and construction sites. It is designed for integration with smart surveillance systems and AI-based industrial safety platforms." },
  p4: { title: "AI Camera & Cloud-Based Safety Monitoring System", desc: "This invention describes an integrated AI camera and cloud server platform for industrial site safety monitoring. The system combines intelligent video acquisition, AI-based hazard analysis, and cloud-based centralized management to provide scalable safety monitoring across multiple industrial sites.\n\nThe platform supports real-time video analytics, abnormal event detection, worker activity monitoring, and remote management functions. By integrating AI cameras with cloud infrastructure, the system enables efficient large-scale deployment while supporting centralized data storage and intelligent risk analysis." },
  p5: { title: "Lightweight AI Optimization for Mobile Applications", desc: "This patent introduces a lightweight AI optimization method designed for mobile and edge devices operating under limited computing resources. Using TensorFlow Lite-based lightweight runtime architectures, the invention minimizes computational overhead while maintaining efficient deep-learning inference performance on CPUs and NPUs.\n\nThe optimized AI model enables real-time risk detection on smartphones and embedded edge devices, supporting industrial safety applications where low latency and reduced power consumption are essential. The technology significantly improves portability and scalability of AI-based safety monitoring solutions." },
  p6: { title: "BIM-Based Optimal Camera Placement System", desc: "This patent provides a BIM-integrated simulation system for optimizing surveillance camera placement within construction sites. The technology extracts geometric and scheduling information from 4D BIM models and generates virtual construction site layouts reflecting time-dependent construction progress.\n\nThe system simulates surveillance coverage areas using virtual camera models and automatically generates optimal camera deployment plans according to construction stages. This enables efficient monitoring coverage, reduced blind spots, and improved safety management throughout the construction lifecycle." },
  p7: { title: "AI-Based Construction Accident Prediction System", desc: "This patent utilizes image recognition and AI-based analysis techniques to predict potential accidents in construction environments. By analyzing visual patterns, worker behavior, and environmental conditions, the system identifies high-risk situations before accidents occur.\n\nThe technology supports intelligent safety decision-making by continuously monitoring site conditions and generating predictive risk assessments. It contributes to proactive accident prevention and smart safety management in digital construction environments." },
  p8: { title: "Safety Compliance Management Platform", desc: "This invention provides a digital platform for verifying compliance with construction safety guidelines and operational procedures. The server-based system automatically checks work activities against predefined safety regulations and operational standards.\n\nThe platform improves construction safety governance by enabling automated compliance auditing, safety documentation management, and real-time monitoring of procedural violations. It supports efficient safety administration and regulatory compliance management across construction projects." },
  p9: { title: "Blockchain-Based Construction Quality Management System", desc: "This patent introduces a blockchain-based quality management framework for construction projects. The system securely stores quality management records, including photos, videos, BIM data, sensor information, and work documentation, while preventing tampering and unauthorized modifications.\n\nThe technology performs quality compliance verification through blockchain validation and external platform integration. By storing data hashes and verification records on a blockchain network while maintaining original data in off-chain databases, the system ensures transparency, traceability, and reliability of construction quality management processes." },
  p10: { title: "Industrial Safety Monitoring Edge Device & Cloud System", desc: "This patent describes an edge AI-based industrial safety monitoring architecture combining edge devices, cloud servers, and intelligent analytics systems. The platform performs real-time AI inference directly on edge devices while synchronizing critical monitoring data with cloud infrastructure.\n\nThe system minimizes latency, reduces network traffic, and enables scalable deployment of intelligent safety monitoring services across industrial and construction sites. It is optimized for AI-based surveillance, real-time hazard detection, and distributed industrial IoT environments." },
  p11: { title: "PTZ Camera Control-Based Risk Event Detection Technology", desc: "This invention provides an intelligent PTZ (Pan-Tilt-Zoom) camera control system capable of dynamically tracking hazardous situations in industrial environments. The technology automatically adjusts camera direction and zoom levels according to detected risk events, enabling more precise monitoring of workers, equipment, and hazardous zones.\n\nBy integrating AI-based event recognition with automated PTZ control, the system improves surveillance responsiveness, reduces manual camera operation, and enhances detection accuracy for safety-critical events in complex industrial sites." },
  p12: { title: "Virtual Data Generation for Construction Safety", desc: "This patent generates synthetic 3D virtual construction environments using game-engine-based simulations and 3D object models. The technology automatically creates labeled training datasets for AI safety systems by simulating interactions among workers, equipment, and construction objects.\n\nThe generated virtual datasets improve AI training efficiency, support rare hazard scenario generation, and enhance the accuracy of safety-related computer vision models for construction environments." },
  p13: { title: "Linked Data-Based Safety Information Sharing Platform", desc: "This patent establishes a linked-data framework for integrating and sharing construction safety information across distributed organizations and systems. The platform combines BIM data, unstructured web data, accident cases, technical documents, and safety regulations into a unified RDF-based knowledge structure.\n\nThe system supports semantic reasoning and SPARQL-based information retrieval, enabling intelligent safety knowledge sharing and context-aware safety recommendations within smart construction environments." },
  p14: { title: "Blockchain-Based Facility Procurement & Installation Management System", desc: "This patent introduces a blockchain-enabled integrated management platform for procurement, installation, inspection, and lifecycle management of construction facilities and materials. The system assigns role-based permissions to stakeholders and validates process integrity through blockchain-based comparison and verification mechanisms.\n\nThe technology improves transparency, trustworthiness, and traceability throughout the construction supply chain and facility installation process." },
};

const patentCategoryMeta: Record<string, {
  iconBg: string;
  iconColor: string;
  dot: string;
  badge: string;
  label: (l: "ko" | "en") => string;
  icon: ReactNode;
}> = {
  monitoring: {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    dot: "bg-blue-400",
    badge: "bg-blue-50 text-blue-600",
    label: (l) => (l === "ko" ? "AI 안전 & 모니터링" : "AI Safety & Monitoring"),
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  construction: {
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    dot: "bg-green-400",
    badge: "bg-green-50 text-green-600",
    label: (l) => (l === "ko" ? "스마트 건설 & 인프라" : "Smart Construction & Infrastructure"),
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  edge: {
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    dot: "bg-purple-400",
    badge: "bg-purple-50 text-purple-600",
    label: (l) => (l === "ko" ? "엣지 AI & 지능형 감시" : "Edge AI & Intelligent Surveillance"),
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7h10v10H7V7zm3 3h4v4h-4v-4z" />
      </svg>
    ),
  },
  additional: {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    dot: "bg-orange-400",
    badge: "bg-orange-50 text-orange-600",
    label: (l) => (l === "ko" ? "추가 스마트 안전" : "Additional Smart Safety"),
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
};

const patentGroups = [
  { cat: "monitoring", delay: "d1", items: ["p1", "p2", "p3", "p4", "p5"] },
  { cat: "construction", delay: "d2", items: ["p6", "p7", "p8", "p9"] },
  { cat: "edge", delay: "d1", items: ["p10", "p11"] },
  { cat: "additional", delay: "d2", items: ["p12", "p13", "p14"] },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const getCredentials = (language: "ko" | "en") => [
  {
    title: language === "ko" ? "KTL 성능 인증" : "KTL Certification",
    date: "2023.12",
    image: "/images/cert-ktl.png",
    imageAlt: language === "ko" ? "KTL 시험성적서" : "KTL Test Report",
    bullets: language === "ko"
      ? ["실시간 감지: 20 FPS 이상 검증", "위험 식별 F1-score 0.90 이상"]
      : ["Real-time detection: 20+ FPS verified", "Hazard identification F1-score 0.90+"],
  },
  {
    title: language === "ko" ? "ONYCOM AI 모델 검증" : "ONYCOM AI Model Verification",
    date: "2025.12",
    image: "/images/cert-onycom.png",
    imageAlt: language === "ko" ? "ONYCOM AI 모델 검증 결과" : "ONYCOM AI Model Verification",
    bullets: language === "ko"
      ? ["mAP 0.751, F1-score 0.824", "PPE, 중장비 포함 10개 이상 위험 시나리오"]
      : ["mAP 0.751, F1-score 0.824", "10+ hazard scenarios including PPE & heavy equipment"],
  },
  {
    title: language === "ko" ? "지식재산권 및 특허" : "Intellectual Property & Patents",
    date: "",
    image: null,
    bullets: language === "ko"
      ? ["자체 보유 9건 + 산학협력 20건, 총 29건 특허", "수직·수평 위험 감지 및 경량 AI 최적화 기술"]
      : ["29 patents (9 proprietary + 20 collaborative)", "Vertical/horizontal hazard detection & lightweight AI optimization"],
  },
];

const getResearchCards = (language: "ko" | "en") => [
  {
    delay: "d1", tag: "Computer Vision",
    title: language === "ko" ? "위험 감지 알고리즘" : "Hazard Detection Algorithm",
    desc: language === "ko"
      ? "객체 인식 + 다중 알고리즘 로직: Tracking, Height Estimation, Edge Detection, Background Subtraction, Object Relationships, Coordinate Identification."
      : "Multi-algorithm object recognition: Tracking, Height Estimation, Edge Detection, Background Subtraction, Object Relationships, Coordinate Identification.",
    bullets: language === "ko"
      ? ["YOLO 기반 실시간 객체 탐지", "120개+ 건설현장 위험 시나리오", "멀티 카메라 동시 분석"]
      : ["YOLO-based real-time object detection", "120+ construction hazard scenarios", "Multi-camera simultaneous analysis"],
    iconBg: "bg-blue-50 text-blue-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
  {
    delay: "d2", tag: "Synthetic Data",
    title: language === "ko" ? "가상데이터 기반 학습 파이프라인" : "Synthetic Data-Based Training Pipeline",
    desc: language === "ko"
      ? "3D 메쉬 현장 모델 + 가상 시나리오 시뮬레이션으로 대규모 어노테이션 데이터셋을 생성하여 실제 데이터 수집 비용을 획기적으로 절감."
      : "Generate large-scale annotated datasets using 3D mesh models and virtual scenario simulation, dramatically reducing real-world data collection costs.",
    bullets: language === "ko"
      ? ["게임 엔진 기반 현장 가상화", "자동 라벨링 데이터셋 생성", "희귀 위험 시나리오 시뮬레이션"]
      : ["Game engine-based site virtualization", "Automatic labeled dataset generation", "Rare hazard scenario simulation"],
    iconBg: "bg-purple-50 text-purple-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  },
  {
    delay: "d1", tag: "Reality Capture",
    title: language === "ko" ? "Gaussian Splatting 파이프라인" : "Gaussian Splatting Pipeline",
    desc: language === "ko"
      ? "드론 기반 사진측량과 Gaussian Splatting으로 실제 현장에서 비용 효율적인 몰입형 3D 메쉬 환경을 생성."
      : "Create cost-effective immersive 3D mesh environments using drone-based photogrammetry and Gaussian Splatting from real sites.",
    bullets: language === "ko"
      ? ["드론 사진측량 자동화", "Gaussian Splatting 3D 재구성", "iSafeMeta 훈련 환경 직접 연동"]
      : ["Automated drone photogrammetry", "Gaussian Splatting 3D reconstruction", "Direct integration with iSafeMeta training"],
    iconBg: "bg-green-50 text-green-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    delay: "d2", tag: "Safety LLM",
    title: "iSafeLLM",
    desc: language === "ko"
      ? "안전 규칙, 법령, 기준, 매뉴얼, 사고 보고서로 학습한 온톨로지 강화 언어 모델. 20개국 이상 언어 멀티링구얼 아바타 지원."
      : "Ontology-enriched language model trained on safety rules, regulations, standards, manuals, and incident reports. Supports 20+ language multilingual avatars.",
    bullets: language === "ko"
      ? ["건설안전 특화 온톨로지 학습", "VLM 기반 일일 안전 보고서 자동 생성", "20개국 언어 멀티링구얼 아바타"]
      : ["Construction safety-specialized ontology", "VLM-based automated daily safety reports", "20+ language multilingual avatars"],
    iconBg: "bg-amber-50 text-amber-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  },
];

export default function ResearchPage() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", desc: "", cat: "monitoring", index: 1 });

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
    if (savedLang) {
      setLanguage(savedLang);
    }

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-20 lg:py-28">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Research</p>
            <h1 className="text-[40px] lg:text-[56px] font-black leading-tight mb-5">
              {language === "ko" ? "연구 & 인증" : "Research & Credentials"}
            </h1>
            <p className="text-blue-200 text-base max-w-xl leading-relaxed">
              {language === "ko"
                ? "핵심 연구 분야부터 공인 시험 성적서, 특허 포트폴리오까지 ConTILab의 기술적 역량을 확인하세요."
                : "Explore ConTI Lab's technical capabilities from core research areas to certified test reports and patent portfolio."}
            </p>
          </div>
        </section>

        {/* Core Research Areas */}
        <section className="py-20 bg-white" id="rnd">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-14 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">R&D</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                {language === "ko" ? "핵심 연구 분야" : "Core Research Areas"}
              </h2>
              <div className="w-12 h-0.5 bg-amber-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getResearchCards(language).map((card) => (
                <div key={card.tag} className={`reveal ${card.delay} bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg} mb-6`}>{card.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{card.tag}</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-3">{card.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-amber-300 flex-shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50" id="credentials">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-14 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Certifications</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                {language === "ko" ? "시험성적서 및 인증" : "Test Reports & Certifications"}
              </h2>
              <div className="w-12 h-0.5 bg-amber-400 mb-4" />
              <p className="text-sm text-gray-500 max-w-2xl">
                {language === "ko"
                  ? "국내 공인 시험 기관의 성능 검증을 통해 iSafe 플랫폼의 기술적 신뢰성을 입증합니다."
                  : "We validate the iSafe platform's technical reliability through certified test institutions."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCredentials(language).map((cert, i) => (
                <div key={i} className={`reveal${i > 0 ? ` d${i}` : ""} bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col h-full`}>
                  {cert.image && (
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={cert.image}
                        alt={cert.imageAlt}
                        fill
                        className="object-contain bg-gray-50 p-3"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-base font-bold text-gray-900 mb-1">
                      {cert.title}
                      {cert.date && <span className="ml-2 text-sm font-normal text-gray-400">({cert.date})</span>}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {cert.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patents */}
        <section className="py-20 bg-white" id="patents">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-14 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Intellectual Property</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                {language === "ko" ? "대표 특허" : "Representative Patents"}
              </h2>
              <div className="w-12 h-0.5 bg-amber-400 mb-6" />
              <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
                {language === "ko"
                  ? "자체 보유 9건 + 중앙대학교 산학협력단 공동 20건, 총 29건의 특허를 보유하고 있습니다."
                  : "We hold 29 patents total: 9 proprietary + 20 in collaboration with Chung-Ang University."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {patentGroups.map((group, gi) => {
                const meta = patentCategoryMeta[group.cat];
                return (
                  <div key={gi} className={`reveal ${group.delay} bg-gray-50 rounded-2xl border border-gray-100 p-7`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${meta.iconBg} ${meta.iconColor}`}>
                        {meta.icon}
                      </div>
                      <div>
                        <span className="text-[13px] font-bold text-gray-900 block leading-tight">{meta.label(language)}</span>
                        <span className="text-xs text-gray-400">
                          {group.items.length}{language === "ko" ? "건" : group.items.length > 1 ? " patents" : " patent"}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {group.items.map((key) => {
                        const p = patentDetails[key as keyof typeof patentDetails];
                        const index = Number(key.replace("p", ""));
                        return (
                          <li key={key}>
                            <button
                              onClick={() => { setModalContent({ title: p.title, desc: p.desc, cat: group.cat, index }); setModalOpen(true); }}
                              className="text-left text-sm text-gray-700 hover:text-blue-600 transition-colors leading-snug w-full flex items-center gap-3 group rounded-xl px-3 py-2.5 hover:bg-white"
                            >
                              <span className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold ${meta.badge}`}>
                                {index}
                              </span>
                              <span className="flex-1">{p.title}</span>
                              <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 flex-shrink-0 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />

      {/* Patent Modal */}
      {modalOpen && (() => {
        const meta = patentCategoryMeta[modalContent.cat];
        return (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] p-6" onClick={() => setModalOpen(false)}>
            <div className="bg-white w-full max-w-[640px] rounded-2xl shadow-2xl relative overflow-hidden" style={{ animation: "fadeSlide 0.25s ease" }} onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="p-8 pb-6 border-b border-gray-100">
                <button className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors text-xl leading-none" onClick={() => setModalOpen(false)}>&times;</button>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${meta.iconBg} ${meta.iconColor}`}>
                    {meta.icon}
                  </div>
                  <div className="flex-1 pr-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full ${meta.badge}`}>
                        {meta.label(language)}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400">
                        {language === "ko" ? `특허 #${modalContent.index}` : `Patent #${modalContent.index}`}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-bold text-gray-900 leading-snug">{modalContent.title}</h3>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className="p-8 pt-6">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {language === "ko" ? "기술 개요" : "Technology Overview"}
                </p>
                <div className="text-[14px] text-gray-600 leading-relaxed max-h-[360px] overflow-y-auto whitespace-pre-wrap pr-2">
                  {modalContent.desc}
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}
