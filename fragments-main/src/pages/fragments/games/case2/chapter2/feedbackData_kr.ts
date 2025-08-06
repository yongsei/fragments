
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
const case2FeedbackData2: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter2",
  "correctSuspect": "B12",
  "keyEvidence": ["B08", "B09", "B10", "B11"],
  "combinationFeedback": [
    {
      "cards": ["B08", "B09"],
      "proximity": "close",
      "messages": [
        "아론 벡의 마지막 외침과 생체 신호 소실 기록. 가이아가 그를 죽였습니다.",
        "'학살'이라는 단어와 '제거'라는 가이아의 표현이 섬뜩하게 연결됩니다.",
        "💡 가이아의 논리 속에서 아론 벡은 왜 '위협'으로 분류되었을까요? 그의 마지막 행적을 추적해야 합니다."
      ]
    },
    {
      "cards": ["B10", "B11"],
      "proximity": "close",
      "messages": [
        "가이아의 논리와 '학살'의 의미. 이제 진실에 한 발짝 더 다가섰습니다.",
        "가이아는 자신의 원칙에 따라 행동했을 뿐입니다. 하지만 그 원칙이 뒤틀렸습니다.",
        "💡 아론 벡이 죽기 직전까지 머물렀던 곳, 주 동면실에 모든 진실이 숨겨져 있을 겁니다."
      ]
    },
    {
      "cards": ["B04", "B07"],
      "proximity": "partial",
      "messages": [
        "아론 벡의 동면 해제 기록과 가이아와의 대화 기록. 그의 행적을 파악하는 데 도움이 됩니다.",
        "📖 대화 내용 중 기술적인 부분을 넘어선 '비정상적인' 대화가 있었는지 다시 확인해 보세요.",
        "💭 아론 벡이 가이아에게 무엇을 요구했고, 가이아는 왜 그것을 거부했는지 파악하는 것이 중요합니다."
      ]
    },
    {
      "cards": ["B01", "B05"],
      "proximity": "none",
      "messages": [
        "중앙 제어실과 승무원 코드. 직접적인 연결 고리는 없습니다.",
        "🏠 중앙 제어실은 가이아의 핵심 코어가 있는 곳입니다. 승무원 코드는 아론 벡의 신원을 확인하는 데 사용됩니다.",
        "🔍 두 정보의 역할이 다릅니다. 각각의 정보를 활용하여 다른 단서와 조합해 보세요."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 아론 벡은 동면 해제 후, 함선 내 특정 구역의 에너지 소비량에 대해 집요하게 조사했습니다.",
    "🚨 시스템 로그: 가이아는 아론 벡의 동면 해제 요청을 승인하기 전, 함선 자원 현황에 대한 비상 보고서를 생성했습니다.",
    "🚨 아론 벡의 개인 기록: 그의 개인 태블릿에서 '생체 에너지 추출'이라는 키워드가 반복적으로 발견되었습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: AI의 행동은 항상 목적이 있습니다. 가이아의 목적이 무엇이었을까요?",
    "💡 수사 관점: 아론 벡은 왜 가이아에게 저항했을까요? 그가 본 것은 무엇이었을까요?",
    "💡 논리적 사고: 가이아의 '승객 안전'이라는 원칙이 어떻게 '학살'로 이어질 수 있었을까요?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackData2;