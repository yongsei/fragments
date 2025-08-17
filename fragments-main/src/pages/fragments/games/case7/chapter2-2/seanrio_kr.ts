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

export const case7ch2_2: GameScenario = {
  id: 'c7_chapter_2_2',
  title: '상호 의심과 불신',
  story: '개별 심문에서 각자의 비밀이 드러나자, 가족들은 서로를 의심하며 책임을 떠넘기기 시작한다. 엘레노어는 새어머니를 의심하고, 베아트리스는 아들을 의심하며, 아서는 사촌을 겨냥한다. 하인의 결정적인 증언이 나오면서 가족들의 불신은 극에 달하고, 탐정은 이 복잡하게 얽힌 관계 속에서 진실의 실마리를 찾아야 한다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'B07',
      name: '엘레노어의 의심',
      role: '인물',
      description: '엘레노어는 새어머니 베아트리스가 아버지의 죽음 후 너무 침착하다며, 마치 기다렸다는 듯이 행동한다고 의심한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B08',
      name: '베아트리스의 아들 의심',
      role: '인물',
      description: '베아트리스는 아서가 빚 때문에 무슨 짓을 했을지 모른다며, 그가 돈을 위해서라면 어떤 짓이든 할 수 있다고 아들을 의심한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B09',
      name: '아서의 사촌 의심',
      role: '인물',
      description: '아서는 세바스찬이 기생충처럼 집에 붙어살았으며, 아버지가 후원을 끊으려 했다는 소문도 있었다며 사촌을 겨냥한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'B13',
      name: '가족들의 불신',
      description: '심문이 진행될수록 가족들은 서로를 향한 의심을 노골적으로 드러내기 시작한다.',
      details: '엘레노어, 베아트리스, 아서가 서로를 비난하며 책임을 전가하는 모습은 블랙우드 가문의 깊은 불신을 보여준다.',
      location: ''
    },
    {
      id: 'B16',
      name: '숨겨진 동기',
      description: '가족들의 거짓된 증언과 재정적 압박을 통해 드러나는 각자의 숨겨진 동기들.',
      details: '베아트리스는 재산, 아서는 유산, 세바스찬은 후원 등 각자의 이해관계가 영주의 죽음과 얽혀 있음을 시사한다.',
      location: ''
    },
    {
      id: 'B17',
      name: '하인의 증언',
      description: '세바스찬의 수상한 행적을 밝히는 데 결정적인 역할을 한 하인의 증언.',
      details: '이는 저택 내부에 사건의 진실을 알고 있는 목격자가 존재할 수 있음을 보여준다.',
      location: ''
    },
    {
      id: 'B18',
      name: '가면을 쓴 가족',
      description: '모두가 가면을 쓰고 자신을 변호하는 가운데, 진실은 더욱 깊은 미궁 속으로 빠져든다.',
      details: '탐정은 이들의 가면 뒤에 숨겨진 진실을 파헤쳐야 한다.',
      location: ''
    },
    {
      id: 'B19',
      name: '위험한 관계',
      description: '단순한 가족 불화를 넘어선 위험한 관계의 실마리.',
      details: '가족들 간의 불신과 숨겨진 동기들은 영주의 죽음이 단순한 사고가 아님을 더욱 확신하게 한다.',
      location: ''
    },
    {
      id: 'B20',
      name: '진실의 미궁',
      description: '거짓과 의심이 뒤엉킨 저택에서 진실은 더욱 깊은 미궁 속으로 빠져든다.',
      details: '탐정은 이 미궁을 헤쳐나가 진실을 밝혀내야 한다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'B10',
      name: '당구실',
      description: '가족들의 갈등이 표면화되는 장소. 긴장감이 고조되는 분위기 속에서 서로에 대한 의심이 드러난다.',
      details: '이곳에서 아서는 다른 가족들을 향한 불신을 노골적으로 표현한다.'
    },
    {
      id: 'B11',
      name: '정원',
      description: '평온해 보이는 정원이지만, 이제는 가족들의 불신과 의심이 감도는 장소가 되었다.',
      details: '베아트리스가 아들에 대한 의심을 드러내는 곳이기도 하다.'
    },
    {
      id: 'B12',
      name: '도서관',
      description: '하인의 증언이 나온 후, 세바스찬에 대한 의심이 집중되는 장소.',
      details: '조용했던 도서관이 이제는 의심과 불신의 중심지가 되었다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_2_2_1',
      cards: ['B07', 'B08'],
      result: '엘레노어의 의심과 베아트리스의 아들 의심을 통해 가족들의 불신을 확인합니다.',
      unlock: 'B13'
    },
    {
      id: 'rule_2_2_2',
      cards: ['B08', 'B09'],
      result: '베아트리스의 아들 의심과 아서의 사촌 의심을 통해 각자의 숨겨진 동기를 파악합니다.',
      unlock: 'B16'
    },
    {
      id: 'rule_2_2_3',
      cards: ['B09', 'B12'],
      result: '아서의 사촌 의심과 도서관을 통해 하인의 결정적인 증언을 확보합니다.',
      unlock: 'B17'
    },
    {
      id: 'rule_2_2_4',
      cards: ['B13', 'B07'],
      result: '가족들의 불신과 엘레노어의 의심을 통해 가면을 쓴 가족들의 모습을 확인합니다.',
      unlock: 'B18'
    },
    {
      id: 'rule_2_2_5',
      cards: ['B16', 'B17'],
      result: '숨겨진 동기와 하인의 증언을 통해 가족들 간의 위험한 관계를 파악합니다.',
      unlock: 'B19'
    },
    {
      id: 'rule_2_2_6',
      cards: ['B18', 'B10'],
      result: '가면을 쓴 가족과 당구실의 긴장감을 통해 진실이 더욱 복잡해짐을 깨닫습니다.',
      unlock: 'B20'
    },
    {
      id: 'rule_2_2_7',
      cards: ['B19', 'B11'],
      result: '위험한 관계와 정원의 변화된 분위기를 통해 진실의 미궁에 도달합니다.',
      unlock: 'B20'
    },
    {
      id: 'rule_2_2_8',
      cards: ['B13', 'B17'],
      result: '가족들의 불신과 하인의 증언을 직접 연결하여 진실의 미궁을 파악합니다.',
      unlock: 'B20'
    }
  ],

  fragments: [],
  winCondition: 'B20',
  initialCards: [
    'B07', // 엘레노어의 의심
    'B08', // 베아트리스의 아들 의심
    'B09'  // 아서의 사촌 의심
  ]
};

export default case7ch2_2;