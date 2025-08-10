import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case3Ch2 } from './scenario_kr';
import { case3ChEn2 } from './scenario_en';
import case3FeedbackData2 from './feedbackData_kr';
import case3FeedbackDataEn2 from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter2Game: React.FC = () => {
  const { language } = useLanguage();

  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? case3ChEn2 : case3Ch2;
  const feedbackData = language === 'en' ? case3FeedbackDataEn2 : case3FeedbackData2;
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4a2c17 0%, #8b4513 30%, #d2691e 70%, #ffa07a 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}        
        feedbackData={feedbackData}
        caseId="case3-ch2"
        backUrl="/fragments/case3/"
        seoTitle="브래스헬름의 잿불 - 2장"
        seoDescription="브래스헬름의 잿불에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,브래스헬름,잿불"
        canonicalUrl="/fragments/case3/chapter2/game"
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

export default Chapter2Game;