import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter2IntroData: ChapterIntroData = {
  caseId: 'case4',
  chapterNumber: 2,
  icon: '🧙',
  title: {
    kr: '마법 공학의 비밀',
    en: 'Secrets of Magical Engineering'
  },
  subtitle: {
    kr: '종족들의 음모',
    en: 'Conspiracy of Races'
  },
  story: {
    kr: '아르카눔의 각 종족들이 가진 비밀이 하나씩 드러나기 시작합니다. 드워프 대장장이 토린의 마법 무기 제작, 오크 전사 그로그의 숨겨진 과거, 하프엘프 도둑 실바나의 정체... 모든 이들이 스톤위크의 연구와 연관되어 있습니다. 그의 마법공학 연구가 아르카눔의 균형을 위협할 만큼 위험한 것이었을까요? 종족 간의 갈등과 이해관계가 복잡하게 얽힌 이 도시에서, 진실을 찾는 것은 쉽지 않습니다.',
    en: 'The secrets of each race in Arcanum begin to be revealed one by one. Dwarf blacksmith Thorin\'s magical weapon crafting, Orc warrior Grog\'s hidden past, Half-elf thief Silvana\'s identity... All of them are connected to Stonewick\'s research. Was his magical engineering research so dangerous that it threatened Arcanum\'s balance? In this city where racial conflicts and interests are complexly intertwined, finding the truth is not easy.'
  },
  keyCharacters: [
    {
      kr: '토린 - 드워프 대장장이',
      en: 'Thorin - Dwarf blacksmith'
    },
    {
      kr: '그로그 - 오크 전사',
      en: 'Grog - Orc warrior'
    },
    {
      kr: '실바나 - 하프엘프 도둑',
      en: 'Silvana - Half-elf thief'
    }
  ],
  keyEvidence: [
    {
      kr: '스톤위크의 비밀 연구 노트',
      en: 'Stonewick\'s secret research notes'
    },
    {
      kr: '각 종족의 이해관계',
      en: 'Interests of each race'
    },
    {
      kr: '마법공학 기술의 위험성',
      en: 'Dangers of magical engineering technology'
    }
  ],
  goal: {
    kr: '아르카눔 각 종족들의 비밀과 스톤위크 연구에 숨겨진 진실을 밝혀내세요!',
    en: 'Uncover the secrets of Arcanum\'s races and the truth hidden in Stonewick\'s research!'
  },
  gameLink: '/fragments/case4/chapter2/game',
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