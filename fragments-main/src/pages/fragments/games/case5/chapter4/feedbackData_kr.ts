
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
const case5FeedbackData4: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter4",
  "correctSuspect": "D01",
  "keyEvidence": ["D04", "D05", "D06", "D13"],
  "combinationFeedback": [
    {
      "cards": ["D04", "D05"],
      "proximity": "close",
      "messages": [
        "시간 터널 생성과 시간 터널의 불안정성. 위험하지만 유일한 방법입니다.",
        "정확한 목적지에 도달할 확률은 낮지만, 시도해야만 합니다.",
        "💡 이제 시간 역설의 위험을 감수하고, 미래로의 도약을 시작해야 합니다."
      ]
    },
    {
      "cards": ["D07", "D13"],
      "proximity": "close",
      "messages": [
        "2122년 뉴욕 도착과 크로노스의 등장. 예상했던 미래와는 다릅니다.",
        "그들은 이미 이곳에서 무언가를 '수정'했습니다. 그리고 당신을 기다리고 있습니다.",
        "💡 크로노스의 정체를 밝히고, 그들의 약점을 찾아야 합니다. 그들의 슈트에 단서가 있을 겁니다."
      ]
    },
    {
      "cards": ["D08", "D09"],
      "proximity": "partial",
      "messages": [
        "황폐한 미래의 뉴욕과 거대한 기념비. 크로노스의 개입이 가져온 비극적인 결과입니다.",
        "📖 기념비에 새겨진 이름들은 크로노스에 의해 역사가 지워진 자들입니다.",
        "💭 이 기념비가 왜 세워졌는지, 그리고 누가 이 비극을 기억하고 있는지 찾아야 합니다."
      ]
    },
    {
      "cards": ["D01", "D02"],
      "proximity": "none",
      "messages": [
        "믿음의 도약 준비와 미완성된 시간 이동 장치. 당신의 의지와 도구입니다.",
        "🔍 장치 자체는 중요하지만, 그 장치를 작동시키는 '에너지'와 '촉매'에 집중해야 합니다.",
        "💭 장미의 에너지를 어떻게 활용할지, 그리고 시간 터널을 어떻게 안정화시킬지 고민해야 합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 크로노스 요원들의 슈트에서 미세한 시간 왜곡 에너지가 지속적으로 방출되고 있습니다.",
    "🚨 현장 증거: 쓰러진 크로노스 요원의 슈트에서 작은 데이터 칩이 발견되었습니다.",
    "🚨 미래 정보: 2122년 뉴욕의 미래 기술 박물관에서 사라의 강연이 열릴 예정입니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 범인은 항상 자신의 흔적을 남깁니다. 크로노스 요원들의 슈트에서 단서를 찾아보세요.",
    "💡 수사 관점: 미래가 바뀌었다면, 당신의 목표도 바뀌어야 합니다. 사라를 구하는 것이 최우선입니다.",
    "💡 생존 전략: 산소 레벨은 계속 떨어지고 있습니다. 모든 행동은 신속하게 이루어져야 합니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackData4;