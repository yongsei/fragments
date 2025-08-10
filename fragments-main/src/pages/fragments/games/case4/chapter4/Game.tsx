import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case4Ch4 } from './scenario_kr';
import { case4ChEn4 } from './scenario_en';
import case4FeedbackData4 from './feedbackData_kr';
import case4FeedbackDataEn4 from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter4Game: React.FC = () => {
  const { language } = useLanguage();

  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? case4ChEn4 : case4Ch4;
  const feedbackData = language === 'en' ? case4FeedbackDataEn4 : case4FeedbackData4;
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}        
        feedbackData={feedbackData}
        caseId="case4-ch4"
        backUrl="/fragments/case4/chapter4"
        seoTitle="디지털 포트리스 - 4장"
        seoDescription="디지털 세계의 미스터리 4장"
        seoKeywords="미스터리,추리,디지털,포트리스"
        canonicalUrl="/fragments/case4/chapter4/game"
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

export default Chapter4Game;