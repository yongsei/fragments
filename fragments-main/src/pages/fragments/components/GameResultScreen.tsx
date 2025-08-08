import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import { useLanguage } from '../hooks/useLanguage';

interface GameState {
  elapsedTime: number;
  playerProgress: {
    correctConnections: number;
    totalConnections: number;
    hintsUsed: number;
  };
  currentScenario?: {
    title: string;
  };
}

interface GameResultScreenProps {
  gameState: GameState;
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonicalUrl: string;
  backUrl: string;
  nextChapterUrl?: string;
  onRestart: () => void;
}

const GameResultScreen: React.FC<GameResultScreenProps> = ({
  gameState,
  themeColors,
  seoTitle,
  seoDescription,
  seoKeywords,
  canonicalUrl,
  backUrl,
  nextChapterUrl,
  onRestart
}) => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title={`${seoTitle} - ${t('gameResult')}`}
        description={`${seoDescription} ${t('gameResult')}`}
        keywords={`${seoKeywords}, ${t('gameResult')}`}
        canonical={canonicalUrl}
      />
      
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent} 100%)`,
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
            color: themeColors.accent
          }}>
            {t('caseResolved')}
          </h1>
          
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.3,
            marginBottom: '0.8rem',
            opacity: 0.9
          }}>
            {t('congratulationsLong').replace('{0}', gameState.currentScenario?.title || '')}
          </p>
          
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
            padding: '0.8rem',
            marginBottom: '1rem'
          }}>
            <h3 style={{ marginBottom: '0.5rem', color: themeColors.accent, fontSize: '1rem' }}>{t('gameStatisticsTitle')}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem',
              textAlign: 'left'
            }}>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>🔗 {t('totalConnections')}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: themeColors.accent }}>
                  {gameState.playerProgress.correctConnections}{t('connections')}
                </div>
              </div>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>{t('attempts')}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                 {gameState.playerProgress.totalConnections}{t('times')}
                </div>
              </div>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>{t('hintsUsed')}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fbbf24' }}>
                  {gameState.playerProgress.hintsUsed}{t('cardsUnit')}
                </div>
              </div>
              <div>
                <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>{t('timeSpent')}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  {Math.floor(gameState.elapsedTime / 60)}{t('minutes')} {gameState.elapsedTime % 60}{t('seconds')}
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
            {/* 다음 챕터 버튼 (있는 경우에만 표시) */}
            {nextChapterUrl && (
              <Link
                to={nextChapterUrl}
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
            )}
            
            <button
              onClick={onRestart}
              style={{
                background: `linear-gradient(45deg, ${themeColors.accent}, ${themeColors.secondary})`,
                color: themeColors.primary,
                border: 'none',
                borderRadius: '15px',
                padding: '0.6rem 1.2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {t('restartGame')}
            </button>
            
            <Link
              to={backUrl}
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
              {t('returnToMenu')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameResultScreen;