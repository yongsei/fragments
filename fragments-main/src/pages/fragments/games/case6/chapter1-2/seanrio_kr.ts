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

export const case6ch1_2: GameScenario = {
  id: 'case6_chapter1_2',
  title: '금지된 지식',
  story: '첫 번째 단서를 발견한 후, 탐정은 더 깊은 비밀을 파헤치기 시작한다. 엘라라의 개인 일기를 통해 그녀의 빛나는 전염병 연구를 발견하고, 도시 경비대의 예비 보고서에서 수로 근처 실종 사건들을 확인한다. 심해로부터의 수수께끼 같은 경고와 조나스의 비밀 고백을 통해, 원고의 진정한 비밀과 도시 아래 숨겨진 세계의 존재를 깨닫게 된다.',
  victim: '',
  
  suspects: [
    {
      id: 'CH1_CH04',
      name: '신비한 방문자',
      role: '캐릭터',
      description: '도서관에 나타난 정체불명의 인물. 원고에 대해 이상한 관심을 보이며, 경고의 메시지를 남긴다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH1_CH05',
      name: '고대 지식의 수호자',
      role: '캐릭터',
      description: '원고의 진정한 의미를 아는 듯한 신비로운 존재. 도서관의 깊은 곳에서 나타나 경고를 전한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH1_EV03',
      name: '엘라라의 개인 일기',
      description: '엘라라의 숨겨진 일기장. 광적인 필체로 빛나는 전염병에 대한 연구가 기록되어 있다.',
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
      id: 'CH1_EV09',
      name: '원고의 숨겨진 페이지',
      description: '원고에서 새롭게 발견된 숨겨진 페이지들. 더욱 위험하고 금지된 지식이 담겨 있다.',
      details: '심해 존재들과의 소통 방법과 그들을 지상으로 불러들이는 의식에 대한 내용이다.',
      location: ''
    },
    {
      id: 'CH1_EV11',
      name: '도시 아래의 비밀',
      description: '원고와 관련된 모든 단서들이 가리키는 도시 지하의 숨겨진 세계.',
      details: '수로를 통해 연결된 고대 문명의 흔적과 심해 존재들의 영향력이 미치는 영역이다.',
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
      id: 'CH1_LC03',
      name: '대도서관의 비밀 별관',
      description: '책장 뒤에 숨겨진 엘라라의 비밀 연구실. 이상한 유물과 빛나는 물질들이 보관되어 있다.',
      details: '오존과 고대 마법의 냄새가 나며, 알려지지 않은 별자리 차트들이 걸려 있다.'
    },
    {
      id: 'CH1_LC04',
      name: '지하 수로 입구',
      description: '도서관 지하에서 발견된 고대 수로로 이어지는 입구. 도시 아래 숨겨진 세계로의 관문이다.',
      details: '습기와 바닷물 냄새가 나며, 벽에는 고대 문명의 상형문자가 새겨져 있다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_1_2_1',
      cards: ['CH1_EV03', 'CH1_LC03'],
      result: '엘라라의 개인 일기와 비밀 별관을 통해 신비한 방문자를 만나게 됩니다.',
      unlock: 'CH1_CH04'
    },
    {
      id: 'rule_1_2_2',
      cards: ['CH1_EV06', 'CH1_EV07'],
      result: '도시 경비대 보고서와 심해로부터의 경고를 통해 조나스의 비밀 고백을 발견합니다.',
      unlock: 'CH1_EV08'
    },
    {
      id: 'rule_1_2_3',
      cards: ['CH1_EV08', 'CH1_CH04'],
      result: '조나스의 비밀 고백과 신비한 방문자를 통해 원고의 숨겨진 페이지를 발견합니다.',
      unlock: 'CH1_EV09'
    },
    {
      id: 'rule_1_2_4',
      cards: ['CH1_EV09', 'CH1_LC04'],
      result: '원고의 숨겨진 페이지와 지하 수로 입구를 통해 고대 지식의 수호자를 만나게 됩니다.',
      unlock: 'CH1_CH05'
    },
    {
      id: 'rule_1_2_5',
      cards: ['CH1_CH05', 'CH1_EV07'],
      result: '고대 지식의 수호자와 심해로부터의 경고를 통해 도시 아래의 비밀을 알게 됩니다.',
      unlock: 'CH1_EV11'
    },
    {
      id: 'rule_1_2_6',
      cards: ['CH1_EV03', 'CH1_EV06'],
      result: '엘라라의 일기와 경비대 보고서를 통해 심해로부터의 경고를 받게 됩니다.',
      unlock: 'CH1_EV07'
    },
    {
      id: 'rule_1_2_7',
      cards: ['CH1_EV11', 'CH1_EV09'],
      result: '도시 아래의 비밀과 원고의 숨겨진 페이지를 통해 원고의 진정한 비밀에 도달합니다.',
      unlock: 'CH1_FINAL'
    },
    {
      id: 'rule_1_2_8',
      cards: ['CH1_LC04', 'CH1_LC03'],
      result: '지하 수로 입구와 비밀 별관을 통해 원고의 진정한 비밀을 확인합니다.',
      unlock: 'CH1_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH1_FINAL',
  initialCards: [
    'CH1_EV03', // 엘라라의 개인 일기
    'CH1_EV06', // 도시 경비대 예비 보고서
    'CH1_LC03'  // 대도서관의 비밀 별관
  ]
};

export default case6ch1_2;