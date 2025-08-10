import React, { useEffect, useRef, useState } from 'react';

interface BackgroundMusicProps {
  volume?: number; // 0.0 ~ 1.0
  autoPlay?: boolean;
  showControls?: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ 
  volume = 0.3, 
  autoPlay = true,
  showControls = true 
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 오디오 설정
    audio.volume = volume;
    audio.loop = true;

    // 자동 재생 시도 (사용자 상호작용 후에만 가능)
    const playAudio = async () => {
      try {
        if (autoPlay) {
          await audio.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('🎵 자동 재생 실패 - 사용자 클릭 후 재생 가능:', error);
        // 자동 재생이 실패하면 사용자 클릭을 기다림
      }
    };

    playAudio();

    // 오디오 이벤트 리스너
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (audio) {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
        audio.pause();
        setIsPlaying(false);
      }
    };
  }, [volume, autoPlay]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
    } catch (error) {
      console.error('🎵 재생/정지 실패:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
  };

  return (
    <>
      {/* 오디오 엘리먼트 */}
      <audio
        ref={audioRef}
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/fragments/games/wave/bgsound.wav" type="audio/wav" />
        <source src="/fragments/games/wave/bgsound.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* 컨트롤 UI */}
      {showControls && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '15px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          {/* 재생/정지 버튼 */}
          <button
            onClick={togglePlay}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>

          {/* 음소거 버튼 */}
          <button
            onClick={toggleMute}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          {/* 볼륨 슬라이더 */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue={volume}
            onChange={handleVolumeChange}
            style={{
              width: '60px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '2px',
              outline: 'none',
              cursor: 'pointer'
            }}
          />

          {/* 음악 아이콘 */}
          <span style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            animation: isPlaying ? 'musicPulse 2s infinite' : 'none'
          }}>
            🎵
          </span>
        </div>
      )}

      {/* 음악 펄스 애니메이션 CSS */}
      <style>{`
        @keyframes musicPulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 1; 
          }
        }
      `}</style>
    </>
  );
};

export default BackgroundMusic;