import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';

const GameResultTest: React.FC = () => {
  // 테스트용 게임 상태 데이터
  const testGameState = {
    elapsedTime: 247, // 4분 7초
    playerProgress: {
      correctConnections: 8,
      totalConnections: 12,
      hintsUsed: 2,
    },
    currentScenario: {
      title: '사라진 화가의 비밀'
    }
  };

  // 테스트용 테마 색상
  const testThemeColors = {
    primary: '#1a1a2e',
    secondary: '#16213e', 
    accent: '#ffd700'
  };

  const handleRestart = () => {
    console.log('게임 재시작 클릭됨');
    alert('게임 재시작이 클릭되었습니다!');
  };

  // 하드코딩된 번역 텍스트 (테스트용)
  const t = {
    gameResult: '게임 결과',
    caseResolved: '사건 해결!',
    congratulationsLong: '축하합니다! {0}의 진실을 밝혀냈습니다.',
    gameStatisticsTitle: '게임 통계',
    totalConnections: '성공한 연결',
    connections: '개',
    attempts: '총 시도',
    times: '회',
    hintsUsed: '사용한 힌트',
    cardsUnit: '개',
    timeSpent: '소요 시간',
    minutes: '분',
    seconds: '초',
    restartGame: '게임 재시작',
    returnToMenu: '메뉴로 돌아가기'
  };

  return (
    <>
      <SEOHead
        title={`테스트 - 단서의 파편 - ${t.gameResult}`}
        description={`게임 승리화면 테스트 ${t.gameResult}`}
        keywords={`테스트, 추리게임, 완료, ${t.gameResult}`}
        canonical="/test"
      />
      
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, ${testThemeColors.primary} 0%, ${testThemeColors.secondary} 50%, ${testThemeColors.accent} 100%)`,
        color: 'white',
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 9999
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '1rem',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.3rem' }}>
            🎉
          </div>
          
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.3rem',
            color: testThemeColors.accent
          }}>
            {t.caseResolved}
          </h1>
          
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.3,
            marginBottom: '0.8rem',
            opacity: 0.9
          }}>
            {t.congratulationsLong.replace('{0}', testGameState.currentScenario?.title || '')}
          </p>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
            padding: '0.8rem',
            marginBottom: '1rem'
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: testThemeColors.accent, fontSize: '1rem' }}>{t.gameStatisticsTitle}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>🔗 {t.totalConnections}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: testThemeColors.accent }}>
                  {testGameState.playerProgress.correctConnections}{t.connections}
                </div>
              </div>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>{t.attempts}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                 {testGameState.playerProgress.totalConnections}{t.times}
                </div>
              </div>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>{t.hintsUsed}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fbbf24' }}>
                  {testGameState.playerProgress.hintsUsed}{t.cardsUnit}
                </div>
              </div>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>{t.timeSpent}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  {Math.floor(testGameState.elapsedTime / 60)}{t.minutes} {testGameState.elapsedTime % 60}{t.seconds}
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {/* 다음 챕터 버튼 (테스트용) */}
            <Link
              to="/fragments/case1/chapter2"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                background: `linear-gradient(45deg, #4caf50, #66bb6a)`,
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                padding: '0.6rem 1.2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
            >
              🚀 다음 챕터 계속하기
            </Link>
            
            <button
              onClick={handleRestart}
              style={{
                background: `linear-gradient(45deg, ${testThemeColors.accent}, ${testThemeColors.secondary})`,
                color: testThemeColors.primary,
                border: 'none',
                borderRadius: '15px',
                padding: '0.6rem 1.2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {t.restartGame}
            </button>
            
            <Link
              to="/fragments"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '15px',
                padding: '0.6rem 1.2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
            >
              {t.returnToMenu}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameResultTest;