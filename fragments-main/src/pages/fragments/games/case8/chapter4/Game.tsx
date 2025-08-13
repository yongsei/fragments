import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case8_chapter3_kr } from './seanrio_kr';
import { case8_chapter3_en } from './seanrio_en';
import { case8FeedbackData4 } from './feedbackData_kr';
import { case8FeedbackDataEn4 } from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter4Game: React.FC = () => {
  const { language } = useLanguage();

  const scenario = language === 'en' ? case8_chapter3_en : case8_chapter3_kr;
  const feedbackData = language === 'en' ? case8FeedbackDataEn4 : case8FeedbackData4;
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 30%, #1f1f1f 70%, #2d2d2d 100%)',
      color: '#e0e0e0'
    }}>
      <MysteryGameLayout
        scenario={scenario}
        feedbackData={feedbackData}
        caseId="case8-ch4"
        backUrl="/fragments/case8/"
        seoTitle="에코우드의 저주 - 4장"
        seoDescription="에코우드 마을에서 벌어지는 호러 미스터리"
        seoKeywords="미스터리,호러,안개,에코우드,저주"
        canonicalUrl="/fragments/case8/chapter4/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 30%, #1f1f1f 70%, #2d2d2d 100%)',
          secondary: 'linear-gradient(135deg, #4a4a4a 0%, #6b7280 100%)',
          accent: '#6b7280'
        }}
        cardIcon="🌫️"
      />
    </div>
  );
};

export default Chapter4Game;