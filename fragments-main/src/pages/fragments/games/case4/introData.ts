import { CaseIntroData } from '../../components/UnifiedCaseIntro';

export const case4IntroData: CaseIntroData = {
  caseId: 'case4',
  caseNumber: 4,
  title: {
    kr: '🏭 아르카눔 그림자',
    en: '🏭 Arcanum Shadows'
  },
  subtitle: {
    kr: '마법과 기술이 공존하는 도시의 미스터리',
    en: 'Mystery of a city where magic and technology coexist'
  },
  description: {
    kr: '🔮 마법과 기술이 공존하는 도시 아르카눔에서 벌어진 불가능한 살인! 마법공학자 스톤위크의 죽음과 사라진 심장의 비밀을 파헤치세요.',
    en: '🔮 An impossible murder in Arcanum, a city where magic and technology coexist! Uncover the secrets behind mage-engineer Stonewick\'s death and the missing heart.'
  },
  storyContent: {
    kr: '마법과 기술이 공존하는 도시 아르카눔. 완벽한 밀실에서 마법공학자 스톤위크가 살해당하고 심장이 사라진 미스터리. 엘프, 드워프, 인간, 오크, 하프엘프 등 다양한 종족들이 얽힌 복잡한 사건의 진실을 4개 챕터를 통해 밝혀내세요.',
    en: 'Arcanum, a city where magic and technology coexist. A mystery where mage-engineer Stonewick was murdered in a perfect locked room and his heart disappeared. Uncover the truth of complex cases involving various races including elves, dwarves, humans, orcs, and half-elves through 4 chapters.'
  },
  theme: {
    background: 'linear-gradient(135deg, #8b4513 0%, #daa520 50%, #cd853f 100%)',
    primary: 'linear-gradient(135deg, #8a2be2 0%, #9370db 100%)',
    accent: '#8a2be2',
    cardBackground: 'rgba(138, 43, 226, 0.1)'
  },
  seo: {
    keywords: {
      kr: '아르카눔 그림자, 단서의 파편 케이스4, 마법 미스터리, 판타지 추리, 마법공학',
      en: 'Arcanum Shadows, Fragment of Mystery Case4, magic mystery, fantasy investigation, magical engineering'
    }
  },
  chapters: [
    {
      number: 1,
      icon: '🔮',
      title: {
        kr: 'Chapter 1: 밀실의 역설과 사라진 심장',
        en: 'Chapter 1: Locked Room Paradox and Missing Heart'
      },
      description: {
        kr: '마법공학자 스톤위크가 살해당하고 심장이 사라진 마법 도시의 첫 번째 미스터리.',
        en: 'The first mystery in a magical city where mage-engineer Stonewick was murdered and his heart disappeared.'
      },
      link: 'chapter1'
    },
    {
      number: 2,
      icon: '🧙',
      title: {
        kr: 'Chapter 2: 마법 공학의 비밀',
        en: 'Chapter 2: Secrets of Magical Engineering'
      },
      description: {
        kr: '아르카눔의 각 종족들이 가진 비밀과 스톤위크의 연구에 숨겨진 진실을 밝혀냅니다.',
        en: 'Uncover the secrets of each race in Arcanum and the truth hidden in Stonewick\'s research.'
      },
      link: 'chapter2'
    },
    {
      number: 3,
      icon: '⚡',
      title: {
        kr: 'Chapter 3: 마법의 역설과 진실',
        en: 'Chapter 3: Magic Paradox and Truth'
      },
      description: {
        kr: '마법과 기술이 공존하는 도시에서 벌어진 역설적 살인의 진실을 밝혀냅니다.',
        en: 'Uncover the truth behind the paradoxical murder in a city where magic and technology coexist.'
      },
      link: 'chapter3'
    },
    {
      number: 4,
      icon: '🎆',
      title: {
        kr: 'Chapter 4: 아르카눔의 심판',
        en: 'Chapter 4: Judgment of Arcanum'
      },
      description: {
        kr: '모든 수수께끼가 풀리는 마지막 순간. 아르카눔 살인사건의 진범과 대면합니다.',
        en: 'The final moment when all mysteries are solved. Face the true culprit of the Arcanum murder case.'
      },
      link: 'chapter4'
    }
  ]
};