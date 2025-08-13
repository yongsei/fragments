import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case7ch1 } from './seanrio_kr';
import { case7ch1En } from './seanrio_en';
import case7FeedbackData1 from './feedbackData_kr';
import case7FeedbackDataEn1 from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Chapter1Game: React.FC = () => {
  const { language } = useLanguage();

  // 언어에 따른 시나리오와 피드백 데이터 선택
  const scenario = language === 'en' ? case7ch1En : case7ch1;
  const feedbackData = language === 'en' ? case7FeedbackDataEn1 : case7FeedbackData1;
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2c1810 0%, #1a1a1a 30%, #2d2d2d 70%, #8b4513 100%)',
      color: '#f5f5dc'
    }}>
      <MysteryGameLayout
        scenario={scenario}
        feedbackData={feedbackData}
        caseId="case7-ch1"
        backUrl="/fragments/case7/"
        seoTitle="블랙우드 저택의 비밀 - 1장: 환영받지 못하는 손님"
        seoDescription="19세기 잉글랜드 황무지의 블랙우드 저택에서 벌어진 의문의 죽음"
        seoKeywords="미스터리,추리,고딕,저택,블랙우드"
        canonicalUrl="/fragments/case7/chapter1/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #2c1810 0%, #1a1a1a 30%, #2d2d2d 70%, #8b4513 100%)',
          secondary: 'linear-gradient(135deg, #cd853f 0%, #daa520 100%)',
          accent: '#cd853f'
        }}
        cardIcon="🏰"
      />
    </div>
  );
};

export default Chapter1Game;