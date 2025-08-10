import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import AdModal from '../../../components/AdModal';
import { useFragmentsTranslation } from '../hooks/useFragmentsTranslation';
import { getCompletedChapters } from '../utils/gameProgress';
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
  const { t, originalLang } = useFragmentsTranslation();
  const { playChapterSound } = useSoundManager();
  const navigate = useNavigate();
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [showAdModal, setShowAdModal] = useState(false);
  const [selectedChapterLink, setSelectedChapterLink] = useState<string>('');

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

  // 챕터 선택 시 효과음 재생
  const handleChapterClick = (isUnlocked: boolean, chapterNumber: number) => {
    console.log('🎵 handleChapterClick 호출됨');
    console.log('- isUnlocked:', isUnlocked);
    console.log('- chapterNumber:', chapterNumber);
    
    if (isUnlocked) {
      console.log('🎵 UnifiedCaseIntro에서 챕터 클릭 - playChapterSound() 호출');
      console.log('🎵 playChapterSound 함수 타입:', typeof playChapterSound);
      
      try {
        playChapterSound();
        console.log('🎵 playChapterSound() 호출 성공');
      } catch (error) {
        console.error('🎵 playChapterSound() 호출 실패:', error);
      }
      
      window.scrollTo(0, 0);
    } else {
      console.log('🚫 챕터가 잠겨있어 사운드 재생 안함');
    }
  };

  const currentLang = originalLang === 'kr' ? 'kr' : 'en';

  // 광고 커온대 핸들러
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
          textAlign: 'center'
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
            paddingBottom: '1rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
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
                    onClick={(e) => {
                      console.log('🔗 Chapter onClick 이벤트 발생');
                      console.log('- chapter.number:', chapter.number);
                      console.log('- isUnlocked:', isUnlocked);
                      if (!isUnlocked) {
                        e.preventDefault();
                        return;
                      }
                      
                      // 광고 모달 열기
                      setSelectedChapterLink(chapter.link);
                      setShowAdModal(true);
                    }} 
                    style={{ 
                      cursor: isUnlocked ? 'pointer' : 'not-allowed',
                      display: 'block',
                      height: '100%'
                    }}
                  >
                    <div style={{
                      background: data.theme.cardBackground,
                      borderRadius: '12px',
                      padding: '1rem 0.75rem',
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
                          fontSize: '1.1rem',
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
                        fontSize: '0.95rem',
                        color: isUnlocked ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 700,
                        minWidth: '80px',
                        textAlign: 'center',
                        background: isUnlocked ? data.theme.primary : 'rgba(255, 255, 255, 0.05)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '12px',
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
          background: '#1a1a2eff',
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