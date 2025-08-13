
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


export const case5Ch3: GameScenario = {
  "id": "shadows_of_time_chapter3",
  "title": "챕터 3: 장미의 메아리와 크로노스 프로토콜",
  "story": "'사라의 장미'를 통해 사라의 정체와 크로노스의 '최적화' 계획을 더 깊이 파고든다.",
  "victim": "사라 (존재 자체가 위협받음)",
  "suspects": [
    {
      "id": "C07",
      "name": "사라의 정체",
      "role": "미래의 인물",
      "description": "사진 속 눈물 어린 여인. 크로노스의 계획을 막으려 했던 '시간의 수호자'.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C17",
      "name": "노인의 증언",
      "role": "증인",
      "description": "황폐한 미래에서 만난 노인. 크로노스와 사라에 대한 중요한 정보를 제공한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C01",
      "name": "사라의 장미",
      "description": "완벽하게 보존된 장미. 시간의 메아리를 증폭시키는 촉매.",
      "details": "노인의 손에 닿자 더욱 강렬하게 맥동한다.",
      "location": ""
    },
    {
      "id": "C02",
      "name": "앨리스터 핀치의 시간 공명 이론",
      "description": "특정 사물이 시간의 지점과 공명하여 메아리를 만든다는 이론.",
      "details": "김민준의 일지에서 인용된 핵심 이론.",
      "location": ""
    },
    {
      "id": "C03",
      "name": "김민준의 일지 (크로노스 프로토콜)",
      "description": "크로노스가 역사를 '최적화'하는 방법에 대한 기록.",
      "details": "크로노스가 특정 시점의 인물들을 제거하여 원하는 미래를 만드는 행위.",
      "location": ""
    },
    {
      "id": "C04",
      "name": "장미의 시간 왜곡 에너지",
      "description": "장미 주변에서 감지되는 강렬한 시간 왜곡 에너지.",
      "details": "시간의 닻으로 활용될 수 있는 에너지.",
      "location": "C01"
    },
    {
      "id": "C05",
      "name": "장미의 환영 (재확인)",
      "description": "장미를 통해 다시 경험하는 웅장한 무도회장과 눈물 어린 여인의 환영.",
      "details": "사라의 과거와 관련된 중요한 기억.",
      "location": "C01"
    },
    {
      "id": "C06",
      "name": "크로노스의 '최적화'",
      "description": "크로노스가 특정 시점의 인물들을 제거하여 원하는 미래를 만드는 행위.",
      "details": "그들의 '최적화'는 피로 얼룩져 있다.",
      "location": "C03"
    },
    {
      "id": "C08",
      "name": "사라의 강연",
      "description": "2122년 뉴욕에서 사라가 할 예정이었던 중요한 강연.",
      "details": "크로노스의 계획을 뒤엎을 수 있는 전환점.",
      "location": "C14"
    },
    {
      "id": "C09",
      "name": "크로노스의 사라 제거 이유",
      "description": "사라의 강연이 크로노스의 '최적화된 미래'를 위협할 잠재력을 가지고 있기 때문.",
      "details": "그들은 사라의 존재 자체를 역사에서 지워버리려 했다.",
      "location": "C03"
    },
    {
      "id": "C10",
      "name": "시간의 되감기 (이론)",
      "description": "김민준의 일지에 언급된, 특정 시간 지점의 시간선을 일시적으로 재설정하는 개념.",
      "details": "엄청난 에너지가 필요하며, 시간 역설의 위험이 따른다.",
      "location": "C03"
    },
    {
      "id": "C11",
      "name": "시간의 닻",
      "description": "핀치의 이론을 인용하여, 시간의 되감기를 위한 핵심 요소.",
      "details": "장미의 에너지를 미완성 장치에 주입하여 활용할 수 있다.",
      "location": "C02"
    },
    {
      "id": "C12",
      "name": "믿음의 도약 (재확인)",
      "description": "장미의 에너지를 미완성 장치에 주입하여 단방향 시간 점프를 시도하는 방법.",
      "details": "정확한 목적지에 도달할 확률은 50% 미만이다.",
      "location": "C01"
    },
    {
      "id": "C13",
      "name": "2122년 뉴욕의 황폐화",
      "description": "노인의 증언을 통해 확인된, 크로노스의 개입으로 인한 미래의 비극적인 변화.",
      "details": "크로노스의 '대정화'로 인해 모든 것이 변했다.",
      "location": "C14"
    },
    {
      "id": "C15",
      "name": "앨리스터 핀치의 이름",
      "description": "기념비에 새겨진 핀치의 이름. 그도 크로노스의 희생자였음을 확인.",
      "details": "그의 연구는 크로노스에게 위협이 되었다.",
      "location": "C14"
    },
    {
      "id": "C16",
      "name": "김민준의 이름",
      "description": "기념비에 새겨진 김민준의 이름. 그도 크로노스의 희생자였음을 확인.",
      "details": "사라를 돕고 크로노스를 막으려 했다.",
      "location": "C14"
    },
    {
      "id": "C18",
      "name": "시간의 수호자 (개념)",
      "description": "사라와 김민준, 핀치처럼 시간의 균형을 지키려는 자들.",
      "details": "크로노스에 맞서는 이들.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "C14",
      "name": "잊혀진 영웅들의 기념비",
      "description": "크로노스에 의해 역사가 지워진 자들의 이름이 새겨진 기념비.",
      "details": "아무도 그들을 기억하지 못한다. 역사가 바뀌었기 때문."
    }
  ],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C01", "C02"], "result": "사라의 장미와 앨리스터 핀치의 시간 공명 이론을 결합하여, 장미 주변에서 강렬한 시간 왜곡 에너지를 감지합니다.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C01", "C04"], "result": "사라의 장미와 장미의 시간 왜곡 에너지를 통해 웅장한 무도회장과 눈물 어린 여인의 환영을 다시 경험합니다.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C03", "C02"], "result": "김민준의 일지와 앨리스터 핀치의 시간 공명 이론을 통해 크로노스가 특정 시점의 인물들을 제거하여 원하는 미래를 만드는 행위인 '최적화'를 파악합니다.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C05", "C06"], "result": "장미의 환영과 크로노스의 '최적화'를 통해 사진 속 눈물 어린 여인이 크로노스의 계획을 막으려 했던 '시간의 수호자' 사라임을 파악합니다.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C07", "C03"], "result": "사라의 정체와 김민준의 일지를 통해 2122년 뉴욕에서 사라가 할 예정이었던 중요한 강연을 파악합니다.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C08", "C06"], "result": "사라의 강연과 크로노스의 '최적화'를 통해 사라의 강연이 크로노스의 '최적화된 미래'를 위협할 잠재력을 가지고 있기 때문에 크로노스가 사라를 제거하려 했음을 파악합니다.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C03", "C04"], "result": "김민준의 일지와 장미의 시간 왜곡 에너지를 통해 특정 시간 지점의 시간선을 일시적으로 재설정하는 '시간의 되감기' 이론을 파악합니다.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C02", "C10"], "result": "앨리스터 핀치의 시간 공명 이론과 '시간의 되감기' 이론을 통해 시간의 되감기를 위한 핵심 요소인 '시간의 닻' 개념을 이해합니다.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C01", "C11"], "result": "사라의 장미와 '시간의 닻'을 통해 장미의 에너지를 미완성 장치에 주입하여 단방향 시간 점프를 시도하는 '믿음의 도약' 방법을 재확인합니다.", "unlock": "C12"},
    {"id": "rule_C13", "cards": ["C06", "C09"], "result": "크로노스의 '최적화'와 사라 제거 이유를 통해 노인의 증언으로 확인된, 크로노스의 개입으로 인한 미래의 비극적인 변화인 2122년 뉴욕의 황폐화를 파악합니다.", "unlock": "C13"},
    {"id": "rule_C14", "cards": ["C13", "C07"], "result": "2122년 뉴욕의 황폐화와 사라의 정체를 통해 크로노스에 의해 역사가 지워진 자들의 이름이 새겨진 '잊혀진 영웅들의 기념비'를 발견합니다.", "unlock": "C14"},
    {"id": "rule_C15", "cards": ["C14", "C02"], "result": "잊혀진 영웅들의 기념비와 앨리스터 핀치의 시간 공명 이론을 통해 기념비에 새겨진 핀치의 이름을 확인합니다.", "unlock": "C15"},
    {"id": "rule_C16", "cards": ["C14", "C03"], "result": "잊혀진 영웅들의 기념비와 김민준의 일지를 통해 기념비에 새겨진 김민준의 이름을 확인합니다.", "unlock": "C16"},
    {"id": "rule_C17", "cards": ["C13", "C14"], "result": "2122년 뉴욕의 황폐화와 잊혀진 영웅들의 기념비를 통해 황폐한 미래에서 만난 노인의 증언을 듣습니다.", "unlock": "C17"},
    {"id": "rule_C18", "cards": ["C07", "C15"], "result": "사라의 정체와 앨리스터 핀치의 이름을 통해 사라와 김민준, 핀치처럼 시간의 균형을 지키려는 자들인 '시간의 수호자' 개념을 이해합니다.", "unlock": "C18"}
  ],
  "fragments": [],
  "winCondition": "C18",
  "initialCards": ["C01", "C02", "C03"]
}
