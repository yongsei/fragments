import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case3Ch1 } from './scenario_kr';
import case3FeedbackData1 from './feedbackData_kr';

const Chapter1Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4a2c17 0%, #8b4513 30%, #d2691e 70%, #ffa07a 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={case3Ch1}
        feedbackData={case3FeedbackData1}
        caseId="case3-ch1"
        backUrl="/fragments/case3/chapter1"
        seoTitle="브래스헬름의 잿불 - 1장"
        seoDescription="브래스헬름의 잿불에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,브래스헬름,잿불"
        canonicalUrl="/fragments/case3/chapter1/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #4a2c17 0%, #8b4513 30%, #d2691e 70%, #ffa07a 100%)',
          secondary: 'linear-gradient(135deg, #ffa07a 0%, #d2691e 100%)',
          accent: '#ffa07a'
        }}
        cardIcon="🔥"
      />
    </div>
  );
};

export default Chapter1Game;