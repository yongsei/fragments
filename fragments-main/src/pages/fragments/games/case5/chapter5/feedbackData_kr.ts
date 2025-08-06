
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
const case5FeedbackData5: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter5",
  "correctSuspect": "E08",
  "keyEvidence": ["E04", "E05", "E10", "E12"],
  "combinationFeedback": [
    {
      "cards": ["E04", "E05"],
      "proximity": "close",
      "messages": [
        "'대정화'의 시작과 '잊혀진 영웅들의 기념비'. 크로노스의 잔혹한 역사가 드러났습니다.",
        "그들은 역사를 지우고 자신들의 흔적을 남겼습니다. 이 기념비가 그 증거입니다.",
        "💡 기념비에 새겨진 이름들을 통해 크로노스의 희생자들을 파악하고, 그들의 연결고리를 찾아야 합니다."
      ]
    },
    {
      "cards": ["E08", "E09"],
      "proximity": "close",
      "messages": [
        "사라의 정체와 '사라의 장미'. 그녀가 바로 크로노스가 막으려 했던 '시간의 수호자'입니다.",
        "장미는 사라의 강한 의지를 담고 있습니다. 그녀의 존재 자체가 크로노스에게 위협입니다.",
        "💡 사라의 강연이 무엇인지, 그리고 왜 크로노스가 그녀의 존재 자체를 지우려 했는지 밝혀내야 합니다."
      ]
    },
    {
      "cards": ["E01", "E02"],
      "proximity": "partial",
      "messages": [
        "2122년 뉴욕의 현실과 노인의 존재. 황폐한 미래의 증인입니다.",
        "📖 노인의 증언은 크로노스의 '대정화'에 대한 중요한 정보를 담고 있습니다.",
        "💭 노인의 증언을 통해 크로노스의 행동 원리와 그들이 바꾼 역사의 단면을 파악해야 합니다."
      ]
    },
    {
      "cards": ["E03", "E17"],
      "proximity": "none",
      "messages": [
        "시간의 수호자 개념과 이진우의 결심. 당신의 역할과 의지입니다.",
        "🔍 당신의 결심은 중요하지만, 그 자체로 단서는 아닙니다. 구체적인 행동 계획이 필요합니다.",
        "💭 시간의 수호자로서 당신이 해야 할 첫 번째 행동은 무엇일까요?"
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 노인의 증언에 따르면, 크로노스는 2122년 뉴욕에서 '대정화'를 시작했습니다.",
    "🚨 현장 증거: 잊혀진 영웅들의 기념비에 김민준과 앨리스터 핀치의 이름이 새겨져 있습니다.",
    "🚨 김민준의 일지: 일지 후반부에는 '시간의 되감기'를 위한 구체적인 시퀀스가 암호화되어 있습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 크로노스는 왜 특정 인물의 존재 자체를 지우려 할까요? 그들의 궁극적인 목표는 무엇일까요?",
    "💡 수사 관점: 미래가 이미 바뀌었다면, 우리는 무엇을 할 수 있을까요? 희망은 어디에 있을까요?",
    "💡 윤리적 딜레마: 과거를 바꾸는 것이 과연 옳은 일일까요? 그로 인해 발생할 수 있는 부작용은 무엇일까요?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackData5;