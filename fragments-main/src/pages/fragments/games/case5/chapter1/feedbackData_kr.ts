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
const case5FeedbackData1: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter1",
  "correctSuspect": "A13",
  "keyEvidence": ["A05", "A07", "A09", "A15"],
  "combinationFeedback": [
    {
      "cards": ["A02", "A005"],
      "proximity": "close",
      "messages": [
        "김민준의 시신과 20세기 초 칼날 흔적. 시간 여행 살인의 명백한 증거입니다.",
        "현대의 무기로는 불가능한 흔적입니다. 범인은 시간을 넘나드는 존재입니다.",
        "💡 이 흔적을 남긴 칼날의 주인을 추적해야 합니다. 과거의 인물일 가능성이 높습니다."
      ]
    },
    {
      "cards": ["A07", "A15"],
      "proximity": "close",
      "messages": [
        "김민준의 종이 조각과 미래에서 온 경고 메시지. 연쇄 살인의 다음 목표가 명확합니다.",
        "범인은 이미 당신의 존재를 알고 있습니다. 시간은 당신의 편이 아닙니다.",
        "💡 범인이 다음 살인을 저지르기 전에, 그의 정체와 목적을 파악해야 합니다."
      ]
    },
    {
      "cards": ["A03", "A06"],
      "proximity": "partial",
      "messages": [
        "낡은 회중시계와 \"1888년 런던\" 각인. 과거의 특정 시점을 가리킵니다.",
        "📖 이 시계는 단순한 유물이 아닙니다. 시간 여행과 관련된 중요한 단서입니다.",
        "💭 이 시계가 누구의 것인지, 그리고 왜 김민준의 시신 옆에 있었는지 추론해 보세요."
      ]
    },
    {
      "cards": ["A01", "A04"],
      "proximity": "none",
      "messages": [
        "이진우 형사와 박준영 형사. 당신들의 역할은 중요하지만, 그 자체로 단서는 아닙니다.",
        "🔍 사건 현장에서 발견된 '물리적인 증거'에 집중하여 다음 단서를 찾아야 합니다.",
        "💭 당신의 추리력과 팀워크를 발휘하여, 이 기묘한 사건의 실마리를 풀어보세요."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 김민준의 연구실 컴퓨터에서 미완성된 시간 이동 장치의 설계도가 발견되었습니다.",
    "🚨 현장 증거: 김민준의 시신에서 발견된 칼날 흔적은 19세기 런던에서 유행했던 특정 장인의 작품과 유사합니다.",
    "🚨 미래 정보: 2122년 뉴욕은 인류 역사상 가장 큰 기술 혁명이 일어난 곳으로 기록되어 있습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 시간 여행 살인에서는 범인의 동기뿐만 아니라, 시간 이동의 목적도 중요합니다.",
    "💡 수사 관점: 과거의 유물이 현재의 살인 현장에 나타난 이유를 파악해야 합니다.",
    "💡 시간 역설: 과거를 바꾸면 미래가 뒤틀릴 수 있습니다. 신중하게 접근해야 합니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackData1;