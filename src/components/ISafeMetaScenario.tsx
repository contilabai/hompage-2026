"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/**
 * iSafeMeta 사용 시나리오
 * - AI CCTV → 데이터 분류 → 맞춤형 VR 교육 처방 → 재모니터링 루프 소개
 * - 공정별 표준 시나리오(Type A 신규 투입 / Type B 반복 오류 교정)
 * - 현장 스토리 기반 5-STEP 시나리오
 * (출처: 건설 현장 안전교육 VR 시나리오 시리즈 문서)
 */

type Lang = "ko" | "en";

interface Phase {
  name: string;
  desc: string;
}

interface ProcessScenario {
  id: string;
  kind: "process";
  icon: ReactNode;
  category: string;
  title: string;
  summary: string;
  risks: string[];
  typeA: { goals: string[]; env: string; phases: Phase[] };
  typeB: { cctv: string; swiss: string[]; phases: Phase[] };
}

interface StoryScenario {
  id: string;
  kind: "story";
  icon: ReactNode;
  category: string;
  title: string;
  basis: string;
  setting: string;
  steps: Phase[];
}

type Scenario = ProcessScenario | StoryScenario;

const icons = {
  rebar: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 6h16M4 12h16M4 18h16M8 3v18M16 3v18" /></svg>
  ),
  crane: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 21h16M6 21V5l14-2v4M6 9h14M10 9v4a2 2 0 002 2h0a2 2 0 002-2" /></svg>
  ),
  elevator: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 3h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zM12 4v16M9 8l-1.5 2h3L9 8zm6 8l1.5-2h-3L15 16z" /></svg>
  ),
  fall: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 4v8m0 0l-3-3m3 3l3-3M5 20h14" /></svg>
  ),
  collision: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 17h2l1-5h12l1 5h2M6 12V8a2 2 0 012-2h8a2 2 0 012 2v4M7 17a2 2 0 104 0M13 17a2 2 0 104 0" /></svg>
  ),
  load: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3v6m0 0l8 4-8 4-8-4 8-4zM4 13v4l8 4 8-4v-4" /></svg>
  ),
};

const getLoop = (l: Lang) => [
  {
    step: "01",
    title: l === "ko" ? "현장 데이터 수집" : "On-site Data Collection",
    desc: l === "ko"
      ? "AI CCTV가 실제 현장을 상시 분석하여 작업자별 행동 패턴·안전 수칙 준수·반복 오류 유형을 자동 감지·기록합니다."
      : "AI CCTV continuously analyzes the real site, automatically detecting and logging each worker's behavior patterns, rule compliance, and recurring errors.",
  },
  {
    step: "02",
    title: l === "ko" ? "데이터 분류·위험 판단" : "Classification & Risk Profiling",
    desc: l === "ko"
      ? "수집 데이터를 위험 프로파일로 분류합니다. 신규 투입자 / 반복 오류 확인자로 그룹화하고 공정별 위험 빈도를 통계화합니다."
      : "Collected data is classified into risk profiles—grouping workers as new entrants or repeat-error workers and quantifying hazard frequency by process.",
  },
  {
    step: "03",
    title: l === "ko" ? "맞춤형 VR 교육 처방" : "Tailored VR Training",
    desc: l === "ko"
      ? "분류 결과에 따라 적합한 시나리오를 자동 배정하고, 실제 현장 데이터를 기반으로 재현된 가상 환경에서 교육을 진행합니다."
      : "A matching scenario is auto-assigned by profile, and training runs in a virtual environment reconstructed from real site data.",
  },
  {
    step: "04",
    title: l === "ko" ? "현장 복귀 후 재모니터링" : "Re-monitoring After Return",
    desc: l === "ko"
      ? "교육 수료 후 AI CCTV가 동일 작업자의 행동을 재감지하여 교육 전후 변화를 정량 추적하고, 미개선 시 재교육을 처방합니다."
      : "After training, AI CCTV re-detects the worker's behavior, quantitatively tracks before/after change, and prescribes re-training if unimproved.",
  },
];

const getScenarios = (l: Lang): Scenario[] => {
  const t = (ko: string, en: string) => (l === "ko" ? ko : en);
  return [
    // ── 공정별 표준 시나리오 (문서 1) ──
    {
      id: "rebar",
      kind: "process",
      icon: icons.rebar,
      category: t("골조공사 · 철근작업", "Structural · Rebar"),
      title: t("기초 철근 조립", "Foundation Rebar Assembly"),
      summary: t(
        "기초 철근 조립 공정의 인양·이동·운반 단계에서 발생하는 위험을 다루는 표준 시나리오.",
        "A standard scenario covering lifting, movement, and carrying hazards in foundation rebar assembly.",
      ),
      risks: [
        t("인양로프 파단에 의한 자재 낙하", "Material drop from lifting-rope failure"),
        t("돌출 철근에 의한 안면 창상", "Facial laceration from protruding rebar"),
        t("크레인 조작 미숙 오작동", "Crane misoperation"),
        t("철근 사이 발빠짐", "Foot entrapment between rebars"),
        t("장철근 운반 중 전도·허리 부상", "Topple / back injury while carrying long rebar"),
        t("조립 철근 전도에 의한 협착", "Crushing from toppling assembled rebar"),
      ],
      typeA: {
        goals: [
          t("LO-1 인양 전 줄걸이·인양로프 상태 점검", "LO-1 Inspect rigging & lifting-rope before hoisting"),
          t("LO-2 인양 중 위험 구역 식별·안전 대피", "LO-2 Identify the lift radius & take a safe position"),
          t("LO-3 돌출 철근 위험 인식·철근캡 설치 요청", "LO-3 Recognize protruding rebar & request caps"),
          t("LO-4 이동 시 안전 통로·위험 구간 구분", "LO-4 Distinguish safe walkways from hazard zones"),
          t("LO-5 장철근 운반 시 2인1조·25kg 기준 적용", "LO-5 Apply 2-person / ≤25kg carrying rules"),
          t("LO-6 조립 철근 전도 징후 식별·보강", "LO-6 Detect toppling signs & reinforce"),
        ],
        env: t(
          "터파기 완료 후 기초 매트 배근이 진행 중인 지상 1층 현장. 굴착 깊이 2.5m 피트, 200mm 격자 발빠짐 구간, 덮개 미설치 구간 2개소, 운용 중 타워크레인, 캡 미설치 돌출 철근, 불안정 결속 철근을 의도적으로 배치.",
          "A ground-floor site with foundation mat rebar in progress after excavation. A 2.5 m-deep pit, 200 mm grid entrapment zones, two uncovered openings, an operating tower crane, uncapped protruding rebar, and unstable tied rebar are placed intentionally.",
        ),
        phases: [
          { name: t("Phase 1 · 작업 전 점검", "Phase 1 · Pre-work Inspection"), desc: t("줄걸이를 확인하지 않는 신호수와 캡 미설치 돌출 철근 구간에 대응한다.", "Respond to a signaler skipping rigging checks and an uncapped protruding-rebar zone.") },
          { name: t("Phase 2 · 인양 중 위치 판단", "Phase 2 · Position During Lift"), desc: t("인양 반경 밖으로 대피한다. Phase 1에서 점검을 생략했다면 낙하 사고 분기가 활성화된다.", "Move outside the lift radius. Skipping the Phase 1 check activates a drop-accident branch.") },
          { name: t("Phase 3 · 이동 경로 선택", "Phase 3 · Path Selection"), desc: t("덮개가 설치된 우회 통로(A)와 격자 직선 통과(B) 중 선택한다. B는 발빠짐 사고로 이어진다.", "Choose the covered detour (A) or the direct grid crossing (B); B leads to a foot-entrapment accident.") },
          { name: t("Phase 4 · 장철근 운반 보조", "Phase 4 · Long-rebar Carrying"), desc: t("동료의 6m 장철근 단독 운반에 개입하여 2인1조 협력 운반을 수행한다.", "Intervene in a coworker's solo carry of a 6 m rebar to perform a 2-person carry.") },
          { name: t("Phase 5 · 전도 징후 대응", "Phase 5 · Toppling Response"), desc: t("임시 결속 철근의 기울기를 인지하고 보고·대피 지시·보강을 수행한다.", "Detect the tilting of temporarily tied rebar, then report, evacuate, and reinforce.") },
        ],
      },
      typeB: {
        cctv: t(
          "“최근 30일간 기초 철근 조립 공정에서 인양 전 줄걸이 점검 미수행 7건, 장철근 단독 운반 4건이 감지되었습니다.”",
          "“Over the last 30 days: 7 cases of skipped rigging checks and 4 cases of solo long-rebar carrying detected in foundation rebar assembly.”",
        ),
        swiss: [
          t("방어층 1 — 인양 전 줄걸이·인양로프 점검 / 구멍: 점검 생략 반복", "Layer 1 — Pre-lift rigging check / Hole: repeated skipping"),
          t("방어층 2 — 장철근 2인1조 운반 / 구멍: 단독 운반 반복", "Layer 2 — 2-person carry / Hole: repeated solo carrying"),
        ],
        phases: [
          { name: t("Phase 1 · 줄걸이 점검 습관 교정", "Phase 1 · Fix the rigging-check habit"), desc: t("점검 없이 인양하면 낙하 직전에서 멈추고, 동일 상황을 재시작해 직접 점검 인터랙션을 반복 수행한다.", "Lifting without a check stops just before the drop; the same situation restarts until the inspection is performed.") },
          { name: t("Phase 2 · 2인1조 운반 습관 교정", "Phase 2 · Fix the 2-person carry habit"), desc: t("방관 시 동료 전도 결과를 짧게 보여준 뒤, 협력 운반 인터랙션을 수행하도록 재시작한다.", "Bystanding briefly shows the coworker's fall, then restarts until a cooperative carry is performed.") },
        ],
      },
    },
    {
      id: "crane",
      kind: "process",
      icon: icons.crane,
      category: t("양중 · 해체작업", "Lifting · Dismantling"),
      title: t("타워크레인 해체", "Tower Crane Dismantling"),
      summary: t(
        "고층 타워크레인 해체 작업의 자격 확인·낙하 방지·반경 내 접근 통제 위험을 다루는 시나리오.",
        "A scenario covering qualification checks, drop prevention, and radius access control in high-rise tower-crane dismantling.",
      ),
      risks: [
        t("미자격·미숙련 투입으로 인한 절차 무시", "Procedure violation by unqualified workers"),
        t("볼트·너트·공구 낙하에 의한 하부 피해", "Falling bolts / tools harming workers below"),
        t("해체 반경 내 타 근로자 접근", "Other workers entering the dismantling radius"),
      ],
      typeA: {
        goals: [
          t("LO-1 투입 전 자격·작업절차 숙지 확인", "LO-1 Verify qualifications & procedure before entry"),
          t("LO-2 볼트·공구 낙하 방지 조치(주머니) 수행", "LO-2 Perform drop-prevention (tool pouch) measures"),
          t("LO-3 통제구역 설정·타 근로자 접근 제지", "LO-3 Set a control zone & block access"),
        ],
        env: t(
          "공사 완료 단계 현장에서 마스트 상부 해체가 진행 중. 통제구역 표시가 불완전하고, 낙하방지 주머니 없이 볼트·공구를 다루며, 반경 인근에 타 공종 근로자가 작업 중인 상태를 배치.",
          "At a near-complete site, mast-top dismantling is underway. Control-zone markings are incomplete, bolts/tools are handled without drop pouches, and other-trade workers operate near the radius.",
        ),
        phases: [
          { name: t("Phase 1 · 투입 전 자격 확인", "Phase 1 · Qualification Check"), desc: t("자격증 없이 합류하려는 미숙련 근로자의 자격·작업계획서 숙지 여부를 확인한다.", "Verify the credentials and plan-awareness of an unqualified worker trying to join.") },
          { name: t("Phase 2 · 낙하 방지 조치 확인", "Phase 2 · Drop-prevention Check"), desc: t("고층부에서 낙하방지 주머니 없이 작업하는 팀원에게 주머니 사용을 요청한다.", "Ask a team member working aloft without a tool pouch to use one.") },
          { name: t("Phase 3 · 반경 내 접근 통제", "Phase 3 · Radius Access Control"), desc: t("통제구역을 인지하지 못한 타 공종 근로자를 즉각 제지하고 반경 밖으로 유도한다.", "Immediately stop an unaware worker and guide them out of the radius.") },
        ],
      },
      typeB: {
        cctv: t(
          "“최근 30일간 타워크레인 해체 작업에서 통제구역 미설정·감시자 미배치 6건, 반경 내 접근 제지 미수행 5건이 감지되었습니다.”",
          "“Over the last 30 days: 6 cases of missing control zone / watcher and 5 cases of failing to block radius access in tower-crane dismantling.”",
        ),
        swiss: [
          t("방어층 1 — 통제구역 설정·감시자 배치 / 구멍: 형식적·미설정 반복", "Layer 1 — Control zone & watcher / Hole: nominal or missing"),
          t("방어층 2 — 반경 내 접근 즉각 제지 / 구멍: 제지 미수행 반복", "Layer 2 — Immediate access blocking / Hole: repeated inaction"),
        ],
        phases: [
          { name: t("Phase 1 · 통제구역 설정 습관 교정", "Phase 1 · Fix the control-zone habit"), desc: t("통제 없이 시작하면 접근 근로자 충돌 사고가 발생하고, 재시작 후 경계 설치·감시자 지정을 직접 수행한다.", "Starting without control causes a collision; after restart, set the boundary and assign a watcher.") },
          { name: t("Phase 2 · 접근 제지 습관 교정", "Phase 2 · Fix the blocking habit"), desc: t("제지 미수행 시 낙하 부재 피해를 보여준 뒤, 즉각 제지·유도 인터랙션을 수행하도록 재시작한다.", "Inaction shows a falling-member injury; restart until immediate blocking and guidance are performed.") },
        ],
      },
    },
    {
      id: "elevator",
      kind: "process",
      icon: icons.elevator,
      category: t("설비 · 고소작업", "MEP · Work at Height"),
      title: t("엘리베이터 설치", "Elevator Installation"),
      summary: t(
        "엘리베이터 샤프트·기계실 설치 작업의 추락·낙하 복합 위험을 6단계로 다루는 시나리오.",
        "A six-phase scenario covering the combined fall and drop hazards of elevator shaft & machine-room installation.",
      ),
      risks: [
        t("차폐판 미설치로 인한 추락", "Fall due to missing shaft barriers"),
        t("입구부 자재 낙하", "Material drop at the landing entrance"),
        t("줄걸이 미확인으로 인한 인양물 낙하", "Load drop from unchecked rigging"),
        t("기계실 상부 낙하물 PIT 피해", "Overhead drops harming PIT workers"),
        t("비계발판 파손으로 인한 추락", "Fall from broken scaffold board"),
        t("안전고리 미체결 상태 추락", "Fall while harness is unhooked"),
      ],
      typeA: {
        goals: [
          t("LO-1 차폐판 설치 여부 확인·요청", "LO-1 Check & request shaft barriers"),
          t("LO-2 입구부 자재 낙하 방지 조치", "LO-2 Prevent material drop at the entrance"),
          t("LO-3 인양 전 줄걸이 점검·인양 중지", "LO-3 Inspect rigging & halt unsafe lifts"),
          t("LO-4 기계실 낙하물 징후 인지·PIT 대피", "LO-4 Detect overhead drops & evacuate PIT"),
          t("LO-5 비계발판 안전 상태·고정 확인", "LO-5 Check scaffold-board safety & fixing"),
          t("LO-6 고소 작업 전 안전고리 체결 확인", "LO-6 Verify harness hookup before height work"),
        ],
        env: t(
          "엘리베이터 샤프트·기계실 내부. PIT 깊이 1.5m 레일 설치 중, 일부 층 차폐판 미설치, 기계실 상부 개구부, 줄걸이 미확인 호이스트, 안전고리 미체결 작업자를 동선 위에 배치.",
          "Inside an elevator shaft & machine room. A 1.5 m PIT with rail work in progress, missing barriers on some floors, an overhead machine-room opening, a hoist with unchecked rigging, and an unhooked worker are placed along the path.",
        ),
        phases: [
          { name: t("Phase 1 · 차폐판 설치 확인", "Phase 1 · Barrier Check"), desc: t("미설치 구간을 발견하면 반장에게 설치를 요청한다. 미요청 시 추락 사고가 재현된다.", "On finding a gap, request installation; skipping it reenacts a fall.") },
          { name: t("Phase 2 · 입구부 자재 낙하 방지", "Phase 2 · Entrance Drop Prevention"), desc: t("입구부로 밀릴 위험이 있는 적재 자재를 안전한 위치로 이동하거나 차폐한다.", "Move or shield stacked material that could slide toward the entrance.") },
          { name: t("Phase 3 · 인양 전 줄걸이 점검", "Phase 3 · Pre-lift Rigging Check"), desc: t("줄걸이를 확인하지 않는 신호수에게 접근해 체결 상태를 직접 점검한다.", "Approach the signaler and inspect the rigging directly.") },
          { name: t("Phase 4 · 기계실 낙하물 대응", "Phase 4 · Overhead-drop Response"), desc: t("개구부 방향으로 움직이는 공구 징후를 인지하고 PIT 작업자에게 즉각 대피를 지시한다.", "Detect a tool sliding toward the opening and order the PIT worker to evacuate.") },
          { name: t("Phase 5 · 비계발판 안전 확인", "Phase 5 · Scaffold-board Check"), desc: t("레일과 접촉해 불안정한 발판 상태를 점검하고 고정 여부를 확인한 뒤 작업한다.", "Inspect an unstable board contacting the rail and confirm fixing before work.") },
          { name: t("Phase 6 · 안전고리 체결 확인", "Phase 6 · Harness Check"), desc: t("안전고리를 체결하지 않은 작업자에게 체결을 요청한다.", "Ask an unhooked worker to fasten the harness.") },
        ],
      },
      typeB: {
        cctv: t(
          "“최근 30일간 엘리베이터 설치 작업에서 차폐판 미설치 상태 작업 8건, 인양 전 줄걸이 미확인 6건이 감지되었습니다.”",
          "“Over the last 30 days: 8 cases of working without barriers and 6 cases of lifting without a rigging check in elevator installation.”",
        ),
        swiss: [
          t("방어층 1 — 차폐판 설치·개구부 폐쇄 / 구멍: 미설치 작업 반복", "Layer 1 — Barriers & opening closure / Hole: working without them"),
          t("방어층 2 — 인양 전 줄걸이 점검 / 구멍: 미확인 인양 반복", "Layer 2 — Pre-lift rigging check / Hole: unchecked lifting"),
        ],
        phases: [
          { name: t("Phase 1 · 차폐판 확인 습관 교정", "Phase 1 · Fix the barrier-check habit"), desc: t("미확인 작업 시 추락 직전에서 멈추고, 재시작 후 차폐판 설치 요청을 직접 수행한다.", "Working unchecked stops just before a fall; after restart, request barrier installation.") },
          { name: t("Phase 2 · 줄걸이 점검 습관 교정", "Phase 2 · Fix the rigging-check habit"), desc: t("점검 없이 인양 시 낙하 직전에서 멈추고, 재시작 후 줄걸이 점검 인터랙션을 수행한다.", "Lifting unchecked stops just before a drop; after restart, perform the rigging inspection.") },
        ],
      },
    },
    // ── 현장 스토리 시나리오 (문서 2) ──
    {
      id: "gangform",
      kind: "story",
      icon: icons.fall,
      category: t("추락", "Fall"),
      title: t("갱폼 외부 작업·탈형", "Gang-form Exterior Work & Stripping"),
      basis: t("위험성평가 No.232 · 242 · 위험성 6점", "Risk Assessment No.232 · 242 · Severity 6"),
      setting: t(
        "골조 갱폼조 김 반장 외 3명. 실제 작업할 동·층의 갱폼 위치를 그대로 본뜬 3D 메시 현장을, 작업자 키·시야 높이에 맞춘 1인칭 시점으로 체험한다.",
        "Foreman Kim's gang-form crew (4 people). They experience a 3D-mesh twin of the actual building/floor gang-form layout in a first-person view matched to each worker's height and eye level.",
      ),
      steps: [
        { name: t("STEP 1 · 환경 인지 (자유 탐색)", "STEP 1 · Awareness (Free Exploration)"), desc: t("케이지 주변을 자유롭게 돌며 '위험요소 찾기' 모드. 안전대 걸이는 초록, 단부·개구부는 빨강 표식으로 떠 위험 지도가 형성된다.", "Roam the cage in 'find the hazard' mode. Anchor points glow green, edges/openings glow red—building a mental hazard map.") },
        { name: t("STEP 2 · 추락 체험 (의도된 실패)", "STEP 2 · Fall Experience (Designed Failure)"), desc: t("시스템이 안전대 걸이를 일부러 숨긴다. 걸이 없이 단부로 이동하면 발판이 흔들리고 1인칭 추락 이벤트가 발생한다.", "The system hides anchor points. Moving to the edge without one shakes the board and triggers a first-person fall.") },
        { name: t("STEP 3 · 탈형 단계 (두 번째 함정)", "STEP 3 · Stripping (Second Trap)"), desc: t("갱폼에 올라탄 채 탈형 버튼을 누르면 갱폼이 분리되며 두 번째 추락. '탈형 전 하차'를 행동으로 깨닫는다.", "Pressing 'strip' while riding the gang-form detaches it for a second fall—learning to dismount first by doing.") },
        { name: t("STEP 4 · AI 에이전트 코칭", "STEP 4 · AI Agent Coaching"), desc: t("에이전트가 '원인: 안전대 미체결, 탈형 전 탑승'을 짚고 이중 체결·전원 하차·신호 확인 수칙을 시연한다. 외국인은 모국어로 코칭.", "The agent points out 'cause: unhooked, riding during stripping' and demos double-hookup, full dismount, signal checks—coaching foreign workers in their language.") },
        { name: t("STEP 5 · 재도전·합격", "STEP 5 · Retry & Pass"), desc: t("위험요소 5개 식별 → 안전대 이중 체결 후 단부 이동 → 탈형 절차(전원 하차→신호→탈형)를 무사고로 통과하면 완료된다.", "Identify 5 hazards → move to the edge double-hooked → run the strip sequence (dismount→signal→strip) without incident to finish.") },
      ],
    },
    {
      id: "forklift",
      kind: "story",
      icon: icons.collision,
      category: t("충돌·협착", "Collision"),
      title: t("지게차·굴삭기 후진 협착", "Forklift & Excavator Reversing"),
      basis: t("위험성평가 No.14 · 136 · 172 · 208 · 222 · 단일 최다 위험요인", "Risk Assessment No.14·136·172·208·222 · Single most frequent hazard"),
      setting: t(
        "자재 하역장에 투입되는 신규 작업자 8명(내·외국인 혼합). 멀티플레이로 동시 접속해 같은 가상 하역장에 들어가며, 장비는 실제 제원대로 후방 사각지대가 재현된다.",
        "8 new workers (mixed nationalities) at a loading yard. They join the same virtual yard in multiplayer; equipment reproduces real rear blind spots to spec.",
      ),
      steps: [
        { name: t("STEP 1 · 다국어 브리핑", "STEP 1 · Multilingual Briefing"), desc: t("AI 에이전트가 접속자별 언어(우르두어·한국어 등)로 '오늘 위험: 장비 후진·작업반경'을 안내한다. 언어 장벽 0.", "The AI agent briefs each worker in their language (Urdu, Korean, …): 'today's risks: reversing equipment & work radius.' Zero language barrier.") },
        { name: t("STEP 2 · 사각지대 체험 (의도된 실패)", "STEP 2 · Blind-spot Experience (Designed Failure)"), desc: t("운반 중 무심코 지게차 후방 사각지대로 들어가면 후진 경보음과 충돌 이벤트. '운전자는 너를 못 봤다'는 운전석 시점을 함께 보여준다.", "Wandering into the forklift's rear blind spot triggers a reverse alarm and collision—then shows the driver's view: 'the operator never saw you.'") },
        { name: t("STEP 3 · 작업반경 시각화", "STEP 3 · Work-radius Visualization"), desc: t("굴삭기 회전 반경을 가상 라인으로 깔고, 라인을 넘는 순간 협착 위험을 빨강으로 표시해 '이 선 안에 들어가면 안 된다'를 익힌다.", "An excavator's swing radius is drawn as a line; crossing it flags crush risk in red—learning 'never step inside this line.'") },
        { name: t("STEP 4 · 에이전트 코칭", "STEP 4 · Agent Coaching"), desc: t("'원인: 신호수 미배치, 사각지대 진입'을 짚고 신호수 위치 확인·라인 밖 대기·경보 인지 후 이동을 제시한다.", "Points out 'cause: no signaler, entered blind spot' and prescribes confirming the signaler, waiting outside the line, and moving only after the alarm.") },
        { name: t("STEP 5 · 난도 상승·합격", "STEP 5 · Escalation & Pass"), desc: t("재도전1: 장비 1대+신호수 안전 동선. 재도전2: 다수 장비 혼잡 상황 운반. 8명 전원이 무충돌로 통과해야 세션이 종료된다.", "Retry 1: one machine + signaler. Retry 2: congested multi-machine haul. The session ends only when all 8 pass collision-free.") },
      ],
    },
    {
      id: "sling",
      kind: "story",
      icon: icons.load,
      category: t("인양물 낙하", "Falling Load"),
      title: t("슬링벨트 파단 낙하", "Sling-belt Failure"),
      basis: t("위험성평가 No.150 · 233 · 강도 3 다수", "Risk Assessment No.150 · 233 · Many at strength 3"),
      setting: t(
        "타워크레인 양중 작업조. 가상 양중 구역과 하부 통제구역이 재현되고, 슬링벨트 더미 중 일부에 마모·절단 손상이 숨겨져 있다.",
        "A tower-crane hoisting crew. The virtual lift zone and lower control zone are reproduced, with wear/cut damage hidden among the sling-belt pile.",
      ),
      steps: [
        { name: t("STEP 1 · 줄걸이 점검 임무", "STEP 1 · Rigging Inspection Task"), desc: t("인양 전 슬링벨트를 하나씩 집어 마모·절단·후크 해지장치·결속 상태를 확인한다. 손상부에 시선을 두면 확대뷰로 결함이 드러난다.", "Before lifting, pick up each belt and check wear, cuts, the hook latch, and fastening. Looking at damage reveals it in a zoom view.") },
        { name: t("STEP 2 · 낙하 체험 (의도된 실패)", "STEP 2 · Drop Experience (Designed Failure)"), desc: t("손상 벨트를 못 걸러내고 인양을 시작하면 머리 위에서 거푸집이 낙하하는 이벤트를 1인칭으로 체감한다.", "Failing to catch a damaged belt and starting the lift makes formwork drop overhead—felt in first person.") },
        { name: t("STEP 3 · 하부 통제 함정", "STEP 3 · Lower-zone Trap"), desc: t("인양 반경 하부에 가상 작업자가 있는 상태에서 인양을 개시하면 협착·낙하 경고가 뜬다. '인양 중 하부 출입 통제'의 이유를 익힌다.", "Starting a lift while a worker stands below triggers a crush/drop warning—learning why the area below must be cleared.") },
        { name: t("STEP 4 · 에이전트 코칭", "STEP 4 · Agent Coaching"), desc: t("'원인: 줄걸이 점검 소홀, 하부 통제 미흡'을 짚고 손상 벨트 교체·후크 해지장치 확인·하부 통제선 설정·신호 개시를 시연한다.", "Points out 'cause: poor rigging check, weak lower control' and demos belt replacement, latch checks, a lower control line, and signal-based start.") },
        { name: t("STEP 5 · 체크리스트 합격", "STEP 5 · Checklist Pass"), desc: t("손상 벨트 식별·교체 → 후크·결속 확인 → 하부 통제선 설정 → 신호 후 인양 개시. 전 항목을 순서대로 통과해야 완료된다.", "Identify/replace damaged belts → check hook & fastening → set the lower control line → lift on signal. All items in order to finish.") },
      ],
    },
  ];
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ISafeMetaScenario({ language = "ko" }: { language?: Lang }) {
  const loop = getLoop(language);
  const scenarios = getScenarios(language);
  const [openId, setOpenId] = useState<string | null>(null);
  const [tab, setTab] = useState<"A" | "B">("A");

  const active = scenarios.find((s) => s.id === openId) || null;

  const open = (id: string) => {
    setTab("A");
    setOpenId(id);
  };

  const processList = scenarios.filter((s): s is ProcessScenario => s.kind === "process");
  const storyList = scenarios.filter((s): s is StoryScenario => s.kind === "story");

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
            {language === "ko" ? "사용 시나리오" : "Use Scenarios"}
          </p>
          <h2 className="text-3xl lg:text-[40px] font-black text-gray-900 mb-4">
            {language === "ko" ? "현장 데이터로 처방하는 VR 안전훈련" : "VR Safety Training Prescribed by Site Data"}
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            {language === "ko"
              ? "AI CCTV가 감지한 현장 데이터를 기반으로, 작업자 유형과 반복 오류에 맞춘 VR 시나리오를 자동으로 처방합니다."
              : "Based on hazards detected by AI CCTV, iSafeMeta auto-prescribes VR scenarios tailored to each worker's profile and recurring errors."}
          </p>
        </div>

        {/* 4-step loop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {loop.map((s, i) => (
            <div key={s.step} className="relative bg-white rounded-2xl border border-gray-100 p-6">
              <span className="text-[30px] font-black text-red-100 leading-none">{s.step}</span>
              <p className="text-[18px] font-bold text-gray-900 mt-2 mb-2">{s.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              {i < loop.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 text-red-300 text-xl">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Process-based scenarios */}
        <div className="mb-6">
          <h3 className="text-2xl font-black text-gray-900">
            {language === "ko" ? "공정별 표준 시나리오" : "Process-based Scenarios"}
          </h3>
          <p className="text-gray-500 mt-1">
            {language === "ko"
              ? "Type A 신규 투입(환경 인지) · Type B 반복 오류 교정(스위스 치즈 모델)"
              : "Type A new entrants (hazard awareness) · Type B repeat-error correction (Swiss-cheese model)"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {processList.map((s) => (
            <button
              key={s.id}
              onClick={() => open(s.id)}
              className="text-left bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:border-red-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-5">{s.icon}</div>
              <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">{s.category}</span>
              <p className="text-[22px] font-bold text-gray-900 mt-1 mb-2">{s.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.summary}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-red-50 text-red-600">Type A</span>
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-orange-50 text-orange-600">Type B</span>
                <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-gray-100 text-gray-500">
                  {language === "ko" ? `위험요인 ${s.risks.length}종` : `${s.risks.length} hazards`}
                </span>
              </div>
              <span className="text-sm font-bold text-red-600 group-hover:underline">
                {language === "ko" ? "시나리오 보기 →" : "View scenario →"}
              </span>
            </button>
          ))}
        </div>

        {/* Story-based scenarios */}
        <div className="mb-6">
          <h3 className="text-2xl font-black text-gray-900">
            {language === "ko" ? "현장 스토리 시나리오" : "Field-story Scenarios"}
          </h3>
          <p className="text-gray-500 mt-1">
            {language === "ko"
              ? "실제 위험성평가 사례 기반 · 5단계 몰입형 체험(의도된 실패 → AI 코칭 → 합격 임무)"
              : "Based on real risk-assessment cases · 5-step immersive flow (designed failure → AI coaching → pass task)"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storyList.map((s) => (
            <button
              key={s.id}
              onClick={() => open(s.id)}
              className="text-left bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:border-red-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-5">{s.icon}</div>
              <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">{s.category}</span>
              <p className="text-[22px] font-bold text-gray-900 mt-1 mb-2">{s.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.setting}</p>
              <span className="text-sm font-bold text-rose-600 group-hover:underline">
                {language === "ko" ? "5단계 체험 보기 →" : "View 5-step flow →"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {active && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] p-4 sm:p-6"
          onClick={() => setOpenId(null)}
        >
          <div
            className="bg-white w-full max-w-[720px] max-h-[88vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden"
            style={{ animation: "fadeSlide 0.25s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-7 pb-5 border-b border-gray-100">
              <button
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors text-[28px] leading-none"
                onClick={() => setOpenId(null)}
              >
                &times;
              </button>
              <div className="flex items-start gap-4 pr-8">
                <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0 ${active.kind === "process" ? "bg-red-50 text-red-500" : "bg-rose-50 text-rose-500"}`}>
                  {active.icon}
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${active.kind === "process" ? "text-red-500" : "text-rose-500"}`}>
                    {active.category}
                  </span>
                  <h3 className="text-[26px] font-bold text-gray-900 leading-snug">{active.title}</h3>
                  {active.kind === "story" && (
                    <p className="text-xs text-gray-400 mt-1 font-mono">{active.basis}</p>
                  )}
                </div>
              </div>

              {/* Type tabs for process scenarios */}
              {active.kind === "process" && (
                <div className="flex gap-2 mt-5">
                  <button
                    onClick={() => setTab("A")}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${tab === "A" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-500 hover:text-gray-800"}`}
                  >
                    {language === "ko" ? "Type A · 신규 투입" : "Type A · New Entrant"}
                  </button>
                  <button
                    onClick={() => setTab("B")}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${tab === "B" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500 hover:text-gray-800"}`}
                  >
                    {language === "ko" ? "Type B · 반복 오류 교정" : "Type B · Repeat-error"}
                  </button>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-7 pt-6 overflow-y-auto">
              {active.kind === "process" ? (
                <>
                  {tab === "A" ? (
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                          {language === "ko" ? "위험요인" : "Hazards"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {active.risks.map((r) => (
                            <span key={r} className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 text-gray-600">{r}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                          {language === "ko" ? "학습 목표" : "Learning Objectives"}
                        </p>
                        <ul className="space-y-1.5">
                          {active.typeA.goals.map((g) => (
                            <li key={g} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckIcon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />{g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                          {language === "ko" ? "VR 환경" : "VR Environment"}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">{active.typeA.env}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                          {language === "ko" ? "Phase 흐름" : "Phase Flow"}
                        </p>
                        <ol className="space-y-3">
                          {active.typeA.phases.map((p, idx) => (
                            <li key={p.name} className="flex gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-red-50 text-red-600 text-xs font-bold flex items-center justify-center mt-0.5">{idx + 1}</span>
                              <div>
                                <p className="text-sm font-bold text-gray-900">{p.name}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-gray-900 rounded-xl p-4">
                        <p className="text-[11px] font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          {language === "ko" ? "AI CCTV 분석 (가정)" : "AI CCTV Analysis (sample)"}
                        </p>
                        <p className="text-sm text-gray-200 leading-relaxed">{active.typeB.cctv}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                          {language === "ko" ? "스위스 치즈 모델 — 방어층의 구멍" : "Swiss-cheese Model — Holes in Defenses"}
                        </p>
                        <ul className="space-y-1.5">
                          {active.typeB.swiss.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />{s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                          {language === "ko" ? "Phase 흐름 (의도된 실패 → 습관 교정)" : "Phase Flow (designed failure → habit correction)"}
                        </p>
                        <ol className="space-y-3">
                          {active.typeB.phases.map((p, idx) => (
                            <li key={p.name} className="flex gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-orange-50 text-orange-600 text-xs font-bold flex items-center justify-center mt-0.5">{idx + 1}</span>
                              <div>
                                <p className="text-sm font-bold text-gray-900">{p.name}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                      {language === "ko" ? "교육 대상 · 세팅" : "Audience · Setup"}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">{active.setting}</p>
                  </div>
                  <div className="relative pl-4">
                    <div className="absolute left-[11px] top-1 bottom-1 w-0.5 bg-rose-100" />
                    <ol className="space-y-4">
                      {active.steps.map((p, idx) => (
                        <li key={p.name} className="relative flex gap-4">
                          <span className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center -ml-1">{idx + 1}</span>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{p.name}</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
