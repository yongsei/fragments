
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


export const case5Ch4: GameScenario = {
  "id": "shadows_of_time_chapter4",
  "title": "챕터 4: 믿음의 도약, 2122년 뉴욕",
  "story": "'믿음의 도약'을 통해 2122년 뉴욕으로 시간 이동하고, 크로노스와 첫 대면한다.",
  "victim": "탐사팀 (잠재적 희생자)",
  "suspects": [
    {
      "id": "D01",
      "name": "믿음의 도약 준비",
      "role": "주인공",
      "description": "이진우 형사 팀이 시간 이동을 위한 마지막 준비를 한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D10",
      "name": "노인의 증언",
      "role": "증인",
      "description": "황폐한 광장에서 만난 노인. 크로노스와 대정화에 대한 정보를 제공한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D02",
      "name": "미완성된 시간 이동 장치",
      "description": "장미의 에너지를 주입하여 시간 터널을 만들 장치.",
      "details": "김민준이 남긴 유일한 희망.",
      "location": ""
    },
    {
      "id": "D03",
      "name": "사라의 장미 (촉매)",
      "description": "시간의 메아리를 증폭시켜 시간 터널 생성에 필요한 촉매.",
      "details": "장미는 삽입되자마자 더욱 강렬하게 맥동하며, 주변의 공기를 뒤틀기 시작한다.",
      "location": ""
    },
    {
      "id": "D04",
      "name": "시간 터널 생성",
      "description": "장미의 에너지를 장치에 주입하여 시간 터널이 생성된다.",
      "details": "연구실의 벽면이 일렁이기 시작하고, 공간이 왜곡된다.",
      "location": ""
    },
    {
      "id": "D05",
      "name": "시간 터널의 불안정성",
      "description": "시간 터널이 불안정하여 정확한 목적지에 도달할 확률이 낮다.",
      "details": "돌아올 방법이 없는 단방향 점프.",
      "location": ""
    },
    {
      "id": "D06",
      "name": "시간 역설의 위험",
      "description": "과거를 바꾸면 현재와 미래가 예측 불가능하게 변할 수 있다는 경고.",
      "details": "크로노스는 이미 시간을 바꾸고 있다.",
      "location": ""
    },
    {
      "id": "D07",
      "name": "2122년 뉴욕 도착",
      "description": "시간 이동에 성공하여 도착한 미래의 뉴욕.",
      "details": "거대한 홀로그램 광고판이 하늘을 수놓고, 공중을 떠다니는 차량들이 바쁘게 움직인다.",
      "location": ""
    },
    {
      "id": "D08",
      "name": "황폐한 미래의 뉴욕",
      "description": "예상과 달리 활기 없는, 크로노스의 개입으로 황폐해진 뉴욕.",
      "details": "크로노스의 '대정화'로 인해 모든 것이 변했다.",
      "location": ""
    },
    {
      "id": "D09",
      "name": "거대한 기념비",
      "description": "황폐한 광장 중앙에 서 있는, 잊혀진 영웅들의 기념비.",
      "details": "알 수 없는 언어로 무언가가 새겨져 있고, 수많은 이름들이 빼곡히 적혀 있다.",
      "location": ""
    },
    {
      "id": "D11",
      "name": "잊혀진 영웅들의 이름",
      "description": "기념비에 새겨진 김민준과 앨리스터 핀치의 이름.",
      "details": "그들은 크로노스에 의해 역사가 지워진 '잊혀진 영웅'이었다.",
      "location": "D09"
    },
    {
      "id": "D12",
      "name": "사라의 존재 (재확인)",
      "description": "노인의 증언을 통해 사라가 '시간의 수호자'임을 재확인한다.",
      "details": "크로노스의 계획을 막으려 했던 유일한 희망.",
      "location": "D10"
    },
    {
      "id": "D13",
      "name": "크로노스의 등장",
      "description": "박물관 상공에서 나타난 검은 슈트의 인물들.",
      "details": "그들은 공중에서 아무런 장치 없이 부유하며 천천히 하강한다.",
      "location": "D07"
    },
    {
      "id": "D14",
      "name": "크로노스 요원의 슈트",
      "description": "시간 왜곡 에너지를 증폭시키는 기능을 가진 검은색 슈트.",
      "details": "작은 톱니바퀴 문양이 새겨져 있다.",
      "location": "D13"
    },
    {
      "id": "D15",
      "name": "시간 왜곡 공격",
      "description": "크로노스 요원들이 시간 왜곡 에너지를 사용하여 공격한다.",
      "details": "주변 시간의 흐름을 조작하여 움직임을 가속화하거나 둔화시킨다.",
      "location": "D14"
    },
    {
      "id": "D16",
      "name": "앨리스터 핀치의 회중시계 (무기)",
      "description": "1888년 런던의 시간 에너지를 담고 있는 회중시계.",
      "details": "크로노스 요원의 슈트에 과부하를 일으킬 수 있다.",
      "location": "D03"
    },
    {
      "id": "D17",
      "name": "크로노스 요원의 약점",
      "description": "과도한 시간 왜곡 에너지를 주입하면 슈트가 과부하를 일으킨다.",
      "details": "회중시계의 시간 에너지를 이용할 수 있다.",
      "location": "D14"
    },
    {
      "id": "D18",
      "name": "쓰러진 크로노스 요원",
      "description": "슈트가 녹아내리며 드러난 평범한 인간의 모습.",
      "details": "크로노스는 시간을 조작하는 인간들이었다.",
      "location": "D13"
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D02", "D03"], "result": "미완성된 시간 이동 장치와 사라의 장미를 통해 시간 터널이 생성됩니다.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D04", "D02"], "result": "시간 터널 생성과 미완성된 시간 이동 장치를 통해 시간 터널의 불안정성을 인지합니다.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D05", "D03"], "result": "시간 터널의 불안정성과 사라의 장미를 통해 시간 역설의 위험을 인지합니다.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D04", "D05"], "result": "시간 터널 생성과 시간 터널의 불안정성을 극복하여 2122년 뉴욕에 도착합니다.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D07", "D06"], "result": "2122년 뉴욕 도착과 시간 역설의 위험을 통해 황폐한 미래의 뉴욕을 목격합니다.", "unlock": "D08"},
    {"id": "rule_D09", "cards": ["D08", "D07"], "result": "황폐한 미래의 뉴욕과 2122년 뉴욕 도착을 통해 거대한 기념비를 발견합니다.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D09", "D08"], "result": "거대한 기념비와 황폐한 미래의 뉴욕을 통해 노인의 증언을 듣습니다.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D09", "D10"], "result": "거대한 기념비와 노인의 증언을 통해 잊혀진 영웅들의 이름을 확인합니다.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D10", "D11"], "result": "노인의 증언과 잊혀진 영웅들의 이름을 통해 사라가 '시간의 수호자'임을 재확인합니다.", "unlock": "D12"},
    {"id": "rule_D13", "cards": ["D07", "D12"], "result": "2122년 뉴욕 도착과 사라의 존재를 통해 크로노스의 등장을 목격합니다.", "unlock": "D13"},
    {"id": "rule_D14", "cards": ["D13", "D05"], "result": "크로노스의 등장과 시간 터널의 불안정성을 통해 크로노스 요원의 슈트의 기능을 파악합니다.", "unlock": "D14"},
    {"id": "rule_D15", "cards": ["D14", "D06"], "result": "크로노스 요원의 슈트와 시간 역설의 위험을 통해 그들의 시간 왜곡 공격을 파악합니다.", "unlock": "D15"},
    {"id": "rule_D16", "cards": ["D03", "D15"], "result": "사라의 장미와 시간 왜곡 공격을 통해 앨리스터 핀치의 회중시계가 무기로 사용될 수 있음을 깨닫습니다.", "unlock": "D16"},
    {"id": "rule_D17", "cards": ["D14", "D16"], "result": "크로노스 요원의 슈트와 앨리스터 핀치의 회중시계를 통해 크로노스 요원의 약점을 파악합니다.", "unlock": "D17"},
    {"id": "rule_D18", "cards": ["D17", "D13"], "result": "크로노스 요원의 약점과 크로노스의 등장을 통해 쓰러진 크로노스 요원의 정체를 확인합니다.", "unlock": "D18"}
  ],
  "fragments": [],
  "winCondition": "D18",
  "initialCards": ["D01", "D02", "D03"]
}
