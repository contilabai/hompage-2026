"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "all" | "news" | "blog" | "media";

interface NewsItem {
  id: string;
  category: "news" | "blog" | "media";
  date: string;
  title: string;
  excerpt: string;
  source?: string;
  sourceUrl?: string;
  youtubeId?: string;
  tags: string[];
}

const items: NewsItem[] = [
  // ── 뉴스 ──────────────────────────────────────────────────────
  {
    id: "tips-2024",
    category: "news",
    date: "2024.09.10",
    title: "콘티랩, 팁스(TIPS) 프로그램 선정 — iSafeGuard로 글로벌 건설현장 안전문화 재편",
    excerpt:
      "중소벤처기업부 팁스(TIPS) 프로그램에 선정되어 2년간 5억 원 규모의 기술개발비를 지원받습니다. 선정 과제명은 '산업 안전 중대재해 감소를 위한 온디바이스 영상 AI 솔루션 개발'로, NPU 기반 AI 카메라 하드웨어와 위험 감지 AI 기술을 중소형 건설·산업 현장에 최적화하여 개발할 예정입니다.",
    source: "AVING 에이빙",
    sourceUrl: "https://kr.aving.net/news/articleView.html?idxno=1793607",
    tags: ["TIPS", "투자", "iSafeGuard"],
  },
  {
    id: "korea-build-2024",
    category: "news",
    date: "2024.09.21",
    title: "Korea Build Week 2024 — KINTEX에서 iSafeGuard 현장 시연",
    excerpt:
      "일산 KINTEX에서 열린 Korea Build Week 2024(9월 21~24일)에 참가하여 iSafeGuard를 전시했습니다. 현장을 방문한 건설사 관계자들에게 실제 현장 카메라 영상에서의 AI 실시간 위험 감지 시스템을 직접 시연하며 큰 주목을 받았습니다.",
    source: "Korea Build Week",
    tags: ["전시", "Korea Build Week", "iSafeGuard"],
  },
  {
    id: "metaverse-expo-2024",
    category: "news",
    date: "2024.06.26",
    title: "Metaverse Expo 2024 — COEX 서울에서 iSafeMeta 공개",
    excerpt:
      "서울 COEX에서 개최된 Metaverse Expo 2024(6월 26~28일)에 참가하여 iSafeMeta를 선보였습니다. 실제 건설현장 데이터를 기반으로 생성한 3D 디지털 트윈 훈련 환경과 iSafeLLM 기반 다국어 AI 아바타를 시연하며 메타버스 기반 안전 훈련의 가능성을 알렸습니다.",
    source: "Metaverse Expo 2024",
    tags: ["전시", "iSafeMeta", "메타버스"],
  },
  {
    id: "ces-2024",
    category: "news",
    date: "2024.01.09",
    title: "CES 2024 라스베이거스 — iSafe 플랫폼 글로벌 첫 공개",
    excerpt:
      "미국 라스베이거스에서 개최된 CES 2024(1월 9~12일)에 참가하여 iSafe 플랫폼을 전 세계 무대에 처음 공개했습니다. 기존 일반 목적 지능형 CCTV와 달리, 건설 공정별 특화 위험을 자동으로 감지하는 iSafeGuard의 기술력을 선보이며 글로벌 미디어의 주목을 받았습니다.",
    source: "AVING (영문)",
    sourceUrl: "https://www.youtube.com/watch?v=mOdiBZ4LYgU",
    youtubeId: "mOdiBZ4LYgU",
    tags: ["CES 2024", "글로벌", "iSafe"],
  },
  {
    id: "ces-2024-preview",
    category: "news",
    date: "2023.12.18",
    title: "ConTILab, CES 2024 참가 확정 — '제로 사고율' 비전 글로벌 무대에 선보인다",
    excerpt:
      "중앙대학교 건설기술혁신연구실 스핀오프 스타트업 ConTILab이 내년 1월 미국 라스베이거스에서 열리는 CES 2024에 공식 참가합니다. iSafe 플랫폼을 통해 기존 안전관리 방식을 혁신하고, 글로벌 건설 안전 시장에 본격 진출할 계획입니다.",
    source: "ConTILab 공식 발표",
    sourceUrl: "http://contilab.co.kr/news-231218/",
    tags: ["CES 2024", "iSafe", "글로벌 진출"],
  },
  {
    id: "government-demo-2023",
    category: "news",
    date: "2023.12.01",
    title: "2023년 정부·민간 9개 프로젝트에서 iSafe 기술 실증 완료",
    excerpt:
      "2023년 한 해 동안 국내 대형 정부 연구 과제 7건 이상 및 민간 건설 프로젝트 2건에서 iSafe 플랫폼의 안전 계획·교육·관제 기능을 실증했습니다. 2024년부터는 지자체 의무 설치 CCTV 모니터링 사이트에 공식 도입이 진행 중입니다.",
    source: "ConTILab",
    tags: ["정부과제", "실증", "2023"],
  },

  // ── 뉴스 (추가) ───────────────────────────────────────────────
  {
    id: "hankyung-ces2024",
    category: "news",
    date: "2024.01.10",
    title: "영상 AI가 건설현장 사고 막는다 — 한국경제 CES 2024 현장 취재",
    excerpt:
      "한국경제 기술부 이유정 기자가 CES 2024 현장에서 ConTILab을 취재했습니다. iSafe가 영상 AI 기술을 활용해 인간의 관찰·판단을 대신하여 건설현장의 다양한 위험 상황을 자동 감지하는 솔루션이라는 점, 클라우드·서버·모바일 환경에서 작동하며 공정별 안전 평가 정보를 제공한다는 점을 상세히 보도했습니다.",
    source: "한국경제",
    sourceUrl: "https://www.hankyung.com/article/2024011057881",
    tags: ["한국경제", "CES 2024", "언론 보도"],
  },
  {
    id: "ikld-news",
    category: "news",
    date: "2024",
    title: "국토일보 보도 — ConTILab iSafe 건설 안전 AI 솔루션",
    excerpt:
      "국토·건설 분야 전문 매체 국토일보에서 ConTILab의 iSafe 플랫폼을 보도했습니다. 건설현장 안전 사고 예방을 위한 AI 기반 솔루션으로서의 기술력과 현장 적용 사례를 소개합니다.",
    source: "국토일보",
    sourceUrl: "https://www.ikld.kr/news/articleView.html?idxno=289708",
    tags: ["국토일보", "언론 보도", "iSafe"],
  },

  // ── 영상 ──────────────────────────────────────────────────────
  {
    id: "video-contilab-intro",
    category: "media",
    date: "2024",
    title: "ConTILab 공식 영상",
    excerpt:
      "ConTILab이 직접 제작·공개한 공식 영상입니다. iSafe 플랫폼의 핵심 기능과 건설현장 안전 AI 기술을 소개합니다.",
    source: "ConTILab",
    youtubeId: "O-CnI8Pcftg",
    tags: ["공식 영상", "iSafe", "ConTILab"],
  },
  {
    id: "video-ces2024-aving",
    category: "media",
    date: "2024.01.23",
    title: "ConTILab Unveils 'iSafe' Platform at CES 2024 — AVING 취재 영상",
    excerpt:
      "CES 2024 현장에서 AVING 미디어가 취재한 iSafe 플랫폼 소개 영상입니다. ConTILab CEO 박찬식 교수가 iSafeGuard와 iSafeMeta의 핵심 기능과 글로벌 시장 전략을 설명합니다.",
    source: "AVING",
    youtubeId: "mOdiBZ4LYgU",
    tags: ["CES 2024", "인터뷰", "영상"],
  },
  {
    id: "video-isafe-demo",
    category: "media",
    date: "2024.01.15",
    title: "iSafe 플랫폼 데모 — 실제 건설현장 AI 위험 감지 시연",
    excerpt:
      "실제 건설현장에서 iSafeGuard가 안전모 미착용, 위험구역 침입, 중장비-근로자 충돌 위험 등을 실시간으로 감지하는 모습을 담은 데모 영상입니다.",
    source: "ConTILab",
    youtubeId: "bk0DRA0YZOI",
    tags: ["데모", "iSafeGuard", "AI 감지"],
  },

  // ── 블로그 ──────────────────────────────────────────────────────
  {
    id: "blog-onycom-validation",
    category: "blog",
    date: "2025.12.01",
    title: "ONYCOM AI 모델 검증 완료 — mAP 0.751, F1-score 0.824 달성",
    excerpt:
      "ONYCOM AI 모델 성능 검증에서 mAP 0.751, F1-score 0.824를 달성했습니다. 시멘트 트럭, 굴삭기, 타워 크레인, 근로자, 안전모 등 14개 주요 클래스에 걸쳐 3회 반복 검증을 통해 일관된 성능을 입증했습니다.",
    tags: ["성능 검증", "ONYCOM", "AI 모델"],
  },
  {
    id: "blog-ktl-cert",
    category: "blog",
    date: "2023.12.27",
    title: "KTL 성능 인증 획득 — 실시간 20 FPS · F1-score 0.90 이상 공인",
    excerpt:
      "한국산업기술시험원(KTL)으로부터 iSafeGuard 성능 인증을 획득했습니다. 실시간 감지 20 FPS 이상과 위험 식별 F1-score 0.90 이상을 공식 인증받아, 현장 적용 가능한 AI 안전 감지 기술로서의 신뢰성을 확보했습니다.",
    tags: ["KTL 인증", "성능 검증", "iSafeGuard"],
  },
  {
    id: "blog-tips-rnd",
    category: "blog",
    date: "2024.10.01",
    title: "TIPS 선정 이후 — 온디바이스 AI 카메라 개발 방향과 로드맵",
    excerpt:
      "팁스(TIPS) 프로그램 선정을 계기로 콘티랩이 집중하는 기술 방향성을 소개합니다. NPU 보드 기반 경량화 AI 추론, 배터리 48시간 독자 구동, LTE 무선 전송 등 현장 설치 제약을 최소화하는 하드웨어-소프트웨어 통합 개발 전략입니다.",
    tags: ["TIPS", "R&D", "하드웨어"],
  },
  {
    id: "blog-ces2025",
    category: "blog",
    date: "2024.09.30",
    title: "CES 2025 혁신상 신청 — 글로벌 무대에서 iSafeGuard를 다시 한번",
    excerpt:
      "CES 2024 참가에 이어 iSafeGuard를 CES 2025 인공지능 분야 혁신상에 신청했습니다. 지난 1년간의 현장 실증과 기술 고도화 성과를 바탕으로 글로벌 시장에서의 경쟁력을 다시 한번 검증받겠습니다.",
    tags: ["CES 2025", "혁신상", "iSafeGuard"],
  },
  {
    id: "blog-vietnam",
    category: "blog",
    date: "2024.08.01",
    title: "동남아 시장 진출 준비 — 베트남·인도네시아 파트너십 논의 중",
    excerpt:
      "국내 현장 실증을 기반으로 동남아시아 시장 진출을 준비하고 있습니다. 빠르게 성장하는 베트남과 인도네시아의 건설 안전 규제 강화 흐름에 발맞춰 현지 파트너십 논의를 진행 중이며, iSafeMeta의 다국어 지원 기능이 핵심 경쟁력이 될 것으로 기대합니다.",
    tags: ["글로벌", "동남아", "파트너십"],
  },
];

const getCategoryLabels = (language: "ko" | "en"): Record<Category, string> => ({
  all: language === "ko" ? "전체" : "All",
  news: language === "ko" ? "뉴스" : "News",
  blog: language === "ko" ? "블로그" : "Blog",
  media: language === "ko" ? "미디어" : "Media",
});

const categoryColors: Record<string, string> = {
  news: "bg-blue-100 text-blue-700",
  blog: "bg-green-100 text-green-700",
  media: "bg-red-100 text-red-700",
};

function NewsCard({ item, categoryLabels, language }: { item: NewsItem; categoryLabels: Record<Category, string>; language: "ko" | "en" }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all overflow-hidden flex flex-col">
      {/* YouTube embed */}
      {item.youtubeId && (
        <div className="relative aspect-video bg-gray-900">
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-0.5 text-[16px] font-semibold rounded-md ${categoryColors[item.category]}`}>
            {categoryLabels[item.category]}
          </span>
          <span className="text-[18px] text-gray-400">{item.date}</span>
          {item.source && (
            <>
              <span className="text-gray-200">·</span>
              <span className="text-[18px] text-gray-400">{item.source}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[24px] font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>

        {/* Excerpt */}
        <p className="text-[21px] text-gray-500 leading-relaxed flex-1 mb-4">{item.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[16px] text-gray-400 bg-gray-50 border border-gray-100 rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        {/* Source link */}
        {item.sourceUrl && (
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[18px] font-medium text-blue-600 hover:text-blue-700 mt-auto"
          >
            {language === "ko" ? "원문 보기" : "View Original"}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

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

  const filtered = activeCategory === "all"
    ? items
    : items.filter((i) => i.category === activeCategory);

  const counts = {
    all: items.length,
    news: items.filter((i) => i.category === "news").length,
    blog: items.filter((i) => i.category === "blog").length,
    media: items.filter((i) => i.category === "media").length,
  };

  const categoryLabels = getCategoryLabels(language);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-[88px] bg-gradient-to-br from-[#050d18] via-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-20 lg:py-28">
            <div className="h-[160px]">
              <p className="text-[18px] font-semibold text-amber-400 uppercase tracking-widest mb-4">
                News
              </p>
              <p className="text-white text-[22px] lg:text-[26px] max-w-lg leading-relaxed">
                {language === "ko"
                  ? "ConTILab의 최신 소식, 전시 참가, 기술 성과, 그리고 팀이 직접 쓰는 블로그를 모두 한 곳에서 확인하세요."
                  : "Latest news, exhibitions, technical achievements, and direct insights from the ConTILab team—all in one place."}
              </p>
            </div>
          </div>
        </section>

        {/* Category filter */}
        <div className="sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex gap-0 overflow-x-auto">
              {(Object.keys(categoryLabels) as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-1.5 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {categoryLabels[cat]}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
                  }`}>
                    {counts[cat]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                {language === "ko" ? "등록된 콘텐츠가 없습니다." : "No content available."}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item) => (
                  <NewsCard key={item.id} item={item} categoryLabels={categoryLabels} language={language} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* YouTube channel CTA */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
            <p className="text-[21px] text-gray-500 mb-4">
              {language === "ko"
                ? "ConTILab의 모든 영상 콘텐츠는 YouTube 채널에서 확인하세요"
                : "Watch all ConTILab video content on our YouTube channel"}
            </p>
            <a
              href="https://www.youtube.com/@contilab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-[21px] font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
              {language === "ko" ? "YouTube 채널 방문" : "Visit YouTube Channel"}
            </a>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}
