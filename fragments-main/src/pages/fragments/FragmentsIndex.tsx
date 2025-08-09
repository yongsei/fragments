import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import UnifiedFragmentsRouter from './components/UnifiedFragmentsRouter';
import SEOHead from '../../components/SEOHead';
import { LanguageContext, useLanguageState } from './hooks/useLanguage';
import LanguageSelector from './components/LanguageSelector';
import { useFragmentsTranslation } from './hooks/useFragmentsTranslation';

// 내부 컴포넌트: LanguageProvider 안에서 useFragmentsTranslation 사용
const FragmentsContent: React.FC = () => {
  const location = useLocation();
  const isInCasePage = location.pathname.match(/\/case[12345]/); // 케이스 1, 2, 3, 4, 5 체크
  const { t, originalLang } = useFragmentsTranslation(); // Fragments 다국어

  return (
    <>
      <SEOHead
        title={originalLang === 'kr' 
          ? "단서의 파편 (Fragment of Mystery) - 5케이스 온라인 추리게임"
          : "Fragment of Mystery - 5 Cases Free Online Detective Game"
        }
        description={originalLang === 'kr'
          ? "🧩 단서 카드를 조합하여 미스터리 사건을 해결하는 고급 추리게임! 저택 살인사건, SF 시간여행, 스팀펑크 브래스헬름 3부작까지 5가지 케이스. 논리적 사고와 추론 능력을 기르는 온라인 브라우저 게임."
          : "🧩 Advanced detective game where you combine clue cards to solve mysterious cases! Play 5 free cases: mansion murder mystery, sci-fi time travel mystery, and steampunk Brasshelm trilogy. Online browser game that develops logical thinking and reasoning skills."
        }
        keywords={originalLang === 'kr'
          ? "단서의 파편, Fragment of Mystery, 추리게임, 미스터리게임, 단서조합, 카드게임, 논리퍼즐, 온라인게임, 브라우저게임, 범인찾기, 사건해결, 저택살인사건, SF미스터리, 시간여행게임, 추론게임, 탐정게임, 두뇌게임, 퍼즐게임"
          : "Fragment of Mystery, detective game, mystery game, clue combination, card game, logic puzzle, free game, online game, browser game, find culprit, solve case, mansion murder, sci-fi mystery, time travel game, reasoning game, detective game, brain game, puzzle game"
        }
        canonical="/fragments/"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Game",
            "name": "단서의 파편 (Fragment of Mystery)",
            "description": "단서 카드를 조합하여 미스터리 사건을 해결하는 고급 추리 게임",
            "url": "https://norri.netlify.app/fragments/",
            "genre": ["추리 게임", "미스터리 게임", "논리 퍼즐"],
            "gamePlatform": "Web Browser",
            "operatingSystem": "Any",
            "applicationCategory": "Game",
            "isAccessibleForFree": true,
            "inLanguage": "ko-KR",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock"
            },
            "creator": {
              "@type": "Organization",
              "name": "Norri Puzzle Games",
              "url": "https://norri.netlify.app/"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Norri Puzzle Games",
              "url": "https://norri.netlify.app/"
            },
            "gameItem": [
              {
                "@type": "Game",
                "name": "케이스 1: 저택 살인 사건", 
                "description": "고풍스러운 저택에서 벌어진 살인사건의 진실을 밝혀내는 클래식 추리게임",
                "url": "https://norri.netlify.app/fragments/case1/",
                "genre": "추리 게임",
                "gamePlatform": "Web Browser",
                "isAccessibleForFree": true
              },
              {
                "@type": "Game", 
                "name": "케이스 2: 크로노스 패러독스",
                "description": "시간 연구소에서 사라진 박사의 비밀을 파헤치는 SF 시간여행 미스터리",
                "url": "https://norri.netlify.app/fragments/case2/",
                "genre": "SF 추리 게임", 
                "gamePlatform": "Web Browser",
                "isAccessibleForFree": true
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "추리게임러버"
                },
                "reviewBody": "정말 몰입도 높은 추리게임입니다. 단서들을 하나씩 조합해가며 사건을 해결하는 재미가 쏠쏠해요!"
              }
            ]
          })}
        </script>
        
        <meta property="og:title" content="단서의 파편 (Fragment of Mystery) - 온라인 추리게임" />
        <meta property="og:description" content="🧩 단서 카드를 조합하여 미스터리 사건을 해결하는 고급 추리게임! 저택 살인사건, SF 시간여행, 스팀펑크 브래스헬름 3부작까지 5가지 케이스." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://norri.netlify.app/fragments/" />
        <meta property="og:image" content="https://norri.netlify.app/images/fragments-preview.jpg" />
        <meta property="og:site_name" content="Norri 퍼즐 게임" />
        <meta property="og:locale" content="ko_KR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="단서의 파편 (Fragment of Mystery) - 온라인 추리게임" />
        <meta name="twitter:description" content="🧩 단서 카드를 조합하여 미스터리 사건을 해결하는 고급 추리게임! 저택 살인사건, SF 시간여행, 스팀펑크 브래스헬름 3부작까지 5가지 케이스." />
        <meta name="twitter:image" content="https://norri.netlify.app/images/fragments-preview.jpg" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="alternate" hrefLang="ko" href="https://norri.netlify.app/fragments/" />
      </SEOHead>

      {isInCasePage ? (
        <UnifiedFragmentsRouter />
      ) : (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
          color: 'white',
          // 시스템 UI 회피 - 최소한으로 조정
          paddingTop: 'max(env(safe-area-inset-top, 0px), 10px)', // 띠배너 높이만큼 패딩 추가
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 30px)'
        }}>
          {/* 상단 고정 띠배너 - 언어 선택기만 */}
          <div style={{
            position: 'fixed',
            top: 'max(env(safe-area-inset-top, 0px), 0px)',
            left: 0,
            right: 0,
            height: '60px',
            background: 'rgba(26, 26, 46, 0.95)', // 배경을 투명하게
            backdropFilter: 'blur(10px)', // 블러 효과 추가
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end', // 우측 정렬
            padding: '0 1rem'
          }}>
            {/* 언어 선택기만 우측에 배치 */}
            <LanguageSelector />
          </div>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>

            {/* 헤더 - 메인 타이틀 복원 */}
            <div style={{
              textAlign: 'center',
              marginBottom: '3rem',
              marginTop: '1rem' // 띠배너 아래 여백 축소
            }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                margin: '0 0 1rem 0',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                🧩 {t.mainTitle}
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                margin: '0 auto',
                opacity: '0.9',
                maxWidth: '600px'
              }}>
                {t.mainSubtitle}
              </p>
            </div>

            {/* 케이스 스와이프 컨테이너 - Swiper 적용 */}
            <div style={{
              width: '100%',
              paddingBottom: '3rem' // pagination 공간 확보
            }}>
              <Swiper
                modules={[Pagination, EffectCoverflow]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  }
                }}
                style={{
                  padding: '2rem clamp(1rem, 4vw, 2rem)',
                }}
              >
              
              {/* 케이스 1: 어둠의 대성당 */}
              <SwiperSlide>
                <Link to="/fragments/case1" 
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    height: '100%'
                  }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* 다크 퍼플 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(157, 78, 221, 0.2) 50%, transparent 60%)',
                    transform: 'rotate(-15deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      ⛪
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      케이스 1: 어둠의 대성당
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      고딕 대성당에서 벌어진 다크 판타지 미스터리
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 난이도: ⭐⭐⭐</span>
                      <span>⏱️ 예상시간: 15-20분</span>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>

              {/* 케이스 2: 우주선 오디세이 */}
              <SwiperSlide>
                <Link to="/fragments/case2" 
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    height: '100%'
                  }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* SF 우주 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(61, 42, 71, 0.3) 50%, transparent 60%)',
                    transform: 'rotate(15deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      🚀
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      케이스 2: 우주선 오디세이
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      우주선에 갇힌 탐사팀과 AI 가이아의 치명적 비밀
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 난이도: ⭐⭐⭐⭐</span>
                      <span>⏱️ 예상시간: 25-35분</span>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>

              {/* 케이스 3: 브래스헬름의 잿불 */}
              <SwiperSlide>
                <Link to="/fragments/case3" 
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    height: '100%'
                  }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* 클래식 열차 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(139, 69, 19, 0.2) 50%, transparent 60%)',
                    transform: 'rotate(-10deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      🚂
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      케이스 3: 오리엔트 특급 열차
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      눈보라 속 고립된 열차에서 벌어진 완벽한 밀실 살인
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 난이도: ⭐⭐⭐⭐</span>
                      <span>⏱️ 예상시간: 30-40분</span>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>

              {/* 케이스 4: 브래스헬름의 잿불 Ch.2 */}
              <SwiperSlide>
                <Link to="/fragments/case4" 
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    height: '100%'
                  }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    
                    {/* 마법공학 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(138, 43, 226, 0.3) 50%, transparent 60%)',
                    transform: 'rotate(10deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      🔮
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      케이스 4: 아르카눔 그림자
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      마법과 기술이 공존하는 도시의 마법공학자 살인사건
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 난이도: ⭐⭐⭐⭐⭐</span>
                      <span>⏱️ 예상시간: 35-45분</span>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>

              {/* 케이스 5: 크로노스의 시간여행 미스터리 */}
              <SwiperSlide>
                <Link to="/fragments/case5" 
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    height: '100%'
                  }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* SF 시간여행 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(0, 123, 255, 0.3) 50%, transparent 60%)',
                    transform: 'rotate(-20deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      ⏰
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      케이스 5: 크로노스의 시간여행
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      과거와 미래를 오가는 시간여행 살인 미스터리
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 난이도: ⭐⭐⭐⭐⭐</span>
                      <span>⏱️ 예상시간: 40-60분</span>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

// 메인 컴포넌트: LanguageProvider로 감싸기
export const FragmentsIndex: React.FC = () => {
  const languageState = useLanguageState(); // 언어 상태 관리

  return (
    <LanguageContext.Provider value={languageState}>
      <FragmentsContent />
    </LanguageContext.Provider>
  );
};

export default FragmentsIndex;