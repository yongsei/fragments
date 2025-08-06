import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter3IntroData: ChapterIntroData = {
  caseId: 'case4',
  chapterNumber: 3,
  icon: '⚡',
  title: {
    kr: '마법의 역설',
    en: 'Magic Paradox'
  },
  subtitle: {
    kr: '진실의 실마리',
    en: 'Thread of Truth'
  },
  story: {
    kr: '마법과 기술이 공존하는 이 도시에서 벌어진 역설적 살인의 진실이 서서히 드러납니다. 스톤위크의 연구는 단순한 마법공학이 아니었습니다. 그는 생명의 본질을 조작하려 했고, 그 과정에서 아르카눔의 근본적인 균형을 위협했습니다. 각 종족의 대표들이 모인 비밀 회의, 그리고 그들이 내린 절망적인 결정... 진실을 알게 된 그림스톤은 선택의 기로에 서게 됩니다.',
    en: 'The truth of the paradoxical murder in this city where magic and technology coexist is slowly revealed. Stonewick\'s research was not simple magical engineering. He tried to manipulate the essence of life, threatening Arcanum\'s fundamental balance in the process. A secret meeting of representatives from each race, and the desperate decision they made... Grimstone, having learned the truth, stands at a crossroads of choice.'
  },
  keyCharacters: [
    {
      kr: '그림스톤 - 진실을 깨달은 수사관',
      en: 'Grimstone - Investigator who realized the truth'
    },
    {
      kr: '종족 대표들 - 비밀 회의의 참가자들',
      en: 'Race representatives - Secret meeting participants'
    },
    {
      kr: '아르카눔 의회 - 도시의 지배층',
      en: 'Arcanum Council - The city\'s ruling class'
    }
  ],
  keyEvidence: [
    {
      kr: '생명 조작 실험의 증거',
      en: 'Evidence of life manipulation experiments'
    },
    {
      kr: '종족 간 비밀 협정',
      en: 'Secret pact between races'
    },
    {
      kr: '아르카눔의 균형을 위한 희생',
      en: 'Sacrifice for Arcanum\'s balance'
    }
  ],
  goal: {
    kr: '마법과 기술의 역설 속에서 진실을 밝히고 올바른 선택을 하세요!',
    en: 'Uncover the truth in the paradox of magic and technology and make the right choice!'
  },
  gameLink: '/fragments/case4/chapter3/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #8b4513 0%, #daa520 50%, #cd853f 100%)',
    secondaryGradient: 'linear-gradient(135deg, #8a2be2 0%, #9370db 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#8a2be2',
    accentSecondary: '#9370db',
    navigationBg: 'rgba(138, 43, 226, 0.3)',
    cardBackground: 'rgba(138, 43, 226, 0.1)',
    cardBorder: 'rgba(138, 43, 226, 0.3)',
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cardShadowHover: '0 8px 16px rgba(138, 43, 226, 0.4)',
    buttonPrimary: 'linear-gradient(135deg, #8a2be2 0%, #9370db 100%)',
    suspectCard: 'rgba(138, 43, 226, 0.15)',
    evidenceCard: 'rgba(138, 43, 226, 0.15)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
};