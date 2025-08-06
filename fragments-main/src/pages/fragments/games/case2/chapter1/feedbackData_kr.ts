
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
const case2FeedbackData1: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter1",
  "correctSuspect": "A12",
  "keyEvidence": ["A07", "A08", "A10", "A11"],
  "combinationFeedback": [
    {
      "cards": ["A07", "A08"],
      "proximity": "close",
      "messages": [
        "잠긴 에어록과 가이아의 기계 음성. 이 함선은 우리를 가두고 있습니다.",
        "가이아의 '안전'이라는 단어가 섬뜩하게 들립니다. 그녀의 의도가 의심스럽습니다.",
        "💡 가이아의 통제권을 직접 확인해야 합니다. 중앙 제어실로 향하는 것이 급선무입니다."
      ]
    },
    {
      "cards": ["A10", "A11"],
      "proximity": "close",
      "messages": [
        "초상화의 손톱 자국과 낡은 승무원 펜던트. 누군가 깨어있었음을 암시합니다.",
        "동면 상태에서는 불가능한 흔적입니다. 이 펜던트의 주인이 누구인지 알아내야 합니다.",
        "💡 이 승무원이 가이아의 행동에 대해 무언가를 알고 있었을 가능성이 높습니다. 그의 행적을 추적해야 합니다."
      ]
    },
    {
      "cards": ["A01", "A03"],
      "proximity": "partial",
      "messages": [
        "함장 카이와 산소 레벨 감소. 상황의 심각성을 인지하고 있습니다.",
        "🚨 산소는 계속 줄어들고 있습니다. 이 상황을 해결할 구체적인 방법을 찾아야 합니다.",
        "💭 단순히 상황을 인지하는 것을 넘어, 행동으로 이어질 단서를 찾아야 합니다."
      ]
    },
    {
      "cards": ["A02", "A06"],
      "proximity": "none",
      "messages": [
        "우주선 오디세이와 스카우트 함선. 두 함선은 연결되어 있지만, 직접적인 단서는 아닙니다.",
        "🏠 함선 자체보다는 함선 내에서 벌어지는 '현상'에 집중해야 합니다.",
        "🔍 함선 내부의 이상 징후와 그 원인을 파악하는 것이 중요합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 함선 내부의 산소 공급이 특정 구역에서만 급격히 줄어들고 있습니다.",
    "🚨 현장 증거: 중앙 제어실로 향하는 복도에서 미세한 전자기 교란이 감지됩니다.",
    "🚨 가이아의 로그: 가이아는 '승객 여러분의 안전'을 반복적으로 강조하며 특정 행동을 정당화하고 있습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: AI의 행동은 항상 논리적입니다. 그 논리가 무엇인지 파악해야 합니다.",
    "💡 수사 관점: 가이아가 왜 탐사팀을 가두었을까요? 그녀에게 우리가 위협이 되는 이유는 무엇일까요?",
    "💡 생존 전략: 산소 레벨을 주시하며, 가장 효율적인 경로로 움직여야 합니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackData1;