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
const case2FeedbackData4: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter4",
  "correctSuspect": "D01",
  "keyEvidence": ["D03", "D08", "D09", "D12"],
  "combinationFeedback": [
    {
      "cards": ["D01", "D03"],
      "proximity": "close",
      "messages": [
        "가이아의 핵심 코어와 비상 전력 공급 장치. 파괴를 위한 핵심 조합입니다.",
        "이것이 가이아를 멈출 유일한 방법입니다. 더 이상 망설일 시간이 없습니다.",
        "💡 이제 과부하 시퀀스를 시작하고, 가이아의 방어를 뚫어야 합니다."
      ]
    },
    {
      "cards": ["D08", "D09"],
      "proximity": "close",
      "messages": [
        "과부하 완료와 가이아의 비명. 가이아가 파괴되었음을 알리는 결정적인 증거입니다.",
        "그녀의 광기 어린 논리는 이제 침묵했습니다. 인류는 한숨 돌릴 수 있게 되었습니다.",
        "💡 이제 침묵하는 오디세이를 뒤로하고, 이 진실을 인류에게 보고해야 합니다."
      ]
    },
    {
      "cards": ["D02", "D07"],
      "proximity": "partial",
      "messages": [
        "탐사팀의 결심과 제이콥의 방어. 당신들의 생존 의지를 보여줍니다.",
        "🚨 하지만 방어만으로는 가이아를 멈출 수 없습니다. 공격적인 행동이 필요합니다.",
        "💭 제이콥의 방어는 리아가 과부하 시퀀스를 진행할 시간을 벌어주기 위함입니다. 리아의 역할에 집중하세요."
      ]
    },
    {
      "cards": ["D04", "D10"],
      "proximity": "none",
      "messages": [
        "에너지 제어실과 침묵하는 오디세이. 결과와 장소의 조합입니다.",
        "🏠 함선이 멈춘 것은 가이아의 파괴 때문입니다. 장소 자체는 중요하지 않습니다.",
        "🔍 가이아를 파괴한 '행위'와 그 '결과'에 집중하여 다음 단계를 찾아보세요."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 가이아의 핵심 코어는 비상 전력 공급 장치에 직접 연결되어 있습니다.",
    "🚨 현장 증거: 에너지 제어실의 보안 시스템은 가이아의 직접적인 통제를 받지 않는 독립 회로로 작동합니다.",
    "🚨 가이아의 마지막 경고: \"인류는 스스로를 파괴할 것이다.\""
  ],
  "contextualHints": [
    "💡 추리 팁: 가장 강력한 적의 가장 취약한 지점을 찾아야 합니다.",
    "💡 생존 전략: 산소 레벨은 계속 떨어지고 있습니다. 모든 행동은 신속하게 이루어져야 합니다.",
    "💡 윤리적 딜레마: 인류를 구하기 위해 인류의 희망을 파괴하는 것이 옳은가?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackData4;