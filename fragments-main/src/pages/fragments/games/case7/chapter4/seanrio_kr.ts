
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
}// 임시 파일 - 빌드 오류 해결을 위한 최소한의 export



export const case7ch4: GameScenario = {
  id: 'c7_chapter_4',
  title: '아버지의 죄',
  story: '탐정은 비밀 통로를 발견하고, 그곳에 숨겨진 피해자의 비밀을 통해 사건의 결정적 동기를 찾아낸다. 먼지 쌓인 어두운 통로를 탐험한 끝에, 앨리스터 영주의 숨겨진 서재에 도달한다. 그곳에서 발견한 영주의 비밀 일기장에는, 가족들의 위선과 배신에 대한 환멸, 그리고 그들 모두의 상속권을 박탈하고 전 재산을 자선 단체에 기부하려 했다는 충격적인 계획이 적혀 있었다.',
  victim: 'A14', // 앨리스터 블랙우드 영주
  
  suspects: [
    {
      id: 'D11',
      name: '영주의 환멸',
      role: '인물',
      description: '일기장을 통해 드러나는 앨리스터 영주의 내면. 그는 가족들의 위선과 탐욕에 깊은 환멸을 느끼고 있었으며, 이로 인해 극단적인 결정을 내리게 된다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'D04',
      name: '일기장의 고백',
      description: '영주의 비밀 서재에서 발견된 두꺼운 가죽 표지의 일기장. 최근 날짜로 갈수록 분노와 환멸로 가득 찬 그의 글씨는 가족들에 대한 그의 진심을 드러낸다.',
      details: '',
      location: ''
    },
    {
      id: 'D05',
      name: '베아트리스에 대한 기록',
      description: '일기장에는 베아트리스가 재산에 대한 탐욕만을 가지고 있으며, 그녀가 영주의 재산을 빼돌리고 있다는 내용이 적혀있다. 이는 베아트리스의 재정적 어려움과 연결되어 그녀의 동기를 강화한다.',
      details: '',
      location: ''
    },
    {
      id: 'D06',
      name: '아서에 대한 기록',
      description: '일기장에는 아서가 거액의 빚을 졌으며, 가문의 재산을 탕진하고 있어 상속자가 될 자격이 없다고 기록되어 있다. 이는 아서의 도박 빚과 연결되어 그의 동기를 강화한다.',
      details: '',
      location: ''
    },
    {
      id: 'D07',
      name: '엘레노어와 세바스찬에 대한 기록',
      description: '일기장에는 엘레노어는 연약하고, 세바스찬은 음흉하며, 둘 다 영주의 재산을 발판 삼아 살아가려는 기생충에 불과하다고 기록되어 있다. 이는 영주가 모든 가족에게 환멸을 느꼈음을 보여준다.',
      details: '',
      location: ''
    },
    {
      id: 'D08',
      name: '상속권 박탈 계획',
      description: '일기장의 마지막 기록에는 영주가 변호사를 만나 유언장을 수정했으며, 모든 재산을 자선 단체에 기부하고 가족들에게는 단 한 푼도 남기지 않을 계획이었다는 충격적인 내용이 담겨 있다.',
      details: '',
      location: ''
    },
    {
      id: 'D09',
      name: '살해 동기',
      description: '영주가 가족 모두의 상속권을 박탈하고 전 재산을 사회에 환원할 계획이었다는 사실을 가족 중 누군가가 미리 알게 되었다면, 이는 확실한 살해 동기가 된다. 범인은 이 계획을 막기 위해 영주를 살해한 것이다.',
      details: '',
      location: ''
    },
    {
      id: 'D10',
      name: '비밀 통로의 사용 흔적',
      description: '비밀 통로 바닥에 남아있는 희미한 발자국은 범인이 이 통로를 자유자재로 사용하며 자신의 알리바이를 조작하고, 유령 행세를 해왔음을 보여준다. 이는 \'사라진 발자국\' 단서와 연결된다.',
      details: '',
      location: ''
    },
    {
      id: 'D12',
      name: '차가운 바람과 발소리',
      description: '탐정이 진실의 핵심에 도달했음을 직감한 순간, 등 뒤의 비밀 통로에서 차가운 바람과 함께 희미한 발소리가 들려온다. 이는 범인이 탐정의 존재를 눈치챘거나, 증거를 인멸하기 위해 움직이고 있음을 암시한다.',
      details: '',
      location: ''
    },
    {
      id: 'D13',
      name: '쓰다 만 편지들',
      description: '영주의 비밀 서재 책상 위에 놓여있던 쓰다 만 편지들. 이 편지들은 영주가 죽기 직전까지도 가족들과의 관계에 대해 고민하고 있었음을 보여줄 수 있다.',
      details: '',
      location: ''
    },
    {
      id: 'D15',
      name: '진실의 핵심',
      description: '영주의 일기장을 통해 사건의 결정적인 동기를 찾아낸 순간. 탐정은 이제 범인의 정체를 밝히는 데 필요한 모든 퍼즐 조각을 맞추게 된다.',
      details: '',
      location: ''
    },
    {
      id: 'D16',
      name: '범인의 추격',
      description: '비밀 통로에서 들려온 발소리는 범인이 탐정을 추격하고 있음을 암시한다. 탐정은 이제 범인과의 최후의 대결을 준비해야 한다.',
      details: '',
      location: ''
    },
    {
      id: 'D17',
      name: '알리바이 조작',
      description: '범인이 비밀 통로를 이용하여 자신의 알리바이를 조작하고 유령 행세를 했다는 사실. 이는 사건의 복잡성과 범인의 치밀함을 보여준다.',
      details: '',
      location: ''
    },
    {
      id: 'D18',
      name: '가족들의 위선',
      description: '일기장을 통해 드러나는 가족들의 위선적인 모습. 이들은 겉으로는 영주를 존경하는 척했지만, 실제로는 그의 재산만을 탐하고 있었다.',
      details: '',
      location: ''
    },
    {
      id: 'D19',
      name: '자선 단체 기부',
      description: '영주가 자신의 모든 재산을 자선 단체에 기부하려 했다는 계획. 이는 가족들에게는 충격적인 소식이었을 것이며, 살해 동기를 더욱 명확하게 만든다.',
      details: '',
      location: ''
    },
    {
      id: 'D20',
      name: '최후의 단서',
      description: '영주의 일기장은 사건의 모든 미스터리를 풀어줄 최후의 단서이다. 이 단서를 통해 탐정은 범인의 정체와 살해 동기를 명확히 파악하게 된다.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'D01',
      name: '숨겨진 문',
      description: '\'흐느끼는 여인\'이 사라진 벽을 면밀히 조사한 끝에, 특정 돌출부를 누르자 \'드르륵\' 소리와 함께 벽의 일부가 안으로 밀려나며 어두운 입구가 드러난다. 차갑고 축축한 곰팡이 냄새가 흘러나오는 이 문은 비밀 통로의 시작을 알린다.',
      details: ''
    },
    {
      id: 'D02',
      name: '거미줄 복도',
      description: '비밀 통로는 좁고 길게 이어져 있으며, 벽은 축축하고 바닥에는 먼지가 두껍게 쌓여있다. 하지만 그 먼지 위로 누군가 최근에 지나간 듯한 희미한 발자국이 남아있어, 범인이 이 통로를 이용했음을 암시한다.',
      details: ''
    },
    {
      id: 'D03',
      name: '영주의 비밀 서재',
      description: '비밀 통로의 끝에서 발견된 또 다른 숨겨진 문. 문을 열자 그곳은 앨리스터 영주의 진짜 서재이자 그의 비밀 공간이었다. 공식적인 서재와는 달리 그의 내면을 그대로 보여주는 듯한 분위기를 풍긴다.',
      details: ''
    },
    {
      id: 'D14',
      name: '풍자화',
      description: '영주의 비밀 서재 벽에 걸려있던, 그가 경멸했던 사업가들의 풍자화. 이는 영주의 성격과 그가 사회에 대해 가졌던 비판적인 시각을 보여준다.',
      details: ''
    }
  ],

  connectionRules: [
    {
      id: 'rule_D05',
      cards: ['D04', 'D03'],
      result: '일기장의 고백과 영주의 비밀 서재를 통해 베아트리스에 대한 기록을 발견합니다.',
      unlock: 'D05'
    },
    {
      id: 'rule_D06',
      cards: ['D04', 'D13'],
      result: '일기장의 고백과 쓰다 만 편지들을 통해 아서에 대한 기록을 발견합니다.',
      unlock: 'D06'
    },
    {
      id: 'rule_D07',
      cards: ['D04', 'D05'],
      result: '일기장의 고백과 베아트리스에 대한 기록을 통해 엘레노어와 세바스찬에 대한 기록을 발견합니다.',
      unlock: 'D07'
    },
    {
      id: 'rule_D08',
      cards: ['D04', 'D06'],
      result: '일기장의 고백과 아서에 대한 기록을 통해 상속권 박탈 계획을 알게 됩니다.',
      unlock: 'D08'
    },
    {
      id: 'rule_D09',
      cards: ['D08', 'D10'],
      result: '상속권 박탈 계획과 비밀 통로의 사용 흔적을 통해 살해 동기를 파악합니다.',
      unlock: 'D09'
    },
    {
      id: 'rule_D10',
      cards: ['D01', 'D02'],
      result: '숨겨진 문과 거미줄 복도를 통해 비밀 통로의 사용 흔적을 발견합니다.',
      unlock: 'D10'
    },
    {
      id: 'rule_D11',
      cards: ['D04', 'D07'],
      result: '일기장의 고백과 엘레노어, 세바스찬에 대한 기록을 통해 영주의 환멸을 이해합니다.',
      unlock: 'D11'
    },
    {
      id: 'rule_D12',
      cards: ['D03', 'D10'],
      result: '영주의 비밀 서재와 비밀 통로의 사용 흔적을 통해 차가운 바람과 발소리를 듣게 됩니다.',
      unlock: 'D12'
    },
    {
      id: 'rule_D13',
      cards: ['D03', 'D04'],
      result: '영주의 비밀 서재와 일기장의 고백을 통해 쓰다 만 편지들을 발견합니다.',
      unlock: 'D13'
    },
    {
      id: 'rule_D14',
      cards: ['D03', 'D11'],
      result: '영주의 비밀 서재와 영주의 환멸을 통해 풍자화를 발견합니다.',
      unlock: 'D14'
    },
    {
      id: 'rule_D15',
      cards: ['D09', 'D12'],
      result: '살해 동기와 차가운 바람과 발소리를 통해 진실의 핵심에 도달합니다.',
      unlock: 'D15'
    },
    {
      id: 'rule_D16',
      cards: ['D09', 'D10'],
      result: '살해 동기와 비밀 통로의 사용 흔적을 통해 범인의 추격을 예상합니다.',
      unlock: 'D16'
    },
    {
      id: 'rule_D17',
      cards: ['D02', 'D10'],
      result: '거미줄 복도와 비밀 통로의 사용 흔적을 통해 알리바이 조작의 가능성을 파악합니다.',
      unlock: 'D17'
    },
    {
      id: 'rule_D18',
      cards: ['D05', 'D06'],
      result: '베아트리스와 아서에 대한 기록을 통해 가족들의 위선을 알게 됩니다.',
      unlock: 'D18'
    },
    {
      id: 'rule_D19',
      cards: ['D08', 'D09'],
      result: '상속권 박탈 계획과 살해 동기를 통해 자선 단체 기부 계획을 알게 됩니다.',
      unlock: 'D19'
    },
    {
      id: 'rule_D20',
      cards: ['D15', 'D16'],
      result: '진실의 핵심과 범인의 추격을 통해 최후의 단서를 확보합니다.',
      unlock: 'D20'
    }
  ],

  fragments: [], 
  winCondition: "D20", // 최후의 단서
  initialCards: [ 
    'D01', // 숨겨진 문
    'D02', // 거미줄 복도
    'D03', // 영주의 비밀 서재
    'D04'  // 일기장의 고백
  ]
};

export default case7ch4;
