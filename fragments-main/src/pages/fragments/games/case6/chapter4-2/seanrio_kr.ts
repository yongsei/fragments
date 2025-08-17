export interface GameScenario {
  id: string;
  title: string;
  story?: string;
  victim?: string;
  suspects?: any[];
  evidence?: any[];
  locations?: any[];
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

export const case6ch4_2: GameScenario = {
  id: 'case6_chapter4_2',
  title: '가라앉은 진실의 궁극적 계시',
  story: '구원의 길을 발견한 후, 탐정은 카엘과의 절정의 대결에 직면한다. 의식실에서 카엘과의 최종 대결이 벌어지고, 그의 최종적이고 끔찍한 몰락을 목격한다. 모든 단서와 증거가 결합되어 가라앉은 진실 뒤에 숨겨진 궁극적 비밀이 완전히 드러나는 순간이다. 빛나는 전염병과 도시의 위기가 단순한 연금술 실험이 아니라 우주적 균형을 시험하는 고대 예언의 성취였음이 밝혀진다.',
  victim: '',
  
  suspects: [
    {
      id: 'CH4_CH05',
      name: '카엘, 괴물 연금술사',
      role: '캐릭터',
      description: '불안정한 비약으로 인해 기괴한 빛나는 괴물로 변한 카엘. 자신의 야망에 삼켜진 파괴적 존재다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'CH4_EV05',
      name: '카엘과의 절정의 대결',
      description: '의식실에서 카엘과의 최종 대결. 그는 빛나는 액체가 담긴 유리병을 들고 의기양양한 광기로 불타오른다.',
      details: '자신의 천재성이 도시의 운명을 결정할 권리를 준다고 믿는 오만하고 뉘우치지 않는 모습을 보인다.',
      location: ''
    },
    {
      id: 'CH4_EV08',
      name: '카엘의 최종적이고 끔찍한 몰락',
      description: '불안정한 비약이 카엘을 완전히 삼켜 기괴한 빛나는 괴물로 변형시킨 후 빛나는 먼지 더미로 무너뜨린다.',
      details: '자신의 창조물에 의해 삼켜진 악당의 시적인 정의를 보여주며, 즉각적인 위협의 종식을 의미한다.',
      location: ''
    },
    {
      id: 'CH4_EV07',
      name: '도시의 집단적 의지',
      description: '집단 행동의 길을 선택한다면, 이것은 도시의 다양한 주민들의 단합된 정신을 나타낸다.',
      details: '각계각층의 시민들이 중앙 광장에 모여 하늘을 향해 손을 뻗어, 자신들의 생명력을 가라앉은 대성당으로 전달한다.',
      location: ''
    },
    {
      id: 'CH4_EV09',
      name: '새로운 조화의 시대',
      description: '파멸 직전에서 구원받은 도시는 새로운 시대로 접어든다.',
      details: '가라앉은 대성당의 수정은 새롭게 안정된 에너지로 맥동하며, 그 빛은 이제 희망과 균형의 상징이다.',
      location: ''
    },
    {
      id: 'CH4_FINAL',
      name: '가라앉은 진실의 궁극적 계시',
      description: '모든 단서와 증거가 결합되어 가라앉은 진실 뒤에 숨겨진 궁극적 비밀을 밝혀내는 결정적 증거.',
      details: '빛나는 전염병과 도시의 위기가 단순한 연금술 실험이 아니라 우주적 균형을 시험하는 고대 예언의 성취였음이 완전히 드러난다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'CH4_LC02',
      name: '카엘의 최종 의식실',
      description: '수로 깊숙한 곳의 급하게 준비된 임시 의식실. 카엘이 궁극적인 의식을 수행하려는 어두운 마법과 절박한 야망의 장소다.',
      details: '축축한 벽에 신비한 기호가 휘갈겨져 있고, 중앙에는 빛나는 점성 액체로 가득 찬 부글거리는 가마솥이 놓여 있다.'
    },
    {
      id: 'CH4_LC04',
      name: '수정의 심장부',
      description: '가라앉은 대성당 내의 숨겨진 내부 방으로, 수정의 진정한 본질을 이해한 후에만 접근할 수 있다.',
      details: '이곳은 수정의 힘의 핵심으로, 에너지가 가장 집중되어 있으며, 도시의 운명이 봉인될 곳이다.'
    },
    {
      id: 'CH4_LC05',
      name: '복원된 대도서관',
      description: '한때 비밀과 그림자의 장소였던 대도서관은 이제 지식과 희망의 등대가 되었다.',
      details: '금지된 구역은 다시 개방되었고, 그 기록 보관소는 새롭고 계몽적인 텍스트로 가득하다.'
    },
    {
      id: 'CH4_LC06',
      name: '재탄생한 수로',
      description: '한때 어둡고 위험한 미로였던 도시의 수로는 이제 깨끗하고 활기차다.',
      details: '물은 맑게 흐르고, 한때 공포의 원천이었던 생물 발광 식물은 이제 부드럽게 빛나며, 터널을 자연스러운 빛으로 비춘다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_4_2_1',
      cards: ['CH4_EV05', 'CH4_LC02'],
      result: '카엘과의 절정의 대결이 그의 최종 의식실에서 벌어집니다.',
      unlock: 'CH4_CH05'
    },
    {
      id: 'rule_4_2_2',
      cards: ['CH4_CH05', 'CH4_EV05'],
      result: '괴물로 변한 카엘과의 대결에서 그의 최종적이고 끔찍한 몰락을 목격합니다.',
      unlock: 'CH4_EV08'
    },
    {
      id: 'rule_4_2_3',
      cards: ['CH4_EV08', 'CH4_LC04'],
      result: '카엘의 몰락과 수정의 심장부를 통해 도시의 집단적 의지가 발현됩니다.',
      unlock: 'CH4_EV07'
    },
    {
      id: 'rule_4_2_4',
      cards: ['CH4_EV07', 'CH4_EV08'],
      result: '도시의 집단적 의지와 카엘의 몰락을 통해 새로운 조화의 시대가 시작됩니다.',
      unlock: 'CH4_EV09'
    },
    {
      id: 'rule_4_2_5',
      cards: ['CH4_EV09', 'CH4_LC05'],
      result: '새로운 조화의 시대와 복원된 대도서관을 통해 가라앉은 진실의 궁극적 계시에 도달합니다.',
      unlock: 'CH4_FINAL'
    },
    {
      id: 'rule_4_2_6',
      cards: ['CH4_EV09', 'CH4_LC06'],
      result: '새로운 조화의 시대와 재탄생한 수로를 통해 가라앉은 진실의 궁극적 계시를 확인합니다.',
      unlock: 'CH4_FINAL'
    },
    {
      id: 'rule_4_2_7',
      cards: ['CH4_LC05', 'CH4_LC06'],
      result: '복원된 대도서관과 재탄생한 수로를 통해 가라앉은 진실의 궁극적 계시에 도달합니다.',
      unlock: 'CH4_FINAL'
    },
    {
      id: 'rule_4_2_8',
      cards: ['CH4_EV07', 'CH4_LC04'],
      result: '도시의 집단적 의지와 수정의 심장부를 통해 가라앉은 진실의 궁극적 계시를 확인합니다.',
      unlock: 'CH4_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'CH4_FINAL',
  initialCards: [
    'CH4_EV05', // 카엘과의 절정의 대결
    'CH4_LC02', // 카엘의 최종 의식실
    'CH4_LC04'  // 수정의 심장부
  ]
};

export default case6ch4_2;