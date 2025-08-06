
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
const case4FeedbackData2: CaseFeedbackData = {
  "caseId": "arcanum_shadows_chapter2",
  "correctSuspect": "B16",
  "keyEvidence": ["B04", "B05", "B06", "B08"],
  "combinationFeedback": [
    {
      "cards": ["B04", "B08"],
      "proximity": "close",
      "messages": [
        "피의 장미와 생명의 심장석 정보. 사라진 심장의 목적이 드러났습니다.",
        "스톤위크는 자신의 심장을 이용해 생명의 심장석을 재현하려 했습니다.",
        "💡 범인은 이 심장석을 노렸습니다. 누가 이 심장석을 탐낼 만한 인물일까요?"
      ]
    },
    {
      "cards": ["B05", "B06"],
      "proximity": "close",
      "messages": [
        "심장 파괴자 은화와 마법 지팡이의 균열 분석. 범행 도구와 방법이 명확해졌습니다.",
        "은화는 심장 파괴 무기를, 균열은 강력한 마법 증폭을 의미합니다.",
        "💡 이 두 가지를 모두 다룰 수 있는 인물은 누구일까요? 드워프 기술과 마법 지식이 필요합니다."
      ]
    },
    {
      "cards": ["B07", "B15"],
      "proximity": "partial",
      "messages": [
        "작고 날렵한 발자국과 카이렌 나이트쉐이드의 발자국. 카이렌이 연구실 안에 있었음을 암시합니다.",
        "📖 카이렌은 연구실 바로 옆 자신의 방에 있었다고 주장했습니다. 그의 알리바이에 균열이 생겼습니다.",
        "💭 카이렌이 왜 거짓말을 했을까요? 그가 스톤위크의 연구와 어떤 관련이 있을까요?"
      ]
    },
    {
      "cards": ["B01", "B02"],
      "proximity": "none",
      "messages": [
        "빅터 크로우의 분석과 희미하게 빛나는 수정 조각. 당신의 역할과 단서입니다.",
        "🔍 수정 조각은 마법 증폭 장치의 파편입니다. 이 파편이 어디서 왔는지 추적해야 합니다.",
        "💭 이 단서 자체는 중요하지만, 다른 단서들과의 조합을 통해 더 큰 그림을 그려야 합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 스톤위크의 연구실에서 발견된 고대 엘프 마법진은 생명 에너지 흡수 의식과 관련이 있습니다.",
    "🚨 현장 증거: 마법 지팡이의 균열은 특정 마법 증폭 장치와 결합했을 때만 발생할 수 있는 형태입니다.",
    "🚨 용의자 정보: 카이렌 나이트쉐이드는 하프엘프로, 엘프 마법과 드워프 기술 모두에 대한 이해가 깊습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 모든 단서는 연결되어 있습니다. 겉으로 드러난 것 너머의 숨겨진 의미를 찾아야 합니다.",
    "💡 수사 관점: 용의자들의 진술과 현장 증거의 불일치를 파고들어야 합니다.",
    "💡 심리 분석: 범인은 자신의 범행을 숨기기 위해 거짓말을 합니다. 그 거짓말 속에 진실이 숨겨져 있습니다."
  ]
}


// Case 3 dedicated feedback data - for independent use
export default case4FeedbackData2;