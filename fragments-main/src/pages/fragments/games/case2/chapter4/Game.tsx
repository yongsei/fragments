import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case2Ch4 } from './scenario_kr';
import { case2ChEn4 } from './scenario_en';
import case2FeedbackData4 from './feedbackData_kr';
import case2FeedbackDataEn4 from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter4Game: React.FC = () => {
  const { language } = useLanguage();

  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? case2ChEn4 : case2Ch4;
  const feedbackData = language === 'en' ? case2FeedbackDataEn4 : case2FeedbackData4;
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2d1b2f 0%, #3d2a47 30%, #1a1a2e 70%, #2d1b2f 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}        
        feedbackData={feedbackData}
        caseId="case2-ch4"
        backUrl="/fragments/case2/chapter4"
        seoTitle="침묵의 도서관 - 4장"
        seoDescription="침묵의 도서관에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,도서관,침묵"
        canonicalUrl="/fragments/case2/chapter4/game"
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

export default Chapter4Game;