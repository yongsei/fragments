
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
const case1FeedbackData1: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter1",
  "correctSuspect": "A10",
  "keyEvidence": ["A04", "A05", "A07", "A09"],
  "combinationFeedback": [
    {
      "cards": ["A10", "A04"],
      "proximity": "close",
      "messages": [
        "사라진 성배와 대주교의 시신... 무언가 강한 연결점이 느껴집니다.",
        "범인은 왜 하필 영혼이 빠져나간 시신과 기억을 보는 성배를 함께 남겨두고 갔을까요?",
        "💡 범인의 목적은 '살해' 그 자체가 아니라, 대주교가 '본' 것을 확인하는 데 있었을 겁니다."
      ]
    },
    {
      "cards": ["A05", "A07"],
      "proximity": "close",
      "messages": [
        "정교한 상처와 기묘한 마법의 잔향. 평범한 사건이 아니라는 증거입니다.",
        "이것은 교단의 신성 마법과는 다른, 어둡고 뒤틀린 힘의 흔적입니다.",
        "💡 이 마법을 사용할 수 있는 자는 누구이며, 왜 이런 흔적을 남겼을까요? 범인의 기술적 특성을 보여줍니다."
      ]
    },
    {
      "cards": ["A03", "A04"],
      "proximity": "partial",
      "messages": [
        "까마귀가 시신을 훼손한 것처럼 보이지만, 무언가 석연치 않습니다.",
        "📖 까마귀는 그저 결과일 뿐, 원인은 다른 곳에 있지 않을까요?",
        "💭 까마귀에게 시선을 빼앗기면 진실을 놓칠 수 있습니다. 더 본질적인 단서에 집중하세요."
      ]
    },
    {
      "cards": ["A02", "A08"],
      "proximity": "none",
      "messages": [
        "두 장소 모두 사건과 관련이 있지만, 직접적인 연결 고리는 없어 보입니다.",
        "🏠 각 장소에서 발견된 '증거'가 중요합니다. 장소끼리 묶는 것은 의미가 없습니다.",
        "🔍 장소보다는 그곳에서 나온 증거들에 집중하여 다시 조합해 보세요."
      ]
    },
    {
      "cards": ["A10", "A09"],
      "proximity": "close",
      "messages": [
        "사라진 성배와 텅 빈 보관함. 도난 사실을 명확히 증명하는 조합입니다.",
        "범인은 정확히 이 성배를 노리고 침입했습니다. 다른 것은 건드리지 않았습니다.",
        "💡 범인이 성배의 능력을 알고 있었다는 강력한 증거입니다. 계획적인 범행임을 확신할 수 있습니다."
      ]
    },
    {
      "cards": ["A01", "A06"],
      "proximity": "partial",
      "messages": [
        "당신의 임무와 경비대원의 증언. 수사에 참고할 만한 정보입니다.",
        "'기이한 노랫소리'는 흑마법의 주문과 관련이 있을 수 있습니다.",
        "💭 하지만 증언만으로는 부족합니다. 이 노랫소리가 남긴 '물리적 증거'를 찾아보세요."
      ]
    },
    {
      "cards": ["A03", "A07"],
      "proximity": "none",
      "messages": [
        "까마귀와 마법의 잔향. 둘 다 불길하지만, 직접적인 연관성은 없어 보입니다.",
        "까마귀는 시신에, 마법은 공간에 남아있습니다. 둘의 원인은 다를 수 있습니다.",
        "🔍 두 현상을 별개의 것으로 보고, 각각의 원인을 추적하는 것이 더 효율적일 수 있습니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 경비대원 중 한 명이 사건 전날 밤, 첨탑에서 기이한 노랫소리를 들었다고 합니다.",
    "🚨 현장 증거: 대주교의 손톱 밑에서 미세한 흑마법의 잔재가 발견되었습니다.",
    "🚨 교단 내부 정보: 사라진 성배는 최근 외부로 반출된 기록이 전혀 없습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 범인의 목적은 무엇이었을까요? 살해, 절도, 혹은 그 이상의 무언가?",
    "💡 수사 관점: 외부 침입의 흔적이 없는 이유는 무엇일까요? 내부 소행일 가능성을 고려해 보세요.",
    "💡 물증 분석: 모든 증거는 하나의 사실을 가리키고 있습니다. 바로 '계획된 범행'이라는 것을요."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackData1;