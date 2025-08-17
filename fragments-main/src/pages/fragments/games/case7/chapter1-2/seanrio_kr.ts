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

export const case7ch1_2: GameScenario = {
  id: 'c7_chapter_1_2',
  title: '숨겨진 단서들',
  story: '가족들의 갈등을 목격한 탐정은 이제 본격적인 조사에 나선다. 사건 현장인 서재를 처음 조사하며, 경찰이 놓친 사라진 발자국과 난간의 긁힌 자국 등 의심스러운 단서를 발견한다. 가정부 게이블 부인으로부터 저택에 떠도는 흐느끼는 여인의 저주에 대한 이야기를 들으며, 탐정은 영주의 죽음이 단순한 사고가 아님을 확신하게 된다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'A01',
      name: '탐정의 조사',
      role: '탐정',
      description: '가족들의 갈등을 목격한 후, 탐정은 본격적인 조사에 나선다. 경찰이 놓친 단서들을 찾기 위해 세심하게 현장을 살펴본다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A02',
      name: '엘레노어의 협조',
      role: '의뢰인',
      description: '엘레노어는 탐정의 조사에 적극적으로 협조하며, 아버지의 죽음에 대한 의문점들을 함께 찾아나간다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A08',
      name: '게이블 부인',
      role: '가정부',
      description: '수십 년 동안 블랙우드 가문을 섬겨온 나이 든 가정부. 저택에 떠도는 흐느끼는 여인의 저주를 굳게 믿고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A13',
      name: '세바스찬 손',
      role: '용의자',
      description: '앨리스터 영주의 먼 친척으로, 저택에 머물며 집필 활동을 하는 과묵한 작가. 항상 조용히 주변을 관찰한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'A06',
      name: '사라진 발자국',
      description: '영주가 추락한 발코니로 향하는 카펫 위에 희미한 진흙 발자국이 남아있다.',
      details: '발자국은 발코니로 나간 흔적만 있을 뿐, 안으로 다시 들어온 흔적이 없어 영주의 죽음이 단순한 실족사가 아님을 암시한다.',
      location: ''
    },
    {
      id: 'A07',
      name: '난간의 긁힌 자국',
      description: '발코니의 묵직한 대리석 난간에서 금속성 물체에 긁힌 듯한 날카로운 흔적이 발견된다.',
      details: '영주가 실족하며 짚었을 법한 위치와는 조금 떨어진 곳에 있어, 누군가와 실랑이가 있었음을 시사한다.',
      location: ''
    },
    {
      id: 'A09',
      name: '흐느끼는 여인의 저주',
      description: '게이블 부인이 언급한 저택에 떠도는 오래된 전설.',
      details: '비 오는 밤이면 저택 복도에서 여인의 흐느낌 소리가 들리고, 그녀의 모습을 본 사람은 불행을 맞이한다는 이야기.',
      location: ''
    },
    {
      id: 'A20',
      name: '첫날 밤의 의심',
      description: '탐정이 저택에 도착한 첫날 밤, 모든 단서를 종합하여 영주의 죽음이 단순한 사고가 아님을 확신하게 되는 순간.',
      details: '유언장 낭독, 서재 조사, 그리고 게이블 부인의 이야기 등을 통해 사건의 미스터리가 심화된다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'A05',
      name: '서재의 발코니',
      description: '앨리스터 영주가 추락하여 사망한 장소. 서재의 한쪽 벽면을 차지하는 큰 창문 너머에 위치해 있다.',
      details: '이곳에서 영주의 죽음에 대한 첫 번째 의문이 시작되며, 중요한 단서들이 발견된다.'
    },
    {
      id: 'A17',
      name: '서재의 분위기',
      description: '사건이 발생한 서재는 경찰 조사가 끝났음에도 불구하고 여전히 음산하고 무거운 분위기를 풍긴다.',
      details: '탐정은 이곳에서 경찰이 놓친 미묘한 단서들을 발견하며 사건의 진실에 다가간다.'
    },
    {
      id: 'A19',
      name: '낡은 도서관',
      description: '저택 내부에 위치한 먼지 쌓인 도서관. 블랙우드 가문의 역사를 기록한 낡은 책들이 보관되어 있다.',
      details: '흐느끼는 여인의 전설에 대한 단서를 찾을 수 있는 곳이며, 세바스찬이 자주 머무는 장소이다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_1_2_1',
      cards: ['A01', 'A05'],
      result: '탐정의 조사와 서재의 발코니를 통해 사라진 발자국을 발견합니다.',
      unlock: 'A06'
    },
    {
      id: 'rule_1_2_2',
      cards: ['A02', 'A05'],
      result: '엘레노어의 협조와 발코니의 단서를 통해 난간의 긁힌 자국을 발견합니다.',
      unlock: 'A07'
    },
    {
      id: 'rule_1_2_3',
      cards: ['A01', 'A02'],
      result: '탐정과 엘레노어의 조사를 통해 가정부 게이블 부인에 대해 알게 됩니다.',
      unlock: 'A08'
    },
    {
      id: 'rule_1_2_4',
      cards: ['A06', 'A07'],
      result: '사라진 발자국과 난간의 긁힌 자국을 통해 서재의 음산한 분위기를 느끼게 됩니다.',
      unlock: 'A17'
    },
    {
      id: 'rule_1_2_5',
      cards: ['A08', 'A17'],
      result: '게이블 부인과 서재의 분위기를 통해 흐느끼는 여인의 저주에 대한 이야기를 듣게 됩니다.',
      unlock: 'A09'
    },
    {
      id: 'rule_1_2_6',
      cards: ['A09', 'A02'],
      result: '흐느끼는 여인의 저주와 엘레노어를 통해 낡은 도서관의 존재를 알게 됩니다.',
      unlock: 'A19'
    },
    {
      id: 'rule_1_2_7',
      cards: ['A19', 'A02'],
      result: '낡은 도서관과 엘레노어를 통해 세바스찬 손에 대해 알게 됩니다.',
      unlock: 'A13'
    },
    {
      id: 'rule_1_2_8',
      cards: ['A17', 'A19'],
      result: '서재의 분위기와 낡은 도서관을 통해 첫날 밤부터 사건에 대한 확신을 갖게 됩니다.',
      unlock: 'A20'
    }
  ],

  fragments: [],
  winCondition: 'A20',
  initialCards: [
    'A01', // 탐정의 조사
    'A02', // 엘레노어의 협조
    'A05'  // 서재의 발코니
  ]
};

export default case7ch1_2;