
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


export const case5Ch6: GameScenario = {
  "id": "shadows_of_time_chapter6",
  "title": "챕터 6: 시간의 되감기와 사라의 강연",
  "story": "'시간의 되감기'를 통해 사라의 강연이 시작되기 전으로 돌아가, 크로노스의 개입을 막는다.",
  "victim": "사라 (잠재적 희생자)",
  "suspects": [
    {
      "id": "F01",
      "name": "시간의 되감기 (이론)",
      "role": "개념",
      "description": "특정 시간 지점의 시간선을 일시적으로 재설정하는 개념.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "F02",
      "name": "사라의 장미 (촉매)",
      "description": "시간의 메아리를 증폭시켜 시간 터널 생성에 필요한 촉매.",
      "details": "장미의 에너지를 미완성 장치에 연결하여 활용할 수 있다.",
      "location": ""
    },
    {
      "id": "F03",
      "name": "미완성된 시간 이동 장치",
      "description": "장미의 에너지를 주입하여 시간 터널을 만들 장치.",
      "details": "김민준이 남긴 유일한 희망.",
      "location": ""
    },
    {
      "id": "F04",
      "name": "'시간의 닻' 시퀀스",
      "description": "장미의 에너지를 미완성 장치에 연결하여 시간 터널을 생성하는 시퀀스.",
      "details": "연구실의 모든 것이 뒤틀리고, 시간의 흐름이 역행하는 듯한 기묘한 감각.",
      "location": ""
    },
    {
      "id": "F05",
      "name": "강연 장소와 시간",
      "description": "사라의 강연이 열릴 예정이었던 뉴욕 미래 기술 박물관과 정확한 시간.",
      "details": "크로노스가 개입하기 직전의 시간.",
      "location": "F09"
    },
    {
      "id": "F06",
      "name": "시간 터널 생성",
      "description": "장치에서 강렬한 빛이 뿜어져 나오며 시간 터널이 생성된다.",
      "details": "연구실의 벽면이 일렁이기 시작하고, 공간이 왜곡된다.",
      "location": ""
    },
    {
      "id": "F07",
      "name": "시간 터널의 불안정성",
      "description": "연구실의 모든 것이 뒤틀리고, 시간의 흐름이 역행하는 듯한 기묘한 감각.",
      "details": "과거의 잔상들이 섬광처럼 스쳐 지나간다.",
      "location": ""
    },
    {
      "id": "F11",
      "name": "크로노스의 등장 (감지)",
      "description": "박물관 상공에서 희미한 시간 왜곡 현상이 감지된다.",
      "details": "크로노스가 사라를 제거하기 위해 시간을 조작하려 하고 있다.",
      "location": "F08"
    },
    {
      "id": "F12",
      "name": "시간 왜곡 현상 분석",
      "description": "리아가 태블릿으로 크로노스의 시간 왜곡 패턴을 분석한다.",
      "details": "크로노스의 위치와 약점을 파악한다.",
      "location": ""
    },
    {
      "id": "F13",
      "name": "크로노스의 위치 파악",
      "description": "시간 왜곡의 중심이 박물관 상공 500미터 지점임을 확인.",
      "details": "그들이 낙하하고 있다.",
      "location": "F08"
    },
    {
      "id": "F14",
      "name": "크로노스의 낙하",
      "description": "검은색 슈트를 입은 세 명의 인물이 공중에서 하강한다.",
      "details": "그들의 슈트에는 작은 톱니바퀴 문양이 새겨져 있다.",
      "location": "F08"
    },
    {
      "id": "F15",
      "name": "크로노스 요원의 슈트",
      "description": "시간 왜곡 에너지를 증폭시키는 기능을 가진 검은색 슈트.",
      "details": "시간 왜곡 에너지를 직접 사용하여 움직임을 가속화하거나 둔화시킨다.",
      "location": "F14"
    },
    {
      "id": "F17",
      "name": "시간 왜곡 공격 (초기)",
      "description": "크로노스 요원들이 시간 왜곡 에너지를 사용하여 공격한다.",
      "details": "박물관 입구의 홀로그램 간판이 산산조각 난다.",
      "location": "F08"
    },
    {
      "id": "F18",
      "name": "이진우의 결심 (대응)",
      "description": "시간의 그림자에 맞설 준비가 되어 있음을 보여준다.",
      "details": "사라를 보호하고 강연을 지키기 위한 결심.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "F08",
      "name": "2122년 뉴욕 도착 (강연 전)",
      "description": "시간 이동에 성공하여 도착한, 활기 넘치는 미래의 뉴욕.",
      "details": "거대한 홀로그램 광고판이 화려하게 빛나고, 공중을 떠다니는 차량들이 바쁘게 움직인다."
    },
    {
      "id": "F09",
      "name": "미래 기술 박물관",
      "description": "사라의 강연이 열릴 예정이었던 장소.",
      "details": "박물관 앞은 강연을 들으러 온 사람들로 북적였다."
    },
    {
      "id": "F10",
      "name": "사라의 모습",
      "description": "강연장 입구에서 사람들과 이야기 나누는, 슬픔의 그림자가 드리워지지 않은 사라.",
      "details": "그녀의 얼굴에는 아직 슬픔의 그림자가 드리워지지 않았다."
    },
    {
      "id": "F16",
      "name": "사라 보호 지시",
      "description": "제이콥에게 사라를 보호하고 박물관 안으로 대피시키도록 지시한다.",
      "details": "크로노스의 공격으로부터 사라를 지키기 위한 긴급 조치.",
      "location": "F08"
    }
  ],
  "connectionRules": [
    {"id": "rule_F04", "cards": ["F01", "F02"], "result": "시간의 되감기 이론과 사라의 장미를 통해 '시간의 닻' 시퀀스를 준비합니다.", "unlock": "F04"},
    {"id": "rule_F05", "cards": ["F01", "F03"], "result": "시간의 되감기 이론과 미완성된 시간 이동 장치를 통해 사라의 강연 장소와 시간을 파악합니다.", "unlock": "F05"},
    {"id": "rule_F06", "cards": ["F04", "F03"], "result": "'시간의 닻' 시퀀스와 미완성된 시간 이동 장치를 통해 시간 터널이 생성됩니다.", "unlock": "F06"},
    {"id": "rule_F07", "cards": ["F06", "F01"], "result": "시간 터널 생성과 시간의 되감기 이론을 통해 시간 터널의 불안정성을 인지합니다.", "unlock": "F07"},
    {"id": "rule_F08", "cards": ["F06", "F05"], "result": "시간 터널 생성과 강연 장소 및 시간을 통해 2122년 뉴욕에 도착합니다.", "unlock": "F08"},
    {"id": "rule_F09", "cards": ["F08", "F05"], "result": "2122년 뉴욕 도착과 강연 장소 및 시간을 통해 미래 기술 박물관이 강연 장소임을 확인합니다.", "unlock": "F09"},
    {"id": "rule_F10", "cards": ["F08", "F09"], "result": "2122년 뉴욕 도착과 미래 기술 박물관을 통해 사라의 모습을 발견합니다.", "unlock": "F10"},
    {"id": "rule_F11", "cards": ["F08", "F10"], "result": "2122년 뉴욕 도착과 사라의 모습을 통해 박물관 상공에서 희미한 시간 왜곡 현상이 감지됩니다.", "unlock": "F11"},
    {"id": "rule_F12", "cards": ["F11", "F04"], "result": "크로노스의 등장 감지와 '시간의 닻' 시퀀스를 통해 리아가 태블릿으로 크로노스의 시간 왜곡 패턴을 분석합니다.", "unlock": "F12"},
    {"id": "rule_F13", "cards": ["F12", "F11"], "result": "시간 왜곡 현상 분석과 크로노스의 등장 감지를 통해 크로노스의 위치를 파악합니다.", "unlock": "F13"},
    {"id": "rule_F14", "cards": ["F13", "F11"], "result": "크로노스의 위치 파악과 크로노스의 등장 감지를 통해 검은색 슈트를 입은 세 명의 인물이 공중에서 하강하는 것을 목격합니다.", "unlock": "F14"},
    {"id": "rule_F15", "cards": ["F14", "F12"], "result": "크로노스의 낙하와 시간 왜곡 현상 분석을 통해 크로노스 요원의 슈트가 시간 왜곡 에너지를 증폭시키는 기능을 가졌음을 파악합니다.", "unlock": "F15"},
    {"id": "rule_F16", "cards": ["F10", "F14"], "result": "사라의 모습과 크로노스의 낙하를 통해 제이콥에게 사라를 보호하고 박물관 안으로 대피시키도록 지시합니다.", "unlock": "F16"},
    {"id": "rule_F17", "cards": ["F15", "F13"], "result": "크로노스 요원의 슈트와 크로노스의 위치 파악을 통해 요원들이 시간 왜곡 에너지를 사용하여 공격하는 것을 목격합니다.", "unlock": "F17"},
    {"id": "rule_F18", "cards": ["F16", "F17"], "result": "사라 보호 지시와 시간 왜곡 공격을 통해 이진우의 결심이 확고해집니다.", "unlock": "F18"}
  ],
  "fragments": [],
  "winCondition": "F18",
  "initialCards": ["F01", "F02", "F03"]
}
