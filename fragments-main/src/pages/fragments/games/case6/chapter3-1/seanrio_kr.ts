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

export const case6ch3_1: GameScenario = {
  id: 'case6_chapter3_1',
  title: '엘라라의 부당한 체포',
  story: '존경받는 사서 엘라라가 빛나는 전염병으로 부당하게 체포되면서 도시는 혼란에 빠진다. 법과 질서의 수호자인 발레리우스 대장은 사건의 모순점들과 씨름하며, 그를 더 깊고 은밀한 조사로 이끌게 된다. 불만 많은 회계사와 교도소장의 도움으로 법의학 연금술 분석을 통해 빛나는 전염병의 진실을 밝히기 시작한다.',
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
      id: 'CH3_EV03',
      name: '정치적 압력의 증거',
      description: '엘라라의 체포에 정치적 압력이 작용했음을 보여주는 문서들.',
      details: '고위층에서 빠른 해결을 원했으며, 진실보다는 희생양이 필요했음을 시사한다.',
      location: ''
    },
    {
      id: 'CH3_EV07',
      name: '회계사의 복수심',
      description: '불만 많은 회계사가 카엘에게 품고 있는 복수심과 그로 인한 협력 의지.',
      details: '해고당한 후 카엘의 비밀을 폭로하려는 강한 동기를 가지고 있다.',
      location: ''
    },
    {
      id: 'CH3_EV07_FINAL',
      name: '진실을 향한 첫 걸음',
      description: '엘라라의 무죄와 진짜 범인의 존재를 확신하게 되는 결정적인 순간.',
      details: '모든 증거가 카엘을 가리키고 있으며, 엘라라는 희생양일 뿐임이 명확해진다.',
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
      id: 'CH3_LC02',
      name: '경비대 본부',
      description: '발레리우스 대장이 근무하는 도시 경비대 본부. 공식적인 수사가 이루어지는 곳이다.',
      details: '법과 질서의 상징이지만, 정치적 압력에 시달리고 있는 현실을 보여준다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_3_1_1',
      cards: ['CH3_EV01', 'CH3_CH01'],
      result: '엘라라의 부당한 체포를 조사한 발레리우스 대장이 법의학 연금술 분석을 명령합니다.',
      unlock: 'CH3_EV02'
    },
    {
      id: 'rule_3_1_2',
      cards: ['CH3_EV01', 'CH3_LC01'],
      result: '엘라라의 체포와 도시 감옥을 통해 불만 많은 회계사를 만나게 됩니다.',
      unlock: 'CH3_CH03'
    },
    {
      id: 'rule_3_1_3',
      cards: ['CH3_CH01', 'CH3_LC02'],
      result: '발레리우스 대장과 경비대 본부를 통해 교도소장을 만나게 됩니다.',
      unlock: 'CH3_CH04'
    },
    {
      id: 'rule_3_1_4',
      cards: ['CH3_EV02', 'CH3_CH03'],
      result: '분석 보고서를 본 불만 많은 회계사가 카엘의 역외 금융 기록을 공개합니다.',
      unlock: 'CH3_EV04'
    },
    {
      id: 'rule_3_1_5',
      cards: ['CH3_CH01', 'CH3_EV01'],
      result: '발레리우스 대장이 엘라라의 체포 과정을 조사하여 정치적 압력의 증거를 발견합니다.',
      unlock: 'CH3_EV03'
    },
    {
      id: 'rule_3_1_6',
      cards: ['CH3_CH03', 'CH3_EV04'],
      result: '불만 많은 회계사와 카엘의 금융 기록을 통해 회계사의 복수심을 확인합니다.',
      unlock: 'CH3_EV07'
    },
    {
      id: 'rule_3_1_7',
      cards: ['CH3_EV03', 'CH3_EV07'],
      result: '정치적 압력의 증거와 회계사의 복수심을 통해 진실을 향한 첫 걸음을 내딛습니다.',
      unlock: 'CH3_EV07_FINAL'
    },
    {
      id: 'rule_3_1_8',
      cards: ['CH3_EV02', 'CH3_CH04'],
      result: '법의학 분석 보고서와 교도소장을 통해 진실을 향한 첫 걸음을 확인합니다.',
      unlock: 'CH3_EV07_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH3_EV07_FINAL',
  initialCards: [
    'CH3_EV01', // 엘라라의 부당한 체포
    'CH3_CH01', // 발레리우스 대장
    'CH3_LC01'  // 암울한 도시 감옥
  ]
};

export default case6ch3_1;