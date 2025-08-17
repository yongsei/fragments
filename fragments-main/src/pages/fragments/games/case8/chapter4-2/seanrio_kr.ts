export const case8_chapter4_2_kr = {
  id: 'case8_chapter4_2',
  title: '챕터 4-2: 수호자와의 대면 예고',
  story: '교회 지하 제단으로 향하며 저주의 수호자와의 대면을 예고하고, 저주를 풀기 위한 최종 계획을 세우는 과정.',
  victim: '',
  suspects: [
    {
      id: 'D04',
      name: '의식 주도자',
      role: '의식 주도자',
      description: '릴리의 그림 속에서 더욱 명확해지는, 의식을 주도했던 인물의 형상. 그의 존재는 저주의 핵심과 연결되어 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D05',
      name: '고대 문헌 속 존재',
      role: '고대 문헌 속 존재',
      description: '알렉스가 해독한 고대 문헌에서 언급되는, 저주를 풀 수 있는 방법을 알고 있는 존재. 그러나 그 존재는 이미 사라졌을 수도 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D06',
      name: '저주 유지 핵심',
      role: '저주 유지 핵심',
      description: '챕터 4의 인물 카드를 모두 모으면 드러나는, 저주를 유지하는 핵심적인 존재의 정체.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'D16',
      name: '시간 왜곡의 증폭',
      description: '저주를 풀려는 시도에 따라 마을의 반복되는 현상들이 더욱 격렬해지는 증거.',
      details: '시간의 흐름이 더욱 불안정해진다.',
      location: ''
    },
    {
      id: 'D17',
      name: '저주를 풀기 위한 대가',
      description: "엘라라 할머니가 언급한, 저주를 풀기 위한 '대가'에 대한 암시.",
      details: '이는 여행자가 감수해야 할 위험을 나타낸다.',
      location: 'D01'
    },
    {
      id: 'D18',
      name: '최종 계획의 단서',
      description: '챕터 4의 모든 카드를 모으면 드러나는, 저주를 풀기 위한 최종 계획을 실행하는 데 필요한 결정적인 단서.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'D10',
      name: '광기의 장소',
      description: '마을 주민들의 눈빛이 광기로 물들기 시작하는 장소.',
      details: '저주의 영향이 마을 전체로 확산되고 있음을 보여준다.'
    },
    {
      id: 'D11',
      name: '과거 재현 장소',
      description: '릴리의 그림에 자주 등장하는, 저주받은 과거의 장면이 재현되는 장소.',
      details: ''
    },
    {
      id: 'D12',
      name: '저주의 핵심 장소',
      description: '챕터 4의 장소 카드를 모두 모으면 드러나는, 저주의 핵심이 가장 강력하게 발현되는 장소.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_D04_D05_D06',
      cards: ['D04', 'D05'],
      result: '저주를 유지하는 핵심적인 존재의 정체가 해금되었습니다.',
      unlock: 'D06'
    },
    {
      id: 'rule_D10_D11_D12',
      cards: ['D10', 'D11'],
      result: '저주의 핵심이 가장 강력하게 발현되는 장소에 대한 정보가 해금되었습니다.',
      unlock: 'D12'
    },
    {
      id: 'rule_D16_D17_D18',
      cards: ['D16', 'D17'],
      result: '저주를 풀기 위한 최종 계획을 실행하는 데 필요한 결정적인 단서가 해금되었습니다.',
      unlock: 'D18'
    }
  ],
  fragments: [],
  winCondition: 'D18',
  initialCards: ['D04', 'D10', 'D16']
};