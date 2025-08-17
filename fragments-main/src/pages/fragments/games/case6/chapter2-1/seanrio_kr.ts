export interface GameScenario {
  id: string;
  title: string;
  story?: string;
  victim?: string;
  suspects?: any[];
  evidence?: any[];
  locations?: any[];
  connections?: any[];
  connectionRules?: any[];
  solution?: any;
  initialFragment?: string;
  finalFragment?: string;
  endingMessage?: string;
  fragments?: any[];
  text?: string;
  choices?: any[];
  clues?: any[];
  temporalFragments?: any[];
  // 게임 설정 추가
  initialCards?: string[];
  winCondition?: string;
}

export const case6ch2_1: GameScenario = {
  id: 'case6_chapter2_1',
  title: '첫 희생자의 발견',
  story: '대도서관의 불안한 단서들을 따라, 수사는 도시의 흐릿한 수로로 이어진다. 그곳에서 신비한 빛나는 전염병의 첫 희생자가 발견되고, 추적은 숨겨진 기괴한 실험실에서 활동하는 불명예스러운 연금술사 카엘에게로 향한다. 수로 청소부와 절박한 귀족의 도움으로 카엘의 은밀한 활동과 그의 충격적인 연구의 일부를 발견하게 된다.',
  victim: '',
  
  suspects: [
    {
      id: 'CH2_CH01',
      name: '카엘, 불명예스러운 연금술사',
      role: '캐릭터',
      description: '교활한 미소를 가진 야윈 남자. 연금술사 길드에서 추방된 후 어둠 속에서 불법 실험을 계속하고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH02',
      name: '수로 청소부',
      role: '캐릭터',
      description: '수로를 잘 아는 날씬한 인물. 터널의 숨겨진 통로와 최근 특이한 활동에 대한 정보를 가지고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH04',
      name: '절박한 귀족',
      role: '캐릭터',
      description: '죽음을 두려워하는 늙은 귀족. 카엘에게 불멸의 비약을 의뢰한 익명의 후원자다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH2_EV01',
      name: '빛의 첫 희생자',
      description: '수로에서 발견된 실종자의 시신. 피부가 은빛으로 발광하고 있으며 손에 낯선 해초를 쥐고 있다.',
      details: '원고의 빛과 유사한 현상을 보이며, 빛나는 전염병의 첫 희생자로 보인다.',
      location: ''
    },
    {
      id: 'CH2_EV04',
      name: '수로의 이상한 활동',
      description: '수로 청소부가 목격한 최근의 이상한 활동들. 밤중에 들리는 기계 소리와 이상한 냄새들.',
      details: '누군가가 수로를 이용해 은밀한 작업을 하고 있음을 시사한다.',
      location: ''
    },
    {
      id: 'CH2_EV06',
      name: '연금술 재료의 흔적',
      description: '수로에서 발견된 희귀한 연금술 재료들의 잔해. 불법적인 실험의 증거들이다.',
      details: '이 재료들은 연금술사 길드에서 금지된 위험한 물질들이다.',
      location: ''
    },
    {
      id: 'CH2_EV07',
      name: '귀족의 절박한 의뢰',
      description: '절박한 귀족이 카엘에게 보낸 의뢰서. 불멸의 비약을 만들어 달라는 간절한 부탁이 담겨 있다.',
      details: '어떤 대가를 치르더라도 젊음을 되찾고 싶다는 절망적인 내용이다.',
      location: ''
    },
    {
      id: 'CH2_EV09',
      name: '카엘의 초기 실험',
      description: '카엘이 수행한 초기 실험들의 흔적. 아직 완성되지 않은 불완전한 비약들.',
      details: '실험 과정에서 많은 실패작들이 만들어졌으며, 이것들이 전염병의 원인일 수 있다.',
      location: ''
    },
    {
      id: 'CH2_EV09_FINAL',
      name: '연금술사의 그림자',
      description: '카엘의 존재와 그의 위험한 실험들이 드러나기 시작하는 순간.',
      details: '빛나는 전염병의 배후에 불명예스러운 연금술사가 있음이 명확해진다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH2_LC01',
      name: '미로 같은 수로',
      description: '도시 지하의 고대 석조 터널 네트워크. 습기와 곰팡이 냄새가 나며 어둡고 억압적인 분위기다.',
      details: '잊혀진 통로와 이상한 생물들에 대한 소문이 끊이지 않는 범죄 현장이다.'
    },
    {
      id: 'CH2_LC03',
      name: '수로의 분기점',
      description: '여러 터널이 만나는 수로의 중심 지점. 카엘의 실험실로 이어지는 숨겨진 통로가 있다.',
      details: '물의 흐름이 복잡하게 얽혀 있어 은밀한 활동을 하기에 적합한 장소다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_2_1_1',
      cards: ['CH2_EV01', 'CH2_LC01'],
      result: '빛의 첫 희생자와 미로 같은 수로를 통해 수로 청소부를 만나게 됩니다.',
      unlock: 'CH2_CH02'
    },
    {
      id: 'rule_2_1_2',
      cards: ['CH2_CH02', 'CH2_EV01'],
      result: '수로 청소부와 첫 희생자를 통해 수로의 이상한 활동을 알게 됩니다.',
      unlock: 'CH2_EV04'
    },
    {
      id: 'rule_2_1_3',
      cards: ['CH2_EV04', 'CH2_LC03'],
      result: '수로의 이상한 활동과 분기점을 통해 카엘을 만나게 됩니다.',
      unlock: 'CH2_CH01'
    },
    {
      id: 'rule_2_1_4',
      cards: ['CH2_CH01', 'CH2_EV04'],
      result: '카엘과 수로의 이상한 활동을 통해 연금술 재료의 흔적을 발견합니다.',
      unlock: 'CH2_EV06'
    },
    {
      id: 'rule_2_1_5',
      cards: ['CH2_EV06', 'CH2_CH04'],
      result: '연금술 재료의 흔적과 절박한 귀족을 통해 귀족의 의뢰를 알게 됩니다.',
      unlock: 'CH2_EV07'
    },
    {
      id: 'rule_2_1_6',
      cards: ['CH2_CH01', 'CH2_EV07'],
      result: '카엘과 귀족의 의뢰를 통해 카엘의 초기 실험을 발견합니다.',
      unlock: 'CH2_EV09'
    },
    {
      id: 'rule_2_1_7',
      cards: ['CH2_EV09', 'CH2_EV01'],
      result: '카엘의 초기 실험과 첫 희생자를 통해 연금술사의 그림자를 확인합니다.',
      unlock: 'CH2_EV09_FINAL'
    },
    {
      id: 'rule_2_1_8',
      cards: ['CH2_EV06', 'CH2_LC03'],
      result: '연금술 재료의 흔적과 수로의 분기점을 통해 연금술사의 그림자에 도달합니다.',
      unlock: 'CH2_EV09_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH2_EV09_FINAL',
  initialCards: [
    'CH2_EV01', // 빛의 첫 희생자
    'CH2_LC01', // 미로 같은 수로
    'CH2_LC03'  // 수로의 분기점
  ]
};

export default case6ch2_1;