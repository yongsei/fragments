import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case2Ch1 } from './scenario_kr';
import case2FeedbackData1 from './feedbackData_kr';

const Chapter1Game: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2d1b2f 0%, #3d2a47 30%, #1a1a2e 70%, #2d1b2f 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={case2Ch1}
        feedbackData={case2FeedbackData1}
        caseId="case2-ch1"
        backUrl="/fragments/case2/chapter1"
        seoTitle="침묵의 도서관 - 1장"
        seoDescription="침묵의 도서관에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,도서관,침묵"
        canonicalUrl="/fragments/case2/chapter1/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #2d1b2f 0%, #3d2a47 30%, #1a1a2e 70%, #2d1b2f 100%)',
          secondary: 'linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)',
          accent: '#d946ef'
        }}
        cardIcon="📚"
      />
    </div>
  );
};

export default Chapter1Game;