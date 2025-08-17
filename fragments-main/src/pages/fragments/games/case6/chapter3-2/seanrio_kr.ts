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

export const case6ch3_2: GameScenario = {
  id: 'case6_chapter3_2',
  title: '기만의 거미줄 완성',
  story: '진실을 향한 첫 걸음을 내딛은 후, 탐정은 복잡한 기만의 거미줄을 헤쳐나가야 한다. 버려진 은행 금고에서 엘라라의 암호화된 메시지를 발견하고, 세 번째 희생자의 개인 로켓에서 카엘과의 직접적 연결을 확인한다. 모든 단서와 증거가 결합되어 기만의 거미줄 뒤에 숨겨진 궁극적 목표가 드러나는 순간이다.',
  victim: '',
  
  suspects: [
    {
      id: 'CH3_CH02',
      name: '익명의 제보자',
      role: '캐릭터',
      description: '엘라라의 무죄를 주장하며 진짜 범인의 존재를 알리는 신비한 인물.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH05',
      name: '정치적 조작자',
      role: '캐릭터',
      description: '사건을 정치적으로 이용하려는 고위층 인사. 진실보다는 안정을 추구한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH3_EV06',
      name: '엘라라의 감옥으로부터의 암호화된 메시지',
      description: '엘라라가 감옥에서 몰래 보낸 암호화된 메시지. 가라앉은 대성당을 찾으라는 탄원이 담겨 있다.',
      details: '그곳이 빛나는 조류의 진정한 원천이자 전염병을 막는 열쇠라고 믿고 있다.',
      location: ''
    },
    {
      id: 'CH3_EV08',
      name: '세 번째 희생자의 개인 로켓',
      description: '희생자 손에 쥐어져 발견된 은색 로켓. 안에 카엘의 초상화가 들어있다.',
      details: '카엘과 희생자의 직접적 연결을 보여주며 엘라라의 무죄를 입증한다.',
      location: ''
    },
    {
      id: 'CH3_EV05',
      name: '정치적 은폐 시도',
      description: '고위층에서 사건을 은폐하려는 시도들. 진실보다는 정치적 안정을 우선시한다.',
      details: '엘라라를 희생양으로 만들어 빠른 해결을 원하는 정치적 의도가 드러난다.',
      location: ''
    },
    {
      id: 'CH3_EV09',
      name: '카엘의 진짜 계획',
      description: '모든 증거를 종합하여 드러나는 카엘의 진정한 계획. 단순한 연금술 실험이 아니다.',
      details: '심해의 고대 존재들을 지상으로 불러들이는 대규모 의식의 일부였다.',
      location: ''
    },
    {
      id: 'CH3_FINAL',
      name: '기만의 거미줄의 진정한 목적',
      description: '모든 단서와 증거가 결합되어 기만의 거미줄 뒤에 숨겨진 궁극적 목표를 밝혀내는 결정적 증거.',
      details: '카엘의 연금술 실험이 불멸을 위한 것이 아니라 심연의 고대 존재들을 지상 세계로 소환하기 위한 의식의 일부였음이 완전히 드러난다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH3_LC03',
      name: '버려진 은행 금고',
      description: '오래된 은행 지하의 잊혀진 금고. 카엘의 익명 의뢰인들이 비밀 문서를 보관했던 곳이다.',
      details: '거대한 강철 문이 반쯤 열려 있고 오래된 종이와 잊혀진 부의 냄새가 난다.'
    },
    {
      id: 'CH3_LC04',
      name: '정치적 음모의 중심',
      description: '고위층의 비밀 회의가 열리는 장소. 사건의 정치적 조작이 계획되는 곳이다.',
      details: '권력의 냄새가 나며, 진실보다는 안정을 추구하는 정치적 의도가 감돌고 있다.'
    },
    {
      id: 'CH3_LC05',
      name: '진실의 교차점',
      description: '모든 단서가 만나는 상징적인 장소. 기만의 거미줄이 완전히 드러나는 곳이다.',
      details: '여기서 카엘의 진정한 목적과 정치적 음모가 하나로 연결된다.'
    },
    {
      id: 'CH3_LC06',
      name: '희망의 빛',
      description: '엘라라의 무죄가 증명되고 진실이 밝혀진 후의 상징적 공간.',
      details: '어둠 속에서 진실의 빛이 비치기 시작하는 희망적인 장소이다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_3_2_1',
      cards: ['CH3_EV06', 'CH3_LC03'],
      result: '엘라라의 암호화된 메시지와 버려진 은행 금고를 통해 익명의 제보자를 만나게 됩니다.',
      unlock: 'CH3_CH02'
    },
    {
      id: 'rule_3_2_2',
      cards: ['CH3_EV08', 'CH3_CH02'],
      result: '세 번째 희생자의 로켓과 익명의 제보자를 통해 정치적 은폐 시도를 발견합니다.',
      unlock: 'CH3_EV05'
    },
    {
      id: 'rule_3_2_3',
      cards: ['CH3_EV05', 'CH3_LC04'],
      result: '정치적 은폐 시도와 정치적 음모의 중심을 통해 정치적 조작자를 만나게 됩니다.',
      unlock: 'CH3_CH05'
    },
    {
      id: 'rule_3_2_4',
      cards: ['CH3_CH05', 'CH3_EV06'],
      result: '정치적 조작자와 엘라라의 메시지를 통해 카엘의 진짜 계획을 알게 됩니다.',
      unlock: 'CH3_EV09'
    },
    {
      id: 'rule_3_2_5',
      cards: ['CH3_EV09', 'CH3_LC05'],
      result: '카엘의 진짜 계획과 진실의 교차점을 통해 기만의 거미줄의 진정한 목적을 알게 됩니다.',
      unlock: 'CH3_FINAL'
    },
    {
      id: 'rule_3_2_6',
      cards: ['CH3_EV08', 'CH3_EV05'],
      result: '희생자의 로켓과 정치적 은폐 시도를 통해 기만의 거미줄의 진정한 목적에 도달합니다.',
      unlock: 'CH3_FINAL'
    },
    {
      id: 'rule_3_2_7',
      cards: ['CH3_LC03', 'CH3_LC04'],
      result: '은행 금고와 정치적 음모의 중심을 통해 기만의 거미줄의 진정한 목적을 확인합니다.',
      unlock: 'CH3_FINAL'
    },
    {
      id: 'rule_3_2_8',
      cards: ['CH3_FINAL', 'CH3_LC06'],
      result: '기만의 거미줄의 진정한 목적이 밝혀지면서 희망의 빛이 비치기 시작합니다.',
      unlock: 'CH3_LC06'
    }
  ],

  fragments: [],
  winCondition: 'CH3_FINAL',
  initialCards: [
    'CH3_EV06', // 엘라라의 암호화된 메시지
    'CH3_EV08', // 세 번째 희생자의 개인 로켓
    'CH3_LC03'  // 버려진 은행 금고
  ]
};

export default case6ch3_2;