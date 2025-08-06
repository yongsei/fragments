
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
const case5FeedbackData6: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter6",
  "correctSuspect": "F04",
  "keyEvidence": ["F04", "F06", "F07", "F11"],
  "combinationFeedback": [
    {
      "cards": ["F04", "F06"],
      "proximity": "close",
      "messages": [
        "'시간의 닻' 시퀀스와 시간 터널 생성. 시간 이동의 핵심 과정입니다.",
        "장미의 에너지를 미완성 장치에 연결하여 시간 터널을 생성했습니다.",
        "💡 이제 시간 터널의 불안정성을 극복하고, 정확한 목적지에 도달해야 합니다."
      ]
    },
    {
      "cards": ["F08", "F11"],
      "proximity": "close",
      "messages": [
        "2122년 뉴욕 도착과 크로노스의 등장 감지. 예상했던 미래와는 다릅니다.",
        "크로노스가 사라를 제거하기 위해 나타났습니다. 그들의 위치를 파악해야 합니다.",
        "💡 크로노스의 시간 왜곡 패턴을 분석하여 그들의 약점을 찾아야 합니다."
      ]
    },
    {
      "cards": ["F01", "F02"],
      "proximity": "partial",
      "messages": [
        "시간의 되감기 이론과 사라의 장미. 시간 이동의 이론적 배경과 핵심 촉매입니다.",
        "📖 이 장미는 사라의 강한 감정과 연결되어 시간의 메아리를 증폭시키고 있습니다.",
        "💭 이 에너지를 어떻게 활용하여 시간의 흐름을 되돌릴 수 있을지 고민해야 합니다."
      ]
    },
    {
      "cards": ["F03", "F05"],
      "proximity": "none",
      "messages": [
        "미완성된 시간 이동 장치와 강연 장소 및 시간. 도구와 목표입니다.",
        "🔍 장치 자체는 중요하지만, 그 장치를 작동시키는 '에너지'와 '촉매'에 집중해야 합니다.",
        "💭 장미의 에너지를 어떻게 활용할지, 그리고 시간 터널을 어떻게 안정화시킬지 고민해야 합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 크로노스 요원들의 슈트에서 미세한 시간 왜곡 에너지가 지속적으로 방출되고 있습니다.",
    "🚨 현장 증거: 박물관 상공에서 감지되는 시간 왜곡 현상은 특정 패턴을 가지고 있습니다.",
    "🚨 미래 정보: 사라의 강연은 인류의 미래를 바꿀 중요한 전환점이 될 것입니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 시간 여행에서는 정확한 시간과 장소로의 이동이 중요합니다.",
    "💡 수사 관점: 크로노스는 왜 사라의 강연을 막으려 할까요? 그들의 궁극적인 목표는 무엇일까요?",
    "💡 생존 전략: 시간 터널의 불안정성은 위험합니다. 모든 행동은 신속하게 이루어져야 합니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackData6;