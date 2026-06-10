"use client";

export default function HistoryTab({ language }: { language: "ko" | "en" }) {
  return (
    <section className="py-20 bg-gray-50" id="history">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Phase 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm"><span className="text-[18px] font-black text-white">1</span></div>
            <div>
              <p className="text-[15px] font-bold text-blue-500 uppercase tracking-widest">Phase 1 · 2003 – 2019</p>
              <p className="text-[27px] font-black text-gray-900 leading-tight">
                {language === "ko" ? "연구 기반 구축" : "Research Foundation"}
              </p>
            </div>
            <div className="flex-1 h-px bg-blue-100 hidden sm:block" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:ml-14">
            {[
              {
                period: "2003 – 2005",
                title: language === "ko" ? "결합형 안전관리시스템 구축" : "Integrated Safety Management System",
                desc: language === "ko" ? "건설현장관리를 위한 결합형 안전관리시스템 구축 연구 수행" : "Developed integrated safety management system for construction site operations",
              },
              {
                period: "2004 – 2009",
                title: language === "ko" ? "건설프로젝트 분류체계 연구" : "Construction Project Classification Study",
                desc: language === "ko" ? "건설프로젝트 분류체계 및 사전제어모델 구축에 관한 연구" : "Research on construction project classification and proactive control model development",
              },
              {
                period: "2009 – 2013",
                title: language === "ko" ? "BIM 기반 현장관리시스템 개발" : "BIM-based Site Management System",
                desc: language === "ko" ? "BIM PDA 기반 지식과 건설현장관리시스템 개발" : "Developed BIM PDA-based knowledge and construction site management system",
              },
              {
                period: "2016 – 2019",
                title: language === "ko" ? "Linked Data 건설안전 플랫폼" : "Linked Data Safety Platform",
                desc: language === "ko" ? "Linked Data 기반 건설안전 소셜 네트워크 플랫폼 개발" : "Developed Linked Data-based construction safety social network platform",
              },
            ].map((item, ii) => (
              <div key={ii} className="reveal bg-white rounded-xl border border-blue-50 p-5 hover:border-blue-200 transition-colors">
                <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-500 rounded text-[15px] font-bold mb-2">{item.period}</span>
                <p className="text-[21px] font-bold text-gray-800 mb-1.5">{item.title}</p>
                <p className="text-[18px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm"><span className="text-[18px] font-black text-white">2</span></div>
            <div>
              <p className="text-[15px] font-bold text-orange-500 uppercase tracking-widest">Phase 2 · 2020 – 2022</p>
              <p className="text-[27px] font-black text-gray-900 leading-tight">
                {language === "ko" ? "AI 기술 전환 & 창업 준비" : "AI Transition & Startup Preparation"}
              </p>
            </div>
            <div className="flex-1 h-px bg-orange-100 hidden sm:block" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:ml-14">
            {[
              {
                period: "2020 – 2022",
                title: language === "ko" ? "Vision AI 건설안전 연구 집중" : "Vision AI Safety Research",
                desc: language === "ko"
                  ? "Vision AI 기반 건설안전 시스템 개발 연구 집중 수행 — 건설 현장 위험 상태 판단 데이터 수집 착수"
                  : "Intensive research on Vision AI-based safety systems — began data collection for hazard assessment",
              },
              {
                period: "2020 – 2022",
                title: language === "ko" ? "블록체인 안전 플랫폼 개발" : "Blockchain Safety Platform",
                desc: language === "ko"
                  ? "블록체인 기반 건설안전 소셜 플랫폼 개발 및 직업창안 인전 데이터 수집"
                  : "Developed blockchain-based safety social platform and collected skill-based incentive data",
              },
              {
                period: "2021 – 2022",
                title: language === "ko" ? "메타버스 훈련 플랫폼 개발" : "Metaverse Training Platform",
                desc: language === "ko"
                  ? "메타버스 기반 건설안전 훈련 환경 개발 — iSafeMeta의 원형 연구 착수"
                  : "Developed metaverse-based safety training environment — prototype research for iSafeMeta",
              },
            ].map((item, ii) => (
              <div key={ii} className="reveal bg-white rounded-xl border border-orange-50 p-5 hover:border-orange-200 transition-colors">
                <span className="inline-block px-2 py-0.5 bg-orange-50 text-orange-500 rounded text-[15px] font-bold mb-2">{item.period}</span>
                <p className="text-[21px] font-bold text-gray-800 mb-1.5">{item.title}</p>
                <p className="text-[18px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 3 */}
        <div>
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-sm"><span className="text-[18px] font-black text-white">3</span></div>
            <div>
              <p className="text-[15px] font-bold text-amber-500 uppercase tracking-widest">
                Phase 3 · 2022 – {language === "ko" ? "현재" : "Present"}
              </p>
              <p className="text-[27px] font-black text-gray-900 leading-tight">
                {language === "ko" ? "창업 & 성장" : "Startup & Growth"}
              </p>
            </div>
            <div className="flex-1 h-px bg-amber-200 hidden sm:block" />
          </div>
          <div className="relative sm:ml-14">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-amber-200 hidden sm:block" />
            <div className="space-y-8">
              {[
                {
                  year: "2022",
                  title: language === "ko" ? "ConTI Lab Co., Ltd. 설립" : "ConTI Lab Co., Ltd. Founded",
                  tags: language === "ko" ? ["창업"] : ["Founding"],
                  delay: "",
                  bullets: language === "ko"
                    ? ["중앙대학교 건설기술혁신연구실에서 스핀오프 창업", "iSafe 플랫폼 개발을 위한 시드 투자 유치", "건설 현장 위험 상태 판단 데이터 수집 본격화"]
                    : ["Spun off from Chung-Ang University's Construction Innovation Lab", "Secured seed funding for iSafe platform development", "Began comprehensive hazard assessment data collection from sites"],
                },
                {
                  year: "2023",
                  title: language === "ko" ? "iSafeGuard 출시 & KTL 인증 취득" : "iSafeGuard Launch & KTL Certification",
                  tags: language === "ko" ? ["기술인증", "제품출시"] : ["Tech Certification", "Product Launch"],
                  delay: "d1",
                  bullets: language === "ko"
                    ? ["컴퓨터 비전 AI 기반 120개+ 위험 시나리오 감지 엔진 구축", "Unity 기반 합성 데이터 학습 파이프라인 구축", "KTL 성능 인증 취득 — 20 FPS 이상, F1-score 0.90+", "디지털 건설안전모델 개발 과제 착수"]
                    : ["Built 120+ hazard scenario detection engine using computer vision AI", "Established Unity-based synthetic data training pipeline", "Obtained KTL certification — 20+ FPS, F1-score 0.90+", "Initiated digital construction safety model development"],
                },
                {
                  year: "2024",
                  title: language === "ko" ? "iSafeMeta & iSafeLLM 출시" : "iSafeMeta & iSafeLLM Launch",
                  tags: language === "ko" ? ["플랫폼 확장", "AI 모델"] : ["Platform Expansion", "AI Model"],
                  delay: "d2",
                  bullets: language === "ko"
                    ? ["Gaussian Splatting 기반 iSafeMeta Reality Capture 플랫폼 출시", "20개국 언어 지원 iSafeLLM 온톨로지 언어 모델 개발", "영상 AI 기반 산업현장 작업자 실시간 모니터링 과제 착수", "산업안전 중대재해 저감 온디바이스 AI 솔루션 R&D 개시"]
                    : ["Launched iSafeMeta Reality Capture platform using Gaussian Splatting", "Developed iSafeLLM ontology language model supporting 20+ languages", "Began on-site worker monitoring with video AI", "Started R&D on on-device AI for major safety incident reduction"],
                },
                {
                  year: "2025",
                  title: language === "ko" ? "ONYCOM 검증 완료 & 글로벌 확장" : "ONYCOM Verification & Global Expansion",
                  tags: language === "ko" ? ["인증완료", "특허 29건"] : ["Certification Complete", "29 Patents"],
                  delay: "d3",
                  bullets: language === "ko"
                    ? ["ONYCOM AI 모델 검증 완료 — mAP 0.751, F1-score 0.824", "자체 보유 9건 + 산학협력단 20건, 총 29건 특허 등록", "공동주택 고층화 기술개발사업(OSC) 참여", "국내외 현장 배포 확장 및 글로벌 시장 진출"]
                    : ["Completed ONYCOM AI model verification — mAP 0.751, F1-score 0.824", "Registered 29 patents (9 proprietary + 20 collaborative)", "Participating in multi-unit housing development project", "Expanded domestic and global site deployment"],
                },
              ].map((item) => (
                <div key={item.year} className={`reveal ${item.delay} flex gap-6 sm:gap-8 items-start`}>
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-md">
                      <span className="text-[15px] font-black text-white leading-none">{item.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 flex-1 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <p className="text-[18px] font-bold text-amber-500">{item.year}</p>
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full text-[15px] font-semibold border border-amber-100">{tag}</span>
                      ))}
                    </div>
                    <p className="text-[24px] font-bold text-gray-900 mb-3">{item.title}</p>
                    <ul className="space-y-1.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[21px] text-gray-500">
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
  );
}
