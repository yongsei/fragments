
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


export const feedbackCase6Ch2: CaseFeedbackData = {
  caseId: 'case6_chapter2',
  correctSuspect: 'D-P01', // 닥터 아서 랭던 (전체 시나리오의 최종 범인)
  keyEvidence: [
    'D-E01', // 랭던의 과거 의료 과실
    'D-E03', // 랭던의 수법 (희귀 독극물)
    'D-E05', // 찢겨진 페이지 내용 (공개)
  ],
  combinationFeedback: [
    // 'close' 조합
    {
      cards: ['CH2_LC01', 'CH2_CH01'],
      proximity: 'close',
      messages: [
        '수로가 광활합니다. 카엘은 왜 이곳을 선택했을까요?',
        '수로에서의 카엘의 존재는 매우 의심스럽습니다. 숨겨진 기지를 찾아보세요.',
        '💡 카엘의 숨겨진 실험실 (CH2_EV02)은 수로 깊숙한 곳에 있을 가능성이 높습니다. 찾아보세요!'
      ]
    },
    {
      cards: ['CH2_CH01', 'CH2_EV02'],
      proximity: 'close',
      messages: [
        '카엘의 실험실은 어두운 연금술의 혼돈입니다. 그는 무엇을 만들려고 했을까요?',
        '실험실은 카엘 작전의 심장부입니다. 그의 연구 노트가 그의 진정한 의도를 밝혀줄 것입니다.',
        '💡 카엘의 충격적인 연구 노트 (CH2_EV03)는 그의 실험을 이해하는 데 결정적입니다.'
      ]
    },
    {
      cards: ['CH2_EV01', 'CH2_EV07'],
      proximity: 'close',
      messages: [
        '첫 번째 희생자의 빛나는 피부는 비약의 효과와 일치합니다. 이것이 카엘의 짓일까요?',
        '비약의 섬뜩한 레시피는 빛나는 전염병을 직접적으로 설명합니다. 이것은 직접적인 연결 고리입니다.',
        '💡 이 조합은 카엘의 수법을 확인시켜 줍니다. 이제 그의 의뢰인이 누구인지 (CH2_EV05) 알아보세요.'
      ]
    },
    {
      cards: ['CH2_EV02', 'CH2_EV07'],
      proximity: 'close',
      messages: [
        '카엘의 실험실과 비약 레시피. 이곳에서 전염병이 제조되고 있습니다.',
        '이 조합은 카엘의 타락과 그의 치명적인 조제약의 전모를 드러냅니다.',
        '💡 실험실의 기괴한 실패한 실험 (CH2_EV04)은 그의 수법에 대한 섬뜩한 증거입니다.'
      ]
    },
    // 'partial' 조합
    {
      cards: ['CH2_EV01', 'CH2_CH02'],
      proximity: 'partial',
      messages: [
        '수로 청소부는 터널을 잘 압니다. 희생자 근처에서 특이한 것을 보았을까요?',
        '💭 청소부는 마지못한 정보원입니다. 숨겨진 통로 (CH2_LC01)에 대한 그의 지식이 중요할 수 있습니다.',
        '🔍 수로에서 이상한 빛나는 물질이나 특이한 활동에 대해 물어보세요.'
      ]
    },
    {
      cards: ['CH2_LC02', 'CH2_CH03'],
      proximity: 'partial',
      messages: [
        '가라앉은 시장은 불법 상품의 중심지입니다. 속삭이는 상인이 카엘과 관련이 있을까요?',
        '🏠 상인은 카엘의 공급망에서 핵심적인 연결 고리입니다. 그는 희귀 연금술 재료를 다룹니다.',
        '💡 시장에서 카엘의 거래를 상세히 기록한 암호화된 장부 (CH2_EV10)를 찾아보세요.'
      ]
    },
    {
      cards: ['CH2_EV05', 'CH2_CH04'],
      proximity: 'partial',
      messages: [
        '절박한 귀족이 카엘에게 의뢰했다고요? 누가 불멸을 위해 그런 대가를 지불할까요?',
        '💭 절박한 귀족은 카엘의 부유한 의뢰인으로, 죽음에 대한 두려움에 사로잡혀 있습니다. 그의 신원은 중요합니다.',
        '🔍 이 연결은 카엘의 의뢰인과 그들의 어두운 욕망의 진정한 본질을 드러냅니다.'
      ]
    },
    {
      cards: ['CH2_EV09', 'CH2_LC04'],
      proximity: 'partial',
      messages: [
        '두 번째 희생자의 빛나는 유해가 영안실에 있습니다. 그들에게서 무엇을 배울 수 있을까요?',
        '⚕️ 도시 영안실의 비밀 방은 전염병의 진정한 범위가 이해되고 있는 곳입니다. 그곳에서 더 많은 단서를 찾아보세요.',
        '💡 이것은 전염병의 확산을 확인시켜 줍니다. 이제 누가 카엘에게 공급하고 있는지 (CH2_CH05) 알아보세요.'
      ]
    },
    // 'none' 조합
    {
      cards: ['CH2_LC03', 'CH2_LC05'],
      proximity: 'none',
      messages: [
        '버려진 펌프장과 카엘의 탈출 경로는 모두 수로에 있습니다. 직접적인 관련이 있을까요?',
        '🏠 이들은 수로 내의 별개의 장소입니다. 그들의 연결은 간접적일 수 있습니다.',
        '🔍 카엘의 작전에서 각 장소의 특정 목적에 집중하세요.'
      ]
    },
    {
      cards: ['CH2_CH02', 'CH2_CH04'],
      proximity: 'none',
      messages: [
        '수로 청소부와 절박한 귀족. 그들에게 어떤 연결 고리가 있을까요?',
        '💭 그들의 사회적 지위와 동기는 매우 다릅니다. 직접적인 연결은 가능성이 낮아 보입니다.',
        '🔍 조사에서 그들의 개별적인 역할을 다시 평가해 보세요. 중요할 수는 있지만, 함께는 아닐 수 있습니다.'
      ]
    },
    {
      cards: ['CH2_EV04', 'CH2_EV06'],
      proximity: 'none',
      messages: [
        '기괴한 실패한 실험과 고대 예언 조각. 이것들이 조합될까요?',
        '📖 이 항목들은 미스터���의 다른 측면을 나타냅니다: 과학적 공포와 신비로운 전설.',
        '🔍 그들의 개별적인 중요성을 고려하세요. 중요한 단서일 수 있지만, 조합해서는 아닐 수 있습니다.'
      ]
    },
  ],
  urgentHints: [
    '🚨 긴급 보고: 빛나는 전염병이 변이하여 새로운 희생자들에게서 더 공격적인 증상을 보이고 있습니다. 시간이 얼마 없습니다!',
    '🚨 목격자 증언: 카엘의 숨겨진 실험실에서 이상한 빛이 새어 나오는 것을 보았다는 증언이 있습니다.',
    '🚨 가로챈 통신: 카엘이 더 많은 생물 발광 조류를 확보하기 위해 필사적으로 움직이고 있다는 암호화된 메시지가 가로채졌습니다.',
    '🚨 법의학 분석: 희생자들의 체내에서 발견된 물질이 급격한 세포 노화를 유발하는 것으로 확인되었습니다. 이는 단순한 독극물이 아닙니다.'
  ],
  contextualHints: [
    '💡 추리 팁: 특이한 재료의 공급망을 추적하세요. 누가 그것들을 제공하고, 누구에게 제공하는가?',
    '💡 수사 관점: 카엘의 불멸 추구 뒤에 숨겨진 진정한 동기를 이해하세요. 단순한 탐욕일까요?',
    '💡 증거 분석: 실패한 실험은 범인의 의도와 수법에 대한 중요한 단서를 제공합니다. 무엇을 시사할까요?',
    '💡 인물 동기: 절박한 의뢰인의 배경을 파악하세요. 그들의 절박함이 카엘의 범죄를 어떻게 부추겼을까요?',
    '💡 타임라인 검토: 각 희생자가 언제, 어디서 발견되었는지 확인하세요. 패턴이 있을 수 있습니다.'
  ]
};
