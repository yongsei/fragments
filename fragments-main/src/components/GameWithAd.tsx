import React, { useState } from 'react';
import AdModal from './AdModal';

const GameWithAd: React.FC = () => {
  const [showAdModal, setShowAdModal] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [bonusReward, setBonusReward] = useState(false);

  const handleStartGame = () => {
    setShowAdModal(true);
  };

  const handleAdCompleted = () => {
    console.log('광고 시청 완료! 보상 지급');
    setBonusReward(true); // 보상 지급 (추가 힌트, 특별 아이템 등)
    setGameStarted(true);
  };

  const handleSkipAd = () => {
    console.log('광고 건너뛰기');
    setBonusReward(false);
    setGameStarted(true);
  };

  const handleCloseModal = () => {
    setShowAdModal(false);
  };

  if (gameStarted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>🎮 게임 시작!</h1>
        {bonusReward && (
          <div style={{
            background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
            color: '#333',
            padding: '1rem',
            borderRadius: '10px',
            marginBottom: '2rem',
            fontWeight: 'bold'
          }}>
            🎁 광고 시청 보상: 추가 힌트 +3개 획득!
          </div>
        )}
        <p>여기에 실제 게임 컴포넌트가 들어갑니다</p>
        <button 
          onClick={() => setGameStarted(false)}
          style={{
            padding: '1rem 2rem',
            background: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          게임 목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>🧩 Fragment of Mystery</h1>
      
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '2rem',
        marginBottom: '2rem',
        backdropFilter: 'blur(10px)'
      }}>
        <h2>추리 게임 시작</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
          미스터리한 사건의 진실을 파헤쳐보세요!<br/>
          단서를 수집하고 범인을 찾아내는 흥미진진한 추리 게임입니다.
        </p>
        
        <button
          onClick={handleStartGame}
          style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(45deg, #4ade80, #22c55e)',
            color: 'white',
            border: 'none',
            borderRadius: '15px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(74, 222, 128, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(74, 222, 128, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(74, 222, 128, 0.3)';
          }}
        >
          🎮 게임 시작하기
        </button>
      </div>

      <AdModal
        isOpen={showAdModal}
        onClose={handleCloseModal}
        onAdCompleted={handleAdCompleted}
        onSkip={handleSkipAd}
      />
    </div>
  );
};

export default GameWithAd;