import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case5Ch8 } from './scenario_kr';
import { case5ChEn8 } from './scenario_en';
import case5FeedbackData8 from './feedbackData_kr';
import case5FeedbackDataEn8 from './feedbackData_en';
import { case5DarkTheme } from '../case5-theme';

const Chapter8Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: case5DarkTheme.primaryGradient,
      color: case5DarkTheme.textPrimary
    }}>
      <MysteryGameLayout
        scenario={case5Ch8}
        
        feedbackData={case5FeedbackData8}
        
        caseId="case5-ch8"
        seoTitle="시간의 그림자들 - 8장"
        seoDescription="시간 속 미스터리 8장"
        seoKeywords="미스터리,추리,시간,그림자"
        canonicalUrl="/fragments/case5/chapter8/game"
        themeColors={{
          primary: case5DarkTheme.primaryGradient,
          secondary: case5DarkTheme.secondaryGradient,
          accent: case5DarkTheme.accentPrimary
        }}
        cardIcon="⏳"
        backUrl="/fragments/case5/chapter8"
      />
    </div>
  );
};

export default Chapter8Game;