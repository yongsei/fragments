import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import AdModal from '../../../components/AdModal';
import { useFragmentsTranslation } from '../hooks/useFragmentsTranslation';
import { getCompletedChapters, hasGameProgress, loadGameProgress, clearGameProgress } from '../utils/gameProgress';
import { useSoundManager } from '../hooks/useSoundManager';

export interface CaseChapter {
  number: number;
  icon: string;
  title: {
    kr: string;
    en: string;
  };
  description: {
    kr: string;
    en: string;
  };
  link: string;
}

export interface CaseIntroData {
  caseId: string;
  caseNumber: number;
  title: {
    kr: string;
    en: string;
  };
  subtitle: {
    kr: string;
    en: string;
  };
  description: {
    kr: string;
    en: string;
  };
  storyContent: {
    kr: string;
    en: string;
  };
  theme: {
    background: string;
    primary: string;
    accent: string;
    cardBackground: string;
  };
  seo: {
    keywords: {
      kr: string;
      en: string;
    };
  };
  chapters: CaseChapter[];
}

interface UnifiedCaseIntroProps {
  data: CaseIntroData;
}

const UnifiedCaseIntro: React.FC<UnifiedCaseIntroProps> = ({ data }) => {
  const { originalLang } = useFragmentsTranslation();
  // Sound manager available but not used in current implementation
  useSoundManager();
  const navigate = useNavigate();
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [showAdModal, setShowAdModal] = useState(false);
  const [showSaveLoadModal, setShowSaveLoadModal] = useState(false);
  const [selectedChapterLink, setSelectedChapterLink] = useState<string>('');
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(0);
  const [savedGameInfo, setSavedGameInfo] = useState<{
    elapsedTime: number;
    discoveredCardsCount: number;
  } | null>(null);

  useEffect(() => {
    const loadCompletedChapters = async () => {
      const completed = await getCompletedChapters(data.caseId);
      setCompletedChapters(completed);
    };
    
    loadCompletedChapters();
  }, [data.caseId]);

  const isChapterUnlocked = (chapterNumber: number): boolean => {
    if (chapterNumber === 1) return true;
    return completedChapters.includes(chapterNumber - 1);
  };


  const currentLang = originalLang === 'kr' ? 'kr' : 'en';

  // 세이브/로드 모달 핸들러
  const handleResumeGame = () => {
    console.log('🎮 "예" 선택: 저장된 데이터로 이어서 플레이');
    console.log('📊 저장된 데이터 유지됨');
    setShowSaveLoadModal(false);
    setShowAdModal(true);
  };

  const handleStartNewGame = async () => {
    console.log('🗑️ "아니오" 선택: 새 게임 시작');
    const chapterCaseId = `${data.caseId}-ch${selectedChapterNumber}`;
    console.log('📊 저장된 데이터 삭제 중...', chapterCaseId);

    try {
      // 저장된 데이터 삭제 후 새 게임 시작
      await clearGameProgress(chapterCaseId);
      console.log('✅ 저장된 데이터 삭제 완료');
    } catch (error) {
      console.error('❌ 저장된 데이터 삭제 실패:', error);
    }

    setShowSaveLoadModal(false);
    setShowAdModal(true);
  };

  // 광고 모달 핸들러
  const handleAdCompleted = () => {
    console.log('📺 광고 시청 완료');
    // 광고 시청 후 게임으로 이동
    navigate(`/fragments/${data.caseId}/${selectedChapterLink}`);
  };

  const handleAdSkip = () => {
    console.log('🚑 광고 스킵');
    // 광고 스킵해도 게임으로 이동
    navigate(`/fragments/${data.caseId}/${selectedChapterLink}`);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}분 ${remainingSeconds}초`;
  };

  return (
    <>
      <SEOHead
        title={originalLang === 'kr' 
          ? `${data.title.kr} - 단서의 파편 케이스${data.caseNumber}`
          : `${data.title.en} - Fragment of Mystery Case${data.caseNumber}`
        }
        description={data.description[currentLang]}
        keywords={data.seo.keywords[currentLang]}
        canonical={`/fragments/case${data.caseNumber}`}
      />
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 100%)',
        color: 'white',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        paddingTop: 'max(env(safe-area-inset-top, 0px), 40px)', // 상단 헤더 공간 축소
        marginBottom: 'calc(-1 * max(env(safe-area-inset-bottom), 80px))', // body 하단 패딩 상쇄
        fontFamily: "'Noto Sans KR', sans-serif",
        position: 'relative'
      }}>
        {/* 상단 시스템 UI 영역 배경 통일 */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'max(env(safe-area-inset-top, 0px), 0px)',
          background: 'rgb(26, 26, 46)', // 불투명 배경
          zIndex: 999
        }} />

        {/* 하단 시스템 UI 영역 배경 통일 */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 'env(safe-area-inset-bottom, 0px)', // 시스템 UI 영역만
          background: 'rgb(26, 26, 46)', // 불투명 배경
          zIndex: 99
        }} />
        
        {/* 상단 고정 헤더 - 게임 화면과 동일한 스타일 */}
        <div style={{
          position: 'fixed',
          top: 'max(env(safe-area-inset-top, 0px), 0px)',
          left: 0,
          right: 0,
          height: '60px',
          background: data.theme.primary,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1rem'
        }}>
          {/* 뒤로가기 버튼 - 게임과 동일한 위치 */}
          <Link
            to="/fragments"
            onClick={() => window.scrollTo(0, 0)}
            style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
            }}
          >
            ←
          </Link>
          
          {/* 케이스 타이틀 - 절대 중앙 정렬 */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1rem',
            fontWeight: 600,
            textAlign: 'center'
          }}>
            {data.title[currentLang]}
          </div>
        </div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: `calc(max(env(safe-area-inset-top, 0px), 0px) + 80px)` // 상단 헤더(60px) + 여백(20px) + 시스템 UI 영역
        }}>
          {/* 헤더 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              background: data.theme.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {data.title[currentLang]}
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {data.subtitle[currentLang]}
            </p>
          </div>


          {/* 챕터 선택 - 그리드 레이아웃 */}
          <div style={{
            width: '100%',
            paddingBottom: 'calc(max(env(safe-area-inset-bottom), 80px) + 80px)' // body 패딩 + 추가 여유공간
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              padding: '0 0.5rem',
              width: '100%',
              margin: '0 auto'
            }}>
            {data.chapters.map((chapter) => {
              const isUnlocked = isChapterUnlocked(chapter.number);
              const isCompleted = completedChapters.includes(chapter.number);

              return (
                <div key={chapter.number}>
                  <div 
                    onClick={async (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('🔗 Chapter onClick 이벤트 발생');
                      console.log('- chapter.number:', chapter.number);
                      console.log('- isUnlocked:', isUnlocked);
                      if (!isUnlocked) {
                        return;
                      }
                      
                      // 선택된 챕터 정보 저장
                      setSelectedChapterLink(chapter.link);
                      setSelectedChapterNumber(chapter.number);
                      
                      // 저장된 게임 데이터 확인
                      const chapterCaseId = `${data.caseId}-ch${chapter.number}`;
                      console.log('🎮 챕터 선택, 저장된 데이터 확인 중...', chapterCaseId);
                      
                      try {
                        const hasProgress = await hasGameProgress(chapterCaseId);
                        console.log('📊 저장된 데이터 존재 여부:', hasProgress);
                        
                        if (hasProgress) {
                          const progress = await loadGameProgress(chapterCaseId);
                          console.log('📋 로드된 진행상황:', progress);
                          
                          if (progress && !progress.isCompleted) {
                            setSavedGameInfo({
                              elapsedTime: progress.elapsedTime || 0,
                              discoveredCardsCount: progress.discoveredCardIds?.length || progress.totalDiscoveredCards || 0
                            });
                            console.log('✅ 저장된 데이터 발견! 세이브/로드 팝업 표시');
                            setShowSaveLoadModal(true);
                            return;
                          }
                        }
                        
                        // 저장된 데이터가 없으면 바로 광고 모달 표시
                        console.log('❌ 저장된 데이터 없음, 바로 광고 모달 표시');
                        setShowAdModal(true);
                      } catch (error) {
                        console.error('❌ 저장된 게임 데이터 확인 실패:', error);
                        // 에러 발생 시 바로 광고 모달 표시
                        setShowAdModal(true);
                      }
                    }} 
                    onTouchStart={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    style={{ 
                      cursor: isUnlocked ? 'pointer' : 'not-allowed',
                      display: 'block',
                      height: '100%',
                      touchAction: 'manipulation'
                    }}
                  >
                    <div style={{
                      background: data.theme.cardBackground,
                      borderRadius: '12px',
                      padding: '0.75rem 0.6rem',
                      border: isCompleted 
                        ? '2px solid #4CAF50' 
                        : isUnlocked 
                          ? `2px solid ${data.theme.accent}` 
                          : '2px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: isUnlocked ? 'pointer' : 'not-allowed',
                      height: 'auto',
                      position: 'relative',
                      opacity: isUnlocked ? 1 : 0.6,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  onMouseEnter={(e) => {
                    if (isUnlocked) {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isUnlocked) {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}>
                    
                    {/* 왼쪽 영역: 챕터 정보 */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flex: 1
                    }}>
                      <div style={{
                        textAlign: 'left',
                        width: '100%'
                      }}>
                        <span style={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: isUnlocked ? 'white' : 'rgba(255, 255, 255, 0.5)'
                        }}>
                          {chapter.title[currentLang]}
                        </span>
                      </div>
                    </div>

                    {/* 오른쪽 영역: 상태 표시 */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginLeft: '1rem'
                    }}>
                      {isCompleted && (
                        <span style={{
                          background: 'linear-gradient(45deg, #4CAF50, #45a049)',
                          color: 'white',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>
                          ✓
                        </span>
                      )}
                      <span style={{
                        fontSize: '0.85rem',
                        color: isUnlocked ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 700,
                        minWidth: '60px',
                        textAlign: 'center',
                        background: isUnlocked ? data.theme.primary : 'rgba(255, 255, 255, 0.05)',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '10px',
                        border: isUnlocked ? `2px solid ${data.theme.accent}` : '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: isUnlocked ? '0 2px 8px rgba(0, 0, 0, 0.3)' : 'none',
                        display: 'inline-block',
                        transition: 'all 0.3s ease'
                      }}>
                        {isUnlocked ? '시작' : '잠김'}
                      </span>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

        </div>


        {/* 하단 푸터 - 게임화면과 동일한 스타일 */}
        <div style={{
          position: 'fixed',
          bottom: `max(env(safe-area-inset-bottom, 0px), 0px)`,
          left: '0',
          right: '0',
          background: 'linear-gradient(135deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '20px',
          paddingRight: '20px',
          zIndex: 100
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.85rem',
              textAlign: 'center'
            }}>
              {originalLang === 'kr' ? '챕터를 선택하여 수사를 시작하세요' : 'Select a chapter to start investigation'}
            </div>
          </div>
        </div>
      </div>
      
      {/* 세이브/로드 팝업 */}
      {showSaveLoadModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '20px',
            padding: '30px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '20px'
            }}>
              💾
            </div>
            
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '15px',
              color: 'white'
            }}>
              {originalLang === 'kr' ? '저장된 게임 발견!' : 'Saved Game Found!'}
            </h2>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '20px',
              textAlign: 'left'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                marginBottom: '8px'
              }}>
                {originalLang === 'kr' ? '📊 플레이 시간:' : '📊 Play Time:'} <strong style={{color: '#bb86fc'}}>{formatTime(savedGameInfo?.elapsedTime || 0)}</strong>
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                marginBottom: '0'
              }}>
                {originalLang === 'kr' ? '🎯 발견한 단서:' : '🎯 Clues Found:'} <strong style={{color: '#bb86fc'}}>{savedGameInfo?.discoveredCardsCount || 0}개</strong>
              </p>
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
              lineHeight: 1.4,
              marginBottom: '25px'
            }}>
              {originalLang === 'kr' 
                ? '이어서 플레이하시겠습니까?' 
                : 'Would you like to continue?'
              }
            </p>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button
                onClick={handleResumeGame}
                style={{
                  background: 'linear-gradient(45deg, #bb86fc, #6366f1)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(187, 134, 252, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(187, 134, 252, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(187, 134, 252, 0.3)';
                }}
              >
                {originalLang === 'kr' ? '예' : 'Yes'}
              </button>
              
              <button
                onClick={handleStartNewGame}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '12px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                {originalLang === 'kr' ? '아니오' : 'No'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 광고 모달 */}
      <AdModal 
        isOpen={showAdModal}
        onClose={() => setShowAdModal(false)}
        onAdCompleted={handleAdCompleted}
        onSkip={handleAdSkip}
        isHintReward={false}
      />
    </>
  );
};

export default UnifiedCaseIntro;