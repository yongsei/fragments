import { CaseIntroData } from '../../components/UnifiedCaseIntro';

export const case6IntroData: CaseIntroData = {
  caseId: 'case6',
  caseNumber: 6,
  title: {
    kr: '🏰 어둠의 수도원',
    en: '🏰 The Dark Abbey'
  },
  subtitle: {
    kr: '신성한 벽 뒤의 비밀',
    en: 'Secrets Behind Sacred Walls'
  },
  description: {
    kr: '🏰 외딴 수도원에서 발견된 수도사의 시신. 성스러운 곳에서 벌어진 살인 사건의 진실을 파헤쳐보세요. 신성한 가면 뒤에 숨겨진 인간의 욕망과 비밀을 조사하는 고딕 미스터리입니다.',
    en: "🏰 A monk's body discovered in a remote abbey. Uncover the truth behind this murder in a holy place. A gothic mystery investigating human desires and secrets hidden behind sacred masks."
  },
  storyContent: {
    kr: '깊은 산속 외딴 수도원에서 충격적인 사건이 발생했습니다. 새벽 기도 시간, 수도원의 성당에서 한 수도사가 피를 흘린 채 발견되었습니다. 피해자는 브라더 토마스, 수도원의 도서관을 관리하던 온화한 수도사였습니다. 고요한 수도원의 평화를 깨뜨린 이 사건의 진실을 4개 챕터를 통해 밝혀내세요.',
    en: 'A shocking incident has occurred at a remote abbey deep in the mountains. During morning prayers, a monk was found bleeding in the chapel. The victim was Brother Thomas, a gentle monk who managed the library. Uncover the truth behind this incident that shattered the peace through 4 chapters.'
  },
  theme: {
    background: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #8b4513 100%)',
    primary: 'linear-gradient(45deg, #8b4513, #a0522d)',
    accent: '#d2691e',
    cardBackground: 'rgba(139, 69, 19, 0.1)'
  },
  seo: {
    keywords: {
      kr: '어둠의 수도원, 단서의 파편 케이스6, 고딕 미스터리, 수도원 추리, 종교 범죄',
      en: 'Dark Abbey, Fragment of Mystery Case6, gothic mystery, abbey investigation, religious crime'
    }
  },
  chapters: [
    {
      number: 1,
      icon: '⛪',
      title: {
        kr: 'Chapter 1: 성당의 발견',
        en: 'Chapter 1: Discovery in the Chapel'
      },
      description: {
        kr: '새벽 기도 시간, 성당에서 발견된 시신과 현장의 단서들을 조사합니다. 신성한 장소에서 벌어진 끔찍한 범죄의 첫 번째 증거를 찾아보세요.',
        en: 'Investigate the body found during morning prayers and the clues at the scene. Find the first evidence of this horrific crime in a sacred place.'
      },
      link: 'chapter1/game'
    },
    {
      number: 2,
      icon: '📿',
      title: {
        kr: 'Chapter 2: 수도원의 일상',
        en: 'Chapter 2: Daily Life of the Abbey'
      },
      description: {
        kr: '수도사들의 일상을 파악하고, 피해자와의 관계를 조사합니다. 평범해 보이는 수도원 생활 속에 숨겨진 갈등을 발견하세요.',
        en: 'Understand the daily routines of the monks and investigate their relationships with the victim. Discover conflicts hidden in seemingly ordinary abbey life.'
      },
      link: 'chapter2/game'
    },
    {
      number: 3,
      icon: '🕯️',
      title: {
        kr: 'Chapter 3: 금지된 비밀',
        en: 'Chapter 3: Forbidden Secrets'
      },
      description: {
        kr: '수도원에 숨겨진 금지된 비밀들과 동기를 찾아냅니다. 신성한 장소에서 일어나는 인간적 욕망의 실체를 파헤쳐보세요.',
        en: 'Discover the forbidden secrets hidden in the abbey and find the motives. Uncover the reality of human desires in a sacred place.'
      },
      link: 'chapter3/game'
    },
    {
      number: 4,
      icon: '🔔',
      title: {
        kr: 'Chapter 4: 진실의 종성',
        en: 'Chapter 4: The Bell of Truth'
      },
      description: {
        kr: '모든 단서를 종합하여 범인을 찾아내고 사건을 해결합니다. 수도원의 종소리와 함께 마침내 진실이 밝혀집니다.',
        en: 'Synthesize all clues to find the perpetrator and solve the case. With the abbey bells, the truth is finally revealed.'
      },
      link: 'chapter4/game'
    }
  ]
};