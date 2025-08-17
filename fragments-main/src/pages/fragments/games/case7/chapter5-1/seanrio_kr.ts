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

export const case7ch5_1: GameScenario = {
  id: 'c7_chapter_5_1',
  title: '최후의 대결',
  story: '탐정이 진실에 다가섰음을 직감한 범인은 최후의 발악을 시작한다. 격렬한 유령 소동을 일으켜 탐정을 제거하려 하지만, 탐정은 이미 범인의 계획을 꿰뚫어 보고 덫을 놓았다. 중앙 홀에서 모든 가족들 앞에서 벌어지는 마지막 대면에서, 탐정은 유령의 정체와 상속권 박탈 계획을 공개하며 범인의 정체를 밝혀낸다. 아서 블랙우드의 동기와 살인 과정이 모두 드러나는 순간이다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'E06',
      name: '범인의 정체',
      role: '인물',
      description: '모든 증거가 한 사람을 가리키는 순간, 탐정이 설치해 둔 덫이 작동한다. 중앙 홀의 거대한 태피스트리 뒤에 숨겨진 비밀문이 열리며, 유령 분장을 한 범인이 붙잡힌 채 모습을 드러낸다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E11',
      name: '탐정의 추리',
      role: '인물',
      description: '탐정은 첫날 발견한 단서부터, 각자의 거짓 증언, 그리고 비밀 통로의 존재까지, 모든 것을 차례로 설명하며 범인을 압박한다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'E01',
      name: '최후의 발악',
      description: '탐정이 일기장을 손에 넣었다는 사실을 직감한 범인은 증거를 인멸하고 탐정을 제거하기 위해 마지막 행동에 나선다.',
      details: '저택 전체가 울리는 듯한 괴성, 복도를 배회하는 선명한 유령의 형체 등 격렬한 유령 소동이 벌어진다.',
      location: ''
    },
    {
      id: 'E02',
      name: '범인의 덫',
      description: '범인은 탐정을 영주의 비밀 서재에서 밖으로 유인하려 하지만, 탐정은 이미 범인의 계획을 꿰뚫어 보고 있다.',
      details: '탐정은 범인이 비밀 통로를 통해 움직일 것을 예상하고, 통로의 주요 길목에 덫을 놓는다.',
      location: ''
    },
    {
      id: 'E04',
      name: '유령의 정체',
      description: '탐정은 이 저택의 유령, 흐느끼는 여인은 슬픈 전설이 아니라, 탐욕스러운 살인자의 알리바이였다고 선언한다.',
      details: '유령 소동이 범인의 계획된 연극이었음을 밝힌다.',
      location: ''
    },
    {
      id: 'E05',
      name: '상속권 박탈 계획 공개',
      description: '탐정은 영주의 일기장에 적힌 충격적인 내용을 공개한다.',
      details: '영주께서는 여러분 모두의 상속권을 박탈할 계획이었으며, 이 사실을 미리 알게 된 사람이 바로 범인이라고 밝힌다.',
      location: ''
    },
    {
      id: 'E07',
      name: '아서의 동기',
      description: '사채업자에게 쫓기던 아서는 우연히 아버지의 비밀 서재를 발견하고, 상속권 박탈 계획을 알게 되었다.',
      details: '그는 아버지가 계획을 실행하기 전, 사건 당일 밤 아버지를 찾아가 말다툼을 벌였다.',
      location: ''
    },
    {
      id: 'E08',
      name: '살인 과정',
      description: '실랑이 끝에 아서는 아버지를 발코니에서 밀어 살해했고, 자신은 비밀 통로를 통해 현장을 빠져나왔다.',
      details: '사라진 발자국의 비밀이 풀리는 순간이다. 난간의 긁힌 자국은 그의 반지가 스치며 생긴 흔적이었다.',
      location: ''
    },
    {
      id: 'E09',
      name: '유령 소동의 목적',
      description: '아서는 유령 소동을 일으켜 수사를 방해하고, 혹시 아버지가 남겼을지 모를 증거(일기장)를 찾으려 했던 것이다.',
      details: '이는 그의 치밀한 계획과 절박함을 보여준다.',
      location: ''
    },
    {
      id: 'E17',
      name: '범인의 자백',
      description: '모든 것이 드러난 범인은 자신의 동기와 살인 계획, 그리고 저택의 전설을 어떻게 이용했는지 자백하며 무너져 내린다.',
      details: '이는 사건의 모든 의문이 풀리는 순간이다.',
      location: ''
    },
    {
      id: 'E17_FINAL',
      name: '아서의 체포',
      description: '모든 진실이 밝혀진 후 아서 블랙우드가 체포되는 순간.',
      details: '범인의 정체가 완전히 드러나고 그의 범행이 모두 밝혀져 정의가 실현되는 결정적인 순간이다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'E03',
      name: '마지막 대면',
      description: '탐정은 공포에 떠는 가족들 앞에서 추리를 시작한다. 중앙 홀에서 모든 증거를 종합하여 흐느끼는 여인의 정체와 사건의 전말을 밝히는 최후의 대면이 이루어진다.',
      details: '모든 가족들이 모인 가운데 진실이 밝혀지는 극적인 장소이다.'
    },
    {
      id: 'E10',
      name: '중앙 홀의 태피스트리',
      description: '중앙 홀의 거대한 태피스트리 뒤에 숨겨진 비밀문. 이곳은 범인이 유령 분장을 하고 숨어있던 장소이자, 그의 정체가 밝혀지는 결정적인 순간의 배경이 된다.',
      details: '범인의 마지막 은신처이자 그가 붙잡히는 장소이다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_5_1_1',
      cards: ['E01', 'E02'],
      result: '최후의 발악과 범인의 덫을 통해 마지막 대면이 시작됩니다.',
      unlock: 'E03'
    },
    {
      id: 'rule_5_1_2',
      cards: ['E03', 'E04'],
      result: '마지막 대면과 유령의 정체를 통해 탐정의 추리가 시작됩니다.',
      unlock: 'E11'
    },
    {
      id: 'rule_5_1_3',
      cards: ['E04', 'E11'],
      result: '유령의 정체와 탐정의 추리를 통해 상속권 박탈 계획이 공개됩니다.',
      unlock: 'E05'
    },
    {
      id: 'rule_5_1_4',
      cards: ['E05', 'E02'],
      result: '상속권 박탈 계획 공개와 범인의 덫을 통해 범인의 정체가 밝혀집니다.',
      unlock: 'E06'
    },
    {
      id: 'rule_5_1_5',
      cards: ['E06', 'E10'],
      result: '범인의 정체와 중앙 홀의 태피스트리를 통해 아서의 동기를 알게 됩니다.',
      unlock: 'E07'
    },
    {
      id: 'rule_5_1_6',
      cards: ['E07', 'E01'],
      result: '아서의 동기와 최후의 발악을 통해 살인 과정을 재구성합니다.',
      unlock: 'E08'
    },
    {
      id: 'rule_5_1_7',
      cards: ['E07', 'E04'],
      result: '아서의 동기와 유령의 정체를 통해 유령 소동의 목적을 파악합니다.',
      unlock: 'E09'
    },
    {
      id: 'rule_5_1_8',
      cards: ['E08', 'E09'],
      result: '살인 과정과 유령 소동의 목적을 통해 범인의 자백을 듣게 되고, 아서가 체포됩니다.',
      unlock: 'E17_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'E17_FINAL',
  initialCards: [
    'E01', // 최후의 발악
    'E02', // 범인의 덫
    'E04'  // 유령의 정체
  ]
};

export default case7ch5_1;