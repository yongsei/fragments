import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import GameCard from './GameCard';
import GameTimer from './GameTimer';
import { HintSystem } from './HintSystem';
import ToastMessage from './ToastMessage';
import { useMysteryGame } from '../hooks/useMysteryGame';
import { useLanguage } from '../hooks/useLanguage';
import type { GameScenario } from '../games/case1/scenario_kr';
import type { CaseFeedbackData } from '../games/case1/feedbackData_kr';


interface UICustomization {
  cardStyles?: {
    suspectColor?: string;
    evidenceColor?: string;
    locationColor?: string;
    discoveredBorderColor?: string;
    selectedBorderColor?: string;
    cardBackground?: string;
    cardHoverEffect?: string;
  };
  backgroundPattern?: {
    type?: 'none' | 'dots' | 'grid' | 'waves';
    opacity?: number;
    color?: string;
  };
  typography?: {
    headingFont?: string;
    bodyFont?: string;
    headingWeight?: number;
    bodyWeight?: number;
  };
  animations?: {
    cardHoverScale?: number;
    connectionButtonPulse?: boolean;
    resultScreenEffect?: 'confetti' | 'sparkles' | 'none';
  };
  layout?: {
    cardBorderRadius?: string;
    panelBorderRadius?: string;
    containerMaxWidth?: string;
    cardSpacing?: string;
  };
}

interface PCMysteryGameLayoutProps {
  scenario: GameScenario;
  maxHints?: number;
  initialCards?: string[];
  winCondition?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonicalUrl: string;
  backUrl: string;
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  cardIcon: string;
  caseId?: string; // 진행 상태 저장을 위한 케이스 ID
  uiCustomization?: UICustomization;
  onCardUnlock?: (unlockId: string) => string[];
  feedbackData?: CaseFeedbackData;
}

const PCMysteryGameLayout: React.FC<PCMysteryGameLayoutProps> = ({
  scenario,
  maxHints = 3, // 기본값 3으로 고정
  initialCards: propInitialCards,
  winCondition: propWinCondition,
  seoTitle,
  seoDescription,
  seoKeywords,
  canonicalUrl,
  backUrl,
  themeColors,
  cardIcon,
  caseId,
  uiCustomization = {},
  onCardUnlock,
  feedbackData
}) => {
  const { t } = useLanguage();
  
  // Custom hook provides all game logic
  const {
    gameState, cards, isConnecting, showResult,
    highlightedCardId, toastMessage, cardFeedback,
    handleCardSelect, handleConnect, handleClearSelection,
    handleRequestHint, handleRestart, handleToastClose
    // setHighlightedCardId, setToastMessage // PC에서는 사용하지 않음
  } = useMysteryGame({
    scenario, maxHints, initialCards: propInitialCards,
    winCondition: propWinCondition, onCardUnlock, feedbackData,
    caseId
  });

  // UI 커스터마이징 기본값 설정
  const ui = {
    cardStyles: {
      suspectColor: uiCustomization.cardStyles?.suspectColor || '#8b5cf6',
      evidenceColor: uiCustomization.cardStyles?.evidenceColor || '#f59e0b',
      locationColor: uiCustomization.cardStyles?.locationColor || '#10b981',
      discoveredBorderColor: uiCustomization.cardStyles?.discoveredBorderColor || themeColors.accent,
      selectedBorderColor: uiCustomization.cardStyles?.selectedBorderColor || '#fff',
      cardBackground: uiCustomization.cardStyles?.cardBackground || 'rgba(255, 255, 255, 0.1)',
      cardHoverEffect: uiCustomization.cardStyles?.cardHoverEffect || 'transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);'
    },
    backgroundPattern: {
      type: uiCustomization.backgroundPattern?.type || 'none',
      opacity: uiCustomization.backgroundPattern?.opacity || 0.1,
      color: uiCustomization.backgroundPattern?.color || 'rgba(255, 255, 255, 0.05)'
    },
    typography: {
      headingFont: uiCustomization.typography?.headingFont || "'Noto Sans KR', sans-serif",
      bodyFont: uiCustomization.typography?.bodyFont || "'Noto Sans KR', sans-serif",
      headingWeight: uiCustomization.typography?.headingWeight || 600,
      bodyWeight: uiCustomization.typography?.bodyWeight || 400
    },
    animations: {
      cardHoverScale: uiCustomization.animations?.cardHoverScale || 1.02,
      connectionButtonPulse: uiCustomization.animations?.connectionButtonPulse || false,
      resultScreenEffect: uiCustomization.animations?.resultScreenEffect || 'none'
    },
    layout: {
      cardBorderRadius: uiCustomization.layout?.cardBorderRadius || '12px',
      panelBorderRadius: uiCustomization.layout?.panelBorderRadius || '15px',
      containerMaxWidth: uiCustomization.layout?.containerMaxWidth || '1400px',
      cardSpacing: uiCustomization.layout?.cardSpacing || '1rem'
    }
  };


  // PC는 모든 발견된 카드를 표시 (탭 없음)
  const getFilteredCards = useCallback(() => {
    return cards.filter(card => card.discovered);
  }, [cards]);




  if (showResult) {
    return (
      <>
        <SEOHead
          title={`${seoTitle} - ${t('gameResult')}`}
          description={`${seoDescription} ${t('gameResult')}`}
          keywords={`${seoKeywords}, ${t('gameResult')}`}
          canonical={canonicalUrl}
        />
        
        <div style={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent} 100%)`,
          color: 'white',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              🎉
            </div>
            
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: themeColors.accent
            }}>
              {t('caseResolved')}
            </h1>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              {t('congratulationsLong').replace('{0}', gameState.currentScenario?.title || '')}
            </p>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '15px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: themeColors.accent }}>{t('gameStatisticsTitle')}</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                textAlign: 'left'
              }}>
                <div>
                  <div style={{ opacity: 0.8 }}>🔗 {t('totalConnections')}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600, color: themeColors.accent }}>
                    {gameState.playerProgress.correctConnections}{t('connections')}
                  </div>
                </div>
                <div>
                  <div style={{ opacity: 0.8 }}>{t('attempts')}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                 {gameState.playerProgress.totalConnections}{t('times')}
                  </div>
                </div>
                <div>
                  <div style={{ opacity: 0.8 }}>{t('hintsUsed')}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fbbf24' }}>
                    {gameState.playerProgress.hintsUsed}{t('cardsUnit')}
                  </div>
                </div>
                <div>
                  <div style={{ opacity: 0.8 }}>{t('timeSpent')}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                    {Math.floor(gameState.elapsedTime / 60)}{t('minutes')} {gameState.elapsedTime % 60}{t('seconds')}
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={handleRestart}
                style={{
                  background: `linear-gradient(45deg, ${themeColors.accent}, ${themeColors.secondary})`,
                  color: themeColors.primary,
                  border: 'none',
                  borderRadius: '25px',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
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
                  borderRadius: '25px',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
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
  }

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={canonicalUrl}
      />
      
      <div style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent} 100%)`,
        color: 'white',
        padding: '1rem', // 기본 패딩
        paddingTop: 'max(env(safe-area-inset-top, 0px), 60px)', // 시스템 UI 회피
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 80px)', // 시스템 UI 회피
        fontFamily: ui.typography.bodyFont
      }}>
        <div style={{
          maxWidth: ui.layout.containerMaxWidth,
          margin: '0 auto'
        }}>
          {/* 상단 UI */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <GameTimer 
              elapsedTime={gameState.elapsedTime}
              gamePhase={gameState.gamePhase}
              isActive={!isConnecting}
              connectionCount={gameState.connections.length}
            />
            <HintSystem
              hintsUsed={gameState.hintsUsed}
              maxHints={maxHints}
              onRequestHint={handleRequestHint}
            />
          </div>

          {/* 사건 개요 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: ui.layout.panelBorderRadius,
            padding: '1.5rem',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: ui.typography.headingWeight,
              fontFamily: ui.typography.headingFont,
              marginBottom: '0.5rem',
              color: themeColors.accent
            }}>
              📋 {gameState.currentScenario?.title}
            </h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              opacity: 0.9
            }}>
              {gameState.currentScenario?.story}
            </p>
          </div>

          {/* PC 게임 메인 영역 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {/* PC 카드 영역 */}
            <div style={{
              gridColumn: 'span 2'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: ui.typography.headingWeight,
                    fontFamily: ui.typography.headingFont,
                    color: 'white',
                    margin: 0
                  }}>
                    {cardIcon} {t('clueCards')}
                  </h3>
                  
                </div>
              </div>
              
              {/* PC 카드 그리드 - 모든 카드 표시 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                minHeight: '200px'
              }}>
                {getFilteredCards().map(card => {
                  const feedback = cardFeedback.find(f => f.cardId === card.id);
                  return (
                    <GameCard
                      key={card.id}
                      card={card}
                      isSelected={gameState.selectedCards.includes(card.id)}
                      isDiscovered={card.discovered}
                      isHighlighted={highlightedCardId === card.id}
                      onClick={() => handleCardSelect(card.id)}
                      disabled={isConnecting}
                      feedbackEffect={feedback?.effect}
                      uiCustomization={{
                        ...ui.cardStyles,
                        cardBorderRadius: ui.layout.cardBorderRadius,
                        cardHoverScale: ui.animations.cardHoverScale
                      }}
                    />
                  );
                })}
              </div>
              
              {/* PC 연결 버튼 영역 - 2줄 구조 */}
              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {/* 첫 번째 줄: 선택된 카드 표시 */}
                <div style={{
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {gameState.selectedCards.length === 0 ? (
                    <span>{t('selectTwoCardsLong')}</span>
                  ) : (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}>
                      {gameState.selectedCards.map((cardId) => {
                        const card = cards.find(c => c.id === cardId);
                        return card ? (
                          <span key={cardId} style={{
                            background: `linear-gradient(45deg, ${themeColors.accent}, #ffed4e)`,
                            color: themeColors.primary,
                            padding: '4px 8px',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: 600
                          }}>
                            {card.name}
                          </span>
                        ) : null;
                      })}
                      {gameState.selectedCards.length < 2 && (
                        <span style={{ opacity: 0.6 }}>
                          ({gameState.selectedCards.length}/2)
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* 두 번째 줄: 버튼들 */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  {/* 초기화 버튼 */}
                  {gameState.selectedCards.length > 0 && (
                    <button
                      onClick={handleClearSelection}
                      style={{
                        background: 'rgba(239, 68, 68, 0.9)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 16px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {t('clearSelection')}
                    </button>
                  )}
                  
                  {/* 연결하기 버튼 */}
                  <button
                    onClick={handleConnect}
                    disabled={gameState.selectedCards.length !== 2 || isConnecting}
                    style={{
                      background: gameState.selectedCards.length === 2 && !isConnecting
                        ? `linear-gradient(45deg, ${themeColors.accent}, #ffed4e)`
                        : 'rgba(107, 114, 128, 0.8)',
                      color: gameState.selectedCards.length === 2 && !isConnecting ? themeColors.primary : 'rgba(255, 255, 255, 0.7)',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '12px 24px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: gameState.selectedCards.length === 2 && !isConnecting ? 'pointer' : 'not-allowed',
                      transition: 'all 0.3s ease',
                      opacity: isConnecting ? 0.7 : 1
                    }}
                  >
                    {isConnecting ? t('connecting') : t('connectCards')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 연결 기록 표시 */}
          {gameState.connections.length > 0 && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: ui.layout.panelBorderRadius,
              padding: '1.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              maxHeight: '400px',
              overflowY: 'auto',
              marginTop: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                {t('connectionHistory')}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {gameState.connections.slice().reverse().map((connection, index) => {
                  const cardNames = connection.cards.map((cardId: string) => {
                    const card = cards.find(c => c.id === cardId);
                    return card?.name || cardId;
                  }).join(' + ');
                  
                  // 힌트인 경우 노란색 배경
                  const isHint = connection.isHint || connection.hintMessage;
                  const backgroundColor = isHint 
                    ? 'rgba(255, 193, 7, 0.1)' // 노란색 배경
                    : connection.verified
                      ? 'rgba(34, 197, 94, 0.1)' 
                      : 'rgba(239, 68, 68, 0.1)';

                  return (
                    <div key={connection.id} style={{
                      background: backgroundColor,
                      borderRadius: '8px',
                      padding: '0.8rem',
                      fontSize: '0.85rem',
                      opacity: index === 0 ? 1 : 0.7,
                      border: isHint ? '1px solid rgba(255, 193, 7, 0.3)' : 'none'
                    }}>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                        {isHint ? '💡' : connection.verified ? '✅' : '❌'} 
                        {isHint ? t('hintLabel') : ` ${cardNames}`}
                      </div>
                      <div style={{ opacity: 0.8, fontSize: '0.8rem' }}>
                        {connection.result}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PC 하단 링크 */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <Link
              to={backUrl}
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
              }}
            >
              {t('backToMenu')}
            </Link>
          </div>

          {/* 토스트 메시지 */}
          <ToastMessage
            message={toastMessage.message}
            type={toastMessage.type}
            isVisible={toastMessage.isVisible}
            onClose={handleToastClose}
            duration={3000}
          />
        </div>
      </div>
    </>
  );
};

export default PCMysteryGameLayout;