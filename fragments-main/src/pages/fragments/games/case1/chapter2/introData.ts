import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter2IntroData: ChapterIntroData = {
  caseId: 'case1',
  chapterNumber: 2,
  icon: '📿',
  title: {
    kr: '챕터 2: 마지막 발자취',
    en: 'Chapter 2: Last Footsteps'
  },
  subtitle: {
    kr: '성물의 비밀',
    en: 'Secrets of the Relic'
  },
  story: {
    kr: '대주교의 죽음 이후, 성당에서 사라진 고대 성물의 행방을 추적하게 됩니다. 대주교가 남긴 비밀 연구 노트에는 이상한 기호들과 함께 "잿빛 고아원"이라는 수상한 장소가 언급되어 있습니다. 도시의 가장 낮은 곳, 사람들이 기피하는 그 곳에서 벌어지고 있는 일들을 조사해야 합니다. 성물의 진정한 힘과 대주교의 숨겨진 과거가 서서히 드러나기 시작합니다.',
    en: 'Following the Archbishop\'s death, you must track down the ancient relic that disappeared from the cathedral. The Archbishop\'s secret research notes contain strange symbols and mention a suspicious place called the "Ash Orphanage." You must investigate what\'s happening in that forsaken place in the lowest part of the city. The true power of the relic and the Archbishop\'s hidden past begin to slowly unfold.'
  },
  keyCharacters: [
    {
      kr: '정보상 벤 - 도시 뒷골목의 소식통',
      en: 'Informant Ben - Street informant of the city'
    },
    {
      kr: '고아원 원장 - 잿빛 고아원의 수상한 관리자',
      en: 'Orphanage Director - Suspicious manager of Ash Orphanage'
    },
    {
      kr: '수녀 안나 - 대주교의 비밀을 아는 듯한 수녀',
      en: 'Sister Anna - A nun who seems to know the Archbishop\'s secrets'
    }
  ],
  keyEvidence: [
    {
      kr: '대주교의 비밀 연구 노트',
      en: 'Archbishop\'s secret research notes'
    },
    {
      kr: '사라진 고대 성물',
      en: 'Missing ancient relic'
    },
    {
      kr: '잿빛 고아원의 기록',
      en: 'Records of Ash Orphanage'
    }
  ],
  goal: {
    kr: '사라진 성물의 행방을 추적하고 대주교의 비밀 연구를 파헤치세요!',
    en: 'Track down the missing relic and uncover the Archbishop\'s secret research!'
  },
  gameLink: '/fragments/case1/chapter2/game',
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