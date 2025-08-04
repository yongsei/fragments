import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import AdModal from '../../../components/AdModal';

interface HintSystemProps {
  hintsUsed: number;
  maxHints: number;
  onRequestHint: () => void;
  onAdHintReward?: () => void; // 광고 시청 후 추가 힌트 보상 콜백
}

export const HintSystem: React.FC<HintSystemProps> = ({ 
  hintsUsed = 0, 
  maxHints = 3, 
  onRequestHint,
  onAdHintReward
}) => {
  const { t } = useLanguage();
  const [showAdModal, setShowAdModal] = useState(false);

  const handleHintRequest = () => {
    if (hintsUsed < maxHints) {
      // 일반 힌트 요청
      onRequestHint();
    } else {
      // 모든 힌트 사용 후 광고 모달 표시
      setShowAdModal(true);
    }
  };

  const handleAdCompleted = () => {
    console.log('광고 시청 완료! 추가 힌트 지급');
    setShowAdModal(false);
    if (onAdHintReward) {
      onAdHintReward();
    }
  };

  const handleSkipAd = () => {
    console.log('광고 건너뛰기');
    setShowAdModal(false);
  };

  const handleCloseAdModal = () => {
    setShowAdModal(false);
  };



  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '1.5rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
      </div>

      <button
        onClick={handleHintRequest}
        style={{
          background: hintsUsed >= maxHints 
            ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' // 광고 힌트 버튼 색상
            : 'linear-gradient(45deg, #fbbf24, #f59e0b)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          padding: '0.8rem 1.5rem',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          width: '100%'
        }}
      >
        {hintsUsed >= maxHints 
          ? `📺 광고 보고 힌트 얻기 (${hintsUsed}/${maxHints})` 
          : `${t('requestHint')} (${hintsUsed}/${maxHints})`
        }
      </button>


      {/* AdMob 광고 모달 */}
      <AdModal
        isOpen={showAdModal}
        onClose={handleCloseAdModal}
        onAdCompleted={handleAdCompleted}
        onSkip={handleSkipAd}
        isHintReward={true}
      />
    </div>
  );
};
