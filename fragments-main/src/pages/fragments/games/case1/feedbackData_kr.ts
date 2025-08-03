// Mystery Prototype 전용 케이스별 피드백 시스템
// 각 케이스별로 맞춤형 피드백과 힌트를 제공

export interface CombinationFeedback {
  cards: string[];  // 시나리오와 동일한 배열 형태
  proximity: 'close' | 'partial' | 'none';
  messages: string[];  // 힌트 레벨별 메시지 (0,1,2 단계)
}

export interface CaseFeedbackData {
  caseId: string;
  correctSuspect: string;
  keyEvidence: string[];
  combinationFeedback: CombinationFeedback[];  // 배열 기반으로 변경
  urgentHints: string[];
  contextualHints: string[];
}

// Case 1: 저택 살인 사건 피드백 데이터
export const case1FeedbackData: CaseFeedbackData = {
  caseId: 'mansion_murder',
  correctSuspect: 'mary_west',
  keyEvidence: ['will_draft', 'insurance_policy', 'poison_container', 'garden_gloves'],
  
  combinationFeedback: [
    // 메리와 핵심 증거들 (close - 정답에 가까움)
    {
      cards: ['mary_west', 'will_draft'],
      proximity: 'close',
      messages: [
        '메리와 유언장... 흥미로운 조합이군요. 뭔가 더 필요해 보입니다.',
        '메리가 유언장과 관련이 있어 보입니다! 하지만 완전한 연결이 되려면 다른 증거가 필요합니다.',
        '💡 메리와 유언장은 핵심 단서입니다. 재정적 동기와 관련된 다른 증거를 찾아보세요.'
      ]
    },
    {
      cards: ['mary_west', 'insurance_policy'],
      proximity: 'close',
      messages: [
        '메리와 보험증서... 중요한 연결점이 있어 보입니다.',
        '메리가 보험금과 연관되어 있군요! 하지만 방법에 대한 증거가 더 필요합니다.',
        '💡 메리의 보험금 동기가 분명합니다. 이제 범행 방법에 대한 물리적 증거를 찾아보세요.'
      ]
    },
    {
      cards: ['mary_west', 'garden_gloves'],
      proximity: 'close',
      messages: [
        '메리와 정원용 장갑... 뭔가 수상한 조합입니다.',
        '메리의 장갑에서 화학 물질이 검출되었죠! 독과 관련된 증거를 더 찾아보세요.',
        '💡 메리가 독을 다룬 흔적이 있습니다. 독의 출처나 용기를 찾아보세요.'
      ]
    },
    {
      cards: ['mary_west', 'poison_container'],
      proximity: 'close',
      messages: [
        '메리와 독 용기... 직접적인 연관성이 보입니다.',
        '메리가 독 용기를 사용했을 가능성이 높습니다! 추가 증거로 확실히 해보세요.',
        '💡 메리와 독 용기의 연결이 거의 확실합니다. 동기나 기회에 대한 증거를 더 찾아보세요.'
      ]
    },
    
    // 핵심 증거들끼리의 조합 (close)
    {
      cards: ['will_draft', 'insurance_policy'],
      proximity: 'close',
      messages: [
        '유언장과 보험증서... 메리의 동기와 관련이 있어 보입니다.',
        '메리를 상속에서 제외하려는 계획이 보험금에도 영향을 미쳤네요! 메리와 직접 연결해보세요.',
        '💡 리차드가 메리를 경제적으로 배제하려 했습니다. 이제 메리의 반응을 찾아보세요.'
      ]
    },
    {
      cards: ['garden_gloves', 'poison_container'],
      proximity: 'close',
      messages: [
        '정원용 장갑과 독 용기... 범행 도구들이군요.',
        '독 처리에 사용된 도구들이 발견되었습니다! 누가 사용했는지 확인해보세요.',
        '💡 범행에 사용된 도구들입니다. 이 도구들을 사용할 수 있었던 사람을 찾아보세요.'
      ]
    },
    {
      cards: ['tea_cup', 'poison_container'],
      proximity: 'close',
      messages: [
        '독이 든 차 컵과 독 용기... 범행 방법이 명확해집니다.',
        '독이 어디서 왔는지 분명해졌습니다! 누가 이 독을 차에 넣었는지 찾아보세요.',
        '💡 범행 방법이 확실해졌습니다. 이제 범인의 신원을 확정해야 합니다.'
      ]
    },
    
    // 메리의 일기와 관련 (partial - 부분적으로 맞음)
    {
      cards: ['mary_west', 'diary'],
      proximity: 'partial',
      messages: [
        '메리의 일기에는 분노와 배신감이 가득하네요... 하지만 감정만으로는 범행을 증명할 수 없습니다.',
        '📖 "아버지가 날 버리려 한다"는 메리의 절망적인 글이 보입니다. 구체적인 이유를 찾아보세요.',
        '💭 메리의 심리적 동기는 확실합니다. 이제 그녀가 실제로 행동에 옮길 수 있었던 증거를 찾아보세요.'
      ]
    },
    {
      cards: ['diary', 'phone_records'],
      proximity: 'partial',
      messages: [
        '메리의 일기와 통화 기록을 보니 그녀가 변호사와 자주 통화했네요... 뭔가 계획하고 있었던 걸까요?',
        '📞 메리가 "마지막 기회"라고 언급한 통화 내용이 수상합니다. 무엇에 대한 마지막 기회였을까요?',
        '💔 감정적 동기와 행동 계획이 보입니다. 하지만 실제 범행 수단을 찾아야 완전한 그림이 그려집니다.'
      ]
    },
    
    // 집사 관련 조합들 (partial - 미끼)
    {
      cards: ['james_butler', 'butler_schedule'],
      proximity: 'partial',
      messages: [
        '집사 제임스의 일정표를 보니 사건 당일 30분간 비어있네요... 하지만 그것만으로는 범인이라 단정할 수 없습니다.',
        '📋 제임스가 "개인적인 용무"라고 기록한 시간이 수상합니다. 하지만 범행 동기가 불분명하네요.',
        '⏰ 시간적 공백은 의심스럽지만, 집사에게 리차드를 해할 이유가 있었을까요? 다른 용의자도 살펴보세요.'
      ]
    },
    {
      cards: ['james_butler', 'fake_alibi_note'],
      proximity: 'partial',
      messages: [
        '제임스가 작성한 메모의 필체가 평소와 다르네요... 급하게 꾸며낸 알리바이일까요?',
        '✍️ 집사의 거짓 알리바이가 의심되지만, 범행 현장에 있었다고 해서 반드시 범인은 아닙니다.',
        '🤥 제임스가 거짓말을 하고 있는 건 분명하지만, 다른 이유일 수도 있습니다. 더 결정적인 증거를 찾아보세요.'
      ]
    },
    
    // 의사 관련 조합들 (partial - 미끼)
    {
      cards: ['dr_harrison', 'medical_records'],
      proximity: 'partial',
      messages: [
        '해리슨 의사의 진료 기록을 보니 리차드가 심장 문제로 독성 약물에 취약했다고 하네요...',
        '⚕️ 의사는 독의 치명적 효과를 알고 있었지만, 그것만으론 범행 동기가 약합니다.',
        '🩺 의학적 지식은 있지만 해리슨에게 리차드를 독살할 이유가 있을까요? 다른 관점에서 접근해보세요.'
      ]
    },
    
    // 완전히 관련 없는 조합들 (none)
    {
      cards: ['study', 'bedroom'],
      proximity: 'none',
      messages: [
        '서재와 침실... 두 장소 모두 리차드의 개인 공간이지만 직접적인 연결점은 보이지 않네요.',
        '🏠 장소들 간의 물리적 관계보다는 그 안에서 일어난 일들에 집중해보는 건 어떨까요?',
        '🔍 건물 구조를 파악하는 것도 중요하지만, 사람들의 행동과 동기가 더 중요한 단서가 될 것 같습니다.'
      ]
    },
    {
      cards: ['kitchen', 'garden'],
      proximity: 'none',
      messages: [
        '부엌과 정원... 둘 다 음식과 식물이 있는 곳이지만 이것만으로는 사건과 연결되지 않네요.',
        '🌿 정원에서 기른 허브를 부엌에서 요리에 썼을 수도 있지만, 그게 범행과 무슨 관련이 있을까요?',
        '🍽️ 장소의 기능적 연관성보다는 그곳에서 누가 무엇을 했는지가 더 중요한 단서가 될 것 같습니다.'
      ]
    },
    {
      cards: ['james_butler', 'dr_harrison'],
      proximity: 'none',
      messages: [
        '제임스 집사와 해리슨 의사... 둘 다 리차드와 오래 알고 지낸 사람들이지만 서로 간의 연관성은 보이지 않네요.',
        '👥 두 용의자가 공모했을 가능성보다는 각각의 개별 동기와 증거를 살펴보는 게 좋겠습니다.',
        '🎯 용의자끼리 연결하기보다는 범행에 사용된 구체적인 증거들과 연결해보세요.'
      ]
    }
  ],
  
  urgentHints: [
    '🚨 긴급 제보: 메리가 변호사 사무실에서 나오며 울고 있었다는 목격담이 있습니다. 그날이 바로 사건 전날이었어요!',
    '🚨 현장 증거: 정원 창고에서 빈 독 용기가 발견되었습니다. 라벨이 벗겨져 있지만 화학 잔여물이 남아있네요.',
    '🚨 법의학 보고: 리차드의 차에서 검출된 독성 물질이 일반적인 살충제 성분과 일치합니다. 누가 접근할 수 있었을까요?',
    '🚨 금융 조사: 메리의 계좌에 거액의 빚과 독촉장이 쌓여있었습니다. 경제적 압박이 극심했던 것 같습니다.'
  ],
  
  contextualHints: [
    '💡 추리 팁: 가족 내 갈등이 가장 치명적인 범죄로 이어질 수 있습니다. 혈연관계와 상속 문제를 중심으로 살펴보세요.',
    '💡 수사 관점: 누가 리차드의 일상에 가장 자연스럽게 접근할 수 있었을까요? 차 한 잔을 대접하는 것조차 의심해보세요.',
    '💡 범죄 심리: 절망에 빠진 사람은 평소라면 상상도 못할 일을 저지르기도 합니다. 경제적 압박을 받던 사람을 주목하세요.',
    '💡 물증 분석: 정원 관련 도구들을 보세요. 원예용품이 범행 도구로 사용되었을 가능성이 높습니다.',
    '💡 타임라인: 사건 당일 누가 어디에 있었는지만큼 중요한 건, 사건 전날 누가 무엇을 준비했는지입니다.'
  ]
};

// Case 1 전용 피드백 데이터 - 독립적으로 사용
export default case1FeedbackData;