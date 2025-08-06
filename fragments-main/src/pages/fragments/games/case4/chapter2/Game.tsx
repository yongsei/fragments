import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case4Ch2 } from './scenario_kr';
import case4FeedbackData2 from './feedbackData_kr';

const Chapter2Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={case4Ch2}
        feedbackData={case4FeedbackData2}
        caseId="case4-ch2"
        backUrl="/fragments/case4/chapter2"
        seoTitle="디지털 포트리스 - 2장"
        seoDescription="디지털 세계의 미스터리 2장"
        seoKeywords="미스터리,추리,디지털,포트리스"
        canonicalUrl="/fragments/case4/chapter2/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          accent: '#667eea'
        }}
        cardIcon="💻"
      />
    </div>
  );
};

export default Chapter2Game;