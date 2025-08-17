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



export const case6ch3: GameScenario = {
  id: 'case6_chapter3',
  title: '기만의 거미줄',
  story: '존경받는 사서 엘라라가 빛나는 전염병으로 부당하게 체포되면서 도시는 혼란에 빠집니다. 법과 질서의 수호자인 발레리우스 대장은 사건의 모순점들과 씨름하며, 그를 더 깊고 은밀한 조사로 이끌게 됩니다. 플레이어는 밀수업자의 증언, 숨겨진 금융 거래 내역, 그리고 희생자의 절박한 탄원을 밝혀내며 복잡한 기만의 거미줄을 헤쳐나가야 합니다. 이 모든 단서들은 엘라라로부터 멀어져 카엘을 향하며, 그의 영향력의 진정한 범위와 범죄를 숨기기 위해 취해진 필사적인 조치들을 드러냅니다.',
  victim: '',
  suspects: [
    {
      id: 'CH3_CH01',
      name: '발레리우스 대장, 고뇌하는 집행자',
      role: '캐릭터',
      description: '법에 헌신하는 도시 경비대 대장. 엘라라 사건의 모순점들로 인해 더 큰 음모를 의심하고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH03',
      name: '불만 많은 회계사',
      role: '캐릭터',
      description: '카엘의 익명 의뢰인들의 재정을 관리했던 신경질적인 회계사. 해고당한 후 복수를 원하고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH04',
      name: '교도소장 엘리아스 쏜',
      role: '캐릭터',
      description: '엄격한 도시 감옥 소장. 규칙을 철저히 지키며 엘라라에게 접근할 수 있는 열쇠를 쥐고 있다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'CH3_EV01',
      name: '엘라라의 부당한 체포',
      description: '결백을 주장하는 엘라라가 빛나는 전염병 혐의로 체포되었다. 대중은 그녀를 마녀 또는 희생양으로 본다.',
      details: '새로운 정보가 드러날수록 혐의가 점점 더 공허하게 느껴지며 상황의 부당함을 보여준다.',
      location: ''
    },
    {
      id: 'CH3_EV02',
      name: '법의학 연금술 분석 보고서',
      description: '빛나는 전염병 샘플을 분석한 과학 보고서. 저주가 아닌 불안정한 연금술 조제약임이 밝혀졌다.',
      details: '세포 회춘을 위해 고안되었지만 생명 에너지 과부하로 인해 치명적 결함이 있다.',
      location: ''
    },
    {
      id: 'CH3_EV04',
      name: '카엘의 역외 금융 기록',
      description: '카엘의 계좌로 흘러들어가는 거대한 익명 지불 기록. 방대한 불법 기업을 시사한다.',
      details: '자금 규모가 엄청나 강력한 숨겨진 후원자나 더 큰 계획이 있음을 암시한다.',
      location: ''
    },
    {
      id: 'CH3_EV06',
      name: '엘라라의 감옥으로부터의 암호화된 메시지',
      description: '엘라라가 감옥에서 몰래 보낸 암호화된 메시지. \'가라앉은 대성당\'을 찾으라는 탄원이 담겨 있다.',
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
      id: 'CH3_FINAL',
      name: '기만의 거미줄의 진정한 목적',
      description: '모든 단서와 증거가 결합되어 기만의 거미줄 뒤에 숨겨진 궁극적 목표를 밝혀내는 결정적 증거.',
      details: '카엘의 연금술 실험이 불멸을 위한 것이 아니라 심연의 고대 존재들을 지상 세계로 소환하기 위한 의식의 일부였음이 완전히 드러납니다.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'CH3_LC01',
      name: '암울한 도시 감옥',
      description: '춥고 축축한 돌과 쇠창살로 이루어진 도시 감옥. 엘라라가 수감되어 있는 곳이다.',
      details: '삼엄하게 경비되며 절망의 메아리가 가득한 억압적인 분위기다.'
    },
    {
      id: 'CH3_LC03',
      name: '버려진 은행 금고',
      description: '오래된 은행 지하의 잊혀진 금고. 카엘의 익명 의뢰인들이 비밀 문서를 보관했던 곳이다.',
      details: '거대한 강철 문이 반쯤 열려 있고 오래된 종이와 잊혀진 부의 냄새가 난다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH3_1',
      cards: ['CH3_EV01', 'CH3_CH01'],
      result: '엘라라의 부당한 체포를 조사한 발레리우스 대장이 법의학 연금술 분석을 명령합니다.',
      unlock: 'CH3_EV02'
    },
    {
      id: 'rule_CH3_2',
      cards: ['CH3_EV01', 'CH3_LC01'],
      result: '엘라라의 체포 사건을 감옥에서 조사하면 불만 많은 회계사를 만나게 됩니다.',
      unlock: 'CH3_CH03'
    },
    {
      id: 'rule_CH3_3',
      cards: ['CH3_CH01', 'CH3_LC01'],
      result: '발레리우스 대장이 감옥을 방문하면 교도소장 엘리아스 쏜을 만나게 됩니다.',
      unlock: 'CH3_CH04'
    },
    {
      id: 'rule_CH3_4',
      cards: ['CH3_EV02', 'CH3_CH03'],
      result: '분석 보고서를 본 불만 많은 회계사가 카엘의 역외 금융 기록을 공개합니다.',
      unlock: 'CH3_EV04'
    },
    {
      id: 'rule_CH3_5',
      cards: ['CH3_EV04', 'CH3_LC01'],
      result: '금융 기록을 바탕으로 감옥을 수색하면 버려진 은행 금고를 발견합니다.',
      unlock: 'CH3_LC03'
    },
    {
      id: 'rule_CH3_6',
      cards: ['CH3_LC03', 'CH3_CH04'],
      result: '은행 금고에서 교도소장이 엘라라의 암호화된 메시지를 전달받습니다.',
      unlock: 'CH3_EV06'
    },
    {
      id: 'rule_CH3_7',
      cards: ['CH3_EV06', 'CH3_CH01'],
      result: '엘라라의 메시지를 해독한 발레리우스 대장이 세 번째 희생자의 로켓을 발견합니다.',
      unlock: 'CH3_EV08'
    },
    {
      id: 'rule_CH3_8',
      cards: ['CH3_EV08', 'CH3_LC03'],
      result: '희생자의 로켓과 은행 금고의 단서가 결합되어 기만의 거미줄의 진정한 목적이 완전히 드러납니다.',
      unlock: 'CH3_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH3_FINAL',
  initialCards: [
    'CH3_EV01',
    'CH3_CH01',
    'CH3_LC01'
  ]
};