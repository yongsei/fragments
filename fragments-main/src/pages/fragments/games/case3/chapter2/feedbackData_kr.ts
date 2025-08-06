
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
const case3FeedbackData2: CaseFeedbackData = {
  "caseId": "orient_express_chapter2",
  "correctSuspect": "B01",
  "keyEvidence": ["B09", "B10", "B11", "B12"],
  "combinationFeedback": [
    {
      "cards": ["B10", "B11"],
      "proximity": "close",
      "messages": [
        "얇은 실 조각과 문 안쪽의 흠집. 밀실 트릭의 핵심이 드러났습니다.",
        "범인은 이 실을 이용해 문을 안에서 잠그고 밖으로 빠져나간 후 실을 회수했습니다.",
        "💡 이 실과 관련된 다른 단서들을 찾아보세요. 범행 도구의 일부일 가능성이 높습니다."
      ]
    },
    {
      "cards": ["B09", "B12"],
      "proximity": "close",
      "messages": [
        "작은 금속 조각과 단검의 톱니바퀴 문양. 특정 용의자를 가리키고 있습니다.",
        "이 금속 조각은 밀실 트릭에 사용된 장치의 일부이며, 단검의 문양과 연결됩니다.",
        "💡 이 단서들은 범인이 기계에 능숙한 인물임을 암시합니다. 용의자 중 누가 기계에 능숙할까요?"
      ]
    },
    {
      "cards": ["B04", "B07"],
      "proximity": "partial",
      "messages": [
        "엘레나의 이국적인 향수와 마리아의 약 냄새. 두 여성 용의자 사이에 모종의 연결이 있을 수 있습니다.",
        "📖 두 냄새가 모두 볼코프의 침실에서 났다는 점을 기억하세요. 우연일까요?",
        "💭 두 사람이 사건 시각에 서로의 알리바이를 확인해 주었을 가능성을 배제할 수 없습니다."
      ]
    },
    {
      "cards": ["B02", "B08"],
      "proximity": "none",
      "messages": [
        "열차 복도와 스미스 대령의 오래된 지도. 직접적인 연결 고리는 없습니다.",
        "🏠 지도는 대령의 과거와 볼코프의 악연을 보여줍니다. 복도와는 관련이 없습니다.",
        "🔍 지도의 내용에 집중하여 대령의 숨겨진 동기를 파악하는 것이 더 중요합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 볼코프의 시신이 쥐고 있던 실 조각은 매우 가늘고 질긴 금속 섬유로 짜여져 있습니다.",
    "🚨 현장 증거: 볼코프의 침실 문고리 바로 아래에 실이 통과할 수 있을 만한 작은 틈새가 발견되었습니다.",
    "🚨 용의자 정보: 사무엘 골드버그는 과거 정교한 시계 수리 취미를 가지고 있었습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 밀실 트릭은 항상 외부에서 조작 가능한 장치를 이용합니다.",
    "💡 수사 관점: 용의자들의 침실에서 발견된 단서들은 그들의 숨겨진 동기를 암시합니다.",
    "💡 심리 분석: 완벽한 알리바이는 때로 가장 큰 거짓을 숨기고 있습니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackData2;