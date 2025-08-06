import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter1IntroData: ChapterIntroData = {
  caseId: 'case2',
  chapterNumber: 1,
  icon: '⏰',
  title: {
    kr: '시간의 흔적',
    en: 'Traces of Time'
  },
  subtitle: {
    kr: '미래의 경고',
    en: 'Future Warning'
  },
  story: {
    kr: '2042년 서울의 한 공원에서 평범한 회사원 김민준의 시신이 발견됩니다. 하지만 시신 옆에는 19세기 빅토리아 시대의 회중시계가 놓여 있었고, 몸에서는 현대의 무기로는 불가능한 과거 시대의 칼날 흔적이 발견됩니다. 베테랑 형사 이진우는 이 기묘한 사건을 수사하던 중, 미래에서 온 경고 메시지를 발견하게 됩니다. "다음 희생자는... 너다." 시간을 넘나드는 연쇄 살인의 시작, 그리고 \'크로노스\'라 불리는 정체불명의 존재와의 첫 번째 대면이 시작됩니다.',
    en: 'In a Seoul park in 2042, the body of an ordinary office worker, Kim Min-jun, is discovered. However, a 19th-century Victorian pocket watch was found next to the body, and traces of a past-era blade impossible with modern weapons were found on the corpse. Veteran detective Lee Jin-woo discovers a warning message from the future while investigating this bizarre case. "Next victim is... you." The beginning of time-crossing serial murders, and the first encounter with the mysterious entity called \'Chronos\' begins.'
  },
  keyCharacters: [
    {
      kr: '이진우 형사 - 베테랑 수사관',
      en: 'Detective Lee Jin-woo - Veteran investigator'
    },
    {
      kr: '박준영 형사 - 수사팀 막내',
      en: 'Detective Park Jun-young - Team\'s youngest'
    },
    {
      kr: '앨리스터 핀치 교수 - 시간 역학 이론가',
      en: 'Professor Alistair Finch - Time dynamics theorist'
    }
  ],
  keyEvidence: [
    {
      kr: '19세기 회중시계',
      en: '19th-century pocket watch'
    },
    {
      kr: '과거 시대의 칼날 흔적',
      en: 'Past-era blade marks'
    },
    {
      kr: '미래에서 온 경고 메시지',
      en: 'Warning message from future'
    }
  ],
  goal: {
    kr: '크로노스의 정체를 파악하고, 시간 여행 살인의 진실을 밝혀내세요!',
    en: 'Identify Chronos and uncover the truth behind the time-travel murders!'
  },
  gameLink: '/fragments/case2/chapter1/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    secondaryGradient: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#9d4edd',
    accentSecondary: '#7209b7',
    navigationBg: 'rgba(0, 0, 0, 0.3)',
    cardBackground: 'rgba(157, 78, 221, 0.1)',
    cardBorder: 'rgba(157, 78, 221, 0.3)',
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cardShadowHover: '0 8px 16px rgba(157, 78, 221, 0.4)',
    buttonPrimary: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    suspectCard: 'rgba(157, 78, 221, 0.15)',
    evidenceCard: 'rgba(157, 78, 221, 0.15)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
};