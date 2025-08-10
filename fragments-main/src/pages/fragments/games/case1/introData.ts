import { CaseIntroData } from '../../components/UnifiedCaseIntro';

export const case1IntroData: CaseIntroData = {
  caseId: 'case1',
  caseNumber: 1,
  title: {
    kr: '🏰 어둠의 대성당',
    en: '🏰 Cathedral of Shadows'
  },
  subtitle: {
    kr: '고딕 대성당에서 벌어지는 다크 판타지 미스터리',
    en: 'A dark fantasy mystery in a Gothic cathedral'
  },
  description: {
    kr: '🏰 고딕 대성당에서 벌어지는 다크 판타지 미스터리! 대주교의 죽음과 사라진 성물의 비밀을 파헤치세요. 어둠 속에 숨겨진 진실을 찾아내는 여정이 시작됩니다.',
    en: '🏰 A dark fantasy mystery in a Gothic cathedral! Uncover the secrets behind the Archbishop\'s death and the missing relic. Begin your journey to find the truth hidden in the shadows.'
  },
  storyContent: {
    kr: '고딕 양식의 대성당에서 대주교가 기괴한 죽음을 맞이했습니다. 이단 심문관인 당신은 사라진 성물과 기이한 현상들이 연이어 발생하는 어둠 속에서 진실을 찾아야 합니다. 각 챕터를 통해 대성당의 어두운 비밀을 파헤쳐 보세요.',
    en: 'The Archbishop met a bizarre death in the Gothic cathedral. As an inquisitor, you must find the truth in the darkness where missing relics and strange phenomena occur one after another. Uncover the cathedral\'s dark secrets through each chapter.'
  },
  theme: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
    primary: 'linear-gradient(45deg, #9d4edd, #7209b7)',
    accent: '#9d4edd',
    cardBackground: 'rgba(157, 78, 221, 0.1)'
  },
  seo: {
    keywords: {
      kr: '어둠의 대성당, 단서의 파편 케이스1, 고딕 미스터리, 다크 판타지, 대성당 추리',
      en: 'Cathedral of Shadows, Fragment of Mystery Case1, gothic mystery, dark fantasy, cathedral investigation'
    }
  },
  chapters: [
    {
      number: 1,
      icon: '⛪',
      title: {
        kr: 'Chapter 1: 사건 현장',
        en: 'Chapter 1: Crime Scene'
      },
      description: {
        kr: '대주교의 기괴한 죽음 뒤에 숨겨진 비밀을 파헤치세요. 현장을 조사하고, 사라진 성물의 단서를 찾아내야 합니다.',
        en: 'Uncover the secrets behind the Archbishop\'s bizarre death. Investigate the scene and find clues about the missing relic.'
      },
      link: 'chapter1/game'
    },
    {
      number: 2,
      icon: '📿',
      title: {
        kr: 'Chapter 2: 마지막 발자취',
        en: 'Chapter 2: Last Footsteps'
      },
      description: {
        kr: '대주교가 남긴 비밀 연구의 흔적을 따라 도시의 가장 낮은 곳으로 향하며 기이한 소문과 마주합니다.',
        en: 'Follow traces of the Archbishop\'s secret research to the lowest parts of the city and encounter strange rumors.'
      },
      link: 'chapter2/game'
    },
    {
      number: 3,
      icon: '🌙',
      title: {
        kr: 'Chapter 3: 정보와 진실',
        en: 'Chapter 3: Information and Truth'
      },
      description: {
        kr: '정보상이 지목한 \'잿빛 고아원\'에 잠입하여 충격적인 진실의 일부를 확인해야 합니다.',
        en: 'Infiltrate the \'Ash Orphanage\' pointed out by the informant and confirm part of the shocking truth.'
      },
      link: 'chapter3/game'
    },
    {
      number: 4,
      icon: '⚔️',
      title: {
        kr: 'Chapter 4: 최후의 대결',
        en: 'Chapter 4: Final Confrontation'
      },
      description: {
        kr: '막달레나와의 최후 대결이 대성당에서 벌어집니다. 어둠의 의식을 막고 대성당과 도시를 구하세요.',
        en: 'The final battle against Magdalena takes place in the cathedral. Stop the dark ritual and save the cathedral and the city.'
      },
      link: 'chapter4/game'
    }
  ]
};