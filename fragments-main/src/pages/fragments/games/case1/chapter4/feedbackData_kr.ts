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
const case1FeedbackData4: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter4",
  "correctSuspect": "D05",
  "keyEvidence": ["D04", "D08", "D10", "D12"],
  "combinationFeedback": [
    {
      "cards": ["D05", "D10"],
      "proximity": "close",
      "messages": [
        "연금술사 발레리우스와 조각난 영혼들. 범인과 그의 범죄에 대한 결정적 증거입니다.",
        "그의 실험실에 있는 영혼의 파편들은 그가 저지른 죄악을 명백히 보여줍니다.",
        "💡 이제 그의 범행 동기와 대주교 살해 이유를 밝혀내면, 모든 진실이 드러날 것입니다."
      ]
    },
    {
      "cards": ["D04", "D08"],
      "proximity": "close",
      "messages": [
        "비밀 연구 일지와 대주교 살해 이유. 모든 비극의 시작점입니다.",
        "연구가 중단될 위기에 처하자, 그는 자신의 후원자였던 대주교마저 살해했습니다.",
        "💡 그의 뒤틀린 욕망이 어디까지 뻗어있는지 보여주는 중요한 연결고리입니다."
      ]
    },
    {
      "cards": ["D09", "D11"],
      "proximity": "partial",
      "messages": [
        "그림자의 정체와 최후의 발악. 위협적이긴 하지만, 사건의 본질은 아닙니다.",
        "⚕️ 그림자는 범인의 도구일 뿐, 그를 조종하는 본체를 쓰러뜨려야 합니다.",
        "💭 현상에 현혹되지 마세요. 그림자를 만들어낸 '연금술사' 본인에게 집중해야 합니다."
      ]
    },
    {
      "cards": ["D01", "D03"],
      "proximity": "none",
      "messages": [
        "원장실과 당신의 추궁. 아직은 때가 아닙니다.",
        "확실한 물증 없이는 범인을 압박할 수 없습니다.",
        "🔍 방 안을 더 자세히 수색하여, 그의 손에 수갑을 채울 결정적인 증거를 찾아내세요."
      ]
    },
    {
      "cards": ["D05", "D07"],
      "proximity": "close",
      "messages": [
        "연금술사 발레리우스와 그의 범행 동기. 모든 비극의 근원입니다.",
        "그의 뒤틀린 욕망이 수많은 영혼을 희생시켰습니다.",
        "💡 이제 그의 범행을 증명할 물리적인 증거를 찾아야 합니다. 실험실에 있을 겁니다."
      ]
    },
    {
      "cards": ["D02", "D04"],
      "proximity": "partial",
      "messages": [
        "아이들의 비밀과 연구 일지. 중요한 단서지만, 아직 범인과의 직접적인 연결은 부족합니다.",
        "📖 일지는 범행의 '방법'을 알려주지만, '누가' 했는지는 명확히 말해주지 않습니다.",
        "💭 일지의 내용과 아이들의 상태를 연결하여, 범인의 정체를 확신할 수 있는 증거를 찾아야 합니다."
      ]
    },
    {
      "cards": ["D01", "D03"],
      "proximity": "none",
      "messages": [
        "원장실과 당신의 추궁. 아직은 때가 아닙니다.",
        "확실한 물증 없이는 범인을 압박할 수 없습니다.",
        "🔍 방 안을 더 자세히 수색하여, 그의 손에 수갑을 채울 결정적인 증거를 찾아내세요."
      ]
    }
  ],
  "urgentHints": [
    "🚨 긴급 제보: 발레리우스가 교단에서 파문당할 당시, '영혼의 무게'에 대한 이단적인 논문을 발표했었습니다.",
    "🚨 현장 증거: 비밀 실험실에서 대주교의 혈흔이 묻은 연금술 도구가 발견되었습니다.",
    "🚨 최후의 증언: 제압된 발레리우스가 \"이 모든 것은 위대한 지식을 위한 희생이었다\"고 중얼거립니다."
  ],
  "contextualHints": [
    "💡 추리 팁: 범인은 자신의 행동을 '범죄'가 아닌 '연구'라고 생각하고 있을 겁니다.",
    "💡 수사 관점: 모든 증거를 확보하기 전까지는 범인과 절대 직접 대면해서는 안 됩니다.",
    "💡 범죄 심리: 극도의 나르시시스트는 자신의 실패를 인정하지 않고, 마지막까지 저항하기 마련입니다."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackData4;