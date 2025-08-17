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

export const case7ch3_1: GameScenario = {
  id: 'c7_chapter_3_1',
  title: '유령 소동의 시작',
  story: '탐문 수사가 교착에 빠질 무렵, 탐정은 흐느끼는 여인의 전설을 파헤치기 시작한다. 낡은 도서관에서 이사벨라 블랙우드의 비극적인 이야기를 발견하고, 폭풍우가 몰아치는 밤 저택에서 본격적인 초자연적 현상이 발생한다. 복도에서 들려오는 흐느낌 소리, 저절로 닫히는 문, 꺼지는 촛불 등으로 가족들은 공포에 떨게 된다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'C02',
      name: '이사벨라 블랙우드의 비극',
      role: '인물',
      description: '100여 년 전 블랙우드 저택에 살았던 여인. 남편에게 배신당하고 재산을 빼앗긴 채 탑에 갇혀 슬프게 죽었다고 전해진다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C04',
      name: '가족들의 공포',
      role: '인물',
      description: '유령 소동에 가족들은 모두 공포에 질려 각자의 방에서 나오지 못한다. 엘레노어는 창백하게 질려있고, 아서는 허세를 부리면서도 다리를 떨고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C17',
      name: '공포에 질린 가족들',
      role: '인물',
      description: '유령 소동으로 인해 공포에 질린 가족들의 모습. 이들의 반응은 유령 소동이 실제처럼 느껴지도록 만든다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'C01',
      name: '전설의 기원',
      description: '게이블 부인이 언급한 흐느끼는 여인의 전설을 파헤치기 위해 저택의 낡은 도서관에서 블랙우드 가문의 역사를 기록한 책을 발견한다.',
      details: '책에는 100여 년 전 이사벨라 블랙우드의 비극적인 이야기가 담겨 있다.',
      location: ''
    },
    {
      id: 'C03',
      name: '유령의 속삭임',
      description: '폭풍우가 몰아치는 밤, 저택 복도에서 희미하지만 분명한 여자의 흐느낌 소리가 들려온다.',
      details: '소리는 복도를 따라 움직이는 듯하며, 창문이 저절로 닫히고 촛불이 꺼지는 등 기이한 현상이 연이어 발생한다.',
      location: ''
    },
    {
      id: 'C12',
      name: '촛불의 소멸',
      description: '유령 소동 중 촛불이 일제히 꺼지는 기이한 현상.',
      details: '이는 유령의 존재를 믿게 하려는 의도적인 연출이거나, 비밀 통로를 이용한 범인의 움직임과 관련이 있을 수 있다.',
      location: ''
    },
    {
      id: 'C15',
      name: '인간의 악의',
      description: '흐느끼는 여인의 전설이 사실은 인간의 탐욕과 악의에 의해 조작된 것임을 암시한다.',
      details: '이는 사건의 초자연적인 면모 뒤에 숨겨진 인간적인 동기를 부각시킨다.',
      location: ''
    },
    {
      id: 'C18',
      name: '이사벨라의 유산',
      description: '이사벨라 블랙우드의 비극이 재산 다툼과 관련이 있다는 점은, 현재 앨리스터 영주의 죽음 역시 유산과 연관되어 있을 가능성을 높인다.',
      details: '역사는 반복된다는 암시를 준다.',
      location: ''
    },
    {
      id: 'C18_FINAL',
      name: '유령인가 연극인가',
      description: '유령 소동을 목격한 탐정이 이것이 실제 유령의 소행인지, 아니면 누군가의 계획된 연극인지 의심하기 시작한다.',
      details: '초자연적 현상들 속에서 인간적인 동기와 의도를 찾으려는 탐정의 추리가 시작된다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'C07',
      name: '낡은 도서관의 기록',
      description: '흐느끼는 여인의 전설을 파헤치기 위해 탐정이 찾은 장소. 먼지 쌓인 서가에서 블랙우드 가문의 역사를 기록한 낡은 책을 발견한다.',
      details: '전설의 기원과 이사벨라 블랙우드의 비극을 알게 되는 중요한 장소이다.'
    },
    {
      id: 'C08',
      name: '폭풍우 치는 밤',
      description: '유령 소동이 본격적으로 시작된 밤. 천둥소리와 함께 저택에 폭풍우가 몰아치며, 스산한 분위기를 더욱 고조시킨다.',
      details: '이는 사건의 긴장감을 높이는 배경이 되며, 유령 소동의 무대가 된다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_3_1_1',
      cards: ['C01', 'C02'],
      result: '전설의 기원과 이사벨라 블랙우드의 비극을 통해 낡은 도서관의 기록을 발견합니다.',
      unlock: 'C07'
    },
    {
      id: 'rule_3_1_2',
      cards: ['C07', 'C08'],
      result: '낡은 도서관의 기록과 폭풍우 치는 밤을 통해 유령의 속삭임이 시작됩니다.',
      unlock: 'C03'
    },
    {
      id: 'rule_3_1_3',
      cards: ['C03', 'C04'],
      result: '유령의 속삭임과 가족들의 공포를 통해 촛불이 꺼지는 기이한 현상을 목격합니다.',
      unlock: 'C12'
    },
    {
      id: 'rule_3_1_4',
      cards: ['C04', 'C12'],
      result: '가족들의 공포와 촛불의 소멸을 통해 공포에 질린 가족들의 모습을 확인합니다.',
      unlock: 'C17'
    },
    {
      id: 'rule_3_1_5',
      cards: ['C01', 'C03'],
      result: '전설의 기원과 유령의 속삭임을 통해 인간의 악의가 숨어있음을 감지합니다.',
      unlock: 'C15'
    },
    {
      id: 'rule_3_1_6',
      cards: ['C02', 'C15'],
      result: '이사벨라 블랙우드의 비극과 인간의 악의를 통해 이사벨라의 유산에 대한 진실을 알게 됩니다.',
      unlock: 'C18'
    },
    {
      id: 'rule_3_1_7',
      cards: ['C17', 'C15'],
      result: '공포에 질린 가족들과 인간의 악의를 통해 이것이 유령인지 연극인지 의심하기 시작합니다.',
      unlock: 'C18_FINAL'
    },
    {
      id: 'rule_3_1_8',
      cards: ['C18', 'C12'],
      result: '이사벨라의 유산과 촛불의 소멸을 통해 유령인가 연극인가에 대한 의문에 도달합니다.',
      unlock: 'C18_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'C18_FINAL',
  initialCards: [
    'C01', // 전설의 기원
    'C02', // 이사벨라 블랙우드의 비극
    'C08'  // 폭풍우 치는 밤
  ]
};

export default case7ch3_1;