"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">About</p>
            <h1 className="text-[40px] lg:text-[56px] font-black leading-tight mb-5">ConTI Lab Co., Ltd.</h1>
            <p className="text-blue-200 text-base max-w-xl leading-relaxed">
              Connecting Innovation, Protecting Lives — 2022년 중앙대학교에서 시작한 iSafe 플랫폼 전문 스타트업입니다.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-white" id="contilab">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="reveal">
                <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Our Vision</p>
                <div className="w-12 h-0.5 bg-amber-400 mb-8" />
                <p className="text-xs text-gray-400 mb-4">ConTI Lab Founder, Chan-sik Park</p>
                <div className="relative max-w-xs aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                  <Image src="/legacy-images/founder-park-chansik.png" alt="박찬식 교수 (ConTI Lab 창업자)" fill className="object-cover object-top" sizes="320px" />
                </div>
              </div>
              <div className="reveal d1">
                <h2 className="text-[28px] lg:text-[34px] font-black text-gray-900 leading-tight mb-6">
                  Connecting Innovation, Protecting Lives.<br />
                  <span className="text-amber-500">ConTI Lab</span>이 함께 만드는<br />안전의 가치
                </h2>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                  2022년 중앙대학교 건설기술혁신연구실에서 설립된 ConTI Lab은 산업 현장의 사고를 예방하기 위한 iSafe 플랫폼을 적극적으로 개발하고 있습니다.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                    <span><span className="font-semibold">iSafe-Guard</span> — AI 기반 컴퓨터 비전으로 실시간 위험 감지를 자동화하여 근로자 안전을 강화합니다.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                    <span><span className="font-semibold">iSafe-Meta</span> — 토큰 기반 인센티브 시스템으로 구동되는 안전 평가 및 전문가 협업을 위한 실감형 메타버스입니다.</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 italic">&ldquo;Towards Zero-Accidents at Jobsites&rdquo; — 기술 중심, 근로자 주도의 산업 안전 미래를 만들어 갑니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Banner */}
        <section id="partners" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/legacy-images/bg-construction-site.png" alt="건설현장 배경" fill className="object-cover object-center" sizes="100vw" />
            <div className="absolute inset-0 bg-[#0d1b2a]/80" />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Mission</p>
            <h2 className="text-[36px] lg:text-[48px] font-black text-white mb-5">Safe Sites, Smarter AI</h2>
            <p className="text-blue-200 text-base max-w-lg mx-auto leading-relaxed">
              현장에 특화된 AI로 실시간 위험을 감지합니다.<br />파트너와 함께 진화하며 무사고 현장을 만들어 갑니다.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-14">
            {[
              {
                label: "Public Agency", delay: "",
                items: [
                  { name: "ex 한국도로공사", color: "text-red-600" },
                  { name: "서울특별시\n도시기반시설본부", color: "" },
                  { name: "국토안전관리원", color: "text-green-700" },
                  { name: "SH 서울주택도시공사", color: "" },
                  { name: "경기주택도시공사", color: "" },
                ],
              },
              {
                label: "Private Company", delay: "d1",
                items: [
                  { name: "금호건설", color: "" }, { name: "SK ecoplant", color: "text-orange-600" },
                  { name: "SK Nexilis", color: "text-orange-600" }, { name: "DL E&C", color: "" },
                  { name: "APPROTIUM", color: "" }, { name: "ISC", color: "" },
                ],
              },
              {
                label: "Collaboration Tech Company", delay: "d2",
                items: [
                  { name: "Deeper-I", color: "" }, { name: "SimPlatform", color: "" },
                  { name: "HANLIM", color: "" }, { name: "RiskZero", color: "text-red-600" },
                  { name: "씨아이솔루션", color: "" }, { name: "AIChemist", color: "" }, { name: "musma", color: "" },
                ],
              },
            ].map((group) => (
              <div key={group.label} className={`reveal ${group.delay}`}>
                <h3 className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">{group.label}</h3>
                <div className="w-8 h-0.5 bg-amber-400 mb-6" />
                <div className="flex flex-wrap gap-3">
                  {group.items.map((p) => (
                    <div key={p.name} className="px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-center whitespace-pre-line leading-snug">
                      <span className={p.color || "text-gray-700"}>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-gray-50" id="history">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="mb-16 reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">History</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">Our Journey</h2>
              <div className="w-12 h-0.5 bg-amber-400 mb-5" />
              <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">중앙대학교 건설기술혁신연구실의 20년 연구가 쌓인 토대 위에, ConTI Lab은 iSafePlatform으로 스마트 건설 안전의 새로운 기준을 만들어 갑니다.</p>
            </div>

            {/* Phase 1 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8 reveal">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm"><span className="text-xs font-black text-white">1</span></div>
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

            {/* Phase 2 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8 reveal">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm"><span className="text-xs font-black text-white">2</span></div>
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

            {/* Phase 3 */}
            <div>
              <div className="flex items-center gap-4 mb-8 reveal">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-sm"><span className="text-xs font-black text-white">3</span></div>
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
                    { year: "2022", title: "ConTI Lab Co., Ltd. 설립", tags: ["창업"], delay: "", bullets: ["중앙대학교 건설기술혁신연구실에서 스핀오프 창업", "iSafe 플랫폼 개발을 위한 시드 투자 유치", "건설 현장 위험 상태 판단 데이터 수집 본격화"] },
                    { year: "2023", title: "iSafeGuard 출시 & KTL 인증 취득", tags: ["기술인증", "제품출시"], delay: "d1", bullets: ["컴퓨터 비전 AI 기반 120개+ 위험 시나리오 감지 엔진 구축", "Unity 기반 합성 데이터 학습 파이프라인 구축", "KTL 성능 인증 취득 — 20 FPS 이상, F1-score 0.90+", "디지털 건설안전모델 개발 과제 착수"] },
                    { year: "2024", title: "iSafeMeta & iSafeLLM 출시", tags: ["플랫폼 확장", "AI 모델"], delay: "d2", bullets: ["Gaussian Splatting 기반 iSafeMeta Reality Capture 플랫폼 출시", "20개국 언어 지원 iSafeLLM 온톨로지 언어 모델 개발", "영상 AI 기반 산업현장 작업자 실시간 모니터링 과제 착수", "산업안전 중대재해 저감 온디바이스 AI 솔루션 R&D 개시"] },
                    { year: "2025", title: "ONYCOM 검증 완료 & 글로벌 확장", tags: ["인증완료", "특허 29건"], delay: "d3", bullets: ["ONYCOM AI 모델 검증 완료 — mAP 0.751, F1-score 0.824", "자체 보유 9건 + 산학협력단 20건, 총 29건 특허 등록", "공동주택 고층화 기술개발사업(OSC) 참여", "국내외 현장 배포 확장 및 글로벌 시장 진출"] },
                  ].map((item) => (
                    <div key={item.year} className={`reveal ${item.delay} flex gap-6 sm:gap-8 items-start`}>
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-md">
                          <span className="text-[10px] font-black text-white leading-none">{item.year.slice(2)}</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl border border-gray-100 p-6 flex-1 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <p className="text-xs font-bold text-amber-500">{item.year}</p>
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full text-[10px] font-semibold border border-amber-100">{tag}</span>
                          ))}
                        </div>
                        <p className="text-base font-bold text-gray-900 mb-3">{item.title}</p>
                        <ul className="space-y-1.5">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm text-gray-500">
                              <span className="w-1 h-1 rounded-full bg-amber-300 flex-shrink-0 mt-[7px]" />{b}
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b2a3b] text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-3xl font-black mb-5">파트너십 및 기술 협력 문의</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
              ConTILab은 공공기관 및 국내외 탑티어 건설사들과 협력하며 기술 검증을 완료했습니다.<br />도입 상담, 공동 연구, 파트너십 제안을 환영합니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:contilab@contilab.co.kr" className="px-8 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg">contilab@contilab.co.kr</a>
              <Link href="/platform" className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors">ISafePlatform 보기</Link>
            </div>
            <p className="text-blue-300/60 text-xs mt-6">서울특별시 동작구 흑석로 84 중앙대학교 208관 201호</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
