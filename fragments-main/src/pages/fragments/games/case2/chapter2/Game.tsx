import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case2Ch2 } from './scenario_kr';
import { case2ChEn2 } from './scenario_en';
import case2FeedbackData2 from './feedbackData_kr';
import case2FeedbackData2En from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter2Game: React.FC = () => {
  const { language } = useLanguage();

  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? case2ChEn2 : case2Ch2;
  const feedbackData = language === 'en' ? case2FeedbackData2En : case2FeedbackData2;
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2d1b2f 0%, #3d2a47 30%, #1a1a2e 70%, #2d1b2f 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}        
        feedbackData={feedbackData}
        caseId="case2-ch2"
        backUrl="/fragments/case2/chapter2"
        seoTitle="침묵의 도서관 - 2장"
        seoDescription="침묵의 도서관에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,도서관,침묵"
        canonicalUrl="/fragments/case2/chapter2/game"
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

export default Chapter2Game;