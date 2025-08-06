
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
const case4FeedbackData4: CaseFeedbackData = 
{
  "caseId": "arcanum_shadows_chapter4",
  "correctSuspect": "D17",
  "keyEvidence": ["D02", "D03", "D10", "D11"],
  "combinationFeedback": [
    {
      "cards": ["D02", "D03"],
      "proximity": "close",
      "messages": [
        "공범들의 연극과 심장석 의식의 진실. 이 살인의 본질을 완벽하게 설명합니다.",
        "스톤위크는 자신의 심장을 '생명의 심장석'으로 만들려 했고, 용의자들은 그 과정에 참여했습니다.",
        "💡 이제 각 용의자들이 이 복수극에서 어떤 역할을 했는지 밝혀내야 합니다."
      ]
    },
    {
      "cards": ["D10", "D11"],
      "proximity": "close",
      "messages": [
        "사라진 심장의 행방과 불멸의 대가. 카이렌이 불멸을 얻기 위해 스톤위크를 살해하고 다른 용의자들을 이용했습니다.",
        "카이렌은 스톤위크의 심장을 자신의 몸에 이식하여 불멸을 얻으려 했습니다.",
        "💡 이 모든 것이 카이렌의 계획이었음을 증명하는 결정적인 단서입니다."
      ]
    },
    {
      "cards": ["D04", "D05"],
      "proximity": "partial",
      "messages": [
        "그림록 스틸해머의 자백과 아엘렌 실버우드의 인정. 밀실 트릭과 마법 증폭 장치의 역할이 드러납니다.",
        "📖 이들은 스톤위크의 연구를 도왔지만, 그들의 동기는 복수심이었습니다.",
        "💭 이들의 역할이 카이렌의 계획과 어떻게 연결되는지 파악해야 합니다."
      ]
    },
    {
      "cards": ["D01", "D12"],
      "proximity": "none",
      "messages": [
        "빅터 크로우의 최종 추리와 법의 심판의 어려움. 당신의 고뇌를 보여줍니다.",
        "🔍 진실을 알았지만, 법적인 처벌이 어렵다는 현실에 직면했습니다.",
        "💭 이제 당신의 선택만이 남았습니다. 이 진실을 어떻게 할 것인가요?"
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 카이렌 나이트쉐이드는 스톤위크의 연구실에서 발견된 모든 고대 마법 문헌을 복사했습니다.",
    "🚨 현장 증거: 카이렌의 방에서 스톤위크의 심장과 동일한 생체 에너지 패턴을 가진 마법 장치가 발견되었습니다.",
    "🚨 용의자 정보: 릴리아나 베인은 스톤위크의 연구가 인류에게 재앙을 가져올 것이라고 경고했습니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 모든 용의자가 동기를 가지고 있다면, 그들은 모두 공범일 수 있습니다.",
    "💡 수사 관점: 복수심은 강력한 동기입니다. 하지만 그 복수가 어떻게 실행되었는지 파악해야 합니다.",
    "💡 윤리적 딜레마: 법의 심판을 벗어난 정의는 과연 정의인가?"
  ]
}


// Case 3 dedicated feedback data - for independent use
export default case4FeedbackData4;