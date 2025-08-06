import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter3IntroData: ChapterIntroData = {
  caseId: 'case1',
  chapterNumber: 3,
  icon: '🌙',
  title: {
    kr: '챕터 3: 정보와 진실',
    en: 'Chapter 3: Information and Truth'
  },
  subtitle: {
    kr: '어둠의 진실',
    en: 'Truth in Darkness'
  },
  story: {
    kr: '정보상이 지목한 \'잿빛 고아원\'에 잠입하여 충격적인 진실의 일부를 확인하게 됩니다. 대주교는 단순한 성직자가 아니었습니다. 그는 고대로부터 전해져 내려온 어둠의 의식을 연구하고 있었고, 성물은 그 의식의 핵심 도구였습니다. 하지만 누군가가 그의 계획을 막으려 했고, 그 과정에서 대주교는 목숨을 잃었습니다. 이제 남은 것은 진짜 범인을 찾아내고, 어둠의 의식이 완성되는 것을 막는 것입니다.',
    en: 'Infiltrating the \'Ash Orphanage\' pointed out by the informant, you confirm part of the shocking truth. The Archbishop was not just a simple clergyman. He was researching dark rituals passed down from ancient times, and the relic was a key tool for those rituals. However, someone tried to stop his plans, and the Archbishop lost his life in the process. Now what remains is to find the real culprit and prevent the completion of the dark ritual.'
  },
  keyCharacters: [
    {
      kr: '그림자 속의 인물 - 정체불명의 검은 망토',
      en: 'Figure in the Shadows - Mysterious black cloak'
    },
    {
      kr: '고아원 아이들 - 의식의 제물로 선택된 아이들',
      en: 'Orphanage Children - Children chosen as ritual sacrifices'
    },
    {
      kr: '수녀 막달레나 - 대주교의 진짜 계획을 아는 공범',
      en: 'Sister Magdalena - Accomplice who knows the Archbishop\'s real plan'
    }
  ],
  keyEvidence: [
    {
      kr: '어둠의 의식서',
      en: 'Dark ritual book'
    },
    {
      kr: '제물 선별 명단',
      en: 'Sacrifice selection list'
    },
    {
      kr: '대주교의 진짜 정체',
      en: 'Archbishop\'s true identity'
    }
  ],
  goal: {
    kr: '어둠의 의식을 막고 진짜 범인의 정체를 밝혀내세요!',
    en: 'Stop the dark ritual and reveal the true culprit\'s identity!'
  },
  gameLink: '/fragments/case1/chapter3/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
    secondaryGradient: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#9d4edd',
    accentSecondary: '#7209b7',
    navigationBg: 'rgba(0, 0, 0, 0.3)',
    cardBackground: 'rgba(157, 78, 221, 0.1)',
    cardBorder: 'rgba(157, 78, 221, 0.3)',
    cardShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    cardShadowHover: '0 12px 40px rgba(0, 0, 0, 0.5)',
    buttonPrimary: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    suspectCard: 'rgba(157, 78, 221, 0.15)',
    evidenceCard: 'rgba(114, 9, 183, 0.15)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
  }
};