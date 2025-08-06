
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
const case1FeedbackData2: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter2",
  "correctSuspect": "B07",
  "keyEvidence": ["B01", "B06", "B10", "B12"],
  "combinationFeedback": [
    {
      "cards": ["B07", "B01"],
      "proximity": "close",
      "messages": [
        "기괴한 소문과 대주교의 비밀 연구. 드디어 사건의 실마리가 보이기 시작합니다.",
        "대주교는 왜 이 위험한 소문을 혼자서 연구하고 있었을까요?",
        "💡 소문의 정체를 밝히는 것이, 대주교가 죽기 전 마지막으로 하려던 일이었을 겁니다."
      ]
    },
    {
      "cards": ["B10", "B12"],
      "proximity": "close",
      "messages": [
        "거미줄 골목과 소문의 근원지. 이제 목표가 명확해졌습니다.",
        "정보상이 지목한 '잿빛 고아원'. 그곳에 모든 비밀이 숨겨져 있습니다.",
        "💡 다음 행동은 명확합니다. 고아원으로 가서 직접 확인하는 것뿐입니다."
      ]
    },
    {
      "cards": ["B04", "B05"],
      "proximity": "partial",
      "messages": [
        "빈민가와 구호소는 중요한 장소지만, 사건의 핵심은 아닙니다.",
        "🏠 이 장소들에서 얻은 '정보'가 무엇이었는지 다시 생각해 보세요.",
        "💭 장소에 얽매이지 말고, 그곳에서 얻은 '소문'이라는 무형의 단서를 따라가세요."
      ]
    },
    {
      "cards": ["B02", "B03"],
      "proximity": "none",
      "messages": [
        "성배의 행방과 당신의 추리. 아직은 연결하기에 정보가 부족합니다.",
        "성급한 결론은 위험합니다. 더 많은 구체적인 증거가 필요합니다.",
        "🔍 추상적인 개념보다는, 발로 뛰어 얻은 구체적인 증언이나 장소에 집중하세요."
      ]
    },
    {
      "cards": ["B06", "B07"],
      "proximity": "close",
      "messages": [
        "구호소 관리인의 증언을 통해 소문의 실체가 확인되었습니다.",
        "대주교가 이 소문을 얼마나 심각하게 생각했는지 알 수 있는 대목입니다.",
        "💡 이제 이 소문을 '정보'로 취급하는 전문가를 찾아야 합니다. 공식적인 방법으로는 해결할 수 없습니다."
      ]
    },
    {
      "cards": ["B01", "B02"],
      "proximity": "partial",
      "messages": [
        "대주교의 연구와 사라진 성배. 둘 다 중요한 사실이지만, 아직 직접적인 연결점은 보이지 않습니다.",
        "📖 대주교는 연구를 위해 성배를 사용했을까요? 아니면 연구 때문에 성배를 빼앗겼을까요?",
        "💭 두 사건의 선후 관계를 파악해야 합니다. 무엇이 원인이고 무엇이 결과일까요?"
      ]
    },
    {
      "cards": ["B03", "B08"],
      "proximity": "none",
      "messages": [
        "당신의 추리와 소문의 공포. 아직은 감상에 불과합니다.",
        "공포라는 감정은 증거가 될 수 없습니다. 그 공포의 '원인'을 찾아야 합니다.",
        "🔍 감정적인 접근보다는, 소문의 근원지를 추적하는 이성적인 접근이 필요합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 최근 빈민가에서 아이들이 실종되는 사건이 잦았다고 합니다.",
    "🚨 교단 내부 정보: 대주교가 '잿빛 고아원'에 거액을 기부한 기록이 발견되었습니다.",
    "🚨 뒷골목 소문: 거미줄 골목의 정보상은 돈이 되지 않는 정보는 절대 흘리지 않습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 때로는 가장 허무맹랑한 소문이 진실을 담고 있는 법입니다.",
    "💡 수사 관점: 대주교는 왜 교단의 힘을 빌리지 않고 혼자 움직였을까요?",
    "💡 범죄 심리: 범인은 자신의 흔적을 완벽하게 지울 수 있다고 믿는 오만한 자일 수 있습니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackData2;