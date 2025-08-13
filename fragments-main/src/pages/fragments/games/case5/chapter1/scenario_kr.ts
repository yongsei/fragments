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


export const case5Ch1: GameScenario = {
  "id": "shadows_of_time_chapter1",
  "title": "챕터 1: 시간의 흔적, 미래의 경고",
  "story": "2042년 서울, 평범한 회사원의 시신 옆에서 발견된 과거의 유물. 시간 여행 살인의 첫 번째 희생자 김민준. 미래에서 온 경고 메시지는 이진우 형사를 다음 목표로 지목한다.",
  "victim": "김민준",
  "suspects": [
    {
      "id": "A01",
      "name": "이진우 형사",
      "role": "주인공",
      "description": "베테랑 형사. 시간 여행 살인이라는 미증유의 사건에 직면한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A04",
      "name": "박준영 형사",
      "role": "조력자",
      "description": "수사팀 막내. 이진우 형사를 보좌하며 사건을 파고든다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A17",
      "name": "앨리스터 핀치 교수",
      "role": "과거의 인물",
      "description": "김민준의 사진에 함께 찍힌 19세기 인물. 시간 역학 이론가.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "A02",
      "name": "김민준의 시신",
      "description": "공원 벤치에서 발견된 평범한 회사원의 시신.",
      "details": "사인: 칼에 의한 자상. 몸에서 20세기 초 칼날 흔적 발견.",
      "location": ""
    },
    {
      "id": "A03",
      "name": "낡은 회중시계",
      "description": "시신 옆에서 발견된 19세기 빅토리아 시대의 유물.",
      "details": "\"1888년 런던\"이라는 글자가 희미하게 새겨져 있다.",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "20세기 초 칼날 흔적",
      "description": "시신에서 발견된, 과거 시대의 칼날에 의한 자상 흔적.",
      "details": "현대의 무기로는 불가능한 흔적. 시간 여행자의 개입을 암시한다.",
      "location": "A02"
    },
    {
      "id": "A06",
      "name": "\"1888년 런던\" 각인",
      "description": "회중시계에 희미하게 새겨진 글자. 과거의 특정 시점을 가리킨다.",
      "details": "범인의 시간 이동 목적지를 암시한다.",
      "location": "A03"
    },
    {
      "id": "A07",
      "name": "김민준의 종이 조각",
      "description": "피해자의 손에 쥐여 있던 \"다음은 2122년 뉴욕\" 메시지.",
      "details": "연쇄 살인의 다음 목표를 예고한다.",
      "location": "A02"
    },
    {
      "id": "A09",
      "name": "미완성된 시간 이동 장치",
      "description": "연구실에서 발견된, 복잡한 회로와 금속 부품으로 이루어진 장치.",
      "details": "김민준이 시간 여행을 연구했음을 보여준다.",
      "location": "A08"
    },
    {
      "id": "A10",
      "name": "시간 왜곡 에너지 감지",
      "description": "미완성 장치 주변에서 감지되는 미세한 시간 왜곡 현상.",
      "details": "장치가 실제로 시간 이동과 관련 있음을 증명한다.",
      "location": "A09"
    },
    {
      "id": "A11",
      "name": "암호화된 태블릿",
      "description": "김민준이 남긴 암호화된 일지가 담긴 태블릿.",
      "details": "김민준의 연구 내용과 추적 대상에 대한 단서가 담겨 있다.",
      "location": "A08"
    },
    {
      "id": "A12",
      "name": "김민준의 일지 (초반부)",
      "description": "태블릿에서 해독된 일지. 시간 여행 이론과 '크로노스' 언급.",
      "details": "김민준이 크로노스를 추적하고 있었음을 보여준다.",
      "location": "A11"
    },
    {
      "id": "A13",
      "name": "'크로노스'의 존재",
      "description": "일지에서 언급된, 시간을 조작하는 정체불명의 존재.",
      "details": "시간 여행자 살인마의 정체.",
      "location": "A12"
    },
    {
      "id": "A14",
      "name": "알 수 없는 데이터 패킷",
      "description": "연구실 컴퓨터에서 감지된, 암호화된 미래에서 온 데이터.",
      "details": "미래에서 현재로 전송된 정보.",
      "location": "A08"
    },
    {
      "id": "A15",
      "name": "미래에서 온 경고 메시지",
      "description": "해독된 데이터 패킷. \"다음 희생자는... 너다.\" 이진우를 지목한다.",
      "details": "범인이 이진우의 존재를 알고 있음을 보여준다.",
      "location": "A14"
    },
    {
      "id": "A16",
      "name": "시간 역설의 경고",
      "description": "일지에 담긴, 과거를 바꾸면 미래가 뒤틀릴 수 있다는 경고.",
      "details": "시간 여행의 위험성을 경고한다.",
      "location": "A12"
    },
    {
      "id": "A18",
      "name": "핀치의 회중시계",
      "description": "사진 속 핀치가 들고 있는, 김민준 시신 옆 회중시계와 동일한 것.",
      "details": "핀치와 김민준, 그리고 크로노스의 연결 고리.",
      "location": "A17"
    }
  ],
  "locations": [
    {
      "id": "A08",
      "name": "김민준의 연구실",
      "description": "피해자의 비밀스러운 작업실. 시간 여행의 단서가 숨겨져 있다.",
      "details": "복잡한 회로와 알 수 없는 금속 부품들로 이루어진 미완성 장치가 놓여 있다."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A02", "A03"], "result": "김민준의 시신과 낡은 회중시계를 면밀히 조사하여, 박준영 형사가 합류하게 됩니다.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A02", "A04"], "result": "김민준의 시신을 박준영 형사와 함께 재조사하여, 20세기 초 칼날 흔적을 발견합니다.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A03", "A05"], "result": "낡은 회중시계와 칼날 흔적을 연결하여, \"1888년 런던\" 각인을 확인합니다.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A02", "A06"], "result": "김민준의 시신과 \"1888년 런던\" 각인을 통해 피해자의 손에 쥐여 있던 종이 조각을 발견합니다.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A07", "A06"], "result": "김민준의 종이 조각과 \"1888년 런던\" 각인을 연결하여, 그의 비밀 연구실을 발견합니다.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A08", "A05"], "result": "김민준의 연구실에서 칼날 흔적과 연관된 미완성된 시간 이동 장치를 발견합니다.", "unlock": "A09"},
    {"id": "rule_A10", "cards": ["A09", "A05"], "result": "미완성된 시간 이동 장치와 칼날 흔적을 통해 장치 주변에서 시간 왜곡 에너지를 감지합니다.", "unlock": "A10"},
    {"id": "rule_A11", "cards": ["A08", "A09"], "result": "김민준의 연구실에서 미완성된 시간 이동 장치를 통해 암호화된 태블릿을 발견합니다.", "unlock": "A11"},
    {"id": "rule_A12", "cards": ["A11", "A01"], "result": "암호화된 태블릿을 이진우 형사가 해독하여 김민준의 일지 초반부를 확인합니다.", "unlock": "A12"},
    {"id": "rule_A13", "cards": ["A12", "A07"], "result": "김민준의 일지와 종이 조각을 통해 '크로노스'의 존재를 파악합니다.", "unlock": "A13"},
    {"id": "rule_A14", "cards": ["A08", "A10"], "result": "김민준의 연구실과 시간 왜곡 에너지 감지를 통해 알 수 없는 데이터 패킷을 발견합니다.", "unlock": "A14"},
    {"id": "rule_A15", "cards": ["A14", "A13"], "result": "데이터 패킷과 '크로노스'의 존재를 통해 미래에서 온 경고 메시지를 해독합니다.", "unlock": "A15"},
    {"id": "rule_A16", "cards": ["A12", "A15"], "result": "김민준의 일지와 경고 메시지를 통해 시간 역설의 위험성을 인지합니다.", "unlock": "A16"},
    {"id": "rule_A17", "cards": ["A01", "A06"], "result": "이진우 형사는 \"1888년 런던\" 각인을 통해 앨리스터 핀치 교수의 존재를 추적합니다.", "unlock": "A17"},
    {"id": "rule_A18", "cards": ["A17", "A03"], "result": "앨리스터 핀치 교수와 낡은 회중시계를 통해 핀치의 회중시계가 김민준 시신 옆 회중시계와 동일함을 확인합니다.", "unlock": "A18"}
  ],
  "fragments": [],
  "winCondition": "A18",
  "initialCards": ["A01", "A02", "A03"]
}