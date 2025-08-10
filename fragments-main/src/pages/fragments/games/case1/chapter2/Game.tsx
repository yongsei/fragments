import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { caseCh2 } from './scenario_kr';
import { caseChEn2 } from './scenario_en';
import case1FeedbackData2 from './feedbackData_kr';
import case1FeedbackDataEn2 from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter2Game: React.FC = () => {
  const { language } = useLanguage();
  
  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? caseChEn2 : caseCh2;
  const feedbackData = language === 'en' ? case1FeedbackDataEn2 : case1FeedbackData2;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}        
        feedbackData={feedbackData}
        caseId="case1-ch2"
        backUrl="/fragments/case1/"
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