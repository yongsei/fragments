
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


export const case5Ch7: GameScenario = {
  "id": "shadows_of_time_chapter7",
  "title": "챕터 7: 시간의 사냥꾼과 사라의 운명",
  "story": "크로노스 요원들과 맞서 싸우고, 그들의 약점을 파악하여 사라의 강연을 지킨다.",
  "victim": "사라 (잠재적 희생자)",
  "suspects": [
    {
      "id": "G01",
      "name": "크로노스 요원과의 대치",
      "role": "적대자",
      "description": "박물관 상공에서 나타난 검은 슈트의 인물들과 대치한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G02",
      "name": "사라의 안전",
      "role": "조력자",
      "description": "제이콥이 사라를 보호하며 박물관 안으로 대피시킨다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G03",
      "name": "시간 왜곡 에너지 분석",
      "role": "조력자",
      "description": "리아가 요원들의 시간 왜곡 패턴을 분석하여 약점을 찾는다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G16",
      "name": "강연장으로의 이동",
      "role": "조력자",
      "description": "사라를 강연장으로 데려가 강연을 시작하도록 지시한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "G17",
      "name": "마지막 요원과의 대치",
      "role": "적대자",
      "description": "남은 크로노스 요원과의 최후의 대결.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "G04",
      "name": "크로노스 요원의 슈트 (재확인)",
      "description": "시간 왜곡 에너지를 증폭시키는 기능을 가진 검은색 슈트.",
      "details": "작은 톱니바퀴 문양이 새겨져 있다.",
      "location": ""
    },
    {
      "id": "G05",
      "name": "시간 왜곡 공격 (심화)",
      "description": "요원들이 주변 시간의 흐름을 조작하여 움직임을 가속화하거나 둔화시킨다.",
      "details": "박물관 입구의 홀로그램 간판이 산산조각 난다.",
      "location": ""
    },
    {
      "id": "G06",
      "name": "스턴 건의 무용성",
      "description": "미래형 스턴 건이 요원들에게 아무런 타격도 주지 못한다.",
      "details": "이 시간선에서는 무의미한 무기.",
      "location": ""
    },
    {
      "id": "G07",
      "name": "슈트의 약점 (과부하)",
      "description": "과도한 시간 왜곡 에너지를 주입하면 슈트가 역으로 과부하를 일으킨다.",
      "details": "리아가 분석한 크로노스 요원의 약점.",
      "location": ""
    },
    {
      "id": "G08",
      "name": "앨리스터 핀치의 회중시계 (무기)",
      "description": "1888년 런던의 시간 에너지를 담고 있는 회중시계.",
      "details": "크로노스 요원의 슈트에 과부하를 일으킬 수 있다.",
      "location": ""
    },
    {
      "id": "G09",
      "name": "회중시계의 충돌",
      "description": "회중시계에서 뿜어져 나온 시간 왜곡 에너지가 요원의 슈트와 충돌한다.",
      "details": "1888년 런던의 시간이 2122년 뉴욕의 시간과 충돌하며 거대한 시간의 파동을 일으킨다.",
      "location": ""
    },
    {
      "id": "G10",
      "name": "쓰러진 크로노스 요원",
      "description": "슈트가 녹아내리며 드러난 평범한 인간의 모습.",
      "details": "크로노스는 시간을 조작하는 인간들이었다.",
      "location": ""
    },
    {
      "id": "G11",
      "name": "크로노스의 정체 (인간)",
      "description": "크로노스는 시간을 조작하는 인간들이었음을 확인한다.",
      "details": "그들은 자신들의 '최적화'를 위해 역사를 조작한다.",
      "location": ""
    },
    {
      "id": "G12",
      "name": "데이터 칩 발견",
      "description": "쓰러진 요원의 손에서 떨어진 작은 데이터 칩.",
      "details": "'크로노스 프로토콜'의 상세한 내용이 담겨 있다.",
      "location": ""
    },
    {
      "id": "G13",
      "name": "크로노스 프로토콜 (상세)",
      "description": "데이터 칩에 담긴 '크로노스 프로토콜'의 상세한 내용.",
      "details": "사라의 강연을 막아야 하는 이유가 명시되어 있다.",
      "location": ""
    },
    {
      "id": "G14",
      "name": "사라 제거 이유 (상세)",
      "description": "사라의 강연이 크로노스의 '최적화된 미래'를 위협할 잠재력을 가지고 있기 때문.",
      "details": "그녀의 존재는 시간선의 중대한 오류로 간주된다.",
      "location": ""
    },
    {
      "id": "G15",
      "name": "사라의 강연 (중요성)",
      "description": "사라의 강연이 인류의 인식을 변화시켜 크로노스의 계획을 뒤엎을 전환점임을 깨닫는다.",
      "details": "그녀는 시간의 균형을 이해하고, 인류의 미래를 바꿀 수 있는 진실을 알고 있다.",
      "location": ""
    },
    {
      "id": "G18",
      "name": "진실을 위한 싸움",
      "description": "이진우 형사 팀이 진실을 지키기 위해 싸울 준비가 되어 있음을 보여준다.",
      "details": "시간의 그림자에 맞서는 최후의 대결.",
      "location": ""
    }
  ],
  "locations": [],
  "connectionRules": [
    {"id": "rule_G04", "cards": ["G01", "G03"], "result": "크로노스 요원과의 대치와 시간 왜곡 에너지 분석을 통해 크로노스 요원의 슈트가 시간 왜곡 에너지를 증폭시키는 기능을 가졌음을 파악합니다.", "unlock": "G04"},
    {"id": "rule_G05", "cards": ["G04", "G03"], "result": "크로노스 요원의 슈트와 시간 왜곡 에너지 분석을 통해 요원들이 주변 시간의 흐름을 조작하여 움직임을 가속화하거나 둔화시키는 것을 목격합니다.", "unlock": "G05"},
    {"id": "rule_G06", "cards": ["G01", "G05"], "result": "크로노스 요원과의 대치와 시간 왜곡 공격을 통해 미래형 스턴 건이 요원들에게 아무런 타격도 주지 못함을 확인합니다.", "unlock": "G06"},
    {"id": "rule_G07", "cards": ["G03", "G06"], "result": "시간 왜곡 에너지 분석과 스턴 건의 무용성을 통해 슈트의 약점인 과부하를 파악합니다.", "unlock": "G07"},
    {"id": "rule_G08", "cards": ["G07", "G01"], "result": "슈트의 약점과 크로노스 요원과의 대치를 통해 앨리스터 핀치의 회중시계가 무기로 사용될 수 있음을 깨닫습니다.", "unlock": "G08"},
    {"id": "rule_G09", "cards": ["G08", "G05"], "result": "앨리스터 핀치의 회중시계와 시간 왜곡 공격을 통해 회중시계에서 뿜어져 나온 시간 왜곡 에너지가 요원의 슈트와 충돌하는 것을 목격합니다.", "unlock": "G09"},
    {"id": "rule_G10", "cards": ["G09", "G07"], "result": "회중시계의 충돌과 슈트의 약점을 통해 쓰러진 크로노스 요원의 슈트가 녹아내리며 평범한 인간의 모습이 드러나는 것을 확인합니다.", "unlock": "G10"},
    {"id": "rule_G11", "cards": ["G10", "G01"], "result": "쓰러진 크로노스 요원과 크로노스 요원과의 대치를 통해 크로노스가 시간을 조작하는 인간들이었음을 확인합니다.", "unlock": "G11"},
    {"id": "rule_G12", "cards": ["G10", "G09"], "result": "쓰러진 크로노스 요원과 회중시계의 충돌을 통해 쓰러진 요원의 손에서 작은 데이터 칩이 떨어지는 것을 발견합니다.", "unlock": "G12"},
    {"id": "rule_G13", "cards": ["G12", "G11"], "result": "데이터 칩 발견과 크로노스의 정체를 통해 '크로노스 프로토콜'의 상세한 내용을 파악합니다.", "unlock": "G13"},
    {"id": "rule_G14", "cards": ["G13", "G02"], "result": "'크로노스 프로토콜'과 사라의 안전을 통해 사라의 강연이 크로노스의 '최적화된 미래'를 위협할 잠재력을 가지고 있기 때문에 사라를 제거하려 했음을 파악합니다.", "unlock": "G14"},
    {"id": "rule_G15", "cards": ["G14", "G03"], "result": "사라 제거 이유와 시간 왜곡 에너지 분석을 통해 사라의 강연이 인류의 인식을 변화시켜 크로노스의 계획을 뒤엎을 전환점임을 깨닫습니다.", "unlock": "G15"},
    {"id": "rule_G16", "cards": ["G02", "G15"], "result": "사라의 안전과 사라의 강연의 중요성을 통해 사라를 강연장으로 데려가 강연을 시작하도록 지시합니다.", "unlock": "G16"},
    {"id": "rule_G18", "cards": ["G17", "G15"], "result": "마지막 요원과의 대치와 사라의 강연의 중요성을 통해 이진우 형사 팀이 진실을 지키기 위해 싸울 준비가 되어 있음을 보여줍니다.", "unlock": "G18"}
  ],
  "fragments": [],
  "winCondition": "G18",
  "initialCards": ["G01", "G02", "G03"]
}
