import { useRef, useCallback, useState, useEffect } from 'react';

interface SoundSettings {
  soundEffectsEnabled: boolean;
  effectsVolume: number;
}

interface SoundFiles {
  cardOpen: HTMLAudioElement | null;
  cardClose: HTMLAudioElement | null;
  scenario: HTMLAudioElement | null;
  chapter: HTMLAudioElement | null;
}

const DEFAULT_SETTINGS: SoundSettings = {
  soundEffectsEnabled: true,
  effectsVolume: 0.5,
};

const STORAGE_KEY = 'fragmentmystery_sound_settings';

// 사운드 설정만 관리하는 경량 훅 (메인 페이지용)
export const useSoundSettings = () => {
  const [settings, setSettings] = useState<SoundSettings>(() => {
    // 로컬 스토리지에서 설정 불러오기
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // 설정 변경시 로컬 스토리지에 저장
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      // 🔧 커스텀 이벤트 발생시켜 다른 컴포넌트에 변경사항 알림
      window.dispatchEvent(new Event('soundSettingsChanged'));
      console.log('🔄 useSoundSettings - 설정 변경 및 이벤트 발생:', settings);
    } catch (error) {
      console.warn('사운드 설정 저장 실패:', error);
    }
  }, [settings]);

  // 설정 업데이트 함수들
  const toggleSoundEffects = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      soundEffectsEnabled: !prev.soundEffectsEnabled,
    }));
  }, []);

  const setEffectsVolume = useCallback((volume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    setSettings(prev => ({ ...prev, effectsVolume: clampedVolume }));
  }, []);

  return {
    settings,
    toggleSoundEffects,
    setEffectsVolume,
  };
};

// 게임용 완전한 사운드 매니저 (오디오 파일 로드)
export const useSoundManager = () => {
  const [settings, setSettings] = useState<SoundSettings>(() => {
    // 로컬 스토리지에서 설정 불러오기
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  const soundFiles = useRef<SoundFiles>({
    cardOpen: null,
    cardClose: null,
    scenario: null,
    chapter: null,
  });

  // 설정 변경시 로컬 스토리지에 저장
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn('사운드 설정 저장 실패:', error);
    }
  }, [settings]);

  // 🔧 localStorage 변경 실시간 감지 (메인 페이지에서 설정 변경 시)
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const newSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
          console.log('🔄 useSoundManager - localStorage 변경 감지, 설정 업데이트:', newSettings);
          setSettings(newSettings);
        }
      } catch (error) {
        console.warn('사운드 설정 동기화 실패:', error);
      }
    };

    // storage 이벤트 리스너 등록 (다른 탭에서 변경 시)
    window.addEventListener('storage', handleStorageChange);
    
    // 동일 탭에서 설정 변경 감지를 위한 커스텀 이벤트
    window.addEventListener('soundSettingsChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('soundSettingsChanged', handleStorageChange);
    };
  }, []);

  // 오디오 파일 초기화 (게임 진입시에만)
  useEffect(() => {
    const loadAudio = (src: string): HTMLAudioElement => {
      const audio = new Audio();
      audio.preload = 'metadata'; // 'auto' → 'metadata'로 변경 (로딩 최적화)
      audio.crossOrigin = 'anonymous'; // CORS 문제 방지
      audio.src = src;
      
      return audio;
    };

    // 효과음 파일 로드 (배경음악 제거)
    soundFiles.current = {
      cardOpen: loadAudio('/fragments/games/wave/open.wav'),
      cardClose: loadAudio('/fragments/games/wave/close.wav'),
      scenario: loadAudio('/fragments/games/wave/senario.wav'),
      chapter: loadAudio('/fragments/games/wave/chapter.wav'),
    };

    // 컴포넌트 언마운트시 정리
    return () => {
      Object.values(soundFiles.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, []);

  // 공통 효과음 재생 함수
  const playEffectSound = useCallback(async (audio: HTMLAudioElement | null, soundName: string) => {
    console.log(`🔊 playEffectSound 호출: ${soundName}`);
    console.log(`🔊 효과음 활성화 상태: ${settings.soundEffectsEnabled}`);
    console.log(`🔊 오디오 객체 존재: ${!!audio}`);
    
    if (!settings.soundEffectsEnabled) {
      console.log(`❌ 효과음이 비활성화됨: ${soundName}`);
      return;
    }
    
    if (!audio) {
      console.log(`❌ 오디오 객체가 null: ${soundName}`);
      return;
    }
    
    try {
      console.log(`🔊 ${soundName} - readyState: ${audio.readyState}`);
      
      // 🔧 재생 전 오디오 상태 완전 리셋
      if (!audio.paused) {
        console.log(`🔄 ${soundName} - 이전 재생 중지 중...`);
        audio.pause();
      }
      
      // 오디오가 로드될 때까지 기다림
      if (audio.readyState < 2) { // HAVE_CURRENT_DATA
        console.log(`⏳ ${soundName} - 오디오 로드 대기 중...`);
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            audio.removeEventListener('canplay', onCanPlay);
            audio.removeEventListener('error', onError);
            reject(new Error('오디오 로드 타임아웃'));
          }, 5000);
          
          const onCanPlay = () => {
            clearTimeout(timeout);
            console.log(`✅ ${soundName} - 오디오 로드 완료`);
            audio.removeEventListener('canplay', onCanPlay);
            audio.removeEventListener('error', onError);
            resolve(true);
          };
          
          const onError = (e: Event) => {
            clearTimeout(timeout);
            audio.removeEventListener('canplay', onCanPlay);
            audio.removeEventListener('error', onError);
            reject(new Error(`오디오 로드 오류: ${e}`));
          };
          
          audio.addEventListener('canplay', onCanPlay);
          audio.addEventListener('error', onError);
        });
      }
      
      // 🔧 재생 전 상태 확인 및 설정
      audio.currentTime = 0;
      audio.volume = settings.effectsVolume;
      console.log(`🔊 ${soundName} - 볼륨: ${settings.effectsVolume}, 재생 시도 중...`);
      
      // 🔧 AbortError 방지를 위한 안전한 재생
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        console.log(`✅ ${soundName} 재생 성공`);
      }
    } catch (error) {
      console.error(`❌ ${soundName} 재생 실패:`, error);
      
      // 🔧 AbortError의 경우 한 번 더 시도
      if (error instanceof DOMException && error.name === 'AbortError') {
        console.log(`🔄 ${soundName} - AbortError 감지, 재시도 중...`);
        try {
          // 짧은 지연 후 재시도
          await new Promise(resolve => setTimeout(resolve, 200));
          
          // 🔧 오디오 소스 재설정 (NotSupportedError 방지)
          // originalSrc가 변경될 수 있으므로 고정된 경로 사용
          let fixedSrc = '';
          if (soundName.includes('chapter.wav')) {
            fixedSrc = '/fragments/games/wave/chapter.wav';
          } else if (soundName.includes('scenario.wav') || soundName.includes('senario.wav')) {
            fixedSrc = '/fragments/games/wave/senario.wav';
          } else if (soundName.includes('open.wav')) {
            fixedSrc = '/fragments/games/wave/open.wav';
          } else if (soundName.includes('close.wav')) {
            fixedSrc = '/fragments/games/wave/close.wav';
          } else {
            fixedSrc = audio.src; // 폴백
          }
          
          console.log(`🔄 ${soundName} - 오디오 소스 재설정`);
          console.log(`- 기존 src: ${audio.src}`);
          console.log(`- 새로운 src: ${fixedSrc}`);
          
          audio.src = '';
          audio.src = fixedSrc;
          
          // 오디오 재로드 대기
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
              audio.removeEventListener('canplaythrough', onCanPlay);
              audio.removeEventListener('error', onError);
              reject(new Error('재시도 로드 타임아웃'));
            }, 3000);
            
            const onCanPlay = () => {
              clearTimeout(timeout);
              audio.removeEventListener('canplaythrough', onCanPlay);
              audio.removeEventListener('error', onError);
              resolve(true);
            };
            
            const onError = (e: Event) => {
              clearTimeout(timeout);
              audio.removeEventListener('canplaythrough', onCanPlay);
              audio.removeEventListener('error', onError);
              reject(new Error(`재시도 로드 오류: ${e}`));
            };
            
            audio.addEventListener('canplaythrough', onCanPlay);
            audio.addEventListener('error', onError);
          });
          
          audio.currentTime = 0;
          audio.volume = settings.effectsVolume;
          await audio.play();
          console.log(`✅ ${soundName} 재시도 성공`);
        } catch (retryError) {
          console.error(`❌ ${soundName} 재시도 실패:`, retryError);
        }
      }
    }
  }, [settings.soundEffectsEnabled, settings.effectsVolume]);

  // 효과음 재생
  const playCardOpenSound = useCallback(async () => {
    await playEffectSound(soundFiles.current.cardOpen, '카드 선택 효과음 (open.wav)');
  }, [playEffectSound]);

  const playCardCloseSound = useCallback(async () => {
    await playEffectSound(soundFiles.current.cardClose, '카드 해제 효과음 (close.wav)');
  }, [playEffectSound]);

  const playScenarioSound = useCallback(async () => {
    await playEffectSound(soundFiles.current.scenario, '시나리오 선택 효과음 (scenario.wav)');
  }, [playEffectSound]);

  const playChapterSound = useCallback(async () => {
    console.log('🎵 playChapterSound 호출됨!');
    console.log('🎵 soundFiles.current.chapter:', soundFiles.current.chapter);
    console.log('🎵 settings.soundEffectsEnabled:', settings.soundEffectsEnabled);
    console.log('🎵 settings.effectsVolume:', settings.effectsVolume);
    
    // chapter.wav 파일 직접 테스트
    if (soundFiles.current.chapter) {
      console.log('🎵 chapter.wav 파일 정보:');
      console.log('- src:', soundFiles.current.chapter.src);
      console.log('- readyState:', soundFiles.current.chapter.readyState);
      console.log('- error:', soundFiles.current.chapter.error);
      console.log('- networkState:', soundFiles.current.chapter.networkState);
    }
    
    await playEffectSound(soundFiles.current.chapter, '챕터 선택 효과음 (chapter.wav)');
  }, [playEffectSound, settings.soundEffectsEnabled, settings.effectsVolume]);

  // 설정 업데이트 함수들 (배경음악 제거)
  const toggleSoundEffects = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      soundEffectsEnabled: !prev.soundEffectsEnabled,
    }));
  }, []);

  const setEffectsVolume = useCallback((volume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    setSettings(prev => ({ ...prev, effectsVolume: clampedVolume }));
  }, []);

  return {
    settings,
    playCardOpenSound,
    playCardCloseSound,
    playScenarioSound,
    playChapterSound,
    toggleSoundEffects,
    setEffectsVolume,
  };
};