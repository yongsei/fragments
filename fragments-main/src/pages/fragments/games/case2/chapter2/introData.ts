import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter2IntroData: ChapterIntroData = {
  caseId: 'case2',
  chapterNumber: 2,
  icon: '🌫️',
  title: {
    kr: '빅토리아 시대의 어둠',
    en: 'Darkness of the Victorian Era'
  },
  subtitle: {
    kr: '1888년 런던과 잭 더 리퍼',
    en: 'London 1888 and Jack the Ripper'
  },
  story: {
    kr: '1888년 런던, 화이트채플 지역의 안개 낀 거리에서 또 다른 시간 조각이 발견되었습니다. 잭 더 리퍼의 연쇄 살인 사건이 일어나는 바로 그 시기, 당신은 빅토리아 시대의 어둠 속에서 시간 여행자의 흔적을 찾아야 합니다. 가스등이 흔들리는 좁은 골목길, 마차가 지나가는 자갈길, 그리고 공포에 떨고 있는 사람들... 이 모든 것 뒤에 숨겨진 시간의 비밀을 풀어보세요.',
    en: 'London 1888, in the fog-covered streets of Whitechapel, another time fragment has been discovered. Right during the Jack the Ripper serial murder case, you must find traces of time travelers in the darkness of the Victorian era. Narrow alleyways with flickering gas lamps, cobblestone streets with passing carriages, and people trembling in fear... Uncover the temporal secrets hidden behind all of this.'
  },
  keyCharacters: [
    {
      kr: '이진우 형사 - 시간 여행으로 1888년 런던에 도착',
      en: 'Detective Lee Jin-woo - Arrived in 1888 London via time travel'
    },
    {
      kr: '인스펙터 애버라인 - 스코틀랜드 야드 수사관',
      en: 'Inspector Abberline - Scotland Yard investigator'
    },
    {
      kr: '메리 제인 켈리 - 화이트채플의 증인',
      en: 'Mary Jane Kelly - Witness from Whitechapel'
    }
  ],
  keyEvidence: [
    {
      kr: '시간 조각 - 빅토리아 시대 유물',
      en: 'Time fragment - Victorian era artifact'
    },
    {
      kr: '잭 더 리퍼와 연관된 단서들',
      en: 'Clues connected to Jack the Ripper'
    },
    {
      kr: '미래 기술의 흔적',
      en: 'Traces of future technology'
    }
  ],
  goal: {
    kr: '빅토리아 시대에 숨겨진 시간 여행자의 흔적을 찾아 시간의 비밀을 풀어보세요!',
    en: 'Find traces of time travelers hidden in the Victorian era and uncover temporal secrets!'
  },
  gameLink: '/fragments/case2/chapter2/game',
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