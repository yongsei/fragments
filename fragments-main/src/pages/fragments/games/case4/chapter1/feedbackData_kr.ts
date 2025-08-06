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
const case4FeedbackData1: CaseFeedbackData = {
  "caseId": "arcanum_shadows_chapter1",
  "correctSuspect": "A04",
  "keyEvidence": ["A04", "A05", "A06", "A07"],
  "combinationFeedback": [
    {
      "cards": ["A02", "A04"],
      "proximity": "close",
      "messages": [
        "엘리야 스톤위크의 시신과 사라진 심장. 사건의 핵심이자 범인의 목적입니다.",
        "심장이 감쪽같이 사라졌다는 것은 단순한 살인이 아님을 의미합니다.",
        "💡 범인은 스톤위크의 심장을 노렸습니다. 왜 심장을 가져갔을까요?"
      ]
    },
    {
      "cards": ["A05", "A06"],
      "proximity": "close",
      "messages": [
        "마법 지팡이의 균열과 희미하게 빛나는 수정 조각. 마법적인 살인임을 증명합니다.",
        "수정 조각은 마법 증폭 장치의 파편입니다. 지팡이의 힘을 증폭시켜 심장을 도려냈을 겁니다.",
        "💡 이 장치를 사용한 자는 누구이며, 왜 이런 정교한 방법을 사용했을까요?"
      ]
    },
    {
      "cards": ["A08", "A09"],
      "proximity": "partial",
      "messages": [
        "말라붙은 붉은 꽃잎과 알 수 없는 문양의 은화. 고대 마법과 드워프의 흔적입니다.",
        "📖 피의 장미는 생명 에너지 흡수 의식에, 은화는 심장 파괴 무기를 상징합니다.",
        "💭 이 단서들이 사라진 심장과 어떻게 연결되는지 추론해 보세요."
      ]
    },
    {
      "cards": ["A10", "A11"],
      "proximity": "none",
      "messages": [
        "엘프 마법사 아엘렌 실버우드와 드워프 기술자 그림록 스틸해머. 용의자들입니다.",
        "🔍 이들은 스톤위크와 경쟁 관계에 있었지만, 아직 직접적인 살인 증거는 없습니다.",
        "💭 그들의 알리바이와 스톤위크와의 관계를 더 깊이 파고들어야 합니다."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 스톤위크의 연구실 마법 방어막은 외부 침입을 완벽하게 막아냈습니다.",
    "🚨 현장 증거: 스톤위크의 손에 쥐여 있던 낡은 가죽 주머니는 그의 개인적인 물품이 아닙니다.",
    "🚨 용의자 정보: 카이렌 나이트쉐이드는 스톤위크의 모든 연구와 비밀을 알고 있는 유일한 인물입니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 밀실 살인에서는 범인이 어떻게 방을 나갔는지가 핵심입니다.",
    "💡 수사 관점: 마법은 증거를 남기지 않는다는 착각은 버려야 합니다. 마법적인 흔적도 단서가 됩니다.",
    "💡 심리 분석: 사라진 심장은 단순한 장기가 아닙니다. 범인의 목적을 암시합니다."
  ]
}


// Case 3 dedicated feedback data - for independent use
export default case4FeedbackData1;