import React, { useEffect, useState } from 'react';
import { useAdMob } from '../hooks/useAdMob';

interface AdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdCompleted: () => void;
  onSkip: () => void;
  isHintReward?: boolean; // 힌트 보상용 광고인지 구분
}

const AdModal: React.FC<AdModalProps> = ({ isOpen, onClose, onAdCompleted, onSkip, isHintReward = false }) => {
  const { initialize, loadRewardAd, showRewardAd, isAdLoading, isAdReady } = useAdMob();
  const [countdown, setCountdown] = useState(5);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // AdMob 초기화 및 광고 로드
      initialize().then(() => {
        loadRewardAd();
      });

      // 5초 후 스킵 가능
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanSkip(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen, initialize, loadRewardAd]);

  const handleWatchAd = async () => {
    const completed = await showRewardAd();
    if (completed) {
      onAdCompleted();
    }
    onClose();
  };

  const handleSkip = () => {
    onSkip();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
          {isHintReward ? '💡 추가 힌트 획득' : '🎮 게임을 시작하기 전에'}
        </h2>
        
        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
          {isHintReward ? (
            <>
              광고를 시청하시면 추가 힌트를 받을 수 있습니다!<br/>
              어려운 퍼즐을 해결하는 데 도움이 될 거예요 🧩
            </>
          ) : (
            <>
              광고를 시청하시면 게임을 무료로 즐길 수 있습니다!<br/>
              개발자를 응원해주세요 💝
            </>
          )}
        </p>

        {/* 힌트 보상용 광고에서는 준비 상태 메시지 숨김 */}
        {!isHintReward && (
          <div style={{ marginBottom: '2rem' }}>
            {isAdLoading && (
              <p>📺 광고 준비 중...</p>
            )}
            {isAdReady && (
              <div>
                <p style={{ color: '#4ade80', fontWeight: 'bold' }}>
                  ✅ 광고 준비 완료!
                </p>
              </div>
            )}
          </div>
        )}

        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexDirection: window.innerWidth < 768 ? 'column' : 'row' 
        }}>
          <button
            onClick={handleWatchAd}
            disabled={!isHintReward && !isAdReady} // 힌트 보상용에서는 항상 활성화
            style={{
              flex: 1,
              padding: '1rem',
              border: 'none',
              borderRadius: '10px',
              background: (isHintReward || isAdReady) 
                ? 'linear-gradient(45deg, #4ade80, #22c55e)' 
                : '#6b7280',
              color: 'white',
              fontWeight: 'bold',
              cursor: (isHintReward || isAdReady) ? 'pointer' : 'not-allowed',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
          >
            📺 광고 보고 시작하기
          </button>

          <button
            onClick={handleSkip}
            disabled={!canSkip}
            style={{
              flex: 1,
              padding: '1rem',
              border: 'none',
              borderRadius: '10px',
              background: canSkip ? '#6b7280' : '#374151',
              color: canSkip ? 'white' : '#9ca3af',
              fontWeight: 'bold',
              cursor: canSkip ? 'pointer' : 'not-allowed',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
          >
            {canSkip ? '⏭️ 건너뛰기' : `⏰ ${countdown}초`}
          </button>
        </div>

        <p style={{ 
          fontSize: '0.8rem', 
          color: '#cbd5e1', 
          marginTop: '1rem',
          lineHeight: '1.4'
        }}>
          {isHintReward 
            ? '🎯 광고 시청 완료 시 바로 힌트가 제공됩니다!'
            : '💡 광고 시청 시 추가 힌트나 특별 보상을 받을 수 있어요!'
          }
        </p>
      </div>
    </div>
  );
};

export default AdModal;