import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter3IntroData: ChapterIntroData = {
  caseId: 'case2',
  chapterNumber: 3,
  icon: '🔬',
  title: {
    kr: '고대 유물의 비밀',
    en: 'Secrets of Ancient Artifacts'
  },
  subtitle: {
    kr: '핀치의 실험실과 시간의 열쇠',
    en: 'Finch\'s Laboratory and the Key of Time'
  },
  story: {
    kr: '핀치 박사의 비밀 실험실에서 발견된 시간의 열쇠... 이 고대 유물은 모든 시간대를 연결하는 마스터 키로 보입니다. 실험실 곳곳에 흩어진 연구 노트들과 이상한 기계들이 당신을 맞이합니다. "시간은 강이 아니라 바다다. 우리는 그 파도를 타고 있을 뿐이다." - 핀치 박사의 마지막 기록. 하지만 실험실은 이미 누군가에 의해 뒤져진 흔적이 있습니다. 과연 누가 먼저 이곳에 도착했을까요?',
    en: 'The Key of Time discovered in Dr. Finch\'s secret laboratory... This ancient artifact appears to be a master key connecting all time periods. Research notes scattered throughout the laboratory and strange machines greet you. "Time is not a river, but an ocean. We are merely riding its waves." - Dr. Finch\'s final record. However, the laboratory shows signs of being ransacked by someone. Who could have arrived here first?'
  },
  keyCharacters: [
    {
      kr: '앨리스터 핀치 박사 - 실종된 시간 역학 이론가',
      en: 'Dr. Alistair Finch - Missing time dynamics theorist'
    },
    {
      kr: '이진우 형사 - 실험실을 수색하는 수사관',
      en: 'Detective Lee Jin-woo - Investigator searching the laboratory'
    },
    {
      kr: '크로노스 - 정체불명의 시간 여행자',
      en: 'Chronos - Mysterious time traveler'
    }
  ],
  keyEvidence: [
    {
      kr: '시간의 열쇠 - 모든 시간대를 연결하는 마스터 키',
      en: 'Key of Time - Master key connecting all time periods'
    },
    {
      kr: '핀치 박사의 연구 노트들',
      en: 'Dr. Finch\'s research notes'
    },
    {
      kr: '뒤져진 실험실의 흔적',
      en: 'Signs of the ransacked laboratory'
    }
  ],
  goal: {
    kr: '핀치 박사의 실험실에서 시간의 열쇠를 찾고 크로노스의 정체를 밝혀내세요!',
    en: 'Find the Key of Time in Dr. Finch\'s laboratory and reveal Chronos\'s identity!'
  },
  gameLink: '/fragments/case2/chapter3/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    secondaryGradient: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#9d4edd',
    accentSecondary: '#7209b7',
    navigationBg: 'rgba(0, 0, 0, 0.3)',
    cardBackground: 'rgba(157, 78, 221, 0.1)',
    cardBorder: 'rgba(157, 78, 221, 0.3)',
    cardShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cardShadowHover: '0 8px 16px rgba(157, 78, 221, 0.4)',
    buttonPrimary: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    suspectCard: 'rgba(157, 78, 221, 0.15)',
    evidenceCard: 'rgba(157, 78, 221, 0.15)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
};