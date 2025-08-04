import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import GameCard from './GameCard';
import ToastMessage from './ToastMessage';
// import { HintSystem } from '../components/HintSystem'; // 모바일에서는 사용하지 않음
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
    handleToastClose
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

  // PC 버전과 동일한 힌트 시스템을 위한 핸들러는 hook에서 가져옴


  // 2단계 탭 시스템 상태
  const [activeMainCategory, setActiveMainCategory] = useState<string>('all');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('');

  // 새 카드 알림 상태 관리
  const [newCardNotification, setNewCardNotification] = useState<{ [key: string]: boolean }>({});

  // NEW 태그는 다음 카드가 나올 때까지 유지 (타이머 제거)

  // 기본 카테고리 정의
  const mainCategories = useMemo(() => ({
    all: { icon: '🎯', label: t('all'), color: '#8b5cf6' },
    suspects: { icon: '👤', label: t('suspects'), color: '#dc2626' },
    evidence: { icon: '🔍', label: t('evidence'), color: '#2563eb' },
    locations: { icon: '📍', label: t('locations'), color: '#059669' }
  }), [t]);

  // 카드 데이터 추출 (의존성 배열 최적화용)
  const discoveredCards = useMemo(() => cards.filter(c => c.discovered), [cards]);
  const suspectCards = useMemo(() => cards.filter(c => c.type === 'suspect' && c.discovered), [cards]);
  const evidenceCards = useMemo(() => cards.filter(c => c.type === 'evidence' && c.discovered), [cards]);
  const locationCards = useMemo(() => cards.filter(c => c.type === 'location' && c.discovered), [cards]);


  // 선택된 메인 카테고리의 하위 탭 생성 함수
  const createSubTabs = useCallback((mainCategory: string) => {
    let categoryCards: any[] = [];
    const categoryInfo = mainCategories[mainCategory as keyof typeof mainCategories];

    // 메인 카테고리별 카드 필터링
    switch (mainCategory) {
      case 'all':
        categoryCards = discoveredCards;
        break;
      case 'suspects':
        categoryCards = suspectCards;
        break;
      case 'evidence':
        categoryCards = evidenceCards;
        break;
      case 'locations':
        categoryCards = locationCards;
        break;

      default:
        categoryCards = [];
    }

    const subTabs: { [key: string]: { icon: string; label: string; color: string; cards: any[] } } = {};

    if (categoryCards.length === 0) {
      return subTabs;
    }

    // 9개 이하면 단일 탭 (하위탭 표시하지 않음)
    if (categoryCards.length <= 9) {
      subTabs[mainCategory] = {
        icon: categoryInfo.icon,
        label: categoryInfo.label,
        color: categoryInfo.color,
        cards: categoryCards
      };
    } else {
      // 9개 초과면 스마트 분류 시도
      if (mainCategory === 'evidence') {
        // 증거의 경우 location별로 스마트 분류
        const evidenceByLocation: { [key: string]: any[] } = {};
        categoryCards.forEach(card => {
          const location = card.location || card.details?.match(/(?:연구소|부엌|서재|입구|지하|정원|방)/)?.[0] || 'other';
          if (!evidenceByLocation[location]) {
            evidenceByLocation[location] = [];
          }
          evidenceByLocation[location].push(card);
        });

        // location별로 9개씩 분할
        Object.entries(evidenceByLocation).forEach(([location, locationCards]) => {
          if (locationCards.length <= 9) {
            subTabs[location] = {
              icon: '🔍',
              label: `${location}증거`,
              color: categoryInfo.color,
              cards: locationCards
            };
          } else {
            // location 내에서도 9개 초과면 A,B,C 분할
            const chunks = [];
            for (let i = 0; i < locationCards.length; i += 9) {
              chunks.push(locationCards.slice(i, i + 9));
            }
            chunks.forEach((chunk, index) => {
              const letter = String.fromCharCode(65 + index);
              subTabs[`${location}_${letter}`] = {
                icon: '🔍',
                label: `${location}증거${letter}`,
                color: categoryInfo.color,
                cards: chunk
              };
            });
          }
        });
      } else {
        // 기타 카테고리는 A,B,C 단순 분할
        const chunks = [];
        for (let i = 0; i < categoryCards.length; i += 9) {
          chunks.push(categoryCards.slice(i, i + 9));
        }
        chunks.forEach((chunk, index) => {
          const letter = String.fromCharCode(65 + index);
          subTabs[`${mainCategory}_${letter}`] = {
            icon: categoryInfo.icon,
            label: `${categoryInfo.label}${letter}`,
            color: categoryInfo.color,
            cards: chunk
          };
        });
      }
    }

    return subTabs;
  }, [
    discoveredCards,
    suspectCards,
    evidenceCards,
    locationCards,
    mainCategories
  ]);

  // 현재 활성 하위 탭들 가져오기 (메모이제이션으로 최적화)
  const getCurrentSubTabs = useMemo(() => {
    return createSubTabs(activeMainCategory);
  }, [createSubTabs, activeMainCategory]);

  // 카드 필터링 함수 (2단계 탭 지원)
  const getFilteredCards = useCallback(() => {
    const subTabs = getCurrentSubTabs;

    // activeSubCategory가 현재 subTabs에 존재하는지 확인
    if (activeSubCategory && subTabs[activeSubCategory]) {
      return subTabs[activeSubCategory]?.cards || [];
    }
    // 하위 탭이 선택되지 않았거나 유효하지 않으면 첫 번째 하위 탭의 카드들 반환
    const firstSubTabKey = Object.keys(subTabs)[0];
    return subTabs[firstSubTabKey]?.cards || [];
  }, [getCurrentSubTabs, activeSubCategory]);





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
        paddingTop: 'max(env(safe-area-inset-top, 0px), 100px)', // 상단 고정 헤더(140px) - 단서카드 위치 적절히 조정
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 85px)', // 하단 고정 영역 + 여유
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
          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)',
          zIndex: 999
        }} />

        {/* 하단 시스템 UI 영역 배경 통일 */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: `calc(max(env(safe-area-inset-bottom, 0px), 0px) + 120px)`, // 하단 UI(120px) + 시스템 UI
          background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
          zIndex: 99
        }} />
        <div style={{
          maxWidth: ui.layout.containerMaxWidth,
          margin: '0 auto',
          paddingBottom: '120px'
        }}>
          {/* 모바일에서는 사건 개요 제거 - 팝업으로 이동 */}

          {/* 게임 메인 영역 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {/* 카드 영역 */}
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
                  marginTop: '0rem' // 상단 고정 영역과 간격 최소화
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

                {/* 모바일 전용 헤더 - 개선된 구조 */}
                <div style={{
                  position: 'fixed',
                  top: 'max(env(safe-area-inset-top, 0px), 0px)', // 시스템 UI 아래에 위치
                  left: 0,
                  right: 0,
                  height: '140px',
                  background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  zIndex: 1000,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px 0.5rem'
                }}>
                  {/* 고정 네비게이션 바: 뒤로가기 | 진행시간/연결횟수 | 언어선택 | 정답힌트 */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '32px',
                    paddingBottom: '8px',
                    gap: '6px',
                    flexShrink: 0 // 고정 크기 유지
                  }}>
                    <Link
                      to={backUrl}
                      style={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        transition: 'color 0.3s ease',
                        flexShrink: 0,
                        minWidth: 'fit-content'
                      }}
                    >
                      {t('backButton')}
                    </Link>

                    {/* 가운데: 진행시간 / 연결횟수 */}
                    <div style={{
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      flex: 1,
                      minWidth: 0
                    }}>
                      {Math.floor(gameState.elapsedTime / 60)}:{String(gameState.elapsedTime % 60).padStart(2, '0')} / {gameState.connections.length}{t('times')}
                    </div>

                    {/* PC와 동일한 고급 힌트 로직을 바로 실행하는 모바일 버튼 */}
                    <button
                      onClick={() => {
                        if (gameState.hintsUsed >= maxHints) return;
                        handleRequestHint();
                      }}
                      onMouseDown={(e) => {
                        if (gameState.hintsUsed < maxHints) {
                          e.currentTarget.style.transform = 'translateY(1px)';
                          e.currentTarget.style.boxShadow = '0 1px 3px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
                        }
                      }}
                      onMouseUp={(e) => {
                        if (gameState.hintsUsed < maxHints) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (gameState.hintsUsed < maxHints) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)';
                        }
                      }}
                      disabled={gameState.hintsUsed >= maxHints}
                      style={{
                        background: gameState.hintsUsed >= maxHints
                          ? 'rgba(128, 128, 128, 0.3)'
                          : 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                        color: gameState.hintsUsed >= maxHints ? 'rgba(255,255,255,0.5)' : 'white',
                        border: gameState.hintsUsed >= maxHints
                          ? '1px solid rgba(128, 128, 128, 0.5)'
                          : '1px solid rgba(251, 191, 36, 0.6)',
                        borderRadius: '6px',
                        padding: '3px 6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: gameState.hintsUsed >= maxHints ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: gameState.hintsUsed >= maxHints
                          ? 'inset 0 1px 2px rgba(0,0,0,0.1)'
                          : '0 2px 6px rgba(251, 191, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                        flexShrink: 0,
                        minWidth: 'fit-content',
                        whiteSpace: 'nowrap',
                        marginRight: '2px',
                        transform: 'translateY(0)'
                      }}
                    >
                      💡({gameState.hintsUsed}/{maxHints})
                    </button>
                  </div>

                  {/* 스크롤 가능한 탭 영역 */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    flex: 1,
                    overflowY: 'hidden',
                    paddingBottom: '8px'
                  }}>
                    {/* 1단계: 메인 카테고리 탭 행 */}
                    <div style={{
                      display: 'flex',
                      gap: '0.3rem',
                      alignItems: 'center',
                      minHeight: '40px',
                      overflowX: 'auto',
                      overflowY: 'hidden',
                      scrollBehavior: 'smooth',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      WebkitOverflowScrolling: 'touch'
                    } as React.CSSProperties}>
                      {Object.entries(mainCategories).map(([key, category]) => {
                        // 해당 카테고리에 카드가 있는지 확인
                        let categoryCards: any[] = [];
                        switch (key) {
                          case 'all':
                            categoryCards = cards.filter(card => card.discovered);
                            break;
                          case 'suspects':
                            categoryCards = cards.filter(card => card.type === 'suspect' && card.discovered);
                            break;
                          case 'evidence':
                            categoryCards = cards.filter(card => card.type === 'evidence' && card.discovered);
                            break;
                          case 'locations':
                            categoryCards = cards.filter(card => card.type === 'location' && card.discovered);
                            break;

                        }

                        if (categoryCards.length === 0) return null;

                        const isActive = activeMainCategory === key;

                        return (
                          <button
                            key={key}
                            onClick={() => {
                              setActiveMainCategory(key);
                              // 메인 카테고리 변경 시 첫 번째 하위 탭으로 설정
                              const newSubTabs = createSubTabs(key);
                              const firstSubTabKey = Object.keys(newSubTabs)[0];
                              if (firstSubTabKey) {
                                setActiveSubCategory(firstSubTabKey);
                              }
                              // 탭 클릭 시 해당 탭의 알림 제거
                              setNewCardNotification(prev => {
                                const updated = { ...prev };
                                delete updated[key];
                                return updated;
                              });
                            }}
                            style={{
                              background: isActive
                                ? `linear-gradient(45deg, ${category.color}, ${category.color}dd)`
                                : 'rgba(255, 255, 255, 0.1)',
                              color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
                              border: isActive ? `2px solid ${category.color}` : '2px solid rgba(255, 255, 255, 0.2)',
                              borderRadius: '20px',
                              padding: '6px 10px',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '2px',
                              minWidth: 'fit-content',
                              whiteSpace: 'nowrap',
                              flexShrink: 0,
                              position: 'relative'
                            }}
                          >
                            <span style={{ fontSize: '0.9rem' }}>{category.icon}</span>
                            <span>{category.label}</span>
                            {newCardNotification[key] && (
                              <div style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                background: '#ff4444',
                                color: 'white',
                                borderRadius: '50%',
                                width: '16px',
                                height: '16px',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                animation: 'pulse 1.5s infinite',
                                boxShadow: '0 2px 8px rgba(255, 68, 68, 0.4)'
                              }}>
                                !
                              </div>
                            )}
                            <span style={{
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: '8px',
                              padding: '1px 4px',
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              minWidth: '16px',
                              textAlign: 'center'
                            }}>
                              {categoryCards.length}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* 2단계: 하위 카테고리 탭 행 */}
                    {Object.keys(getCurrentSubTabs).length > 0 && (
                      <div style={{
                        display: 'flex',
                        gap: '0.3rem',
                        alignItems: 'center',
                        minHeight: '48px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        paddingLeft: '1rem',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'thin',
                        WebkitOverflowScrolling: 'touch'
                      } as React.CSSProperties}>
                        {Object.entries(getCurrentSubTabs).map(([key, subTab]) => {
                          const isActive = activeSubCategory === key;

                          return (
                            <button
                              key={`sub_${key}`}
                              onClick={() => {
                                setActiveSubCategory(key);
                                // 서브탭 클릭 시 해당 탭의 알림 제거
                                setNewCardNotification(prev => {
                                  const updated = { ...prev };
                                  delete updated[key];
                                  return updated;
                                });
                              }}
                              style={{
                                background: isActive
                                  ? `linear-gradient(45deg, ${subTab.color}, ${subTab.color}dd)`
                                  : 'rgba(255, 255, 255, 0.05)',
                                color: isActive ? 'white' : 'rgba(255, 255, 255, 0.6)',
                                border: isActive ? `2px solid ${subTab.color}` : '2px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                padding: '4px 8px',
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                                minWidth: 'fit-content',
                                whiteSpace: 'nowrap',
                                flexShrink: 0,
                                opacity: isActive ? 1 : 0.8,
                                position: 'relative'
                              }}
                            >
                              <span style={{ fontSize: '0.75rem' }}>{subTab.icon}</span>
                              <span>{subTab.label}</span>
                              {newCardNotification[key] && (
                                <div style={{
                                  position: 'absolute',
                                  top: '-3px',
                                  right: '-3px',
                                  background: '#ff4444',
                                  color: 'white',
                                  borderRadius: '50%',
                                  width: '12px',
                                  height: '12px',
                                  fontSize: '8px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 'bold',
                                  animation: 'pulse 1.5s infinite',
                                  boxShadow: '0 1px 4px rgba(255, 68, 68, 0.4)'
                                }}>
                                  !
                                </div>
                              )}
                              <span style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '6px',
                                padding: '1px 3px',
                                fontSize: '0.55rem',
                                fontWeight: 700,
                                minWidth: '12px',
                                textAlign: 'center'
                              }}>
                                {subTab.cards.length}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 카드 그리드 - 반응형 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: 'clamp(0.5rem, 1vw, 1rem)',
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

              {/* 카테고리별 빈 상태 메시지 */}
              {getFilteredCards().length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '1rem'
                }}>
                  {activeMainCategory === 'new' ? (
                    <>
                      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✨</div>
                      <p>{t('noNewCluesFound')}</p>
                      <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{t('tryCombinantion')}</p>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
                      <p>{t('noCategoryClues')}</p>
                    </>
                  )}
                </div>
              )}
            </div>

          </div>


          {/* 모바일 하단 고정 연결 영역 */}
          <div style={{
            position: 'fixed',
            bottom: `max(env(safe-area-inset-bottom, 0px), 0px)`, // 시스템 UI 바로 위에 위치
            left: '0',
            right: '0',
            background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
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
                background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
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
                background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
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
    </>
  );
};

export default MobileMysteryGameLayout;