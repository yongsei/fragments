import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import SwipeCardGrid from './SwipeCardGrid';
import ToastMessage from './ToastMessage';
// import CardIntroSlideshow from './CardIntroSlideshow'; // CardDetailModal로 통합됨
import CardDetailModal from './CardDetailModal';
import GameResultScreen from './GameResultScreen';
// import { HintSystem } from '../components/HintSystem'; // 모바일에서는 사용하지 않음
import AdModal from '../../../components/AdModal';
import { useMysteryGame } from '../hooks/useMysteryGame';
import { useLanguageState } from '../hooks/useLanguage';
import { clearImageCache } from '../utils/imageUtils';

export interface GameScenario {
  id: string;
  title: string;
  story?: string;
  victim?: string;
  suspects?: any[];
  evidence?: any[];
  locations?: any[];
  connections?: any[];
  connectionRules?: any[];
  solution?: any;
  initialFragment?: string;
  finalFragment?: string;
  endingMessage?: string;
  fragments?: any[];
  text?: string;
  choices?: any[];
  clues?: any[];
  temporalFragments?: any[];
  // 게임 설정 추가
  initialCards?: string[];
  winCondition?: string;
}

export interface CaseFeedbackData {
  caseId: string;
  correctSuspect: string;
  keyEvidence: string[];
  combinationFeedback: CombinationFeedback[];  // Changed to array-based
  urgentHints: string[];
  contextualHints: string[];
}

export interface CombinationFeedback {
  cards: string[];  // Array format same as scenario
  proximity: 'close' | 'partial' | 'none';
  messages: string[];  // Messages by hint level (0,1,2 stages)
}


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

// 스타일시트에 애니메이션 추가 (중복 방지)
if (typeof document !== 'undefined' && !document.getElementById('mystery-game-animations')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'mystery-game-animations';
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
  nextChapterUrl?: string; // 다음 챕터 URL
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
  nextChapterUrl,
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
    toastMessage,
    winConditionCardDiscovered,
    hasSavedProgress,
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
  
  // 초기 카드 슬라이드쇼 상태 관리
  const [showCardIntro, setShowCardIntro] = useState(!hasSavedProgress);
  const [hasCheckedGameState, setHasCheckedGameState] = useState(false);
  
  // CardDetailModal 상태 관리
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [cardDetailMode, setCardDetailMode] = useState<'slideshow' | 'single'>('single');
  const [cardDetailIds, setCardDetailIds] = useState<string | string[]>('');

  // 🧹 컴포넌트 언마운트 시 메모리 정리
  useEffect(() => {
    return () => {
      console.log('🧹 MobileMysteryGameLayout unmounting - clearing image cache');
      clearImageCache();
    };
  }, []);

  // hasSavedProgress 상태에 따라 인트로 표시 여부 결정
  useEffect(() => {
    if (hasSavedProgress) {
      console.log('저장된 진행 상태가 있어 인트로를 건너뜁니다.');
      setShowCardIntro(false);
    }
  }, [hasSavedProgress]);

  // 게임 상태를 한 번만 확인해서 슬라이드쇼 표시 여부 결정
  useEffect(() => {
    if (!hasCheckedGameState && gameState.phase === 'playing') {
      console.log('Initial game state check for slideshow:', {
        phase: gameState.phase,
        elapsedTime: gameState.elapsedTime,
        connections: gameState.connections.length,
        discoveredCards: gameState.discoveredCardIds.length
      });
      
      // 저장된 게임이 있으면 슬라이드쇼 건너뛰기 (초기 카드 개수보다 많은 카드 발견시)
      const initialCardCount = scenario.initialCards?.length || 3;
      if (gameState.elapsedTime > 5 || gameState.connections.length > 0 || gameState.discoveredCardIds.length > initialCardCount) {
        console.log('Found existing game progress, skipping slideshow');
        setShowCardIntro(false);
      } else {
        console.log('New game detected, showing slideshow');
        setShowCardIntro(true);
      }
      
      setHasCheckedGameState(true);
    }
  }, [gameState.phase, gameState.elapsedTime, gameState.connections.length, gameState.discoveredCardIds.length, hasCheckedGameState]);

  // 모든 카드 (suspects, evidence, locations) 합치기 - 메모이제이션
  const allCards = useMemo(() => [
    ...(scenario.suspects || []),
    ...(scenario.evidence || []),
    ...(scenario.locations || [])
  ], [scenario.suspects, scenario.evidence, scenario.locations]);

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

  // 롱프레스 핸들러 - 단일 카드 모달 표시
  const handleCardLongPress = (cardId: string) => {
    console.log('🔗 Card long press triggered:', cardId);
    setCardDetailIds(cardId);
    setCardDetailMode('single');
    setShowCardDetail(true);
  };

  // CardDetailModal 완료 핸들러
  const handleCardDetailComplete = useCallback(() => {
    console.log('🎯 CardDetailModal completed');
    setShowCardDetail(false);
    setCardDetailIds('');
    
    // 간혹 발생하는 터치 레이어 문제 해결을 위한 강제 포커스 리셋
    setTimeout(() => {
      // 문서 전체의 포인터 이벤트를 강제로 활성화
      document.body.style.pointerEvents = 'auto';
      // 혹시 남아있을 수 있는 모달 요소들 정리
      const modalElements = document.querySelectorAll('[style*="z-index: 999"]');
      modalElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.pointerEvents = 'none';
        }
      });
    }, 100);
  }, []);


  // 새 카드 알림 상태 관리 (스와이프 UI에서는 전역 알림만 사용)
  const [, setNewCardNotification] = useState<{ [key: string]: boolean }>({});

  // 새로운 스와이프 UI에서는 탭 시스템 불필요





  // 🚀 카드 검색 최적화를 위한 Map 생성
  const cardMap = useMemo(() => {
    return new Map(cards.map(card => [card.id, card]));
  }, [cards]);

  // 새로 발견된 카드 감지 및 알림 설정 + 자동 모달 표시
  useEffect(() => {
    if (gameState.newlyDiscoveredCards && gameState.newlyDiscoveredCards.length > 0) {
      console.log('🎉 New cards discovered:', gameState.newlyDiscoveredCards);
      
      const notifications: { [key: string]: boolean } = {};

      gameState.newlyDiscoveredCards.forEach(cardId => {
        const card = cardMap.get(cardId); // 🚀 O(1) 검색으로 최적화
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

      // 새 카드가 여러 개면 slideshow 모드, 1개면 single 모드로 자동 표시
      if (gameState.newlyDiscoveredCards.length > 1) {
        console.log('🎬 Showing slideshow for multiple new cards:', gameState.newlyDiscoveredCards);
        setCardDetailIds(gameState.newlyDiscoveredCards);
        setCardDetailMode('slideshow');
        setShowCardDetail(true);
      } else if (gameState.newlyDiscoveredCards.length === 1) {
        console.log('🎯 Showing single card modal for:', gameState.newlyDiscoveredCards[0]);
        setCardDetailIds(gameState.newlyDiscoveredCards[0]);
        setCardDetailMode('single');
        setShowCardDetail(true);
      }

      // 5초 후 알림 제거 - cleanup 함수 추가
      const timeoutId = setTimeout(() => {
        setNewCardNotification(prev => {
          const updated = { ...prev };
          Object.keys(notifications).forEach(key => {
            delete updated[key];
          });
          return updated;
        });
      }, 5000);

      // cleanup 함수로 메모리 누수 방지
      return () => clearTimeout(timeoutId);
    }
  }, [gameState.newlyDiscoveredCards, cardMap]);






  if (showResult) {
    return (
      <GameResultScreen
        gameState={gameState}
        themeColors={themeColors}
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        seoKeywords={seoKeywords}
        canonicalUrl={canonicalUrl}
        backUrl={backUrl}
        nextChapterUrl={nextChapterUrl}
        onRestart={handleRestart}
      />
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

      {/* 초기 카드 소개 슬라이드쇼 - CardDetailModal intro 모드 사용 */}
      {showCardIntro && scenario.initialCards && scenario.initialCards.length > 0 && (
        <CardDetailModal
          mode="intro"
          caseId={caseId || 'case1-ch1'}
          cardIds={scenario.initialCards}
          cards={allCards}
          showCountdown={true}
          onComplete={() => {
            console.log('CardDetailModal intro completed!');
            setShowCardIntro(false);
          }}
          theme={{
            primaryGradient: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent} 100%)`,
              accentColor: themeColors.accent,
              textColor: 'white',
              skipButtonColor: '#ff6b6b'
            }}
          />
      )}

      <div style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 50%, ${themeColors.accent} 100%)`,
        color: 'white',
        padding: '1rem', // 기본 패딩
        paddingTop: 'max(env(safe-area-inset-top, 0px), 30px)', // 상단 패딩 축소
        paddingBottom: `calc(max(env(safe-area-inset-bottom, 0px), 0px) + 160px)`, // 하단 UI(140px) + 여백(20px) + 시스템 UI
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
          background: 'linear-gradient(135deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 100%)', // 메인 배경과 통일
          zIndex: 999
        }} />

        {/* 하단 시스템 UI 영역 배경 통일 */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: `calc(max(env(safe-area-inset-bottom, 0px), 0px) + 140px)`, // 하단 UI(140px) + 시스템 UI
          background: 'linear-gradient(135deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 100%)', // 메인 배경과 통일
          zIndex: 99
        }} />
        <div style={{
          maxWidth: ui.layout.containerMaxWidth,
          margin: '0 auto',
          paddingBottom: '40px' // 하단 여백 확보
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
                cards={gameState.discoveredCardIds.map(cardId => 
                  cards.find(card => card.id === cardId)
                ).filter((card): card is typeof cards[0] => card !== undefined)}
                selectedCards={gameState.selectedCards}
                onCardClick={handleCardSelect}
                onCardLongPress={handleCardLongPress}
                cardStyles={ui.cardStyles}
                ui={ui}
                caseId={caseId}
                winConditionCardDiscovered={winConditionCardDiscovered}
                newlyDiscoveredCards={gameState.newlyDiscoveredCards}
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
            background: 'linear-gradient(135deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1rem'
          }}>
            {/* 왼쪽: 뒤로가기 */}
            <div>
              <Link
                to={backUrl}
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
              >
                ←
              </Link>
            </div>

            {/* 가운데: 진행시간 / 연결횟수 - 절대 중앙 정렬 */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textAlign: 'center'
            }}>
              {Math.floor(gameState.elapsedTime / 60)}:{String(gameState.elapsedTime % 60).padStart(2, '0')} | {gameState.connections.length}{t('times')}
            </div>

            {/* 오른쪽: 힌트 버튼 */}
            <div>
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
          </div>



          {/* 모바일 하단 고정 연결 영역 */}
          <div style={{
            position: 'fixed',
            bottom: `max(env(safe-area-inset-bottom, 0px), 105px)`, // 시스템 UI 바로 위에 위치
            left: '0',
            right: '0',
            background: 'linear-gradient(135deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '12px',
            paddingBottom: '12px', // 고정 패딩으로 일관성 확보
            paddingLeft: '20px',
            paddingRight: '20px',
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
            timestamp={toastMessage.timestamp}
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

      {/* CardDetailModal - 롱프레스 및 새 카드 상세보기 */}
      {showCardDetail && (
        <CardDetailModal
          mode={cardDetailMode}
          caseId={caseId || ''}
          cardIds={cardDetailIds}
          cards={allCards}
          onComplete={handleCardDetailComplete}
          theme={{
            primaryGradient: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
            accentColor: themeColors.accent,
            textColor: '#ffffff',
            skipButtonColor: '#ff6b6b'
          }}
        />
      )}

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