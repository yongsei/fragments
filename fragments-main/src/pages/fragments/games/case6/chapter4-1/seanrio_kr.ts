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

export const case6ch4_1: GameScenario = {
  id: 'case6_chapter4_1',
  title: '가라앉은 대성당의 발견',
  story: '마지막 챕터는 엘라라의 절박한 탄원에 이끌려 신화 속 가라앉은 대성당으로 탐정을 바다 깊이 빠뜨린다. 이곳에서 고대 수정의 수호자는 빛나는 전염병의 진정한 원천과 카엘의 끝없는 야망 뒤에 숨겨진 끔찍한 진실을 밝히기 시작한다. 수정의 끔찍한 경고를 통해 도시의 임박한 파멸을 목격하고, 생명 복원 의식의 존재를 알게 된다.',
  victim: '',
  
  suspects: [
    {
      id: 'CH4_CH01',
      name: '고대 수정의 수호자',
      role: '캐릭터',
      description: '수천 년간 가라앉은 대성당을 지켜온 고대 수정의 수호자. 빛나는 에너지 형태로 나타나며 마음으로 소통한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH04',
      name: '엘라라, 이타적인 구원자',
      role: '캐릭터',
      description: '위기의 본질을 이해하고 자신의 운명을 받아들인 엘라라. 도시를 구하기 위한 희생을 준비하고 있다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH4_EV01',
      name: '신화 속 가라앉은 대성당',
      description: '바다 깊은 곳에 있는 전설적인 대성당. 중심에 거대한 수정이 생명 에너지를 발산하고 있다.',
      details: '생물 발광 산호로 장식되어 있으며, 빛나는 전염병의 진정한 원천이자 위기의 핵심이다.',
      location: ''
    },
    {
      id: 'CH4_EV02',
      name: '수정의 끔찍한 경고',
      description: '수호자가 마음에 투영하는 끔찍한 비전. 카엘의 탐욕으로 고갈된 수정이 산산조각 나면서 도시를 집어삼키는 미래.',
      details: '검은 괴사 에너지의 파도가 바다에서 분출하여 모든 생명을 먼지로 만드는 종말론적 결과를 경고한다.',
      location: ''
    },
    {
      id: 'CH4_EV04',
      name: '생명 복원 의식',
      description: '수정의 에너지를 복원하고 도시를 구하는 데 필요한 고대 의식. 상당한 생명력을 바쳐야 하는 복잡한 과정이다.',
      details: '엘라라가 도서관에서 수행하려 했던 바로 그 의식으로, 재앙을 막기 위한 고귀한 자기 희생 행위다.',
      location: ''
    },
    {
      id: 'CH4_EV03',
      name: '카엘의 진정한 야망',
      description: '수호자가 밝히는 카엘의 진정한 목적. 불멸이 아닌 더 어두운 의도가 숨겨져 있다.',
      details: '그는 수정의 힘을 이용해 심해의 고대 존재들을 지상으로 불러들이려 한다.',
      location: ''
    },
    {
      id: 'CH4_EV06',
      name: '도시의 운명',
      description: '수정의 경고를 통해 드러나는 도시의 절망적인 미래. 카엘의 계획이 성공하면 모든 것이 파멸한다.',
      details: '시간이 얼마 남지 않았으며, 즉각적인 행동이 필요하다.',
      location: ''
    },
    {
      id: 'CH4_EV06_FINAL',
      name: '구원의 길',
      description: '절망적인 상황 속에서 발견되는 희미한 희망의 빛.',
      details: '생명 복원 의식을 통해 도시를 구할 수 있는 가능성이 있지만, 큰 희생이 따른다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH4_LC01',
      name: '생명의 제단',
      description: '가라앉은 대성당의 중앙 방으로, 거대한 빛나는 수정이 지배한다. 위기의 핵심으로 생명과 죽음이 섬세한 균형을 이루고 있다.',
      details: '해양 생물과 천체 패턴의 조각들이 제단을 장식하고 있으며, 공기는 오존과 고대 에너지의 윙윙거림으로 가득하다.'
    },
    {
      id: 'CH4_LC03',
      name: '심해의 관문',
      description: '가라앉은 대성당으로 이어지는 신비한 관문. 바다 깊은 곳에서 빛나는 통로가 열린다.',
      details: '엘라라의 인도로 발견된 이 관문은 지상과 심해를 연결하는 고대의 통로이다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_4_1_1',
      cards: ['CH4_EV01', 'CH4_LC03'],
      result: '가라앉은 대성당과 심해의 관문을 통해 생명의 제단에 도달합니다.',
      unlock: 'CH4_LC01'
    },
    {
      id: 'rule_4_1_2',
      cards: ['CH4_LC01', 'CH4_CH01'],
      result: '생명의 제단에서 고대 수정의 수호자를 만나게 됩니다.',
      unlock: 'CH4_CH01'
    },
    {
      id: 'rule_4_1_3',
      cards: ['CH4_CH01', 'CH4_EV01'],
      result: '고대 수정의 수호자와 가라앉은 대성당을 통해 수정의 끔찍한 경고를 받게 됩니다.',
      unlock: 'CH4_EV02'
    },
    {
      id: 'rule_4_1_4',
      cards: ['CH4_EV02', 'CH4_CH01'],
      result: '수정의 끔찍한 경고를 본 후 수호자가 생명 복원 의식을 설명합니다.',
      unlock: 'CH4_EV04'
    },
    {
      id: 'rule_4_1_5',
      cards: ['CH4_EV04', 'CH4_CH04'],
      result: '생명 복원 의식을 알게 된 엘라라가 자신의 희생 의지를 보입니다.',
      unlock: 'CH4_CH04'
    },
    {
      id: 'rule_4_1_6',
      cards: ['CH4_EV02', 'CH4_EV04'],
      result: '수정의 경고와 생명 복원 의식을 통해 카엘의 진정한 야망을 알게 됩니다.',
      unlock: 'CH4_EV03'
    },
    {
      id: 'rule_4_1_7',
      cards: ['CH4_EV03', 'CH4_EV02'],
      result: '카엘의 진정한 야망과 수정의 경고를 통해 도시의 운명을 깨닫습니다.',
      unlock: 'CH4_EV06'
    },
    {
      id: 'rule_4_1_8',
      cards: ['CH4_EV06', 'CH4_EV04'],
      result: '도시의 운명과 생명 복원 의식을 통해 구원의 길을 발견합니다.',
      unlock: 'CH4_EV06_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH4_EV06_FINAL',
  initialCards: [
    'CH4_EV01', // 신화 속 가라앉은 대성당
    'CH4_LC03', // 심해의 관문
    'CH4_CH04'  // 엘라라, 이타적인 구원자
  ]
};

export default case6ch4_1;