import React, { useState, useEffect } from 'react';
import MysteryGameLayout from '../../components/MysteryGameLayout';
import { useLanguage } from '../../hooks/useLanguage';
import type { GameScenario } from './scenario_kr';
import type { CaseFeedbackData } from './feedbackData_kr';
// 정적 import로 변경
import { chronosParadoxScenario as scenarioKr } from './scenario_kr';
import { chronosParadoxScenario as scenarioEn } from './scenario_en';
import feedbackDataKr from './feedbackData_kr';
import feedbackDataEn from './feedbackData_en';

const ChronosParadoxGame: React.FC = () => {
  const { language, t } = useLanguage();
  const [scenario, setScenario] = useState<GameScenario | null>(null);
  const [feedbackData, setFeedbackData] = useState<CaseFeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  // 언어별 데이터 설정 (정적 import 사용)
  useEffect(() => {
    console.log('[Case2 Game] 언어 변경됨:', language);
    setLoading(true);
    
    try {
      // 언어에 따라 정적으로 불러온 데이터 선택
      const selectedScenario = language === 'en' ? scenarioEn : scenarioKr;
      const selectedFeedbackData = language === 'en' ? feedbackDataEn : feedbackDataKr;
      
      console.log('[Case2 Game] 선택된 시나리오:', selectedScenario);
      console.log('[Case2 Game] 선택된 피드백 데이터:', selectedFeedbackData);
      
      setScenario(selectedScenario);
      setFeedbackData(selectedFeedbackData);
      
      console.log('[Case2 Game] 데이터 설정 완료');
    } catch (error) {
      console.error('[Case2 Game] 데이터 설정 실패:', error);
    } finally {
      setLoading(false);
      console.log('[Case2 Game] 로딩 완료');
    }
  }, [language]);

  if (loading || !scenario || !feedbackData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #667eea 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        {t('loading', 'Loading...')}
      </div>
    );
  }

  // SEO 텍스트도 언어별로 분기
  const seoContent = language === 'en' ? {
    title: "Chronos Paradox Play - Fragments of Mystery Case2 SF Game",
    description: "🚀 Play now! Uncover the secrets of the Time Research Institute. SF mystery game analyzing quantum fragments and time logs to solve Dr. Chronos's disappearance. Play Fragments of Mystery Case2 free!",
    keywords: "chronos paradox play, fragments of mystery case2 game, SF mystery play, time travel game online, quantum physics mystery, time paradox solve, SF mystery play"
  } : {
    title: "크로노스 패러독스 플레이 - 단서의 파편 케이스2 SF게임하기",
    description: "🚀 지금 바로 플레이! 시간 연구소의 비밀을 파헤쳐보세요. 양자 파편과 시간 로그를 분석하여 크로노스 박사 실종 사건을 해결하는 SF 추리게임. 단서의 파편 케이스2 게임!",
    keywords: "크로노스 패러독스 플레이, 단서의 파편 케이스2 게임, SF 추리 플레이, 시간여행게임 온라인, 양자물리학 미스터리, 타임패러독스 해결, SF 미스터리 플레이"
  };

  return (
    <MysteryGameLayout
      scenario={scenario}
      caseId="case2"
      maxHints={5}
      seoTitle={seoContent.title}
      seoDescription={seoContent.description}
      seoKeywords={seoContent.keywords}
      canonicalUrl="/fragments/case2"
      backUrl="/fragments/case2"
      uiCustomization={{
        cardStyles: {
          suspectColor: '#8b5cf6',    // 보라색 - SF 느낌
          evidenceColor: '#06b6d4',   // 시안색 - 미래 기술
          locationColor: '#10b981',   // 에메랄드 - 연구소
          discoveredBorderColor: '#667eea', // 보라-파랑
          selectedBorderColor: '#f093fb',   // 핑크-보라
          cardBackground: 'rgba(102, 126, 234, 0.1)', // 보라빛 투명
          cardHoverEffect: 'rgba(102, 126, 234, 0.2)'
        },
        systemUI: {
          topBarBackground: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)',
          bottomBarBackground: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)'
        },
        backgroundPattern: {
          type: 'grid',  // 미래적 패턴
          opacity: 0.05,
          color: '#667eea'
        },
        typography: {
          headingFont: "'Orbitron', sans-serif",     // SF 미래 폰트
          bodyFont: "'Noto Sans KR', sans-serif"
        },
        animations: {
          cardHoverScale: 1.08,        // 더 강한 호버 효과
          connectionButtonPulse: true,
          resultScreenEffect: 'sparkles'  // SF 효과
        },
        layout: {
          cardBorderRadius: '16px',    // 더 둥근 모서리
          panelBorderRadius: '20px'
        }
      }}
      themeColors={{
        primary: '#0c0c0c',      // 딥 블랙
        secondary: '#1a1a2e',    // 다크 네이비  
        accent: '#667eea'        // 보라-파랑 액센트
      }}
      cardIcon="⚛️"
      feedbackData={feedbackData}
    />
  );
};

export default ChronosParadoxGame;