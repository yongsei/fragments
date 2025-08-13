
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



export const case7ch5: GameScenario = {
  id: 'c7_chapter_5',
  title: '가면을 벗다',
  story: '탐정이 진실에 다가섰음을 직감한 범인은 최후의 발악을 시작한다. 탐정을 직접 공격하거나, 일기장을 없애기 위해 과감한 행동에 나선다. 탐정은 일기장의 내용을 역이용하여 범인에게 덫을 놓고, 마지막 \'유령 소동\'이 벌어지는 현장에서 범인의 정체를 밝혀낸다. 모든 것이 드러난 범인은 자신의 동기와 살인 계획, 그리고 저택의 전설을 어떻게 이용했는지 자백하며 무너져 내린다.',
  victim: 'A14', // 앨리스터 블랙우드 영주
  
  suspects: [
    {
      id: 'E06',
      name: '범인의 정체',
      role: '인물',
      description: '모든 증거가 한 사람을 가리키는 순간, 탐정이 설치해 둔 덫이 작동한다. 중앙 홀의 거대한 태피스트리 뒤에 숨겨진 비밀문이 열리며, 유령 분장을 한 범인이 붙잡힌 채 모습을 드러낸다. 범인은 바로 아서 블랙우드였다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E11',
      name: '탐정의 추리',
      role: '인물',
      description: '탐정은 첫날 발견한 단서부터, 각자의 거짓 증언, 그리고 비밀 통로의 존재까지, 모든 것을 차례로 설명하며 범인을 압박한다. 그의 날카로운 추리력과 논리적인 설명은 가족들을 경악하게 만든다.',
      alibi: '',
      motive: ''
    },
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
      description: '아서가 범인이라는 사실과 영주의 상속권 박탈 계획에 대한 진실이 밝혀지자, 가족들은 충격과 허탈함에 빠진다. 그들은 자신들의 탐욕이 불러온 비극적인 결과를 직면하게 된다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E15',
      name: '엘레노어의 감사',
      role: '인물',
      description: '엘레노어는 탐정에게 진심으로 감사하며, 아버지의 마지막 뜻에 따라 재산을 정리하겠다고 말한다. 그녀는 진실을 밝히는 데 기여한 탐정에게 깊은 신뢰를 보인다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'E01',
      name: '최후의 발악',
      description: '탐정이 일기장을 손에 넣었다는 사실을 직감한 범인은 증거를 인멸하고 탐정을 제거하기 위해 마지막 행동에 나선다. 저택 전체가 울리는 듯한 괴성, 복도를 배회하는 선명한 유령의 형체 등 격렬한 \'유령 소동\'이 벌어진다.',
      details: '',
      location: ''
    },
    {
      id: 'E02',
      name: '범인의 덫',
      description: '범인은 탐정을 영주의 비밀 서재에서 밖으로 유인하려 하지만, 탐정은 이미 범인의 계획을 꿰뚫어 보고 있다. 탐정은 범인이 비밀 통로를 통해 움직일 것을 예상하고, 통로의 주요 길목에 덫을 놓는다.',
      details: '',
      location: ''
    },
    {
      id: 'E04',
      name: '유령의 정체',
      description: '탐정은 \'이 저택의 유령, \'흐느끼는 여인\'은 슬픈 전설이 아니라, 탐욕스러운 살인자의 알리바이였습니다.\'라고 선언하며, 유령 소동이 범인의 계획된 연극이었음을 밝힌다.',
      details: '',
      location: ''
    },
    {
      id: 'E05',
      name: '상속권 박탈 계획 공개',
      description: '탐정은 영주의 일기장에 적힌 충격적인 내용을 공개한다. \'영주께서는 여러분 모두의 상속권을 박탈할 계획이었습니다. 이 사실을 미리 알게 된 사람이 바로, 범인입니다.\'라고 말하며 살해 동기를 명확히 한다.',
      details: '',
      location: ''
    },
    {
      id: 'E07',
      name: '아서의 동기',
      description: '사채업자에게 쫓기던 아서는 우연히 아버지의 비밀 서재를 발견하고, 상속권 박탈 계획을 알게 되었다. 그는 아버지가 계획을 실행하기 전, 사건 당일 밤 아버지를 찾아가 말다툼을 벌였다.',
      details: '',
      location: ''
    },
    {
      id: 'E08',
      name: '살인 과정',
      description: '실랑이 끝에 아서는 아버지를 발코니에서 밀어 살해했고, 자신은 비밀 통로를 통해 현장을 빠져나왔다. \'사라진 발자국\'의 비밀이 풀리는 순간이다. 난간의 긁힌 자국은 그의 반지가 스치며 생긴 흔적이었다.',
      details: '',
      location: ''
    },
    {
      id: 'E09',
      name: '유령 소동의 목적',
      description: '아서는 유령 소동을 일으켜 수사를 방해하고, 혹시 아버지가 남겼을지 모를 증거(일기장)를 찾으려 했던 것이다. 이는 그의 치밀한 계획과 절박함을 보여준다.',
      details: '',
      location: ''
    },
    {
      id: 'E16',
      name: '새로운 전설',
      description: '저택을 떠나는 탐정의 마차 뒤로, 블랙우드 저택은 이제 긴 저주에서 깨어나 평온을 되찾은 듯 고요하게 서 있다. 하지만 그 벽 속에 숨겨져 있던 인간의 탐욕과 비극은, 또 다른 전설이 되어 오랫동안 사람들의 입에 오르내릴 것이다.',
      details: '',
      location: ''
    },
    {
      id: 'E17',
      name: '범인의 자백',
      description: '모든 것이 드러난 범인은 자신의 동기와 살인 계획, 그리고 저택의 전설을 어떻게 이용했는지 자백하며 무너져 내린다. 이는 사건의 모든 의문이 풀리는 순간이다.',
      details: '',
      location: ''
    },
    {
      id: 'E18',
      name: '인간의 악의',
      description: '\'블랙우드의 저주\'라 불리던 현상들이 사실은 대대로 서로를 조종하고 비밀을 지키기 위해 사용되었던 인간의 악의적인 장치였음이 드러난다. 이는 사건의 근본적인 원인을 보여준다.',
      details: '',
      location: ''
    },
    {
      id: 'E19',
      name: '사건의 종결',
      description: '범인의 체포와 진실의 공개로 블랙우드 저택의 미스터리는 마침내 종결된다. 탐정은 자신의 임무를 완수하고 저택을 떠난다.',
      details: '',
      location: ''
    },
    {
      id: 'E20',
      name: '진실의 승리',
      description: '탐정의 끈질긴 추리와 날카로운 통찰력으로 인해 숨겨져 있던 진실이 밝혀지고, 범인이 처벌받는 과정. 이는 정의가 승리했음을 보여주는 결말이다.',
      details: '',
      location: ''
    }
  ],

  locations: [
    {
      id: 'E03',
      name: '마지막 대면',
      description: '탐정은 공포에 떠는 가족들 앞에서 추리를 시작한다. 중앙 홀에서 모든 증거를 종합하여 \'흐느끼는 여인\'의 정체와 사건의 전말을 밝히는 최후의 대면이 이루어진다.',
      details: ''
    },
    {
      id: 'E10',
      name: '중앙 홀의 태피스트리',
      description: '중앙 홀의 거대한 태피스트리 뒤에 숨겨진 비밀문. 이곳은 범인이 유령 분장을 하고 숨어있던 장소이자, 그의 정체가 밝혀지는 결정적인 순간의 배경이 된다.',
      details: ''
    },
    {
      id: 'E14',
      name: '블랙우드 저택의 아침',
      description: '모든 것이 밝혀진 다음 날 아침, 블랙우드 저택에는 오랜만에 햇살이 비친다. 사건의 그림자가 걷히고 평온을 되찾은 듯한 저택의 모습은 사건의 종결을 알린다.',
      details: ''
    }
  ],

  connectionRules: [
    {
      id: 'rule_E05',
      cards: ['E04', 'E11'],
      result: '유령의 정체와 탐정의 추리를 통해 상속권 박탈 계획이 공개됩니다.',
      unlock: 'E05'
    },
    {
      id: 'rule_E06',
      cards: ['E05', 'E02'],
      result: '상속권 박탈 계획 공개와 범인의 덫을 통해 범인의 정체가 밝혀집니다.',
      unlock: 'E06'
    },
    {
      id: 'rule_E07',
      cards: ['E05', 'E06'],
      result: '상속권 박탈 계획 공개와 범인의 정체를 통해 아서의 동기를 알게 됩니다.',
      unlock: 'E07'
    },
    {
      id: 'rule_E08',
      cards: ['E07', 'E01'],
      result: '아서의 동기와 최후의 발악을 통해 살인 과정을 재구성합니다.',
      unlock: 'E08'
    },
    {
      id: 'rule_E09',
      cards: ['E07', 'E02'],
      result: '아서의 동기와 범인의 덫을 통해 유령 소동의 목적을 파악합니다.',
      unlock: 'E09'
    },
    {
      id: 'rule_E10',
      cards: ['E03', 'E06'],
      result: '마지막 대면과 범인의 정체를 통해 중앙 홀의 태피스트리 뒤에 숨겨진 비밀을 알게 됩니다.',
      unlock: 'E10'
    },
    {
      id: 'rule_E11',
      cards: ['E03', 'E04'],
      result: '마지막 대면과 유령의 정체를 통해 탐정의 추리가 시작됩니다.',
      unlock: 'E11'
    },
    {
      id: 'rule_E12',
      cards: ['E06', 'E07'],
      result: '범인의 정체와 아서의 동기를 통해 아서의 절망을 목격합니다.',
      unlock: 'E12'
    },
    {
      id: 'rule_E13',
      cards: ['E05', 'E12'],
      result: '상속권 박탈 계획 공개와 아서의 절망을 통해 가족들의 충격을 확인합니다.',
      unlock: 'E13'
    },
    {
      id: 'rule_E14',
      cards: ['E03', 'E10'],
      result: '마지막 대면과 중앙 홀의 태피스트리를 통해 블랙우드 저택의 아침을 맞이합니다.',
      unlock: 'E14'
    },
    {
      id: 'rule_E15',
      cards: ['E06', 'E13'],
      result: '범인의 정체와 가족들의 충격을 통해 엘레노어의 감사를 받습니다.',
      unlock: 'E15'
    },
    {
      id: 'rule_E16',
      cards: ['E04', 'E09'],
      result: '유령의 정체와 유령 소동의 목적을 통해 새로운 전설이 시작됨을 알게 됩니다.',
      unlock: 'E16'
    },
    {
      id: 'rule_E17',
      cards: ['E07', 'E08'],
      result: '아서의 동기와 살인 과정을 통해 범인의 자백을 듣게 됩니다.',
      unlock: 'E17'
    },
    {
      id: 'rule_E18',
      cards: ['E04', 'E17'],
      result: '유령의 정체와 범인의 자백을 통해 인간의 악의가 드러납니다.',
      unlock: 'E18'
    },
    {
      id: 'rule_E19',
      cards: ['E14', 'E15'],
      result: '블랙우드 저택의 아침과 엘레노어의 감사를 통해 사건의 종결을 알립니다.',
      unlock: 'E19'
    },
    {
      id: 'rule_E20',
      cards: ['E17', 'E18'],
      result: '범인의 자백과 인간의 악의를 통해 진실의 승리를 확인합니다.',
      unlock: 'E20'
    }
  ],

  fragments: [], 
  winCondition: "E20", // 진실의 승리
  initialCards: [ 
    'E01', // 최후의 발악
    'E02', // 범인의 덫
    'E03', // 마지막 대면
    'E04'  // 유령의 정체
  ]
};

export default case7ch5;
