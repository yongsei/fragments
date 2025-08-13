import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case6ch3 } from './seanrio_kr';
import { case6ch3En } from './seanrio_en';
import { feedbackCase6Ch3 } from './feedbackData_kr';
import { feedbackCase6Ch3En } from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Case6Chapter3: React.FC = () => {
  const { language } = useLanguage();

  const scenario = language === 'en' ? case6ch3En : case6ch3;
  const feedbackData = language === 'en' ? feedbackCase6Ch3En : feedbackCase6Ch3;
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #8b4513 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}
        feedbackData={feedbackData}
        caseId="case6-ch3"
        backUrl="/fragments/case6/"
        seoTitle="어둠의 수도원 - 3장"
        seoDescription="수도원에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,수도원,어둠"
        canonicalUrl="/fragments/case6/chapter3/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #8b4513 100%)',
          secondary: 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
          accent: '#d2691e'
        }}
        cardIcon="🕯️"
      />
    </div>
  );
};

export default Case6Chapter3;