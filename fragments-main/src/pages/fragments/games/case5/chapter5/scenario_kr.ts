
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


export const case5Ch5: GameScenario = {
  "id": "shadows_of_time_chapter5",
  "title": "챕터 5: 황폐한 미래와 잊혀진 영웅",
  "story": "2122년 뉴욕의 황폐한 미래를 목격하고, '잊혀진 영웅들의 기념비'를 통해 크로노스의 '대정화'와 사라의 존재를 확인한다.",
  "victim": "인류 (크로노스에 의해 희생)",
  "suspects": [
    {
      "id": "E02",
      "name": "노인의 존재",
      "role": "증인",
      "description": "황폐한 광장에서 만난, 과거의 망령에 사로잡힌 듯한 노인.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "E08",
      "name": "사라의 정체 (재확인)",
      "role": "미래의 인물",
      "description": "노인의 증언을 통해 '시간의 수호자' 사라의 존재를 재확인한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "E17",
      "name": "이진우의 결심",
      "role": "주인공",
      "description": "사라를 구하고, 크로노스의 계획을 막기 위한 확고한 결심.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "E03",
      "name": "시간의 수호자 (개념)",
      "description": "시간의 균형을 지키려는 자들.",
      "details": "크로노스에 맞서는 이들.",
      "location": ""
    },
    {
      "id": "E04",
      "name": "'대정화'의 시작",
      "description": "크로노스가 2122년 뉴욕에서 시작한, 역사를 '정화'하는 행위.",
      "details": "노인의 증언을 통해 확인된, 크로노스의 개입으로 인한 미래의 비극적인 변화.",
      "location": "E01"
    },
    {
      "id": "E06",
      "name": "김민준의 이름 (기념비)",
      "description": "기념비에 새겨진 김민준의 이름. 그도 '잊혀진 영웅'이었음을 확인.",
      "details": "사라를 돕고 크로노스를 막으려 했다.",
      "location": "E05"
    },
    {
      "id": "E07",
      "name": "앨리스터 핀치의 이름 (기념비)",
      "description": "기념비에 새겨진 앨리스터 핀치의 이름. 그도 '잊혀진 영웅'이었음을 확인.",
      "details": "그의 연구는 크로노스에게 위협이 되었다.",
      "location": "E05"
    },
    {
      "id": "E09",
      "name": "'사라의 장미' (재확인)",
      "description": "노인의 손에 닿자 더욱 강렬하게 맥동하는 장미.",
      "details": "사라의 강한 감정과 연결되어 시간의 메아리를 증폭시키고 있다.",
      "location": ""
    },
    {
      "id": "E10",
      "name": "사라 제거 이유",
      "description": "사라의 강연이 크로노스의 '최적화된 미래'를 위협할 잠재력을 가지고 있기 때문.",
      "details": "그들은 사라의 존재 자체를 역사에서 지워버리려 했다.",
      "location": "E04"
    },
    {
      "id": "E11",
      "name": "존재 자체의 삭제",
      "description": "크로노스는 사라를 죽인 것이 아니라, 그녀의 존재 자체를 역사에서 지웠다.",
      "details": "그녀가 태어나지 않도록 시간선을 조작한 것이다.",
      "location": "E10"
    },
    {
      "id": "E12",
      "name": "시간의 되감기 (희망)",
      "description": "김민준의 일지에 언급된, '시간 역설'을 극복하고 특정 시점으로 돌아갈 수 있는 개념.",
      "details": "유일한 희망.",
      "location": "E06"
    },
    {
      "id": "E13",
      "name": "사라의 강연 (목표)",
      "description": "2122년 뉴욕에서 사라가 할 예정이었던 중요한 강연.",
      "details": "크로노스의 계획을 뒤엎을 수 있는 전환점.",
      "location": "E14"
    },
    {
      "id": "E15",
      "name": "강연 시작 시간",
      "description": "사라의 강연이 열릴 정확한 시간.",
      "details": "크로노스가 개입하기 직전의 시간.",
      "location": "E14"
    },
    {
      "id": "E16",
      "name": "크로노스의 다음 목표 (재확인)",
      "description": "사라의 강연을 막는 것이 크로노스의 다음 목표임을 확인.",
      "details": "그들은 사라의 존재 자체를 지우려 한다.",
      "location": "E10"
    },
    {
      "id": "E18",
      "name": "시간의 수호자 (역할)",
      "description": "이진우 형사 팀이 크로노스의 과거를 바꾸는 '시간의 수호자'가 되어야 함을 깨닫는다.",
      "details": "진실을 지키기 위한 싸움.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "E01",
      "name": "2122년 뉴욕의 현실",
      "description": "예상과 다른, 황폐하고 활기 없는 미래 도시 뉴욕.",
      "details": "거대한 홀로그램 광고판 아래, 텅 비어 있는 광장."
    },
    {
      "id": "E05",
      "name": "'잊혀진 영웅들의 기념비'",
      "description": "크로노스에 의해 역사가 지워진 자들의 이름이 새겨진 기념비.",
      "details": "아무도 그들을 기억하지 못한다. 역사가 바뀌었기 때문."
    },
    {
      "id": "E14",
      "name": "미래 기술 박물관",
      "description": "사라의 강연이 열릴 예정이었던 장소.",
      "details": "박물관 앞은 강연을 들으러 온 사람들로 북적였다."
    }
  ],
  "connectionRules": [
    {"id": "rule_E04", "cards": ["E01", "E02"], "result": "2122년 뉴욕의 현실과 노인의 증언을 통해 크로노스가 '대정화'를 시작했음을 파악합니다.", "unlock": "E04"},
    {"id": "rule_E05", "cards": ["E01", "E04"], "result": "2122년 뉴욕의 현실과 '대정화'의 시작을 통해 '잊혀진 영웅들의 기념비'를 발견합니다.", "unlock": "E05"},
    {"id": "rule_E06", "cards": ["E05", "E02"], "result": "'잊혀진 영웅들의 기념비'와 노인의 증언을 통해 기념비에 새겨진 김민준의 이름을 확인합니다.", "unlock": "E06"},
    {"id": "rule_E07", "cards": ["E05", "E02"], "result": "'잊혀진 영웅들의 기념비'와 노인의 증언을 통해 기념비에 새겨진 앨리스터 핀치의 이름을 확인합니다.", "unlock": "E07"},
    {"id": "rule_E08", "cards": ["E02", "E03"], "result": "노인의 증언과 시간의 수호자 개념을 통해 사라의 정체를 재확인합니다.", "unlock": "E08"},
    {"id": "rule_E09", "cards": ["E08", "E03"], "result": "사라의 정체와 시간의 수호자 개념을 통해 '사라의 장미'가 노인의 손에 닿자 더욱 강렬하게 맥동함을 재확인합니다.", "unlock": "E09"},
    {"id": "rule_E10", "cards": ["E04", "E08"], "result": "'대정화'의 시작과 사라의 정체를 통해 사라의 강연이 크로노스의 '최적화된 미래'를 위협할 잠재력을 가지고 있기 때문에 사라를 제거하려 했음을 파악합니다.", "unlock": "E10"},
    {"id": "rule_E11", "cards": ["E10", "E04"], "result": "사라 제거 이유와 '대정화'의 시작을 통해 크로노스가 사라를 죽인 것이 아니라, 그녀의 존재 자체를 역사에서 지웠음을 파악합니다.", "unlock": "E11"},
    {"id": "rule_E12", "cards": ["E06", "E07"], "result": "김민준의 이름과 앨리스터 핀치의 이름을 통해 김민준의 일지에 언급된 '시간의 되감기' 개념이 유일한 희망임을 깨닫습니다.", "unlock": "E12"},
    {"id": "rule_E13", "cards": ["E08", "E12"], "result": "사라의 정체와 시간의 되감기 개념을 통해 2122년 뉴욕에서 사라가 할 예정이었던 중요한 강연을 파악합니다.", "unlock": "E13"},
    {"id": "rule_E14", "cards": ["E13", "E01"], "result": "사라의 강연과 2122년 뉴욕의 현실을 통해 미래 기술 박물관이 강연 장소임을 파악합니다.", "unlock": "E14"},
    {"id": "rule_E15", "cards": ["E13", "E02"], "result": "사라의 강연과 노인의 증언을 통해 강연 시작 시간을 파악합니다.", "unlock": "E15"},
    {"id": "rule_E16", "cards": ["E10", "E13"], "result": "사라 제거 이유와 사라의 강연을 통해 사라의 강연을 막는 것이 크로노스의 다음 목표임을 확인합니다.", "unlock": "E16"},
    {"id": "rule_E17", "cards": ["E01", "E12"], "result": "2122년 뉴욕의 현실과 시간의 되감기 개념을 통해 이진우의 결심이 확고해집니다.", "unlock": "E17"},
    {"id": "rule_E18", "cards": ["E03", "E17"], "result": "시간의 수호자 개념과 이진우의 결심을 통해 이진우 형사 팀이 크로노스의 과거를 바꾸는 '시간의 수호자'가 되어야 함을 깨닫습니다.", "unlock": "E18"}
  ],
  "fragments": [],
  "winCondition": "E18",
  "initialCards": ["E01", "E02", "E03"]
}
