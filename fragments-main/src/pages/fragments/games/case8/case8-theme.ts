export const case8Theme = {
  // 메인 컬러 팔레트 - 호러 미스터리 테마
  primary: '#1a1a1a',      // 거의 검은색
  secondary: '#2d2d2d',    // 다크 그레이
  accent: '#4a4a4a',       // 미디엄 그레이
  background: '#0d0d0d',   // 매우 어두운 검은색
  surface: '#1f1f1f',      // 다크 서피스
  
  // 텍스트 컬러
  textPrimary: '#e0e0e0',  // 라이트 그레이
  textSecondary: '#b0b0b0', // 미디엄 그레이
  textAccent: '#ffffff',   // 순백색
  
  // 상태별 컬러
  success: '#2d5016',      // 다크 그린
  warning: '#5c4317',      // 다크 브라운
  error: '#4a0e0e',        // 다크 레드
  info: '#1e3a5f',         // 다크 블루
  
  // 안개/호러 특화 컬러
  fog: '#6b7280',          // 안개 그레이
  shadow: '#111827',       // 그림자 색
  mist: '#9ca3af',         // 연한 안개색
  
  // 그라데이션
  gradients: {
    primary: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)',
    secondary: 'linear-gradient(135deg, #1f1f1f 0%, #2d2d2d 100%)',
    accent: 'linear-gradient(135deg, #4a4a4a 0%, #6b7280 100%)',
    card: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(45, 45, 45, 0.9) 100%)',
    overlay: 'linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(31, 31, 31, 0.95) 100%)',
    fog: 'linear-gradient(135deg, rgba(107, 114, 128, 0.3) 0%, rgba(156, 163, 175, 0.3) 100%)'
  },
  
  // 그림자
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.6)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.7)',
    large: '0 8px 16px rgba(0, 0, 0, 0.8)',
    card: '0 4px 12px rgba(0, 0, 0, 0.5)',
    modal: '0 20px 40px rgba(0, 0, 0, 0.9)',
    fog: '0 0 20px rgba(107, 114, 128, 0.3)'
  },
  
  // 보더
  borders: {
    primary: '1px solid #4a4a4a',
    secondary: '1px solid #6b7280',
    light: '1px solid rgba(224, 224, 224, 0.2)',
    card: '1px solid rgba(74, 74, 74, 0.3)',
    fog: '1px solid rgba(107, 114, 128, 0.4)'
  },
  
  // 애니메이션
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
      fog: '2s'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      fog: 'ease-in-out'
    }
  },
  
  // 브레이크포인트
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  },
  
  // 폰트
  fonts: {
    primary: '"Creepster", "Chiller", cursive',
    secondary: '"Nosifer", "Butcherman", serif',
    mono: '"Courier New", monospace',
    body: '"Roboto", "Arial", sans-serif'
  },
  
  // 특별 효과
  effects: {
    blur: 'blur(10px)',
    brightness: 'brightness(0.8)',
    contrast: 'contrast(1.3)',
    sepia: 'sepia(0.1)',
    foggy: 'blur(2px) brightness(0.9) contrast(1.1)',
    ghostly: 'blur(1px) opacity(0.8) brightness(1.2)'
  }
};