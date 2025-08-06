import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { caseCh4 } from './scenario_kr';
import case1FeedbackData4 from './feedbackData_kr';

const Chapter4Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={caseCh4}
        feedbackData={case1FeedbackData4}
        caseId="case1-ch4"
        backUrl="/fragments/case1/chapter4"
        seoTitle="어둠의 대성당 - 4장"
        seoDescription="어둠의 대성당에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,대성당,어둠"
        canonicalUrl="/fragments/case1/chapter4/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
          secondary: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
          accent: '#9d4edd'
        }}
        cardIcon="⛪"
      />
    </div>
  );
};

export default Chapter4Game;