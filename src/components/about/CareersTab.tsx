"use client";

import Image from "next/image";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function CareersTab({ language }: { language: "ko" | "en" }) {
  return (
    <>
      {/* Vision */}
      <section className="py-20 bg-white" id="vision">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Our Vision</p>
              <h2 className="text-[28px] lg:text-[34px] font-black text-gray-900 leading-tight mb-6">
                {language === "ko" ? (
                  <>
                    Connecting Innovation, Protecting Lives.<br />
                    <span className="text-amber-500">ConTI Lab</span>이 함께 만드는<br />안전의 가치
                  </>
                ) : (
                  <>
                    Connecting Innovation, Protecting Lives.<br />
                    The value of safety created by <span className="text-amber-500">ConTI Lab</span>
                  </>
                )}
              </h2>
              <div className="w-12 h-0.5 bg-amber-400 mb-8" />
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                {language === "ko"
                  ? "인력은 부족하고 책임은 무거운 산업 현장, 콘티랩은 자율 진화형 통합 안전 플랫폼인 iSafePlatform을 통해 스마트 건설 안전의 새로운 패키지 기준을 제시합니다."
                  : "In industrial sites where staffing is tight and responsibility is heavy, ConTI Lab sets new standards for smart construction safety through iSafePlatform, an autonomously evolving integrated safety system."}
              </p>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {language === "ko"
                  ? "현장과 근로자의 생명을 지키는 가치 있는 여정에 몰입할 경력자 분들의 많은 지원을 바랍니다. 본 채용은 우수 인재 영입을 위한 상시 채용으로 진행됩니다."
                  : "We welcome experienced professionals who want to dedicate themselves to protecting workers and jobsites. This is an ongoing recruitment to bring in talented individuals."}
              </p>
            </div>
            <div className="reveal d1">
              <div className="relative max-w-xs aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg mx-auto lg:mx-0">
                <Image src="/images/founder-park-chansik.png" alt="박찬식 교수 (ConTI Lab 창업자)" fill className="object-cover object-top" sizes="320px" />
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center lg:text-left">ConTI Lab Founder, Chan-sik Park</p>
            </div>
          </div>
        </div>
      </section>

      {/* 공통 근무 조건 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="mb-10 reveal">
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Common Conditions</p>
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              {language === "ko" ? "공통 근무 조건 및 전형 안내" : "Common Employment Conditions"}
            </h3>
            <div className="w-10 h-0.5 bg-amber-400" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                label: language === "ko" ? "근무 형태" : "Employment Type",
                value: language === "ko" ? "정규직" : "Full-time",
                sub: language === "ko" ? "수습기간 3개월 적용" : "3-month probation",
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                label: language === "ko" ? "근무 지역" : "Location",
                value: language === "ko" ? "서울 동작구" : "Seoul, Dongjak-gu",
                sub: language === "ko" ? "중앙대학교 208관 201호" : "Chung-Ang Univ. Building 208, Room 201",
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                label: language === "ko" ? "채용 유형" : "Hiring Type",
                value: language === "ko" ? "경력 상시채용" : "Ongoing Recruitment",
                sub: language === "ko" ? "2년 차 ~ 10년 차" : "2-10 years experience",
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                label: language === "ko" ? "지원 방법" : "How to Apply",
                value: language === "ko" ? "이력서 + 포트폴리오" : "Resume + Portfolio",
                sub: language === "ko" ? "사람인 전용 접수 링크" : "Via Saram In platform",
              },
            ].map((item, ii) => (
              <div key={ii} className="reveal bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 mb-4">{item.icon}</div>
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-base font-bold text-gray-900">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 채용 부문 */}
      <section className="py-20 bg-white" id="positions">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="mb-14 reveal">
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3">Open Positions</p>
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              {language === "ko" ? "채용 부문 명세" : "Open Positions"}
            </h3>
            <div className="w-10 h-0.5 bg-amber-400" />
          </div>
          <div className="space-y-10">
            {/* AI Engineer */}
            <div className="reveal bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0d1b2a] to-[#1a3050] p-8 text-white">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-3">
                      {language === "ko" ? "경력 2~10년" : "2-10 years experience"}
                    </span>
                    <h4 className="text-[22px] font-black leading-tight mb-2">AI Engineer</h4>
                    <p className="text-blue-200 text-sm">Vision &amp; Automation</p>
                  </div>
                  <p className="text-xs text-blue-300/70 self-start">
                    {language === "ko" ? "상시채용" : "Ongoing"}
                  </p>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mt-4 max-w-2xl">
                  {language === "ko"
                    ? "콘티랩의 고성능 영상 분석 인프라인 iSafeGuard 엔진을 고도화하고, 현장 맞춤형 인공지능 모델을 최적화하여 엣지 디바이스와 서버에 배포하는 업무를 담당합니다."
                    : "You will enhance ConTI Lab's high-performance video analysis infrastructure (iSafeGuard), optimize AI models for site-specific needs, and deploy them to edge devices and servers."}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-5"><span className="w-2 h-2 rounded-full bg-amber-400" /><span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                    {language === "ko" ? "주요 업무" : "Key Responsibilities"}
                  </span></div>
                  <ul className="space-y-3">
                    {(language === "ko"
                      ? ["YOLO, SegFormer 등 최신 비전 알고리즘 기반 객체 탐지 및 행동 인식 모델 개발", "공정별 특화 딥러닝 가중치 학습 및 배포 (외부비계, 크레인, 상부 슬래브 등)", "오탐지 프레임 자동 재학습 파이프라인 구축", "멀티모달 VLM / LLM 기반 일일 안전 보고서 자동 생성 고도화"]
                      : ["Develop object detection and behavior recognition models using YOLO, SegFormer and other state-of-the-art vision algorithms", "Train and deploy specialized deep learning models for different construction tasks (scaffolding, cranes, overhead slabs, etc.)", "Build automated retraining pipelines for false-positive frames", "Enhance automated daily safety report generation using multimodal VLM/LLM"]
                    ).map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />{v}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-5"><span className="w-2 h-2 rounded-full bg-blue-400" /><span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                    {language === "ko" ? "자격 요건" : "Requirements"}
                  </span></div>
                  <ul className="space-y-3">
                    {(language === "ko"
                      ? ["관련 분야 실무 경력 2년 이상 10년 이하", "Python 및 PyTorch 등 딥러닝 프레임워크 숙련자", "컴퓨터 비전 모델 라이브러리 핸들링 및 파인 튜닝 유경험자", "오픈소스 및 외부 API 연동 AI 자동화 역량 보유자"]
                      : ["2-10 years of hands-on experience in relevant field", "Proficient with Python and deep learning frameworks like PyTorch", "Experienced with computer vision model libraries and fine-tuning", "Capable of AI automation with open-source tools and external APIs"]
                    ).map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />{v}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-7 bg-amber-50/40">
                  <div className="flex items-center gap-2 mb-5"><span className="w-2 h-2 rounded-full bg-orange-400" /><span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                    {language === "ko" ? "우대 사항" : "Preferred"}
                  </span></div>
                  <ul className="space-y-3">
                    {(language === "ko"
                      ? ["컴퓨터공학, 인공지능학 등 관련 학과 학위 보유자", "TensorRT, TFLite 등 NPU/엣지 디바이스 최적화 경험자", "메시지 큐 기반 마이크로서비스 및 MLOps 파이프라인 구축 경험자"]
                      : ["Degree in Computer Science, AI, or related field", "Experience optimizing models for NPU/edge devices (TensorRT, TFLite, etc.)", "Experience building microservices and MLOps pipelines"]
                    ).map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600"><StarIcon className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />{v}</li>
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
                    <span className="inline-block px-3 py-1 rounded-full bg-green-400/20 text-green-300 text-xs font-semibold mb-3">
                      {language === "ko" ? "경력 2~10년" : "2-10 years experience"}
                    </span>
                    <h4 className="text-[22px] font-black leading-tight mb-2">
                      {language === "ko" ? "건설 안전 프로젝트 매니저" : "Construction Safety Project Manager"}
                    </h4>
                    <p className="text-green-200 text-sm">Project Manager</p>
                  </div>
                  <p className="text-xs text-green-300/70 self-start">
                    {language === "ko" ? "상시채용" : "Ongoing"}
                  </p>
                </div>
                <p className="text-green-100 text-sm leading-relaxed mt-4 max-w-2xl">
                  {language === "ko"
                    ? "BIM 기반 스케줄러인 iSafePlan와 현장 관제 시스템인 iSafeGuard가 건설 현장에 유기적으로 결합되도록 프로젝트 전체를 리딩하고 결정권자들과 소통하는 업무를 담당합니다."
                    : "Lead the entire project to seamlessly integrate iSafePlan (BIM-based scheduler) with iSafeGuard (site management system) on construction sites, while communicating with decision-makers."}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-5"><span className="w-2 h-2 rounded-full bg-amber-400" /><span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                    {language === "ko" ? "주요 업무" : "Key Responsibilities"}
                  </span></div>
                  <ul className="space-y-3">
                    {(language === "ko"
                      ? ["iSafePlatform 현장 도입 프로세스 총괄 및 공정별 마일스톤 관리", "엣지 하드웨어 (가속 서버·NPU 카메라 등) 현장 배치 계획 수립", "안전팀장·현장소장·발주처 담당자 요구사항 수렴 및 커스텀 솔루션 조율", "WBS 데이터 및 도면 분석 기반 동적 위험도 평가 가이드라인 수립"]
                      : ["Lead overall deployment process and manage phase-based milestones for iSafePlatform", "Plan edge hardware deployment (acceleration servers, NPU cameras, etc.)", "Gather requirements from safety managers, site supervisors, and stakeholders; coordinate custom solutions", "Establish dynamic risk assessment guidelines based on WBS data and construction drawings"]
                    ).map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />{v}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-5"><span className="w-2 h-2 rounded-full bg-blue-400" /><span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                    {language === "ko" ? "자격 요건" : "Requirements"}
                  </span></div>
                  <ul className="space-y-3">
                    {(language === "ko"
                      ? ["관련 분야 실무 경력 2년 이상 10년 이하", "건설 현장 안전·시공 관리 또는 스마트 건설 기술 프로젝트 리딩 경험자", "AI 비전 솔루션 및 디지털 트윈 플랫폼 메커니즘 이해 및 실무 활용 능력", "다양한 이해관계자와의 서술형 소통 및 협상 능력 보유자"]
                      : ["2-10 years of hands-on experience in relevant field", "Experience managing construction safety/operations or leading smart construction technology projects", "Understanding of AI vision solutions and digital twin platforms; practical application skills", "Strong written communication and negotiation skills with diverse stakeholders"]
                    ).map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />{v}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-7 bg-amber-50/40">
                  <div className="flex items-center gap-2 mb-5"><span className="w-2 h-2 rounded-full bg-orange-400" /><span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                    {language === "ko" ? "우대 사항" : "Preferred"}
                  </span></div>
                  <ul className="space-y-3">
                    {(language === "ko"
                      ? ["건축공학, 안전공학 등 관련 학과 전공자", "건설안전기사, 산업안전기사 등 자격증 소지자", "2D dxf 도면 이해 또는 3D IFC 모델·WBS 공정 관리 기초 지식 보유자", "스마트 건설 스타트업 또는 B2B 엔터프라이즈 기술 영업 경험자"]
                      : ["Major in Architectural/Civil or Safety Engineering", "Certified Construction Safety/Industrial Safety Engineer", "Knowledge of 2D CAD drawings, 3D IFC models, and WBS schedule management", "Experience in smart construction startups or B2B enterprise technology sales"]
                    ).map((v) => (
                      <li key={v} className="flex items-start gap-2.5 text-sm text-gray-600"><StarIcon className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />{v}</li>
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
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              {language === "ko" ? "콘티랩이 제공하는 성장 환경" : "Growth Environment at ConTI Lab"}
            </h3>
            <div className="w-10 h-0.5 bg-amber-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: language === "ko" ? "기술적 몰입 지원" : "Technical Excellence Support",
                desc: language === "ko"
                  ? "고성능 가속 서버 및 최신 AI 하드웨어 연구 환경을 전폭적으로 지원합니다."
                  : "Full support for high-performance acceleration servers and cutting-edge AI hardware research environments.",
                color: "text-blue-500 bg-blue-50",
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: language === "ko" ? "주도적 역할 보장" : "Ownership & Autonomy",
                desc: language === "ko"
                  ? "관료적인 승인 절차를 최소화하고, 실무자가 진짜 중요한 연구와 문제 해결에 집중할 수 있는 파이프라인을 지향합니다."
                  : "Minimize bureaucratic approval processes so practitioners can focus on meaningful research and problem-solving.",
                color: "text-amber-500 bg-amber-50",
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                title: language === "ko" ? "산학협력 네트워크" : "Industry-Academia Network",
                desc: language === "ko"
                  ? "중앙대학교 인프라를 기반으로 한 안정적인 R&D 환경과 탑티어 건설사 및 공공기관 파트너십 협업 기회를 제공합니다."
                  : "Stable R&D environment backed by Chung-Ang University infrastructure with partnerships and collaboration opportunities with top-tier construction firms and public agencies.",
                color: "text-green-500 bg-green-50",
              },
            ].map((item, ii) => (
              <div key={ii} className="reveal bg-white rounded-2xl border border-gray-100 p-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} mb-6`}>{item.icon}</div>
                <p className="text-base font-bold text-gray-900 mb-3">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d1b2a] to-[#1b2a3b] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">Apply Now</p>
          <h2 className="text-3xl font-black mb-5">
            {language === "ko" ? "지원하기" : "Apply Today"}
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
            {language === "ko"
              ? "이력서와 포트폴리오를 사람인 채용 플랫폼을 통해 제출해 주세요.\n서류 검토 후 개별 연락드립니다."
              : "Submit your resume and portfolio through the Saram In platform.\nWe will contact you individually after reviewing your application."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="px-8 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-lg">
              {language === "ko" ? "사람인 지원하기" : "Apply via Saram In"}
            </a>
            <a href="mailto:contilab@contilab.co.kr" className="px-8 py-3.5 text-sm font-bold text-white border-2 border-white/40 hover:border-white rounded-xl transition-colors">
              {language === "ko" ? "이메일 문의" : "Email Inquiry"}
            </a>
          </div>
          <p className="text-blue-300/60 text-xs mt-6">
            {language === "ko"
              ? "서울특별시 동작구 흑석로 84 중앙대학교 208관 201호"
              : "Rm 201, Building 208, Chung-Ang University, 84 Heukseok-ro, Dongjak-gu, Seoul"}
          </p>
        </div>
      </section>
    </>
  );
}
