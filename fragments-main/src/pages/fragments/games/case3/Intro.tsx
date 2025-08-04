import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../../components/SEOHead';
import { useFragmentsTranslation } from '../../hooks/useFragmentsTranslation';

const Case3Intro: React.FC = () => {
  const { t, originalLang } = useFragmentsTranslation();

  return (
    <>
      <SEOHead
        title={originalLang === 'kr' 
          ? "브래스헬름의 잿불 3부작 - 단서의 파편 케이스3"
          : "Brasshelm's Ember Trilogy - Fragment of Mystery Case3"
        }
        description={originalLang === 'kr'
          ? "🔥 스팀펑크 도시 브래스헬름에서 벌어지는 3부작 미스터리! 3개의 연결된 챕터를 통해 거대한 음모를 파헤치세요. 단서의 파편 최대 규모 시나리오 체험!"
          : "🔥 A steampunk trilogy mystery in the city of Brasshelm! Uncover a grand conspiracy through 3 connected chapters. Experience the largest scenario in Fragment of Mystery!"
        }
        keywords={originalLang === 'kr'
          ? "브래스헬름의 잿불, 단서의 파편 케이스3, 스팀펑크 추리게임, 3부작 미스터리, 연결된 시나리오"
          : "Brasshelm's Ember, Fragment of Mystery Case3, steampunk detective game, trilogy mystery, connected scenario"
        }
        canonical="/fragments/case3"
      />
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #4a2c17 0%, #8b4513 30%, #d2691e 70%, #ffa07a 100%)',
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
              background: 'linear-gradient(45deg, #ffa07a, #d2691e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              🔥 브래스헬름의 잿불
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              스팀펑크 도시에서 벌어지는 3부작 연결 미스터리
            </p>
          </div>

          {/* 시나리오 개요 */}
          <div style={{
            background: 'rgba(255, 160, 122, 0.1)',
            borderRadius: '15px',
            padding: '2rem',
            marginBottom: '3rem',
            border: '1px solid rgba(255, 160, 122, 0.3)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#ffa07a'
            }}>
              📖 전체 스토리
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              opacity: 0.9
            }}>
              증기 기관과 마법이 공존하는 도시 브래스헬름. 연이어 발생하는 의문의 사건들 뒤에 숨겨진 
              거대한 음모를 파헤치는 3부작 연결 미스터리입니다. 각 챕터는 독립적으로도 플레이 가능하지만, 
              순서대로 진행하면 더 깊은 스토리를 경험할 수 있습니다.
            </p>
          </div>

          {/* 챕터 선택 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Chapter 1 */}
            <Link to="chapter1" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏭</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: '#ffa07a'
                }}>
                  Chapter 1: 공장의 비밀
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  opacity: 0.8
                }}>
                  증기 공장에서 벌어진 의문의 폭발사고. 
                  사고인가, 아니면 치밀한 계획인가?
                </p>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(45deg, #ffa07a, #d2691e)',
                  borderRadius: '25px',
                  color: '#4a2c17',
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  🕵️ 챕터 1 시작
                </div>
              </div>
            </Link>

            {/* Chapter 2 */}
            <Link to="chapter2" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: '#ffa07a'
                }}>
                  Chapter 2: 기계장치의 증언
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  opacity: 0.8
                }}>
                  발명가 길드에서 일어난 연쇄 절도사건. 
                  누군가 특별한 기계장치를 노리고 있다.
                </p>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(45deg, #ffa07a, #d2691e)',
                  borderRadius: '25px',
                  color: '#4a2c17',
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  🔧 챕터 2 시작
                </div>
              </div>
            </Link>

            {/* Chapter 3 */}
            <Link to="chapter3" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔥</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: '#ffa07a'
                }}>
                  Chapter 3: 최후의 잿불
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  opacity: 0.8
                }}>
                  모든 진실이 밝혀지는 대미를 장식하는 결말. 
                  브래스헬름의 운명이 걸린 최후의 대결.
                </p>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(45deg, #ffa07a, #d2691e)',
                  borderRadius: '25px',
                  color: '#4a2c17',
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  🔥 최종 챕터 시작
                </div>
              </div>
            </Link>
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
              ← 케이스 선택으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case3Intro;