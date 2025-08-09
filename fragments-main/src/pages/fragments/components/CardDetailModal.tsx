import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { importCardImage } from '../utils/imageUtils';

interface Card {
  id: string;
  name: string;
  description: string;
  [key: string]: any;
}

interface CardDetailModalProps {
  mode: 'slideshow' | 'single' | 'intro';
  caseId: string;
  cardIds: string | string[];        // 단일 또는 여러 카드 ID
  cards: Card[];
  onComplete: () => void;
  showCountdown?: boolean;           // intro 모드에서 카운트다운 표시 여부
  theme?: {
    primaryGradient?: string;
    accentColor?: string;
    textColor?: string;
    skipButtonColor?: string;
  };
}

const CardDetailModal: React.FC<CardDetailModalProps> = ({
  mode,
  caseId,
  cardIds,
  cards,
  onComplete,
  showCountdown = false,
  theme = {}
}) => {
  // 카드 ID 배열로 정규화 - useMemo로 최적화
  const normalizedCardIds = useMemo(() => {
    const result = Array.isArray(cardIds) ? cardIds : [cardIds];
    console.log('🎯 CardDetailModal normalized card IDs:', result);
    console.log('🎯 Available cards:', cards.map(c => ({ id: c.id, name: c.name })));
    return result;
  }, [cardIds, cards]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);
  const [cardState, setCardState] = useState<'fadeIn' | 'show' | 'fadeOut'>('fadeIn');
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(7); // intro 모드용 카운트다운
  const [isTransitioning, setIsTransitioning] = useState(false); // 전환 중인지 추적
  const [canStartCountdown, setCanStartCountdown] = useState(false); // 카운트다운 시작 허용 플래그
  
  // useRef로 타이머 관리
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  
  // 컴포넌트 언마운트 시 완전한 정리
  useEffect(() => {
    return () => {
      console.log('🧹 CardDetailModal unmounting - cleaning up all timers');
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      // 상태 초기화
      fadeOutProcessedRef.current = false;
    };
  }, []);

  const defaultTheme = {
    primaryGradient: theme.primaryGradient || 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
    accentColor: theme.accentColor || '#9d4edd',
    textColor: theme.textColor || '#ffffff',
    skipButtonColor: theme.skipButtonColor || '#ff6b6b'
  };

  // 현재 카드 정보 가져오기
  const currentCard = cards.find(card => card.id === normalizedCardIds[currentIndex]);
  
  // 현재 카드 상태 디버깅
  React.useEffect(() => {
    console.log(`🎯 Card ${currentIndex}: ID=${normalizedCardIds[currentIndex]}, Found=${!!currentCard}, Name=${currentCard?.name || 'NOT FOUND'}`);
  }, [currentIndex, normalizedCardIds, currentCard]);

  // SKIP 버튼용 핸들러
  const handleSkip = useCallback(() => {
    console.log('🚀 SKIP clicked, current state:', cardState, 'index:', currentIndex, 'mode:', mode);
    
    // 이미 fadeOut 중이거나 마지막 카드인 경우 즉시 완료 처리
    if (cardState === 'fadeOut') {
      console.log('🚫 Already fading out, ignoring skip');
      return;
    }
    
    // 마지막 카드인 경우 즉시 완료
    if (currentIndex >= normalizedCardIds.length - 1) {
      console.log('🏁 Last card skip - immediate completion');
      // 모든 타이머 정리
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      // 즉시 완료
      onComplete();
      return;
    }
    
    // 활성 타이머들 정리
    if (timerRef.current) {
      console.log('🧹 Timer cleared by skip');
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (countdownRef.current) {
      console.log('🧹 Countdown cleared by skip');
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    
    // 카운트다운 비활성화하고 fadeOut 시작
    setCanStartCountdown(false);
    setCardState('fadeOut');
  }, [cardState, currentIndex, mode, normalizedCardIds.length, onComplete]);

  // 이미지 로드
  useEffect(() => {
    const loadCurrentImage = async () => {
      if (normalizedCardIds[currentIndex]) {
        const imageUrl = await importCardImage(caseId, normalizedCardIds[currentIndex]);
        setCurrentImageUrl(imageUrl);
      }
    };
    loadCurrentImage();
  }, [caseId, normalizedCardIds, currentIndex]);

  // 슬라이드쇼/intro에서만 카드 인덱스 변경 시 처리
  useEffect(() => {
    if ((mode === 'slideshow' || mode === 'intro') && currentIndex > 0) {
      console.log(`🔄 ${mode}: Card index changed to:`, currentIndex);
      
      // 기존 타이머들 정리
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      
      if (mode === 'intro') {
        // intro 모드: fadeIn 없이 바로 show (크로스페이드 효과)
        console.log('🎮 Intro mode: Direct transition to show state');
        setTimeLeft(7);
        setCardState('show');
        setIsTransitioning(false); // 전환 완료
        setCanStartCountdown(true); // 카운트다운 시작 허용
        
        // 중요: fadeOut 상태를 리셋하여 중복 fadeOut 방지
        console.log('🔧 Intro mode: Reset fadeOut state to prevent immediate transition');
      } else {
        // slideshow 모드: 기존 fadeIn 처리
        console.log('📽️ Slideshow mode: Starting fadeIn');
        setCardState('fadeIn');
        setCanStartCountdown(false); // slideshow는 다른 타이머 시스템 사용
      }
    }
  }, [currentIndex, mode]);

  // fadeIn 처리 (cardState가 fadeIn일 때만)
  useEffect(() => {
    if (cardState === 'fadeIn') {
      console.log('✨ Starting fadeIn animation');
      
      // 초기 마운트 시 fadeIn 효과를 보장하기 위해 짧은 지연 후 show로 변경
      const fadeInTimer = setTimeout(() => {
        console.log('✨ FadeIn complete, showing card');
        setCardState('show');
        setCanStartCountdown(true); // fadeIn 완료 후 카운트다운 시작 허용
      }, 450); // CSS transition과 맞춤 (400ms + 50ms 여유)
      
      return () => clearTimeout(fadeInTimer);
    }
  }, [cardState]);

  // show 상태에서 타이머 시작
  useEffect(() => {
    if (cardState === 'show' && !isTransitioning && canStartCountdown) {
      if (mode === 'intro' && showCountdown && !countdownRef.current) {
        // intro 모드: 카운트다운 타이머 시작
        console.log('⏱️ Starting countdown timer for intro mode - Card:', normalizedCardIds[currentIndex]);
        countdownRef.current = setInterval(() => {
          setTimeLeft(prev => {
            const newTime = prev - 1;
            console.log('⏱️ Countdown:', newTime, 'for card:', normalizedCardIds[currentIndex]);
            if (newTime <= 0) {
              console.log('⏰ Countdown finished, starting fadeOut for card:', normalizedCardIds[currentIndex]);
              if (countdownRef.current) {
                clearInterval(countdownRef.current);
                countdownRef.current = null;
              }
              setCanStartCountdown(false); // fadeOut 시작 전에 카운트다운 비활성화
              setCardState('fadeOut');
            }
            return Math.max(0, newTime);
          });
        }, 1000);
      } else if (mode !== 'intro' && !timerRef.current) {
        // single/slideshow 모드: 기존 7초 타이머
        console.log('⏰ Starting timer for mode:', mode);
        const duration = 7000; // 7초
        timerRef.current = setTimeout(() => {
          console.log('⏰ Timer finished, starting fadeOut');
          timerRef.current = null;
          setCardState('fadeOut');
        }, duration);
      }
    }
  }, [cardState, mode, showCountdown, isTransitioning, canStartCountdown, normalizedCardIds, currentIndex]);

  // fadeOut 처리 (cardState가 fadeOut일 때만) - 중복 실행 방지를 위해 ref 사용
  const fadeOutProcessedRef = useRef(false);
  
  useEffect(() => {
    if (cardState === 'fadeOut' && !fadeOutProcessedRef.current) {
      console.log('🌅 Starting fadeOut process for card:', normalizedCardIds[currentIndex]);
      fadeOutProcessedRef.current = true; // 중복 실행 방지
      
      if (mode === 'intro' && currentIndex < normalizedCardIds.length - 1) {
        // intro 모드: 다음 카드로 이동
        console.log('➡️ Intro mode: Moving to next card from', currentIndex, 'to', currentIndex + 1);
        // fadeOut 없이 즉시 다음 카드로 이동
        setCurrentIndex(prev => prev + 1);
        // fadeOut 처리 완료 후 플래그 리셋은 다음 카드 로드 시 자동으로 됨
      } else {
        // slideshow/single 모드 또는 마지막 카드: 기존 fadeOut 처리
        const fadeOutTimer = setTimeout(() => {
          if (mode === 'slideshow' && currentIndex < normalizedCardIds.length - 1) {
            console.log('➡️ Moving to next card in slideshow');
            setCurrentIndex(prev => prev + 1);
          } else {
            console.log('🏁 Modal completed - starting final fadeOut');
            // 즉시 onComplete 호출하고 모달 정리
            onComplete();
            setIsVisible(false);
          }
        }, 400);
        
        return () => clearTimeout(fadeOutTimer);
      }
    }
  }, [cardState, mode, currentIndex, normalizedCardIds.length, onComplete]);
  
  // 카드 인덱스가 변경될 때마다 fadeOut 플래그 리셋
  useEffect(() => {
    fadeOutProcessedRef.current = false;
  }, [currentIndex]);

  // 카드가 로드되지 않았으면 잠시 후 완료 처리
  useEffect(() => {
    if (cards.length === 0) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [cards.length, onComplete]);

  // 카드가 없으면 로딩 상태로 처리 (즉시 완료하지 않음)
  if (!currentCard) {
    return (
      <>
        {/* 로딩 시에도 어두운 배경 오버레이 */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 9998
        }} />

        {/* 로딩 화면 */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: defaultTheme.primaryGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          color: defaultTheme.textColor,
          fontSize: '18px'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '15px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${defaultTheme.accentColor}40`
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              animation: 'pulse 1.5s infinite'
            }}>
              ⏳
            </div>
            카드를 불러오는 중...
          </div>
        </div>
      </>
    );
  }

  // isVisible이 false면 아무것도 렌더링하지 않음
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* 어두운 배경 오버레이 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 9998,
        opacity: cardState === 'fadeIn' ? 0 : cardState === 'fadeOut' ? 0 : 1,
        transition: 'opacity 0.4s ease-out'
      }} />

      {/* 메인 모달 컨테이너 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: defaultTheme.primaryGradient,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'max(env(safe-area-inset-top), 60px)',
        paddingBottom: 'max(env(safe-area-inset-bottom), 80px)',
        zIndex: 9999,
        color: defaultTheme.textColor,
        fontFamily: "'Noto Sans KR', sans-serif",
        opacity: cardState === 'fadeIn' ? 0 : cardState === 'fadeOut' ? 0 : 1,
        transition: 'opacity 0.4s ease-out'
      }}>
        {/* Skip/Close 버튼 */}
        <button
        onClick={handleSkip}
        style={{
          position: 'absolute',
          top: '120px',
          right: '60px',
          background: 'transparent',
          border: `2px solid ${defaultTheme.skipButtonColor}`,
          borderRadius: '25px',
          color: defaultTheme.skipButtonColor,
          padding: '8px 16px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          animation: 'skipBlink 1.5s infinite',
          transition: 'all 0.3s ease',
          zIndex: 10000
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = defaultTheme.skipButtonColor;
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = defaultTheme.skipButtonColor;
        }}
      >
        {(mode === 'slideshow' || mode === 'intro') && normalizedCardIds.length > 1 ? 'SKIP >>' : 'CLOSE'}
      </button>

      {/* 카드 컨텐츠 - 간단한 카드 디자인 */}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* 카드 컨테이너 - 전체 화면 커버 */}
        <div style={{
          width: 'calc(100% - 40px)', // 테두리를 위한 여백
          height: 'calc(100% - 40px)', // 테두리를 위한 여백
          borderRadius: '25px',
          border: `6px solid ${defaultTheme.accentColor}`,
          boxShadow: `inset 0 0 0 8px rgba(0, 0, 0, 0.3), 0 0 50px ${defaultTheme.accentColor}50`,
          overflow: 'hidden',
          position: 'relative',
          ...(currentImageUrl 
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${currentImageUrl})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }
            : {
                backgroundImage: `linear-gradient(135deg, ${defaultTheme.primaryGradient})`
              }
          ),
          animation: 'slideInFromLeft 0.8s ease-out'
        }}>
          {/* 카드 내부 여백 */}
          <div style={{
            width: '100%',
            height: '100%',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            background: 'linear-gradient(transparent 0%, transparent 60%, rgba(0, 0, 0, 0.8) 100%)'
          }}>
            {/* 카드 제목 - 첫 번째 줄 */}
            <div 
              key={`title-${currentIndex}`}
              style={{
                animation: 'slideInLine1 1s ease-out 0.5s both'
              }}
            >
              <h2 style={{
                fontSize: 'clamp(1.3rem, 5vw, 2rem)',
                fontWeight: 'bold',
                margin: '0 0 0.5rem 0',
                color: 'white',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                lineHeight: 1.2
              }}>
                {currentCard.name}
              </h2>
            </div>
            
            {/* 카드 설명 - 두 번째 줄 */}
            <div 
              key={`desc-${currentIndex}`}
              style={{
                animation: 'slideInLine2 1s ease-out 0.8s both'
              }}
            >
              <p style={{
                fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 1px 5px rgba(0, 0, 0, 0.8)',
                margin: '0 0 0.8rem 0',
                lineHeight: 1.4
              }}>
                {currentCard.description}
              </p>
            </div>
          </div>
          
          {/* 로딩 상태 */}
          {!currentImageUrl && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(1rem, 4vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              animation: 'slideInLine1 1.2s ease-out 0.3s both'
            }}>
              ⏳ 로딩 중...
            </div>
          )}
        </div>
      </div>

        {/* CSS 애니메이션 */}
        <style>
          {`
            @keyframes skipBlink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0.6; }
            }
            
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
            
            @keyframes fadeOut {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
            
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
                transform: scale(1);
              }
              50% {
                opacity: 0.7;
                transform: scale(1.05);
              }
            }
            
            @keyframes slideInFromLeft {
              0% {
                transform: translateX(-100px);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            @keyframes slideInLine1 {
              0% {
                transform: translateX(-50px);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            @keyframes slideInLine2 {
              0% {
                transform: translateX(-30px);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            @keyframes slideInLine3 {
              0% {
                transform: translateX(-20px);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default CardDetailModal;