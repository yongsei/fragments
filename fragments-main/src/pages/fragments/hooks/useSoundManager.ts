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
  skip: HTMLAudioElement | null;
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
    skip: null,
  });

  // 화면에 표시할 사운드 로딩 상태
  const [soundLoadStatus, setSoundLoadStatus] = useState<string>('로딩 중...');

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
    const loadAudio = (src: string, name: string): HTMLAudioElement => {
      const audio = new Audio();
      audio.preload = 'metadata'; // 'auto' → 'metadata'로 변경 (로딩 최적화)
      audio.crossOrigin = 'anonymous'; // CORS 문제 방지
      audio.src = src;
      
      // 화면에 표시할 로딩 상태 추적
      audio.addEventListener('loadstart', () => {
        console.log(`🔊 로드 시작: ${src}`);
        setSoundLoadStatus(prev => prev + `\n${name}: 로딩 중...`);
      });
      
      audio.addEventListener('canplay', () => {
        console.log(`✅ 로드 완료: ${src}`);
        setSoundLoadStatus(prev => prev.replace(`${name}: 로딩 중...`, `${name}: ✅완료`));
      });
      
      audio.addEventListener('error', (e) => {
        console.error(`❌ 로드 실패: ${src}`, e);
        setSoundLoadStatus(prev => prev.replace(`${name}: 로딩 중...`, `${name}: ❌실패`));
      });
      
      return audio;
    };

    // 초기 상태 설정
    setSoundLoadStatus('사운드 파일 로딩 시작...');

    // 효과음 파일 로드 (절대경로로 변경)
    soundFiles.current = {
      cardOpen: loadAudio('/fragments/games/wave/open.wav', 'open'),
      cardClose: loadAudio('/fragments/games/wave/close.wav', 'close'),
      scenario: loadAudio('/fragments/games/wave/scenario.wav', 'scenario'),
      chapter: loadAudio('/fragments/games/wave/chapter.wav', 'chapter'),
      skip: loadAudio('/fragments/games/wave/close.wav', 'skip'), // 임시로 close.wav 사용
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

  // 🎵 빠른 효과음 재생 함수 (최적화 버전)
  const playEffectSound = useCallback(async (audio: HTMLAudioElement | null, soundName: string) => {
    if (!settings.soundEffectsEnabled || !audio) {
      return;
    }
    
    try {
      // 🔧 즉시 재생 시도 (복잡한 로드 대기 없음)
      if (!audio.paused) {
        audio.pause();
      }
      
      audio.currentTime = 0;
      audio.volume = settings.effectsVolume;
      
      // 🔧 Promise 대기 없이 바로 재생 (더 빠른 응답)
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // 재생 실패해도 로그만 남기고 사용자 경험 방해 안함
          console.warn(`${soundName} 재생 실패:`, error);
        });
      }
      
      console.log(`🔊 ${soundName} 재생 시도 완료`);
    } catch (error) {
      // 재생 실패는 조용히 무시 (사용자 경험 방해 안함)
      console.warn(`${soundName} 재생 오류:`, error);
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

  // 설정을 무시하고 강제로 scenario 효과음 재생하는 함수 (사운드 ON 확인용)
  const playScenarioSoundForced = useCallback(async () => {
    if (!soundFiles.current.scenario) {
      console.log('❌ scenario 오디오 파일이 로드되지 않음');
      return;
    }
    
    try {
      const audio = soundFiles.current.scenario;
      audio.volume = settings.effectsVolume;
      audio.currentTime = 0;
      await audio.play();
      console.log('✅ 강제 scenario 효과음 재생 성공');
    } catch (error) {
      console.error('❌ 강제 scenario 효과음 재생 실패:', error);
    }
  }, [settings.effectsVolume]);

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

  const playSkipSound = useCallback(async () => {
    await playEffectSound(soundFiles.current.skip, '스킵 효과음 (skip.wav)');
  }, [playEffectSound]);

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
    playScenarioSoundForced, // 설정 무시하고 강제 재생
    playChapterSound,
    playSkipSound,
    playEffectSound, // 직접 효과음 재생 (설정 무시)
    toggleSoundEffects,
    setEffectsVolume,
    soundLoadStatus, // 핸드폰에서 사운드 로딩 상태 확인용
  };
};