import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Card } from '../types';
import { importCardImage } from '../utils/imageUtils';
import { useSoundManager } from '../hooks/useSoundManager';

interface CardUICustomization {
  suspectColor?: string;
  evidenceColor?: string;
  locationColor?: string;
  discoveredBorderColor?: string;
  selectedBorderColor?: string;
  cardBackground?: string;
  cardHoverEffect?: string;
  cardBorderRadius?: string;
  cardHoverScale?: number;
}

interface GameCardProps {
  card: Card & { isNew?: boolean };
  isSelected: boolean;
  isDiscovered: boolean;
  isHighlighted?: boolean;
  onClick: () => void;
  disabled?: boolean;
  feedbackEffect?: 'warm' | 'cold' | 'neutral';
  uiCustomization?: CardUICustomization;
  caseId?: string; // 케이스 ID 추가
  onLongPress?: (cardId: string) => void; // 롱프레스 콜백 추가
  isWinConditionCard?: boolean; // 승리조건 카드 여부 추가
}

const GameCard: React.FC<GameCardProps> = React.memo(({ 
  card, 
  isSelected, 
  isDiscovered, 
  isHighlighted = false,
  onClick, 
  disabled = false,
  feedbackEffect,
  uiCustomization = {},
  caseId,
  onLongPress,
  isWinConditionCard = false
}) => {
  // 이미지 상태 관리
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [, setImageError] = useState<boolean>(false);
  const [shouldLoadImage, setShouldLoadImage] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 롱프레스 상태 관리
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [messageTimer, setMessageTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLongPressing, setIsLongPressing] = useState<boolean>(false);
  const [pressMessage, setPressMessage] = useState<string>(''); // 단계별 메시지
  
  // 사운드 관리
  const { playCardOpenSound, playCardCloseSound } = useSoundManager();

  // 🚀 최적화된 Intersection Observer (이미 로드된 경우 스킵)
  useEffect(() => {
    if (shouldLoadImage || !isDiscovered || !cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadImage(true);
          observer.disconnect(); // 즉시 해제하여 메모리 절약
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [shouldLoadImage, isDiscovered]);

  // 이미지 로딩 - 카드가 보일 때만
  const loadImage = useCallback(async () => {
    if (!caseId || !card.id || !shouldLoadImage) {
      setImageLoading(false);
      return;
    }

    try {
      setImageLoading(true);
      setImageError(false);
      const url = await importCardImage(caseId, card.id);
      setImageUrl(url);
    } catch (error) {
      console.log(`Failed to load image for card ${card.id}:`, error);
      setImageError(true);
    } finally {
      setImageLoading(false);
    }
  }, [caseId, card.id, shouldLoadImage]);

  useEffect(() => {
    if (shouldLoadImage) {
      loadImage();
    }
  }, [shouldLoadImage, loadImage]);
  
  // 롱프레스 시작
  const handlePressStart = () => {
    if (!disabled && isDiscovered && onLongPress) {
      setIsLongPressing(true);
      
      // 1초 후: "카드 보기" 메시지 표시
      const msgTimer = setTimeout(() => {
        setPressMessage('카드 보기');
      }, 1000);
      setMessageTimer(msgTimer);
      
      // 2초 후: 카드 상세보기 실행
      const timer = setTimeout(() => {
        console.log('🔗 Long press detected on card:', card.id);
        onLongPress(card.id);
        setIsLongPressing(false);
        setPressMessage('');
      }, 2000); // 3초 → 2초로 단축
      setPressTimer(timer);
    }
  };

  // 롱프레스 취소
  const handlePressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
    if (messageTimer) {
      clearTimeout(messageTimer);
      setMessageTimer(null);
    }
    setIsLongPressing(false);
    setPressMessage('');
  };

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (pressTimer) {
        clearTimeout(pressTimer);
      }
      if (messageTimer) {
        clearTimeout(messageTimer);
      }
    };
  }, [pressTimer, messageTimer]);

  // 카드 클릭 핸들러 (효과음 포함)
  const handleCardClick = () => {
    if (disabled) return;
    
    // 카드 상태에 따른 효과음 재생 (비동기 대기하지 않음)
    if (isSelected) {
      // 현재 선택된 카드를 해제하는 경우 -> close.wav
      playCardCloseSound().catch(error => {
        console.warn('카드 닫기 효과음 재생 실패:', error);
      });
    } else {
      // 카드를 새로 선택하는 경우 -> open.wav  
      playCardOpenSound().catch(error => {
        console.warn('카드 열기 효과음 재생 실패:', error);
      });
    }
    
    // 원래 onClick 콜백 실행 (효과음과 독립적으로 즉시 실행)
    onClick();
  };
  // 애니메이션을 위한 스타일 추가
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes newTagPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.8; }
      }
      @keyframes hintPulse {
        0%, 100% { 
          box-shadow: 0 0 25px #fbbf24, 0 0 50px rgba(251, 191, 36, 0.6);
          transform: scale(1.03);
        }
        50% { 
          box-shadow: 0 0 35px #fbbf24, 0 0 70px rgba(251, 191, 36, 0.8);
          transform: scale(1.05);
        }
      }
      @keyframes longPressPulse {
        0%, 100% { 
          box-shadow: 0 0 25px #9d4edd, 0 0 50px rgba(157, 78, 221, 0.6);
          border-color: #9d4edd;
          transform: scale(1.02);
        }
        50% { 
          box-shadow: 0 0 35px #9d4edd, 0 0 70px rgba(157, 78, 221, 0.8);
          border-color: #c084fc;
          transform: scale(1.04);
        }
      }
      @keyframes warmPulse {
        0%, 100% { 
          box-shadow: 0 0 20px #f59e0b, 0 0 40px rgba(245, 158, 11, 0.4);
          border-color: #f59e0b;
        }
        50% { 
          box-shadow: 0 0 30px #f59e0b, 0 0 60px rgba(245, 158, 11, 0.6);
          border-color: #fbbf24;
        }
      }
      @keyframes coldPulse {
        0%, 100% { 
          box-shadow: 0 0 20px #3b82f6, 0 0 40px rgba(59, 130, 246, 0.4);
          border-color: #3b82f6;
        }
        50% { 
          box-shadow: 0 0 30px #3b82f6, 0 0 60px rgba(59, 130, 246, 0.6);
          border-color: #60a5fa;
        }
      }
      @keyframes winConditionPulse {
        0%, 100% { 
          box-shadow: 0 0 30px #ffd700, 0 0 60px rgba(255, 215, 0, 0.6);
          border-color: #ffd700;
          transform: scale(1.05);
        }
        50% { 
          box-shadow: 0 0 40px #ffd700, 0 0 80px rgba(255, 215, 0, 0.8);
          border-color: #ffed4a;
          transform: scale(1.08);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  const getCardStyle = () => {
    const baseStyle = {
      borderRadius: uiCustomization.cardBorderRadius || '12px',
      padding: '0.5rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      backdropFilter: 'blur(10px)',
      position: 'relative' as const,
      overflow: 'hidden' as const,
      minHeight: '160px',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center' as const,
    };

    let gradient = '';
    let shadowColor = '';

    switch (card.type) {
      case 'suspect':
        const suspectColor = uiCustomization.suspectColor || '#dc2626';
        gradient = `linear-gradient(145deg, ${suspectColor}, ${suspectColor}cc)`;
        shadowColor = `${suspectColor}4d`; // 30% opacity
        break;
      case 'evidence':
        const evidenceColor = uiCustomization.evidenceColor || '#2563eb';
        gradient = `linear-gradient(145deg, ${evidenceColor}, ${evidenceColor}cc)`;
        shadowColor = `${evidenceColor}4d`;
        break;
      case 'location':
        const locationColor = uiCustomization.locationColor || '#059669';
        gradient = `linear-gradient(145deg, ${locationColor}, ${locationColor}cc)`;
        shadowColor = `${locationColor}4d`;
        break;
      case 'clue':
        gradient = 'linear-gradient(145deg, #8b5cf6, #7c3aed)';
        shadowColor = 'rgba(139, 92, 246, 0.3)';
        break;
    }

    // 피드백 효과에 따른 애니메이션 결정
    let animation = 'none';
    if (isLongPressing) {
      animation = 'longPressPulse 1s infinite';
    } else if (isWinConditionCard && isDiscovered) {
      animation = 'winConditionPulse 2.5s infinite';
    } else if (isHighlighted) {
      animation = 'hintPulse 2s infinite';
    } else if (feedbackEffect === 'warm') {
      animation = 'warmPulse 1.5s infinite';
    } else if (feedbackEffect === 'cold') {
      animation = 'coldPulse 1.5s infinite';
    }

    return {
      ...baseStyle,
      background: isDiscovered ? gradient : (uiCustomization.cardBackground || 'rgba(100, 100, 100, 0.3)'),
      boxShadow: isSelected 
        ? `0 0 20px ${shadowColor}, 0 0 40px rgba(255, 215, 0, 0.4)`
        : isHighlighted
        ? `0 0 25px #fbbf24, 0 0 50px rgba(251, 191, 36, 0.6)`
        : feedbackEffect === 'warm'
        ? `0 0 20px #f59e0b, 0 0 40px rgba(245, 158, 11, 0.4)`
        : feedbackEffect === 'cold'
        ? `0 0 20px #3b82f6, 0 0 40px rgba(59, 130, 246, 0.4)`
        : `0 4px 15px ${shadowColor}`,
      border: isSelected 
        ? `2px solid ${uiCustomization.selectedBorderColor || '#ffd700'}` 
        : isHighlighted
        ? '2px solid #fbbf24'
        : feedbackEffect === 'warm'
        ? '2px solid #f59e0b'
        : feedbackEffect === 'cold'
        ? '2px solid #3b82f6'
        : `2px solid ${uiCustomization.discoveredBorderColor || 'rgba(255, 255, 255, 0.2)'}`,
      transform: isSelected ? 'scale(1.05)' : isHighlighted ? 'scale(1.03)' : 'scale(1)',
      opacity: disabled ? 0.6 : 1,
      filter: !isDiscovered ? 'grayscale(0.7)' : 'none',
      animation,
    };
  };

  const getCardIcon = () => {
    if (!isDiscovered) return '❓';
    
    switch (card.type) {
      case 'suspect':
        switch (card.id) {
          case 'mary_west': return '👩‍💼';
          case 'james_butler': return '🤵';
          case 'susan_doctor': return '👩‍⚕️';
          default: return '👤';
        }
      case 'evidence':
        switch (card.id) {
          case 'tea_cup': return '☕';
          case 'poison_bottle': return '🧪';
          case 'will_draft': return '📄';
          case 'insurance_policy': return '📋';
          case 'appointment_book': return '📅';
          case 'diary': return '📖';
          default: return '🔍';
        }
      case 'location':
        switch (card.id) {
          case 'study_room': return '📚';
          default: return '🏠';
        }
      case 'clue':
        return '🌀'; // 단서 카드의 기본 아이콘
      default:
        return '❓';
    }
  };

  return (
    <div
      ref={cardRef}
      style={{
        ...getCardStyle(),
        // 🔥 게임 카드 전용 강력한 컨텍스트 메뉴 차단
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        // 추가 모바일 터치 이벤트 차단
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation'
      }}
      onClick={handleCardClick}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onTouchStart={(e) => {
        // 롱프레스 시작 (하지만 클릭 이벤트는 방해하지 않음)
        handlePressStart();
      }}
      onTouchEnd={(e) => {
        // 롱프레스 종료
        handlePressEnd();
      }}
      onTouchCancel={(e) => {
        // 롱프레스 취소
        handlePressEnd();
      }}
      // 🚫 컨텍스트 메뉴 이벤트 차단 (클릭 기능은 유지)
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }}
      // 🚫 드래그 방지 (클릭 기능은 유지)
      onDragStart={(e) => {
        e.preventDefault();
        return false;
      }}
      onMouseEnter={(e) => {
        if (!disabled && isDiscovered && !isLongPressing) {
          const hoverScale = uiCustomization.cardHoverScale || 1.03;
          e.currentTarget.style.transform = isSelected ? `scale(${hoverScale + 0.02})` : `scale(${hoverScale})`;
        }
      }}
      onMouseLeave={(e) => {
        // 롱프레스 취소
        handlePressEnd();
        // 호버 효과 제거
        if (!disabled && !isLongPressing) {
          e.currentTarget.style.transform = isSelected ? 'scale(1.05)' : 'scale(1)';
        }
      }}
    >
      {/* 롱프레스 진행 표시 - 1초 후부터 메시지 표시 */}
      {isLongPressing && pressMessage && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'linear-gradient(45deg, #9d4edd, #c084fc)',
          color: 'white',
          fontSize: '0.6rem',
          fontWeight: 700,
          padding: '4px 8px',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          zIndex: 15,
          animation: 'newTagPulse 1s infinite'
        }}>
          {pressMessage}
        </div>
      )}

      {/* WIN CONDITION 태그 */}
      {isWinConditionCard && isDiscovered && !isLongPressing && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'linear-gradient(45deg, #ffd700, #ffed4a)',
          color: '#1a1a1a',
          fontSize: '0.6rem',
          fontWeight: 700,
          padding: '2px 6px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          zIndex: 10,
          animation: 'newTagPulse 2s infinite'
        }}>
          🎯 CLICK
        </div>
      )}

      {/* NEW 태그 */}
      {card.isNew && isDiscovered && !isLongPressing && !isWinConditionCard && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'linear-gradient(45deg, #ff4444, #ff6666)',
          color: 'white',
          fontSize: '0.6rem',
          fontWeight: 700,
          padding: '2px 6px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          zIndex: 10,
          animation: 'newTagPulse 2s infinite'
        }}>
          NEW
        </div>
      )}


      {/* 선택 효과 */}
      {isSelected && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.1), transparent)',
          animation: 'pulse 2s infinite',
          pointerEvents: 'none'
        }} />
      )}

      {/* 피드백 효과 오버레이 */}
      {feedbackEffect && (
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '0.7rem',
          fontWeight: 600,
          background: feedbackEffect === 'warm' 
            ? 'linear-gradient(45deg, #f59e0b, #fbbf24)' 
            : feedbackEffect === 'cold'
            ? 'linear-gradient(45deg, #3b82f6, #60a5fa)'
            : 'transparent',
          color: 'white',
          zIndex: 10,
          opacity: 0.9,
          animation: 'newTagPulse 1.5s infinite'
        }}>
          {feedbackEffect === 'warm' ? '🔥' : feedbackEffect === 'cold' ? '❄️' : ''}
        </div>
      )}

      {/* 카드 콘텐츠 - 이미지가 있으면 이미지, 없으면 기존 UI */}
      {imageUrl && isDiscovered && !imageLoading ? (
        /* 이미지가 있는 경우 */
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={imageUrl} 
            alt={card.name}
            style={{
              width: '100%',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '0.5rem',
              filter: isDiscovered ? 'none' : 'blur(2px) grayscale(0.7)'
            }}
            onError={() => setImageError(true)}
          />
          <h3 style={{
            color: 'white',
            fontSize: '0.8rem',
            fontWeight: 600,
            textAlign: 'center',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
            lineHeight: 1.2
          }}>
            {isDiscovered ? card.name : '???'}
          </h3>
        </div>
      ) : (
        /* 이미지가 없거나 로딩 중인 경우 - 기존 UI */
        <>
          {/* 카드 아이콘 */}
          <div style={{
            fontSize: '2rem',
            marginBottom: '0.5rem',
            filter: isDiscovered ? 'none' : 'blur(1px)'
          }}>
            {imageLoading ? '⏳' : getCardIcon()}
          </div>

          {/* 카드 이름 */}
          <h3 style={{
            color: 'white',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '0.3rem',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
          }}>
            {imageLoading ? '로딩 중...' : (isDiscovered ? card.name : '???')}
          </h3>

          {/* 카드 설명 */}
          {isDiscovered && !imageLoading && (
            <>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.7rem',
                lineHeight: 1.3,
                opacity: 0.8
              }}>``
                {card.description}
              </p>
              {card.details && (
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.6rem',
                  lineHeight: 1.2,
                  marginTop: '0.3rem',
                  fontStyle: 'italic'
                }}>
                  {card.details}
                </p>
              )}
            </>
          )}
        </>
      )}

      {/* 미발견 카드 힌트 */}
      {!isDiscovered && (
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.7rem',
          fontStyle: 'italic'
        }}>
          단서를 조합하여 발견하세요
        </p>
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  // 🚀 최적화된 얕은 비교 (JSON.stringify 제거)
  if (
    prevProps.card.id !== nextProps.card.id ||
    prevProps.isSelected !== nextProps.isSelected ||
    prevProps.isDiscovered !== nextProps.isDiscovered ||
    prevProps.isHighlighted !== nextProps.isHighlighted ||
    prevProps.disabled !== nextProps.disabled ||
    prevProps.feedbackEffect !== nextProps.feedbackEffect ||
    prevProps.caseId !== nextProps.caseId ||
    prevProps.isWinConditionCard !== nextProps.isWinConditionCard
  ) {
    return false; // 리렌더링 필요
  }
  
  // uiCustomization 객체 비교 (JSON.stringify 대신 키별 비교)
  const prevUI = prevProps.uiCustomization || {};
  const nextUI = nextProps.uiCustomization || {};
  
  return (
    prevUI.suspectColor === nextUI.suspectColor &&
    prevUI.evidenceColor === nextUI.evidenceColor &&
    prevUI.locationColor === nextUI.locationColor &&
    prevUI.discoveredBorderColor === nextUI.discoveredBorderColor &&
    prevUI.selectedBorderColor === nextUI.selectedBorderColor &&
    prevUI.cardBackground === nextUI.cardBackground &&
    prevUI.cardHoverEffect === nextUI.cardHoverEffect &&
    prevUI.cardBorderRadius === nextUI.cardBorderRadius &&
    prevUI.cardHoverScale === nextUI.cardHoverScale
  );
});

export default GameCard;