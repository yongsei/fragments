import { CaseIntroData } from '../../components/UnifiedCaseIntro';

export const case8IntroData: CaseIntroData = {
  caseId: 'case8',
  caseNumber: 8,
  title: {
    kr: '🌫️ 에코우드의 저주',
    en: '🌫️ The Curse of Echowood'
  },
  subtitle: {
    kr: '호러 미스터리',
    en: 'Horror Mystery'
  },
  description: {
    kr: '🌫️ 짙은 안개 속에서 길을 잃고 도착한 지도에도 없는 마을 "에코우드". 마을에 감도는 불길한 기운과 주민들의 불안한 시선 속에서 숨겨진 저주의 비밀을 파헤치세요.',
    en: "🌫️ Lost in thick fog, you arrive at 'Echowood', a village that doesn't exist on any map. Uncover the secrets of the curse hidden within the ominous atmosphere and the anxious gazes of the villagers."
  },
  storyContent: {
    kr: '짙은 안개 속에서 길을 잃은 당신은 지도에도 없는 신비로운 마을 "에코우드"에 도착합니다. 마을 주민들의 불안한 시선과 불길한 분위기 속에서 이 마을에 걸린 저주의 비밀을 밝혀내야 합니다. 7개 챕터를 통해 점진적으로 드러나는 충격적인 진실을 발견하세요.',
    en: 'Lost in thick fog, you arrive at the mysterious village of "Echowood" that doesn\'t exist on any map. Amidst the anxious gazes of villagers and ominous atmosphere, you must uncover the secrets of the curse that plagues this village. Discover shocking truths gradually revealed through 7 chapters.'
  },
  theme: {
    background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
    primary: 'linear-gradient(45deg, #161b22, #21262d)',
    accent: '#f85149',
    cardBackground: 'rgba(248, 81, 73, 0.1)'
  },
  seo: {
    keywords: {
      kr: '에코우드의 저주, 단서의 파편 케이스8, 호러 미스터리, 마을 저주, 초자연적 미스터리',
      en: 'The Curse of Echowood, Fragment of Mystery Case8, horror mystery, village curse, supernatural mystery'
    }
  },
  chapters: [
    {
      number: 1,
      icon: '🌫️',
      title: {
        kr: 'Chapter 1: 안개 속의 마을',
        en: 'Chapter 1: Village in the Fog'
      },
      description: {
        kr: '짙은 안개에 둘러싸인 에코우드 마을에 도착합니다. 마을의 첫인상과 주민들의 이상한 반응을 조사해보세요.',
        en: 'Arrive at Echowood village surrounded by thick fog. Investigate the first impressions of the village and the strange reactions of its residents.'
      },
      link: 'chapter1/game'
    },
    {
      number: 2,
      icon: '👥',
      title: {
        kr: 'Chapter 2: 주민들의 비밀',
        en: 'Chapter 2: Secrets of the Villagers'
      },
      description: {
        kr: '마을 주민들과 대화하며 그들이 숨기고 있는 비밀을 파헤칩니다. 불안한 시선 뒤에 숨겨진 진실을 찾아보세요.',
        en: 'Talk with villagers and uncover the secrets they are hiding. Find the truth hidden behind their anxious gazes.'
      },
      link: 'chapter2/game'
    },
    {
      number: 3,
      icon: '🏚️',
      title: {
        kr: 'Chapter 3: 버려진 건물들',
        en: 'Chapter 3: Abandoned Buildings'
      },
      description: {
        kr: '마을의 버려진 건물들을 탐험하며 과거의 흔적을 찾습니다. 폐허 속에서 저주의 단서를 발견하세요.',
        en: 'Explore abandoned buildings in the village and find traces of the past. Discover clues about the curse among the ruins.'
      },
      link: 'chapter3/game'
    },
    {
      number: 4,
      icon: '👻',
      title: {
        kr: 'Chapter 4: 초자연적 현상',
        en: 'Chapter 4: Supernatural Phenomena'
      },
      description: {
        kr: '마을에서 일어나는 기이한 초자연적 현상들을 조사합니다. 현실과 초자연이 뒤섞인 미스터리를 풀어보세요.',
        en: 'Investigate strange supernatural phenomena occurring in the village. Solve mysteries where reality and supernatural intertwine.'
      },
      link: 'chapter4/game'
    },
    {
      number: 5,
      icon: '📜',
      title: {
        kr: 'Chapter 5: 저주의 기원',
        en: 'Chapter 5: Origin of the Curse'
      },
      description: {
        kr: '에코우드에 걸린 저주의 기원과 역사를 추적합니다. 과거의 비극적 사건들이 현재에 미치는 영향을 파악하세요.',
        en: 'Trace the origin and history of the curse on Echowood. Understand how past tragic events affect the present.'
      },
      link: 'chapter5/game'
    },
    {
      number: 6,
      icon: '🔮',
      title: {
        kr: 'Chapter 6: 저주의 해법',
        en: 'Chapter 6: Solution to the Curse'
      },
      description: {
        kr: '저주를 풀 수 있는 방법을 찾아 나섭니다. 마을을 구원할 수 있는 열쇠를 발견하세요.',
        en: 'Search for a way to break the curse. Find the key that can save the village.'
      },
      link: 'chapter6/game'
    },
    {
      number: 7,
      icon: '🌅',
      title: {
        kr: 'Chapter 7: 새벽의 진실',
        en: 'Chapter 7: Truth at Dawn'
      },
      description: {
        kr: '모든 진실이 밝혀지고 저주가 풀리는 최종 장면입니다. 에코우드 마을의 운명을 결정하세요.',
        en: 'The final scene where all truths are revealed and the curse is broken. Determine the fate of Echowood village.'
      },
      link: 'chapter7/game'
    }
  ]
};