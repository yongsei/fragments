import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter1IntroData: ChapterIntroData = {
  caseId: 'case1',
  chapterNumber: 1,
  icon: '⛪',
  title: {
    kr: '챕터 1: 어둠의 대성당',
    en: 'Chapter 1: Dark Cathedral'
  },
  subtitle: {
    kr: '어둠의 대성당',
    en: 'Dark Cathedral'
  },
  story: {
    kr: '수백 년의 역사를 간직한 고딕 대성당에서 불가능한 일이 벌어졌습니다. 모든 문이 잠긴 채로 발견된 성당 내부에서 신부가 살해당한 것입니다. 하지만 더욱 기이한 것은 범행 현장에 남겨진 고대 라틴어 메시지였습니다. "Veritas in tenebris" - 어둠 속의 진실. 수사관 김다크는 이 밀실 살인의 비밀을 풀어야 합니다. 성당의 어둠 속에 숨겨진 진실을 찾아서.',
    en: 'The impossible has happened in a Gothic cathedral with hundreds of years of history. A priest was murdered inside the cathedral, found with all doors locked. But even more bizarre was the ancient Latin message left at the crime scene: "Veritas in tenebris" - Truth in darkness. Investigator Kim Dark must solve the mystery of this locked-room murder. Searching for the truth hidden in the darkness of the cathedral.'
  },
  keyCharacters: [
    {
      kr: '김다크 수사관 - 밀실 살인 전문가',
      en: 'Investigator Kim Dark - Locked-room murder specialist'
    },
    {
      kr: '레오 신부 - 대성당 주임 신부',
      en: 'Father Leo - Head priest of the cathedral'
    },
    {
      kr: '마리아 수녀 - 성당 관리인',
      en: 'Sister Maria - Cathedral caretaker'
    }
  ],
  keyEvidence: [
    {
      kr: '라틴어 메시지',
      en: 'Latin message'
    },
    {
      kr: '잠긴 모든 문들',
      en: 'All locked doors'
    },
    {
      kr: '고대 성물',
      en: 'Ancient relic'
    }
  ],
  goal: {
    kr: '대성당 밀실 살인의 비밀을 풀고, 어둠 속의 진실을 밝혀내세요!',
    en: 'Solve the mystery of the cathedral locked-room murder and uncover the truth in darkness!'
  },
  gameLink: '/fragments/case1/chapter1/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
    secondaryGradient: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#9d4edd',
    accentSecondary: '#7209b7',
    navigationBg: 'rgba(0, 0, 0, 0.3)',
    cardBackground: 'rgba(157, 78, 221, 0.1)',
    cardBorder: 'rgba(157, 78, 221, 0.3)',
    cardShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    cardShadowHover: '0 12px 40px rgba(0, 0, 0, 0.5)',
    buttonPrimary: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    suspectCard: 'rgba(157, 78, 221, 0.15)',
    evidenceCard: 'rgba(114, 9, 183, 0.15)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
  }
};