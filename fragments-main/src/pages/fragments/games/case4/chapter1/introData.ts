import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter1IntroData: ChapterIntroData = {
  caseId: 'case4',
  chapterNumber: 1,
  icon: '🔮',
  title: {
    kr: '밀실의 역설',
    en: 'Locked Room Paradox'
  },
  subtitle: {
    kr: '사라진 심장',
    en: 'Missing Heart'
  },
  story: {
    kr: '마법과 기술이 공존하는 도시 아르카눔에서 유명한 마법공학자 스톤위크가 완전한 밀실에서 살해당했습니다. 더욱 기이한 것은 그의 심장이 흔적도 없이 사라졌다는 것입니다. 마법의 결계로 보호되던 연구실, 그곳에서 일어난 불가능한 살인사건. 베테랑 수사관 그림스톤이 이 마법적 미스터리의 수사를 시작합니다. 엘프, 드워프, 인간, 오크... 다양한 종족들이 얽힌 복잡한 사건의 시작입니다.',
    en: 'In Arcanum, a city where magic and technology coexist, the famous mage-engineer Stonewick was murdered in a perfect locked room. Even more bizarre, his heart disappeared without a trace. A laboratory protected by magical barriers, where an impossible murder occurred. Veteran investigator Grimstone begins investigating this magical mystery. Elves, dwarves, humans, orcs... This is the beginning of a complex case involving various races.'
  },
  keyCharacters: [
    {
      kr: '그림스톤 - 베테랑 수사관',
      en: 'Grimstone - Veteran investigator'
    },
    {
      kr: '스톤위크 - 살해된 마법공학자',
      en: 'Stonewick - Murdered mage-engineer'
    },
    {
      kr: '엘레나 - 엘프 마법사',
      en: 'Elena - Elf mage'
    }
  ],
  keyEvidence: [
    {
      kr: '마법으로 보호된 밀실',
      en: 'Magically protected locked room'
    },
    {
      kr: '사라진 스톤위크의 심장',
      en: 'Stonewick\'s missing heart'
    },
    {
      kr: '마법공학 연구 자료들',
      en: 'Magical engineering research materials'
    }
  ],
  goal: {
    kr: '마법과 기술이 공존하는 도시에서 벌어진 불가능한 살인의 첫 단서를 찾아보세요!',
    en: 'Find the first clues of the impossible murder in a city where magic and technology coexist!'
  },
  gameLink: '/fragments/case4/chapter1/game',
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