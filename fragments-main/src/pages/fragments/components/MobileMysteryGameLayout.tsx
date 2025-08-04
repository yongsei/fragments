import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import GameCard from './GameCard';
import SwipeCardGrid from './SwipeCardGrid';
import ToastMessage from './ToastMessage';
// import { HintSystem } from '../components/HintSystem'; // 모바일에서는 사용하지 않음
import AdModal from '../../../components/AdModal';
import { useMysteryGame } from '../hooks/useMysteryGame';
import { useLanguageState } from '../hooks/useLanguage';
import type { GameScenario } from '../games/case1/scenario_kr';
import type { CaseFeedbackData } from '../games/case1/feedbackData_kr';

// CSS 애니메이션 추가
const pulseKeyframes = `
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes shimmer {
    0% { 
      box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
      border-color: rgba(255, 215, 0, 0.5);
    }
    50% { 
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.4);
      border-color: rgba(255, 215, 0, 1);
    }
    100% { 
      box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
      border-color: rgba(255, 215, 0, 0.5);
    }
  }
`;

// 스타일시트에 애니메이션 추가
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = pulseKeyframes;
  document.head.appendChild(styleSheet);
}


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
  systemUI?: {
    topBarBackground?: string;  // 상단 바 배경색
    bottomBarBackground?: string;  // 하단 바 배경색
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

interface MobileMysteryGameLayoutProps {
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
  uiCustomization?: UICustomization; // 새로운 UI 커스터마이징 옵션
  onCardUnlock?: (unlockId: string) => string[]; // 카드 unlock 시 추가할 카드 ID들 반환
  feedbackData?: CaseFeedbackData; // 피드백 데이터를 직접 전달 (재사용성을 위해 옵셔널)
}

const MobileMysteryGameLayout: React.FC<MobileMysteryGameLayoutProps> = ({
  scenario,
  maxHints = 3,
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
  // 언어 상태 관리
  const languageState = useLanguageState();
  const { t } = languageState;
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
    systemUI: {
      topBarBackground: uiCustomization.systemUI?.topBarBackground || `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
      bottomBarBackground: uiCustomization.systemUI?.bottomBarBackground || `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`
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
  // useMysteryGame hook으로 게임 로직 사용
  const {
    gameState,
    cards,
    isConnecting,
    showResult,
    highlightedCardId,
    toastMessage,
    cardFeedback,
    handleCardSelect,
    handleConnect,
    handleClearSelection,
    handleRequestHint,
    // handleAnswerHint, // 모바일에서는 사용하지 않음
    handleRestart,
    handleToastClose,
    handleAdHintReward
    // setHighlightedCardId, // 모바일에서는 사용하지 않음
    // setToastMessage // 모바일에서는 사용하지 않음
  } = useMysteryGame({
    scenario,
    maxHints,
    initialCards: propInitialCards,
    winCondition: propWinCondition,
    onCardUnlock,
    feedbackData,
    caseId
  });

  // 팝업 상태 관리
  const [showCaseOverview, setShowCaseOverview] = useState(false);
  const [showConnectionHistory, setShowConnectionHistory] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);

  // PC 버전과 동일한 힌트 시스템을 위한 핸들러는 hook에서 가져옴
  
  // 광고 관련 핸들러
  const handleAdCompleted = () => {
    console.log('광고 시청 완료! 추가 힌트 지급');
    setShowAdModal(false);
    handleAdHintReward();
  };

  const handleSkipAd = () => {
    console.log('광고 건너뛰기');
    setShowAdModal(false);
  };

  const handleCloseAdModal = () => {
    setShowAdModal(false);
  };


  // 새 카드 알림 상태 관리 (스와이프 UI에서는 전역 알림만 사용)
  const [newCardNotification, setNewCardNotification] = useState<{ [key: string]: boolean }>({});

  // 새로운 스와이프 UI에서는 탭 시스템 불필요





  // 새로 발견된 카드 감지 및 알림 설정
  useEffect(() => {
    if (gameState.newlyDiscoveredCards && gameState.newlyDiscoveredCards.length > 0) {
      const notifications: { [key: string]: boolean } = {};

      gameState.newlyDiscoveredCards.forEach(cardId => {
        const card = cards.find(c => c.id === cardId);
        if (card) {
          // 메인 카테고리 알림 설정
          if (card.type === 'suspect') {
            notifications['suspects'] = true;
          } else if (card.type === 'evidence') {
            notifications['evidence'] = true;
          } else if (card.type === 'location') {
            notifications['locations'] = true;
          }
          notifications['all'] = true;
          notifications['new'] = true;

          // 서브탭 알림 설정 (카드의 상세 카테고리에 따라)
          // 예: suspect_김민수, evidence_독, location_거실 등
          if (card.type === 'suspect') {
            notifications[`suspects_${card.name.charAt(0)}`] = true;
          } else if (card.type === 'evidence') {
            notifications[`evidence_${card.name.charAt(0)}`] = true;
          } else if (card.type === 'location') {
            notifications[`locations_${card.name.charAt(0)}`] = true;
          }
        }
      });

      setNewCardNotification(prev => ({ ...prev, ...notifications }));

      // 5초 후 알림 제거
      setTimeout(() => {
        setNewCardNotification(prev => {
          const updated = { ...prev };
          Object.keys(notifications).forEach(key => {
            delete updated[key];
          });
          return updated;
        });
      }, 5000);
    }
  }, [gameState.newlyDiscoveredCards, cards]);






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
          paddingTop: 'max(env(safe-area-inset-top, 0px), 50px)', // 시스템 UI 회피
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 80px)', // 시스템 UI 회피
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
              {t('gameCompleted')} {scenario.title}{t('truthRevealed')}
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
                    {gameState.playerProgress.correctConnections}{t('connectionsCount')}
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
        paddingTop: 'max(env(safe-area-inset-top, 0px), 65px)', // 새로운 헤더 높이(60px) + 여유(5px)
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 45px)', // 하단 고정 영역 + 여유
        fontFamily: ui.typography.bodyFont,
        position: 'relative'
      }}>
        {/* 상단 시스템 UI 영역 배경 통일 */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'max(env(safe-area-inset-top, 0px), 0px)',
          background: ui.systemUI.topBarBackground,
          zIndex: 999
        }} />

        {/* 하단 시스템 UI 영역 배경 통일 */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: `calc(max(env(safe-area-inset-bottom, 0px), 0px) + 80px)`, // 하단 UI(80px) + 시스템 UI
          background: ui.systemUI.bottomBarBackground,
          zIndex: 99
        }} />
        <div style={{
          maxWidth: ui.layout.containerMaxWidth,
          margin: '0 auto',
          paddingBottom: '20px' // 120px에서 20px로 축소
        }}>
          {/* 모바일에서는 사건 개요 제거 - 팝업으로 이동 */}

          {/* 게임 메인 영역 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {/* 새로운 스와이프 카드 영역 */}
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
                  gap: '1rem',
                  marginTop: '0rem'
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

                {/* 스와이프 안내 */}
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.6)',
                  textAlign: 'right'
                }}>
                  ← → 좌우 스와이프로 카드 탐색
                </div>
              </div>

              {/* 새로운 스와이프 카드 그리드 */}
              <SwipeCardGrid
                cards={cards.filter(card => card.discovered)}
                selectedCards={gameState.selectedCards}
                onCardClick={handleCardSelect}
                cardStyles={ui.cardStyles}
                ui={ui}
              />
            </div>

          </div>

          {/* 모바일 전용 헤더 - 간소화된 구조 */}
          <div style={{
            position: 'fixed',
            top: 'max(env(safe-area-inset-top, 0px), 0px)',
            left: 0,
            right: 0,
            height: '60px', // 기존 140px에서 60px로 대폭 축소
            background: ui.systemUI.topBarBackground,
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1rem'
          }}>
            {/* 뒤로가기 */}
            <Link
              to={backUrl}
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}
            >
              ← {t('backButton')}
            </Link>

            {/* 가운데: 진행시간 / 연결횟수 */}
            <div style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              {Math.floor(gameState.elapsedTime / 60)}:{String(gameState.elapsedTime % 60).padStart(2, '0')} | {gameState.connections.length}{t('times')}
            </div>

            {/* 힌트 버튼 */}
            <button
              onClick={() => {
                if (gameState.hintsUsed < maxHints) {
                  handleRequestHint();
                } else {
                  // 모든 힌트를 사용한 후에는 광고 모달 표시
                  setShowAdModal(true);
                }
              }}
              style={{
                background: gameState.hintsUsed >= maxHints
                  ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' // 광고 힌트 버튼 색상
                  : 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                color: 'white',
                border: gameState.hintsUsed >= maxHints
                  ? '1px solid rgba(255, 107, 107, 0.6)'
                  : '1px solid rgba(251, 191, 36, 0.6)',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {gameState.hintsUsed >= maxHints ? '📺 광고 힌트' : '💡'} {gameState.hintsUsed}/{maxHints}
            </button>
          </div>

          {/* 모바일 하단 고정 연결 영역 */}
          <div style={{
            position: 'fixed',
            bottom: `max(env(safe-area-inset-bottom, 0px), 0px)`, // 시스템 UI 바로 위에 위치
            left: '0',
            right: '0',
            background: ui.systemUI.bottomBarBackground,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '12px',
            paddingBottom: '12px', // 고정 패딩으로 일관성 확보
            paddingLeft: '20px',
            paddingRight: '20px',
            backdropFilter: 'blur(10px)',
            zIndex: 100
          }}>
            {/* 통합된 줄: 사건개요 + 선택된 카드/안내 텍스트 + 연결기록 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px'
            }}>
              <button
                onClick={() => setShowCaseOverview(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '8px 12px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
              >
                📕
              </button>

              {/* 중앙: 선택된 카드 또는 안내 텍스트 */}
              <div style={{
                textAlign: 'center',
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.8)',
                flex: 1,
                margin: '0 12px'
              }}>
                {gameState.selectedCards.length === 0 ? (
                  <span>{t('selectTwoCards')}</span>
                ) : (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    flexWrap: 'wrap'
                  }}>
                    {gameState.selectedCards.map((cardId, index) => {
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

              <button
                onClick={() => setShowConnectionHistory(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '8px 12px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
              >
                📒 ({gameState.connections.length})
              </button>
            </div>
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
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
                    transition: 'all 0.3s ease',
                    flex: '0 0 auto'
                  }}
                >
                  {t('clearSelection', '🗑️ 초기화')}
                </button>
              )}

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
                  flex: '1',
                  opacity: isConnecting ? 0.7 : 1
                }}
              >
                {isConnecting ? t('connecting', '🔄 연결 중...') : t('connectCards', '🔗 단서 연결하기')}
              </button>
            </div>
          </div>

          {/* 토스트 메시지 */}
          <ToastMessage
            message={toastMessage.message}
            type={toastMessage.type}
            isVisible={toastMessage.isVisible}
            onClose={handleToastClose}
            duration={3000}
          />

          {/* 사건 개요 팝업 */}
          {showCaseOverview && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}>
              <div style={{
                background: ui.systemUI.bottomBarBackground,
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '90vw',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <button
                  onClick={() => setShowCaseOverview(false)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ×
                </button>

                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: themeColors.accent
                }}>
                  📋 {gameState.currentScenario?.title}
                </h2>

                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'white',
                  opacity: 0.9
                }}>
                  {gameState.currentScenario?.story}
                </p>
              </div>
            </div>
          )}

          {/* 연결 기록 팝업 */}
          {showConnectionHistory && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}>
              <div style={{
                background: ui.systemUI.bottomBarBackground,
                borderRadius: '20px',
                padding: '2rem',
                maxWidth: '90vw',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <button
                  onClick={() => setShowConnectionHistory(false)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ×
                </button>

                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: themeColors.accent
                }}>
                  {t('connectionHistoryCount').replace('{0}', gameState.connections.length.toString())}
                </h2>

                {gameState.connections.length === 0 ? (
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textAlign: 'center',
                    fontSize: '1rem',
                    padding: '2rem'
                  }}>
                    {t('noConnectionHistoryLong')}
                  </p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {gameState.connections.slice().reverse().map((connection, index) => {
                      const cardNames = connection.cards.map((cardId: string) => {
                        const card = cards.find(c => c.id === cardId);
                        return card?.name || cardId;
                      }).join(' + ');

                      // 힌트인 경우 노란색 배경
                      const isHint = connection.isHint || connection.hintMessage;
                      const backgroundColor = isHint 
                        ? 'rgba(255, 193, 7, 0.2)' // 노란색 배경
                        : connection.verified
                          ? 'rgba(34, 197, 94, 0.2)'
                          : 'rgba(239, 68, 68, 0.2)';
                      
                      const borderColor = isHint
                        ? '1px solid rgba(255, 193, 7, 0.4)' // 노란색 테두리
                        : connection.verified
                          ? '1px solid rgba(34, 197, 94, 0.4)'
                          : '1px solid rgba(239, 68, 68, 0.4)';

                      return (
                        <div key={connection.id} style={{
                          background: backgroundColor,
                          borderRadius: '12px',
                          padding: '1rem',
                          fontSize: '0.9rem',
                          border: borderColor
                        }}>
                          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>
                            {isHint ? '💡' : connection.verified ? '✅' : '❌'} 
                            {isHint ? t('hintLabel') : ` ${cardNames}`}
                          </div>
                          <div style={{ opacity: 0.9, fontSize: '0.85rem', color: 'white' }}>
                            {connection.result}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AdMob 광고 모달 */}
      <AdModal
        isOpen={showAdModal}
        onClose={handleCloseAdModal}
        onAdCompleted={handleAdCompleted}
        onSkip={handleSkipAd}
        isHintReward={true}
      />
    </>
  );
};

export default MobileMysteryGameLayout;