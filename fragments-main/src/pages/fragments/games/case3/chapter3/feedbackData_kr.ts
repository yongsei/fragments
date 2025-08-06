
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
const case3FeedbackData3: CaseFeedbackData = {
  "caseId": "orient_express_chapter3",
  "correctSuspect": "C12",
  "keyEvidence": ["C04", "C09", "C10", "C11"],
  "combinationFeedback": [
    {
      "cards": ["C04", "C09"],
      "proximity": "close",
      "messages": [
        "도르래 장치와 복수의 동기. 밀실 트릭과 범인의 동기가 연결되었습니다.",
        "이 장치는 단순한 도구가 아니라, 복수를 위한 '기계'였습니다.",
        "💡 단검의 톱니바퀴 문양이 이 '기계'와 어떤 관련이 있는지 추론해 보세요."
      ]
    },
    {
      "cards": ["C10", "C11"],
      "proximity": "close",
      "messages": [
        "톱니바퀴 문양의 의미와 공범들의 역할. 이 살인은 계획된 복수극입니다.",
        "각자의 원한이 모여 하나의 거대한 복수극을 완성했습니다.",
        "💡 이제 모든 진실이 드러났습니다. 이 복수의 오케스트라를 지휘한 자는 누구일까요?"
      ]
    },
    {
      "cards": ["C05", "C08"],
      "proximity": "partial",
      "messages": [
        "슈미트 가족의 파산과 대령 스미스의 아들 희생. 볼코프에게 원한을 가진 자들입니다.",
        "📖 이들의 원한은 단순한 개인적인 감정을 넘어섭니다. 볼코프의 과거 죄악과 연결됩니다.",
        "💭 이들의 원한이 어떻게 살인으로 이어졌는지, 그 연결 고리를 찾아야 합니다."
      ]
    },
    {
      "cards": ["C01", "C02"],
      "proximity": "none",
      "messages": [
        "헤이스팅스 경의 통찰과 금속 섬유 실의 비밀. 당신의 추리력과 단서입니다.",
        "🔍 이 단서 자체는 중요하지만, 다른 단서들과의 조합을 통해 더 큰 그림을 그려야 합니다.",
        "💭 당신의 통찰력을 발휘하여 이 실이 어떻게 사용되었는지, 그리고 누가 사용했는지 추론해 보세요."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 볼코프의 금융 스캔들은 수많은 가정을 파탄시켰으며, 그중에는 닥터 슈미트의 가족도 포함되어 있었습니다.",
    "🚨 현장 증거: 단검 손잡이의 톱니바퀴 문양은 특정 기계 공학 협회의 상징과 일치합니다.",
    "🚨 용의자 정보: 마리아 이바노바는 볼코프의 불면증을 알고 있었으며, 그에게 수면제를 제공했습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 모든 용의자가 동기를 가지고 있다면, 범인은 한 명이 아닐 수 있습니다.",
    "💡 수사 관점: 과거의 사건들이 현재의 살인에 어떻게 영향을 미쳤는지 파악해야 합니다.",
    "💡 심리 분석: 복수심은 인간을 어디까지 몰아붙일 수 있을까요?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackData3;