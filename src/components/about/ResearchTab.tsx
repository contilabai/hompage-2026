"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

const patentDetails = {
  p1: { title: "Video-Based Risk Detection AI for Construction Sites", desc: "This patent introduces an AI-based risk event recording and analysis system for construction sites. The technology utilizes deep learning-based object detection models, including YOLO-based video analysis, to identify hazardous situations involving workers, equipment, and materials in real time. The system determines unsafe conditions by analyzing bounding-box detection frequency, dynamic and static risk factors, and rule-violation events over continuous video frames.\n\nThe invention enables automatic recording and storage of dangerous events when predefined risk thresholds are exceeded, significantly improving safety monitoring efficiency and reducing manual supervision requirements. The technology is optimized for construction environments where rapid detection and event traceability are critical for accident prevention and compliance management.", image: "/images/patent/Video-Based%20Risk%20Detection%20AI%20for%20Construction%20Sites.png" },
  p2: { title: "Simultaneous Vertical & Horizontal Hazard Detection System", desc: "This patent presents a video analytics system capable of simultaneously detecting hazardous activities occurring in both vertical and horizontal workspaces within construction environments. The system identifies multiple object classes from video streams, generates bounding boxes for detected workers and equipment, and evaluates dangerous conditions according to task-specific risk scenarios.\n\nBy analyzing consecutive frames over a defined period, the system determines whether a hazardous event has occurred and records the event automatically. The invention is particularly effective for detecting falls, overhead work risks, crane-related hazards, and unsafe interactions between workers and heavy machinery in complex construction environments.", image: "/images/patent/Simultaneous%20Vertical%20%26%20Horizontal%20Hazard%20Detection%20System.png" },
  p3: { title: "Dynamic Object Collision Prediction for Industrial Safety", desc: "This patent proposes a predictive safety monitoring technology capable of forecasting collisions between moving objects in industrial environments. The system analyzes trajectories, movement patterns, and spatial relationships between workers, vehicles, and machinery to predict potential collision risks before accidents occur.\n\nThe invention enhances proactive safety management by providing early warning notifications and automated monitoring functions for industrial facilities and construction sites. It is designed for integration with smart surveillance systems and AI-based industrial safety platforms.", image: "/images/patent/Dynamic%20Object%20Collision%20Prediction%20for%20Industrial%20Safety.png" },
  p4: { title: "AI Camera & Cloud-Based Safety Monitoring System", desc: "This invention describes an integrated AI camera and cloud server platform for industrial site safety monitoring. The system combines intelligent video acquisition, AI-based hazard analysis, and cloud-based centralized management to provide scalable safety monitoring across multiple industrial sites.\n\nThe platform supports real-time video analytics, abnormal event detection, worker activity monitoring, and remote management functions. By integrating AI cameras with cloud infrastructure, the system enables efficient large-scale deployment while supporting centralized data storage and intelligent risk analysis.", image: "/images/patent/AI%20Camera%20%26%20Cloud-Based%20Safety%20Monitoring%20System.png" },
  p5: { title: "Lightweight AI Optimization for Mobile Applications", desc: "This patent introduces a lightweight AI optimization method designed for mobile and edge devices operating under limited computing resources. Using TensorFlow Lite-based lightweight runtime architectures, the invention minimizes computational overhead while maintaining efficient deep-learning inference performance on CPUs and NPUs.\n\nThe optimized AI model enables real-time risk detection on smartphones and embedded edge devices, supporting industrial safety applications where low latency and reduced power consumption are essential. The technology significantly improves portability and scalability of AI-based safety monitoring solutions.", image: "/images/patent/Lightweight%20AI%20Optimization%20for%20Mobile%20Applications.png" },
  p6: { title: "BIM-Based Optimal Camera Placement System", desc: "This patent provides a BIM-integrated simulation system for optimizing surveillance camera placement within construction sites. The technology extracts geometric and scheduling information from 4D BIM models and generates virtual construction site layouts reflecting time-dependent construction progress.\n\nThe system simulates surveillance coverage areas using virtual camera models and automatically generates optimal camera deployment plans according to construction stages. This enables efficient monitoring coverage, reduced blind spots, and improved safety management throughout the construction lifecycle.", image: "/images/patent/BIM-Based%20Optimal%20Camera%20Placement%20System.png" },
  p7: { title: "AI-Based Construction Accident Prediction System", desc: "This patent utilizes image recognition and AI-based analysis techniques to predict potential accidents in construction environments. By analyzing visual patterns, worker behavior, and environmental conditions, the system identifies high-risk situations before accidents occur.\n\nThe technology supports intelligent safety decision-making by continuously monitoring site conditions and generating predictive risk assessments. It contributes to proactive accident prevention and smart safety management in digital construction environments." },
  p8: { title: "Safety Compliance Management Platform", desc: "This invention provides a digital platform for verifying compliance with construction safety guidelines and operational procedures. The server-based system automatically checks work activities against predefined safety regulations and operational standards.\n\nThe platform improves construction safety governance by enabling automated compliance auditing, safety documentation management, and real-time monitoring of procedural violations. It supports efficient safety administration and regulatory compliance management across construction projects." },
  p9: { title: "Blockchain-Based Construction Quality Management System", desc: "This patent introduces a blockchain-based quality management framework for construction projects. The system securely stores quality management records, including photos, videos, BIM data, sensor information, and work documentation, while preventing tampering and unauthorized modifications.\n\nThe technology performs quality compliance verification through blockchain validation and external platform integration. By storing data hashes and verification records on a blockchain network while maintaining original data in off-chain databases, the system ensures transparency, traceability, and reliability of construction quality management processes.", image: "/images/patent/Blockchain-Based%20Construction%20Quality%20Management%20System.png" },
  p10: { title: "Industrial Safety Monitoring Edge Device & Cloud System", desc: "This patent describes an edge AI-based industrial safety monitoring architecture combining edge devices, cloud servers, and intelligent analytics systems. The platform performs real-time AI inference directly on edge devices while synchronizing critical monitoring data with cloud infrastructure.\n\nThe system minimizes latency, reduces network traffic, and enables scalable deployment of intelligent safety monitoring services across industrial and construction sites. It is optimized for AI-based surveillance, real-time hazard detection, and distributed industrial IoT environments.", image: "/images/patent/Industrial%20Safety%20Monitoring%20Edge%20Device%20%26%20Cloud%20System.png" },
  p11: { title: "PTZ Camera Control-Based Risk Event Detection Technology", desc: "This invention provides an intelligent PTZ (Pan-Tilt-Zoom) camera control system capable of dynamically tracking hazardous situations in industrial environments. The technology automatically adjusts camera direction and zoom levels according to detected risk events, enabling more precise monitoring of workers, equipment, and hazardous zones.\n\nBy integrating AI-based event recognition with automated PTZ control, the system improves surveillance responsiveness, reduces manual camera operation, and enhances detection accuracy for safety-critical events in complex industrial sites." },
  p12: { title: "Virtual Data Generation for Construction Safety", desc: "This patent generates synthetic 3D virtual construction environments using game-engine-based simulations and 3D object models. The technology automatically creates labeled training datasets for AI safety systems by simulating interactions among workers, equipment, and construction objects.\n\nThe generated virtual datasets improve AI training efficiency, support rare hazard scenario generation, and enhance the accuracy of safety-related computer vision models for construction environments." },
  p13: { title: "Linked Data-Based Safety Information Sharing Platform", desc: "This patent establishes a linked-data framework for integrating and sharing construction safety information across distributed organizations and systems. The platform combines BIM data, unstructured web data, accident cases, technical documents, and safety regulations into a unified RDF-based knowledge structure.\n\nThe system supports semantic reasoning and SPARQL-based information retrieval, enabling intelligent safety knowledge sharing and context-aware safety recommendations within smart construction environments.", image: "/images/patent/Linked%20Data-Based%20Safety%20Information%20Sharing%20Platform.png" },
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
    tag: "Digital Twin",
    title: language === "ko" ? "디지털 트윈" : "Digital Twin",
    desc: language === "ko"
      ? "실제 현장을 가상 공간에 정밀 복제하여 위험을 사전에 시뮬레이션하고 분석합니다."
      : "Precisely replicates real sites in virtual space to simulate and analyze hazards in advance.",
    gif: "/gif/rnd/디지털트윈.gif",
  },
  {
    tag: "Robotics",
    title: language === "ko" ? "자율 순찰 로봇 (로봇독)" : "Autonomous Patrol Robot",
    desc: language === "ko"
      ? "4족 보행 로봇이 사람이 접근하기 어려운 구역을 자율 순찰하며 현장을 점검합니다."
      : "A quadruped robot autonomously patrols and inspects areas that are hard for people to reach.",
    gif: "/gif/rnd/로봇독.gif",
  },
  {
    tag: "Road Safety",
    title: language === "ko" ? "도로 포트홀 탐지" : "Pothole Detection",
    desc: language === "ko"
      ? "주행 영상에서 도로 포트홀을 자동으로 탐지하여 보수 우선순위 산정을 지원합니다."
      : "Automatically detects road potholes from driving footage to support repair prioritization.",
    gif: "/gif/rnd/포트홀.gif",
  },
  {
    tag: "Inspection Robot",
    title: language === "ko" ? "교각 점검 구동장치" : "Pier Inspection Drive Unit",
    desc: language === "ko"
      ? "교각 표면에 밀착해 이동하며 교량 하부 구조물을 근접 점검하는 구동장치를 연구합니다."
      : "A drive unit that adheres to and travels along piers for close-up inspection of bridge substructures.",
    gif: "/gif/rnd/교각 밀착 구동장치1.gif",
  },
  {
    tag: "Robotics",
    title: language === "ko" ? "자재운반 로봇" : "Material Transport Robot",
    desc: language === "ko"
      ? "현장 자재를 자율로 운반하는 로봇으로 반복 운반 작업의 부담과 협착·전도 사고 위험을 줄입니다."
      : "An autonomous robot that transports site materials, easing repetitive hauling and reducing crushing/tipping risks.",
    gif: "/gif/rnd/자재운반 로봇.gif",
  },
  {
    tag: "Drone",
    title: language === "ko" ? "드론 시설물 관리" : "Drone Facility Inspection",
    desc: language === "ko"
      ? "드론으로 교량·시설물을 점검·관리하여 사람이 접근하기 어려운 구역을 안전하게 진단합니다."
      : "Inspect and manage bridges and facilities by drone, safely diagnosing areas hard for people to reach.",
    gif: "/gif/rnd/드론시설물관리.gif",
  },
];

export default function ResearchTab({ language }: { language: "ko" | "en" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; desc: string; cat: string; index: number; image?: string }>({ title: "", desc: "", cat: "monitoring", index: 1 });

  return (
    <>
      {/* Patents */}
      <section className="py-20 bg-white" id="patents">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="mb-14 reveal">
            <p className="text-[18px] font-semibold text-amber-500 uppercase tracking-widest mb-3">Intellectual Property</p>
            <div className="w-12 h-0.5 bg-amber-400 mb-6" />
            <p className="text-[21px] text-gray-500 max-w-2xl leading-relaxed">
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
                      <span className="text-[20px] font-bold text-gray-900 block leading-tight">{meta.label(language)}</span>
                      <span className="text-[18px] text-gray-400">
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
                            onClick={() => { setModalContent({ title: p.title, desc: p.desc, cat: group.cat, index, image: "image" in p ? p.image : undefined }); setModalOpen(true); }}
                            className="text-left text-[21px] text-gray-700 hover:text-blue-600 transition-colors leading-snug w-full flex items-center gap-3 group rounded-xl px-3 py-2.5 hover:bg-white"
                          >
                            <span className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-[16px] font-bold ${meta.badge}`}>
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

      {/* Certifications */}
      <section className="py-20 bg-gray-50" id="credentials">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="mb-14 reveal">
            <p className="text-[18px] font-semibold text-amber-500 uppercase tracking-widest mb-3">Certifications</p>
            <div className="w-12 h-0.5 bg-amber-400 mb-4" />
            <p className="text-[21px] text-gray-500 max-w-2xl">
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
                  <p className="text-[24px] font-bold text-gray-900 mb-1">
                    {cert.title}
                    {cert.date && <span className="ml-2 text-[21px] font-normal text-gray-400">({cert.date})</span>}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {cert.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-[21px] text-gray-600">
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

      {/* Core Research Areas */}
      <section className="py-20 bg-white" id="rnd">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="mb-14 reveal">
            <p className="text-[18px] font-semibold text-amber-500 uppercase tracking-widest mb-3">R&D</p>
            <div className="w-12 h-0.5 bg-amber-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getResearchCards(language).map((card) => (
              <div key={card.title} className="reveal bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-gray-900 overflow-hidden">
                  <img src={encodeURI(card.gif)} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-[16px] font-semibold text-amber-500 uppercase tracking-wider">{card.tag}</span>
                  </div>
                  <p className="text-[24px] font-bold text-gray-900 mb-2">{card.title}</p>
                  <p className="text-[19px] text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* 열화상 — 가로로 긴 영상이라 전체 폭 한 줄로 */}
          <div className="mt-6 reveal bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-gray-900 overflow-hidden">
              <img
                src={encodeURI("/gif/rnd/열화상.gif")}
                alt={language === "ko" ? "열화상 기반 이상 감지" : "Thermal Imaging Detection"}
                className="w-full h-auto -mt-[50px]"
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[16px] font-semibold text-amber-500 uppercase tracking-wider">Thermal AI</span>
              </div>
              <p className="text-[24px] font-bold text-gray-900 mb-2">
                {language === "ko" ? "열화상 기반 이상 감지" : "Thermal Imaging Detection"}
              </p>
              <p className="text-[19px] text-gray-500 leading-relaxed">
                {language === "ko"
                  ? "열화상 영상으로 설비·전기 이상 발열과 화재 징후를 조기에 감지합니다."
                  : "Detect abnormal heat in equipment and electrical systems—and early signs of fire—through thermal imaging."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Modal */}
      {modalOpen && (() => {
        const meta = patentCategoryMeta[modalContent.cat];
        return (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] p-6" onClick={() => setModalOpen(false)}>
            <div className="bg-white w-full max-w-[640px] rounded-2xl shadow-2xl relative overflow-hidden" style={{ animation: "fadeSlide 0.25s ease" }} onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="p-8 pb-6 border-b border-gray-100">
                <button className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors text-[30px] leading-none" onClick={() => setModalOpen(false)}>&times;</button>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${meta.iconBg} ${meta.iconColor}`}>
                    {meta.icon}
                  </div>
                  <div className="flex-1 pr-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 text-[16px] font-bold rounded-full ${meta.badge}`}>
                        {meta.label(language)}
                      </span>
                      <span className="text-[16px] font-mono text-gray-400">
                        {language === "ko" ? `특허 #${modalContent.index}` : `Patent #${modalContent.index}`}
                      </span>
                    </div>
                    <h3 className="text-[28px] font-bold text-gray-900 leading-snug">{modalContent.title}</h3>
                  </div>
                </div>
              </div>
              {/* Body */}
              <div className="p-8 pt-6">
                {modalContent.image && (
                  <div className="mb-6 rounded-xl border border-gray-100 bg-gray-50 overflow-hidden">
                    <Image
                      src={modalContent.image}
                      alt={modalContent.title}
                      width={1200}
                      height={1600}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 640px) 100vw, 640px"
                    />
                  </div>
                )}
                <p className="text-[16px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {language === "ko" ? "기술 개요" : "Technology Overview"}
                </p>
                <div className="text-[21px] text-gray-600 leading-relaxed max-h-[360px] overflow-y-auto whitespace-pre-wrap pr-2">
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
