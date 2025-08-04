import React, { useState, useEffect } from 'react';
import MysteryGameLayout from '../../components/MysteryGameLayout';
import { useLanguage } from '../../hooks/useLanguage';
import type { GameScenario } from './scenario_kr';
import type { CaseFeedbackData } from './feedbackData_kr';
// 정적 import로 변경
import { ashesOfBrasshelmCh3 as scenarioKr } from './scenario_kr';
import { ashesOfBrasshelmCh3 as scenarioEn } from './scenario_en';
import feedbackDataKr from './feedbackData_kr';
import feedbackDataEn from './feedbackData_en';

const MysteryAlchemy5CaseGame: React.FC = () => {
  const { language, t } = useLanguage();
  const [scenario, setScenario] = useState<GameScenario | null>(null);
  const [feedbackData, setFeedbackData] = useState<CaseFeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  // 언어별 데이터 설정 (정적 import 사용)
  useEffect(() => {
    console.log('[Case5 Game] 언어 변경됨:', language);
    setLoading(true);

    try {
      // 언어에 따라 정적으로 불러온 데이터 선택
      const selectedScenario = language === 'en' ? scenarioEn : scenarioKr;
      const selectedFeedbackData = language === 'en' ? feedbackDataEn : feedbackDataKr;

      console.log('[Case5 Game] 선택된 시나리오:', selectedScenario);
      console.log('[Case5 Game] 선택된 피드백 데이터:', selectedFeedbackData);

      setScenario(selectedScenario);
      setFeedbackData(selectedFeedbackData);

      console.log('[Case5 Game] 데이터 설정 완료');
    } catch (error) {
      console.error('[Case5 Game] 데이터 설정 실패:', error);
    } finally {
      setLoading(false);
      console.log('[Case5 Game] 로딩 완료');
    }
  }, [language]);

  if (loading || !scenario || !feedbackData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #feca57 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        {t('loading', 'Loading...')}
      </div>
    );
  }

  // SEO 텍스트도 언어별로 분기
  const seoContent = language === 'en' ? {
    title: "Ashes of Brasshelm Chapter 3 Play - Fragments of Mystery Case5 Game",
    description: "🔥 Play now! The final battle in Brasshelm! Infiltrate Shadow's fortress with your 5-member team. Face the ultimate sacrifice to achieve victory. Play Fragments of Mystery Case5 free game!",
    keywords: "ashes of brasshelm chapter3, fragments of mystery case5, final battle steampunk, shadow fortress, team sacrifice, brasshelm finale, epic conclusion"
  } : {
    title: "브래스헬름의 잿불 챕터3 플레이 - 단서의 파편 케이스5 게임하기",
    description: "🔥 지금 바로 플레이! 브래스헬름의 최종 결전! 5인의 팀과 함께 섀도우의 요새에 잠입하세요. 승리를 위한 궁극의 희생을 마주하세요. 단서의 파편 케이스5 게임 플레이!",
    keywords: "브래스헬름의 잿불 챕터3, 단서의 파편 케이스5, 최종 결전 스팀펑크, 섀도우 요새, 팀 희생, 브래스헬름 피날레, 장대한 결말"
  };

  return (
    <MysteryGameLayout
      scenario={scenario}
      caseId="case5"
      seoTitle={seoContent.title}
      seoDescription={seoContent.description}
      seoKeywords={seoContent.keywords}
      canonicalUrl="/fragments/case5"
      backUrl="/fragments/case5"
      uiCustomization={{
        cardStyles: {
          suspectColor: '#dc2626',
          evidenceColor: '#2563eb',
          locationColor: '#059669',
          discoveredBorderColor: '#feca57',
          selectedBorderColor: '#22c55e',
          cardBackground: 'rgba(255, 255, 255, 0.1)',
          cardHoverEffect: 'rgba(254, 202, 87, 0.2)'
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
          cardBorderRadius: '12px',
          panelBorderRadius: '16px'
        }
      }}
      themeColors={{
        primary: '#ff6b6b',
        secondary: '#ee5a24',
        accent: '#feca57'
      }}
      cardIcon="🔥"
      feedbackData={feedbackData}
    />
  );
};

export default MysteryAlchemy5CaseGame;