import React from 'react';
import { Card } from '../types';

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
}

const GameCard: React.FC<GameCardProps> = ({ 
  card, 
  isSelected, 
  isDiscovered, 
  isHighlighted = false,
  onClick, 
  disabled = false,
  feedbackEffect,
  uiCustomization = {}
}) => {
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
      minHeight: '120px',
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
    if (isHighlighted) {
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
      style={getCardStyle()}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={(e) => {
        if (!disabled && isDiscovered) {
          const hoverScale = uiCustomization.cardHoverScale || 1.03;
          e.currentTarget.style.transform = isSelected ? `scale(${hoverScale + 0.02})` : `scale(${hoverScale})`;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = isSelected ? 'scale(1.05)' : 'scale(1)';
        }
      }}
    >
      {/* NEW 태그 */}
      {card.isNew && isDiscovered && (
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

      {/* 카드 아이콘 */}
      <div style={{
        fontSize: '2rem',
        marginBottom: '0.5rem',
        filter: isDiscovered ? 'none' : 'blur(1px)'
      }}>
        {getCardIcon()}
      </div>

      {/* 카드 이름 */}
      <h3 style={{
        color: 'white',
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '0.3rem',
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
      }}>
        {isDiscovered ? card.name : '???'}
      </h3>

      {/* 카드 설명 */}
      {isDiscovered && (
        <>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.7rem',
            lineHeight: 1.3,
            opacity: 0.8
          }}>
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
};

export default GameCard;