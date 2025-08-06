
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
const case5FeedbackData2: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter2",
  "correctSuspect": "B04",
  "keyEvidence": ["B05", "B06", "B10", "B12"],
  "combinationFeedback": [
    {
      "cards": ["B05", "B06"],
      "proximity": "close",
      "messages": [
        "'시간 공명' 이론과 '시간의 메아리'. 앨리스터 핀치의 연구가 핵심입니다.",
        "이론은 특정 사물이 시간의 지점과 공명하여 메아리를 만들 수 있다고 말합니다.",
        "💡 이 메아리를 감지하고 조작할 수 있다면, 시간 여행의 비밀에 한 발짝 더 다가설 수 있습니다."
      ]
    },
    {
      "cards": ["B10", "B11"],
      "proximity": "close",
      "messages": [
        "완벽하게 보존된 마른 장미와 장미의 환영. 이 장미는 단순한 꽃이 아닙니다.",
        "장미를 만지자 스쳐 지나간 환영은 시간의 메아리에서 온 기억입니다.",
        "💡 이 장미가 누구의 것인지, 그리고 왜 이토록 강렬한 시간의 메아리를 품고 있는지 밝혀내야 합니다."
      ]
    },
    {
      "cards": ["B01", "B07"],
      "proximity": "partial",
      "messages": [
        "앨리스터 핀치 교수와 그의 사라짐. 크로노스의 개입을 암시합니다.",
        "📖 핀치는 시간 역학 이론의 선구자였습니다. 그의 사라짐은 단순한 실종이 아닐 수 있습니다.",
        "💭 크로노스가 핀치를 제거한 이유가 무엇일까요? 그의 연구가 그들에게 위협이 되었을까요?"
      ]
    },
    {
      "cards": ["B03", "B08"],
      "proximity": "none",
      "messages": [
        "시간 이상 감지기와 국지적인 시간 왜곡 현상. 현상을 감지하는 것은 중요하지만, 그 자체로 진실은 아닙니다.",
        "🔍 이 현상이 어디서 발생했는지, 그리고 무엇 때문에 발생했는지 파악해야 합니다.",
        "💭 현상 뒤에 숨겨진 '원인'을 찾아야 합니다. 그 원인이 바로 다음 단서가 될 것입니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 앨리스터 핀치의 연구실에서 발견된 노트에는 '시간의 닻'이라는 개념이 언급되어 있습니다.",
    "🚨 현장 증거: 마른 장미에서 감지되는 시간 왜곡 에너지는 특정 인물의 생체 에너지 패턴과 일치합니다.",
    "🚨 미래 정보: 2122년 뉴욕에서 사라질 예정이었던 인물 중 한 명은 '사라'라는 이름의 과학자입니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 시간 여행 살인에서는 피해자가 왜 특정 시점에 존재했는지가 중요합니다.",
    "💡 수사 관점: 크로노스는 왜 역사를 '최적화'하려 할까요? 그들의 궁극적인 목표는 무엇일까요?",
    "💡 시간 역설: 과거의 작은 변화가 미래에 거대한 나비 효과를 일으킬 수 있습니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackData2;