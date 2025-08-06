import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter5IntroData: ChapterIntroData = {
  caseId: 'case5',
  chapterNumber: 5,
  icon: '🌃',
  title: {
    kr: '황폐한 미래',
    en: 'Desolate Future'
  },
  subtitle: {
    kr: '잊혀진 영웅',
    en: 'Forgotten Heroes'
  },
  story: {
    kr: '2122년 뉴욕의 황폐한 미래를 목격하게 됩니다. 한때 번성했던 도시는 이제 폐허가 되었고, 거리에는 잊혀진 영웅들의 기념비만이 남아있습니다. 이곳에서 크로노스가 계획한 \'대정화\'의 결과를 확인하게 됩니다. 시간의 균형을 무너뜨린 대가로 인류 문명이 쇠락의 길을 걸었던 것입니다. 기념비에 새겨진 이름들 중에서 이진우 자신의 이름도 발견하게 되는데... 과연 이것이 운명인가, 아니면 바꿀 수 있는 미래인가요?',
    en: 'You witness the desolate future of New York in 2122. The once prosperous city is now in ruins, with only monuments to forgotten heroes remaining in the streets. Here you confirm the results of Chronos\' planned \'Great Purification\'. As a price for breaking the balance of time, human civilization walked the path of decline. Among the names carved on the monument, you discover Lee Jin-woo\'s own name... Is this fate, or a future that can be changed?'
  },
  keyCharacters: [
    {
      kr: '이진우 형사 - 자신의 운명을 마주한 자',
      en: 'Detective Lee Jin-woo - One who faced his own fate'
    },
    {
      kr: '잊혀진 영웅들 - 기념비 속 이름들',
      en: 'Forgotten Heroes - Names on the monument'
    },
    {
      kr: '황폐한 미래의 생존자들',
      en: 'Survivors of the desolate future'
    }
  ],
  keyEvidence: [
    {
      kr: '크로노스의 대정화 계획',
      en: 'Chronos\' Great Purification plan'
    },
    {
      kr: '황폐한 문명의 잔해',
      en: 'Remains of a desolate civilization'
    },
    {
      kr: '이진우 자신의 기념비',
      en: 'Jin-woo\'s own monument'
    }
  ],
  goal: {
    kr: '황폐한 미래에서 크로노스의 대정화를 확인하고 운명을 바꿀 방법을 찾아보세요!',
    en: 'Confirm Chronos\' Great Purification in the desolate future and find a way to change fate!'
  },
  gameLink: '/fragments/case5/chapter5/game',
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