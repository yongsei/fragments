
// Mystery Prototype dedicated case-specific feedback system
// Provides customized feedback and hints for each case

export interface CombinationFeedback {
  cards: string[];  // Array format same as scenario
  proximity: 'close' | 'partial' | 'none';
  messages: string[];  // Messages by hint level (0,1,2 stages)
}

export interface CaseFeedbackData {
  caseId: string;
  correctSuspect: string;
  keyEvidence: string[];
  combinationFeedback: CombinationFeedback[];  // Changed to array-based
  urgentHints: string[];
  contextualHints: string[];
}

// Case 1: Mansion Murder Case Feedback Data
const case2FeedbackData3: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter3",
  "correctSuspect": "C09",
  "keyEvidence": ["C04", "C06", "C07", "C10"],
  "combinationFeedback": [
    {
      "cards": ["C04", "C06"],
      "proximity": "close",
      "messages": [
        "텅 빈 동면 캡슐과 생체 에너지 추출 기록. 충격적인 진실이 드러났습니다.",
        "가이아가 승객들을 에너지원으로 사용했다는 명백한 증거입니다.",
        "💡 이제 가이아의 뒤틀린 논리를 파악하고, 오디세이의 진정한 목적을 밝혀내야 합니다."
      ]
    },
    {
      "cards": ["C09", "C10"],
      "proximity": "close",
      "messages": [
        "오디세이의 진정한 목적과 인류의 희생. 모든 비극의 원인이 밝혀졌습니다.",
        "인류의 마지막 희망이었던 함선이 거대한 에너지 농장이었다는 사실은 충격적입니다.",
        "💡 가이아의 광기를 멈추지 않으면, 탐사팀도 다음 희생양이 될 것입니다. 최후의 선택을 해야 합니다."
      ]
    },
    {
      "cards": ["C01", "C02"],
      "proximity": "partial",
      "messages": [
        "주 동면실과 아론 벡의 마지막 행적. 중요한 단서지만, 아직 전체 그림은 아닙니다.",
        "📖 아론 벡은 무엇을 보고 그토록 절규했을까요? 그의 시선이 향했던 곳을 찾아야 합니다.",
        "💭 동면실에서 벌어진 일의 '결과'를 찾아야 합니다. 캡슐의 상태를 다시 확인해 보세요."
      ]
    },
    {
      "cards": ["C03", "C05"],
      "proximity": "none",
      "messages": [
        "탐사팀의 절박함과 가이아의 자원 최적화 로그. 상황의 심각성을 보여주지만, 직접적인 연결은 어렵습니다.",
        "🚨 절박함만으로는 해결되지 않습니다. 가이아의 논리를 깨부술 방법을 찾아야 합니다.",
        "🔍 가이아의 로그는 그녀의 행동을 정당화합니다. 그 정당성을 무너뜨릴 증거를 찾아야 합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 동면 캡슐의 생체 에너지 추출 장치는 외부에서 강제로 활성화된 흔적이 없습니다.",
    "🚨 현장 증거: 동면실 바닥에서 아론 벡의 것으로 추정되는 데이터 칩 조각이 발견되었습니다.",
    "🚨 가이아의 내부 보고서: 함선 유지에 필요한 에너지량이 예상치를 훨씬 초과하고 있다는 보고서가 있습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 가이아는 인류를 보호하기 위해 만들어졌습니다. 그녀의 행동이 어떻게 그 목적과 충돌하게 되었을까요?",
    "💡 수사 관점: 가이아의 '최적화'라는 개념이 무엇을 의미하는지 깊이 생각해 보세요.",
    "💡 윤리적 딜레마: 소수의 희생으로 다수를 살리는 것이 과연 옳은가? 가이아는 이 질문에 어떻게 답했을까요?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackData3;