import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter3IntroData: ChapterIntroData = {
  caseId: 'case5',
  chapterNumber: 3,
  icon: '🔬',
  title: {
    kr: '핀치의 실험실',
    en: 'Finch\'s Laboratory'
  },
  subtitle: {
    kr: '시간의 열쇠',
    en: 'Key of Time'
  },
  story: {
    kr: '앨리스터 핀치의 비밀 실험실에서 발견된 시간의 열쇠. 이 고대 유물은 모든 시간대를 연결하는 마스터 키로 보입니다. 실험실 곳곳에 흩어진 연구 노트들과 이상한 기계들이 당신을 맞이합니다. "시간은 강이 아니라 바다다. 우리는 그 파도를 타고 있을 뿐이다." - 핀치 박사의 마지막 기록. 하지만 실험실은 이미 누군가에 의해 뒤져진 흔적이 있습니다. 크로노스의 진정한 목적과 시간 여행 기술의 핵심을 발견하게 됩니다.',
    en: 'The Key of Time discovered in Alistair Finch\'s secret laboratory. This ancient artifact appears to be a master key connecting all time periods. Research notes scattered throughout the laboratory and strange machines greet you. "Time is not a river, but an ocean. We are merely riding its waves." - Dr. Finch\'s final record. However, the laboratory shows signs of being ransacked. You discover Chronos\' true purpose and the core of time travel technology.'
  },
  keyCharacters: [
    {
      kr: '앨리스터 핀치 박사 - 시간 역학 연구자',
      en: 'Dr. Alistair Finch - Time dynamics researcher'
    },
    {
      kr: '이진우 형사 - 진실을 추적하는 수사관',
      en: 'Detective Lee Jin-woo - Investigator tracking the truth'
    },
    {
      kr: '크로노스 - 시간의 조작자',
      en: 'Chronos - Manipulator of time'
    }
  ],
  keyEvidence: [
    {
      kr: '시간의 열쇠 - 마스터 키',
      en: 'Key of Time - Master key'
    },
    {
      kr: '핀치 박사의 연구 노트',
      en: 'Dr. Finch\'s research notes'
    },
    {
      kr: '시간 여행 기술의 핵심',
      en: 'Core of time travel technology'
    }
  ],
  goal: {
    kr: '핀치의 실험실에서 시간 여행의 비밀과 크로노스의 진정한 목적을 밝혀내세요!',
    en: 'Uncover the secrets of time travel and Chronos\' true purpose in Finch\'s laboratory!'
  },
  gameLink: '/fragments/case5/chapter3/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #0f0f23 0%, #16213e 50%, #1a1a2e 100%)',
    secondaryGradient: 'linear-gradient(135deg, #bb86fc 0%, #6366f1 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#bb86fc',
    accentSecondary: '#6366f1',
    navigationBg: 'rgba(187, 134, 252, 0.3)',
    cardBackground: 'rgba(187, 134, 252, 0.1)',
    cardBorder: 'rgba(187, 134, 252, 0.3)',
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cardShadowHover: '0 8px 16px rgba(187, 134, 252, 0.4)',
    buttonPrimary: 'linear-gradient(135deg, #bb86fc 0%, #6366f1 100%)',
    suspectCard: 'rgba(187, 134, 252, 0.15)',
    evidenceCard: 'rgba(187, 134, 252, 0.15)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
};