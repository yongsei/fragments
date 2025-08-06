import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case5Ch3 } from './scenario_kr';
import { case5ChEn3 } from './scenario_en';
import case5FeedbackData3 from './feedbackData_kr';
import case5FeedbackDataEn3 from './feedbackData_en';
import { case5DarkTheme } from '../case5-theme';

const Chapter3Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: case5DarkTheme.primaryGradient,
      color: case5DarkTheme.textPrimary
    }}>
      <MysteryGameLayout
        scenario={case5Ch3}
        feedbackData={case5FeedbackData3}
        caseId="case5-ch3"
        backUrl="/fragments/case5/chapter3"
        seoTitle="시간의 그림자들 - 3장"
        seoDescription="시간 속 미스터리 3장"
        seoKeywords="미스터리,추리,시간,그림자"
        canonicalUrl="/fragments/case5/chapter3/game"
        themeColors={{
          primary: case5DarkTheme.primaryGradient,
          secondary: case5DarkTheme.secondaryGradient,
          accent: case5DarkTheme.accentPrimary
        }}
        cardIcon="⏳"
      />
    </div>
  );
};

export default Chapter3Game;