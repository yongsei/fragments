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

export const case6ch2_2: GameScenario = {
  id: 'case6_chapter2_2',
  title: '연금술사의 진정한 목적',
  story: '카엘의 존재를 확인한 후, 탐정은 그의 숨겨진 실험실을 발견하고 충격적인 연구 노트를 찾아낸다. 카엘의 광적인 필체로 쓰인 생명의 비약에 대한 강박적인 탐구와, 심해의 희귀한 생물 발광 조류를 사용한 비약 합성 이론이 상세히 기록되어 있다. 가라앉은 시장에서 엘라라의 가로챈 고백을 발견하며, 카엘의 진정한 목적이 불멸이 아닌 더 어두운 의도임을 깨닫게 된다.',
  victim: '',
  
  suspects: [
    {
      id: 'CH2_CH03',
      name: '그림자 속의 거래상',
      role: '캐릭터',
      description: '가라앉은 시장에서 활동하는 신비한 거래상. 카엘과 비밀 거래를 하며 위험한 재료들을 공급한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH05',
      name: '실험의 목격자',
      role: '캐릭터',
      description: '카엘의 실험을 우연히 목격한 인물. 그의 끔찍한 실험의 진실을 알고 있다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH2_EV02',
      name: '카엘의 숨겨진 실험실',
      description: '수로 깊은 곳에 숨겨진 은밀한 실험실. 부글거리는 증류기와 기괴한 실험들로 가득하다.',
      details: '인간과 해양 생물학의 융합을 묘사한 차트들이 벽에 걸려 있어 카엘의 뒤틀린 연구를 보여준다.',
      location: ''
    },
    {
      id: 'CH2_EV03',
      name: '충격적인 연구 노트',
      description: '카엘의 광적인 필체로 쓰인 연구 노트. 생명의 비약에 대한 강박적인 탐구가 기록되어 있다.',
      details: '심해의 희귀한 생물 발광 조류를 사용한 비약 합성 이론이 상세히 설명되어 있다.',
      location: ''
    },
    {
      id: 'CH2_EV05',
      name: '의뢰인의 절박한 의뢰',
      description: '귀족 가문의 문장이 찍힌 우아한 편지. 불멸의 비약을 의뢰하는 절박한 내용이 담겨 있다.',
      details: '어떤 대가를 치르더라도 젊음의 샘을 만들어 달라는 간절한 부탁이 적혀 있다.',
      location: ''
    },
    {
      id: 'CH2_EV08',
      name: '엘라라의 가로챈 고백',
      description: '카엘의 실험실에서 발견된 엘라라의 고백 초안. 카엘을 질병의 원인으로 고발하고 있다.',
      details: '편지에는 카엘의 분노에 찬 낙서가 가득해 그가 엘라라를 협박했음을 보여준다.',
      location: ''
    },
    {
      id: 'CH2_EV10',
      name: '심해 존재와의 연결',
      description: '카엘의 연구에서 발견된 심해 존재들과의 소통 시도. 그의 진정한 목적을 보여주는 증거다.',
      details: '불멸의 비약은 표면적인 목적이고, 실제로는 심해의 고대 존재들을 불러들이려 한다.',
      location: ''
    },
    {
      id: 'CH2_FINAL',
      name: '연금술사의 진정한 목적',
      description: '모든 증거와 단서가 결합되어 드러나는 카엘의 최종 목표.',
      details: '카엘의 연금술 실험이 불멸을 위한 것이 아니라, 심해의 고대 존재들을 지상으로 불러들이는 의식의 일부였음이 완전히 밝혀진다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH2_LC02',
      name: '가라앉은 시장',
      description: '도시 아래 동굴에서 운영되는 숨겨진 불법 시장. 희귀 재료와 비밀이 거래되는 곳이다.',
      details: '수로 통로를 통해서만 접근 가능하며, 카엘의 은밀한 거래가 이루어지는 장소다.'
    },
    {
      id: 'CH2_LC04',
      name: '실험실의 비밀 구역',
      description: '카엘의 실험실 깊숙한 곳에 위치한 가장 위험한 실험이 이루어지는 구역.',
      details: '심해 존재들과의 소통을 위한 의식용 제단과 금지된 연금술 장비들이 있다.'
    },
    {
      id: 'CH2_LC05',
      name: '지하 수로의 깊은 곳',
      description: '도시 수로의 가장 깊고 어두운 부분. 카엘이 심해와 연결되는 의식을 수행하는 장소.',
      details: '바닷물이 스며들어 오며, 고대의 상형문자가 벽에 새겨져 있다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_2_2_1',
      cards: ['CH2_EV02', 'CH2_EV03'],
      result: '카엘의 숨겨진 실험실과 충격적인 연구 노트를 통해 그림자 속의 거래상을 만나게 됩니다.',
      unlock: 'CH2_CH03'
    },
    {
      id: 'rule_2_2_2',
      cards: ['CH2_CH03', 'CH2_LC02'],
      result: '그림자 속의 거래상과 가라앉은 시장을 통해 의뢰인의 절박한 의뢰를 발견합니다.',
      unlock: 'CH2_EV05'
    },
    {
      id: 'rule_2_2_3',
      cards: ['CH2_EV05', 'CH2_LC04'],
      result: '의뢰인의 의뢰와 실험실의 비밀 구역을 통해 엘라라의 가로챈 고백을 발견합니다.',
      unlock: 'CH2_EV08'
    },
    {
      id: 'rule_2_2_4',
      cards: ['CH2_EV08', 'CH2_CH05'],
      result: '엘라라의 고백과 실험의 목격자를 통해 심해 존재와의 연결을 발견합니다.',
      unlock: 'CH2_EV10'
    },
    {
      id: 'rule_2_2_5',
      cards: ['CH2_EV03', 'CH2_LC05'],
      result: '충격적인 연구 노트와 지하 수로의 깊은 곳을 통해 실험의 목격자를 만나게 됩니다.',
      unlock: 'CH2_CH05'
    },
    {
      id: 'rule_2_2_6',
      cards: ['CH2_EV10', 'CH2_LC05'],
      result: '심해 존재와의 연결과 지하 수로의 깊은 곳을 통해 연금술사의 진정한 목적을 알게 됩니다.',
      unlock: 'CH2_FINAL'
    },
    {
      id: 'rule_2_2_7',
      cards: ['CH2_EV02', 'CH2_EV08'],
      result: '카엘의 실험실과 엘라라의 고백을 통해 연금술사의 진정한 목적에 도달합니다.',
      unlock: 'CH2_FINAL'
    },
    {
      id: 'rule_2_2_8',
      cards: ['CH2_LC04', 'CH2_CH03'],
      result: '실험실의 비밀 구역과 그림자 속의 거래상을 통해 연금술사의 진정한 목적을 확인합니다.',
      unlock: 'CH2_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH2_FINAL',
  initialCards: [
    'CH2_EV02', // 카엘의 숨겨진 실험실
    'CH2_EV03', // 충격적인 연구 노트
    'CH2_LC02'  // 가라앉은 시장
  ]
};

export default case6ch2_2;