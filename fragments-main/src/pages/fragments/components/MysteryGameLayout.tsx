import React, { useState, useEffect } from 'react';
import MobileMysteryGameLayout from './MobileMysteryGameLayout';
import PCMysteryGameLayout from './PCMysteryGameLayout';
import { LanguageContext, useLanguageState } from '../hooks/useLanguage';
import type { GameScenario } from '../games/case1/scenario_kr';
import type { CaseFeedbackData } from '../games/case1/feedbackData_kr';

interface UICustomization {
  cardStyles?: {
    suspectColor?: string;
    evidenceColor?: string;
    locationColor?: string;
    discoveredBorderColor?: string;
    selectedBorderColor?: string;
    cardBackground?: string;
    cardHoverEffect?: string;
  };
  backgroundPattern?: {
    type?: 'none' | 'dots' | 'grid' | 'waves';
    opacity?: number;
    color?: string;
  };
  systemUI?: {
    topBarBackground?: string;  // 상단 바 배경색
    bottomBarBackground?: string;  // 하단 바 배경색
  };
  typography?: {
    headingFont?: string;
    bodyFont?: string;
    headingWeight?: number;
    bodyWeight?: number;
  };
  animations?: {
    cardHoverScale?: number;
    connectionButtonPulse?: boolean;
    resultScreenEffect?: 'confetti' | 'sparkles' | 'none';
  };
  layout?: {
    cardBorderRadius?: string;
    panelBorderRadius?: string;
    containerMaxWidth?: string;
    cardSpacing?: string;
  };
}

interface MysteryGameLayoutProps {
  scenario: GameScenario;
  maxHints?: number;
  initialCards?: string[];
  winCondition?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonicalUrl: string;
  backUrl: string;
  nextChapterUrl?: string; // 다음 챕터 URL
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  cardIcon: string;
  caseId?: string; // 진행 상태 저장을 위한 케이스 ID
  uiCustomization?: UICustomization; // 새로운 UI 커스터마이징 옵션
  onCardUnlock?: (unlockId: string) => string[]; // 카드 unlock 시 추가할 카드 ID들 반환
  feedbackData?: CaseFeedbackData; // 피드백 데이터를 직접 전달 (재사용성을 위해 옵셔널)
}

const MysteryGameLayout: React.FC<MysteryGameLayoutProps> = (props) => {
  // 언어 상태 관리
  const languageState = useLanguageState();
  
  // 모바일 감지 상태
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // maxHints 기본값 3으로 고정
  const propsWithDefaults = {
    ...props,
    maxHints: props.maxHints || 3
  };

  // 언어 컨텍스트로 전체 래핑
  return (
    <LanguageContext.Provider value={languageState}>
      {/* 디바이스에 따라 적절한 레이아웃 컴포넌트 렌더링 */}
      {isMobile ? (
        <MobileMysteryGameLayout {...propsWithDefaults} />
      ) : (
        <PCMysteryGameLayout {...propsWithDefaults} />
      )}
    </LanguageContext.Provider>
  );
};

export default MysteryGameLayout;