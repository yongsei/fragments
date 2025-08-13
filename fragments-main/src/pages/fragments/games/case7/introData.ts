export interface IntroData {
  title: string;
  subtitle: string;
  description: string;
  setting: string;
  difficulty: number;
  chapters: number;
  theme: string;
  genre: string;
  estimatedTime: string;
  features: string[];
  warnings?: string[];
}

export const case7IntroKr: IntroData = {
  title: "케이스 7: 블랙우드 저택의 비밀",
  subtitle: "고딕 미스터리",
  description: "19세기 말 잉글랜드의 황무지에 위치한 블랙우드 저택에서 벌어진 의문의 죽음. 탐정이 되어 가문의 어두운 비밀과 복잡한 인간관계 속에서 진실을 밝혀내세요.",
  setting: "19세기 말 잉글랜드 북부 황무지",
  difficulty: 4,
  chapters: 5,
  theme: "고딕 미스터리",
  genre: "추리, 고딕 호러",
  estimatedTime: "90-120분",
  features: [
    "🏰 고딕 양식의 저택을 배경으로 한 클래식 미스터리",
    "👥 복잡한 가족 관계와 유산 상속 문제",
    "🔍 세밀한 현장 조사와 증거 수집",
    "👻 초자연적 요소가 가미된 스토리",
    "🎭 각기 다른 동기를 가진 용의자들"
  ],
  warnings: [
    "⚠️ 죽음과 관련된 내용이 포함되어 있습니다",
    "⚠️ 가족 간의 갈등과 배신이 주요 소재입니다"
  ]
};

export const case7IntroEn: IntroData = {
  title: "Case 7: Secrets of Blackwood Manor",
  subtitle: "Gothic Mystery",
  description: "A mysterious death at Blackwood Manor in the English moors of the late 19th century. Become a detective and uncover the truth hidden within the family's dark secrets and complex relationships.",
  setting: "Late 19th century English moors",
  difficulty: 4,
  chapters: 5,
  theme: "Gothic Mystery",
  genre: "Detective, Gothic Horror",
  estimatedTime: "90-120 minutes",
  features: [
    "🏰 Classic mystery set in a Gothic manor",
    "👥 Complex family relationships and inheritance issues",
    "🔍 Detailed crime scene investigation and evidence collection",
    "👻 Supernatural elements woven into the story",
    "🎭 Suspects with diverse motives"
  ],
  warnings: [
    "⚠️ Contains content related to death",
    "⚠️ Family conflicts and betrayal are major themes"
  ]
};