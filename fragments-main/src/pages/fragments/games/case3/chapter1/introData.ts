import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter1IntroData: ChapterIntroData = {
  caseId: 'case3',
  chapterNumber: 1,
  icon: '🚂',
  title: {
    kr: '밀실의 역설',
    en: 'Locked Room Paradox'
  },
  subtitle: {
    kr: '첫 번째 심문',
    en: 'First Interrogation'
  },
  story: {
    kr: '눈보라가 몰아치는 밤, 오리엔트 특급 열차 안에서 금융 재벌 알렉산더 볼코프가 살해당했습니다. 완전히 잠긴 객실 안에서 발견된 시신, 그리고 불가능해 보이는 범행 수법. 은퇴한 수사관 헤이스팅스 경이 이 완벽한 밀실 살인사건의 수사를 시작합니다. 열차는 눈사태로 인해 고립되었고, 범인은 승객들 중 한 명입니다.',
    en: 'On a stormy night, financial tycoon Alexander Volkov was murdered on the Orient Express. A corpse found in a completely locked compartment, and an seemingly impossible method of murder. Retired investigator Inspector Hastings begins investigating this perfect locked-room murder case. The train is isolated due to an avalanche, and the perpetrator is one of the passengers.'
  },
  keyCharacters: [
    {
      kr: '헤이스팅스 경 - 은퇴한 베테랑 수사관',
      en: 'Inspector Hastings - Retired veteran investigator'
    },
    {
      kr: '알렉산더 볼코프 - 살해된 금융 재벌',
      en: 'Alexander Volkov - Murdered financial tycoon'
    },
    {
      kr: '차장 피에르 - 열차 승무원',
      en: 'Conductor Pierre - Train crew member'
    }
  ],
  keyEvidence: [
    {
      kr: '완전히 잠긴 객실',
      en: 'Completely locked compartment'
    },
    {
      kr: '볼코프의 시신과 상처',
      en: 'Volkov\'s corpse and wounds'
    },
    {
      kr: '승객들의 알리바이',
      en: 'Passengers\' alibis'
    }
  ],
  goal: {
    kr: '밀실에서 벌어진 불가능한 살인사건의 첫 단서들을 찾아 수사를 시작하세요!',
    en: 'Find the first clues of the impossible murder in the locked room and begin the investigation!'
  },
  gameLink: '/fragments/case3/chapter1/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #4a2c17 0%, #8b4513 30%, #d2691e 70%, #ffa07a 100%)',
    secondaryGradient: 'linear-gradient(135deg, #d2691e 0%, #8b4513 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#d2691e',
    accentSecondary: '#8b4513',
    navigationBg: 'rgba(139, 69, 19, 0.3)',
    cardBackground: 'rgba(139, 69, 19, 0.1)',
    cardBorder: 'rgba(139, 69, 19, 0.3)',
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cardShadowHover: '0 8px 16px rgba(139, 69, 19, 0.4)',
    buttonPrimary: 'linear-gradient(135deg, #d2691e 0%, #8b4513 100%)',
    suspectCard: 'rgba(139, 69, 19, 0.15)',
    evidenceCard: 'rgba(139, 69, 19, 0.15)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
};