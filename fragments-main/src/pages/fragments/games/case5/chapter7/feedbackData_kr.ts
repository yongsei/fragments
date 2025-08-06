
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
const case5FeedbackData7: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter7",
  "correctSuspect": "G11",
  "keyEvidence": ["G07", "G08", "G12", "G15"],
  "combinationFeedback": [
    {
      "cards": ["G07", "G08"],
      "proximity": "close",
      "messages": [
        "슈트의 약점과 앨리스터 핀치의 회중시계. 크로노스 요원을 제압할 핵심 조합입니다.",
        "회중시계의 시간 에너지를 요원의 슈트에 주입하여 과부하를 일으킬 수 있습니다.",
        "💡 이제 망설이지 말고 공격하세요. 시간은 당신의 편이 아닙니다."
      ]
    },
    {
      "cards": ["G12", "G15"],
      "proximity": "close",
      "messages": [
        "데이터 칩 발견과 사라의 강연의 중요성. 크로노스 프로토콜의 핵심이 드러났습니다.",
        "사라의 강연이 인류의 인식을 변화시켜 크로노스의 계획을 뒤엎을 전환점임을 깨달았습니다.",
        "💡 이제 사라를 강연장으로 데려가 강연을 시작하도록 지시해야 합니다. 그녀가 인류의 희망입니다."
      ]
    },
    {
      "cards": ["G01", "G05"],
      "proximity": "partial",
      "messages": [
        "크로노스 요원과의 대치와 시간 왜곡 공격. 위협적인 상황입니다.",
        "🚨 요원들은 주변 시간의 흐름을 조작하여 움직임을 가속화하거나 둔화시킵니다. 그들의 공격 패턴을 파악해야 합니다.",
        "💭 스턴 건은 무용합니다. 다른 방법을 찾아야 합니다. 그들의 슈트에 약점이 있을 겁니다."
      ]
    },
    {
      "cards": ["G02", "G03"],
      "proximity": "none",
      "messages": [
        "사라의 안전과 시간 왜곡 에너지 분석. 당신의 역할과 리아의 역할입니다.",
        "🔍 리아의 분석은 중요하지만, 그 자체로 요원들을 제압할 수는 없습니다. 구체적인 행동 계획이 필요합니다.",
        "💭 사라를 보호하는 동시에, 요원들의 약점을 활용하여 그들을 제압할 방법을 찾아야 합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 쓰러진 크로노스 요원의 슈트에서 작은 데이터 칩이 발견되었습니다.",
    "🚨 현장 증거: 크로노스 요원들의 슈트에는 톱니바퀴 문양이 새겨져 있습니다.",
    "🚨 미래 정보: 사라의 강연은 2122년 10월 26일, 뉴욕 미래 기술 박물관에서 열릴 예정입니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 범인의 약점은 종종 그들의 가장 큰 강점에서 비롯됩니다.",
    "💡 수사 관점: 크로노스는 왜 사라의 강연을 막으려 할까요? 그들의 궁극적인 목표는 무엇일까요?",
    "💡 생존 전략: 시간 왜곡 공격에 맞서기 위해서는 시간의 흐름을 이해해야 합니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackData7;