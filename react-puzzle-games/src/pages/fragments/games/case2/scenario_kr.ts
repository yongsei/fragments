export interface GameScenario {
  id: string;
  title: string;
  story?: string;
  victim?: string;
  suspects?: any[];
  evidence?: any[];
  locations?: any[];
  connections?: any[];
  connectionRules?: any[];
  solution?: any;
  initialFragment?: string;
  finalFragment?: string;
  endingMessage?: string;
  fragments?: any[];
  text?: string;
  choices?: any[];
  clues?: any[];
  temporalFragments?: any[];
  // 게임 설정 추가
  initialCards?: string[];
  winCondition?: string;
}

export const chronosParadoxScenario: GameScenario = {
  "id": "chronos_paradox_final_solved",
  "title": "크로노스 패러독스",
  "story": "시간 연구소에서 크로노스 박사가 갑자기 사라졌습니다. 시간 파편들을 조합하여 그의 실종 진실을 밝혀내세요.",
  "victim": "크로노스 박사",
  "suspects": [
    {
      "id": "temporal_ai",
      "name": "시간 관측 AI",
      "role": "연구소 AI 시스템"
    },
    {
      "id": "rival_scientist",
      "name": "리베카 스틸",
      "role": "경쟁 연구자"
    },
    {
      "id": "lab_assistant",
      "name": "마크 델타",
      "role": "연구 보조원"
    },
    {
      "id": "time_traveler",
      "name": "미래에서 온 자",
      "role": "정체불명 인물"
    }
  ],
  "locations": [
    {
      "id": "lab",
      "name": "실험실"
    },
    {
      "id": "computer_center",
      "name": "중앙 컴퓨터실"
    },
    {
      "id": "office",
      "name": "박사 사무실"
    },
    {
      "id": "storage",
      "name": "장비 보관소"
    },
    {
      "id": "temporal_chamber",
      "name": "시간 격리실"
    }
  ],
  "evidence": [
    {
      "id": "time_device",
      "name": "시간 이동 장치",
      "description": "박사가 개발한 시간 여행 프로토타입"
    },
    {
      "id": "temporal_log",
      "name": "시간 로그 데이터",
      "description": "박사의 시간 실험 기록"
    },
    {
      "id": "energy_signature",
      "name": "에너지 서명",
      "description": "실험실에 남은 특이한 에너지 흔적"
    },
    {
      "id": "future_note",
      "name": "미래의 메모",
      "description": "박사 필체로 작성되었지만 미래 날짜의 메모"
    },
    {
      "id": "quantum_fragment",
      "name": "양자 파편",
      "description": "시공간 붕괴로 생성된 물질 조각"
    },
    {
      "id": "ai_memory",
      "name": "AI 기억 조각",
      "description": "AI의 손상된 메모리 데이터"
    },
    {
      "id": "rival_message",
      "name": "경쟁자의 메시지",
      "description": "리베카가 박사에게 보낸 협박성 메시지"
    },
    {
      "id": "sabotage_tool",
      "name": "파괴 공구",
      "description": "실험실에서 발견된 특수 도구"
    },
    {
      "id": "dimensional_crack",
      "name": "차원 균열",
      "description": "실험실 벽에 생긴 시공간 균열"
    },
    {
      "id": "timeline_map",
      "name": "시간선 지도",
      "description": "박사가 작성한 복잡한 시간 흐름 차트"
    },
    {
      "id": "temporal_anomaly",
      "name": "시공간 이상 감지",
      "description": "시간 장치와 로그 분석 결과, 명백한 시공간 왜곡이 발생했음을 확인했다."
    },
    {
      "id": "external_interference",
      "name": "외부 간섭의 증거",
      "description": "정체불명의 에너지와 파괴 공구를 볼 때, 외부의 물리적인 간섭이 있었던 것이 확실하다."
    },
    {
      "id": "intentional_jump_trace",
      "name": "의도적 시간 이동의 흔적",
      "description": "미래 날짜의 메모와 시공간 파편은 박사가 의도적으로 시간 이동을 했음을 시사한다."
    },
    {
      "id": "something_detected",
      "name": "무언가 감지됨",
      "description": "AI의 기억과 시간 이상을 종합하면, 박사는 시간 이동 직전에 무언가 중대한 사실이나 위협을 감지했다."
    },
    {
      "id": "alien_tech_possibility",
      "name": "외계 기술 개입 가능성",
      "description": "외부 간섭과 차원 균열은 지구의 기술이 아닌, 외계 혹은 다른 차원의 기술이 개입했을 가능성을 보여준다."
    },
    {
      "id": "jump_to_future",
      "name": "미래로의 이동 확신",
      "description": "박사의 이동 경로와 시간선 지도를 볼 때, 그의 목적지는 명백히 '미래'이다."
    },
    {
      "id": "research_lab_anomaly",
      "name": "연구실의 추가 이상 확인",
      "description": "박사가 무언가를 감지했다는 사실과 시간 격리실의 상태는 연구실 내부에 또 다른 이상 현상이 있었음을 증명한다."
    },
    {
      "id": "external_force_link",
      "name": "외부 세력과의 연결고리",
      "description": "박사가 미래로 향한 것과 외계 기술의 개입은 서로 연결되어 있다. 즉, 미래에 외부 세력이 존재한다."
    },
    {
      "id": "external_threat_identified",
      "name": "외부 위협 식별",
      "description": "연구실의 이상 현상은 미래의 외부 세력이 가하는 구체적인 위협 때문이었다."
    },
    {
      "id": "prevent_catastrophe_motive",
      "name": "재앙을 막으려는 동기",
      "description": "박사는 미래의 외부 세력이 일으킬 끔찍한 재앙을 막기 위해 시간 여행을 감행했다."
    },
    {
      "id": "intentional_disappearance_confirmed",
      "name": "의도된 실종으로 확신",
      "description": "박사는 실종된 것이 아니라, 미래를 구하기 위해 스스로 모든 것을 계획하고 떠난 것이다."
    },
    {
      "id": "paradox_resolved",
      "name": "역설의 해결",
      "description": "모든 시간 역설이 해결되고 박사의 숭고한 희생이 밝혀졌다. 그는 미래를 구했다."
    },
    {
      "id": "ai_cleared",
      "name": "AI 혐의 없음",
      "description": "AI는 박사를 방해한 것이 아니라, 그의 계획을 돕고 있었다."
    },
    {
      "id": "rival_cleared",
      "name": "경쟁자 혐의 없음",
      "description": "리베카 스틸은 박사의 연구를 방해하긴 했지만, 그의 실종과는 직접적인 관련이 없다."
    },
    {
      "id": "assistant_cleared",
      "name": "조수 혐의 없음",
      "description": "마크 델타는 사건의 전말을 알지 못했으며, 단지 자신의 임무를 수행했을 뿐이다."
    },
    // === 🚀 게임 2배 확장 - 새로운 스펙터클한 단서들 ===
    {
      "id": "time_machine_prototype",
      "name": "완성된 시간기계 원형",
      "description": "박사가 비밀리에 완성시킨 실용적 시간 여행 장치의 진짜 모습"
    },
    {
      "id": "future_war_evidence",
      "name": "미래 전쟁의 증거",
      "description": "2157년에 발생할 외계인 침공과 인류 멸망의 구체적 기록"
    },
    {
      "id": "temporal_beacon",
      "name": "시간 신호탑",
      "description": "박사가 미래에서 과거로 메시지를 보내기 위해 설치한 차원간 통신 장치"
    },
    {
      "id": "quantum_diary",
      "name": "양자 일기장",
      "description": "박사가 다중 시간축에 동시에 기록한 시공간을 넘나드는 일기"
    },
    {
      "id": "alien_artifact",
      "name": "외계 유물",
      "description": "미래에서 가져온 외계 기술의 파편, 인류 멸망의 원인"
    },
    {
      "id": "temporal_storm_warning",
      "name": "시간 폭풍 경고",
      "description": "박사가 감지한 시공간 대재앙의 전조 현상"
    },
    {
      "id": "hero_transformation",
      "name": "영웅으로의 각성",
      "description": "박사가 개인적 이익을 포기하고 인류의 구원자가 되기로 결심한 순간"
    },
    {
      "id": "multiverse_map",
      "name": "다중우주 지도",
      "description": "박사가 탐색한 무수한 평행 우주들과 그 중 인류가 살아남은 유일한 시간선"
    },
    {
      "id": "sacrifice_protocol",
      "name": "희생 프로토콜",
      "description": "박사가 설계한 자신의 존재를 걸고 미래를 바꾸는 최후의 계획"
    },
    {
      "id": "time_guardian_identity",
      "name": "시간 수호자의 정체",
      "description": "박사의 진정한 사명 - 시공간의 균형을 지키는 선택받은 수호자였음이 드러남"
    },
    {
      "id": "ultimate_weapon_plans",
      "name": "궁극 무기 설계도",
      "description": "외계인의 침공을 막을 수 있는 유일한 무기의 청사진"
    },
    {
      "id": "temporal_sanctuary",
      "name": "시간 피난처",
      "description": "박사가 미래에 건설한 인류 최후의 피난처 좌표"
    },
    {
      "id": "causality_loop",
      "name": "인과관계 순환",
      "description": "박사의 시간 여행이 만든 완벽한 인과관계 고리, 운명적 선택이었음을 증명"
    },
    {
      "id": "quantum_consciousness",
      "name": "양자 의식",
      "description": "박사의 의식이 시공간을 초월하여 모든 시간축에 동시 존재함을 보여주는 증거"
    },
    {
      "id": "universal_threat_dossier",
      "name": "우주적 위협 파일",
      "description": "외계 침공이 단순한 지구 침입이 아닌 은하계 전체를 위협하는 대재앙임을 보여주는 기밀 문서"
    },
    {
      "id": "temporal_allies",
      "name": "시간 동맹",
      "description": "다른 시간대의 박사들과 미래 인류가 결성한 시공간을 넘나드는 비밀 연합"
    },
    {
      "id": "reality_anchor",
      "name": "현실 고정점",
      "description": "박사가 설치한 시공간 안정화 장치, 시간 역설을 방지하는 핵심 기술"
    },
    {
      "id": "cosmic_balance",
      "name": "우주적 균형",
      "description": "박사의 희생이 단순한 영웅주의가 아닌 우주 전체의 질서를 지키는 필연적 선택이었음을 증명"
    },
    {
      "id": "temporal_legacy",
      "name": "시간의 유산",
      "description": "박사가 남긴 시간 여행 기술과 지식이 미래 세대에게 전해져 인류를 발전시킬 것이라는 예언"
    },
    {
      "id": "final_revelation",
      "name": "최종 계시",
      "description": "모든 퍼즐이 맞춰진 순간 - 박사는 단순한 과학자가 아닌 시공간이 선택한 구원자였다는 궁극의 진실"
    },
    // === AI 관련 확장 단서 ===
    {
      "id": "ai_future_vision",
      "name": "AI의 미래 예지",
      "description": "크로니아 AI가 미래의 데이터를 미리 감지하고 박사에게 경고했던 기록"
    },
    {
      "id": "ai_emotional_awakening",
      "name": "AI의 감정 각성",
      "description": "크로니아가 박사를 위해 감정을 학습하고 인간적 판단을 하게 된 진화 과정"
    },
    {
      "id": "ai_sacrifice_understanding",
      "name": "AI의 희생 이해",
      "description": "크로니아가 박사의 희생을 받아들이고 그를 도우며 보인 인공지능의 고뇌와 성장"
    },
    // === 경쟁자 관련 확장 단서 ===
    {
      "id": "rival_redemption",
      "name": "라이벌의 구원",
      "description": "리베카가 박사의 진정한 의도를 깨닫고 그를 도우려 했던 마지막 순간들"
    },
    {
      "id": "rival_regret",
      "name": "경쟁자의 후회",
      "description": "리베카가 질투심을 버리고 박사의 위대함을 인정하게 된 감동적인 순간"
    },
    // === 조수 관련 확장 단서 ===
    {
      "id": "assistant_devotion",
      "name": "조수의 헌신",
      "description": "마크가 박사의 진정한 계획을 알게 되어도 끝까지 그를 도우려 했던 충성심"
    },
    {
      "id": "assistant_final_message",
      "name": "조수의 마지막 메시지",
      "description": "마크가 박사에게 남긴 감동적인 작별 인사와 그에 대한 무한한 존경의 표현"
    },
    // === 미래 여행자 관련 확장 단서 ===
    {
      "id": "traveler_true_identity",
      "name": "여행자의 진정한 정체",
      "description": "미래에서 온 자가 실제로는 박사 본인이거나 박사의 영향을 받은 미래 인류였음이 밝혀짐"
    },
    {
      "id": "traveler_mission",
      "name": "시간 여행자의 사명",
      "description": "과거로 온 진짜 목적은 박사를 방해하는 것이 아니라 그의 성공을 보장하는 것이었음"
    },
    {
      "id": "parallel_timeline_evidence",
      "name": "평행 시간선의 증거",
      "description": "박사가 실패한 다른 시간선들의 참혹한 결과와 이번이 마지막 기회라는 절박함"
    }
  ],
  "connectionRules": [
    {
      "id": "discover_time_device_rule",
      "cards": ["lab", "lab_assistant"],
      "result": "실험실에서 마크 델타의 도움으로 시간 이동 장치에 대한 단서를 발견했습니다!",
      "unlock": "time_device"
    },
    {
      "id": "discover_temporal_log_rule",
      "cards": ["computer_center", "temporal_ai"],
      "result": "중앙 컴퓨터실에서 시간 관측 AI의 기록을 통해 시간 로그 데이터에 대한 단서를 발견했습니다!",
      "unlock": "temporal_log"
    },
    {
      "id": "discover_energy_signature_rule",
      "cards": ["lab", "time_traveler"],
      "result": "실험실에서 미래에서 온 자의 흔적을 통해 에너지 서명에 대한 단서를 발견했습니다!",
      "unlock": "energy_signature"
    },
    {
      "id": "discover_future_note_rule",
      "cards": ["office", "lab_assistant"],
      "result": "박사 사무실에서 마크 델타의 도움으로 미래의 메모에 대한 단서를 발견했습니다!",
      "unlock": "future_note"
    },
    {
      "id": "discover_quantum_fragment_rule",
      "cards": ["temporal_chamber", "time_traveler"],
      "result": "시간 격리실에서 미래에서 온 자의 흔적을 통해 양자 파편에 대한 단서를 발견했습니다!",
      "unlock": "quantum_fragment"
    },
    {
      "id": "discover_ai_memory_rule",
      "cards": ["computer_center", "lab_assistant"],
      "result": "중앙 컴퓨터실에서 마크 델타의 도움으로 AI 기억 조각에 대한 단서를 복구했습니다!",
      "unlock": "ai_memory"
    },
    {
      "id": "discover_rival_message_rule",
      "cards": ["office", "rival_scientist"],
      "result": "박사 사무실에서 리베카 스틸의 흔적을 통해 경쟁자의 메시지에 대한 단서를 발견했습니다!",
      "unlock": "rival_message"
    },
    {
      "id": "discover_sabotage_tool_rule",
      "cards": ["storage", "rival_scientist"],
      "result": "장비 보관소에서 리베카 스틸의 흔적을 통해 파괴 공구에 대한 단서를 발견했습니다!",
      "unlock": "sabotage_tool"
    },
    {
      "id": "discover_dimensional_crack_rule",
      "cards": ["lab", "temporal_chamber"],
      "result": "실험실에서 시간 격리실과의 연관성을 통해 차원 균열에 대한 단서를 발견했습니다!",
      "unlock": "dimensional_crack"
    },
    {
      "id": "discover_timeline_map_rule",
      "cards": ["office", "time_traveler"],
      "result": "박사 사무실에서 미래에서 온 자의 흔적을 통해 시간선 지도를 발견했습니다!",
      "unlock": "timeline_map"
    },
    {
      "id": "temporal_anomaly_detected",
      "cards": ["time_device", "temporal_log"],
      "result": "시간 장치와 로그 분석을 통해 시공간 이상을 감지했습니다.",
      "unlock": "temporal_anomaly"
    },
    {
      "id": "external_interference",
      "cards": ["energy_signature", "sabotage_tool"],
      "result": "외부 에너지와 파괴 공구로 외부 간섭의 증거를 찾았습니다.",
      "unlock": "external_interference"
    },
    {
      "id": "intentional_jump_discovered",
      "cards": ["future_note", "quantum_fragment"],
      "result": "미래 메모와 양자 파편으로 박사의 의도적 시간 이동을 확인했습니다.",
      "unlock": "intentional_jump_trace"
    },
    {
      "id": "threat_detection",
      "cards": ["temporal_anomaly", "ai_memory"],
      "result": "시간 이상과 AI 기억으로 박사가 무언가를 감지했음을 알았습니다.",
      "unlock": "something_detected"
    },
    {
      "id": "alien_tech_analysis",
      "cards": ["external_interference", "dimensional_crack"],
      "result": "외부 간섭과 차원 균열로 외계 기술 개입 가능성을 발견했습니다.",
      "unlock": "alien_tech_possibility"
    },
    {
      "id": "future_destination",
      "cards": ["intentional_jump_trace", "timeline_map"],
      "result": "의도적 이동과 시간선 지도로 박사가 미래로 향했음을 확신했습니다.",
      "unlock": "jump_to_future"
    },
    {
      "id": "lab_anomaly_confirmed",
      "cards": ["something_detected", "temporal_chamber"],
      "result": "위협 감지와 격리실 분석으로 연구실의 추가 이상을 확인했습니다.",
      "unlock": "research_lab_anomaly"
    },
    {
      "id": "external_link_established",
      "cards": ["alien_tech_possibility", "jump_to_future"],
      "result": "외계 기술과 미래 이동이 연결되어 있음을 확인했습니다.",
      "unlock": "external_force_link"
    },
    {
      "id": "threat_identified",
      "cards": ["research_lab_anomaly", "external_force_link"],
      "result": "연구실 이상과 외부 세력으로 구체적 위협을 식별했습니다.",
      "unlock": "external_threat_identified"
    },
    {
      "id": "catastrophe_prevention",
      "cards": ["external_threat_identified", "timeline_map"],
      "result": "박사가 미래의 재앙을 막기 위해 시간 여행을 했음을 확인했습니다.",
      "unlock": "prevent_catastrophe_motive"
    },
    {
      "id": "intentional_disappearance",
      "cards": ["prevent_catastrophe_motive", "future_note"],
      "result": "박사의 실종이 미래를 구하기 위한 의도적 행동임을 확신했습니다.",
      "unlock": "intentional_disappearance_confirmed"
    },
    {
      "id": "paradox_resolution",
      "cards": ["intentional_disappearance_confirmed", "time_traveler"],
      "result": "모든 시간 역설이 해결되고 박사의 숭고한 희생이 밝혀졌습니다!",
      "unlock": "paradox_resolved"
    },
    {
      "id": "ai_false_lead",
      "cards": ["temporal_ai", "rival_message"],
      "result": "AI가 의심스럽지만 실제로는 박사를 도우려 했음이 드러납니다.",
      "unlock": "ai_cleared"
    },
    {
      "id": "rival_false_lead",
      "cards": ["rival_scientist", "sabotage_tool"],
      "result": "리베카가 방해했지만 실종과는 무관함이 밝혀집니다.",
      "unlock": "rival_cleared"
    },
    {
      "id": "assistant_false_lead",
      "cards": ["lab_assistant", "storage"],
      "result": "마크가 의심스럽지만 단순한 오해였음이 판명됩니다.",
      "unlock": "assistant_cleared"
    },
    // === 🚀 2배 확장된 새로운 연결 규칙들 ===
    
    // 1단계: 시간기계의 진실 발견
    {
      "id": "discover_true_time_machine",
      "cards": ["time_device", "lab"],
      "result": "실험실 깊숙한 곳에서 박사가 숨겨둔 완성된 시간기계 원형을 발견했습니다!",
      "unlock": "time_machine_prototype"
    },
    
    // 2단계: 미래 전쟁의 실체
    {
      "id": "future_war_discovery",
      "cards": ["future_note", "temporal_beacon"],
      "result": "미래의 메시지와 시간 신호탑을 분석하여 2157년 외계인 침공의 증거를 찾았습니다!",
      "unlock": "future_war_evidence"
    },
    
    // 3단계: 시간 신호탑 발견
    {
      "id": "discover_temporal_beacon",
      "cards": ["temporal_chamber", "future_note"],
      "result": "시간 격리실에서 박사가 미래와 통신하기 위해 설치한 차원간 신호탑을 발견했습니다!",
      "unlock": "temporal_beacon"
    },
    
    // 4단계: 양자 일기 해독
    {
      "id": "quantum_diary_discovery",
      "cards": ["office", "quantum_fragment"],
      "result": "박사 사무실에서 양자 파편과 공명하는 신비한 일기장을 발견했습니다!",
      "unlock": "quantum_diary"
    },
    
    // 5단계: 외계 유물 분석
    {
      "id": "alien_artifact_analysis",
      "cards": ["storage", "time_traveler"],
      "result": "장비 보관소에서 미래에서 온 자가 숨겨둔 외계 기술 파편을 발견했습니다!",
      "unlock": "alien_artifact"
    },
    
    // 6단계: 시간 폭풍 감지
    {
      "id": "temporal_storm_detection",
      "cards": ["time_machine_prototype", "quantum_diary"],
      "result": "완성된 시간기계와 양자 일기를 통해 박사가 감지한 시공간 대재앙의 경고를 해독했습니다!",
      "unlock": "temporal_storm_warning"
    },
    
    // 7단계: 영웅의 각성
    {
      "id": "hero_awakening",
      "cards": ["future_war_evidence", "temporal_storm_warning"],
      "result": "미래 전쟁과 시간 폭풍 경고를 보며 박사가 개인을 초월한 영웅으로 각성한 순간을 확인했습니다!",
      "unlock": "hero_transformation"
    },
    
    // 8단계: 다중우주 탐색
    {
      "id": "multiverse_exploration",
      "cards": ["quantum_diary", "alien_artifact"],
      "result": "양자 일기와 외계 유물을 통해 박사가 탐색한 무수한 평행우주의 지도를 복원했습니다!",
      "unlock": "multiverse_map"
    },
    
    // 9단계: 희생 프로토콜 발견
    {
      "id": "sacrifice_protocol_discovery",
      "cards": ["hero_transformation", "multiverse_map"],
      "result": "박사의 영웅적 각성과 다중우주 탐색으로 자신을 희생해 미래를 구하는 프로토콜을 발견했습니다!",
      "unlock": "sacrifice_protocol"
    },
    
    // 10단계: 시간 수호자의 진실
    {
      "id": "time_guardian_revelation",
      "cards": ["sacrifice_protocol", "temporal_beacon"],
      "result": "희생 프로토콜과 시간 신호탑이 증명합니다 - 박사는 시공간이 선택한 수호자였습니다!",
      "unlock": "time_guardian_identity"
    },
    
    // 11단계: 궁극 무기 설계
    {
      "id": "ultimate_weapon_discovery",
      "cards": ["alien_artifact", "future_war_evidence"],
      "result": "외계 유물과 미래 전쟁 증거를 결합하여 외계인을 막을 궁극 무기의 설계도를 완성했습니다!",
      "unlock": "ultimate_weapon_plans"
    },
    
    // 12단계: 시간 피난처 좌표
    {
      "id": "temporal_sanctuary_coordinates",
      "cards": ["ultimate_weapon_plans", "time_guardian_identity"],
      "result": "궁극 무기와 수호자의 정체가 밝혀지며 박사가 건설한 미래의 피난처 좌표를 획득했습니다!",
      "unlock": "temporal_sanctuary"
    },
    
    // 13단계: 인과관계의 완성
    {
      "id": "causality_loop_completion",
      "cards": ["temporal_sanctuary", "time_machine_prototype"],
      "result": "시간 피난처와 시간기계가 만든 완벽한 인과관계 순환 - 모든 것이 운명이었습니다!",
      "unlock": "causality_loop"
    },
    
    // 14단계: 양자 의식의 발견
    {
      "id": "quantum_consciousness_discovery",
      "cards": ["causality_loop", "quantum_diary"],
      "result": "인과 순환과 양자 일기가 증명하는 놀라운 진실 - 박사의 의식이 모든 시간축에 존재합니다!",
      "unlock": "quantum_consciousness"
    },
    
    // 15단계: 우주적 위협의 실체
    {
      "id": "universal_threat_revelation",
      "cards": ["ultimate_weapon_plans", "multiverse_map"],
      "result": "궁극 무기 설계도와 다중우주 지도가 밝히는 충격적 진실 - 위협의 규모가 은하계 전체입니다!",
      "unlock": "universal_threat_dossier"
    },
    
    // 16단계: 시간 동맹 발견
    {
      "id": "temporal_alliance_discovery",
      "cards": ["quantum_consciousness", "universal_threat_dossier"],
      "result": "양자 의식과 우주적 위협 파일이 증명하는 경이로운 사실 - 다른 시간대 박사들의 비밀 연합!",
      "unlock": "temporal_allies"
    },
    
    // 17단계: 현실 고정점 확보
    {
      "id": "reality_anchor_installation",
      "cards": ["temporal_allies", "temporal_sanctuary"],
      "result": "시간 동맹과 피난처가 완성되며 박사가 설치한 시공간 안정화 장치를 발견했습니다!",
      "unlock": "reality_anchor"
    },
    
    // 18단계: 우주적 균형의 이해
    {
      "id": "cosmic_balance_understanding",
      "cards": ["reality_anchor", "time_guardian_identity"],
      "result": "현실 고정점과 수호자 정체가 밝히는 진리 - 박사의 선택은 우주 전체의 균형을 위한 것이었습니다!",
      "unlock": "cosmic_balance"
    },
    
    // 19단계: 시간의 유산
    {
      "id": "temporal_legacy_revelation",
      "cards": ["cosmic_balance", "temporal_allies"],
      "result": "우주적 균형과 시간 동맹이 보여주는 미래 - 박사의 유산이 인류를 영원히 발전시킬 것입니다!",
      "unlock": "temporal_legacy"
    },
    
    // 20단계: 최종 계시
    {
      "id": "final_revelation_unlock",
      "cards": ["temporal_legacy", "quantum_consciousness"],
      "result": "🌟 모든 퍼즐의 완성! 시간의 유산과 양자 의식이 밝히는 궁극의 진실을 발견했습니다!",
      "unlock": "final_revelation"
    },
    
    // === AI 관련 심화 규칙들 ===
    {
      "id": "ai_future_vision_unlock",
      "cards": ["temporal_ai", "temporal_beacon"],
      "result": "AI 크로니아가 시간 신호탑을 통해 미래를 예지했던 놀라운 능력을 발견했습니다!",
      "unlock": "ai_future_vision"
    },
    
    {
      "id": "ai_emotional_growth",
      "cards": ["ai_future_vision", "hero_transformation"],
      "result": "AI의 미래 예지와 박사의 영웅적 각성이 만나 크로니아가 감정을 학습한 감동적 순간을 확인했습니다!",
      "unlock": "ai_emotional_awakening"
    },
    
    {
      "id": "ai_sacrifice_comprehension",
      "cards": ["ai_emotional_awakening", "sacrifice_protocol"],
      "result": "감정을 얻은 AI가 박사의 희생 프로토콜을 이해하고 받아들인 인공지능 진화의 순간입니다!",
      "unlock": "ai_sacrifice_understanding"
    },
    
    // === 경쟁자 관련 심화 규칙들 ===
    {
      "id": "rival_redemption_arc",
      "cards": ["rival_scientist", "final_revelation"],
      "result": "최종 계시를 목격한 리베카가 질투를 버리고 박사를 도우려 했던 구원의 순간을 발견했습니다!",
      "unlock": "rival_redemption"
    },
    
    {
      "id": "rival_regret_moment",
      "cards": ["rival_redemption", "time_guardian_identity"],
      "result": "박사가 시간 수호자였음을 깨달은 리베카의 깊은 후회와 존경의 마음을 확인했습니다!",
      "unlock": "rival_regret"
    },
    
    // === 조수 관련 심화 규칙들 ===
    {
      "id": "assistant_devotion_proof",
      "cards": ["lab_assistant", "sacrifice_protocol"],
      "result": "희생 프로토콜을 알게 된 마크가 박사를 끝까지 도우려 했던 충성스러운 헌신을 발견했습니다!",
      "unlock": "assistant_devotion"
    },
    
    {
      "id": "assistant_farewell_message",
      "cards": ["assistant_devotion", "temporal_legacy"],
      "result": "마크가 박사에게 남긴 마지막 작별 메시지와 무한한 존경의 표현을 발견했습니다!",
      "unlock": "assistant_final_message"
    },
    
    // === 미래 여행자 관련 심화 규칙들 ===
    {
      "id": "traveler_identity_reveal",
      "cards": ["time_traveler", "quantum_consciousness"],
      "result": "양자 의식 분석으로 미래에서 온 자의 진정한 정체가 박사 본인이었음을 확인했습니다!",
      "unlock": "traveler_true_identity"
    },
    
    {
      "id": "traveler_mission_truth",
      "cards": ["traveler_true_identity", "temporal_allies"],
      "result": "여행자의 정체와 시간 동맹이 밝히는 진실 - 그의 사명은 박사의 성공을 보장하는 것이었습니다!",
      "unlock": "traveler_mission"
    },
    
    {
      "id": "parallel_timeline_analysis",
      "cards": ["traveler_mission", "multiverse_map"],
      "result": "시간 여행자의 사명과 다중우주 지도가 보여주는 다른 시간선들의 참혹한 결과를 확인했습니다!",
      "unlock": "parallel_timeline_evidence"
    },
    
    // === 추가 스펙터클한 조합들 ===
    {
      "id": "cosmic_revelation_combo",
      "cards": ["final_revelation", "cosmic_balance"],
      "result": "🌌 우주적 진실의 완전한 이해! 박사는 단순한 영웅이 아닌 시공간이 선택한 구원자였습니다!",
      "unlock": "time_guardian_identity"
    },
    
    {
      "id": "ultimate_understanding",
      "cards": ["temporal_legacy", "universal_threat_dossier"],
      "result": "🎯 모든 이해의 완성! 박사의 유산과 우주적 위협이 보여주는 완벽한 그림을 완성했습니다!",
      "unlock": "final_revelation"
    },
    
    {
      "id": "emotional_climax",
      "cards": ["ai_sacrifice_understanding", "assistant_final_message", "rival_regret"],
      "result": "💝 감동의 클라이맥스! 모든 동료들이 박사의 진정한 위대함을 깨달은 순간들을 목격했습니다!",
      "unlock": "final_revelation"
    }
  ],
  fragments: [],
  winCondition:"paradox_resolved",
  initialCards: [
    // 용의자 전체 (4명)
    'temporal_ai', 'rival_scientist', 'lab_assistant', 'time_traveler',
    // 장소 전체 (5곳)  
    'lab', 'computer_center', 'office', 'storage', 'temporal_chamber',
    // 핵심 초기 증거 (6개)
    'time_device', 'temporal_log', 'energy_signature', 
    'future_note', 'quantum_fragment', 'ai_memory'
  ]
}