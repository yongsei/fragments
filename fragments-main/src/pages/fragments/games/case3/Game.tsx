import React, { useState, useEffect } from 'react';
import MysteryGameLayout from '../../components/MysteryGameLayout';
import { useLanguage } from '../../hooks/useLanguage';
import type { GameScenario } from './scenario_kr';
import type { CaseFeedbackData } from './feedbackData_kr';
// 정적 import로 변경
import { ashesOfBrasshelmCh1 as scenarioKr } from './scenario_kr';
import { ashesOfBrasshelmCh1 as scenarioEn } from './scenario_en';
import feedbackDataKr from './feedbackData_kr';
import feedbackDataEn from './feedbackData_en';

const MysteryAlchemy3CaseGame: React.FC = () => {
  const { language, t } = useLanguage();
  const [scenario, setScenario] = useState<GameScenario | null>(null);
  const [feedbackData, setFeedbackData] = useState<CaseFeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  // 언어별 데이터 설정 (정적 import 사용)
  useEffect(() => {
    console.log('[Case3 Game] 언어 변경됨:', language);
    setLoading(true);
    
    try {
      // 언어에 따라 정적으로 불러온 데이터 선택
      const selectedScenario = language === 'en' ? scenarioEn : scenarioKr;
      const selectedFeedbackData = language === 'en' ? feedbackDataEn : feedbackDataKr;
      
      console.log('[Case3 Game] 선택된 시나리오:', selectedScenario);
      console.log('[Case3 Game] 선택된 피드백 데이터:', selectedFeedbackData);
      
      setScenario(selectedScenario);
      setFeedbackData(selectedFeedbackData);
      
      console.log('[Case3 Game] 데이터 설정 완료');
    } catch (error) {
      console.error('[Case3 Game] 데이터 설정 실패:', error);
    } finally {
      setLoading(false);
      console.log('[Case3 Game] 로딩 완료');
    }
  }, [language]);

  if (loading || !scenario || !feedbackData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2d1b69 0%, #11998e 50%, #38ef7d 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        {t('loading', 'Loading...')}
      </div>
    );
  }

  // SEO 텍스트도 언어별로 분기
  const seoContent = language === 'en' ? {
    title: "Ashes of Brasshelm Chapter 1 Play - Fragments of Mystery Case3 Game",
    description: "🔥 Play now! Investigate the mysterious murder case in the steampunk city of Brasshelm. Uncover the secrets of the Shadow of Steam organization. Play Fragments of Mystery Case3 free game!",
    keywords: "ashes of brasshelm play, fragments of mystery case3, steampunk mystery game, shadow of steam, brasshelm investigation, mystery game online, free steampunk game"
  } : {
    title: "브래스헬름의 잿불 챕터1 플레이 - 단서의 파편 케이스3 게임하기",
    description: "🔥 지금 바로 플레이! 스팀펑크 도시 브래스헬름에서 벌어진 의문의 살인사건을 수사하세요. 섀도우 오브 스팀 조직의 비밀을 파헤쳐보세요. 단서의 파편 케이스3 게임 플레이!",
    keywords: "브래스헬름의 잿불 플레이, 단서의 파편 케이스3, 스팀펑크 추리게임, 섀도우 오브 스팀, 브래스헬름 수사, 미스터리게임 온라인, 스팀펑크게임"
  };

  return (
    <MysteryGameLayout
      scenario={scenario}
      caseId="case3"
      seoTitle={seoContent.title}
      seoDescription={seoContent.description}
      seoKeywords={seoContent.keywords}
      canonicalUrl="/fragments/case3"
      backUrl="/fragments/case3"
      uiCustomization={{
        cardStyles: {
          suspectColor: '#dc2626',
          evidenceColor: '#2563eb', 
          locationColor: '#059669',
          discoveredBorderColor: '#38ef7d',
          selectedBorderColor: '#22c55e',
          cardBackground: 'rgba(255, 255, 255, 0.1)',
          cardHoverEffect: 'rgba(56, 239, 125, 0.2)'
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
          cardBorderRadius: '8px',
          panelBorderRadius: '12px'
        }
      }}
      themeColors={{
        primary: '#2d1b69',
        secondary: '#11998e',
        accent: '#38ef7d'
      }}
      cardIcon="⚙️"
      feedbackData={feedbackData}
    />
  );
};

export default MysteryAlchemy3CaseGame;