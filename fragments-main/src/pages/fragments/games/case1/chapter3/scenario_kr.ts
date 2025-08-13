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


export const caseCh3: GameScenario = {
  "id": "dark_fantasy_mystery_chapter3",
  "title": "챕터 3: 정보와 진실",
  "story": "정보상이 지목한 '잿빛 고아원'. 그곳에 잠입하여 소문의 근원을 직접 확인해야 합니다. 당신의 눈앞에 펼쳐지는 것은 충격적인 진실의 일부입니다.",
  "victim": "고아원 아이들",
  "suspects": [
    {
      "id": "C03",
      "name": "이단 심문관의 협상 기술",
      "role": "주인공",
      "description": "정보상을 상대하고, 고아원의 비밀을 파헤치기 위한 당신의 능력.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C04",
      "name": "침묵의 사서",
      "role": "조력자",
      "description": "거미줄 골목의 악명 높은 정보상. 그의 정보는 언제나 진실이지만, 그만큼의 대가를 요구한다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "C10",
      "name": "고아원 잠입 계획",
      "role": "주인공",
      "description": "정체를 숨기고 고아원에 잠입하여 조사를 시작한다.",
      "alibi": "",
      "motive": ""
    }
  ],
  "evidence": [
    {
      "id": "C02",
      "name": "'새 지저귀는 그림자' 정보",
      "description": "이 소문의 진실을 반드시 알아내야 한다.",
      "details": "소문의 근원지를 파악하는 것이 이번 챕터의 가장 중요한 목표이다.",
      "location": "C01"
    },
    {
      "id": "C05",
      "name": "정보상의 거래",
      "description": "그는 쉽게 입을 열지 않는다. 대가가 필요하다.",
      "details": "정보의 가치만큼, 위험한 것을 요구할 것이다.",
      "location": "C04"
    },
    {
      "id": "C06",
      "name": "교단의 약점",
      "description": "심문관만이 아는 교단의 비밀. 정보상을 협박할 카드.",
      "details": "이 카드를 사용하는 것은 당신에게도 위험 부담이 따른다.",
      "location": "C03"
    },
    {
      "id": "C07",
      "name": "정보상의 증언",
      "description": "\"그건 그림자가 아니야. 영혼이 조각나는 소리지.\"",
      "details": "소문의 본질이 초자연적인 현상임을 확신하게 되는 결정적인 증언.",
      "location": "C04"
    },
    {
      "id": "C09",
      "name": "고아원의 평판",
      "description": "겉보기엔 평범한 고아원이지만, 아이들이 자주 바뀐다는 소문.",
      "details": "외부에 알려진 것과 내부의 실상은 다를 수 있다.",
      "location": "C08"
    },
    {
      "id": "C11",
      "name": "공허한 아이들",
      "description": "고아원의 아이들은 하나같이 영혼이 없는 인형 같다.",
      "details": "정보상의 증언대로, 아이들의 영혼이 조각나고 있다는 강력한 증거.",
      "location": "C08"
    }
  ],
  "locations": [
    {
      "id": "C01",
      "name": "거미줄 골목 잠입",
      "description": "정보상을 만나기 위해 위험한 뒷골목으로 들어선다.",
      "details": "어둠 속에서 누군가 당신을 지켜보고 있을지 모른다."
    },
    {
      "id": "C08",
      "name": "잿빛 고아원",
      "description": "정보상이 지목한 소문의 근원지.",
      "details": "겉으로는 평온해 보이지만, 내부는 불길한 침묵만이 감돈다."
    },
    {
      "id": "C12",
      "name": "원장실",
      "description": "고아원의 가장 깊숙한 곳. 모든 비밀이 숨겨져 있을 장소.",
      "details": "문틈으로 기이한 약품 냄새와 희미한 신음소리가 새어 나온다."
    }
  ],
  "connectionRules": [
    {"id": "rule_C04", "cards": ["C01", "C03"], "result": "당신은 심문관의 기술을 이용해, 거미줄 골목의 어둠 속에서 정보상, 침묵의 사서를 찾아냅니다.", "unlock": "C04"},
    {"id": "rule_C05", "cards": ["C04", "C02"], "result": "침묵의 사서에게 소문에 대한 정보를 요구하자, 그는 의미심장한 미소를 지으며 거래를 제안합니다.", "unlock": "C05"},
    {"id": "rule_C06", "cards": ["C05", "C03"], "result": "거래 조건이 까다롭자, 당신만이 아는 교단의 약점을 이용해 정보상을 압박하는 데 성공합니다.", "unlock": "C06"},
    {"id": "rule_C07", "cards": ["C05", "C06"], "result": "거래와 협박 끝에, 마침내 정보상이 소문의 본질에 대한 충격적인 증언을 털어놓습니다.", "unlock": "C07"},
    {"id": "rule_C08", "cards": ["C07", "C02"], "result": "정보상의 증언을 바탕으로, 소문의 근원지가 '잿빛 고아원'임을 특정하고 즉시 그곳으로 향합니다.", "unlock": "C08"},
    {"id": "rule_C09", "cards": ["C08", "C07"], "result": "고아원 주변을 탐문하며, 정보상의 증언대로 아이들이 자주 바뀐다는 좋지 않은 평판을 확인합니다.", "unlock": "C09"},
    {"id": "rule_C10", "cards": ["C09", "C03"], "result": "정면 돌파는 위험하다고 판단, 당신은 심문관의 기술을 이용해 고아원에 잠입할 계획을 세웁니다.", "unlock": "C10"},
    {"id": "rule_C11", "cards": ["C10", "C09"], "result": "고아원에 잠입하여 마주한 아이들의 모습은, 끔찍한 소문이 사실임을 증명하고 있습니다.", "unlock": "C11"},
    {"id": "rule_C12", "cards": ["C11", "C08"], "result": "이 모든 일의 원흉이 있을 곳, 원장실로 향합니다. 문틈으로 불길한 기운이 새어 나옵니다.", "unlock": "C12"}
  ],
  "fragments": [],
  "winCondition": "C12",
  "initialCards": ["C01", "C02", "C03"]
}