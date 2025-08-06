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


export const caseCh2: GameScenario = {
  "id": "dark_fantasy_mystery_chapter2",
  "title": "챕터 2: 마지막 발자취",
  "story": "대주교가 남긴 비밀 연구의 흔적을 따라, 도시의 가장 낮은 곳으로 향합니다. 그곳에서 당신은 기이한 소문과 마주하게 됩니다.",
  "victim": "대주교",
  "suspects": [
    {
      "id": "B03",
      "name": "이단 심문관의 추리",
      "role": "주인공",
      "description": "'빈민가의 기적'이 사건의 핵심 단서임을 직감하고, 대주교의 마지막 행적을 쫓는다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B06",
      "name": "구호소 관리인",
      "role": "증인",
      "description": "대주교가 어떤 사내에 대해 묻고 다녔다는 사실을 알려주는, 세상사에 닳고 닳은 관리인.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "B09",
      "name": "정보상의 필요성",
      "role": "조력자",
      "description": "이런 종류의 소문은 공식적인 기록에 존재하지 않기에, 뒷골목의 전문가가 필요하다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "B01",
      "name": "대주교의 비밀 연구",
      "description": "대주교가 '빈민가의 기적'이라 불리는 현상을 조사했다.",
      "details": "연구 기록은 암호로 되어 있어, 현장에서 직접 단서를 찾아야만 해석할 수 있다.",
      "location": ""
    },
    {
      "id": "B02",
      "name": "사라진 성배의 행방",
      "description": "범인은 성배를 통해 대주교의 기억을 훔치려 한다.",
      "details": "범인이 기억을 보기 전에, 대주교가 무엇을 봤는지 먼저 알아내야 한다.",
      "location": ""
    },
    {
      "id": "B07",
      "name": "'새 지저귀는 그림자' 소문",
      "description": "관리인이 전해준 기괴한 소문. 대주교가 추적하던 대상.",
      "details": "그림자에서 새소리가 들린다는, 상식적으로 이해할 수 없는 현상.",
      "location": "B05"
    },
    {
      "id": "B08",
      "name": "소문의 공포",
      "description": "그 그림자를 본 사람들은 하나같이 영혼이 병든다고 한다.",
      "details": "이는 단순한 소문이 아닌, 초자연적인 공격일 가능성을 시사한다.",
      "location": "B04"
    },
    {
      "id": "B11",
      "name": "정보 거래",
      "description": "거미줄 골목에서는 돈이나 비밀로 정보를 살 수 있다.",
      "details": "심문관은 이 거래를 성공시켜야만 다음 단계로 나아갈 수 있다.",
      "location": "B10"
    },
    {
      "id": "B12",
      "name": "소문의 근원지",
      "description": "정보는 소문이 '잿빛 고아원'과 관련 있음을 암시한다.",
      "details": "이제 추적의 최종 목적지가 정해졌다.",
      "location": "B10"
    }
  ],
  "locations": [
    {
      "id": "B04",
      "name": "빈민가",
      "description": "대주교가 마지막으로 향했던, 가난과 질병이 만연한 곳.",
      "details": "교단의 손길이 미치지 않는, 도시의 어두운 이면."
    },
    {
      "id": "B05",
      "name": "구호소",
      "description": "빈민가 중심에 있는 구호소. 대주교가 자주 방문했다.",
      "details": "이곳의 사람들은 경계심이 강해, 쉽게 입을 열지 않는다."
    },
    {
      "id": "B10",
      "name": "거미줄 골목",
      "description": "도시의 모든 비밀 정보가 거래되는 어둡고 위험한 뒷골목.",
      "details": "한번 들어가면 무사히 나오기 힘든 곳으로 악명이 높다."
    }
  ],
  "connectionRules": [
    {"id": "rule_B04", "cards": ["B01", "B03"], "result": "비밀 연구와 당신의 추리를 연결하여, 대주교의 마지막 행선지인 빈민가로 향합니다.", "unlock": "B04"},
    {"id": "rule_B05", "cards": ["B04", "B01"], "result": "빈민가에서 대주교의 연구에 대한 흔적을 찾던 중, 그가 자주 들렀다는 구호소를 발견합니다.", "unlock": "B05"},
    {"id": "rule_B06", "cards": ["B05", "B03"], "result": "구호소에서 심문관의 신분을 밝히고 탐문하자, 관리인이 조심스럽게 입을 엽니다.", "unlock": "B06"},
    {"id": "rule_B07", "cards": ["B06", "B01"], "result": "관리인의 증언과 대주교의 연구 내용을 통해, 그가 '새 지저귀는 그림자'라는 기괴한 소문을 쫓고 있었음을 알게 됩니다.", "unlock": "B07"},
    {"id": "rule_B08", "cards": ["B07", "B04"], "result": "소문에 대해 빈민가에서 더 깊이 조사하자, 그 소문이 단순한 이야기가 아닌 실체적인 공포임을 깨닫습니다.", "unlock": "B08"},
    {"id": "rule_B09", "cards": ["B07", "B03"], "result": "이해할 수 없는 소문의 정체를 파헤치기 위해, 뒷골목 정보상의 도움이 필요하다고 판단합니다.", "unlock": "B09"},
    {"id": "rule_B10", "cards": ["B09", "B04"], "result": "정보상을 찾기 위해, 빈민가와 연결된 가장 어두운 곳, 거미줄 골목으로 향합니다.", "unlock": "B10"},
    {"id": "rule_B11", "cards": ["B10", "B09"], "result": "거미줄 골목에서 정보 거래의 규칙을 파악하고, 만남을 준비합니다.", "unlock": "B11"},
    {"id": "rule_B12", "cards": ["B11", "B07"], "result": "마침내 만난 정보상에게 소문에 대한 정보를 요구하자, 그는 '잿빛 고아원'이라는 장소를 지목합니다.", "unlock": "B12"}
  ],
  "fragments": [],
  "winCondition": "B12",
  "initialCards": ["B01", "B02", "B03"]
}