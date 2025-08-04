import React from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Case1Routes from './games/case1/Routes';
import ChronosParadoxRoutes from './games/case2/Routes';
import Case3Routes from './games/case3/Routes';
import Case4Routes from './games/case4/Routes';
import Case5Routes from './games/case5/Routes';
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
        <Routes>
          <Route path="case1/*" element={<Case1Routes />} />
          <Route path="case2/*" element={<ChronosParadoxRoutes />} />
          <Route path="case3/*" element={<Case3Routes />} />
          <Route path="case4/*" element={<Case4Routes />} />
          <Route path="case5/*" element={<Case5Routes />} />
        </Routes>
      ) : (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
          color: 'white',
          // 시스템 UI 회피 - 최소한으로 조정
          paddingTop: 'max(env(safe-area-inset-top, 0px), 10px)',
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 30px)'
        }}>
          {/* 언어 선택기 - 모바일/PC 반응형 배치 */}
          <div style={{
            position: 'absolute',
            top: 'max(env(safe-area-inset-top, 0px), 0px)', // 언어 선택기를 최상단으로 위치
            right: 'clamp(0.5rem, calc(50vw - 600px + 1rem), 1rem)', // 모바일: 화면기준, PC: 1200px컨테이너 기준
            zIndex: 10
          }}>
            <LanguageSelector />
          </div>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>

            {/* 헤더 */}
            <div style={{
              textAlign: 'center',
              marginBottom: '3rem',
              marginTop: 'clamp(2rem, 4vw, 1.5rem)' // 단서의 파편 제목을 아래로 내림
            }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                margin: '0 0 1rem 0',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                🧩 {t.mainTitle}
              </h1>
              <div style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                margin: '0 0 1rem 0',
                opacity: 0.8,
                fontWeight: 400,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                {originalLang === 'kr' ? '[단서의 파편]' : '[Fragment of Mystery]'}
              </div>
              
              <p style={{
                fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                margin: '0 auto',
                opacity: '0.9',
                maxWidth: '600px'
              }}>
                {t.mainSubtitle}
              </p>
            </div>

            {/* 케이스 그리드 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
              gap: 'clamp(1rem, 4vw, 2rem)',
              maxWidth: '900px',
              margin: '0 auto',
              padding: '0 clamp(0.5rem, 2vw, 1rem)' // 좌우 여백 추가
            }}>
              
              {/* 케이스 1: 저택의 미스터리 */}
              <Link to="/fragments/case1" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(139, 69, 19, 0.1) 50%, transparent 60%)',
                    transform: 'rotate(-15deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      🏚️
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      {t.caseTitle} 1: {t.case1.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      {t.case1.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 {t.difficulty}: ⭐⭐⭐</span>
                      <span>⏱️ {t.estimatedTime}: 10-15{t.minutes}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 케이스 2: 크로노스 패러독스 */}
              <Link to="/fragments/case2" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* SF 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(102, 126, 234, 0.2) 50%, transparent 60%)',
                    transform: 'rotate(15deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      ⚛️
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      {t.caseTitle} 2: {t.case2.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      {t.case2.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 {t.difficulty}: ⭐⭐⭐⭐⭐</span>
                      <span>⏱️ {t.estimatedTime}: 20-30{t.minutes}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 케이스 3: 브래스헬름의 잿불 챕터1 */}
              <Link to="/fragments/case3" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* 스팀펑크 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(56, 239, 125, 0.2) 50%, transparent 60%)',
                    transform: 'rotate(-10deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      🔥
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      {t.caseTitle} 3: {originalLang === 'kr' ? '브래스헬름의 잿불 Ch.1' : 'Ashes of Brasshelm Ch.1'}
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      {originalLang === 'kr' ? '스팀펑크 도시에서 벌어진 의문의 살인사건' : 'Mysterious murder case in a steampunk city'}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 {t.difficulty}: ⭐⭐⭐⭐</span>
                      <span>⏱️ {t.estimatedTime}: 15-25{t.minutes}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 케이스 4: 브래스헬름의 잿불 챕터2 */}
              <Link to="/fragments/case4" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* 동맹 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(240, 147, 251, 0.2) 50%, transparent 60%)',
                    transform: 'rotate(10deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      🤝
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      {t.caseTitle} 4: {originalLang === 'kr' ? '브래스헬름의 잿불 Ch.2' : 'Ashes of Brasshelm Ch.2'}
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      {originalLang === 'kr' ? '예상 밖의 동맹과 5인의 팀 결성' : 'Unexpected alliance and formation of a five-member team'}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 {t.difficulty}: ⭐⭐⭐⭐</span>
                      <span>⏱️ {t.estimatedTime}: 20-30{t.minutes}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 케이스 5: 브래스헬름의 잿불 챕터3 */}
              <Link to="/fragments/case5" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  {/* 최종 결전 배경 패턴 */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(254, 202, 87, 0.2) 50%, transparent 60%)',
                    transform: 'rotate(-20deg)',
                    pointerEvents: 'none'
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      ⚔️
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.5rem',
                      margin: '0 0 1rem 0',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}>
                      {t.caseTitle} 5: {originalLang === 'kr' ? '브래스헬름의 잿불 Ch.3' : 'Ashes of Brasshelm Ch.3'}
                    </h3>
                    
                    <p style={{
                      fontSize: '1rem',
                      margin: '0 0 1.5rem 0',
                      opacity: '0.9',
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      {originalLang === 'kr' ? '최종 결전과 비극적인 희생' : 'Final battle and tragic sacrifice'}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      opacity: '0.8'
                    }}>
                      <span>🎯 {t.difficulty}: ⭐⭐⭐⭐⭐</span>
                      <span>⏱️ {t.estimatedTime}: 25-35{t.minutes}</span>
                    </div>
                  </div>
                </div>
              </Link>
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