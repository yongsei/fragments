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


export const case3Ch1: GameScenario = {
  "id": "orient_express_chapter1",
  "title": "챕터 1: 밀실의 역설과 첫 번째 심문",
  "story": "눈보라 속 고립된 열차 안, 완벽한 밀실에서 금융 재벌 볼코프가 살해당했다. 헤이스팅스 경은 현장을 조사하고 기본적인 단서들을 확보한 후, 가장 의심스러운 용의자들부터 차례로 만나게 된다.",
  "victim": "알렉산더 볼코프",
  "suspects": [
    {
      "id": "A01",
      "name": "아서 헤이스팅스 경",
      "role": "수사관",
      "description": "은퇴한 스코틀랜드 야드 수사관. 우연히 열차에 탑승했으나 사건 해결에 나선다.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A07",
      "name": "엘레나 드 발루아 백작부인",
      "role": "용의자",
      "description": "몰락한 프랑스 귀족 가문의 마지막 후예. 볼코프에게 거액의 빚을 지고 있어 가장 명백한 동기를 가진다.",
      "alibi": "사건 시각 침실에 있었다고 주장.",
      "motive": "가문의 영지를 담보로 한 거액의 빚."
    },
    {
      "id": "A08",
      "name": "닥터 한스 슈미트",
      "role": "용의자",
      "description": "저명한 독일의 심리학자. 볼코프의 정신 건강을 상담하기 위해 동승했다고 하지만 의심스럽다.",
      "alibi": "사건 시각 침실에서 연구 논문을 읽고 있었다고 주장.",
      "motive": "아직 불명확하지만 뭔가 숨기고 있다."
    },
    {
      "id": "A09",
      "name": "사무엘 골드버그",
      "role": "용의자",
      "description": "볼코프의 오랜 사업 파트너이자 경쟁자. 최근 볼코프에게 큰 손실을 입어 원한이 깊다.",
      "alibi": "사건 시각 침실에서 잠을 자고 있었다고 주장.",
      "motive": "사업적 손실과 배신감."
    },
    {
      "id": "A10",
      "name": "마리아 이바노바",
      "role": "용의자",
      "description": "볼코프의 개인 비서. 그의 모든 비밀을 알고 있어 위험한 존재이기도 하다.",
      "alibi": "사건 시각 사장 침실 옆 자신의 침실에 있었으며, 비명 소리를 듣고 가장 먼저 달려갔다고 주장.",
      "motive": "볼코프의 비밀을 알고 있어 복잡한 관계."
    },
    {
      "id": "A11",
      "name": "대령 존 스미스",
      "role": "용의자",
      "description": "은퇴한 영국군 장교. 볼코프와 과거 식민지 사업에서 악연이 있어 오래된 원한을 품고 있다.",
      "alibi": "사건 시각 침실에서 잠을 자고 있었다고 주장.",
      "motive": "과거 식민지 사업에서의 악연과 원한."
    }
  ],
  "evidence": [
    {
      "id": "A03",
      "name": "알렉산더 볼코프의 시신",
      "description": "가슴에 단검이 박힌 채 발견된 싸늘한 시신.",
      "details": "얼굴에는 극심한 공포의 흔적이 역력하다.",
      "location": "A02"
    },
    {
      "id": "A04",
      "name": "살인에 사용된 단검",
      "description": "볼코프의 가슴에 박혀 있던 단검.",
      "details": "손잡이에 희미한 문양이 새겨져 있다.",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "반쯤 타다 만 편지 조각",
      "description": "재떨이에서 발견된, '복수'를 암시하는 문구가 적힌 편지 조각.",
      "details": "\"...복수...결코 잊지 않으리...\"라는 단편적인 문구만 남아있다.",
      "location": "A02"
    },
    {
      "id": "A06",
      "name": "침실 문 안쪽의 흠집",
      "description": "문고리 근처에 생긴, 누군가 안에서 긁어낸 듯한 작은 흔적.",
      "details": "밀실 트릭의 단서가 될 수 있다.",
      "location": "A02"
    },
    {
      "id": "A12",
      "name": "용의자들의 알리바이",
      "description": "5명의 용의자들이 사건 시각에 대해 진술한 내용.",
      "details": "모두 완벽해 보이지만, 어딘가 석연치 않다.",
      "location": ""
    }
  ],
  "locations": [
    {
      "id": "A02",
      "name": "볼코프의 침실",
      "description": "악명 높은 금융 재벌 알렉산더 볼코프가 살해당한 밀실.",
      "details": "창문은 굳게 닫혀 있었고, 문은 안에서 잠겨 있었다."
    }
  ],
  "connectionRules": [
    { "id": "rule_A04", "cards": ["A02", "A03"], "result": "볼코프의 침실에서 시신을 면밀히 조사한 결과, 가슴에 꽂힌 살인 무기인 단검을 발견합니다.", "unlock": "A04" },
    { "id": "rule_A05", "cards": ["A01", "A04"], "result": "헤이스팅스 경이 단검의 특징을 관찰하며 침실을 재조사하여, 재떨이에서 반쯤 타다 만 편지 조각을 발견합니다.", "unlock": "A05" },
    { "id": "rule_A06", "cards": ["A02", "A05"], "result": "볼코프의 침실과 편지 조각을 연결하여, 문 안쪽의 흠집이 밀실 트릭의 단서임을 파악합니다.", "unlock": "A06" },
    { "id": "rule_A07", "cards": ["A01", "A06"], "result": "헤이스팅스 경이 밀실의 단서를 바탕으로 가장 명백한 동기를 가진 엘레나 드 발루아 백작부인을 찾아냅니다.", "unlock": "A07" },
    { "id": "rule_A08", "cards": ["A04", "A07"], "result": "단검의 정교함과 백작부인의 증언을 통해 전문적 지식을 가진 닥터 한스 슈미트를 만납니다.", "unlock": "A08" },
    { "id": "rule_A09", "cards": ["A05", "A08"], "result": "편지 조각의 복수 암시와 닥터의 정보를 통해 볼코프의 사업 파트너 사무엘 골드버그를 찾습니다.", "unlock": "A09" },
    { "id": "rule_A10", "cards": ["A06", "A09"], "result": "밀실 트릭의 단서와 골드버그의 증언을 통해 볼코프의 개인 비서 마리아 이바노바를 만납니다.", "unlock": "A10" },
    { "id": "rule_A11", "cards": ["A07", "A10"], "result": "백작부인과 마리아의 증언을 통해 과거 악연을 가진 존 스미스 대령을 찾습니다.", "unlock": "A11" },
    { "id": "rule_A12", "cards": ["A08", "A11"], "result": "닥터 슈미트와 스미스 대령의 증언을 종합하여, 모든 용의자들의 기본 알리바이를 확보합니다.", "unlock": "A12" }
  ],
  "fragments": [],
  "winCondition": "A12",
  "initialCards": ["A01", "A02", "A03"]
}