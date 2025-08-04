import React, { useState } from 'react';
import GameCard from './GameCard';
import { Card } from '../types';

interface SwipeCardGridProps {
  cards: Card[];
  selectedCards: string[];
  onCardClick: (cardId: string) => void;
  cardStyles: {
    suspectColor: string;
    evidenceColor: string;
    locationColor: string;
    discoveredBorderColor: string;
    selectedBorderColor: string;
    cardBackground: string;
    cardHoverEffect: string;
  };
  ui: {
    layout: {
      cardBorderRadius: string;
      cardSpacing: string;
    };
  };
}

const SwipeCardGrid: React.FC<SwipeCardGridProps> = ({
  cards,
  selectedCards,
  onCardClick,
  cardStyles,
  ui
}) => {
  // 드래그 앤 드롭을 위한 상태 관리
  const [dragState, setDragState] = useState<{
    [key: string]: {
      isDragging: boolean;
      startX: number;
      currentX: number;
      initialTransform: number;
      transform: number;
      startTime: number;
      velocity: number;
    }
  }>({
    suspect: { isDragging: false, startX: 0, currentX: 0, initialTransform: 0, transform: 0, startTime: 0, velocity: 0 },
    evidence: { isDragging: false, startX: 0, currentX: 0, initialTransform: 0, transform: 0, startTime: 0, velocity: 0 },
    location: { isDragging: false, startX: 0, currentX: 0, initialTransform: 0, transform: 0, startTime: 0, velocity: 0 }
  });

  // 카테고리별 카드 분류 - 추가 타입들도 적절히 분류
  const suspectCards = cards.filter(card => card.type === 'suspect');
  const evidenceCards = cards.filter(card =>
    card.type === 'evidence' ||
    card.type === 'clue' ||
    card.type === 'temporal_fragment' ||
    card.type === 'fragment'
  );
  const locationCards = cards.filter(card => card.type === 'location');


  // 드래그 앤 드롭 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent, category: 'suspect' | 'evidence' | 'location') => {
    const touch = e.touches[0];
    const currentState = dragState[category];

    setDragState(prev => ({
      ...prev,
      [category]: {
        ...currentState,
        isDragging: true,
        startX: touch.clientX,
        currentX: touch.clientX,
        initialTransform: currentState.transform,
        startTime: Date.now(),
        velocity: 0
      }
    }));
  };

  const handleTouchMove = (e: React.TouchEvent, category: 'suspect' | 'evidence' | 'location') => {
    const currentState = dragState[category];
    if (!currentState.isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - currentState.startX;
    const newTransform = currentState.initialTransform + deltaX;

    // 속도 계산 (관성 효과용)
    const currentTime = Date.now();
    const timeDelta = currentTime - currentState.startTime;
    const velocity = timeDelta > 0 ? (touch.clientX - currentState.currentX) / timeDelta : 0;

    // 카드 컨테이너 너비를 고려한 제한 설정 (더 정확한 계산)
    const categoryCards = category === 'suspect' ? suspectCards :
      category === 'evidence' ? evidenceCards : locationCards;

    // 카드가 2개 이하면 스크롤 불필요
    if (categoryCards.length <= 2) {
      setDragState(prev => ({
        ...prev,
        [category]: {
          ...currentState,
          currentX: touch.clientX,
          transform: 0,
          velocity
        }
      }));
      return;
    }

    const maxTransform = 50; // 오른쪽 여유 공간
    // 화면에 보이는 카드 수를 고려하여 스크롤 범위 계산
    const visibleCards = Math.min(3, categoryCards.length);
    const minTransform = -((categoryCards.length - visibleCards + 0.5) * cardWithGap); // 왼쪽 끝까지 스크롤 가능

    // 경계를 넘어가면 저항력 적용
    let resistantTransform = newTransform;
    if (newTransform > maxTransform) {
      resistantTransform = maxTransform + (newTransform - maxTransform) * 0.2;
    } else if (newTransform < minTransform) {
      resistantTransform = minTransform + (newTransform - minTransform) * 0.2;
    }

    setDragState(prev => ({
      ...prev,
      [category]: {
        ...currentState,
        currentX: touch.clientX,
        transform: resistantTransform,
        velocity
      }
    }));
  };

  const handleTouchEnd = (category: 'suspect' | 'evidence' | 'location') => {
    const currentState = dragState[category];
    if (!currentState.isDragging) return;

    const categoryCards = category === 'suspect' ? suspectCards :
      category === 'evidence' ? evidenceCards : locationCards;

    // 카드가 2개 이하면 원위치
    if (categoryCards.length <= 2) {
      setDragState(prev => ({
        ...prev,
        [category]: {
          ...currentState,
          isDragging: false,
          transform: 0
        }
      }));
      return;
    }

    const maxTransform = 50;
    // 화면에 보이는 카드 수를 고려하여 스크롤 범위 계산
    const visibleCards = Math.min(3, categoryCards.length);
    const minTransform = -((categoryCards.length - visibleCards + 0.5) * cardWithGap);

    // 관성 효과를 고려한 최종 위치 계산
    let targetTransform = currentState.transform;

    // 빠른 스와이프인 경우 관성 적용 (속도가 0.5 이상일 때)
    if (Math.abs(currentState.velocity) > 0.5) {
      const inertiaDistance = currentState.velocity * 200; // 관성 거리 조정
      targetTransform += inertiaDistance;
    }

    // 가장 가까운 카드 위치로 스냅 (정확한 카드 간격 사용)
    // 각 카드의 위치는 0, -cardWithGap, -cardWithGap*2, ... 형태
    const snapPositions = [];
    for (let i = 0; i < categoryCards.length; i++) {
      const position = -i * cardWithGap;
      if (position >= minTransform && position <= maxTransform) {
        snapPositions.push(position);
      }
    }

    let finalTransform = targetTransform;

    // 경계 체크
    if (targetTransform > maxTransform) {
      finalTransform = 0; // 시작 위치로
    } else if (targetTransform < minTransform) {
      finalTransform = minTransform; // 끝 위치로
    } else if (snapPositions.length > 0) {
      // 현재 위치에서 가장 가까운 스냅 위치 찾기
      finalTransform = snapPositions.reduce((closest, current) => {
        return Math.abs(current - targetTransform) < Math.abs(closest - targetTransform)
          ? current : closest;
      });
    }

    setDragState(prev => ({
      ...prev,
      [category]: {
        ...currentState,
        isDragging: false,
        transform: finalTransform
      }
    }));
  };

  // 카테고리별 라벨 색상
  const getCategoryColor = (category: 'suspect' | 'evidence' | 'location') => {
    switch (category) {
      case 'suspect': return cardStyles.suspectColor;
      case 'evidence': return cardStyles.evidenceColor;
      case 'location': return cardStyles.locationColor;
      default: return '#ffffff';
    }
  };

  // 카테고리별 라벨 텍스트
  const getCategoryLabel = (category: 'suspect' | 'evidence' | 'location') => {
    switch (category) {
      case 'suspect': return '🧑 용의자';
      case 'evidence': return '🔍 증거';
      case 'location': return '📍 장소';
      default: return '';
    }
  };

  // 화면 크기에 따른 동적 카드 크기 계산 (컴포넌트 레벨에서 계산)
  const screenWidth = window.innerWidth;
  const cardWidth = screenWidth < 360 ? 90 : 100;
  const gap = screenWidth < 360 ? 12 : 16;
  const cardWithGap = cardWidth + gap;

  // 연속적인 스크롤 방식 카드 행 렌더링
  const renderCardRow = (
    category: 'suspect' | 'evidence' | 'location',
    categoryCards: typeof cards
  ) => {
    const currentState = dragState[category];

    return (
      <div key={category} style={{ marginBottom: '1rem' }}>
        {/* 카테고리 라벨 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          color: getCategoryColor(category),
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          <span>{getCategoryLabel(category)}</span>
        </div>

        {/* 연속 스크롤 카드 컨테이너 */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '120px',
            width: '100%',
            userSelect: 'none', // 텍스트 선택 방지
            WebkitUserSelect: 'none'
          }}
          onTouchStart={(e) => handleTouchStart(e, category)}
          onTouchMove={(e) => handleTouchMove(e, category)}
          onTouchEnd={() => handleTouchEnd(category)}
        >
          {/* 연속적인 카드 스트림 */}
          <div
            style={{
              display: 'flex',
              gap: ui.layout.cardSpacing,
              transform: `translateX(${currentState.transform}px)`,
              transition: currentState.isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
              minHeight: '120px',
              width: 'fit-content'
            }}
          >
            {categoryCards.map((card) => (
              <div
                key={card.id}
                style={{
                  minWidth: `${cardWidth}px`, // 동적 카드 너비
                  maxWidth: `${cardWidth}px`, // 동적 카드 너비
                  flexShrink: 0,
                  flexGrow: 0
                }}
              >
                <GameCard
                  card={card}
                  isSelected={selectedCards.includes(card.id)}
                  isDiscovered={card.discovered}
                  onClick={() => onCardClick(card.id)}
                  uiCustomization={{
                    suspectColor: cardStyles.suspectColor,
                    evidenceColor: cardStyles.evidenceColor,
                    locationColor: cardStyles.locationColor,
                    discoveredBorderColor: cardStyles.discoveredBorderColor,
                    selectedBorderColor: cardStyles.selectedBorderColor,
                    cardBackground: cardStyles.cardBackground,
                    cardHoverEffect: cardStyles.cardHoverEffect,
                    cardBorderRadius: ui.layout.cardBorderRadius
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      padding: '1rem',
      maxWidth: '100%',
      overflow: 'hidden'
    }}>
      {/* 용의자 행 */}
      {suspectCards.length > 0 && renderCardRow('suspect', suspectCards)}

      {/* 증거 행 */}
      {evidenceCards.length > 0 && renderCardRow('evidence', evidenceCards)}

      {/* 장소 행 */}
      {locationCards.length > 0 && renderCardRow('location', locationCards)}
    </div>
  );
};

export default SwipeCardGrid;