import React, { useState, useEffect } from 'react';
import MysteryGameLayout from '../../components/MysteryGameLayout';
import { useLanguage } from '../../hooks/useLanguage';
import type { GameScenario } from './scenario_kr';
import type { CaseFeedbackData } from './feedbackData_kr';

const MysteryAlchemy1CaseGame: React.FC = () => {
  const { language, t } = useLanguage();
  const [scenario, setScenario] = useState<GameScenario | null>(null);
  const [feedbackData, setFeedbackData] = useState<CaseFeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  // 언어별 파일 동적 로딩
  useEffect(() => {
    const loadLanguageFiles = async () => {
      setLoading(true);
      try {
        // 시나리오 파일 로딩
        const scenarioModule = await import(`./scenario_${language}`);
        const feedbackModule = await import(`./feedbackData_${language}`);
        
        setScenario(scenarioModule.mansionMurderScenario);
        setFeedbackData(feedbackModule.default);
      } catch (error) {
        console.error('Failed to load language files:', error);
        // 폴백: 한국어 파일 로딩
        try {
          const scenarioModule = await import('./scenario_kr');
          const feedbackModule = await import('./feedbackData_kr');
          setScenario(scenarioModule.mansionMurderScenario);
          setFeedbackData(feedbackModule.default);
        } catch (fallbackError) {
          console.error('Failed to load fallback files:', fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    loadLanguageFiles();
  }, [language]);

  if (loading || !scenario || !feedbackData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #ffd700 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        {t('loading', 'Loading...')}
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
    description: "🔍 지금 바로 플레이! 저택에서 일어난 독살 사건의 범인을 찾아보세요. 단서 카드를 조합하고 용의자들을 심문하여 진실을 밝혀내는 추리게임. 단서의 파편 케이스1 무료 게임 플레이!",
    keywords: "저택 살인사건 플레이, 단서의 파편 게임하기, 추리게임 플레이, 미스터리게임 온라인, 독살사건 해결, 범인찾기 게임, 클래식 추리 플레이, 무료 추리게임"
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