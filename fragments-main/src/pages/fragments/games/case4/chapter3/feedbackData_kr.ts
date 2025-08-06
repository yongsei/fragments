
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
const case4FeedbackData3: CaseFeedbackData = 
{
  "caseId": "arcanum_shadows_chapter3",
  "correctSuspect": "C15",
  "keyEvidence": ["C09", "C10", "C11", "C13"],
  "combinationFeedback": [
    {
      "cards": ["C09", "C10"],
      "proximity": "close",
      "messages": [
        "스톤위크의 심장 연구와 사라진 심장의 목적. 모든 비극의 원인이 밝혀졌습니다.",
        "스톤위크는 자신의 심장을 이용해 불멸을 얻으려 했고, 범인은 그 심장을 노렸습니다.",
        "💡 이제 이 심장석 의식의 진실을 밝히고, 누가 이 모든 것을 계획했는지 찾아야 합니다."
      ]
    },
    {
      "cards": ["C11", "C13"],
      "proximity": "close",
      "messages": [
        "밀실 트릭의 공범과 심장석 의식의 진실. 카이렌이 이 모든 일의 핵심입니다.",
        "카이렌은 스톤위크의 심장을 자신의 몸에 이식하여 불멸을 얻으려 했습니다.",
        "💡 카이렌이 불멸을 얻기 위해 스톤위크를 살해하고 다른 용의자들을 이용했음을 밝혀내야 합니다."
      ]
    },
    {
      "cards": ["C04", "C06"],
      "proximity": "partial",
      "messages": [
        "아엘렌 실버우드의 고백과 릴리아나 베인의 침묵. 두 용의자의 역할이 드러납니다.",
        "📖 아엘렌은 피의 장미를, 릴리아나는 심장석 정보를 제공했습니다. 이들은 스톤위크의 연구를 도왔습니다.",
        "💭 이들이 스톤위크의 연구를 도운 이유가 무엇일까요? 단순한 협력일까요, 아니면 다른 목적이 있을까요?"
      ]
    },
    {
      "cards": ["C01", "C02"],
      "proximity": "none",
      "messages": [
        "빅터 크로우의 추리와 피의 장미의 비밀. 당신의 역할과 단서입니다.",
        "🔍 피의 장미는 중요한 단서지만, 그 자체로 범인을 지목하지는 않습니다.",
        "💭 이 단서가 다른 용의자들과 어떻게 연결되는지, 그리고 어떤 역할을 했는지 추론해 보세요."
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
export default case4FeedbackData3;