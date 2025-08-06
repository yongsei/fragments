import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import { useFragmentsTranslation } from '../hooks/useFragmentsTranslation';
import { getCompletedChapters } from '../utils/gameProgress';

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
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);

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
        background: data.theme.background,
        color: 'white',
        padding: '2rem',
        fontFamily: "'Noto Sans KR', sans-serif"
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* 헤더 */}
          <div style={{ marginBottom: '3rem' }}>
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

          {/* 스토리 개요 */}
          <div style={{
            background: data.theme.cardBackground,
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '3rem',
            border: `1px solid ${data.theme.accent}`
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: data.theme.accent.replace('rgba(', '').replace(', 0.3)', '').replace(')', '')
            }}>
              📖 {originalLang === 'kr' ? '전체 스토리' : 'Full Story'}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              opacity: 0.9
            }}>
              {data.storyContent[currentLang]}
            </p>
          </div>

          {/* 챕터 선택 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {data.chapters.map((chapter) => {
              const isUnlocked = isChapterUnlocked(chapter.number);
              const isCompleted = completedChapters.includes(chapter.number);

              return (
                <Link 
                  key={chapter.number}
                  to={isUnlocked ? chapter.link : '#'} 
                  onClick={() => isUnlocked && window.scrollTo(0, 0)} 
                  style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    cursor: isUnlocked ? 'pointer' : 'not-allowed'
                  }}
                >
                  <div style={{
                    background: isUnlocked ? 'rgba(255, 255, 255, 0.1)' : 'rgba(100, 100, 100, 0.3)',
                    borderRadius: '20px',
                    padding: '2rem',
                    backdropFilter: 'blur(10px)',
                    border: isCompleted 
                      ? '2px solid #4CAF50' 
                      : isUnlocked 
                        ? '1px solid rgba(255, 255, 255, 0.2)' 
                        : '1px solid rgba(100, 100, 100, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: isUnlocked ? 'pointer' : 'not-allowed',
                    height: '100%',
                    position: 'relative',
                    opacity: isUnlocked ? 1 : 0.6
                  }}
                  onMouseEnter={(e) => {
                    if (isUnlocked) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isUnlocked) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}>
                    
                    {/* 완료 배지 */}
                    {isCompleted && (
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'linear-gradient(45deg, #4CAF50, #45a049)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
                      }}>
                        ✓
                      </div>
                    )}

                    {/* 잠금 아이콘 */}
                    {!isUnlocked && (
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                      }}>
                        🔒
                      </div>
                    )}

                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      {chapter.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      marginBottom: '1rem',
                      color: isUnlocked ? data.theme.accent.replace('rgba(', '').replace(', 0.3)', '').replace(')', '') : 'rgba(255, 255, 255, 0.5)'
                    }}>
                      {chapter.title[currentLang]}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.5,
                      opacity: isUnlocked ? 0.8 : 0.5,
                      marginBottom: '1.5rem'
                    }}>
                      {chapter.description[currentLang]}
                    </p>
                    
                    <div style={{
                      marginTop: '1.5rem',
                      padding: '0.75rem 1.5rem',
                      background: isUnlocked 
                        ? data.theme.primary 
                        : 'rgba(100, 100, 100, 0.3)',
                      borderRadius: '25px',
                      color: isUnlocked ? 'white' : 'rgba(255, 255, 255, 0.5)',
                      fontWeight: 600,
                      display: 'inline-block'
                    }}>
                      {isUnlocked 
                        ? `🚀 ${t.startChapter}` 
                        : `🔒 ${originalLang === 'kr' ? '이전 챕터 완료 필요' : 'Complete previous chapter'}`
                      }
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* 돌아가기 버튼 */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/fragments"
              onClick={() => window.scrollTo(0, 0)}
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
              }}
            >
              {t.backToHome}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnifiedCaseIntro;