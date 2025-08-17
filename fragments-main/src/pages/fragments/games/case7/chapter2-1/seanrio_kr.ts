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

export const case7ch2_1: GameScenario = {
  id: 'c7_chapter_2_1',
  title: '개별 심문',
  story: '탐정은 가족 구성원들을 차례로 개별 심문한다. 정원을 산책하는 베아트리스의 놀라운 침착함, 당구실에서 술을 마시는 아서의 오만한 태도, 도서관에서 집필하는 세바스찬의 모호한 답변을 통해 각자의 숨겨진 비밀과 거짓말을 발견한다. 베아트리스의 재정 문제, 아서의 사채 빚, 세바스찬의 수상한 행적이 차례로 드러난다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'B01',
      name: '베아트리스의 침착함',
      role: '용의자',
      description: '아침 식사 후 정원을 산책하는 베아트리스는 남편의 죽음에 대해 놀라울 정도로 침착한 태도를 보인다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B02',
      name: '아서의 오만함',
      role: '용의자',
      description: '당구실에서 혼자 술을 마시던 아서는 탐정을 노골적으로 비웃으며 경계한다. 그의 오만한 태도 뒤에는 불안감이 숨겨져 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B03',
      name: '세바스찬의 모호함',
      role: '용의자',
      description: '도서관 구석에서 무언가를 기록하던 세바스찬은 영주의 죽음에 대해 철학적인 대답으로 회피한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'B04',
      name: '베아트리스의 자금 문제',
      description: '베아트리스의 손에 들린 편지에서 재산 관리인에게 보내는 긴급한 자금 문제 해결 요청 내용이 발견된다.',
      details: '그녀가 남편의 죽음과 별개로 심각한 재정적 어려움을 겪고 있음을 보여주며, 문제없는 결혼 생활 주장이 거짓임을 암시한다.',
      location: ''
    },
    {
      id: 'B05',
      name: '아서의 사채 빚',
      description: '아서의 방에서 런던의 악명 높은 사채업자에게서 온 독촉장이 여러 통 발견된다.',
      details: '단순한 도박 빚이 아닌, 신변의 위협을 느낄 정도의 심각한 빚에 시달리고 있음을 보여준다.',
      location: ''
    },
    {
      id: 'B06',
      name: '세바스찬의 수상한 행적',
      description: '하인의 증언에 따르면 세바스찬은 사건 당일 밤, 서재 근처 복도에서 서성이는 것이 목격되었다.',
      details: '그는 이 사실을 숨기고 있으며, 그의 모호한 태도와 함께 단순한 방관자가 아닐 수 있다는 의심을 증폭시킨다.',
      location: ''
    },
    {
      id: 'B14',
      name: '거짓된 증언',
      description: '베아트리스의 문제없는 결혼 생활 주장, 아서의 단순 사고 주장, 세바스찬의 모호한 답변 등 가족들의 증언 속에서 발견되는 거짓들.',
      details: '이 거짓들은 각자의 숨겨진 동기와 비밀을 암시한다.',
      location: ''
    },
    {
      id: 'B15',
      name: '재정적 압박',
      description: '베아트리스의 자금 문제와 아서의 사채 빚은 블랙우드 가문이 겉으로는 부유해 보이지만, 실제로는 심각한 재정적 압박에 시달리고 있음을 보여준다.',
      details: '이는 영주의 죽음과 관련된 강력한 동기가 될 수 있다.',
      location: ''
    },
    {
      id: 'B15_FINAL',
      name: '숨겨진 비밀들',
      description: '개별 심문을 통해 드러난 가족들의 숨겨진 비밀과 거짓말들.',
      details: '각자가 영주의 죽음과 관련된 강력한 동기를 가지고 있으며, 모두가 무언가를 숨기고 있음이 명확해진다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'B10',
      name: '당구실',
      description: '아서가 혼자 술을 마시며 시간을 보내는 장소. 아서가 당구 큐대를 부러뜨릴 듯 쥐는 모습은 그의 내면의 분노를 드러낸다.',
      details: '이곳에서 탐정은 아서의 오만한 태도와 함께 그의 불안정한 심리 상태를 관찰한다.'
    },
    {
      id: 'B11',
      name: '정원',
      description: '베아트리스가 아침 식사 후 산책하는 장소. 이곳에서 탐정은 베아트리스의 침착한 태도와 손에 들린 편지를 발견한다.',
      details: '평온해 보이는 정원의 분위기와 베아트리스의 숨겨진 재정 문제가 대조를 이룬다.'
    },
    {
      id: 'B12',
      name: '도서관',
      description: '세바스찬이 주로 시간을 보내며 집필 활동을 하는 장소. 먼지 쌓인 서가와 고요한 분위기는 세바스찬의 과묵한 성격과 어울린다.',
      details: '이곳에서 탐정은 세바스찬의 모호한 증언을 듣게 되며, 그의 진짜 의도를 파악하려 한다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_2_1_1',
      cards: ['B01', 'B11'],
      result: '베아트리스의 침착함과 정원에서의 만남을 통해 그녀의 자금 문제를 발견합니다.',
      unlock: 'B04'
    },
    {
      id: 'rule_2_1_2',
      cards: ['B02', 'B10'],
      result: '아서의 오만함과 당구실에서의 관찰을 통해 그의 사채 빚을 발견합니다.',
      unlock: 'B05'
    },
    {
      id: 'rule_2_1_3',
      cards: ['B03', 'B12'],
      result: '세바스찬의 모호함과 도서관에서의 대화를 통해 그의 수상한 행적을 알게 됩니다.',
      unlock: 'B06'
    },
    {
      id: 'rule_2_1_4',
      cards: ['B04', 'B01'],
      result: '베아트리스의 자금 문제와 침착함을 통해 그녀의 거짓된 증언을 파악합니다.',
      unlock: 'B14'
    },
    {
      id: 'rule_2_1_5',
      cards: ['B05', 'B02'],
      result: '아서의 사채 빚과 오만함을 통해 그의 거짓된 주장을 확인합니다.',
      unlock: 'B14'
    },
    {
      id: 'rule_2_1_6',
      cards: ['B06', 'B03'],
      result: '세바스찬의 수상한 행적과 모호함을 통해 그의 거짓된 답변을 인식합니다.',
      unlock: 'B14'
    },
    {
      id: 'rule_2_1_7',
      cards: ['B04', 'B05'],
      result: '베아트리스의 자금 문제와 아서의 사채 빚을 통해 가문의 재정적 압박을 파악합니다.',
      unlock: 'B15'
    },
    {
      id: 'rule_2_1_8',
      cards: ['B14', 'B15'],
      result: '거짓된 증언과 재정적 압박을 통해 가족들의 숨겨진 비밀들을 종합합니다.',
      unlock: 'B15_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'B15_FINAL',
  initialCards: [
    'B01', // 베아트리스의 침착함
    'B02', // 아서의 오만함
    'B03'  // 세바스찬의 모호함
  ]
};

export default case7ch2_1;