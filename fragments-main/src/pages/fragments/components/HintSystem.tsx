import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface HintSystemProps {
  hintsUsed: number;
  maxHints: number;
  onRequestHint: () => void;
}

export const HintSystem: React.FC<HintSystemProps> = ({ 
  hintsUsed = 0, 
  maxHints = 3, 
  onRequestHint
}) => {
  const { t } = useLanguage();

  const handleHintRequest = () => {
    if (hintsUsed >= maxHints) return;
    onRequestHint();
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
        disabled={hintsUsed >= maxHints}
        style={{
          background: hintsUsed >= maxHints 
            ? 'rgba(107, 114, 128, 0.5)' 
            : 'linear-gradient(45deg, #fbbf24, #f59e0b)',
          color: hintsUsed >= maxHints ? 'rgba(255, 255, 255, 0.5)' : 'white',
          border: 'none',
          borderRadius: '10px',
          padding: '0.8rem 1.5rem',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: hintsUsed >= maxHints ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          width: '100%'
        }}
      >
        {hintsUsed >= maxHints ? t('allHintsUsed') : t('requestHint')} {hintsUsed}/{maxHints}
      </button>


    </div>
  );
};
