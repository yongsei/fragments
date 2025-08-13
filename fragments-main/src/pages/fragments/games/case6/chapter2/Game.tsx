import React from 'react';
import MysteryGameLayout from '../../../components/MysteryGameLayout';
import { case6ch2 } from './seanrio_kr';
import { case6ch2En } from './seanrio_en';
import { feedbackCase6Ch2 } from './feedbackData_kr';
import { feedbackCase6Ch2En } from './feedbackData_en';
import { useLanguage } from '../../../hooks/useLanguage';

const Case6Chapter2: React.FC = () => {
  const { language } = useLanguage();

  const scenario = language === 'en' ? case6ch2En : case6ch2;
  const feedbackData = language === 'en' ? feedbackCase6Ch2En : feedbackCase6Ch2;
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #8b4513 100%)',
      color: '#ffffff'
    }}>
      <MysteryGameLayout
        scenario={scenario}
        feedbackData={feedbackData}
        caseId="case6-ch2"
        backUrl="/fragments/case6/"
        seoTitle="어둠의 수도원 - 2장"
        seoDescription="수도원에서 벌어진 미스터리"
        seoKeywords="미스터리,추리,수도원,어둠"
        canonicalUrl="/fragments/case6/chapter2/game"
        themeColors={{
          primary: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #8b4513 100%)',
          secondary: 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
          accent: '#d2691e'
        }}
        cardIcon="📿"
      />
    </div>
  );
};

export default Case6Chapter2;