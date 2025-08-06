import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter2IntroData: ChapterIntroData = {
  caseId: 'case5',
  chapterNumber: 2,
  icon: '🏛️',
  title: {
    kr: '1888년 런던',
    en: 'London 1888'
  },
  subtitle: {
    kr: '잭 더 리퍼',
    en: 'Jack the Ripper'
  },
  story: {
    kr: '빅토리아 시대 런던으로의 시간 여행이 시작됩니다. 1888년 화이트채플 지역의 안개 낀 거리에서 이진우는 잭 더 리퍼의 연쇄 살인 사건과 크로노스 사이의 연결고리를 찾아야 합니다. 가스등이 흔들리는 좁은 골목길, 마차가 지나가는 자갈길, 그리고 공포에 떨고 있는 사람들... 이 모든 것 뒤에 숨겨진 시간 여행자의 정체를 밝혀내야 합니다. 과연 잭 더 리퍼와 크로노스는 어떤 관계일까요?',
    en: 'Time travel to Victorian London begins. In the fog-covered streets of Whitechapel in 1888, Jin-woo must find the connection between Jack the Ripper\'s serial murders and Chronos. Narrow alleyways with flickering gas lamps, cobblestone streets with passing carriages, and people trembling in fear... The identity of the time traveler hidden behind all this must be revealed. What is the relationship between Jack the Ripper and Chronos?'
  },
  keyCharacters: [
    {
      kr: '이진우 형사 - 1888년 런던에 도착',
      en: 'Detective Lee Jin-woo - Arrived in 1888 London'
    },
    {
      kr: '인스펙터 애버라인 - 스코틀랜드 야드',
      en: 'Inspector Abberline - Scotland Yard'
    },
    {
      kr: '잭 더 리퍼 - 연쇄 살인마',
      en: 'Jack the Ripper - Serial killer'
    }
  ],
  keyEvidence: [
    {
      kr: '잭 더 리퍼의 범행 수법',
      en: 'Jack the Ripper\'s method'
    },
    {
      kr: '시간 여행의 흔적들',
      en: 'Traces of time travel'
    },
    {
      kr: '빅토리아 시대의 단서들',
      en: 'Victorian era clues'
    }
  ],
  goal: {
    kr: '1888년 런던에서 잭 더 리퍼와 크로노스의 연결고리를 찾아보세요!',
    en: 'Find the connection between Jack the Ripper and Chronos in 1888 London!'
  },
  gameLink: '/fragments/case5/chapter2/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #0f0f23 0%, #16213e 50%, #1a1a2e 100%)',
    secondaryGradient: 'linear-gradient(135deg, #bb86fc 0%, #6366f1 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#bb86fc',
    accentSecondary: '#6366f1',
    navigationBg: 'rgba(187, 134, 252, 0.3)',
    cardBackground: 'rgba(187, 134, 252, 0.1)',
    cardBorder: 'rgba(187, 134, 252, 0.3)',
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cardShadowHover: '0 8px 16px rgba(187, 134, 252, 0.4)',
    buttonPrimary: 'linear-gradient(135deg, #bb86fc 0%, #6366f1 100%)',
    suspectCard: 'rgba(187, 134, 252, 0.15)',
    evidenceCard: 'rgba(187, 134, 252, 0.15)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
};