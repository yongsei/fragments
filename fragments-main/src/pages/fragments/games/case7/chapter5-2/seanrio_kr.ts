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

export const case7ch5_2: GameScenario = {
  id: 'c7_chapter_5_2',
  title: '사건의 종결',
  story: '아서가 체포된 후, 가족들은 충격과 허탈함에 빠진다. 그들은 자신들의 탐욕이 불러온 비극적인 결과를 직면하게 된다. 엘레노어는 탐정에게 진심으로 감사하며, 아버지의 마지막 뜻에 따라 재산을 정리하겠다고 말한다. 모든 것이 밝혀진 다음 날 아침, 블랙우드 저택에는 오랜만에 햇살이 비치고, 탐정은 자신의 임무를 완수하고 저택을 떠난다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'E12',
      name: '아서의 절망',
      role: '인물',
      description: '경찰에 연행되어 가는 아서의 절망적인 얼굴. 모든 것이 밝혀지고 그의 계획이 수포로 돌아간 순간, 그는 깊은 절망에 빠진다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E13',
      name: '가족들의 충격',
      role: '인물',
      description: '아서가 범인이라는 사실과 영주의 상속권 박탈 계획에 대한 진실이 밝혀지자, 가족들은 충격과 허탈함에 빠진다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E15',
      name: '엘레노어의 감사',
      role: '인물',
      description: '엘레노어는 탐정에게 진심으로 감사하며, 아버지의 마지막 뜻에 따라 재산을 정리하겠다고 말한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'E16',
      name: '새로운 전설',
      description: '저택을 떠나는 탐정의 마차 뒤로, 블랙우드 저택은 이제 긴 저주에서 깨어나 평온을 되찾은 듯 고요하게 서 있다.',
      details: '하지만 그 벽 속에 숨겨져 있던 인간의 탐욕과 비극은, 또 다른 전설이 되어 오랫동안 사람들의 입에 오르내릴 것이다.',
      location: ''
    },
    {
      id: 'E18',
      name: '인간의 악의',
      description: '블랙우드의 저주라 불리던 현상들이 사실은 대대로 서로를 조종하고 비밀을 지키기 위해 사용되었던 인간의 악의적인 장치였음이 드러난다.',
      details: '이는 사건의 근본적인 원인을 보여준다.',
      location: ''
    },
    {
      id: 'E19',
      name: '사건의 종결',
      description: '범인의 체포와 진실의 공개로 블랙우드 저택의 미스터리는 마침내 종결된다.',
      details: '탐정은 자신의 임무를 완수하고 저택을 떠난다.',
      location: ''
    },
    {
      id: 'E20',
      name: '진실의 승리',
      description: '탐정의 끈질긴 추리와 날카로운 통찰력으로 인해 숨겨져 있던 진실이 밝혀지고, 범인이 처벌받는 과정.',
      details: '이는 정의가 승리했음을 보여주는 결말이다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'E14',
      name: '블랙우드 저택의 아침',
      description: '모든 것이 밝혀진 다음 날 아침, 블랙우드 저택에는 오랜만에 햇살이 비친다.',
      details: '사건의 그림자가 걷히고 평온을 되찾은 듯한 저택의 모습은 사건의 종결을 알린다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_5_2_1',
      cards: ['E12', 'E13'],
      result: '아서의 절망과 가족들의 충격을 통해 엘레노어의 감사를 받게 됩니다.',
      unlock: 'E15'
    },
    {
      id: 'rule_5_2_2',
      cards: ['E13', 'E14'],
      result: '가족들의 충격과 블랙우드 저택의 아침을 통해 사건의 종결을 알립니다.',
      unlock: 'E19'
    },
    {
      id: 'rule_5_2_3',
      cards: ['E15', 'E14'],
      result: '엘레노어의 감사와 블랙우드 저택의 아침을 통해 새로운 전설이 시작됨을 알게 됩니다.',
      unlock: 'E16'
    },
    {
      id: 'rule_5_2_4',
      cards: ['E12', 'E16'],
      result: '아서의 절망과 새로운 전설을 통해 인간의 악의가 드러납니다.',
      unlock: 'E18'
    },
    {
      id: 'rule_5_2_5',
      cards: ['E18', 'E19'],
      result: '인간의 악의와 사건의 종결을 통해 진실의 승리를 확인합니다.',
      unlock: 'E20'
    },
    {
      id: 'rule_5_2_6',
      cards: ['E16', 'E19'],
      result: '새로운 전설과 사건의 종결을 통해 진실의 승리를 확인합니다.',
      unlock: 'E20'
    },
    {
      id: 'rule_5_2_7',
      cards: ['E15', 'E18'],
      result: '엘레노어의 감사와 인간의 악의를 통해 진실의 승리에 도달합니다.',
      unlock: 'E20'
    },
    {
      id: 'rule_5_2_8',
      cards: ['E14', 'E13'],
      result: '블랙우드 저택의 아침과 가족들의 충격을 통해 진실의 승리를 확인합니다.',
      unlock: 'E20'
    }
  ],

  fragments: [],
  winCondition: 'E20',
  initialCards: [
    'E12', // 아서의 절망
    'E13', // 가족들의 충격
    'E14'  // 블랙우드 저택의 아침
  ]
};

export default case7ch5_2;