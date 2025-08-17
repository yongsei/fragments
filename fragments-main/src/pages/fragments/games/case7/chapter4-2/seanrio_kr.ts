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

export const case7ch4_2: GameScenario = {
  id: 'c7_chapter_4_2',
  title: '살해 동기의 발견',
  story: '영주의 환멸을 확인한 탐정은 일기장의 마지막 기록에서 충격적인 사실을 발견한다. 영주가 변호사를 만나 유언장을 수정했으며, 모든 재산을 자선 단체에 기부하고 가족들에게는 단 한 푼도 남기지 않을 계획이었다는 것이다. 이는 확실한 살해 동기가 되며, 탐정이 진실의 핵심에 도달했음을 직감한 순간 등 뒤에서 차가운 바람과 함께 발소리가 들려온다.',
  victim: 'A14',
  
  suspects: [],

  evidence: [
    {
      id: 'D08',
      name: '상속권 박탈 계획',
      description: '일기장의 마지막 기록에는 영주가 변호사를 만나 유언장을 수정했으며, 모든 재산을 자선 단체에 기부하고 가족들에게는 단 한 푼도 남기지 않을 계획이었다는 충격적인 내용이 담겨 있다.',
      details: '이는 가족 중 누군가에게는 절망적인 소식이었을 것이며, 강력한 살해 동기가 된다.',
      location: ''
    },
    {
      id: 'D09',
      name: '살해 동기',
      description: '영주가 가족 모두의 상속권을 박탈하고 전 재산을 사회에 환원할 계획이었다는 사실을 가족 중 누군가가 미리 알게 되었다면, 이는 확실한 살해 동기가 된다.',
      details: '범인은 이 계획을 막기 위해 영주를 살해한 것이다.',
      location: ''
    },
    {
      id: 'D12',
      name: '차가운 바람과 발소리',
      description: '탐정이 진실의 핵심에 도달했음을 직감한 순간, 등 뒤의 비밀 통로에서 차가운 바람과 함께 희미한 발소리가 들려온다.',
      details: '이는 범인이 탐정의 존재를 눈치챘거나, 증거를 인멸하기 위해 움직이고 있음을 암시한다.',
      location: ''
    },
    {
      id: 'D15',
      name: '진실의 핵심',
      description: '영주의 일기장을 통해 사건의 결정적인 동기를 찾아낸 순간. 탐정은 이제 범인의 정체를 밝히는 데 필요한 모든 퍼즐 조각을 맞추게 된다.',
      details: '모든 단서가 하나로 연결되어 사건의 전모가 드러나기 시작한다.',
      location: ''
    },
    {
      id: 'D16',
      name: '범인의 추격',
      description: '비밀 통로에서 들려온 발소리는 범인이 탐정을 추격하고 있음을 암시한다. 탐정은 이제 범인과의 최후의 대결을 준비해야 한다.',
      details: '진실을 알게 된 탐정에게 범인이 위협을 느끼고 있음을 보여준다.',
      location: ''
    },
    {
      id: 'D17',
      name: '알리바이 조작',
      description: '범인이 비밀 통로를 이용하여 자신의 알리바이를 조작하고 유령 행세를 했다는 사실.',
      details: '이는 사건의 복잡성과 범인의 치밀함을 보여준다.',
      location: ''
    },
    {
      id: 'D19',
      name: '자선 단체 기부',
      description: '영주가 자신의 모든 재산을 자선 단체에 기부하려 했다는 계획.',
      details: '이는 가족들에게는 충격적인 소식이었을 것이며, 살해 동기를 더욱 명확하게 만든다.',
      location: ''
    },
    {
      id: 'D20',
      name: '최후의 단서',
      description: '영주의 일기장은 사건의 모든 미스터리를 풀어줄 최후의 단서이다.',
      details: '이 단서를 통해 탐정은 범인의 정체와 살해 동기를 명확히 파악하게 된다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'D02',
      name: '거미줄 복도',
      description: '범인의 발소리가 들려오는 비밀 통로. 이제는 위험한 추격의 무대가 되었다.',
      details: '한때 범인의 은신처였던 이곳이 이제는 탐정과 범인의 마지막 대결 장소가 될 수도 있다.'
    },
    {
      id: 'D03',
      name: '영주의 비밀 서재',
      description: '진실이 모두 드러난 영주의 비밀 공간. 이곳에서 탐정은 사건의 모든 퍼즐을 맞추게 된다.',
      details: '영주의 마지막 의도와 범인의 동기가 모두 명확해진 결정적인 장소이다.'
    },
    {
      id: 'D14',
      name: '풍자화',
      description: '영주의 비판적 시각을 보여주는 풍자화. 이제는 영주의 절망적인 심경을 더욱 잘 이해할 수 있다.',
      details: '영주가 왜 그런 극단적인 결정을 내렸는지를 보여주는 상징적인 증거이다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_4_2_1',
      cards: ['D08', 'D09'],
      result: '상속권 박탈 계획을 통해 확실한 살해 동기를 파악합니다.',
      unlock: 'D09'
    },
    {
      id: 'rule_4_2_2',
      cards: ['D08', 'D19'],
      result: '상속권 박탈 계획과 자선 단체 기부를 통해 영주의 진짜 의도를 알게 됩니다.',
      unlock: 'D19'
    },
    {
      id: 'rule_4_2_3',
      cards: ['D09', 'D03'],
      result: '살해 동기와 영주의 비밀 서재를 통해 진실의 핵심에 도달합니다.',
      unlock: 'D15'
    },
    {
      id: 'rule_4_2_4',
      cards: ['D15', 'D02'],
      result: '진실의 핵심에 도달한 순간 거미줄 복도에서 차가운 바람과 발소리를 듣게 됩니다.',
      unlock: 'D12'
    },
    {
      id: 'rule_4_2_5',
      cards: ['D12', 'D15'],
      result: '차가운 바람과 발소리, 그리고 진실의 핵심을 통해 범인의 추격을 예상합니다.',
      unlock: 'D16'
    },
    {
      id: 'rule_4_2_6',
      cards: ['D02', 'D09'],
      result: '거미줄 복도와 살해 동기를 통해 알리바이 조작의 가능성을 파악합니다.',
      unlock: 'D17'
    },
    {
      id: 'rule_4_2_7',
      cards: ['D16', 'D17'],
      result: '범인의 추격과 알리바이 조작을 통해 최후의 단서를 확보합니다.',
      unlock: 'D20'
    },
    {
      id: 'rule_4_2_8',
      cards: ['D19', 'D14'],
      result: '자선 단체 기부와 풍자화를 통해 최후의 단서에 도달합니다.',
      unlock: 'D20'
    }
  ],

  fragments: [],
  winCondition: 'D20',
  initialCards: [
    'D08', // 상속권 박탈 계획
    'D03', // 영주의 비밀 서재
    'D02'  // 거미줄 복도
  ]
};

export default case7ch4_2;