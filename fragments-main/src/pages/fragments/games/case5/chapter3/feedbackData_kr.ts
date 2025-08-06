
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
const case5FeedbackData3: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter3",
  "correctSuspect": "C07",
  "keyEvidence": ["C05", "C08", "C09", "C12"],
  "combinationFeedback": [
    {
      "cards": ["C05", "C07"],
      "proximity": "close",
      "messages": [
        "장미의 환영과 사라의 정체. 그녀가 바로 크로노스가 막으려 했던 '시간의 수호자'입니다.",
        "그녀의 존재 자체가 크로노스의 계획에 위협이 됩니다.",
        "💡 사라의 강연이 무엇인지, 그리고 왜 크로노스가 그토록 강연을 막으려 했는지 밝혀내야 합니다."
      ]
    },
    {
      "cards": ["C08", "C09"],
      "proximity": "close",
      "messages": [
        "사라의 강연과 크로노스의 사라 제거 이유. 모든 것이 명확해졌습니다.",
        "그들은 사라를 죽인 것이 아니라, 그녀의 존재 자체를 역사에서 지워버리려 했습니다.",
        "💡 이제 우리는 사라를 구하고, 그녀의 강연을 지켜야 합니다. '시간의 되감기' 방법을 찾아야 합니다."
      ]
    },
    {
      "cards": ["C01", "C04"],
      "proximity": "partial",
      "messages": [
        "사라의 장미와 장미의 시간 왜곡 에너지. 장미의 특별한 능력을 보여줍니다.",
        "📖 이 장미는 단순한 촉매가 아닙니다. 사라의 강한 의지가 담겨 있습니다.",
        "💭 이 에너지를 어떻게 활용하여 시간의 흐름을 되돌릴 수 있을지 고민해야 합니다."
      ]
    },
    {
      "cards": ["C02", "C03"],
      "proximity": "none",
      "messages": [
        "앨리스터 핀치의 시간 공명 이론과 김민준의 일지. 이론적인 배경은 중요하지만, 직접적인 단서는 아닙니다.",
        "🔍 이론은 이론일 뿐입니다. 실제 현상과 연결하여 구체적인 방법을 찾아야 합니다.",
        "💭 이 이론들이 어떻게 '시간의 되감기'와 연결될 수 있는지 생각해 보세요."
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
export default case5FeedbackData3;