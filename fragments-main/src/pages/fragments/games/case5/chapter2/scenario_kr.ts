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


export const case5Ch2: GameScenario = {
  "id": "shadows_of_time_chapter2",
  "title": "챕터 2: 잊혀진 선구자의 메아리",
  "story": "앨리스터 핀치의 정체를 밝히고, '시간 공명' 이론과 '시간의 메아리'의 개념을 이해한다.",
  "victim": "김민준",
  "suspects": [
    {
      "id": "B01",
      "name": "앨리스터 핀치 교수",
      "role": "과거의 인물",
      "description": "19세기 후반 런던의 이론 물리학자. 시간 역학 이론의 선구자.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B03",
      "name": "시간 이상 감지기",
      "role": "도구",
      "description": "김민준의 연구실에서 시간 왜곡 현상을 감지하는 장치.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B16",
      "name": "사라의 존재",
      "role": "미래의 인물",
      "description": "김민준의 일지에서 언급된, 크로노스와 관련된 또 다른 이름.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B02",
      "name": "김민준의 암호화된 일지 (후반부)",
      "description": "크로노스에 대한 김민준의 심층적인 연구 기록.",
      "details": "크로노스가 단순한 개인이 아니라, 집단 의식 또는 조직일 수 있다고 이론화했다.",
      "location": ""
    },
    {
      "id": "B04",
      "name": "'크로노스'의 정체",
      "description": "단순한 살인자가 아닌, 시간을 조작하는 집단 의식 또는 조직.",
      "details": "특정 시점의 인물들을 제거하여 원하는 미래를 위해 역사를 '최적화'한다고 믿는다.",
      "location": ""
    },
    {
      "id": "B05",
      "name": "'시간 공명' 이론",
      "description": "핀치 교수의 급진적인 이론. 특정 사물이나 개인이 시간의 특정 지점과 공명하여, 시간선을 가로지르는 메아리를 만들어낼 수 있다는 이론.",
      "details": "이 메아리를 조작할 수 있다고 믿었다.",
      "location": ""
    },
    {
      "id": "B06",
      "name": "'시간의 메아리'",
      "description": "시간 공명을 통해 시간선을 가로지르는 메아리. 조작 가능성.",
      "details": "강한 감정적 또는 역사적 중요성을 띠는 사물에서 발생한다.",
      "location": ""
    },
    {
      "id": "B07",
      "name": "핀치의 사라짐",
      "description": "1890년, 핀치 교수가 흔적도 없이 사라진 기록.",
      "details": "크로노스의 개입 가능성을 시사한다.",
      "location": ""
    },
    {
      "id": "B08",
      "name": "국지적인 시간 왜곡 현상",
      "description": "연구실 낡은 책장 근처에서 감지된 희미하고 국지적인 시간 왜곡.",
      "details": "시간만을 위한 미니어처 블랙홀과 같다.",
      "location": ""
    },
    {
      "id": "B09",
      "name": "작은 나무 상자",
      "description": "시간 왜곡 현상이 감지된 곳에서 발견된, 따뜻한 기운의 상자.",
      "details": "핀치의 난해한 저작물들 사이에 숨겨져 있었다.",
      "location": ""
    },
    {
      "id": "B10",
      "name": "완벽하게 보존된 마른 장미",
      "description": "나무 상자 안에서 발견된, 불가능할 정도로 생생한 붉은색의 장미.",
      "details": "오래된 장미 향기와 오존처럼 금속적인 냄새가 섞여 있다.",
      "location": "B09"
    },
    {
      "id": "B11",
      "name": "장미의 환영",
      "description": "장미를 만지자 스쳐 지나간 웅장한 무도회장과 눈물 어린 여인의 환영.",
      "details": "시간의 메아리에서 온 기억.",
      "location": "B10"
    },
    {
      "id": "B12",
      "name": "'크로노스 프로토콜'",
      "description": "크로노스가 역사를 '최적화'하기 위해 인물들을 제거하는 방법.",
      "details": "그들의 '최적화'는 피로 얼룩져 있다.",
      "location": "B02"
    },
    {
      "id": "B13",
      "name": "'믿음의 도약' 이론",
      "description": "김민준이 비상 계획으로 이론화한, 단방향 시간 점프 방법.",
      "details": "충분히 강한 시간의 메아리를 정확한 시간 서명과 결합하면 일시적이고 불안정한 단방향 시간 점프를 만들 수 있다.",
      "location": "B02"
    },
    {
      "id": "B14",
      "name": "'시간의 닻' 개념",
      "description": "핀치의 이론을 인용하여, 특정 시간 지점의 공명을 극대화하는 방법.",
      "details": "엄청난 에너지가 필요하며, 시간 역설의 위험이 따른다.",
      "location": "B05"
    },
    {
      "id": "B15",
      "name": "미래에서 온 메시지 (재확인)",
      "description": "'다음 희생자는 너다'라는 경고. 크로노스가 이진우를 알고 있음을 확인.",
      "details": "범인은 이미 이진우의 존재를 알고 있었고, 그를 다음 목표로 삼고 있었다.",
      "location": ""
    },
    {
      "id": "B17",
      "name": "사라의 장미",
      "description": "장미가 사라와 관련된 것임을 추론. 그녀의 마지막 희망이 담겨 있다.",
      "details": "장미는 사라의 강한 감정과 연결되어 시간의 메아리를 증폭시키고 있다.",
      "location": "B10"
    },
    {
      "id": "B18",
      "name": "2122년 뉴욕의 역사적 사건",
      "description": "크로노스가 다음 '수정'을 가할 것으로 예상되는 뉴욕의 주요 사건.",
      "details": "특정 인물을 목표로 삼고 있다.",
      "location": "B12"
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B02", "B03"], "result": "김민준의 일지와 시간 이상 감지기를 연결하여, '크로노스'가 단순한 살인자가 아닌 시간을 조작하는 집단임을 파악합니다.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B01", "B04"], "result": "앨리스터 핀치 교수의 연구와 '크로노스'의 정체를 통해 '시간 공명' 이론을 이해합니다.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B05", "B02"], "result": "'시간 공명' 이론과 김민준의 일지를 통해 '시간의 메아리'의 개념을 파악합니다.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B04", "B05"], "result": "'크로노스'의 정체와 '시간 공명' 이론을 통해, 핀치가 1890년에 흔적도 없이 사라진 기록을 발견합니다.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B03", "B06"], "result": "시간 이상 감지기와 '시간의 메아리'를 통해 연구실 낡은 책장 근처에서 국지적인 시간 왜곡 현상을 감지합니다.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B08", "B07"], "result": "국지적인 시간 왜곡 현상과 핀치의 사라짐을 통해 작은 나무 상자를 발견합니다.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B09", "B06"], "result": "작은 나무 상자와 '시간의 메아리'를 통해 완벽하게 보존된 마른 장미를 발견합니다.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B10", "B05"], "result": "완벽하게 보존된 마른 장미와 '시간 공명' 이론을 통해 장미를 만지자 스쳐 지나간 환영을 경험합니다.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B04", "B02"], "result": "'크로노스'의 정체와 김민준의 일지를 통해 '크로노스 프로토콜'을 파악합니다.", "unlock": "B12"},
    {"id": "rule_B13", "cards": ["B02", "B10"], "result": "김민준의 일지와 완벽하게 보존된 마른 장미를 통해 '믿음의 도약' 이론을 파악합니다.", "unlock": "B13"},
    {"id": "rule_B14", "cards": ["B05", "B13"], "result": "'시간 공명' 이론과 '믿음의 도약' 이론을 통해 '시간의 닻' 개념을 이해합니다.", "unlock": "B14"},
    {"id": "rule_B15", "cards": ["B04", "B12"], "result": "'크로노스'의 정체와 '크로노스 프로토콜'을 통해 미래에서 온 메시지를 재확인합니다.", "unlock": "B15"},
    {"id": "rule_B17", "cards": ["B10", "B16"], "result": "완벽하게 보존된 마른 장미와 사라의 존재를 통해 장미가 사라와 관련된 것임을 추론합니다.", "unlock": "B17"},
    {"id": "rule_B18", "cards": ["B12", "B15"], "result": "'크로노스 프로토콜'과 미래에서 온 메시지를 통해 2122년 뉴욕의 역사적 사건을 파악합니다.", "unlock": "B18"}
  ],
  "fragments": [],
  "winCondition": "B18",
  "initialCards": ["B01", "B02", "B03"]
}