import Link from "next/link";

export default function ProductSpotlight({ language = "ko" }: { language?: "ko" | "en" }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "주요 모듈" : "Featured Modules"}
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {language === "ko" ? "감시하고, 기록합니다" : "Monitor and Record"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {language === "ko"
              ? "iSafeGuard가 100+채널을 동시에 감시하고, iSafeChain이 모든 기록을 위변조 불가능하게 저장합니다. 두 모듈이 함께 작동할 때 법적 증빙까지 완성됩니다."
              : "iSafeGuard monitors 100+ channels simultaneously while iSafeChain stores every record tamper-proof. Together, they complete your legal evidence."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* iSafeGuard Card */}
          <Link
            href="/isafe-guard"
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c2340] to-[#1d6fa4] p-8 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 flex flex-col min-h-[480px]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">iSafeGuard</span>
                <span className="px-3 py-1 bg-white/10 text-blue-200 text-xs rounded-full">Monitor Module</span>
              </div>

              <h3 className="text-[28px] font-black text-white leading-tight mb-4">
                {language === "ko" ? (
                  <>실시간 지능형<br /><span className="text-blue-300">비전 관제</span> &<br />엣지 AI 솔루션</>
                ) : (
                  <>Real-Time Intelligent<br /><span className="text-blue-300">Vision Monitoring</span> &<br />Edge AI Solution</>
                )}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                {language === "ko"
                  ? "AI가 100+채널을 동시에 분석하고 이상 징후가 감지되면 즉시 알림을 보냅니다. VLM이 오늘의 현장을 보고서로 자동 작성합니다. 관리자는 승인만 하면 됩니다."
                  : "AI analyzes 100+ channels at once and alerts instantly on anomalies. VLM auto-writes today's site report. Managers just approve."}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {(language === "ko"
                  ? ["다채널 동시 관제", "PTZ 자동 추적", "오탐지 자동 재학습", "VLM 보고서 생성", "엣지 NPU 카메라"]
                  : ["Multi-Channel Monitoring", "PTZ Auto-Tracking", "False-Positive Retraining", "VLM Report Generation", "Edge NPU Camera"]).map((f) => (
                  <span key={f} className="px-2.5 py-1 text-xs font-medium bg-white/10 text-blue-100 rounded-lg">
                    {f}
                  </span>
                ))}
              </div>

              {/* Mini monitor mockup */}
              <div className="bg-gray-900/70 rounded-xl border border-blue-400/20 p-3 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">iSafeGuard · {language === "ko" ? "100+CH 분석 중" : "100+CH Analyzing"}</span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    LIVE
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 bg-red-900/50 border border-red-500/30 rounded-lg px-2.5 py-1.5">
                    <span className="text-red-400 text-[10px]">⚠</span>
                    <span className="text-[11px] text-red-300">{language === "ko" ? "안전모 미착용 — B구역 CAM_03" : "Helmet Missing — Zone B CAM_03"}</span>
                    <span className="ml-auto text-[9px] text-gray-500">{language === "ko" ? "방금" : "Just now"}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-2.5 py-1.5">
                    <span className="text-green-400 text-[10px]">✓</span>
                    <span className="text-[11px] text-gray-400">{language === "ko" ? "위험구역 침입 없음 — 전체 정상" : "No Zone Breaches — All Clear"}</span>
                    <span className="ml-auto text-[9px] text-gray-500">{language === "ko" ? "1분 전" : "1m ago"}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { v: "100+CH", l: language === "ko" ? "동시 처리" : "Concurrent" },
                  { v: "99%", l: language === "ko" ? "감지 정확도" : "Accuracy" },
                  { v: "48h", l: language === "ko" ? "독자 구동" : "Standalone" },
                ].map((s) => (
                  <div key={s.l} className="text-center bg-white/5 rounded-xl py-3">
                    <p className="text-xl font-black text-white">{s.v}</p>
                    <p className="text-[11px] text-blue-200">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-auto text-sm font-bold text-white group-hover:gap-4 transition-all">
                {language === "ko" ? "iSafeGuard 상세보기" : "Explore iSafeGuard"}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* iSafeChain Card */}
          <Link
            href="/isafe-chain"
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#7c2d12] to-[#ea580c] p-8 hover:shadow-2xl hover:shadow-orange-900/30 transition-all duration-300 flex flex-col min-h-[480px]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">iSafeChain</span>
                <span className="px-3 py-1 bg-white/10 text-orange-100 text-xs rounded-full">Measure Module</span>
              </div>

              <h3 className="text-[28px] font-black text-white leading-tight mb-4">
                {language === "ko" ? (
                  <>블록체인 기반<br /><span className="text-orange-200">안전 거버넌스</span> &<br />보상 인센티브</>
                ) : (
                  <>Blockchain-Based<br /><span className="text-orange-200">Safety Governance</span> &<br />Reward Incentives</>
                )}
              </h3>
              <p className="text-orange-100 text-sm leading-relaxed mb-6">
                {language === "ko"
                  ? "모든 안전 활동이 블록체인에 자동으로 기록됩니다. 위변조가 불가능하기 때문에 사고 발생 시 법정에서 완벽한 증거가 됩니다. 동시에 스마트 컨트랙트가 근로자에게 자동으로 보상을 지급합니다."
                  : "Every safety activity is automatically recorded on the blockchain. Being tamper-proof, it becomes perfect courtroom evidence when accidents occur—while smart contracts automatically reward workers."}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {(language === "ko"
                  ? ["위변조 불가 기록", "스마트 컨트랙트", "자동 리워드 지급", "피드백 루프", "개인정보 마스킹"]
                  : ["Tamper-Proof Records", "Smart Contracts", "Auto Reward Payout", "Feedback Loop", "Privacy Masking"]).map((cat) => (
                  <span key={cat} className="px-2.5 py-1 text-xs font-medium bg-white/10 text-orange-100 rounded-lg">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Blockchain feedback mockup */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  { emoji: "🔗", name: language === "ko" ? "안전 수칙 준수" : "Safety Compliance", status: language === "ko" ? "+50P 적립" : "+50P earned", ok: true },
                  { emoji: "🎓", name: language === "ko" ? "가상 교육 이수" : "Virtual Training Done", status: language === "ko" ? "+30P 적립" : "+30P earned", ok: true },
                  { emoji: "📢", name: language === "ko" ? "위험 구역 신고" : "Hazard Zone Report", status: language === "ko" ? "+20P 적립" : "+20P earned", ok: true },
                  { emoji: "🔒", name: language === "ko" ? "데이터 무결성" : "Data Integrity", status: language === "ko" ? "해시 저장 완료" : "Hash Stored", ok: true },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                    <span className="text-lg">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium text-white truncate">{item.name}</p>
                      <p className="text-[10px] text-green-300">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-6 flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="text-sm font-black text-white">{language === "ko" ? "자율 진화 피드백 루프" : "Self-Evolving Feedback Loop"}</p>
                  <p className="text-xs text-orange-100">{language === "ko" ? "누적 데이터로 Planner·Meta·Guard를 자동 개선" : "Accumulated data auto-improves Planner·Meta·Guard"}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { v: language === "ko" ? "3종" : "3", l: language === "ko" ? "피드백 루프" : "Feedback Loops" },
                  { v: language === "ko" ? "온체인" : "On-Chain", l: language === "ko" ? "해시 저장" : "Hash Storage" },
                  { v: language === "ko" ? "자동화" : "Automated", l: language === "ko" ? "인센티브 지급" : "Incentive Payout" },
                ].map((s) => (
                  <div key={s.l} className="text-center bg-white/5 rounded-xl py-3">
                    <p className="text-xl font-black text-white">{s.v}</p>
                    <p className="text-[11px] text-orange-200">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-auto text-sm font-bold text-white group-hover:gap-4 transition-all">
                {language === "ko" ? "iSafeChain 상세보기" : "Explore iSafeChain"}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
