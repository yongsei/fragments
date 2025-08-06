import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter2IntroData: ChapterIntroData = {
  caseId: 'case3',
  chapterNumber: 2,
  icon: '🔍',
  title: {
    kr: '용의자들의 어둠',
    en: 'Shadows of Suspects'
  },
  subtitle: {
    kr: '숨겨진 관계들',
    en: 'Hidden Relationships'
  },
  story: {
    kr: '열차에 탑승한 승객들 각자의 비밀이 드러나기 시작합니다. 미모의 백작부인 엘레나, 신경질적인 사업가 멕퀸, 수상한 미국인 래치트... 모든 승객이 볼코프와 연관된 어둠의 과거를 가지고 있습니다. 헤이스팅스 경은 하나씩 승객들을 심문하며 복잡하게 얽힌 인간관계의 실타래를 풀어나갑니다. 과연 누가 진짜 범인일까요?',
    en: 'The secrets of each passenger on the train begin to be revealed. The beautiful Countess Elena, the nervous businessman McQueen, the suspicious American Ratchett... Every passenger has a dark past connected to Volkov. Inspector Hastings interrogates the passengers one by one, unraveling the complex web of human relationships. Who is the real culprit?'
  },
  keyCharacters: [
    {
      kr: '백작부인 엘레나 - 미모의 귀족 여성',
      en: 'Countess Elena - Beautiful aristocratic woman'
    },
    {
      kr: '멕퀸 - 신경질적인 사업가',
      en: 'McQueen - Nervous businessman'
    },
    {
      kr: '래치트 - 수상한 미국인',
      en: 'Ratchett - Suspicious American'
    }
  ],
  keyEvidence: [
    {
      kr: '승객들의 과거 기록',
      en: 'Passengers\' past records'
    },
    {
      kr: '볼코프와의 금전 거래 내역',
      en: 'Financial transaction records with Volkov'
    },
    {
      kr: '각자의 동기와 원한',
      en: 'Individual motives and grudges'
    }
  ],
  goal: {
    kr: '열차 승객들의 비밀과 볼코프와의 숨겨진 관계를 파헤쳐 진짜 범인을 찾아보세요!',
    en: 'Uncover the passengers\' secrets and hidden relationships with Volkov to find the real culprit!'
  },
  gameLink: '/fragments/case3/chapter2/game',
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