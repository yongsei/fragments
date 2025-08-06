
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
const case1FeedbackData3: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter3",
  "correctSuspect": "C08",
  "keyEvidence": ["C04", "C07", "C11", "C12"],
  "combinationFeedback": [
    {
      "cards": ["C08", "C11"],
      "proximity": "close",
      "messages": [
        "잿빛 고아원과 영혼이 없는 아이들. 끔찍한 진실이 눈앞에 있습니다.",
        "정보상의 증언이 사실이었습니다. 이곳에서 끔찍한 일이 벌어지고 있습니다.",
        "💡 아이들에게 무슨 일이 있었는지, 그리고 이 모든 일을 저지른 자는 누구인지 밝혀내야 합니다. 원장실이 가장 의심스럽습니다."
      ]
    },
    {
      "cards": ["C07", "C04"],
      "proximity": "close",
      "messages": [
        "정보상의 증언은 언제나 핵심을 찌릅니다.",
        "'영혼이 조각나는 소리'. 이것은 단순한 비유가 아닐 겁니다. 연금술이나 흑마법과 관련이 있을 수 있습니다.",
        "💡 이 증언을 바탕으로 고아원의 상황을 다시 살펴보세요. 모든 것이 맞아떨어질 겁니다."
      ]
    },
    {
      "cards": ["C01", "C03"],
      "proximity": "partial",
      "messages": [
        "거미줄 골목에 잠입하여 협상하는 것은 중요한 과정이지만, 그 자체가 단서는 아닙니다.",
        "📖 당신의 능력으로 얻어낸 '결과물'이 무엇이었는지에 집중하세요.",
        "💭 과정보다는 결과, 즉 정보상에게서 얻어낸 '정보'가 무엇인지가 중요합니다."
      ]
    },
    {
      "cards": ["C02", "C09"],
      "proximity": "none",
      "messages": [
        "소문과 평판. 둘 다 흥미로운 정보지만, 직접적인 연관성을 찾기 어렵습니다.",
        "뜬소문만으로는 아무것도 증명할 수 없습니다. 더 구체적인, 물리적인 증거가 필요합니다.",
        "🔍 소문을 증명할 수 있는 '실체'를 찾아보세요. 고아원 내부의 상황에 집중해야 합니다."
      ]
    },
    {
      "cards": ["C08", "C12"],
      "proximity": "close",
      "messages": [
        "고아원의 가장 깊숙한 곳, 원장실. 모든 비밀의 핵심입니다.",
        "이곳에서 벌어지는 일이 고아원 전체의 비극을 만들어내고 있습니다.",
        "💡 문을 열고 들어갈 준비가 되셨습니까? 당신은 이 사건의 '심장부'에 도달했습니다."
      ]
    },
    {
      "cards": ["C04", "C06"],
      "proximity": "partial",
      "messages": [
        "정보상과 교단의 약점. 위험하지만 효과적인 협상 방법입니다.",
        "📖 이 방법으로 정보를 얻었지만, 당신 또한 위험에 노출될 수 있음을 기억하세요.",
        "💭 정보는 얻었지만, 그 정보의 '진위'는 아직 불확실합니다. 직접 확인해야 합니다."
      ]
    },
    {
      "cards": ["C01", "C09"],
      "proximity": "none",
      "messages": [
        "골목 잠입과 고아원의 평판. 두 사실 사이에는 뚜렷한 인과 관계가 없습니다.",
        "🏠 평판은 외부의 시선일 뿐, 내부의 진실과는 다를 수 있습니다.",
        "🔍 외부 정보에 의존하기보다는, 직접 잠입해서 얻은 '내부 정보'에 집중하세요."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 고아원 주변에서 밤마다 기이한 기계 장치 소리가 들린다는 증언이 있습니다.",
    "🚨 현장 증거: 고아원 쓰레기장에서 정체를 알 수 없는 약병들이 다수 발견되었습니다.",
    "🚨 교단 내부 정보: 고아원장은 과거 교단에서 연금술을 연구했으나, 위험한 사상 때문에 파문당한 인물입니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 눈에 보이는 것이 전부가 아닙니다. 평범한 고아원의 모습 뒤에 숨겨진 진실을 보세요.",
    "💡 수사 관점: 범인은 자신의 공간 안에서 완전한 통제권을 쥐고 있다고 생각할 겁니다.",
    "💡 물증 분석: 아이들의 상태 그 자체가 가장 강력한 증거입니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackData3;