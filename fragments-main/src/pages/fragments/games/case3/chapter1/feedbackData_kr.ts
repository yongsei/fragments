
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
const case3FeedbackData1: CaseFeedbackData = {
  "caseId": "orient_express_chapter1",
  "correctSuspect": "A01",
  "keyEvidence": ["A04", "A05", "A06"],
  "combinationFeedback": [
    {
      "cards": ["A02", "A03"],
      "proximity": "close",
      "messages": [
        "볼코프의 침실과 시신. 사건의 핵심입니다.",
        "밀실 살인의 단서가 이 안에 숨겨져 있습니다.",
        "💡 시신과 침실을 더 자세히 조사하여 살인에 사용된 도구와 특이점을 찾아보세요."
      ]
    },
    {
      "cards": ["A02", "A04"],
      "proximity": "close",
      "messages": [
        "침실과 단검. 살인 현장과 범행 도구의 직접적인 연결입니다.",
        "단검 손잡이에 새겨진 문양과 문 안쪽의 흠집이 밀실 트릭의 중요한 단서입니다.",
        "💡 단검의 문양과 흠집을 통해 범인의 특성이나 밀실 트릭의 방법을 추론할 수 있습니다."
      ]
    },
    {
      "cards": ["A01", "A07"],
      "proximity": "partial",
      "messages": [
        "헤이스팅스 경과 엘레나 백작부인. 용의자 심문의 시작입니다.",
        "📖 백작부인의 알리바이는 완벽해 보이지만, 그녀의 눈빛에는 불안감이 스쳐 지나갑니다.",
        "💭 그녀의 진술과 행동에서 미묘한 불일치를 찾아보세요."
      ]
    },
    {
      "cards": ["A03", "A05"],
      "proximity": "none",
      "messages": [
        "시신과 편지 조각. 둘 다 중요한 단서지만, 직접적인 연결은 어렵습니다.",
        "편지 조각은 볼코프의 과거와 관련이 있을 수 있습니다. 시신과는 별개로 접근해야 합니다.",
        "🔍 편지 조각의 내용에 집중하여 볼코프의 과거를 추적하는 것이 더 효율적입니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 볼코프의 침실 창문은 이중창으로 되어 있어 외부 소음이 거의 들리지 않습니다.",
    "🚨 현장 증거: 단검 손잡이의 문양은 매우 작고 닳아서 육안으로는 식별하기 어렵습니다.",
    "🚨 용의자 정보: 마리아 이바노바는 볼코프의 모든 비밀을 알고 있다고 알려져 있습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 밀실 살인에서는 범인이 어떻게 방을 나갔는지가 핵심입니다.",
    "💡 수사 관점: 용의자들의 알리바이는 완벽해 보일수록 의심해야 합니다.",
    "💡 심리 분석: 피해자의 얼굴에 나타난 공포는 죽음의 순간까지 그를 사로잡았음을 의미합니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackData1;