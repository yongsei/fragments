import React from 'react';
import { Link } from 'react-router-dom';
import { useFragmentsTranslation } from '../hooks/useFragmentsTranslation';

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

  return (
    <div style={{
      minHeight: '100vh',
      background: data.theme.primaryGradient,
      color: data.theme.textPrimary,
      fontFamily: "'Noto Sans KR', sans-serif"
    }}>
      {/* Navigation */}
      <div style={{
        background: data.theme.navigationBg,
        backdropFilter: 'blur(10px)',
        padding: '16px 24px',
        borderBottom: `1px solid ${data.theme.cardBorder}`,
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link 
            to={`/fragments/${data.caseId}`}
            style={{
              color: data.theme.accentPrimary,
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease'
            }}>
            ← {originalLang === 'kr' ? '케이스로 돌아가기' : 'Back to Case'}
          </Link>
          <div>
            <h1 style={{ 
              margin: 0, 
              fontSize: '28px',
              color: data.theme.accentPrimary,
              fontWeight: 'bold'
            }}>
              {data.title[currentLang]}
            </h1>
          </div>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
          <Link
            to={data.gameLink}
            style={{
              display: 'inline-block',
              background: data.theme.buttonPrimary,
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
              boxShadow: data.theme.cardShadow,
              transition: 'all 0.3s ease',
              border: 'none',
              textShadow: data.theme.textShadow
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnifiedChapterIntro;