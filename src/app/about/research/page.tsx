"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const patentDetails = {
  p1: { title: "Video-Based Risk Detection AI for Construction Sites", desc: "This patent introduces an AI-based risk event recording and analysis system for construction sites. The technology utilizes deep learning-based object detection models, including YOLO-based video analysis, to identify hazardous situations involving workers, equipment, and materials in real time.\n\nThe system determines unsafe conditions by analyzing bounding-box detection frequency, dynamic and static risk factors, and rule-violation events over continuous video frames." },
  p2: { title: "Simultaneous Vertical & Horizontal Hazard Detection System", desc: "This patent presents a video analytics system capable of simultaneously detecting hazardous activities occurring in both vertical and horizontal workspaces within construction environments. The system identifies multiple object classes from video streams, generates bounding boxes for detected workers and equipment, and evaluates dangerous conditions according to task-specific risk scenarios." },
  p3: { title: "Dynamic Object Collision Prediction for Industrial Safety", desc: "This patent proposes a predictive safety monitoring technology capable of forecasting collisions between moving objects in industrial environments. The system analyzes trajectories, movement patterns, and spatial relationships between workers, vehicles, and machinery to predict potential collision risks before accidents occur." },
  p4: { title: "AI Camera & Cloud-Based Safety Monitoring System", desc: "This invention describes an integrated AI camera and cloud server platform for industrial site safety monitoring. The system combines intelligent video acquisition, AI-based hazard analysis, and cloud-based centralized management to provide scalable safety monitoring across multiple industrial sites." },
  p5: { title: "Lightweight AI Optimization for Mobile Applications", desc: "This patent introduces a lightweight AI optimization method designed for mobile and edge devices operating under limited computing resources. Using TensorFlow Lite-based lightweight runtime architectures, the invention minimizes computational overhead while maintaining efficient deep-learning inference performance on CPUs and NPUs." },
  p6: { title: "BIM-Based Optimal Camera Placement System", desc: "This patent provides a BIM-integrated simulation system for optimizing surveillance camera placement within construction sites. The technology extracts geometric and scheduling information from 4D BIM models and generates virtual construction site layouts reflecting time-dependent construction progress." },
  p7: { title: "AI-Based Construction Accident Prediction System", desc: "This patent utilizes image recognition and AI-based analysis techniques to predict potential accidents in construction environments. By analyzing visual patterns, worker behavior, and environmental conditions, the system identifies high-risk situations before accidents occur." },
  p8: { title: "Safety Compliance Management Platform", desc: "This invention provides a digital platform for verifying compliance with construction safety guidelines and operational procedures. The server-based system automatically checks work activities against predefined safety regulations and operational standards." },
  p9: { title: "Blockchain-Based Construction Quality Management System", desc: "This patent introduces a blockchain-based quality management framework for construction projects. The system securely stores quality management records including photos, videos, BIM data, sensor information, and work documentation, while preventing tampering and unauthorized modifications." },
  p10: { title: "Industrial Safety Monitoring Edge Device & Cloud System", desc: "This patent describes an edge AI-based industrial safety monitoring architecture combining edge devices, cloud servers, and intelligent analytics systems. The platform performs real-time AI inference directly on edge devices while synchronizing critical monitoring data with cloud infrastructure." },
  p11: { title: "PTZ Camera Control-Based Risk Event Detection Technology", desc: "This invention provides an intelligent PTZ (Pan-Tilt-Zoom) camera control system capable of dynamically tracking hazardous situations in industrial environments. The technology automatically adjusts camera direction and zoom levels according to detected risk events." },
  p12: { title: "Virtual Data Generation for Construction Safety", desc: "This patent generates synthetic 3D virtual construction environments using game-engine-based simulations and 3D object models. The technology automatically creates labeled training datasets for AI safety systems by simulating interactions among workers, equipment, and construction objects." },
  p13: { title: "Linked Data-Based Safety Information Sharing Platform", desc: "This patent establishes a linked-data framework for integrating and sharing construction safety information across distributed organizations and systems. The platform combines BIM data, unstructured web data, accident cases, technical documents, and safety regulations into a unified RDF-based knowledge structure." },
  p14: { title: "Blockchain-Based Facility Procurement & Installation Management System", desc: "This patent introduces a blockchain-enabled integrated management platform for procurement, installation, inspection, and lifecycle management of construction facilities and materials." },
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const researchCards = [
  {
    delay: "d1", tag: "Computer Vision", title: "위험 감지 알고리즘",
    desc: "객체 인식 + 다중 알고리즘 로직: Tracking, Height Estimation, Edge Detection, Background Subtraction, Object Relationships, Coordinate Identification.",
    bullets: ["YOLO 기반 실시간 객체 탐지", "120개+ 건설현장 위험 시나리오", "멀티 카메라 동시 분석"],
    iconBg: "bg-blue-50 text-blue-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
  {
    delay: "d2", tag: "Synthetic Data", title: "Unity 기반 학습 데이터 파이프라인",
    desc: "3D 메쉬 현장 모델 + 가상 시나리오 시뮬레이션으로 대규모 어노테이션 데이터셋을 생성하여 실제 데이터 수집 비용을 획기적으로 절감.",
    bullets: ["게임 엔진 기반 현장 가상화", "자동 라벨링 데이터셋 생성", "희귀 위험 시나리오 시뮬레이션"],
    iconBg: "bg-purple-50 text-purple-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  },
  {
    delay: "d1", tag: "Reality Capture", title: "Gaussian Splatting 파이프라인",
    desc: "드론 기반 사진측량과 Gaussian Splatting으로 실제 현장에서 비용 효율적인 몰입형 3D 메쉬 환경을 생성.",
    bullets: ["드론 사진측량 자동화", "Gaussian Splatting 3D 재구성", "iSafeMeta 훈련 환경 직접 연동"],
    iconBg: "bg-green-50 text-green-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    delay: "d2", tag: "Safety LLM", title: "iSafeLLM",
    desc: "안전 규칙, 법령, 기준, 매뉴얼, 사고 보고서로 학습한 온톨로지 강화 언어 모델. 20개국 이상 언어 멀티링구얼 아바타 지원.",
    bullets: ["건설안전 특화 온톨로지 학습", "VLM 기반 일일 안전 보고서 자동 생성", "20개국 언어 멀티링구얼 아바타"],
    iconBg: "bg-amber-50 text-amber-500",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  },
];

export default function ResearchPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", desc: "" });

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
            <h1 className="text-[40px] lg:text-[56px] font-black leading-tight mb-5">연구 & 인증</h1>
            <p className="text-blue-200 text-base max-w-xl leading-relaxed">
              핵심 연구 분야부터 공인 시험 성적서, 특허 포트폴리오까지 ConTILab의 기술적 역량을 확인하세요.
            </p>
          </div>
        </section>

        {/* Core Research Areas */}
        <section className="py-20 bg-white" id="rnd">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-14 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">R&D</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">Core Research Areas</h2>
              <div className="w-12 h-0.5 bg-amber-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchCards.map((card) => (
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
              <h2 className="text-3xl font-black text-gray-900 mb-3">시험성적서 및 인증</h2>
              <div className="w-12 h-0.5 bg-amber-400 mb-4" />
              <p className="text-sm text-gray-500 max-w-2xl">국내 공인 시험 기관의 성능 검증을 통해 iSafe 플랫폼의 기술적 신뢰성을 입증합니다.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                {[
                  { title: "KTL 성능 인증", date: "2023.12", bullets: ["실시간 감지: 20 FPS 이상 검증", "위험 식별 F1-score 0.90 이상"] },
                  { title: "ONYCOM AI 모델 검증", date: "2025.12", bullets: ["mAP 0.751, F1-score 0.824", "PPE, 중장비 포함 10개 이상 위험 시나리오"] },
                  { title: "지식재산권 및 특허", date: "", bullets: ["자체 보유 9건 + 산학협력 20건, 총 29건 특허", "수직·수평 위험 감지 및 경량 AI 최적화 기술"] },
                ].map((cert, i) => (
                  <div key={cert.title} className={`reveal${i > 0 ? ` d${i}` : ""} bg-white rounded-2xl border border-gray-100 p-6`}>
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
                ))}
              </div>
              <div className="reveal d1 flex flex-col gap-6 pt-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image src="/legacy-images/cert-ktl.png" alt="KTL 시험성적서" fill className="object-contain bg-white p-2" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <Image src="/legacy-images/cert-onycom.png" alt="ONYCOM AI 모델 검증 결과" fill className="object-contain bg-white p-2" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patents */}
        <section className="py-20 bg-white" id="patents">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-14 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Intellectual Property</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">Representative Patents</h2>
              <div className="w-12 h-0.5 bg-amber-400 mb-6" />
              <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">자체 보유 9건 + 중앙대학교 산학협력단 공동 20건, 총 29건의 특허를 보유하고 있습니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { tag: "AI Safety & Monitoring", delay: "d1", items: [{ key: "p1" }, { key: "p2" }, { key: "p3" }, { key: "p4" }, { key: "p5" }] },
                { tag: "Smart Construction & Infrastructure", delay: "d2", items: [{ key: "p6" }, { key: "p7" }, { key: "p8" }, { key: "p9" }] },
                { tag: "Edge AI & Intelligent Surveillance", delay: "d1", items: [{ key: "p10" }, { key: "p11" }] },
                { tag: "Additional Smart Safety", delay: "d2", items: [{ key: "p12" }, { key: "p13" }, { key: "p14" }] },
              ].map((group) => (
                <div key={group.tag} className={`reveal ${group.delay} bg-gray-50 rounded-2xl border border-gray-100 p-7`}>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{group.tag}</span>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map(({ key }) => {
                      const p = patentDetails[key as keyof typeof patentDetails];
                      return (
                        <li key={key}>
                          <button
                            onClick={() => { setModalContent({ title: p.title, desc: p.desc }); setModalOpen(true); }}
                            className="text-left text-sm text-gray-700 hover:text-blue-600 transition-colors leading-relaxed w-full flex items-start gap-2 group"
                          >
                            <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {p.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Patent Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] p-6" onClick={() => setModalOpen(false)}>
          <div className="bg-white w-full max-w-[640px] rounded-2xl p-9 shadow-2xl relative border-t-4 border-amber-400" style={{ animation: "fadeSlide 0.25s ease" }} onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none" onClick={() => setModalOpen(false)}>&times;</button>
            <h3 className="text-[18px] font-bold text-gray-900 mb-5 pr-6 leading-snug">{modalContent.title}</h3>
            <div className="text-[14px] text-gray-500 leading-relaxed max-h-[400px] overflow-y-auto whitespace-pre-wrap">{modalContent.desc}</div>
          </div>
        </div>
      )}
    </>
  );
}
