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



export const case6ch2: GameScenario = {
  id: 'case6_chapter2',
  title: '연금술사의 그림자',
  story: '대도서관의 불안한 단서들을 따라, 수사는 도시의 흐릿한 수로로 이어지고, 그곳에서 신비한 "빛나는 전염병"이 첫 희생자를 냅니다. 추적은 숨겨진 기괴한 실험실에서 활동하는 불명예스러운 연금술사 카엘에게로 향합니다. 플레이어가 카엘의 충격적인 연구 노트, 실패한 실험, 그리고 섬뜩한 재료 목록을 밝혀내면서, 전염병의 진정한 끔찍한 본질과 카엘의 필사적인 불멸 추구가 드러나며, 처음 상상했던 것보다 훨씬 더 어두운 음모가 밝혀집니다.',
  victim: '',
  suspects: [
    {
      id: 'CH2_CH01',
      name: '카엘, 불명예스러운 연금술사',
      role: '캐릭터',
      description: '교활한 미소를 가진 야윈 남자. 연금술사 길드에서 추방된 후 어둠 속에서 불법 실험을 계속하고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH02',
      name: '수로 청소부',
      role: '캐릭터',
      description: '수로를 잘 아는 날씬한 인물. 터널의 숨겨진 통로와 최근 특이한 활동에 대한 정보를 가지고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH2_CH04',
      name: '절박한 귀족',
      role: '캐릭터',
      description: '죽음을 두려워하는 늙은 귀족. 카엘에게 불멸의 비약을 의뢰한 익명의 후원자다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'CH2_EV01',
      name: '빛의 첫 희생자',
      description: '수로에서 발견된 실종자의 시신. 피부가 은빛으로 발광하고 있으며 손에 낯선 해초를 쥐고 있다.',
      details: '원고의 빛과 유사한 현상을 보이며, 빛나는 전염병의 첫 희생자로 보인다.',
      location: ''
    },
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
      description: '카엘의 광적인 필체로 쓰인 연구 노트. \'생명의 비약\'에 대한 강박적인 탐구가 기록되어 있다.',
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
      id: 'CH2_FINAL',
      name: '연금술사의 진정한 목적',
      description: '모든 증거와 단서가 결합되어 드러나는 카엘의 최종 목표.',
      details: '카엘의 연금술 실험이 불멸을 위한 것이 아니라, 심해의 고대 존재들을 지상으로 불러들이는 의식의 일부였음이 완전히 밝혀진다.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'CH2_LC01',
      name: '미로 같은 수로',
      description: '도시 지하의 고대 석조 터널 네트워크. 습기와 곰팡이 냄새가 나며 어둡고 억압적인 분위기다.',
      details: '잊혀진 통로와 이상한 생물들에 대한 소문이 끊이지 않는 범죄 현장이다.'
    },
    {
      id: 'CH2_LC02',
      name: '가라앉은 시장',
      description: '도시 아래 동굴에서 운영되는 숨겨진 불법 시장. 희귀 재료와 비밀이 거래되는 곳이다.',
      details: '수로 통로를 통해서만 접근 가능하며, 카엘의 은밀한 거래가 이루어지는 장소다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH2_1',
      cards: ['CH2_EV01', 'CH2_CH02'],
      result: '첫 희생자를 수로 청소부와 함께 조사하면 수로 깊은 곳의 미로 같은 통로를 발견합니다.',
      unlock: 'CH2_LC01'
    },
    {
      id: 'rule_CH2_2',
      cards: ['CH2_EV01', 'CH2_CH01'],
      result: '첫 희생자의 상태를 카엘과 함께 분석하면 절박한 귀족을 만나게 됩니다.',
      unlock: 'CH2_CH04'
    },
    {
      id: 'rule_CH2_3',
      cards: ['CH2_CH01', 'CH2_CH02'],
      result: '카엘과 수로 청소부가 함께 수로를 탐색하면 카엘의 숨겨진 실험실을 발견합니다.',
      unlock: 'CH2_EV02'
    },
    {
      id: 'rule_CH2_4',
      cards: ['CH2_EV02', 'CH2_CH01'],
      result: '카엘의 실험실에서 그의 광적인 연구 노트를 발견합니다.',
      unlock: 'CH2_EV03'
    },
    {
      id: 'rule_CH2_5',
      cards: ['CH2_EV03', 'CH2_CH04'],
      result: '연구 노트를 절박한 귀족에게 보여주자 그가 카엘에게 보낸 의뢰 편지를 공개합니다.',
      unlock: 'CH2_EV05'
    },
    {
      id: 'rule_CH2_6',
      cards: ['CH2_EV05', 'CH2_LC01'],
      result: '의뢰 편지의 단서를 따라 수로를 수색하면 가라앉은 시장을 발견합니다.',
      unlock: 'CH2_LC02'
    },
    {
      id: 'rule_CH2_7',
      cards: ['CH2_LC02', 'CH2_EV02'],
      result: '가라앉은 시장과 카엘의 실험실을 연결하면 엘라라의 가로챈 고백을 발견합니다.',
      unlock: 'CH2_EV08'
    },
    {
      id: 'rule_CH2_8',
      cards: ['CH2_EV08', 'CH2_EV03'],
      result: '엘라라의 고백과 카엘의 연구 노트가 결합되어 연금술사의 진정한 목적이 완전히 밝혀집니다.',
      unlock: 'CH2_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH2_FINAL',
  initialCards: [
    'CH2_EV01',
    'CH2_CH01',
    'CH2_CH02'
  ]
};