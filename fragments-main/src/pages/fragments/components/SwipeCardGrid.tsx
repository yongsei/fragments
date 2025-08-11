import React, { useMemo, useEffect, useRef, useCallback } from 'react';
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
  newlyDiscoveredCards?: string[]; // 새로 발견된 카드들
  onFocusToCard?: (cardId: string) => void; // 포커스 이동 요청 콜백
}

const SwipeCardGrid: React.FC<SwipeCardGridProps> = ({
  cards,
  selectedCards,
  onCardClick,
  cardStyles,
  ui,
  caseId,
  onCardLongPress,
  winConditionCardDiscovered,
  newlyDiscoveredCards,
  onFocusToCard
}) => {
  // Swiper 인스턴스들에 대한 ref
  const swiperRefs = useRef<any[]>([]);
  // 화면 크기에 따른 동적 카드 크기 계산 - 카드 크기 증가
  const { spaceBetween, slidesPerView } = useMemo(() => {
    const screenWidth = window.innerWidth;
    return {
      spaceBetween: screenWidth < 360 ? 12 : 16,
      slidesPerView: screenWidth < 360 ? 2.1 : 2.5  // 2.3→2.1, 2.7→2.5로 카드 크기 증가
    };
  }, []); // 빈 배열 = 컴포넌트 마운트 시에만 계산

  // 전체 카드를 3등분으로 분배 - useMemo로 최적화
  const { tab1Cards, tab2Cards, tab3Cards } = useMemo(() => {
    const tab1: Card[] = [];
    const tab2: Card[] = [];
    const tab3: Card[] = [];
    
    // 1,4,7 / 2,5,8 / 3,6,9 순서로 분배
    cards.forEach((card, index) => {
      const position = index % 3;
      if (position === 0) {
        tab1.push(card);
      } else if (position === 1) {
        tab2.push(card);
      } else {
        tab3.push(card);
      }
    });
    
    return {
      tab1Cards: tab1,
      tab2Cards: tab2,
      tab3Cards: tab3
    };
  }, [cards]);

  // 🎯 포커스 이동 함수 (useCallback으로 메모이제이션)
  const focusToCard = useCallback((cardId: string) => {
    console.log('🎯 포커스 이동 요청:', cardId);
    
    // 해당 카드가 어느 탭과 슬라이드에 있는지 찾기
    const allCards = cards.filter(card => card.discovered);
    const cardIndex = allCards.findIndex(card => card.id === cardId);
    console.log('📍 카드 인덱스:', cardIndex, '/ 전체 발견된 카드:', allCards.length);
    
    if (cardIndex !== -1) {
      // 1,4,7... / 2,5,8... / 3,6,9... 패턴으로 탭 결정
      const tabIndex = cardIndex % 3;
      const slideIndex = Math.floor(cardIndex / 3);
      console.log(`📊 계산 결과: 탭${tabIndex + 1}, 슬라이드${slideIndex}`);
      
      // 해당 탭의 Swiper로 스크롤
      const targetSwiper = swiperRefs.current[tabIndex];
      if (targetSwiper) {
        // 첫 번째 슬라이드(slideIndex === 0)는 자동 포커스하지 않음 (첫 번째 카드 보호)
        if (slideIndex > 0) {
          console.log(`✅ 포커스 이동 실행: 탭${tabIndex + 1}, 슬라이드${slideIndex}, 카드ID: ${cardId}`);
          
          // 즉시 이동 (타이머 없음)
          targetSwiper.slideTo(slideIndex, 800); // 0.8초 애니메이션으로 이동
        } else {
          console.log(`⏭️ 첫 번째 슬라이드라서 포커스 이동 생략 (카드ID: ${cardId})`);
        }
      } else {
        console.log('❌ targetSwiper가 없음');
      }
    } else {
      console.log('❌ 카드 인덱스를 찾을 수 없음');
    }
  }, [cards]); // cards만 의존성으로

  // 새로 발견된 카드가 있을 때 0.5초 후 자동 포커스
  useEffect(() => {
    if (!newlyDiscoveredCards || newlyDiscoveredCards.length === 0) return;

    const latestCardId = newlyDiscoveredCards[newlyDiscoveredCards.length - 1];
    console.log('🔔 새 카드 발견! 0.5초 후 포커스 이동:', latestCardId);
    
    const timer = setTimeout(() => {
      focusToCard(latestCardId);
    }, 500); // 0.5초 지연

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [newlyDiscoveredCards, focusToCard]); // focusToCard 의존성 추가

  // 탭별 라벨 (주석 처리됨)
  // const getTabLabel = (tabIndex: number) => {
  //   switch (tabIndex) {
  //     case 0: return '1페이지';
  //     case 1: return '2페이지';
  //     case 2: return '3페이지';
  //     default: return '';
  //   }
  // };


  // Swiper 기반 탭 렌더링
  const renderSwiperTab = (
    tabIndex: number,
    tabCards: typeof cards
  ) => {
    // 카드가 없으면 렌더링하지 않음
    if (tabCards.length === 0) return null;

    return (
      <div key={tabIndex} style={{ marginBottom: '1rem' }}>
        {/* 탭 라벨 (주석 처리됨) */}
        {/* 
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          color: '#ffffff',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          <span>{getTabLabel(tabIndex)}</span>
        </div>
        */}

        {/* Swiper 컨테이너 */}
        <div style={{ 
          minHeight: '180px',
          marginTop: '20px', // 상단 여백 추가
          marginBottom: '20px', // 하단 여백도 추가
          overflow: 'visible', // overflow 처리
          position: 'relative' // 위치 기준점 설정
        }}>
          <Swiper
            onSwiper={(swiper: any) => {
              swiperRefs.current[tabIndex] = swiper;
            }}
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
            {tabCards.map((card) => (
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
      {/* 탭 1 - 전체 카드 1,4,7... */}
      {renderSwiperTab(0, tab1Cards)}

      {/* 탭 2 - 전체 카드 2,5,8... */}
      {renderSwiperTab(1, tab2Cards)}

      {/* 탭 3 - 전체 카드 3,6,9... */}
      {renderSwiperTab(2, tab3Cards)}
    </div>
  );
};

export default SwipeCardGrid;