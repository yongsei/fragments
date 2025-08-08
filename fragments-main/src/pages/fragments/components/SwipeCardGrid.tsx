import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
  caseId?: string; // 케이스 ID 추가
  onCardLongPress?: (cardId: string) => void; // 롱프레스 콜백 추가
  winConditionCardDiscovered?: string | null; // 승리조건 카드 발견 상태 추가
}

const SwipeCardGrid: React.FC<SwipeCardGridProps> = ({
  cards,
  selectedCards,
  onCardClick,
  cardStyles,
  ui,
  caseId,
  onCardLongPress,
  winConditionCardDiscovered
}) => {
  // 화면 크기에 따른 동적 카드 크기 계산
  const screenWidth = window.innerWidth;
  const spaceBetween = screenWidth < 360 ? 12 : 16;
  const slidesPerView = screenWidth < 360 ? 2.3 : 2.8;

  // 카테고리별 카드 분류
  const suspectCards = cards.filter(card => card.type === 'suspect');
  const evidenceCards = cards.filter(card =>
    card.type === 'evidence' ||
    card.type === 'clue' ||
    card.type === 'temporal_fragment' ||
    card.type === 'fragment'
  );
  const locationCards = cards.filter(card => card.type === 'location');

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


  // Swiper 기반 카드 행 렌더링
  const renderSwiperRow = (
    category: 'suspect' | 'evidence' | 'location',
    categoryCards: typeof cards
  ) => {
    // 카드가 없으면 렌더링하지 않음
    if (categoryCards.length === 0) return null;

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

        {/* Swiper 컨테이너 */}
        <div style={{ 
          minHeight: '180px',
          marginTop: '20px', // 상단 여백 추가
          marginBottom: '20px', // 하단 여백도 추가
          overflow: 'visible', // overflow 처리
          position: 'relative' // 위치 기준점 설정
        }}>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            freeMode={false} // 자유 모드 비활성화로 정확한 스냅
            centeredSlides={false}
            grabCursor={true}
            style={{
              paddingLeft: '0px',
              paddingRight: '20px',
              height: '180px', // Swiper 자체 높이 설정 (여백 고려해서 축소)
              display: 'flex',
              alignItems: 'flex-start', // 상단 정렬
              overflow: 'visible'
            }}
          >
            {categoryCards.map((card) => (
              <SwiperSlide key={card.id} style={{ height: '180px' }}>
                <div style={{
                  width: '100%',
                  height: '180px'
                }}>
                  <GameCard
                    card={card}
                    isSelected={selectedCards.includes(card.id)}
                    isDiscovered={card.discovered}
                    onClick={() => onCardClick(card.id)}
                    onLongPress={onCardLongPress}
                    caseId={caseId}
                    isWinConditionCard={winConditionCardDiscovered === card.id}
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
              </SwiperSlide>
            ))}
          </Swiper>
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
      {/* 용의자 행 - Swiper */}
      {renderSwiperRow('suspect', suspectCards)}

      {/* 증거 행 - Swiper */}
      {renderSwiperRow('evidence', evidenceCards)}

      {/* 장소 행 - Swiper */}
      {renderSwiperRow('location', locationCards)}
    </div>
  );
};

export default SwipeCardGrid;