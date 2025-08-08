import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../hooks/useLanguage';
const caseTheme = { primaryGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', textPrimary: '#ffffff', accentPrimary: '#9d4edd', navigationBg: 'rgba(0, 0, 0, 0.3)', cardBackground: 'rgba(157, 78, 221, 0.1)', cardBorder: 'rgba(157, 78, 221, 0.3)', cardShadow: '0 8px 32px rgba(0, 0, 0, 0.4)', buttonPrimary: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' };

const Chapter4Intro: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div style={{
      minHeight: '100vh',
      background: "#ffffff",
      color: "#ffffff",
      fontFamily: "'Noto Sans KR', sans-serif"
    }}>
      {/* Navigation */}
      <div style={{
        background: "#ffffff",
        backdropFilter: 'blur(10px)',
        padding: '16px 24px',
        borderBottom: `1px solid ${"#ffffff"}`,
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link 
            to="/fragments/case5" 
            style={{
              color: "#ffffff",
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'color 0.3s ease'
            }}>
            ←
          </Link>
          <div>
            <h1 style={{ 
              margin: 0, 
              fontSize: '28px',
              color: "#ffffff",
              fontWeight: 'bold'
            }}>
              {language === 'kr' ? '챕터 4: 2099년 뉴욕과 시간 전쟁' : 'Chapter 4: New York 2099 and Time War'}
            </h1>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Chapter Introduction */}
        <div style={{
          background: "#ffffff",
          border: `1px solid ${"#ffffff"}`,
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '40px',
          backdropFilter: 'blur(5px)',
          boxShadow: "#ffffff"
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🌆</div>
            <h2 style={{
              margin: '0 0 16px 0',
              fontSize: '32px',
              color: "#ffffff",
              fontWeight: 'bold'
            }}>
              {language === 'kr' ? '사이버펑크 시대의 갈등' : 'Conflicts of the Cyberpunk Era'}
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: "rgba(255, 255, 255, 0.8)",
              margin: 0
            }}>
              {language === 'kr' ? 
                '2099년 뉴욕, 네온사인이 번쩍이는 사이버펑크 도시에서 시간 전쟁이 벌어지고 있습니다' :
                'New York 2099, a time war rages in this cyberpunk city where neon signs flicker'
              }
            </p>
          </div>

          <div style={{
            background: `${"#ffffff"}20`,
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '32px',
            border: `1px solid ${"#ffffff"}40`
          }}>
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '20px',
              color: "#ffffff",
              fontWeight: 'bold'
            }}>
              📖 {language === 'kr' ? '챕터 스토리' : 'Chapter Story'}
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: "#ffffff",
              margin: 0
            }}>
              {language === 'kr' ? 
                '2099년 뉴욕, 네온사인이 번쩍이는 사이버펑크 도시에서 시간 전쟁이 벌어지고 있습니다. 홀로그램 광고가 떠다니는 거대한 마천루들 사이로, 시간 여행 기술을 둘러싼 치열한 전투가 펼쳐집니다. "과거를 지배하는 자가 미래를 통제한다." - 시간 통제 기업의 모토. 하지만 이 전쟁 속에서도 진정한 시간 여행자의 정체는 여전히 베일에 싸여 있습니다.' :
                'New York 2099, a time war rages in this cyberpunk city where neon signs flicker. Between towering skyscrapers where holographic advertisements float, fierce battles unfold over time travel technology. "Those who control the past control the future." - Motto of the Time Control Corporation. But even amidst this war, the true identity of the time traveler remains shrouded in mystery.'
              }
            </p>
          </div>

          <div style={{
            background: "#ffffff",
            borderRadius: '8px',
            padding: '20px',
            border: `1px solid ${"#ffffff"}`,
            boxShadow: "#ffffff"
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              textShadow: "#ffffff"
            }}>
              🌃 {language === 'kr' ? '수사 목표' : 'Investigation Goal'}
            </h4>
            <p style={{
              margin: 0,
              fontSize: '16px',
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
              textShadow: "#ffffff"
            }}>
              {language === 'kr' ? 
                '미래 도시에서 벌어지는 시간을 둘러싼 전쟁의 진실을 파헤치세요!' :
                'Uncover the truth behind the war over time in the future city!'
              }
            </p>
          </div>
        </div>

        {/* Start Game Button */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/fragments/case5/chapter4/game"
            style={{
              display: 'inline-block',
              background: "#ffffff",
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
              boxShadow: "#ffffff",
              transition: 'all 0.3s ease',
              border: 'none',
              textShadow: "#ffffff"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = "#ffffff";
            }}
          >
            🎮 {language === 'kr' ? '수사 시작' : 'Start Investigation'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapter4Intro;