import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case8_chapter6_kr } from './seanrio_kr';
import { case8_chapter6_en } from './seanrio_en';
import { case8FeedbackData7 } from './feedbackData_kr';
import { case8FeedbackDataEn7 } from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter7Game: React.FC = () => {
  const { language } = useLanguage();

  const scenario = language === 'en' ? case8_chapter6_en : case8_chapter6_kr;
  const feedbackData = language === 'en' ? case8FeedbackDataEn7 : case8FeedbackData7;
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 30%, #1f1f1f 70%, #2d2d2d 100%)',
      color: '#e0e0e0'
    }}>
      <MysteryGameLayout
        scenario={scenario}
        feedbackData={feedbackData}
        caseId="case8-ch7"
        backUrl="/fragments/case8/"
        seoTitle="에코우드의 저주 - 7장"
        seoDescription="에코우드 마을에서 벌어지는 호러 미스터리"
        seoKeywords="미스터리,호러,안개,에코우드,저주"
        canonicalUrl="/fragments/case8/chapter7/game"
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

export default Chapter7Game;