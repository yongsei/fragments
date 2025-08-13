
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


export const feedbackCase6Ch4: CaseFeedbackData = {
  caseId: 'case6_chapter4',
  correctSuspect: 'D-P01', // 닥터 아서 랭던 (전체 시나리오의 최종 범인)
  keyEvidence: [
    'D-E01', // 랭던의 과거 의료 과실
    'D-E03', // 랭던의 수법 (희귀 독극물)
    'D-E05', // 찢겨진 페이지 내용 (공개)
  ],
  combinationFeedback: [
    // 'close' 조합
    {
      cards: ['CH4_EV01', 'CH4_CH01'],
      proximity: 'close',
      messages: [
        '가라앉은 대성당과 그 수호자가 궁극적인 진실을 쥐고 있습니다. 무엇을 밝혀낼까요?',
        '수호자의 메시지는 중요합니다. 전염병의 진정한 본질과 카엘의 야망을 폭로할 것입니다.',
        '💡 수정의 끔찍한 경고 (CH4_EV02)는 카엘을 막지 못하면 발생할 종말론적 결과를 보여줄 것입니다.'
      ]
    },
    {
      cards: ['CH4_EV02', 'CH4_CH02'],
      proximity: 'close',
      messages: [
        '끔찍한 경고와 카엘의 마지막 제자. 카엘의 최종 계획은 무엇일까요?',
        '카엘의 마지막 제자는 광신적입니다. 그들은 그의 정확한 행방과 최종 의도에 대한 열쇠를 쥐고 있습니다.',
        '💡 카엘의 의기양양한 마지막 노트 (CH4_EV03)가 그의 궁극적인 의식을 상세히 설명할 것입니다.'
      ]
    },
    {
      cards: ['CH4_EV05', 'CH4_LC04'],
      proximity: 'close',
      messages: [
        '수정의 심장부에서 카엘과의 대결. 이것이 최종 전투입니다.',
        '이 조합은 카엘의 궁극적인 몰락으로 이어집니다. 그의 야망이 그를 삼킬 것입니다.',
        '💡 카엘의 최종적이고 끔찍한 몰락 (CH4_CH05)은 이 대결의 직접적인 결과입니다.'
      ]
    },
    {
      cards: ['CH4_CH05', 'CH4_EV07'],
      proximity: 'close',
      messages: [
        '카엘의 괴물 같은 형태와 도시의 집단적 의지. 그를 막을 수 있을까요?',
        '도시의 결합된 힘은 압도적입니다. 이것이 카엘에게 가하는 마지막 일격입니다.',
        '💡 이 조합은 카엘의 최종적이고 끔찍한 몰락 (CH4_EV08)으로 이어지며, 즉각적인 위협의 종식을 의미합니다.'
      ]
    },
    // 'partial' 조합
    {
      cards: ['CH4_CH01', 'CH4_EV02'],
      proximity: 'partial',
      messages: [
        '수호자가 끔찍한 미래를 밝혀냈습니다. 해결책은 무엇일까요?',
        '📖 수호자는 이제 수정을 복원하는 데 필요한 고대 의식을 설명할 것입니다.',
        '💡 생명 복원 의식 (CH4_EV04)이 도시를 구할 유일한 방법입니다.'
      ]
    },
    {
      cards: ['CH4_EV04', 'CH4_CH04'],
      proximity: 'partial',
      messages: [
        '복원 의식과 엘라라의 이타적인 희생 의지. 이것이 유일한 방법일까요?',
        '💭 엘라라는 궁극적인 희생을 할 준비가 되어 있습니다. 이것은 고귀한 영웅주의의 길입니다.',
        '💡 이것은 도시의 운명을 결정할 참을 수 없는 선택 (CH4_EV06)을 당신에게 제시합니다.'
      ]
    },
    {
      cards: ['CH4_EV06', 'CH4_CH03'],
      proximity: 'partial',
      messages: [
        '참을 수 없는 선택. 테론 스승이 대안을 제시할 수 있을까요?',
        '💭 테론 스승은 도시의 집단적 의지를 대표합니다. 그는 희생 없는 해결책을 가지고 있을 수 있습니다.',
        '💡 이것은 도시의 집단적 의지 (CH4_EV07)를 구원의 대안 경로로 밝혀줍니다.'
      ]
    },
    {
      cards: ['CH4_EV07', 'CH4_LC03'],
      proximity: 'partial',
      messages: [
        '중앙 광장에서 도시의 집단적 의지를 결집합니다. 이 에너지는 어디로 갈까요?',
        '🏠 집단적인 에너지는 수정으로 전달됩니다. 이것은 복원 전의 마지막 단계입니다.',
        '💡 이것은 도시의 운명이 봉인될 수정의 심장부 (CH4_LC04)로 이어집니다.'
      ]
    },
    // 'none' 조합
    {
      cards: ['CH4_LC05', 'CH4_LC06'],
      proximity: 'none',
      messages: [
        '복원된 대도서관과 재탄생한 수로. 이것들은 직접적인 단서가 아니라 결과입니다.',
        '🏠 이것들은 도시의 회복을 나타냅니다. 당신의 행동의 결과이지, 조사를 위한 조합이 아닙니다.',
        '🔍 도시의 미래 상태가 아닌, 즉각적인 위협과 해결책에 집중하세요.'
      ]
    },
    {
      cards: ['CH4_CH03', 'CH4_CH05'],
      proximity: 'none',
      messages: [
        '테론 스승과 카엘의 괴물 같은 형태. 그들이 상호작용할까요?',
        '💭 그들의 이념은 완전히 반대입니다. 조합을 위한 공통점은 없습니다.',
        '🔍 카엘과 직접 대면하거나 그에 맞서 도시를 결집하는 데 집중하세요.'
      ]
    },
    {
      cards: ['CH4_EV00', 'CH4_EV00'], // Placeholder for a truly unrelated combination
      proximity: 'none',
      messages: [
        '이 조합은 새로운 통찰력을 제공하지 않습니다. 현재 조사와 관련이 없어 보입니다.',
        '🔍 단서를 다시 평가해 보세요. 일부 조합은 의미 있는 발견으로 이어지지 않을 수 있습니다.',
        '💭 미스터리의 핵심 요소인 수정, 카엘, 그리고 전염병에 집중하는 것을 고려해 보세요.'
      ]
    },
  ],
  urgentHints: [
    '🚨 긴급 경고: 수정의 에너지가 급격히 고갈되고 있습니다. 도시의 파멸이 임박했습니다!',
    '🚨 최종 목격: 카엘이 자신의 최종 의식을 시작했습니다. 그를 막을 시간이 얼마 없습니다!',
    '🚨 수호자의 절규: 수정의 수호자가 마지막 힘을 다해 도움을 요청하고 있습니다. 그의 경고를 무시하지 마세요!',
    '🚨 도시의 불안: 시민들이 알 수 없는 불안감에 휩싸여 있습니다. 집단적인 공포가 도시를 마비시키고 있습니다.'
  ],
  contextualHints: [
    '💡 추리 팁: 가장 어려운 선택이 때로는 가장 올바른 길일 수 있습니다. 희생의 의미를 되새기세요.',
    '💡 수사 관점: 개인의 희생과 집단의 의지 중 어떤 것이 더 큰 힘을 발휘할까요? 두 가지 가능성을 모��� 고려하세요.',
    '💡 범죄 심리: 범인의 마지막 행동은 그의 가장 깊은 욕망과 두려움을 드러냅니다. 그의 광기를 이해하세요.',
    '💡 물증 분석: 수정의 상태는 도시의 운명을 반영합니다. 그 변화를 주시하세요.',
    '💡 타임라인: 모든 것이 절정에 달했습니다. 지금 내리는 결정이 모든 것을 바꿀 것입니다.'
  ]
};