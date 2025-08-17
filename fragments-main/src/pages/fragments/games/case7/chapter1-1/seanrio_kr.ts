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

export const case7ch1_1: GameScenario = {
  id: 'c7_chapter_1_1',
  title: '저택의 첫 만남',
  story: '안개비가 내리는 늦가을 밤, 탐정은 엘레노어 블랙우드의 편지를 받고 블랙우드 저택에 도착한다. 음산한 저택에서 의뢰인을 만나고, 유언장 낭독을 통해 가족들의 뿌리 깊은 갈등과 유산 문제를 목격한다. 아서와 베아트리스의 날카로운 언쟁을 보며, 탐정은 이 가문에 무언가 어두운 비밀이 숨겨져 있음을 직감한다.',
  victim: 'A14',
  
  suspects: [
    {
      id: 'A01',
      name: '탐정의 도착',
      role: '탐정',
      description: '안개비가 내리는 늦가을 밤, 당신은 엘레노어 블랙우드의 편지를 받고 블랙우드 저택에 도착한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A02',
      name: '엘레노어 블랙우드',
      role: '의뢰인',
      description: '앨리스터 영주의 딸이자 당신에게 사건 조사를 의뢰한 인물. 아버지의 죽음이 단순한 사고가 아님을 직감하고 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A11',
      name: '아서 블랙우드',
      role: '용의자',
      description: '앨리스터 영주의 아들이자 유일한 상속자. 막대한 도박 빚을 지고 있어 아버지의 유산을 절실히 필요로 한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A12',
      name: '레이디 베아트리스 블랙우드',
      role: '용의자',
      description: '앨리스터 영주의 아내. 차갑고 계산적인 성격으로, 가문의 명예와 자신의 사회적 지위를 중요하게 생각한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A14',
      name: '앨리스터 블랙우드 영주',
      role: '피해자',
      description: '블랙우드 가문의 가주이자 사망자. 최근 가족들의 위선과 탐욕에 크게 실망하여 환멸을 느끼고 있었다.',
      alibi: '',
      motive: ''
    }
  ],

  evidence: [
    {
      id: 'A04',
      name: '유언장 낭독',
      description: '앨리스터 영주의 유언장 낭독이 응접실에서 진행된다. 아서가 조건부 상속자가 되고, 가족들의 갈등이 노골적으로 드러난다.',
      details: '베아트리스와 아서 사이에 날카로운 언쟁이 오가며, 다른 가족들은 자신의 몫이 거의 없다는 사실에 실망감을 감추지 못한다.',
      location: ''
    },
    {
      id: 'A15',
      name: '유언장의 조건',
      description: '아서가 영주의 유산을 상속받기 위해 품행을 증명해야 한다는 까다로운 조건.',
      details: '이 조건은 아서의 방탕한 생활과 연결되어 있으며, 그가 유산을 절실히 필요로 하는 이유를 제공한다.',
      location: ''
    },
    {
      id: 'A16',
      name: '가족들의 갈등',
      description: '유언장 낭독 후 아서와 베아트리스의 언쟁에서 드러나는 블랙우드 가문의 뿌리 깊은 갈등.',
      details: '이는 영주의 죽음과 관련된 동기를 제공할 수 있으며, 가족 내부의 어두운 면을 보여준다.',
      location: ''
    },
    {
      id: 'A16_FINAL',
      name: '첫 만남의 의심',
      description: '탐정이 저택에서의 첫 만남을 통해 가족들의 갈등을 목격하며 품게 되는 의심.',
      details: '유언장 낭독과 가족들의 반응을 보며, 영주의 죽음이 단순한 사고가 아닐 수도 있다는 첫 번째 의심을 갖게 된다.',
      location: ''
    }
  ],

  locations: [
    {
      id: 'A03',
      name: '블랙우드 저택',
      description: '19세기 말 잉글랜드 북부의 황무지에 위치한 거대한 고딕 양식의 저택. 음산하고 스산한 분위기를 풍긴다.',
      details: '수백 년의 세월을 간직한 낡고 퇴락한 분위기로, 잦은 비와 안개로 인해 항상 축축하고 스산한 기운이 감돈다.'
    },
    {
      id: 'A10',
      name: '중앙 홀',
      description: '저택에 들어서면 가장 먼저 마주하는 공간. 거대한 계단이 2층으로 이어져 있다.',
      details: '높은 천장에는 거미줄이 내려앉은 샹들리에가 달려있으며, 가족들이 모여 유언장을 낭독하는 장소이다.'
    },
    {
      id: 'A18',
      name: '마차의 도착',
      description: '탐정이 블랙우드 저택에 도착할 때 이용한 마차.',
      details: '삐걱거리는 소리와 함께 저택 앞에 멈춰서며, 사건의 시작을 알리는 상징적인 장소이다.'
    }
  ],

  connectionRules: [
    {
      id: 'rule_1_1_1',
      cards: ['A01', 'A03'],
      result: '탐정이 블랙우드 저택에 도착하여 중앙 홀을 마주합니다.',
      unlock: 'A10'
    },
    {
      id: 'rule_1_1_2',
      cards: ['A01', 'A18'],
      result: '탐정의 도착과 마차를 통해 엘레노어 블랙우드를 만나게 됩니다.',
      unlock: 'A02'
    },
    {
      id: 'rule_1_1_3',
      cards: ['A02', 'A10'],
      result: '엘레노어와 중앙 홀에서 유언장 낭독이 시작됩니다.',
      unlock: 'A04'
    },
    {
      id: 'rule_1_1_4',
      cards: ['A04', 'A10'],
      result: '유언장 낭독이 진행된 중앙 홀에서 아서 블랙우드를 만나게 됩니다.',
      unlock: 'A11'
    },
    {
      id: 'rule_1_1_5',
      cards: ['A04', 'A02'],
      result: '유언장 낭독을 통해 레이디 베아트리스 블랙우드를 만나게 됩니다.',
      unlock: 'A12'
    },
    {
      id: 'rule_1_1_6',
      cards: ['A11', 'A04'],
      result: '아서와 유언장 낭독을 통해 유언장의 조건을 알게 됩니다.',
      unlock: 'A15'
    },
    {
      id: 'rule_1_1_7',
      cards: ['A11', 'A12'],
      result: '아서와 베아트리스의 갈등을 통해 가족들의 뿌리 깊은 갈등을 목격합니다.',
      unlock: 'A16'
    },
    {
      id: 'rule_1_1_8',
      cards: ['A16', 'A03'],
      result: '가족들의 갈등과 저택의 분위기를 통해 첫 만남에서의 의심을 품게 됩니다.',
      unlock: 'A16_FINAL'
    }
  ],

  fragments: [],
  winCondition: 'A16_FINAL',
  initialCards: [
    'A01', // 탐정의 도착
    'A03', // 블랙우드 저택
    'A18'  // 마차의 도착
  ]
};

export default case7ch1_1;