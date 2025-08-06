import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter3IntroData: ChapterIntroData = {
  caseId: 'case3',
  chapterNumber: 3,
  icon: '⚖️',
  title: {
    kr: '정의의 심판',
    en: 'Justice\'s Judgment'
  },
  subtitle: {
    kr: '최종 추리',
    en: 'Final Deduction'
  },
  story: {
    kr: '모든 퍼즐 조각이 맞춰지는 순간입니다. 헤이스팅스 경은 마침내 오리엔트 특급 열차 살인사건의 놀라운 진실을 깨닫습니다. 완벽한 밀실에서 벌어진 불가능한 살인, 그 배후에는 예상치 못한 복수의 계획이 숨어있었습니다. 과연 정의는 승리할 수 있을까요? 눈보라가 그치고 열차가 다시 움직이기 전에, 마지막 진실이 밝혀집니다.',
    en: 'The moment when all puzzle pieces fit together. Inspector Hastings finally realizes the shocking truth of the Orient Express murder case. Behind the impossible murder in the perfect locked room lay an unexpected plan for revenge. Can justice prevail? Before the snowstorm ends and the train moves again, the final truth is revealed.'
  },
  keyCharacters: [
    {
      kr: '헤이스팅스 경 - 진실을 밝혀내는 수사관',
      en: 'Inspector Hastings - Investigator unveiling the truth'
    },
    {
      kr: '진짜 범인 - 복수의 화신',
      en: 'The real culprit - Avatar of revenge'
    },
    {
      kr: '모든 승객들 - 각자의 비밀을 가진 사람들',
      en: 'All passengers - People with their own secrets'
    }
  ],
  keyEvidence: [
    {
      kr: '최종적인 결정적 증거',
      en: 'Final decisive evidence'
    },
    {
      kr: '범행의 전체적인 계획',
      en: 'Overall plan of the crime'
    },
    {
      kr: '복수의 동기와 정의',
      en: 'Motive for revenge and justice'
    }
  ],
  goal: {
    kr: '오리엔트 특급 열차 살인사건의 최종 진실을 밝히고 정의를 실현하세요!',
    en: 'Reveal the final truth of the Orient Express murder case and bring justice!'
  },
  gameLink: '/fragments/case3/chapter3/game',
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