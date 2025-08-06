import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { caseCh2 } from './scenario_kr';
import case1FeedbackData2 from './feedbackData_kr';

const Chapter2Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={caseCh2}
        feedbackData={case1FeedbackData2}
        caseId="case1-ch2"
        backUrl="/fragments/case1/chapter2"
        seoTitle="어둠의 대성당 - 2장"
        seoDescription="어둠의 대성당에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,대성당,어둠"
        canonicalUrl="/fragments/case1/chapter2/game"
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

export default Chapter2Game;