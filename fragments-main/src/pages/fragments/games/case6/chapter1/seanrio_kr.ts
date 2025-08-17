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



export const case6ch1: GameScenario = {
  id: 'case6_chapter1',
  title: '속삭이는 원고',
  story: '고대 대도서관에서 평범해 보이는 빛나는 원고의 발견은 빠르게 복잡한 비밀의 거미줄로 얽혀 들어갑니다. 플레이어는 도서관의 금지된 구역을 탐색하고, 수수께끼 같은 수석 사서 엘라라를 만나며, 신비한 "빛나는 전염병"과 도시 아래 숨겨진 세계를 암시하는 초기 단서들을 조합해야 합니다. 이 챕터는 도시를 위협하는 음모에 대한 더 깊은 조사를 위한 무대를 설정하며 핵심 인물과 장소를 소개합니다.',
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
      id: 'CH1_EV03',
      name: '엘라라의 개인 일기',
      description: '엘라라의 숨겨진 일기장. 광적인 필체로 \'빛나는 전염병\'에 대한 연구가 기록되어 있다.',
      details: '치료법을 찾으려는 필사적인 시도와 개인적인 고통의 흔적이 담겨 있다.',
      location: ''
    },
    {
      id: 'CH1_EV06',
      name: '도시 경비대 예비 보고서',
      description: '수로 근처 실종 사건들을 기록한 공식 보고서. 희생자들의 피부에서 은빛 발광이 관찰되었다.',
      details: '원고의 빛과 유사한 현상으로, 도시 당국의 우려가 커지고 있음을 보여준다.',
      location: ''
    },
    {
      id: 'CH1_EV07',
      name: '심해로부터의 수수께끼 같은 경고',
      description: '엘라라에게 보내진 위협적인 편지. 크라켄 봉인이 찍혀 있고 방수 처리되어 있다.',
      details: '심해의 일에 대한 참견을 멈추라는 섬뜩한 경고가 담겨 있다.',
      location: ''
    },
    {
      id: 'CH1_EV08',
      name: '조나스의 비밀 고백',
      description: '조나스가 숨겨둔 급하게 쓴 쪽지. 엘라라의 이상한 의식을 목격했다는 고백이 담겨 있다.',
      details: '그녀가 빛나는 전염병의 원인일 수 있다는 두려움과 죄책감을 표현하고 있다.',
      location: ''
    },
    {
      id: 'CH1_FINAL',
      name: '원고의 진정한 비밀',
      description: '모든 증거와 단서가 결합되어 드러나는 속삭이는 원고의 최종 진실.',
      details: '빛나는 원고가 단순한 고대 문서가 아니라 심해 존재들과 지상 세계를 연결하는 강력한 매개체였음이 밝혀진다.',
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
      id: 'CH1_LC03',
      name: '대도서관의 비밀 별관',
      description: '책장 뒤에 숨겨진 엘라라의 비밀 연구실. 이상한 유물과 빛나는 물질들이 보관되어 있다.',
      details: '오존과 고대 마법의 냄새가 나며, 알려지지 않은 별자리 차트들이 걸려 있다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH1_1',
      cards: ['CH1_EV01', 'CH1_CH01'],
      result: '빛나는 원고와 사서 엘라라를 조사하면 그녀의 개인 일기가 발견됩니다.',
      unlock: 'CH1_EV03'
    },
    {
      id: 'rule_CH1_2',
      cards: ['CH1_EV01', 'CH1_LC01'],
      result: '빛나는 원고를 금지된 구역에서 더 자세히 조사하면 불안한 견습생 조나스를 만나게 됩니다.',
      unlock: 'CH1_CH02'
    },
    {
      id: 'rule_CH1_3',
      cards: ['CH1_CH01', 'CH1_LC01'],
      result: '엘라라와 함께 금지된 구역을 탐색하면 회의적인 경비병 쏜 상사가 나타납니다.',
      unlock: 'CH1_CH03'
    },
    {
      id: 'rule_CH1_4',
      cards: ['CH1_EV03', 'CH1_CH03'],
      result: '엘라라의 일기를 쏜 상사에게 보여주자 도시 경비대의 실종 보고서를 확인해줍니다.',
      unlock: 'CH1_EV06'
    },
    {
      id: 'rule_CH1_5',
      cards: ['CH1_EV06', 'CH1_CH01'],
      result: '실종 보고서를 본 엘라라가 받은 심해로부터의 위협적인 경고 편지를 공개합니다.',
      unlock: 'CH1_EV07'
    },
    {
      id: 'rule_CH1_6',
      cards: ['CH1_EV07', 'CH1_CH02'],
      result: '경고 편지에 겁먹은 조나스가 엘라라의 이상한 의식을 목격했다고 비밀 고백을 합니다.',
      unlock: 'CH1_EV08'
    },
    {
      id: 'rule_CH1_7',
      cards: ['CH1_EV08', 'CH1_LC01'],
      result: '조나스의 증언을 바탕으로 금지된 구역을 수색하여 비밀 별관을 발견합니다.',
      unlock: 'CH1_LC03'
    },
    {
      id: 'rule_CH1_8',
      cards: ['CH1_LC03', 'CH1_EV01'],
      result: '비밀 별관에서 빛나는 원고의 진정한 비밀이 완전히 드러납니다.',
      unlock: 'CH1_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH1_FINAL',
  initialCards: [
    'CH1_EV01',
    'CH1_LC01',
    'CH1_CH01'
  ]
};