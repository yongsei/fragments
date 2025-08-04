import React from 'react';
import MysteryIntroLayout from '../../components/MysteryIntroLayout';
import { useFragmentsTranslation } from '../../hooks/useFragmentsTranslation';

const ChronosParadoxIntro: React.FC = () => {
  const { t, originalLang } = useFragmentsTranslation();
  
  const previewCards = [
    {
      icon: '⏰',
      title: originalLang === 'kr' ? '시간 이동 장치' : 'Time Travel Device',
      description: originalLang === 'kr' ? '박사가 개발한 시간여행 프로토타입' : 'Time travel prototype developed by the doctor',
      gradientColors: ['#667eea', '#764ba2']
    },
    {
      icon: '🔮',
      title: originalLang === 'kr' ? '양자 파편' : 'Quantum Fragments',
      description: originalLang === 'kr' ? '시공간 붕괴로 생성된 신비한 물질' : 'Mysterious substance created by spacetime collapse',
      gradientColors: ['#f093fb', '#f5576c']
    },
    {
      icon: '📊',
      title: originalLang === 'kr' ? '시간 로그 데이터' : 'Time Log Data',
      description: originalLang === 'kr' ? '박사의 비밀 실험 기록들' : 'Secret experimental records of the doctor',
      gradientColors: ['#4facfe', '#00f2fe']
    }
  ];

  const featureCards = [
    {
      icon: '🚀',
      title: originalLang === 'kr' ? 'SF 시간여행 미스터리' : 'Sci-Fi Time Travel Mystery',
      description: originalLang === 'kr' ? '과학과 철학이 만나는 미래적 추리 게임을 경험하세요' : 'Experience a futuristic detective game where science meets philosophy'
    },
    {
      icon: '🧩',
      title: originalLang === 'kr' ? '혁신적 추리 시스템' : 'Innovative Deduction System',
      description: originalLang === 'kr' ? '기존 추리 게임의 상식을 뒤엎는 새로운 형태의 미스터리' : 'A new form of mystery that overturns conventional detective game wisdom'
    },
    {
      icon: '⚡',
      title: originalLang === 'kr' ? '시공간 조작 메커니즘' : 'Spacetime Manipulation',
      description: originalLang === 'kr' ? '시간과 공간의 비밀을 풀어가며 진실에 다가가세요' : 'Approach the truth by unraveling the secrets of time and space'
    }
  ];

  return (
    <MysteryIntroLayout
      seoTitle={originalLang === 'kr'
        ? "크로노스 패러독스 - 단서의 파편 케이스2 SF 시간여행 미스터리"
        : "Chronos Paradox - Fragment of Mystery Case2 Sci-Fi Time Travel Mystery"
      }
      seoDescription={originalLang === 'kr'
        ? "⚛️ 시간 연구소에서 사라진 크로노스 박사! AI, 시간여행자, 라이벌 과학자 중 누가 범인일까? 양자물리학과 시간여행이 얽힌 복잡한 미스터리를 해결하세요. 단서의 파편 케이스2 SF 추리게임!"
        : "⚛️ Dr. Chronos disappeared from the time research institute! Who is the culprit among AI, time travelers, and rival scientists? Solve complex mysteries involving quantum physics and time travel. Fragment of Mystery Case2 Sci-Fi detective game!"
      }
      seoKeywords={originalLang === 'kr'
        ? "크로노스 패러독스, 단서의 파편 케이스2, SF추리게임, 시간여행게임, 양자물리학게임, 미래미스터리, 과학추리, 시공간퍼즐, SF미스터리게임, 타임패러독스, 시간여행추리"
        : "chronos paradox, fragment of mystery case2, sci-fi detective game, time travel game, quantum physics game, future mystery, science detective, spacetime puzzle, sci-fi mystery game, time paradox, time travel detective"
      }
      canonicalUrl="/fragments/case2"
      title={t.case2.title}
      subtitle={t.case2.subtitle}
            storyTitle={t.case2.storyTitle}
      storyContent={t.case2.storyContent}
      gameUrl="game"
      backUrl="/fragments"
      caseId="case2"
      uiCustomization={{
        backgroundGradient: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1e3c72 100%)',
        titleGradient: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
        accentColor: '#667eea',
        buttonGradient: 'linear-gradient(45deg, #667eea, #764ba2)',
        fontFamily: "'Orbitron', 'Noto Sans KR', sans-serif",
        titleIcon: '🚀',
        gameButtonIcon: '⚡',
        gameButtonText: originalLang === 'kr' ? '시공간 수사 시작하기' : 'Start Spacetime Investigation'
      }}
    />
  );
};

export default ChronosParadoxIntro;