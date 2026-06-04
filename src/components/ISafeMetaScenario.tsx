"use client";

import { useState } from "react";

/**
 * iSafeMeta 사용 시나리오 빌더 (단계별 입력 폼)
 * - 상황을 가정하고 훈련 시나리오를 입력하는 위저드
 * - 콘텐츠(옵션·결과 등)는 추후 채울 수 있도록 스캐폴드로 구성
 */

interface StepConfig {
  id: string;
  label: string;
  title: string;
  desc: string;
}

const getSteps = (language: "ko" | "en"): StepConfig[] => [
  {
    id: "site",
    label: language === "ko" ? "현장 정보" : "Site Info",
    title: language === "ko" ? "어떤 현장을 가정하나요?" : "What site are you assuming?",
    desc: language === "ko"
      ? "현장 유형과 진행 중인 공정을 선택하세요."
      : "Select the site type and ongoing process.",
  },
  {
    id: "hazard",
    label: language === "ko" ? "위험 요인" : "Hazard Factors",
    title: language === "ko" ? "어떤 위험을 다루나요?" : "Which hazards are involved?",
    desc: language === "ko"
      ? "훈련에 포함할 위험 요인을 지정하세요."
      : "Specify the hazard factors to include in training.",
  },
  {
    id: "scenario",
    label: language === "ko" ? "상황 가정" : "Scenario",
    title: language === "ko" ? "구체적인 상황을 작성하세요" : "Describe the specific situation",
    desc: language === "ko"
      ? "훈련 시나리오로 만들 상황을 자유롭게 입력하세요."
      : "Freely describe the situation to turn into a training scenario.",
  },
];

export default function ISafeMetaScenario({ language = "ko" }: { language?: "ko" | "en" }) {
  const steps = getSteps(language);
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // 입력값 상태 (추후 옵션/제출 로직과 연결)
  const [form, setForm] = useState({
    siteType: "",
    process: "",
    hazard: "",
    scenario: "",
  });

  const isLast = current === steps.length - 1;
  const step = steps[current];

  const next = () => {
    if (isLast) {
      setSubmitted(true);
    } else {
      setCurrent((c) => Math.min(c + 1, steps.length - 1));
    }
  };
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  const reset = () => {
    setSubmitted(false);
    setCurrent(0);
    setForm({ siteType: "", process: "", hazard: "", scenario: "" });
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50 min-h-[60vh]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "사용 시나리오" : "Use Scenario"}
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            {language === "ko" ? "상황을 가정하고 훈련 시나리오를 만들어 보세요" : "Assume a situation and build a training scenario"}
          </h2>
          <p className="text-gray-500">
            {language === "ko"
              ? "단계별로 입력하면 iSafeMeta가 맞춤 훈련 시나리오를 구성합니다."
              : "Enter step by step and iSafeMeta composes a tailored training scenario."}
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 lg:p-9">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((s, i) => (
                <div key={s.id} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        i < current
                          ? "bg-red-500 text-white"
                          : i === current
                          ? "bg-red-600 text-white ring-4 ring-red-100"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {i < current ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span className={`mt-2 text-xs font-medium ${i === current ? "text-red-600" : "text-gray-400"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 -mt-5 ${i < current ? "bg-red-400" : "bg-gray-100"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step content */}
            <div className="min-h-[220px]">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{step.desc}</p>

              {/* Step 1: 현장 정보 */}
              {step.id === "site" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {language === "ko" ? "현장 유형" : "Site Type"}
                    </label>
                    <select
                      value={form.siteType}
                      onChange={(e) => setForm({ ...form, siteType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition"
                    >
                      <option value="">{language === "ko" ? "선택하세요" : "Select"}</option>
                      {/* TODO: 현장 유형 옵션 채우기 */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {language === "ko" ? "진행 공정" : "Ongoing Process"}
                    </label>
                    <input
                      type="text"
                      value={form.process}
                      onChange={(e) => setForm({ ...form, process: e.target.value })}
                      placeholder={language === "ko" ? "예) 외부비계 설치" : "e.g. Scaffolding installation"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: 위험 요인 */}
              {step.id === "hazard" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {language === "ko" ? "주요 위험 요인" : "Primary Hazard"}
                    </label>
                    <select
                      value={form.hazard}
                      onChange={(e) => setForm({ ...form, hazard: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition"
                    >
                      <option value="">{language === "ko" ? "선택하세요" : "Select"}</option>
                      {/* TODO: 위험 요인 옵션 채우기 */}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: 상황 가정 */}
              {step.id === "scenario" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    {language === "ko" ? "상황 설명" : "Situation Description"}
                  </label>
                  <textarea
                    value={form.scenario}
                    onChange={(e) => setForm({ ...form, scenario: e.target.value })}
                    rows={6}
                    placeholder={language === "ko"
                      ? "예) 오전 작업 중 외부비계에서 안전고리를 체결하지 않은 근로자가..."
                      : "e.g. During morning work, a worker on the scaffolding without a fastened harness..."}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 leading-relaxed focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition resize-none"
                  />
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={prev}
                disabled={current === 0}
                className="px-5 py-2.5 text-sm font-semibold text-gray-500 rounded-lg hover:bg-gray-50 disabled:opacity-0 transition"
              >
                ← {language === "ko" ? "이전" : "Back"}
              </button>
              <span className="text-xs text-gray-400">
                {current + 1} / {steps.length}
              </span>
              <button
                onClick={next}
                className="px-6 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition shadow-sm"
              >
                {isLast
                  ? language === "ko" ? "시나리오 생성" : "Generate Scenario"
                  : language === "ko" ? "다음" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          /* 결과 영역 (추후 채움) */
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-9 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {language === "ko" ? "시나리오 입력이 완료되었습니다" : "Scenario input complete"}
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              {language === "ko"
                ? "생성 결과 영역입니다. 추후 시나리오 결과 콘텐츠가 여기에 표시됩니다."
                : "This is the result area. Generated scenario content will appear here later."}
            </p>
            <button
              onClick={reset}
              className="px-6 py-2.5 text-sm font-bold text-red-600 border border-red-200 hover:bg-red-50 rounded-lg transition"
            >
              {language === "ko" ? "다시 작성" : "Start Over"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
