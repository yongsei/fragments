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

export const case7ch4_1: GameScenario = {
  id: 'c7_chapter_4_1',
  title: '비밀 서재의 발견',
  story: '탐정은 발견한 비밀 통로를 탐험하기 시작한다. 먼지 쌓인 어두운 복도를 지나 통로의 끝에서 또 다른 숨겨진 문을 발견한다. 그곳은 앨리스터 영주의 진짜 서재이자 그의 비밀 공간이었다. 공식적인 서재와는 달리 그의 내면을 그대로 보여주는 이 공간에서, 탐정은 영주의 비밀 일기장을 발견하고 가족들에 대한 그의 진심을 알게 된다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'D11',
      name: '영주의 환멸',
      role: '인물',
      description: '일기장을 통해 드러나는 앨리스터 영주의 내면. 그는 가족들의 위선과 탐욕에 깊은 환멸을 느끼고 있었다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'D04',
      name: '일기장의 고백',
      description: '영주의 비밀 서재에서 발견된 두꺼운 가죽 표지의 일기장. 최근 날짜로 갈수록 분노와 환멸로 가득 찬 그의 글씨는 가족들에 대한 그의 진심을 드러낸다.',
      details: '영주가 가족들의 위선과 탐욕에 얼마나 실망했는지를 보여주는 결정적인 증거이다.',
      location: ''
    },
    {
      id: 'D05',
      name: '베아트리스에 대한 기록',
      description: '일기장에는 베아트리스가 재산에 대한 탐욕만을 가지고 있으며, 그녀가 영주의 재산을 빼돌리고 있다는 내용이 적혀있다.',
      details: '이는 베아트리스의 재정적 어려움과 연결되어 그녀의 동기를 강화한다.',
      location: ''
    },
    {
      id: 'D06',
      name: '아서에 대한 기록',
      description: '일기장에는 아서가 거액의 빚을 졌으며, 가문의 재산을 탕진하고 있어 상속자가 될 자격이 없다고 기록되어 있다.',
      details: '이는 아서의 도박 빚과 연결되어 그의 동기를 강화한다.',
      location: ''
    },
    {
      id: 'D07',
      name: '엘레노어와 세바스찬에 대한 기록',
      description: '일기장에는 엘레노어는 연약하고, 세바스찬은 음흉하며, 둘 다 영주의 재산을 발판 삼아 살아가려는 기생충에 불과하다고 기록되어 있다.',
      details: '이는 영주가 모든 가족에게 환멸을 느꼈음을 보여준다.',
      location: ''
    },
    {
      id: 'D10',
      name: '비밀 통로의 사용 흔적',
      description: '비밀 통로 바닥에 남아있는 희미한 발자국은 범인이 이 통로를 자유자재로 사용하며 자신의 알리바이를 조작하고, 유령 행세를 해왔음을 보여준다.',
      details: '이는 사라진 발자국 단서와 연결된다.',
      location: ''
    },
    {
      id: 'D13',
      name: '쓰다 만 편지들',
      description: '영주의 비밀 서재 책상 위에 놓여있던 쓰다 만 편지들. 이 편지들은 영주가 죽기 직전까지도 가족들과의 관계에 대해 고민하고 있었음을 보여준다.',
      details: '영주의 복잡한 심경과 가족들에 대한 마지막 생각들을 엿볼 수 있다.',
      location: ''
    },
    {
      id: 'D18',
      name: '가족들의 위선',
      description: '일기장을 통해 드러나는 가족들의 위선적인 모습. 이들은 겉으로는 영주를 존경하는 척했지만, 실제로는 그의 재산만을 탐하고 있었다.',
      details: '영주의 환멸이 얼마나 깊었는지를 보여주는 증거이다.',
      location: ''
    },
    {
      id: 'D18_FINAL',
      name: '영주의 절망적 깨달음',
      description: '일기장을 통해 영주가 가족들의 진짜 모습을 깨달았을 때의 절망과 분노를 확인한 탐정.',
      details: '이 깨달음이 영주로 하여금 극단적인 결정을 내리게 했을 것임을 암시한다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'D01',
      name: '숨겨진 문',
      description: '흐느끼는 여인이 사라진 벽을 면밀히 조사한 끝에 발견한 비밀 통로의 입구.',
      details: '특정 돌출부를 누르자 드르륵 소리와 함께 벽의 일부가 안으로 밀려나며 어두운 입구가 드러난다.'
    },
    {
      id: 'D02',
      name: '거미줄 복도',
      description: '비밀 통로는 좁고 길게 이어져 있으며, 벽은 축축하고 바닥에는 먼지가 두껍게 쌓여있다.',
      details: '그 먼지 위로 누군가 최근에 지나간 듯한 희미한 발자국이 남아있어, 범인이 이 통로를 이용했음을 암시한다.'
    },
    {
      id: 'D03',
      name: '영주의 비밀 서재',
      description: '비밀 통로의 끝에서 발견된 또 다른 숨겨진 문 너머의 공간. 앨리스터 영주의 진짜 서재이자 그의 비밀 공간이다.',
      details: '공식적인 서재와는 달리 그의 내면을 그대로 보여주는 듯한 분위기를 풍긴다.'
    },
    {
      id: 'D14',
      name: '풍자화',
      description: '영주의 비밀 서재 벽에 걸려있던, 그가 경멸했던 사업가들의 풍자화.',
      details: '이는 영주의 성격과 그가 사회에 대해 가졌던 비판적인 시각을 보여준다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_4_1_1',
      cards: ['D01', 'D02'],
      result: '숨겨진 문과 거미줄 복도를 통해 비밀 통로의 사용 흔적을 발견합니다.',
      unlock: 'D10'
    },
    {
      id: 'rule_4_1_2',
      cards: ['D02', 'D03'],
      result: '거미줄 복도를 지나 영주의 비밀 서재에 도달하여 일기장의 고백을 발견합니다.',
      unlock: 'D04'
    },
    {
      id: 'rule_4_1_3',
      cards: ['D04', 'D03'],
      result: '일기장의 고백과 영주의 비밀 서재를 통해 베아트리스에 대한 기록을 발견합니다.',
      unlock: 'D05'
    },
    {
      id: 'rule_4_1_4',
      cards: ['D04', 'D13'],
      result: '일기장의 고백과 쓰다 만 편지들을 통해 아서에 대한 기록을 발견합니다.',
      unlock: 'D06'
    },
    {
      id: 'rule_4_1_5',
      cards: ['D05', 'D06'],
      result: '베아트리스와 아서에 대한 기록을 통해 엘레노어와 세바스찬에 대한 기록을 발견합니다.',
      unlock: 'D07'
    },
    {
      id: 'rule_4_1_6',
      cards: ['D04', 'D07'],
      result: '일기장의 고백과 모든 가족에 대한 기록을 통해 영주의 환멸을 이해합니다.',
      unlock: 'D11'
    },
    {
      id: 'rule_4_1_7',
      cards: ['D05', 'D06'],
      result: '베아트리스와 아서에 대한 기록을 통해 가족들의 위선을 알게 됩니다.',
      unlock: 'D18'
    },
    {
      id: 'rule_4_1_8',
      cards: ['D11', 'D18'],
      result: '영주의 환멸과 가족들의 위선을 통해 영주의 절망적 깨달음에 도달합니다.',
      unlock: 'D18_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'D18_FINAL',
  initialCards: [
    'D01', // 숨겨진 문
    'D02', // 거미줄 복도
    'D03'  // 영주의 비밀 서재
  ]
};

export default case7ch4_1;