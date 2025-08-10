import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { caseCh4 } from './scenario_kr';
import { caseChEn4 } from './scenario_en';
import case1FeedbackData4 from './feedbackData_kr';
import case1FeedbackDataEn4 from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter4Game: React.FC = () => {
  const { language } = useLanguage();

  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? caseChEn4 : caseCh4;
  const feedbackData = language === 'en' ? case1FeedbackDataEn4 : case1FeedbackData4;
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}        
        feedbackData={feedbackData}
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