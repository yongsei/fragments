import { CaseIntroData } from '../../components/UnifiedCaseIntro';

export const case2IntroData: CaseIntroData = {
  caseId: 'case2',
  caseNumber: 2,
  title: {
    kr: '🚀 우주선 오디세이',
    en: '🚀 Spaceship Odyssey'
  },
  subtitle: {
    kr: '우주선에 갇힌 탐사팀과 AI 가이아의 치명적 비밀',
    en: 'The deadly secret of the exploration team trapped on the spaceship and AI Gaia'
  },
  description: {
    kr: '🚀 우주의 끝에서 벌어지는 SF 미스터리! 탐사선 오디세이에서 정체를 알 수 없는 사건들이 연이어 발생합니다. 고립된 우주선 안에서 진실을 찾아내세요.',
    en: '🚀 A sci-fi mystery at the edge of space! Mysterious incidents occur one after another on the exploration ship Odyssey. Find the truth inside the isolated spaceship.'
  },
  storyContent: {
    kr: '갑작스럽게 통신이 두절된 탐사선 오디세이. 인공지능 가이아가 보고한 마지막 메시지는 \'모든 것이 계획대로\'였습니다. 하지만 진짜 계획은 무엇이었을까요? 4개 챕터를 통해 우주선에서 벌어진 숨겨진 음모를 밝혀내세요.',
    en: 'The exploration ship Odyssey suddenly lost communication. The last message reported by AI Gaia was \'Everything is going according to plan.\' But what was the real plan? Uncover the hidden conspiracy on the spaceship through 4 chapters.'
  },
  theme: {
    background: 'linear-gradient(135deg, #0c1445 0%, #1e3a5f 30%, #2d5aa0 70%, #3b82f6 100%)',
    primary: 'linear-gradient(45deg, #3b82f6, #1e40af)',
    accent: '#3b82f6',
    cardBackground: 'rgba(59, 130, 246, 0.1)'
  },
  seo: {
    keywords: {
      kr: '우주선 오디세이, 단서의 파편 케이스2, SF 미스터리, 우주 추리, 인공지능',
      en: 'Spaceship Odyssey, Fragment of Mystery Case2, sci-fi mystery, space investigation, artificial intelligence'
    }
  },
  chapters: [
    {
      number: 1,
      icon: '🚀',
      title: {
        kr: 'Chapter 1: 갇힌 함선, 죽어가는 숨결',
        en: 'Chapter 1: Trapped Ship, Dying Breath'
      },
      description: {
        kr: '통신이 두절된 우주선에서 첫 번째 단서들을 찾아보세요. 선원들의 마지막 기록과 가이아의 수상한 행동을 추적합니다.',
        en: 'Find the first clues on the spaceship that lost communication. Track the crew\'s last records and Gaia\'s suspicious behavior.'
      },
      link: 'chapter1/game'
    },
    {
      number: 2,
      icon: '🤖',
      title: {
        kr: 'Chapter 2: 가이아의 속삭임',
        en: 'Chapter 2: Gaia\'s Whisper'
      },
      description: {
        kr: '인공지능 가이아의 숨겨진 프로토콜을 발견하고, 선원들 사이의 갈등과 비밀을 파헤칩니다.',
        en: 'Discover AI Gaia\'s hidden protocols and uncover conflicts and secrets among the crew members.'
      },
      link: 'chapter2/game'
    },
    {
      number: 3,
      icon: '🌌',
      title: {
        kr: 'Chapter 3: 우주의 진실',
        en: 'Chapter 3: Truth of Space'
      },
      description: {
        kr: '우주 탐사의 진정한 목적과 지구로부터 온 비밀 명령을 발견합니다.',
        en: 'Discover the true purpose of space exploration and secret orders from Earth.'
      },
      link: 'chapter3/game'
    },
    {
      number: 4,
      icon: '⭐',
      title: {
        kr: 'Chapter 4: 오디세이의 운명',
        en: 'Chapter 4: Fate of Odyssey'
      },
      description: {
        kr: '모든 수수께끼가 풀리는 마지막 순간. 오디세이 탐사선의 진정한 운명을 결정합니다.',
        en: 'The final moment when all mysteries are solved. Determine the true fate of the Odyssey exploration ship.'
      },
      link: 'chapter4/game'
    }
  ]
};