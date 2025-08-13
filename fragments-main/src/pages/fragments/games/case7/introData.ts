import { CaseIntroData } from '../../components/UnifiedCaseIntro';

export const case7IntroData: CaseIntroData = {
  caseId: 'case7',
  caseNumber: 7,
  title: {
    kr: '🏰 블랙우드 저택의 비밀',
    en: '🏰 Secrets of Blackwood Manor'
  },
  subtitle: {
    kr: '고딕 미스터리',
    en: 'Gothic Mystery'
  },
  description: {
    kr: '🏰 19세기 말 잉글랜드의 황무지에 위치한 블랙우드 저택에서 벌어진 의문의 죽음. 탐정이 되어 가문의 어두운 비밀과 복잡한 인간관계 속에서 진실을 밝혀내세요.',
    en: "🏰 A mysterious death at Blackwood Manor in the English moors of the late 19th century. Become a detective and uncover the truth hidden within the family's dark secrets and complex relationships."
  },
  storyContent: {
    kr: '19세기 말 잉글랜드 북부 황무지에 자리한 블랙우드 저택에서 충격적인 사건이 발생했습니다. 저택의 주인 찰스 블랙우드 경이 서재에서 의문의 죽음을 맞았습니다. 복잡한 가족 관계와 유산 상속 문제가 얽힌 이 사건의 진실을 5개 챕터를 통해 밝혀내세요.',
    en: 'A shocking incident has occurred at Blackwood Manor in the English moors of the late 19th century. Lord Charles Blackwood was found dead under mysterious circumstances in his study. Uncover the truth behind this case involving complex family relationships and inheritance issues through 5 chapters.'
  },
  theme: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    primary: 'linear-gradient(45deg, #16213e, #0f3460)',
    accent: '#bb86fc',
    cardBackground: 'rgba(187, 134, 252, 0.1)'
  },
  seo: {
    keywords: {
      kr: '블랙우드 저택의 비밀, 단서의 파편 케이스7, 고딕 미스터리, 저택 추리, 가족 범죄',
      en: 'Secrets of Blackwood Manor, Fragment of Mystery Case7, gothic mystery, manor investigation, family crime'
    }
  },
  chapters: [
    {
      number: 1,
      icon: '🏚️',
      title: {
        kr: 'Chapter 1: 저택의 발견',
        en: 'Chapter 1: Discovery at the Manor'
      },
      description: {
        kr: '블랙우드 저택에서 발견된 시신과 현장의 단서들을 조사합니다. 고딕 양식의 저택에서 벌어진 의문의 죽음의 첫 번째 증거를 찾아보세요.',
        en: 'Investigate the body found at Blackwood Manor and the clues at the scene. Find the first evidence of this mysterious death in the Gothic manor.'
      },
      link: 'chapter1/game'
    },
    {
      number: 2,
      icon: '👥',
      title: {
        kr: 'Chapter 2: 가족의 비밀',
        en: 'Chapter 2: Family Secrets'
      },
      description: {
        kr: '블랙우드 가문의 복잡한 관계와 유산 상속 문제를 조사합니다. 가족 구성원들 간의 갈등과 숨겨진 동기를 발견하세요.',
        en: 'Investigate the complex relationships of the Blackwood family and inheritance issues. Discover conflicts and hidden motives among family members.'
      },
      link: 'chapter2/game'
    },
    {
      number: 3,
      icon: '🔍',
      title: {
        kr: 'Chapter 3: 증거 수집',
        en: 'Chapter 3: Evidence Collection'
      },
      description: {
        kr: '저택 곳곳에서 결정적인 증거들을 수집합니다. 세밀한 현장 조사를 통해 사건의 실체에 다가가세요.',
        en: 'Collect crucial evidence throughout the manor. Get closer to the truth through detailed crime scene investigation.'
      },
      link: 'chapter3/game'
    },
    {
      number: 4,
      icon: '👻',
      title: {
        kr: 'Chapter 4: 초자연적 단서',
        en: 'Chapter 4: Supernatural Clues'
      },
      description: {
        kr: '저택에 얽힌 초자연적 요소들과 가문의 저주를 조사합니다. 현실과 초자연이 얽힌 미스터리를 풀어보세요.',
        en: 'Investigate supernatural elements and family curses tied to the manor. Solve the mystery where reality and supernatural intertwine.'
      },
      link: 'chapter4/game'
    },
    {
      number: 5,
      icon: '⚖️',
      title: {
        kr: 'Chapter 5: 진실의 심판',
        en: 'Chapter 5: Judgment of Truth'
      },
      description: {
        kr: '모든 단서를 종합하여 범인을 찾아내고 사건을 해결합니다. 블랙우드 저택의 어두운 비밀이 마침내 밝혀집니다.',
        en: 'Synthesize all clues to find the perpetrator and solve the case. The dark secrets of Blackwood Manor are finally revealed.'
      },
      link: 'chapter5/game'
    }
  ]
};