import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import { hasGameProgress, loadGameProgress, clearGameProgress } from '../utils/gameProgress';
import { useLanguage } from '../hooks/useLanguage';
import AdModal from '../../../components/AdModal';

interface PreviewCard {
  icon: string;
  title: string;
  description: string;
  gradientColors: string[];
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface IntroUICustomization {
  backgroundGradient?: string;
  titleGradient?: string;
  accentColor?: string;
  buttonGradient?: string;
  fontFamily?: string;
  titleIcon?: string;
  gameButtonIcon?: string;
  gameButtonText?: string;
}

interface MysteryIntroLayoutProps {
  // SEO Props
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonicalUrl: string;
  
  // Content Props
  title: string;
  subtitle: string;
  storyTitle: string;
  storyContent: string;
  
  // Navigation Props
  gameUrl: string;
  backUrl: string;
  caseId: string; // 케이스 ID 추가
  
  // UI Customization
  uiCustomization?: IntroUICustomization;
}

const MysteryIntroLayout: React.FC<MysteryIntroLayoutProps> = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  canonicalUrl,
  title,
  subtitle,
  storyTitle,
  storyContent,
  gameUrl,
  backUrl,
  caseId,
  uiCustomization = {}
}) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [savedGameInfo, setSavedGameInfo] = useState<{
    elapsedTime: number;
    discoveredCardsCount: number;
  } | null>(null);
  const ui = {
    backgroundGradient: uiCustomization.backgroundGradient || 'linear-gradient(135deg, #0a192f 0%, #172a45 50%, #213b5e 100%)',
    titleGradient: uiCustomization.titleGradient || 'linear-gradient(45deg, #00bcd4, #00e5ff)',
    accentColor: uiCustomization.accentColor || '#00bcd4',
    buttonGradient: uiCustomization.buttonGradient || 'linear-gradient(45deg, #00bcd4, #00e5ff)',
    fontFamily: uiCustomization.fontFamily || "'Noto Sans KR', sans-serif",
    titleIcon: uiCustomization.titleIcon || '✨',
    gameButtonIcon: uiCustomization.gameButtonIcon || '🚀',
    gameButtonText: uiCustomization.gameButtonText || t('startGame')
  };

  const handleGameStart = async () => {
    // 저장된 게임 데이터 확인
    try {
      if (await hasGameProgress(caseId)) {
        const progress = await loadGameProgress(caseId);
        if (progress && !progress.isCompleted) {
          setSavedGameInfo({
            elapsedTime: progress.elapsedTime,
            discoveredCardsCount: progress.totalDiscoveredCards || progress.discoveredCardIds.length // 새 필드 우선, 없으면 기존 방식
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

  const handleStartNewGame = () => {
    // 저장된 데이터 삭제 후 새 게임 시작
    clearGameProgress(caseId);
    setShowResumePopup(false);
    setShowAdModal(true);
  };

  const handleAdCompleted = () => {
    console.log('광고 시청 완료! 게임 시작');
    setShowAdModal(false);
    window.scrollTo(0, 0); // 화면을 최상단으로 스크롤
    navigate(gameUrl);
  };

  const handleSkipAd = () => {
    console.log('광고 건너뛰기');
    setShowAdModal(false);
    window.scrollTo(0, 0); // 화면을 최상단으로 스크롤
    navigate(gameUrl);
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
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={canonicalUrl}
      />

      <div style={{
        minHeight: '100vh',
        background: ui.backgroundGradient,
        color: 'white',
        padding: '2rem',
        fontFamily: ui.fontFamily
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
              background: ui.titleGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {ui.titleIcon} {title}
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {subtitle}
            </p>
          </div>

          {/* 사건 개요 */}
          <div style={{
            background: `${ui.accentColor}1a`,
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '3rem',
            border: `1px solid ${ui.accentColor}4d`
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: ui.accentColor
            }}>📋 {storyTitle}</h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              opacity: 0.9,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              {storyContent}
            </p>
          </div>

          {/* 게임 시작 버튼 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button
              onClick={handleGameStart}
              style={{
                background: ui.buttonGradient,
                color: ui.backgroundGradient.includes('#0a192f') ? '#0a192f' : '#1a1a2e',
                padding: '1rem 3rem',
                borderRadius: '25px',
                fontSize: '1.2rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: `0 8px 25px ${ui.accentColor}4d`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 12px 35px ${ui.accentColor}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${ui.accentColor}4d`;
              }}
            >
              {ui.gameButtonIcon} {ui.gameButtonText}
            </button>

            <Link
              to={backUrl}
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
              {t('backToSelection')}
            </Link>
          </div>
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
            background: ui.backgroundGradient,
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            border: `2px solid ${ui.accentColor}66`,
            color: 'white',
            textAlign: 'center',
            position: 'relative'
          }}>
            {/* X 버튼 - 우상단 */}
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
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(10px)',
                zIndex: 1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 107, 107, 0.8)';
                e.currentTarget.style.border = '2px solid #ff6b6b';
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              ✕
            </button>

            {/* 아이콘 */}
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>
              💾
            </div>

            {/* 제목 */}
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              margin: '0 0 1rem 0',
              background: ui.titleGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t('savedGameExists')}
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
                  <div style={{ marginBottom: '0.25rem' }}>{t('playTime')}</div>
                  <div style={{ fontWeight: 'bold', color: ui.accentColor }}>{formatTime(savedGameInfo.elapsedTime)}</div>
                </div>
                <div>
                  <div style={{ marginBottom: '0.25rem' }}>{t('discoveredCards')}</div>
                  <div style={{ fontWeight: 'bold', color: ui.accentColor }}>{savedGameInfo.discoveredCardsCount}{t('cardsUnit')}</div>
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
              {t('continueQuestion')}
            </p>

            <p style={{
              fontSize: '0.9rem',
              margin: '0 0 2rem 0',
              opacity: 0.7,
              lineHeight: '1.4',
              color: '#ff6b6b'
            }}>
              {t('resumeGameWarning')}
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
                  background: ui.buttonGradient,
                  color: ui.backgroundGradient.includes('#0a192f') ? '#0a192f' : '#1a1a2e',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: `0 4px 12px ${ui.accentColor}66`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 20px ${ui.accentColor}99`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 12px ${ui.accentColor}66`;
                }}
              >
                {t('yes')}
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
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 107, 107, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 107, 107, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {t('no')}
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
    </>
  );
};

export default MysteryIntroLayout;