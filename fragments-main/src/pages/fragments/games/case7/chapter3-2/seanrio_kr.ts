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

export const case7ch3_2: GameScenario = {
  id: 'c7_chapter_3_2',
  title: '비밀 통로의 발견',
  story: '유령 소동이 연극일 가능성을 의심한 탐정은 복도에 잠복하여 진실을 밝히려 한다. 다음 날 밤, 흐느끼는 여인의 형체가 복도 끝 벽걸이 융단이 걸린 곳으로 향하더니 스르르 벽 속으로 사라지는 것을 목격한다. 벽을 조사한 결과 비밀 통로의 입구를 발견하게 되고, 이로써 저택에 숨겨진 공간이 있음을 확신하게 된다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'C11',
      name: '탐정의 잠복',
      role: '인물',
      description: '유령의 정체를 밝히기 위해 복도에 잠복하는 탐정. 그의 날카로운 관찰력과 끈기 있는 추리력이 빛을 발하는 순간이다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'C05',
      name: '벽 속으로 사라진 형체',
      description: '다음 날 밤, 탐정이 잠복한 가운데 흐느끼는 여인의 형체가 복도 끝, 거대한 벽걸이 융단이 걸린 막다른 곳으로 향하더니 스르르 벽 속으로 사라진다.',
      details: '이는 유령이 아닌 물리적인 길이 존재함을 암시한다.',
      location: ''
    },
    {
      id: 'C06',
      name: '비밀 통로의 존재',
      description: '흐느끼는 여인이 사라진 벽을 조사하던 중, 특정 돌출부를 누르자 벽의 일부가 밀려나며 어두운 입구가 드러난다.',
      details: '이는 저택에 숨겨진 비밀 통로가 있음을 확신하게 하는 결정적인 단서이다.',
      location: ''
    },
    {
      id: 'C09',
      name: '유령의 연극',
      description: '흐느끼는 여인의 소동이 실제 유령의 소행이 아닌, 누군가의 계획된 연극일 가능성을 시사하는 단서들.',
      details: '벽 속으로 사라진 형체는 이 연극의 핵심적인 장치임을 보여준다.',
      location: ''
    },
    {
      id: 'C14',
      name: '텅 빈 소리',
      description: '벽걸이 융단을 걷어내고 벽을 두드리자, 다른 곳과 달리 유독 텅 빈 소리가 나는 지점을 발견한다.',
      details: '이는 비밀 통로의 입구를 찾는 데 결정적인 단서가 된다.',
      location: ''
    },
    {
      id: 'C16',
      name: '저택의 비밀',
      description: '비밀 통로의 발견을 통해 블랙우드 저택이 단순히 오래된 건물이 아니라, 수많은 비밀을 품고 있는 공간임을 알게 된다.',
      details: '이 비밀들은 사건의 진실을 밝히는 데 중요한 역할을 한다.',
      location: ''
    },
    {
      id: 'C19',
      name: '미스터리의 심화',
      description: '유령 소동과 비밀 통로의 발견은 사건의 미스터리를 더욱 심화시킨다.',
      details: '탐정은 이제 초자연적인 현상과 물리적인 단서 사이의 연결고리를 찾아야 한다.',
      location: ''
    },
    {
      id: 'C20',
      name: '진실의 문턱',
      description: '비밀 통로의 발견은 탐정이 사건의 진실에 한 발짝 더 다가섰음을 의미한다.',
      details: '이제 이 통로가 어디로 이어져 있으며, 그 안에 어떤 진실이 숨겨져 있는지 밝혀내는 것이 다음 목표가 된다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'C10',
      name: '숨겨진 공간',
      description: '비밀 통로의 존재를 통해 저택 내부에 숨겨진 공간이 있음을 알게 된다.',
      details: '이 공간은 범인이 자신의 알리바이를 조작하고 유령 행세를 하는 데 사용되었을 가능성이 높다.'
    },
    {
      id: 'C13',
      name: '벽걸이 융단',
      description: '복도 끝, 흐느끼는 여인이 사라진 곳에 걸려 있던 거대한 벽걸이 융단.',
      details: '이 융단 뒤에 비밀 통로의 입구가 숨겨져 있었다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_3_2_1',
      cards: ['C11', 'C05'],
      result: '탐정의 잠복을 통해 벽 속으로 사라진 형체를 목격합니다.',
      unlock: 'C05'
    },
    {
      id: 'rule_3_2_2',
      cards: ['C05', 'C13'],
      result: '벽 속으로 사라진 형체와 벽걸이 융단을 통해 비밀 통로의 존재를 확신합니다.',
      unlock: 'C06'
    },
    {
      id: 'rule_3_2_3',
      cards: ['C05', 'C06'],
      result: '벽 속으로 사라진 형체와 비밀 통로의 존재를 통해 유령 소동이 연극임을 알게 됩니다.',
      unlock: 'C09'
    },
    {
      id: 'rule_3_2_4',
      cards: ['C06', 'C13'],
      result: '비밀 통로의 존재와 벽걸이 융단을 통해 텅 빈 소리가 나는 지점을 발견합니다.',
      unlock: 'C14'
    },
    {
      id: 'rule_3_2_5',
      cards: ['C06', 'C10'],
      result: '비밀 통로의 존재와 숨겨진 공간을 통해 저택의 비밀을 알게 됩니다.',
      unlock: 'C16'
    },
    {
      id: 'rule_3_2_6',
      cards: ['C09', 'C10'],
      result: '유령의 연극과 숨겨진 공간을 통해 사건의 미스터리가 더욱 심화됩니다.',
      unlock: 'C19'
    },
    {
      id: 'rule_3_2_7',
      cards: ['C16', 'C14'],
      result: '저택의 비밀과 텅 빈 소리를 통해 진실의 문턱에 도달합니다.',
      unlock: 'C20'
    },
    {
      id: 'rule_3_2_8',
      cards: ['C19', 'C06'],
      result: '미스터리의 심화와 비밀 통로의 존재를 통해 진실의 문턱에 도달합니다.',
      unlock: 'C20'
    }
  ],

  fragments: [],
  winCondition: 'C20',
  initialCards: [
    'C11', // 탐정의 잠복
    'C13', // 벽걸이 융단
    'C10'  // 숨겨진 공간
  ]
};

export default case7ch3_2;