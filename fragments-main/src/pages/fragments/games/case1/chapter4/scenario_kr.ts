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


export const caseCh4: GameScenario = {
  "id": "dark_fantasy_mystery_chapter4",
  "title": "챕터 4: 대면",
  "story": "모든 비밀이 잠들어 있는 원장실. 당신은 마침내 사건의 원흉과 마주합니다. 그의 입을 열어 범행의 모든 진실을 밝혀내고, 이 끔찍한 비극을 끝내야 합니다.",
  "victim": "대주교, 고아원 아이들",
  "suspects": [
    {
      "id": "D03",
      "name": "이단 심문관의 마지막 추궁",
      "role": "주인공",
      "description": "모든 증거를 종합하여 범인과 대면할 준비. 당신의 선택에 모든 것이 달려있다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D05",
      "name": "연금술사 발레리우스",
      "role": "범인",
      "description": "연구 일지에 적힌 저자. 고아원장이 바로 대주교 살해와 영혼 착취의 범인이었다.",
      "alibi": "자신은 아이들을 위한 연구를 했을 뿐이라고 주장한다.",
      "motive": "아이들의 영혼을 이용해 자신의 생명을 연장하고, 금지된 지식을 탐구하기 위함."
    },
    {
      "id": "D06",
      "name": "발레리우스와의 대면",
      "role": "범인",
      "description": "현장을 덮치자, 사라졌던 성배를 들고 있는 발레리우스와 마주친다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "D11",
      "name": "최후의 발악",
      "role": "범인",
      "description": "궁지에 몰린 발레리우스가 그림자를 폭주시켜 심문관을 공격한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "D02",
      "name": "공허한 아이들의 비밀",
      "description": "아이들의 영혼이 사라지는 이유를 밝혀내야 한다.",
      "details": "이것은 사건의 가장 비극적인 부분이자, 범인의 가장 큰 죄악이다.",
      "location": "D01"
    },
    {
      "id": "D04",
      "name": "비밀 연구 일지",
      "description": "원장실 책상에서 발견된, 금지된 연금술에 대한 기록.",
      "details": "영혼을 추출하고 조각내는 끔찍한 실험 내용이 상세히 적혀있다.",
      "location": "D01"
    },
    {
      "id": "D07",
      "name": "범행의 동기",
      "description": "그는 아이들의 영혼으로 자신의 생명을 연장하고 있었다.",
      "details": "영원한 젊음과 지식을 향한 뒤틀린 욕망이 모든 비극의 원인이었다.",
      "location": "D05"
    },
    {
      "id": "D08",
      "name": "대주교 살해의 이유",
      "description": "대주교가 그의 실험을 눈치채고 후원을 끊으려 했기 때문.",
      "details": "자신의 연구가 중단될 위기에 처하자, 대주교를 살해하고 그의 기억을 훔치려 했다.",
      "location": "D06"
    },
    {
      "id": "D09",
      "name": "그림자의 정체",
      "description": "발레리우스의 그림자는 그의 뒤틀린 영혼이 만들어낸 괴물.",
      "details": "수많은 영혼을 삼키며 자라난, 살아있는 흑마법 그 자체이다.",
      "location": "D05"
    },
    {
      "id": "D10",
      "name": "조각난 영혼",
      "description": "실험실에 보관된, 아이들에게서 추출한 영혼의 파편들.",
      "details": "발레리우스의 범행에 대한 반박할 수 없는 최종 증거.",
      "location": "D01"
    },
    {
      "id": "D12",
      "name": "사건의 종결",
      "description": "발레리우스를 제압하고, 그의 범행에 대한 모든 증거를 확보했다.",
      "details": "비극은 끝났지만, 도시의 상처는 깊게 남았다.",
      "location": "D01"
    }
  ],
  "locations": [
    {
      "id": "D01",
      "name": "잠입한 원장실",
      "description": "늦은 밤, 몰래 들어온 원장실. 약품 냄새가 진동한다.",
      "details": "책상 위에는 끔찍한 연구 일지가 놓여 있고, 한쪽 구석에는 비밀 실험실로 향하는 문이 있다."
    }
  ],
  "connectionRules": [
    {"id": "rule_D04", "cards": ["D01", "D02"], "result": "원장실을 수색하여, 아이들의 영혼이 사라지는 이유가 담긴 비밀 연구 일지를 발견합니다.", "unlock": "D04"},
    {"id": "rule_D05", "cards": ["D04", "D03"], "result": "연구 일지의 저자가 원장 '발레리우스'임을 확인하고, 그가 범인임을 확신합니다.", "unlock": "D05"},
    {"id": "rule_D06", "cards": ["D05", "D01"], "result": "결정적인 증거를 확보한 순간, 발레리우스가 원장실에 들어섭니다. 그의 손에는 사라졌던 성배가 들려 있습니다.", "unlock": "D06"},
    {"id": "rule_D07", "cards": ["D06", "D04"], "result": "발레리우스를 추궁하여, 그가 영원한 생명을 위해 아이들의 영혼을 착취했다는 동기를 자백받습니다.", "unlock": "D07"},
    {"id": "rule_D08", "cards": ["D07", "D05"], "result": "계속된 추궁 끝에, 자신의 실험을 눈치챈 대주교를 살해했다는 사실까지 밝혀집니다.", "unlock": "D08"},
    {"id": "rule_D09", "cards": ["D08", "D02"], "result": "발레리우스의 뒤틀린 영혼과 아이들의 희생으로 만들어진 '새 지저귀는 그림자'의 정체를 파악합니다.", "unlock": "D09"},
    {"id": "rule_D10", "cards": ["D09", "D04"], "result": "비밀 실험실에서, 그의 범행에 대한 반박 불가한 증거인 '조각난 영혼'들을 발견합니다.", "unlock": "D10"},
    {"id": "rule_D11", "cards": ["D10", "D06"], "result": "모든 것이 드러나자, 발레리우스가 최후의 발악으로 그림자를 폭주시켜 당신을 공격합니다.", "unlock": "D11"},
    {"id": "rule_D12", "cards": ["D10", "D11"], "result": "치열한 싸움 끝에 그림자를 소멸시키고 발레리우스를 제압하여, 마침내 이 끔찍한 사건을 종결짓습니다.", "unlock": "D12"}
  ],
  "fragments": [],
  "winCondition": "D12",
  "initialCards": ["D01", "D02", "D03"]
}