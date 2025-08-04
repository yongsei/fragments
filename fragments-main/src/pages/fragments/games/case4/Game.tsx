import React, { useState, useEffect } from 'react';
import MysteryGameLayout from '../../components/MysteryGameLayout';
import { useLanguage } from '../../hooks/useLanguage';
import type { GameScenario } from './scenario_kr';
import type { CaseFeedbackData } from './feedbackData_kr';
// 정적 import로 변경
import { ashesOfBrasshelmCh2 as scenarioKr } from './scenario_kr';
import { ashesOfBrasshelmCh2 as scenarioEn } from './scenario_en';
import feedbackDataKr from './feedbackData_kr';
import feedbackDataEn from './feedbackData_en';

const MysteryAlchemy4CaseGame: React.FC = () => {
  const { language, t } = useLanguage();
  const [scenario, setScenario] = useState<GameScenario | null>(null);
  const [feedbackData, setFeedbackData] = useState<CaseFeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  // 언어별 데이터 설정 (정적 import 사용)
  useEffect(() => {
    console.log('[Case4 Game] 언어 변경됨:', language);
    setLoading(true);
    
    try {
      // 언어에 따라 정적으로 불러온 데이터 선택
      const selectedScenario = language === 'en' ? scenarioEn : scenarioKr;
      const selectedFeedbackData = language === 'en' ? feedbackDataEn : feedbackDataKr;
      
      console.log('[Case4 Game] 선택된 시나리오:', selectedScenario);
      console.log('[Case4 Game] 선택된 피드백 데이터:', selectedFeedbackData);
      
      setScenario(selectedScenario);
      setFeedbackData(selectedFeedbackData);
      
      console.log('[Case4 Game] 데이터 설정 완료');
    } catch (error) {
      console.error('[Case4 Game] 데이터 설정 실패:', error);
    } finally {
      setLoading(false);
      console.log('[Case4 Game] 로딩 완료');
    }
  }, [language]);

  if (loading || !scenario || !feedbackData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        {t('loading', 'Loading...')}
      </div>
    );
  }

  // SEO 텍스트도 언어별로 분기
  const seoContent = language === 'en' ? {
    title: "Ashes of Brasshelm Chapter 2 Play - Fragments of Mystery Case4 Game",
    description: "🤝 Play now! Form an unexpected alliance in Brasshelm. Meet Dr. Isolde and build a team of 5 to stop the Shadow of Steam's plan. Play Fragments of Mystery Case4 free game!",
    keywords: "ashes of brasshelm chapter2, fragments of mystery case4, steampunk alliance game, team building mystery, dr isolde, shadow of steam, brasshelm adventure"
  } : {
    title: "브래스헬름의 잿불 챕터2 플레이 - 단서의 파편 케이스4 게임하기",
    description: "🤝 지금 바로 플레이! 브래스헬름에서 예상 밖의 동맹을 결성하세요. 이졸데 박사를 만나고 5인의 팀을 구성하여 섀도우 오브 스팀의 계획을 막아보세요. 단서의 파편 케이스4 게임 플레이!",
    keywords: "브래스헬름의 잿불 챕터2, 단서의 파편 케이스4, 스팀펑크 동맹게임, 팀 구성 미스터리, 이졸데 박사, 섀도우 오브 스팀, 브래스헬름 모험"
  };

  return (
    <MysteryGameLayout
      scenario={scenario}
      caseId="case4"
      seoTitle={seoContent.title}
      seoDescription={seoContent.description}
      seoKeywords={seoContent.keywords}
      canonicalUrl="/fragments/case4"
      backUrl="/fragments/case4"
      uiCustomization={{
        cardStyles: {
          suspectColor: '#dc2626',
          evidenceColor: '#2563eb', 
          locationColor: '#059669',
          discoveredBorderColor: '#f093fb',
          selectedBorderColor: '#22c55e',
          cardBackground: 'rgba(255, 255, 255, 0.1)',
          cardHoverEffect: 'rgba(240, 147, 251, 0.2)'
        },
        backgroundPattern: {
          type: 'none'
        },
        typography: {
          headingFont: "'Orbitron', monospace",
          bodyFont: language === 'en' ? "'Inter', sans-serif" : "'Noto Sans KR', sans-serif"
        },
        animations: {
          cardHoverScale: 1.05,
          connectionButtonPulse: true
        },
        layout: {
          cardBorderRadius: '10px',
          panelBorderRadius: '14px'
        }
      }}
      themeColors={{
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb'
      }}
      cardIcon="🤝"
      feedbackData={feedbackData}
    />
  );
};

export default MysteryAlchemy4CaseGame;