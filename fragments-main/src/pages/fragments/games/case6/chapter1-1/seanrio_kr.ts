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

export const case6ch1_1: GameScenario = {
  id: 'case6_chapter1_1',
  title: '도서관의 발견',
  story: '고대 대도서관에서 평범해 보이는 빛나는 원고의 발견은 빠르게 복잡한 비밀의 거미줄로 얽혀 들어간다. 탐정은 도서관의 금지된 구역을 탐색하고, 수수께끼 같은 수석 사서 엘라라를 만나며, 신비한 빛나는 전염병의 초기 단서들을 발견한다. 불안한 견습생 조나스와 회의적인 경비병 쏜 상사를 통해 도서관에 숨겨진 어두운 비밀의 존재를 감지하게 된다.',
  victim: '',
  
  suspects: [
    {
      id: 'CH1_CH01',
      name: '엘라라, 금지된 지식의 파수꾼',
      role: '캐릭터',
      description: '날카로운 눈을 가진 수석 사서. 은발에 반달 안경을 쓰고 있으며, 도서관의 위험한 비밀들을 지키고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH02',
      name: '조나스, 불안한 견습생',
      role: '캐릭터',
      description: '항상 불안해하는 젊은 견습 사서. 눈맞춤을 피하고 손이 떨리며, 어떤 비밀에 짓눌려 있는 듯하다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH03',
      name: '쏜 상사, 회의적인 경비병',
      role: '캐릭터',
      description: '노련한 도시 경비대 상사. 마법과 초자연적 현상을 믿지 않으며, 오직 증거와 논리만을 신뢰한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH1_EV01',
      name: '희미하게 빛나는 원고',
      description: '도서관 깊은 곳에서 발견된 고대 원고. 해초 같은 재질로 만들어졌으며 부드러운 빛을 발한다.',
      details: '잊혀진 언어로 쓰여 있고, 천체와 연금술 기호가 그려져 있어 숨겨진 지식을 암시한다.',
      location: ''
    },
    {
      id: 'CH1_EV02',
      name: '고대 언어의 번역',
      description: '엘라라가 해독한 원고의 일부. 심해의 고대 존재들과 지상 세계를 연결하는 의식에 대한 내용이 담겨 있다.',
      details: '번역된 내용은 불완전하지만, 위험한 지식의 편린을 보여준다.',
      location: ''
    },
    {
      id: 'CH1_EV04',
      name: '조나스의 목격담',
      description: '조나스가 떨리는 목소리로 증언한 이상한 현상들. 밤중에 들리는 기이한 소리와 움직이는 그림자들.',
      details: '그의 증언은 도서관에 초자연적인 현상이 일어나고 있음을 시사한다.',
      location: ''
    },
    {
      id: 'CH1_EV05',
      name: '쏜 상사의 회의론',
      description: '쏜 상사가 제시하는 합리적인 설명들. 모든 현상에는 논리적인 원인이 있다고 주장한다.',
      details: '그의 회의적인 시각은 사건을 다른 관점에서 바라보게 한다.',
      location: ''
    },
    {
      id: 'CH1_EV10',
      name: '도서관의 이상 징후',
      description: '최근 도서관에서 발생한 일련의 이상한 사건들. 책이 저절로 움직이고, 촛불이 꺼지는 현상들.',
      details: '이러한 현상들은 원고의 발견과 시기적으로 일치한다.',
      location: ''
    },
    {
      id: 'CH1_EV10_FINAL',
      name: '첫 번째 단서의 발견',
      description: '원고와 관련된 초기 단서들이 모여 형성되는 첫 번째 중요한 발견.',
      details: '도서관에 숨겨진 더 큰 비밀의 존재를 암시하는 결정적인 순간이다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH1_LC01',
      name: '대도서관의 금지된 구역',
      description: '어둠 속에 우뚝 솟은 선반들이 있는 도서관의 비밀 구역. 위험한 책들이 보관되어 있다.',
      details: '벨벳 밧줄과 고대 마법으로 보호되며, 특권층만이 접근할 수 있다.'
    },
    {
      id: 'CH1_LC02',
      name: '고대 문서 보관소',
      description: '도서관 깊숙한 곳에 위치한 특별 보관소. 가장 오래되고 위험한 문서들이 보관되어 있다.',
      details: '엄격한 보안과 마법적 보호막으로 둘러싸여 있으며, 원고가 발견된 장소이다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_1_1_1',
      cards: ['CH1_EV01', 'CH1_LC01'],
      result: '희미하게 빛나는 원고와 금지된 구역을 통해 엘라라를 만나게 됩니다.',
      unlock: 'CH1_CH01'
    },
    {
      id: 'rule_1_1_2',
      cards: ['CH1_CH01', 'CH1_EV01'],
      result: '엘라라와 빛나는 원고를 통해 고대 언어의 번역을 얻게 됩니다.',
      unlock: 'CH1_EV02'
    },
    {
      id: 'rule_1_1_3',
      cards: ['CH1_LC01', 'CH1_CH02'],
      result: '금지된 구역에서 불안한 견습생 조나스를 만나게 됩니다.',
      unlock: 'CH1_CH02'
    },
    {
      id: 'rule_1_1_4',
      cards: ['CH1_CH02', 'CH1_EV10'],
      result: '조나스와 도서관의 이상 징후를 통해 그의 목격담을 듣게 됩니다.',
      unlock: 'CH1_EV04'
    },
    {
      id: 'rule_1_1_5',
      cards: ['CH1_EV04', 'CH1_CH03'],
      result: '조나스의 목격담과 회의적인 경비병 쏜 상사를 통해 그의 회의론을 듣게 됩니다.',
      unlock: 'CH1_EV05'
    },
    {
      id: 'rule_1_1_6',
      cards: ['CH1_EV01', 'CH1_LC02'],
      result: '빛나는 원고와 고대 문서 보관소를 통해 도서관의 이상 징후를 확인합니다.',
      unlock: 'CH1_EV10'
    },
    {
      id: 'rule_1_1_7',
      cards: ['CH1_EV02', 'CH1_EV04'],
      result: '고대 언어의 번역과 조나스의 목격담을 통해 첫 번째 단서의 발견에 도달합니다.',
      unlock: 'CH1_EV10_FINAL'
    },
    {
      id: 'rule_1_1_8',
      cards: ['CH1_EV05', 'CH1_EV10'],
      result: '쏜 상사의 회의론과 도서관의 이상 징후를 통해 첫 번째 단서의 발견을 확인합니다.',
      unlock: 'CH1_EV10_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH1_EV10_FINAL',
  initialCards: [
    'CH1_EV01', // 희미하게 빛나는 원고
    'CH1_LC01', // 대도서관의 금지된 구역
    'CH1_LC02'  // 고대 문서 보관소
  ]
};

export default case6ch1_1;