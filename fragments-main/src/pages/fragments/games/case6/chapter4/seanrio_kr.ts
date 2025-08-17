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



export const case6ch4: GameScenario = {
  id: 'case6_chapter4',
  title: '가라앉은 진실',
  story: '마지막 챕터는 엘라라의 절박한 탄원에 이끌려 신화 속 가라앉은 대성당으로 플레이어를 바다 깊이 빠뜨립니다. 이곳에서 고대 수정의 수호자는 빛나는 전염병, 카엘의 끝없는 야망, 그리고 도시의 임박한 파멸 뒤에 숨겨진 완전하고 끔찍한 진실을 밝힙니다. 플레이어는 카엘과의 절정의 대결과 도시와 주민들의 운명을 결정할 심오한 도덕적 선택에 직면하며, 영웅주의와 희생을 재정의하는 해결책으로 이어집니다.',
  victim: '',
  suspects: [
    {
      id: 'CH4_CH01',
      name: '고대 수정의 수호자',
      role: '캐릭터',
      description: '수천 년간 가라앉은 대성당을 지켜온 고대 수정의 수호자. 빛나는 에너지 형태로 나타나며 마음으로 소통한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH4_CH04',
      name: '엘라라, 이타적인 구원자',
      role: '캐릭터',
      description: '위기의 본질을 이해하고 자신의 운명을 받아들인 엘라라. 도시를 구하기 위한 희생을 준비하고 있다.',
      alibi: '',
      motive: ''
    },
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
      id: 'CH4_EV01',
      name: '신화 속 가라앉은 대성당',
      description: '바다 깊은 곳에 있는 전설적인 대성당. 중심에 거대한 수정이 생명 에너지를 발산하고 있다.',
      details: '생물 발광 산호로 장식되어 있으며, 빛나는 전염병의 진정한 원천이자 위기의 핵심이다.',
      location: ''
    },
    {
      id: 'CH4_EV02',
      name: '수정의 끔찍한 경고',
      description: '수호자가 마음에 투영하는 끔찍한 비전. 카엘의 탐욕으로 고갈된 수정이 산산조각 나면서 도시를 집어삼키는 미래.',
      details: '검은 괴사 에너지의 파도가 바다에서 분출하여 모든 생명을 먼지로 만드는 종말론적 결과를 경고한다.',
      location: ''
    },
    {
      id: 'CH4_EV04',
      name: '생명 복원 의식',
      description: '수정의 에너지를 복원하고 도시를 구하는 데 필요한 고대 의식. 상당한 생명력을 바쳐야 하는 복잡한 과정이다.',
      details: '엘라라가 도서관에서 수행하려 했던 바로 그 의식으로, 재앙을 막기 위한 고귀한 자기 희생 행위다.',
      location: ''
    },
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
      id: 'CH4_FINAL',
      name: '가라앉은 진실의 궁극적 계시',
      description: '모든 단서와 증거가 결합되어 가라앉은 진실 뒤에 숨겨진 궁극적 비밀을 밝혀내는 결정적 증거.',
      details: '빛나는 전염병과 도시의 위기가 단순한 연금술 실험이 아니라 우주적 균형을 시험하는 고대 예언의 성취였음이 완전히 드러납니다.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'CH4_LC01',
      name: '생명의 제단',
      description: '가라앉은 대성당의 중앙 방으로, 거대한 빛나는 수정이 지배한다. 위기의 핵심으로 생명과 죽음이 섬세한 균형을 이루고 있다.',
      details: '해양 생물과 천체 패턴의 조각들이 제단을 장식하고 있으며, 공기는 오존과 고대 에너지의 윙윙거림으로 가득하다.'
    },
    {
      id: 'CH4_LC02',
      name: '카엘의 최종 의식실',
      description: '수로 깊숙한 곳의 급하게 준비된 임시 의식실. 카엘이 궁극적인 의식을 수행하려는 어두운 마법과 절박한 야망의 장소다.',
      details: '축축한 벽에 신비한 기호가 휘갈겨져 있고, 중앙에는 빛나는 점성 액체로 가득 찬 부글거리는 가마솥이 놓여 있다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH4_1',
      cards: ['CH4_CH01', 'CH4_LC01'],
      result: '생명의 제단에서 고대 수정의 수호자가 수정이 고갈되면 도시의 미래에 대한 끔찍한 비전을 보여줍니다.',
      unlock: 'CH4_EV02'
    },
    {
      id: 'rule_CH4_2',
      cards: ['CH4_EV02', 'CH4_CH01'],
      result: '수정의 끔찍한 경고를 본 후 수호자가 도시를 구할 유일한 방법인 생명 복원 의식을 설명합니다.',
      unlock: 'CH4_EV04'
    },
    {
      id: 'rule_CH4_3',
      cards: ['CH4_EV04', 'CH4_CH04'],
      result: '생명 복원 의식을 알게 된 엘라라가 자신의 희생을 통해 도시를 구하려 합니다.',
      unlock: 'CH4_LC02'
    },
    {
      id: 'rule_CH4_4',
      cards: ['CH4_LC02', 'CH4_CH05'],
      result: '카엘의 최종 의식실에서 괴물로 변한 카엘과의 절정의 대결이 시작됩니다.',
      unlock: 'CH4_EV05'
    },
    {
      id: 'rule_CH4_5',
      cards: ['CH4_EV05', 'CH4_CH04'],
      result: '카엘과의 대결에서 엘라라의 희생이 카엘의 최종적인 몰락을 가져옵니다.',
      unlock: 'CH4_EV08'
    },
    {
      id: 'rule_CH4_6',
      cards: ['CH4_EV08', 'CH4_EV01'],
      result: '카엘의 몰락과 가라앉은 대성당의 힘이 결합되어 가라앉은 진실의 궁극적 계시를 완전히 밝혀냅니다.',
      unlock: 'CH4_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH4_FINAL',
  initialCards: [
    'CH4_EV01',
    'CH4_LC01',
    'CH4_CH01'
  ]
};