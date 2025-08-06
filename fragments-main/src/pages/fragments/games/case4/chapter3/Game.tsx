import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case4Ch3 } from './scenario_kr';
import case4FeedbackData3 from './feedbackData_kr';

const Chapter3Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={case4Ch3}
        feedbackData={case4FeedbackData3}
        caseId="case4-ch3"
        backUrl="/fragments/case4/chapter3"
        seoTitle="디지털 포트리스 - 3장"
        seoDescription="디지털 세계의 미스터리 3장"
        seoKeywords="미스터리,추리,디지털,포트리스"
        canonicalUrl="/fragments/case4/chapter3/game"
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

export default Chapter3Game;