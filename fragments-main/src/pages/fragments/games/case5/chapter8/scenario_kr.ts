
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


export const case5Ch8: GameScenario = {
  "id": "shadows_of_time_chapter8",
  "title": "챕터 8: 시간의 균형과 새로운 시작",
  "story": "크로노스를 완전히 제압하고, 사라의 강연을 성공시켜 시간의 균형을 되찾고 새로운 미래를 시작한다.",
  "victim": "인류 (크로노스의 위협으로부터 해방)",
  "suspects": [
    {
      "id": "H01",
      "name": "마지막 요원과의 대결",
      "role": "적대자",
      "description": "남은 크로노스 요원과의 최후의 대결.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "H12",
      "name": "사라의 감사",
      "role": "조력자",
      "description": "강연이 끝나자, 사라는 이진우에게 다가와 감사의 눈물을 흘린다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "H14",
      "name": "사라의 결연한 의지",
      "role": "조력자",
      "description": "데이터 칩을 받아 든 사라의 눈빛은 결연하다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "H02",
      "name": "사라의 강연 (진행)",
      "description": "제이콥이 사라를 강연장으로 데려가 강연이 시작된다.",
      "details": "사라는 단상 위에서 열정적으로 강연을 하고 있다.",
      "location": "H08"
    },
    {
      "id": "H03",
      "name": "앨리스터 핀치의 회중시계 (최종 무기)",
      "description": "1888년 런던의 시간 에너지를 담고 있는 회중시계.",
      "details": "크로노스 요원의 슈트에 과부하를 일으킬 수 있다.",
      "location": ""
    },
    {
      "id": "H04",
      "name": "시간 왜곡 에너지의 집중",
      "description": "마지막 요원이 모든 시간 왜곡 에너지를 끌어모아 거대한 파동을 일으킨다.",
      "details": "박물관 주변의 모든 것이 일그러지고, 사람들은 비명을 지르며 혼란에 빠진다.",
      "location": "H08"
    },
    {
      "id": "H05",
      "name": "회중시계의 일격",
      "description": "이진우가 회중시계를 요원의 슈트에 박아 넣어 과부하를 일으킨다.",
      "details": "회중시계에서 뿜어져 나온 시간 왜곡 에너지가 요원의 슈트를 집어삼킨다.",
      "location": "H01"
    },
    {
      "id": "H06",
      "name": "요원의 소멸",
      "description": "요원이 비명을 지르며 시간의 파동 속으로 사라진다.",
      "details": "그가 사라지자, 시간 왜곡 현상은 거짓말처럼 사라진다.",
      "location": "H01"
    },
    {
      "id": "H07",
      "name": "시간 왜곡 현상 소멸",
      "description": "요원이 사라지자, 시간 왜곡 현상이 거짓말처럼 사라진다.",
      "details": "박물관 주변은 다시 평온을 되찾는다.",
      "location": "H08"
    },
    {
      "id": "H09",
      "name": "사라의 열정적인 강연",
      "description": "사라는 단상 위에서 확신에 차 열정적으로 강연을 하고 있다.",
      "details": "그녀의 목소리는 확신에 차 있었고, 그녀의 눈빛은 미래를 향하고 있었다.",
      "location": "H08"
    },
    {
      "id": "H10",
      "name": "인류의 새로운 가능성",
      "description": "사라의 강연이 인류 스스로 만들어나갈 수 있는 무한한 가능성을 제시한다.",
      "details": "시간은 고정된 것이 아니라, 우리의 선택에 따라 변화하는 가능성의 흐름이다.",
      "location": "H08"
    },
    {
      "id": "H11",
      "name": "크로노스의 계획 좌절",
      "description": "사라의 강연이 크로노스의 '최적화된 미래'를 뒤엎는 전환점이 된다.",
      "details": "인류의 인식을 변화시켰다.",
      "location": "H08"
    },
    {
      "id": "H13",
      "name": "김민준의 데이터 칩",
      "description": "이진우가 김민준의 손에서 발견했던 데이터 칩을 사라에게 건넨다.",
      "details": "크로노스 프로토콜의 상세한 내용과 김민준의 마지막 기록.",
      "location": "H08"
    },
    {
      "id": "H15",
      "name": "회중시계의 상징",
      "description": "낡은 회중시계가 미래를 바꾼 용기의 상징이 된다.",
      "details": "더 이상 과거의 상처가 아니다.",
      "location": ""
    },
    {
      "id": "H18",
      "name": "시간의 그림자 소멸",
      "description": "인류는 스스로의 선택으로 미래를 만들어나갈 새로운 길을 걷게 된다.",
      "details": "시간의 그림자는 완전히 걷혔다.",
      "location": "H17"
    }
  ],
  "locations": [
    {
      "id": "H08",
      "name": "박물관의 평온",
      "description": "시간 왜곡 현상이 사라지고, 박물관 주변은 다시 평온을 되찾는다.",
      "details": "강연장 안에서 우레와 같은 박수 소리가 터져 나온다."
    },
    {
      "id": "H16",
      "name": "2042년 서울로의 귀환",
      "description": "이진우 형사 팀이 2042년 서울로 돌아온다.",
      "details": "김민준의 연구실은 여전히 그 자리에 있다."
    },
    {
      "id": "H17",
      "name": "시간의 수호자들의 시작",
      "description": "김민준의 연구실이 시간의 수호자들이 모여 미래를 만들어나갈 새로운 시작점이 된다.",
      "details": "단순한 연구실이 아니다."
    }
  ],
  "connectionRules": [
    {"id": "rule_H04", "cards": ["H01", "H03"], "result": "마지막 요원과의 대결과 앨리스터 핀치의 회중시계를 통해 마지막 요원이 모든 시간 왜곡 에너지를 끌어모아 거대한 파동을 일으키는 것을 목격합니다.", "unlock": "H04"},
    {"id": "rule_H05", "cards": ["H04", "H03"], "result": "시간 왜곡 에너지의 집중과 앨리스터 핀치의 회중시계를 통해 이진우가 회중시계를 요원의 슈트에 박아 넣어 과부하를 일으키는 것을 목격합니다.", "unlock": "H05"},
    {"id": "rule_H06", "cards": ["H05", "H01"], "result": "회중시계의 일격과 마지막 요원과의 대결을 통해 요원이 비명을 지르며 시간의 파동 속으로 사라지는 것을 목격합니다.", "unlock": "H06"},
    {"id": "rule_H07", "cards": ["H06", "H04"], "result": "요원의 소멸과 시간 왜곡 에너지의 집중을 통해 시간 왜곡 현상이 거짓말처럼 사라지는 것을 확인합니다.", "unlock": "H07"},
    {"id": "rule_H08", "cards": ["H07", "H02"], "result": "시간 왜곡 현상 소멸과 사라의 강연 진행을 통해 박물관 주변이 다시 평온을 되찾는 것을 확인합니다.", "unlock": "H08"},
    {"id": "rule_H09", "cards": ["H02", "H08"], "result": "사라의 강연 진행과 박물관의 평온을 통해 사라가 단상 위에서 확신에 차 열정적으로 강연을 하고 있음을 확인합니다.", "unlock": "H09"},
    {"id": "rule_H10", "cards": ["H09", "H07"], "result": "사라의 열정적인 강연과 시간 왜곡 현상 소멸을 통해 사라의 강연이 인류 스스로 만들어나갈 수 있는 무한한 가능성을 제시함을 파악합니다.", "unlock": "H10"},
    {"id": "rule_H11", "cards": ["H10", "H06"], "result": "인류의 새로운 가능성과 요원의 소멸을 통해 사라의 강연이 크로노스의 '최적화된 미래'를 뒤엎는 전환점이 됨을 파악합니다.", "unlock": "H11"},
    {"id": "rule_H12", "cards": ["H09", "H11"], "result": "사라의 열정적인 강연과 크로노스의 계획 좌절을 통해 강연이 끝나자, 사라가 이진우에게 다가와 감사의 눈물을 흘리는 것을 목격합니다.", "unlock": "H12"},
    {"id": "rule_H13", "cards": ["H12", "H03"], "result": "사라의 감사와 앨리스터 핀치의 회중시계를 통해 이진우가 김민준의 손에서 발견했던 데이터 칩을 사라에게 건네는 것을 목격합니다.", "unlock": "H13"},
    {"id": "rule_H14", "cards": ["H13", "H12"], "result": "김민준의 데이터 칩과 사라의 감사를 통해 데이터 칩을 받아 든 사라의 눈빛이 결연함을 확인합니다.", "unlock": "H14"},
    {"id": "rule_H15", "cards": ["H03", "H14"], "result": "앨리스터 핀치의 회중시계와 사라의 결연한 의지를 통해 낡은 회중시계가 미래를 바꾼 용기의 상징이 됨을 깨닫습니다.", "unlock": "H15"},
    {"id": "rule_H16", "cards": ["H01", "H15"], "result": "마지막 요원과의 대결과 회중시계의 상징을 통해 이진우 형사 팀이 2042년 서울로 돌아오는 것을 목격합니다.", "unlock": "H16"},
    {"id": "rule_H17", "cards": ["H16", "H14"], "result": "2042년 서울로의 귀환과 사라의 결연한 의지를 통해 김민준의 연구실이 시간의 수호자들이 모여 미래를 만들어나갈 새로운 시작점이 됨을 확인합니다.", "unlock": "H17"},
    {"id": "rule_H18", "cards": ["H17", "H15"], "result": "시간의 수호자들의 시작과 회중시계의 상징을 통해 인류는 스스로의 선택으로 미래를 만들어나갈 새로운 길을 걷게 됨을 확인합니다.", "unlock": "H18"}
  ],
  "fragments": [],
  "winCondition": "H18",
  "initialCards": ["H01", "H02", "H03"]
}
