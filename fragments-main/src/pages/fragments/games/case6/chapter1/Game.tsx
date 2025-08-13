import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case6ch1 } from './seanrio_kr';
import { case6ch1En } from './seanrio_en';
import { feedbackCase6Ch1 } from './feedbackData_kr';
import { feedbackCase6Ch1En } from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Case6Chapter1: React.FC = () => {
  const { language } = useLanguage();

  const scenario = language === 'en' ? case6ch1En : case6ch1;
  const feedbackData = language === 'en' ? feedbackCase6Ch1En : feedbackCase6Ch1;
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #8b4513 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}
        feedbackData={feedbackData}
        caseId="case6-ch1"
        backUrl="/fragments/case6/"
        seoTitle="어둠의 수도원 - 1장"
        seoDescription="수도원에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,수도원,어둠"
        canonicalUrl="/fragments/case6/chapter1/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #8b4513 100%)',
          secondary: 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
          accent: '#d2691e'
        }}
        cardIcon="⛪"
      />
    </div>
  );
};

export default Case6Chapter1;