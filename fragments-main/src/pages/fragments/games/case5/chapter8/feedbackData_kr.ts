
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
const case5FeedbackData8: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter8",
  "correctSuspect": "H01",
  "keyEvidence": ["H05", "H06", "H07", "H11"],
  "combinationFeedback": [
    {
      "cards": ["H05", "H06"],
      "proximity": "close",
      "messages": [
        "회중시계의 일격과 요원의 소멸. 크로노스를 완전히 제압했습니다.",
        "그의 광기 어린 논리는 이제 침묵했습니다. 시간의 그림자가 걷혔습니다.",
        "💡 이제 사라의 강연을 성공시키고, 인류에게 새로운 미래를 제시해야 합니다."
      ]
    },
    {
      "cards": ["H07", "H11"],
      "proximity": "close",
      "messages": [
        "시간 왜곡 현상 소멸과 크로노스의 계획 좌절. 시간의 균형이 회복되었습니다.",
        "사라의 강연이 인류의 인식을 변화시켜 크로노스의 계획을 뒤엎는 전환점이 되었습니다.",
        "💡 이제 인류는 스스로의 선택으로 미래를 만들어나갈 새로운 길을 걷게 될 것입니다."
      ]
    },
    {
      "cards": ["H01", "H04"],
      "proximity": "partial",
      "messages": [
        "마지막 요원과의 대결과 시간 왜곡 에너지의 집중. 최후의 발악입니다.",
        "🚨 요원은 모든 에너지를 끌어모아 거대한 파동을 일으킵니다. 강력한 공격입니다.",
        "💭 회중시계의 힘을 최대한 활용하여 요원을 제압해야 합니다. 망설일 시간이 없습니다."
      ]
    },
    {
      "cards": ["H02", "H03"],
      "proximity": "none",
      "messages": [
        "사라의 강연 진행과 앨리스터 핀치의 회중시계. 당신의 목표와 도구입니다.",
        "🔍 강연은 중요하지만, 지금은 크로노스를 제압하는 것이 우선입니다.",
        "💭 회중시계는 크로노스를 제압하는 데 사용될 무기입니다. 강연과는 직접적인 관련이 없습니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 마지막 크로노스 요원은 모든 시간 왜곡 에너지를 끌어모아 자폭하려 합니다.",
    "🚨 현장 증거: 박물관 강연장 안에서 사라의 열정적인 강연이 시작되었습니다.",
    "🚨 미래 정보: 사라의 강연은 인류 역사상 가장 중요한 강연으로 기록될 것입니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 클라이맥스에서는 모든 단서가 하나의 목표를 향합니다. 크로노스를 제압하는 데 집중하세요.",
    "💡 수사 관점: 승리 후에도 진실을 보고하는 것이 중요합니다. 김민준의 희생을 헛되이 하지 마세요.",
    "💡 윤리적 딜레마: 인류의 미래를 위해 과거를 바꾸는 것이 과연 옳은 일이었을까요?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackData8;