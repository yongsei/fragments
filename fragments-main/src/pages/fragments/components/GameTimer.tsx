import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface GameTimerProps {
  elapsedTime: number;
  gamePhase: 1 | 2 | 3;
  isActive: boolean;
  connectionCount?: number;
}

const GameTimer: React.FC<GameTimerProps> = ({ elapsedTime, gamePhase, isActive, connectionCount = 0 }) => {
  const { t } = useLanguage();
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 단계 표시 제거

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      padding: '1.5rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* 왼쪽: 시간 표시 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.9rem',
          marginBottom: '0.3rem'
        }}>
          {t('timeSpent')}
        </div>
        <div style={{
          color: 'white',
          fontSize: '1.4rem',
          fontWeight: 600,
          fontFamily: 'monospace'
        }}>
          ⏱️ {formatTime(elapsedTime)}
        </div>
        {!isActive && (
          <div style={{
            color: '#ef4444',
            fontSize: '0.8rem',
            fontWeight: 500,
            marginTop: '0.2rem'
          }}>
            {t('loading')}
          </div>
        )}
      </div>

      {/* 오른쪽: 연결 횟수 표시 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.9rem',
          marginBottom: '0.3rem'
        }}>
          {t('attempts')}
        </div>
        <div style={{
          color: 'white',
          fontSize: '1.4rem',
          fontWeight: 600
        }}>
          🔗 {connectionCount}{t('attempt')}
        </div>
      </div>

    </div>
  );
};

export default GameTimer;