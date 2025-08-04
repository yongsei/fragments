import React, { useState, useEffect } from 'react';
import MysteryGameLayout from '../../components/MysteryGameLayout';
import { useLanguage } from '../../hooks/useLanguage';
import type { GameScenario } from './scenario_kr';
import type { CaseFeedbackData } from './feedbackData_kr';
// 정적 import로 변경
import { mansionMurderScenario as scenarioKr } from './scenario_kr';
import { mansionMurderScenario as scenarioEn } from './scenario_en';
import feedbackDataKr from './feedbackData_kr';
import feedbackDataEn from './feedbackData_en';

const MysteryAlchemy1CaseGame: React.FC = () => {
  const { language, t } = useLanguage();
  const [scenario, setScenario] = useState<GameScenario | null>(null);
  const [feedbackData, setFeedbackData] = useState<CaseFeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  // 언어별 데이터 설정 (정적 import 사용)
  useEffect(() => {
    console.log('[Case1 Game] 언어 변경됨:', language);
    setLoading(true);
    
    try {
      // 언어에 따라 정적으로 불러온 데이터 선택
      const selectedScenario = language === 'en' ? scenarioEn : scenarioKr;
      const selectedFeedbackData = language === 'en' ? feedbackDataEn : feedbackDataKr;
      
      console.log('[Case1 Game] 선택된 시나리오:', selectedScenario);
      console.log('[Case1 Game] 선택된 피드백 데이터:', selectedFeedbackData);
      
      setScenario(selectedScenario);
      setFeedbackData(selectedFeedbackData);
      
      console.log('[Case1 Game] 데이터 설정 완료');
    } catch (error) {
      console.error('[Case1 Game] 데이터 설정 실패:', error);
    } finally {
      setLoading(false);
      console.log('[Case1 Game] 로딩 완료');
    }
  }, [language]);

  if (loading || !scenario || !feedbackData) {
    console.log('[Case1 Game] 로딩 상태:', { loading, hasScenario: !!scenario, hasFeedbackData: !!feedbackData });
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #ffd700 100%)',
        color: 'white',
        fontSize: '1.2rem',
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <div style={{ marginBottom: '20px' }}>
          {t('loading', '로딩 중...')}
        </div>
        <div style={{ fontSize: '0.9rem', opacity: 0.7, textAlign: 'center' }}>
          {loading && <div>• 언어 파일 로딩 중...</div>}
          {!loading && !scenario && <div>• 시나리오 로딩 실패</div>}
          {!loading && !feedbackData && <div>• 피드백 데이터 로딩 실패</div>}
        </div>
      </div>
    );
  }

  // SEO 텍스트도 언어별로 분기
  const seoContent = language === 'en' ? {
    title: "Mansion Murder Case Play - Fragments of Mystery Case1 Game",
    description: "🔍 Play now! Find the culprit of the poisoning case in the mansion. Mystery game combining clue cards and interrogating suspects to reveal the truth. Play Fragments of Mystery Case1 free game!",
    keywords: "mansion murder case play, fragments of mystery game, mystery game play, mystery game online, poisoning case solve, find culprit game, classic mystery play, free mystery game"
  } : {
    title: "저택 살인사건 플레이 - 단서의 파편 케이스1 게임하기",
    description: "🔍 지금 바로 플레이! 저택에서 일어난 독살 사건의 범인을 찾아보세요. 단서 카드를 조합하고 용의자들을 심문하여 진실을 밝혀내는 추리게임. 단서의 파편 케이스1 게임 플레이!",
    keywords: "저택 살인사건 플레이, 단서의 파편 게임하기, 추리게임 플레이, 미스터리게임 온라인, 독살사건 해결, 범인찾기 게임, 클래식 추리 플레이, 추리게임"
  };

  return (
    <MysteryGameLayout
      scenario={scenario}
      caseId="case1"
      seoTitle={seoContent.title}
      seoDescription={seoContent.description}
      seoKeywords={seoContent.keywords}
      canonicalUrl="/fragments/case1"
      backUrl="/fragments/case1"
      uiCustomization={{
        cardStyles: {
          suspectColor: '#dc2626',
          evidenceColor: '#2563eb', 
          locationColor: '#059669',
          discoveredBorderColor: '#ffd700',
          selectedBorderColor: '#22c55e',
          cardBackground: 'rgba(255, 255, 255, 0.1)',
          cardHoverEffect: 'rgba(255, 215, 0, 0.2)'
        },
        backgroundPattern: {
          type: 'none'
        },
        typography: {
          headingFont: "'Cinzel', serif",
          bodyFont: language === 'en' ? "'Inter', sans-serif" : "'Noto Sans KR', sans-serif"
        },
        animations: {
          cardHoverScale: 1.05,
          connectionButtonPulse: true
        },
        layout: {
          cardBorderRadius: '12px',
          panelBorderRadius: '15px'
        }
      }}
      themeColors={{
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#ffd700'
      }}
      cardIcon="🃏"
      feedbackData={feedbackData}
    />
  );
};

export default MysteryAlchemy1CaseGame;