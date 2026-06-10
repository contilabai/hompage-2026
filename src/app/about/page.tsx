"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyTab from "@/components/about/CompanyTab";
import HistoryTab from "@/components/about/HistoryTab";
import ResearchTab from "@/components/about/ResearchTab";
import PartnersTab from "@/components/about/PartnersTab";

type AboutTab = "company" | "history" | "research" | "partners";

const getTabs = (language: "ko" | "en"): { id: AboutTab; label: string }[] => [
  { id: "company", label: language === "ko" ? "비전" : "Vision" },
  { id: "history", label: language === "ko" ? "연혁" : "History" },
  { id: "research", label: language === "ko" ? "특허/인증/논문" : "Patents/Certs/Papers" },
  { id: "partners", label: language === "ko" ? "파트너스" : "Partners" },
];

const getHero = (tab: AboutTab, language: "ko" | "en") => {
  switch (tab) {
    case "history":
      return {
        label: "History",
        title: language === "ko" ? "걸어온 길" : "Our Journey",
        desc: language === "ko"
          ? "중앙대학교 건설기술혁신연구실의 20년 연구 노하우를 기반으로, 콘티랩은 AI와 현장 데이터를 연결하여 산업안전 혁신의 새로운 기준을 제시합니다."
          : "Building on 20 years of research expertise from Chung-Ang University's Construction Innovation Lab, ConTI Lab connects AI with on-site data to set a new standard for industrial safety innovation.",
      };
    case "research":
      return {
        label: language === "ko" ? "특허/인증/논문" : "Patents/Certs/Papers",
        title: language === "ko" ? "특허/인증/논문" : "Patents / Certifications / Papers",
        desc: language === "ko"
          ? "안전관리, 위험성평가, 메타버스 기반 안전교육, Vision AI, 블록체인 기반 안전수준 평가 등 산업안전 분야의 핵심 기술에 대한 특허, 인증 및 연구성과를 지속적으로 확보하고 있습니다."
          : "We continuously secure patents, certifications, and research achievements in core industrial-safety technologies—including safety management, risk assessment, metaverse-based safety training, Vision AI, and blockchain-based safety-level evaluation.",
      };
    case "partners":
      return {
        label: "Partners",
        title: language === "ko" ? "파트너스" : "Partners",
        desc: language === "ko"
          ? "공공기관, 민간 기업, 기술 협력사와 함께 현장 검증을 거치며 iSafePlatform을 발전시켜 왔습니다."
          : "We've advanced iSafePlatform through field validation alongside public agencies, private enterprises, and technology partners.",
      };
    default:
      return {
        label: "Vision",
        title: "ConTI Lab Co., Ltd.",
        desc: language === "ko"
          ? "산업현장 사고율 제로를 목표로\nAI 전환(AX)을 통한 안전관리와 안전문화를 혁신을 이루겠습니다."
          : "Aiming for zero accident rates at industrial sites, we will innovate safety management and safety culture through AI transformation (AX).",
      };
  }
};

export default function AboutPage() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const [activeTab, setActiveTab] = useState<AboutTab>("company");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
    if (savedLang) setLanguage(savedLang);

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLanguage(customEvent.detail);
    };
    window.addEventListener("languageChange", handleLanguageChange);

    // 기존 경로/딥링크 지원: ?tab=research|careers
    const params = new URLSearchParams(window.location.search);
    const t = params.get("tab");
    if (t === "history" || t === "research" || t === "partners" || t === "company") setActiveTab(t);

    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  // 탭 전환 시 reveal 애니메이션 재적용
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const tabs = getTabs(language);
  const hero = getHero(activeTab, language);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-20 lg:py-28">
            <div className="h-[160px]">
              <p className="text-[18px] font-semibold text-amber-400 uppercase tracking-widest mb-4">{hero.label}</p>
              <p className="text-white text-[22px] lg:text-[26px] max-w-3xl leading-relaxed whitespace-pre-line">{hero.desc}</p>
            </div>
          </div>
        </section>

        {/* Tab bar */}
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex gap-0 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-amber-500 text-amber-600"
                      : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content */}
        {activeTab === "company" && <CompanyTab language={language} />}
        {activeTab === "history" && <HistoryTab language={language} />}
        {activeTab === "research" && <ResearchTab language={language} />}
        {activeTab === "partners" && <PartnersTab language={language} />}
      </main>
      <Footer language={language} />
    </>
  );
}
