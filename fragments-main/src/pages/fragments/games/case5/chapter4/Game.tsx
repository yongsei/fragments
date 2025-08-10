import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case5Ch4 } from './scenario_kr';
import { case5ChEn4 } from './scenario_en';
import case5FeedbackData4 from './feedbackData_kr';
import case5FeedbackDataEn4 from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';
import { case5DarkTheme } from '../case5-theme';

const Chapter4Game: React.FC = () => {
  const { language } = useLanguage();

  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? case5ChEn4 : case5Ch4;
  const feedbackData = language === 'en' ? case5FeedbackDataEn4 : case5FeedbackData4;
  return (
    <div style={{
      minHeight: '100vh',
      background: case5DarkTheme.primaryGradient,
      color: case5DarkTheme.textPrimary
    }}>
      <MysteryGameLayout
        scenario={scenario}        
        feedbackData={feedbackData}
        
        caseId="case5-ch4"
        seoTitle="시간의 그림자들 - 4장"
        seoDescription="시간 속 미스터리 4장"
        seoKeywords="미스터리,추리,시간,그림자"
        canonicalUrl="/fragments/case5/chapter4/game"
        themeColors={{
          primary: case5DarkTheme.primaryGradient,
          secondary: case5DarkTheme.secondaryGradient,
          accent: case5DarkTheme.accentPrimary
        }}
        cardIcon="⏳"
        backUrl="/fragments/case5/chapter4"
      />
    </div>
  );
};

export default Chapter4Game;