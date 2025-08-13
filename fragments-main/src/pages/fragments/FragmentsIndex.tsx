import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { useSoundSettings, useSoundManager } from './hooks/useSoundManager';

// 내부 컴포넌트: LanguageProvider 안에서 useFragmentsTranslation 사용
const FragmentsContent: React.FC = () => {
  const location = useLocation();
  const isInCasePage = location.pathname.match(/\/case[123456]/); // 케이스 1, 2, 3, 4, 5, 6 체크
  const { t, originalLang } = useFragmentsTranslation(); // Fragments 다국어
  const { settings, toggleSoundEffects, setEffectsVolume } = useSoundSettings(); // 설정만 관리
  const { playScenarioSound, playScenarioSoundForced } = useSoundManager(); // 시나리오 선택 효과음용
  const [isVolumePopupOpen, setIsVolumePopupOpen] = useState(false);

  // 시나리오 선택 시 효과음 재생 (설정 확인 후)
  const handleScenarioClick = async () => {
    if (settings.soundEffectsEnabled) {
      try {
        await playScenarioSound();
      } catch (error) {
        console.error('❌ 시나리오 효과음 재생 실패:', error);
      }
    }

    window.scrollTo(0, 0);
  };

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
              },
              {
                "@type": "Game",
                "name": "케이스 6: 어둠의 수도원",
                "description": "신성한 벽 뒤에 숨겨진 수도원의 어둠의 비밀을 파헤치는 고딕 미스터리",
                "url": "https://norri.netlify.app/fragments/case6/",
                "genre": "고딕 추리 게임",
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
          // 갤럭시 플립 5 최적화 - 더 큰 safe-area 적용
          paddingTop: 'max(env(safe-area-inset-top, 0px), 20px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 100px)' // 푸터 공간 확보
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
            justifyContent: 'space-between', // 좌우 양쪽 정렬
            padding: '0 1rem'
          }}>
            {/* 좌측: 언어 선택기 */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LanguageSelector />
            </div>

            {/* 우측: 볼륨 버튼 */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={() => setIsVolumePopupOpen(true)}
                style={{
                  background: 'rgba(157, 78, 221, 0.2)',
                  border: '1px solid rgba(157, 78, 221, 0.4)',
                  borderRadius: '12px',
                  padding: '8px 12px',
                  color: 'white',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(157, 78, 221, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(157, 78, 221, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* 효과음 상태에 따른 아이콘 */}
                {settings.soundEffectsEnabled ? '🔊' : '🔇'}
                <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                  {settings.soundEffectsEnabled ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>
          </div>

          {/* 볼륨 설정 팝업 - 효과음만 설정 */}
          {isVolumePopupOpen && (
            <>
              {/* 배경 오버레이 */}
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 9999,
                  backdropFilter: 'blur(2px)',
                }}
                onClick={() => setIsVolumePopupOpen(false)}
              />

              {/* 효과음 설정 팝업 */}
              <div
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  minWidth: '320px',
                  zIndex: 10000,
                  color: 'white',
                }}
              >
                {/* 헤더 */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}>
                  <h3 style={{
                    color: '#9d4edd',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    margin: 0,
                  }}>
                    🔊 {t.soundSettings}
                  </h3>
                  <button
                    onClick={() => setIsVolumePopupOpen(false)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ✕
                  </button>
                </div>

                {/* 효과음 섹션 */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                      🔊
                    </span>
                    <label style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: '48px',
                      height: '24px',
                      cursor: 'pointer',
                    }}>
                      <input
                        type="checkbox"
                        checked={settings.soundEffectsEnabled}
                        onChange={async () => {
                          const wasEnabled = settings.soundEffectsEnabled;
                          toggleSoundEffects();
                          
                          // 효과음을 켤 때만 확인음 재생 (끌 때는 재생 안함)
                          if (!wasEnabled) {
                            // 설정과 관계없이 강제로 효과음 재생
                            setTimeout(async () => {
                              try {
                                await playScenarioSoundForced();
                              } catch (error) {
                                console.error('❌ 효과음 ON 확인음 재생 실패:', error);
                              }
                            }, 100);
                          }
                        }}
                        style={{ display: 'none' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: settings.soundEffectsEnabled ? '#9d4edd' : '#4a4a4a',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '2px',
                          left: settings.soundEffectsEnabled ? '26px' : '2px',
                          width: '20px',
                          height: '20px',
                          background: 'white',
                          borderRadius: '50%',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        }} />
                      </div>
                    </label>
                  </div>

                  {/* 효과음 볼륨 슬라이더 */}
                  <div style={{ opacity: settings.soundEffectsEnabled ? 1 : 0.5 }}>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={settings.effectsVolume}
                      onChange={async (e) => {
                        const newVolume = parseFloat(e.target.value);
                        setEffectsVolume(newVolume);
                        
                        // 볼륨 조절 시 효과음으로 볼륨 확인
                        if (settings.soundEffectsEnabled && newVolume > 0) {
                          try {
                            await playScenarioSound();
                          } catch (error) {
                            console.error('❌ 볼륨 조절 효과음 재생 실패:', error);
                          }
                        }
                      }}
                      disabled={!settings.soundEffectsEnabled}
                      style={{
                        width: '100%',
                        height: '6px',
                        background: `linear-gradient(to right, #9d4edd 0%, #9d4edd ${settings.effectsVolume * 100}%, #4a4a4a ${settings.effectsVolume * 100}%, #4a4a4a 100%)`,
                        borderRadius: '3px',
                        outline: 'none',
                        cursor: settings.soundEffectsEnabled ? 'pointer' : 'not-allowed',
                      }}
                    />
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginTop: '4px',
                    }}>
                      <span>{t.volumeQuiet}</span>
                      <span>{Math.round(settings.effectsVolume * 100)}%</span>
                      <span>{t.volumeLoud}</span>
                    </div>
                  </div>

                  {/* 안내 문구 */}
                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    background: 'rgba(157, 78, 221, 0.1)',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textAlign: 'center'
                  }}>
                    <span dangerouslySetInnerHTML={{ __html: t.soundDescription }} />
                  </div>
                </div>
              </div>
            </>
          )}

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>

            {/* 헤더 - 메인 타이틀 복원 */}
            <div style={{
              textAlign: 'center',
              marginBottom: '3rem',
              marginTop: `calc(max(env(safe-area-inset-top, 0px), 0px) + 80px)` // 상단 헤더(60px) + 여백(20px) + 시스템 UI 영역
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
                    onClick={handleScenarioClick}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      height: '100%'
                    }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '1.2rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '320px',
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
                          fontSize: '1.3rem',
                          margin: '0 0 1rem 0',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '케이스 1: 어둠의 대성당' : 'Case 1: Dark Cathedral'}
                        </h3>

                        <p style={{
                          fontSize: '1rem',
                          margin: '0 0 1.5rem 0',
                          opacity: '0.9',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '고딕 대성당에서 벌어진 다크 판타지 미스터리' : 'Dark fantasy mystery in a Gothic cathedral'}
                        </p>

                        <div style={{
                          textAlign: 'center',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            fontSize: '0.85rem',
                            opacity: '0.8',
                            marginBottom: '1rem'
                          }}>
                            🎯 {t.difficulty}: ⭐⭐⭐
                          </div>

                          {/* 시작하기 버튼 */}
                          <div style={{
                            background: 'linear-gradient(45deg, #9d4edd, #c084fc)',
                            color: 'white',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(157, 78, 221, 0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: 'none'
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(157, 78, 221, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(157, 78, 221, 0.3)';
                            }}
                          >
                            🚀 {t.startGame}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                {/* 케이스 2: 우주선 오디세이 */}
                <SwiperSlide>
                  <Link to="/fragments/case2"
                    onClick={handleScenarioClick}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      height: '100%'
                    }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '1.2rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '320px',
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
                          fontSize: '1.3rem',
                          margin: '0 0 1rem 0',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '케이스 2: 우주선 오디세이' : 'Case 2: Space Odyssey'}
                        </h3>

                        <p style={{
                          fontSize: '1rem',
                          margin: '0 0 1.5rem 0',
                          opacity: '0.9',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '우주선에 갇힌 탐사팀과 AI 가이아의 치명적 비밀' : 'Deadly secrets of the trapped crew and AI Gaia'}
                        </p>

                        <div style={{
                          textAlign: 'center',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            fontSize: '0.85rem',
                            opacity: '0.8',
                            marginBottom: '1rem'
                          }}>
                            🎯 {t.difficulty}: ⭐⭐⭐⭐
                          </div>

                          {/* 시작하기 버튼 */}
                          <div style={{
                            background: 'linear-gradient(45deg, #3d2a47, #5a4a6b)',
                            color: 'white',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(61, 42, 71, 0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: 'none'
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(61, 42, 71, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(61, 42, 71, 0.3)';
                            }}
                          >
                            🚀 {t.startGame}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                {/* 케이스 3: 브래스헬름의 잿불 */}
                <SwiperSlide>
                  <Link to="/fragments/case3"
                    onClick={handleScenarioClick}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      height: '100%'
                    }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '1.2rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '320px',
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
                          fontSize: '1.3rem',
                          margin: '0 0 1rem 0',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '케이스 3: 오리엔트 특급 열차' : 'Case 3: Orient Express'}
                        </h3>

                        <p style={{
                          fontSize: '1rem',
                          margin: '0 0 1.5rem 0',
                          opacity: '0.9',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '눈보라 속 고립된 열차에서 벌어진 완벽한 밀실 살인' : 'Perfect locked-room murder on an isolated train in a blizzard'}
                        </p>

                        <div style={{
                          textAlign: 'center',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            fontSize: '0.85rem',
                            opacity: '0.8',
                            marginBottom: '1rem'
                          }}>
                            🎯 {t.difficulty}: ⭐⭐⭐⭐
                          </div>

                          {/* 시작하기 버튼 */}
                          <div style={{
                            background: 'linear-gradient(45deg, #8b4513, #d2691e)',
                            color: 'white',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: 'none'
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 69, 19, 0.3)';
                            }}
                          >
                            🚀 {t.startGame}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                {/* 케이스 4: 브래스헬름의 잿불 Ch.2 */}
                <SwiperSlide>
                  <Link to="/fragments/case4"
                    onClick={handleScenarioClick}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      height: '100%'
                    }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '1.2rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '320px',
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
                          fontSize: '1.3rem',
                          margin: '0 0 1rem 0',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '케이스 4: 아르카눔 그림자' : 'Case 4: Arcanum Shadow'}
                        </h3>

                        <p style={{
                          fontSize: '1rem',
                          margin: '0 0 1.5rem 0',
                          opacity: '0.9',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '마법과 기술이 공존하는 도시의 마법공학자 살인사건' : 'Murder of a magical engineer in a city where magic and technology coexist'}
                        </p>

                        <div style={{
                          textAlign: 'center',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            fontSize: '0.85rem',
                            opacity: '0.8',
                            marginBottom: '1rem'
                          }}>
                            🎯 {t.difficulty}: ⭐⭐⭐⭐⭐
                          </div>

                          {/* 시작하기 버튼 */}
                          <div style={{
                            background: 'linear-gradient(45deg, #8a2be2, #9370db)',
                            color: 'white',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(138, 43, 226, 0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: 'none'
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(138, 43, 226, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(138, 43, 226, 0.3)';
                            }}
                          >
                            🚀 {t.startGame}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                {/* 케이스 5: 크로노스의 시간여행 미스터리 */}
                <SwiperSlide>
                  <Link to="/fragments/case5"
                    onClick={handleScenarioClick}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      height: '100%'
                    }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '1.2rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '320px',
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
                          fontSize: '1.3rem',
                          margin: '0 0 1rem 0',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '케이스 5: 크로노스의 시간여행' : 'Case 5: Chronos Time Travel'}
                        </h3>

                        <p style={{
                          fontSize: '1rem',
                          margin: '0 0 1.5rem 0',
                          opacity: '0.9',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '과거와 미래를 오가는 시간여행 살인 미스터리' : 'Time travel murder mystery spanning past and future'}
                        </p>

                        <div style={{
                          textAlign: 'center',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            fontSize: '0.85rem',
                            opacity: '0.8',
                            marginBottom: '1rem'
                          }}>
                            🎯 {t.difficulty}: ⭐⭐⭐⭐⭐
                          </div>

                          {/* 시작하기 버튼 */}
                          <div style={{
                            background: 'linear-gradient(45deg, #007bff, #0056b3)',
                            color: 'white',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: 'none'
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)';
                            }}
                          >
                            🚀 {t.startGame}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                {/* 케이스 6: 어둠의 수도원 */}
                <SwiperSlide>
                  <Link to="/fragments/case6"
                    onClick={handleScenarioClick}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      height: '100%'
                    }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '1.2rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '320px',
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

                      {/* 고딕 수도원 배경 패턴 */}
                      <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'linear-gradient(45deg, transparent 40%, rgba(139, 69, 19, 0.3) 50%, transparent 60%)',
                        transform: 'rotate(-15deg)',
                        pointerEvents: 'none'
                      }} />

                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                          fontSize: '3rem',
                          marginBottom: '1rem',
                          textAlign: 'center'
                        }}>
                          🏰
                        </div>

                        <h3 style={{
                          fontSize: '1.3rem',
                          margin: '0 0 1rem 0',
                          fontWeight: 'bold',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '케이스 6: 어둠의 수도원' : 'Case 6: The Dark Abbey'}
                        </h3>

                        <p style={{
                          fontSize: '1rem',
                          margin: '0 0 1.5rem 0',
                          opacity: '0.9',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          {originalLang === 'kr' ? '신성한 벽 뒤에 숨겨진 수도원의 어둠의 비밀' : 'Dark secrets hidden behind sacred walls'}
                        </p>

                        <div style={{
                          textAlign: 'center',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            fontSize: '0.85rem',
                            opacity: '0.8',
                            marginBottom: '1rem'
                          }}>
                            🎯 {t.difficulty}: ⭐⭐⭐⭐
                          </div>

                          {/* 시작하기 버튼 */}
                          <div style={{
                            background: 'linear-gradient(45deg, #8b4513, #a0522d)',
                            color: 'white',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: 'none'
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 69, 19, 0.3)';
                            }}
                          >
                            🚀 {t.startGame}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* 하단 푸터 */}
            <div style={{
              position: 'fixed',
              bottom: `max(env(safe-area-inset-bottom, 0px), 0px)`,
              left: '0',
              right: '0',
              background: 'rgba(26, 26, 46, 0.95)',
              backdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              paddingTop: '12px',
              paddingBottom: '12px',
              paddingLeft: '20px',
              paddingRight: '20px',
              zIndex: 100
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {/* 좌측: 개인정보 처리방침 링크 */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center'
                }}>
                  {/* 개인정보 처리방침 링크 숨김 */}
                </div>

                {/* 중앙: 게임 정보 */}
                <div style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.75rem',
                  textAlign: 'center'
                }}>
                  🧩 단서의 파편 v1.0
                </div>

                {/* 우측: 개발자 정보 */}
                <div style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '0.7rem',
                  textAlign: 'right'
                }}>
                  © 2025 Fragment Mystery
                </div>
              </div>
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