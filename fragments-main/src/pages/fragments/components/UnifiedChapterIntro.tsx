import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFragmentsTranslation } from '../hooks/useFragmentsTranslation';
import { hasGameProgress, loadGameProgress, clearGameProgress } from '../utils/gameProgress';
import AdModal from '../../../components/AdModal';

export interface ChapterIntroData {
  caseId: string;
  chapterNumber: number;
  icon: string;
  title: {
    kr: string;
    en: string;
  };
  subtitle: {
    kr: string;
    en: string;
  };
  story: {
    kr: string;
    en: string;
  };
  keyCharacters: Array<{
    kr: string;
    en: string;
  }>;
  keyEvidence: Array<{
    kr: string;
    en: string;
  }>;
  goal: {
    kr: string;
    en: string;
  };
  gameLink: string;
  theme: {
    primaryGradient: string;
    secondaryGradient: string;
    textPrimary: string;
    textSecondary: string;
    accentPrimary: string;
    accentSecondary: string;
    navigationBg: string;
    cardBackground: string;
    cardBorder: string;
    cardShadow: string;
    cardShadowHover: string;
    buttonPrimary: string;
    suspectCard: string;
    evidenceCard: string;
    textShadow: string;
  };
}

interface UnifiedChapterIntroProps {
  data: ChapterIntroData;
}

const UnifiedChapterIntro: React.FC<UnifiedChapterIntroProps> = ({ data }) => {
  const { originalLang } = useFragmentsTranslation();
  const currentLang = originalLang === 'kr' ? 'kr' : 'en';
  const navigate = useNavigate();
  
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [savedGameInfo, setSavedGameInfo] = useState<{
    elapsedTime: number;
    discoveredCardsCount: number;
  } | null>(null);

  // 챕터별 caseId 생성 (case1-ch1 형식)
  const chapterCaseId = `${data.caseId}-ch${data.chapterNumber}`;

  const handleGameStart = async () => {
    // 저장된 게임 데이터 확인
    try {
      if (await hasGameProgress(chapterCaseId)) {
        const progress = await loadGameProgress(chapterCaseId);
        if (progress && !progress.isCompleted) {
          setSavedGameInfo({
            elapsedTime: progress.elapsedTime,
            discoveredCardsCount: progress.totalDiscoveredCards || progress.discoveredCardIds.length
          });
          setShowResumePopup(true);
          return;
        }
      }
      
      // 저장된 데이터가 없으면 광고 모달 표시
      setShowAdModal(true);
    } catch (error) {
      console.error('저장된 게임 데이터 확인 실패:', error);
      // 에러 발생 시 광고 모달 표시
      setShowAdModal(true);
    }
  };

  const handleResumeGame = () => {
    setShowResumePopup(false);
    setShowAdModal(true);
  };

  const handleStartNewGame = async () => {
    // 저장된 데이터 삭제 후 새 게임 시작
    await clearGameProgress(chapterCaseId);
    setShowResumePopup(false);
    setShowAdModal(true);
  };

  const handleAdCompleted = () => {
    console.log('광고 시청 완료! 게임 시작');
    setShowAdModal(false);
    window.scrollTo(0, 0);
    navigate(data.gameLink);
  };

  const handleSkipAd = () => {
    console.log('광고 건너뛰기');
    setShowAdModal(false);
    window.scrollTo(0, 0);
    navigate(data.gameLink);
  };

  const handleCloseAdModal = () => {
    setShowAdModal(false);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}분 ${remainingSeconds}초`;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: data.theme.primaryGradient,
      color: data.theme.textPrimary,
      fontFamily: "'Noto Sans KR', sans-serif",
      paddingTop: '15px' // 시스템 UI 영역 + 헤더 공간 축소
    }}>
      {/* 상단 고정 헤더 - case1과 동일한 스타일로 통일 */}
      <div style={{
        position: 'fixed',
        top: 'max(env(safe-area-inset-top, 0px), 0px)',
        left: 0,
        right: 0,
        height: '60px',
        background: '#2d1b69',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem'
      }}>
        {/* 뒤로가기 버튼 - 게임과 동일한 위치 */}
        <Link 
          to={`/fragments/${data.caseId}`}
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
          }}>
          ←
        </Link>
        
        {/* 챕터 타이틀 - 절대 중앙 정렬 */}
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

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Chapter Introduction */}
        <div style={{
          background: data.theme.cardBackground,
          border: `1px solid ${data.theme.cardBorder}`,
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '40px',
          backdropFilter: 'blur(5px)',
          boxShadow: data.theme.cardShadow
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>{data.icon}</div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: '32px',
              color: data.theme.accentPrimary,
              fontWeight: 'bold'
            }}>
              {data.subtitle[currentLang]}
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: data.theme.textSecondary,
              margin: 0
            }}>
              {data.subtitle[currentLang]}
            </p>
          </div>

          <div style={{
            background: `${data.theme.accentPrimary}20`,
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '32px',
            border: `1px solid ${data.theme.accentPrimary}40`
          }}>
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '20px',
              color: data.theme.accentPrimary,
              fontWeight: 'bold'
            }}>
              📖 {originalLang === 'kr' ? '챕터 스토리' : 'Chapter Story'}
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: data.theme.textPrimary,
              margin: 0
            }}>
              {data.story[currentLang]}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 600 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: data.theme.suspectCard,
              borderRadius: '8px',
              padding: '20px',
              border: `1px solid ${data.theme.accentSecondary}30`
            }}>
              <h4 style={{
                margin: '0 0 12px 0',
                fontSize: '16px',
                color: data.theme.accentPrimary,
                fontWeight: 'bold'
              }}>
                🕵️ {originalLang === 'kr' ? '주요 인물' : 'Key Characters'}
              </h4>
              <ul style={{
                margin: 0,
                paddingLeft: '20px',
                color: data.theme.textSecondary
              }}>
                {data.keyCharacters.map((character, index) => (
                  <li key={index}>{character[currentLang]}</li>
                ))}
              </ul>
            </div>

            <div style={{
              background: data.theme.evidenceCard,
              borderRadius: '8px',
              padding: '20px',
              border: `1px solid ${data.theme.accentPrimary}30`
            }}>
              <h4 style={{
                margin: '0 0 12px 0',
                fontSize: '16px',
                color: data.theme.accentPrimary,
                fontWeight: 'bold'
              }}>
                🔍 {originalLang === 'kr' ? '핵심 단서' : 'Key Evidence'}
              </h4>
              <ul style={{
                margin: 0,
                paddingLeft: '20px',
                color: data.theme.textSecondary
              }}>
                {data.keyEvidence.map((evidence, index) => (
                  <li key={index}>{evidence[currentLang]}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: data.theme.buttonPrimary,
            borderRadius: '8px',
            padding: '20px',
            border: `1px solid ${data.theme.accentPrimary}`,
            boxShadow: data.theme.cardShadow
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              textShadow: data.theme.textShadow
            }}>
              ⚠️ {originalLang === 'kr' ? '수사 목표' : 'Investigation Goal'}
            </h4>
            <p style={{
              margin: 0,
              fontSize: '16px',
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
              textShadow: data.theme.textShadow
            }}>
              {data.goal[currentLang]}
            </p>
          </div>
        </div>

        {/* Start Game Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleGameStart}
            style={{
              display: 'inline-block',
              background: data.theme.buttonPrimary,
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '20px',
              fontWeight: 'bold',
              boxShadow: data.theme.cardShadow,
              transition: 'all 0.3s ease',
              border: 'none',
              textShadow: data.theme.textShadow,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = data.theme.cardShadowHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = data.theme.cardShadow;
            }}
          >
            🎮 {originalLang === 'kr' ? '수사 시작' : 'Start Investigation'}
          </button>
        </div>
      </div>

      {/* 저장된 게임 확인 팝업 */}
      {showResumePopup && savedGameInfo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: data.theme.primaryGradient,
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            border: `2px solid ${data.theme.accentPrimary}66`,
            color: 'white',
            textAlign: 'center',
            position: 'relative'
          }}>
            {/* X 버튼 */}
            <button
              onClick={() => setShowResumePopup(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.2rem',
                color: 'white',
                transition: 'all 0.2s ease'
              }}
            >
              ✕
            </button>

            {/* 아이콘 */}
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💾</div>

            {/* 제목 */}
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              margin: '0 0 1rem 0',
              color: data.theme.accentPrimary
            }}>
              {originalLang === 'kr' ? '저장된 게임이 있습니다' : 'Saved Game Found'}
            </h2>

            {/* 게임 정보 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              margin: '1.5rem 0',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                fontSize: '0.9rem',
                opacity: 0.9,
                display: 'flex',
                justifyContent: 'space-around',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ marginBottom: '0.25rem' }}>
                    {originalLang === 'kr' ? '플레이 시간' : 'Play Time'}
                  </div>
                  <div style={{ fontWeight: 'bold', color: data.theme.accentPrimary }}>
                    {formatTime(savedGameInfo.elapsedTime)}
                  </div>
                </div>
                <div>
                  <div style={{ marginBottom: '0.25rem' }}>
                    {originalLang === 'kr' ? '발견한 카드' : 'Discovered Cards'}
                  </div>
                  <div style={{ fontWeight: 'bold', color: data.theme.accentPrimary }}>
                    {savedGameInfo.discoveredCardsCount}{originalLang === 'kr' ? '장' : ' cards'}
                  </div>
                </div>
              </div>
            </div>

            {/* 안내 문구 */}
            <p style={{
              fontSize: '1rem',
              margin: '0 0 1rem 0',
              opacity: 0.9,
              lineHeight: '1.5'
            }}>
              {originalLang === 'kr' ? '이어서 플레이하시겠습니까?' : 'Would you like to continue playing?'}
            </p>

            <p style={{
              fontSize: '0.9rem',
              margin: '0 0 2rem 0',
              opacity: 0.7,
              lineHeight: '1.4',
              color: '#ff6b6b'
            }}>
              {originalLang === 'kr' ? '아니오를 선택하시면 진행상황이 삭제됩니다.' : 'Selecting No will delete your progress.'}
            </p>

            {/* 버튼들 */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button
                onClick={handleResumeGame}
                style={{
                  background: data.theme.buttonPrimary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: `0 4px 12px ${data.theme.accentPrimary}66`
                }}
              >
                {originalLang === 'kr' ? '예' : 'Yes'}
              </button>

              <button
                onClick={handleStartNewGame}
                style={{
                  background: 'rgba(255, 107, 107, 0.2)',
                  color: 'white',
                  border: '2px solid #ff6b6b',
                  borderRadius: '12px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {originalLang === 'kr' ? '아니오' : 'No'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AdMob 광고 모달 */}
      <AdModal
        isOpen={showAdModal}
        onClose={handleCloseAdModal}
        onAdCompleted={handleAdCompleted}
        onSkip={handleSkipAd}
      />

      {/* 하단 푸터 - 게임화면과 동일한 스타일 */}
      <div style={{
        position: 'fixed',
        bottom: `max(env(safe-area-inset-bottom, 0px), 0px)`,
        left: '0',
        right: '0',
        background: '#1a1a2eff',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        paddingTop: '12px',
        paddingBottom: '12px',
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
            🎮 {originalLang === 'kr' ? '수사 시작 버튼을 눌러 게임을 플레이하세요' : 'Press Start Investigation to play'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedChapterIntro;