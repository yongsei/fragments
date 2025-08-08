import { CaseIntroData } from '../../components/UnifiedCaseIntro';

export const case3IntroData: CaseIntroData = {
  caseId: 'case3',
  caseNumber: 3,
  title: {
    kr: '🚂 오리엔트 특급 열차',
    en: '🚂 Orient Express'
  },
  subtitle: {
    kr: '눈보라 속 고립된 열차에서 벌어진 완벽한 밀실 살인',
    en: 'Perfect locked-room murder on an isolated train in a snowstorm'
  },
  description: {
    kr: '🚂 눈보라 속 고립된 열차에서 벌어진 완벽한 밀실 살인! 금융 재벌 볼코프의 죽음을 둘러싼 복잡한 인간관계와 숨겨진 동기를 파헤치세요.',
    en: '🚂 A perfect locked-room murder on an isolated train in a snowstorm! Uncover the complex relationships and hidden motives surrounding financier Volkov\'s death.'
  },
  storyContent: {
    kr: '눈보라가 몰아치는 밤, 오리엔트 특급 열차 안에서 금융 재벌 알렉산더 볼코프가 살해당했습니다. 완벽한 밀실에서 벌어진 살인 사건의 진실을 파헤치기 위해 은퇴한 수사관 헤이스팅스 경이 수사에 나섭니다. 각 챕터를 통해 열차 안 승객들의 비밀과 진실을 밝혀내세요.',
    en: 'On a stormy night, financial tycoon Alexander Volkov was murdered on the Orient Express. Retired investigator Inspector Hastings takes on the case to uncover the truth behind the murder in the perfect locked room. Reveal the secrets and truth of the passengers on the train through each chapter.'
  },
  theme: {
    background: 'linear-gradient(135deg, #4a2c17 0%, #8b4513 30%, #d2691e 70%, #ffa07a 100%)',
    primary: 'linear-gradient(45deg, #8b4513, #d2691e)',
    accent: '#d2691e',
    cardBackground: 'rgba(139, 69, 19, 0.1)'
  },
  seo: {
    keywords: {
      kr: '오리엔트 특급 열차, 단서의 파편 케이스3, 밀실 살인, 열차 미스터리, 추리게임',
      en: 'Orient Express, Fragment of Mystery Case3, locked room murder, train mystery, detective game'
    }
  },
  chapters: [
    {
      number: 1,
      icon: '🚂',
      title: {
        kr: 'Chapter 1: 밀실의 역설과 첫 번째 심문',
        en: 'Chapter 1: Locked Room Paradox and First Interrogation'
      },
      description: {
        kr: '눈보라 속 고립된 열차 안에서 볼코프가 살해당했습니다. 밀실에서 벌어진 살인의 첫 단서들을 찾아보세요.',
        en: 'Volkov was murdered on an isolated train in a snowstorm. Find the first clues of the murder in the locked room.'
      },
      link: 'chapter1'
    },
    {
      number: 2,
      icon: '🔍',
      title: {
        kr: 'Chapter 2: 용의자들의 어둠',
        en: 'Chapter 2: Shadows of Suspects'
      },
      description: {
        kr: '열차에 탑승한 승객들 각자의 비밀과 볼코프와의 숨겨진 관계를 파헤칩니다.',
        en: 'Uncover the secrets of each passenger on the train and their hidden relationships with Volkov.'
      },
      link: 'chapter2'
    },
    {
      number: 3,
      icon: '⚖️',
      title: {
        kr: 'Chapter 3: 정의의 심판',
        en: 'Chapter 3: Justice\'s Judgment'
      },
      description: {
        kr: '모든 수수께끼가 풀리는 마지막 순간. 오리엔트 특급 열차 살인사건의 진실이 드러납니다.',
        en: 'The final moment when all mysteries are solved. The truth of the Orient Express murder case is revealed.'
      },
      link: 'chapter3'
    },
    {
      number: 4,
      icon: '⚖️',
      title: {
        kr: 'Chapter 4: 복수의 오케스트라와 최후의 심판',
        en: 'Chapter 4: Orchestra of Revenge and Final Judgment'
      },
      description: {
        kr: '모든 진실을 밝히고, 용의자들에게 최후의 심판을 내립니다. 복수의 오케스트라가 완성되는 마지막 순간입니다.',
        en: 'Reveal all truths and deliver final judgment to the suspects. This is the final moment when the orchestra of revenge is completed.'
      },
      link: 'chapter4'
    }
  ]
};