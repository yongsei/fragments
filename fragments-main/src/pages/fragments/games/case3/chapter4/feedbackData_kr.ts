
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
const case3FeedbackData4: CaseFeedbackData = {
  "caseId": "orient_express_chapter4",
  "correctSuspect": "D01",
  "keyEvidence": ["D02", "D03", "D09", "D10"],
  "combinationFeedback": [
    {
      "cards": ["D02", "D03"],
      "proximity": "close",
      "messages": [
        "복수의 오케스트라와 정의의 기계. 이 살인의 본질을 완벽하게 설명합니다.",
        "이것은 단순한 살인이 아니라, 계획된 심판이었습니다.",
        "💡 이제 각 용의자들이 이 복수극에서 어떤 역할을 했는지 밝혀내야 합니다."
      ]
    },
    {
      "cards": ["D09", "D10"],
      "proximity": "close",
      "messages": [
        "밀실 트릭의 전모와 볼코프의 공포. 살인의 순간이 재구성됩니다.",
        "수면제에도 불구하고 그가 공포에 질린 이유는, 죽기 직전 복수자들의 얼굴을 보았기 때문입니다.",
        "💡 이 모든 것이 하나의 거대한 계획이었음을 증명하는 결정적인 단서입니다."
      ]
    },
    {
      "cards": ["D04", "D05"],
      "proximity": "partial",
      "messages": [
        "골드버그의 자백과 엘레나의 눈물. 두 공범의 역할이 드러납니다.",
        "📖 밀실 트릭과 알리바이 붕괴. 이들은 복수극의 중요한 부분을 담당했습니다.",
        "💭 이들의 역할이 다른 공범들과 어떻게 연결되는지 파악해야 합니다."
      ]
    },
    {
      "cards": ["D01", "D11"],
      "proximity": "none",
      "messages": [
        "헤이스팅스 경의 최종 추리와 법의 한계. 당신의 고뇌를 보여줍니다.",
        "🔍 진실을 알았지만, 법적인 처벌이 어렵다는 현실에 직면했습니다.",
        "💭 이제 당신의 선택만이 남았습니다. 이 진실을 어떻게 할 것인가요?"
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 열차 내 모든 승객의 소지품에서 금속 섬유 실의 흔적이 발견되었습니다.",
    "🚨 현장 증거: 볼코프의 시신에서 발견된 수면제 성분은 마리아 이바노바가 소지한 약과 일치합니다.",
    "🚨 용의자 정보: 닥터 슈미트는 과거 볼코프의 금융 스캔들로 인해 가족을 잃은 피해자들의 모임에 참여했습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 모든 용의자가 동기를 가지고 있다면, 그들은 모두 공범일 수 있습니다.",
    "💡 수사 관점: 복수심은 강력한 동기입니다. 하지만 그 복수가 어떻게 실행되었는지 파악해야 합니다.",
    "💡 윤리적 딜레마: 법의 심판을 벗어난 정의는 과연 정의인가?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackData4;