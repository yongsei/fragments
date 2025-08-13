
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



export const case7ch3En: GameScenario = {
  id: 'c7_chapter_3',
  title: '[TRANSLATE] The Weeping Lady',
  story: '[TRANSLATE] 탐문 수사가 교착에 빠질 무렵, 저택에서 본격적인 초자연적 현상이 발생한다. 복도에서 들려오는 흐느낌 소리, 저절로 닫히는 문, 창밖에서 어른거리는 하얀 형체 등. 탐정은 공포에 떠는 가족들을 보며 이것이 실제 유령의 소행인지, 아니면 누군가의 연극인지 판단해야 한다. 결정적으로, \'유령\'처럼 보이는 형체가 벽 속으로 사라지는 것을 목격하게 되면서, 저택에 숨겨진 공간이 있음을 확신하게 된다.',
  victim: 'A14', // [TRANSLATE] Alistair Blackwood, Lord
  
  suspects: [
    {
      id: 'C02',
      name: '[TRANSLATE] 이사벨라 블랙우드의 비극',
      role: '[TRANSLATE] 인물',
      description: '[TRANSLATE] 100여 년 전 블랙우드 저택에 살았던 여인. 남편에게 배신당하고 재산을 빼앗긴 채 탑에 갇혀 슬프게 죽었다고 전해진다. 그녀의 이야기는 저택의 유령 전설의 기원이자, 가문 내의 배신과 재산 다툼의 역사를 암시한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C04',
      name: '[TRANSLATE] 가족들의 공포',
      role: '[TRANSLATE] 인물',
      description: '[TRANSLATE] 유령 소동에 가족들은 모두 공포에 질려 각자의 방에서 나오지 못한다. 엘레노어는 창백하게 질려있고, 아서는 허세를 부리면서도 다리를 떨고 있다. 베아트리스만이 냉정을 유지하려 애쓰지만, 그녀의 눈에도 두려움이 서려 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C11',
      name: '[TRANSLATE] 탐정의 잠복',
      role: '[TRANSLATE] 인물',
      description: '[TRANSLATE] 유령의 정체를 밝히기 위해 복도에 잠복하는 탐정. 그의 날카로운 관찰력과 끈기 있는 추리력이 빛을 발하는 순간이다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C17',
      name: '[TRANSLATE] 공포에 질린 가족들',
      role: '[TRANSLATE] 인물',
      description: '[TRANSLATE] 유령 소동으로 인해 공포에 질린 가족들의 모습. 이들의 반응은 유령 소동이 실제처럼 느껴지도록 만드는 데 일조하며, 범인의 계획이 성공적으로 진행되고 있음을 보여준다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'C01',
      name: '[TRANSLATE] 전설의 기원',
      description: '[TRANSLATE] 게이블 부인이 언급한 \'흐느끼는 여인\'의 전설을 파헤치기 위해 저택의 낡은 도서관에서 블랙우드 가문의 역사를 기록한 책을 발견한다. 책에는 100여 년 전 이사벨라 블랙우드의 비극적인 이야기가 담겨 있다.',
      details: '',
      location: ''
    },
    {
      id: 'C03',
      name: '[TRANSLATE] 유령의 속삭임',
      description: '[TRANSLATE] 폭풍우가 몰아치는 밤, 저택 복도에서 희미하지만 분명한 여자의 흐느낌 소리가 들려온다. 소리는 복도를 따라 움직이는 듯하며, 창문이 저절로 닫히고 촛불이 꺼지는 등 기이한 현상이 연이어 발생한다.',
      details: '',
      location: ''
    },
    {
      id: 'C05',
      name: '[TRANSLATE] 벽 속으로 사라진 형체',
      description: '[TRANSLATE] 다음 날 밤, 탐정이 잠복한 가운데 \'흐느끼는 여인\'의 형체가 복도 끝, 거대한 벽걸이 융단이 걸린 막다른 곳으로 향하더니 스르르 벽 속으로 사라진다. 이는 유령이 아닌 물리적인 \'길\'이 존재함을 암시한다.',
      details: '',
      location: ''
    },
    {
      id: 'C06',
      name: '[TRANSLATE] 비밀 통로의 존재',
      description: '[TRANSLATE] \'흐느끼는 여인\'이 사라진 벽을 조사하던 중, 특정 돌출부를 누르자 벽의 일부가 밀려나며 어두운 입구가 드러난다. 이는 저택에 숨겨진 비밀 통로가 있음을 확신하게 하는 결정적인 단서이다.',
      details: '',
      location: ''
    },
    {
      id: 'C09',
      name: '[TRANSLATE] 유령의 연극',
      description: '[TRANSLATE] \'흐느끼는 여인\'의 소동이 실제 유령의 소행이 아닌, 누군가의 계획된 연극일 가능성을 시사하는 단서들. 벽 속으로 사라진 형체는 이 연극의 핵심적인 장치임을 보여준다.',
      details: '',
      location: ''
    },
    {
      id: 'C12',
      name: '[TRANSLATE] 촛불의 소멸',
      description: '[TRANSLATE] 유령 소동 중 촛불이 일제히 꺼지는 기이한 현상. 이는 유령의 존재를 믿게 하려는 의도적인 연출이거나, 비밀 통로를 이용한 범인의 움직임과 관련이 있을 수 있다.',
      details: '',
      location: ''
    },
    {
      id: 'C14',
      name: '[TRANSLATE] 텅 빈 소리',
      description: '[TRANSLATE] 벽걸이 융단을 걷어내고 벽을 두드리자, 다른 곳과 달리 유독 텅 빈 소리가 나는 지점을 발견한다. 이는 비밀 통로의 입구를 찾는 데 결정적인 단서가 된다.',
      details: '',
      location: ''
    },
    {
      id: 'C15',
      name: '[TRANSLATE] 인간의 악의',
      description: '[TRANSLATE] \'흐느끼는 여인\'의 전설이 사실은 인간의 탐욕과 악의에 의해 조작된 것임을 암시한다. 이는 사건의 초자연적인 면모 뒤에 숨겨진 인간적인 동기를 부각시킨다.',
      details: '',
      location: ''
    },
    {
      id: 'C16',
      name: '[TRANSLATE] 저택의 비밀',
      description: '[TRANSLATE] 비밀 통로의 발견을 통해 블랙우드 저택이 단순히 오래된 건물이 아니라, 수많은 비밀을 품고 있는 공간임을 알게 된다. 이 비밀들은 사건의 진실을 밝히는 데 중요한 역할을 한다.',
      details: '',
      location: ''
    },
    {
      id: 'C18',
      name: '[TRANSLATE] 이사벨라의 유산',
      description: '[TRANSLATE] 이사벨라 블랙우드의 비극이 재산 다툼과 관련이 있다는 점은, 현재 앨리스터 영주의 죽음 역시 유산과 연관되어 있을 가능성을 높인다. 역사는 반복된다는 암시를 준다.',
      details: '',
      location: ''
    },
    {
      id: 'C19',
      name: '[TRANSLATE] 미스터리의 심화',
      description: '[TRANSLATE] 유령 소동과 비밀 통로의 발견은 사건의 미스터리를 더욱 심화시킨다. 탐정은 이제 초자연적인 현상과 물리적인 단서 사이의 연결고리를 찾아야 한다.',
      details: '',
      location: ''
    },
    {
      id: 'C20',
      name: '[TRANSLATE] 진실의 문턱',
      description: '[TRANSLATE] 비밀 통로의 발견은 탐정이 사건의 진실에 한 발짝 더 다가섰음을 의미한다. 이제 이 통로가 어디로 이어져 있으며, 그 안에 어떤 진실이 숨겨져 있는지 밝혀내는 것이 다음 목표가 된다.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'C07',
      name: '[TRANSLATE] 낡은 도서관의 기록',
      description: '[TRANSLATE] \'흐느끼는 여인\'의 전설을 파헤치기 위해 탐정이 찾은 장소. 먼지 쌓인 서가에서 블랙우드 가문의 역사를 기록한 낡은 책을 발견하며, 전설의 기원과 이사벨라 블랙우드의 비극을 알게 된다.',
      details: ''
    },
    {
      id: 'C08',
      name: '[TRANSLATE] 폭풍우 치는 밤',
      description: '[TRANSLATE] 유령 소동이 본격적으로 시작된 밤. 천둥소리와 함께 저택에 폭풍우가 몰아치며, 스산한 분위기를 더욱 고조시킨다. 이는 사건의 긴장감을 높이는 배경이 된다.',
      details: ''
    },
    {
      id: 'C10',
      name: '[TRANSLATE] 숨겨진 공간',
      description: '[TRANSLATE] 비밀 통로의 존재를 통해 저택 내부에 숨겨진 공간이 있음을 알게 된다. 이 공간은 범인이 자신의 알리바이를 조작하고 유령 행세를 하는 데 사용되었을 가능성이 높다.',
      details: ''
    },
    {
      id: 'C13',
      name: '[TRANSLATE] 벽걸이 융단',
      description: '[TRANSLATE] 복도 끝, \'흐느끼는 여인\'이 사라진 곳에 걸려 있던 거대한 벽걸이 융단. 이 융단 뒤에 비밀 통로의 입구가 숨겨져 있었다.',
      details: ''
    }
  ],

  connectionRules: [
    {
      id: 'rule_C05',
      cards: ['C03', 'C04'],
      result: '[TRANSLATE] 유령의 속삭임과 가족들의 공포를 통해 벽 속으로 사라진 형체를 목격합니다.',
      unlock: 'C05'
    },
    {
      id: 'rule_C06',
      cards: ['C05', 'C07'],
      result: '[TRANSLATE] 벽 속으로 사라진 형체와 낡은 도서관의 기록을 통해 비밀 통로의 존재를 확신합니다.',
      unlock: 'C06'
    },
    {
      id: 'rule_C07',
      cards: ['C01', 'C02'],
      result: '[TRANSLATE] 전설의 기원과 이사벨라 블랙우드의 비극을 통해 낡은 도서관의 기록을 발견합니다.',
      unlock: 'C07'
    },
    {
      id: 'rule_C09',
      cards: ['C05', 'C06'],
      result: '[TRANSLATE] 벽 속으로 사라진 형체와 비밀 통로의 존재를 통해 유령 소동이 연극임을 알게 됩니다.',
      unlock: 'C09'
    },
    {
      id: 'rule_C10',
      cards: ['C06', 'C07'],
      result: '[TRANSLATE] 비밀 통로의 존재와 낡은 도서관의 기록을 통해 저택 내부에 숨겨진 공간이 있음을 알게 됩니다.',
      unlock: 'C10'
    },
    {
      id: 'rule_C11',
      cards: ['C03', 'C05'],
      result: '[TRANSLATE] 유령의 속삭임과 벽 속으로 사라진 형체를 통해 탐정의 잠복이 시작됩니다.',
      unlock: 'C11'
    },
    {
      id: 'rule_C12',
      cards: ['C03', 'C09'],
      result: '[TRANSLATE] 유령의 속삭임과 유령의 연극을 통해 촛불이 꺼지는 기이한 현상을 목격합니다.',
      unlock: 'C12'
    },
    {
      id: 'rule_C13',
      cards: ['C06', 'C10'],
      result: '[TRANSLATE] 비밀 통로의 존재와 숨겨진 공간을 통해 벽걸이 융단 뒤에 비밀이 있음을 알게 됩니다.',
      unlock: 'C13'
    },
    {
      id: 'rule_C14',
      cards: ['C06', 'C13'],
      result: '[TRANSLATE] 비밀 통로의 존재와 벽걸이 융단을 통해 텅 빈 소리가 나는 지점을 발견합니다.',
      unlock: 'C14'
    },
    {
      id: 'rule_C15',
      cards: ['C01', 'C09'],
      result: '[TRANSLATE] 전설의 기원과 유령의 연극을 통해 인간의 악의가 사건의 본질임을 암시받습니다.',
      unlock: 'C15'
    },
    {
      id: 'rule_C16',
      cards: ['C06', 'C19'],
      result: 'Through the existence of the secret passage and the deepening mystery, you learn about the secrets of the manor.',
      unlock: 'C16'
    },
    {
      id: 'rule_C17',
      cards: ['C04', 'C11'],
      result: '[TRANSLATE] 가족들의 공포와 탐정의 잠복을 통해 공포에 질린 가족들의 모습을 확인합니다.',
      unlock: 'C17'
    },
    {
      id: 'rule_C18',
      cards: ['C02', 'C15'],
      result: '[TRANSLATE] 이사벨라 블랙우드의 비극과 인간의 악의를 통해 이사벨라의 유산에 대한 진실을 알게 됩니다.',
      unlock: 'C18'
    },
    {
      id: 'rule_C19',
      cards: ['C09', 'C10'],
      result: '[TRANSLATE] 유령 소동과 비밀 통로의 발견은 사건의 미스터리를 더욱 심화시킨다. 탐정은 이제 초자연적인 현상과 물리적인 단서 사이의 연결고리를 찾아야 한다.',
      unlock: 'C19'
    },
    {
      id: 'rule_C20',
      cards: ['C06', 'C16'],
      result: '[TRANSLATE] 비밀 통로의 존재와 저택의 비밀을 통해 진실의 문턱에 도달합니다.',
      unlock: 'C20'
    }
  ],

  fragments: [], 
  winCondition: "C20", // [TRANSLATE] 진실의 문턱
  initialCards: [ 
    'C01', // [TRANSLATE] 전설의 기원
    'C02', // [TRANSLATE] 이사벨라 블랙우드의 비극
    'C03', // [TRANSLATE] 유령의 속삭임
    'C04', // [TRANSLATE] 가족들의 공포
    'C08'  // [TRANSLATE] 폭풍우 치는 밤
  ]
};

export default case7ch3En;
