export const case7Theme = {
  // 메인 컬러 팔레트 - 고딕 미스터리 테마
  primary: '#2c1810',      // 다크 브라운
  secondary: '#8b4513',    // 새들 브라운
  accent: '#cd853f',       // 페루 골드
  background: '#1a1a1a',   // 거의 검은색
  surface: '#2d2d2d',      // 다크 그레이
  
  // 텍스트 컬러
  textPrimary: '#f5f5dc',  // 베이지
  textSecondary: '#deb887', // 버리우드
  textAccent: '#daa520',   // 골든로드
  
  // 상태별 컬러
  success: '#556b2f',      // 다크 올리브 그린
  warning: '#b8860b',      // 다크 골든로드
  error: '#8b0000',        // 다크 레드
  info: '#4682b4',         // 스틸 블루
  
  // 그라데이션
  gradients: {
    primary: 'linear-gradient(135deg, #2c1810 0%, #8b4513 100%)',
    secondary: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    accent: 'linear-gradient(135deg, #cd853f 0%, #daa520 100%)',
    card: 'linear-gradient(135deg, rgba(44, 24, 16, 0.9) 0%, rgba(139, 69, 19, 0.9) 100%)',
    overlay: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(45, 45, 45, 0.95) 100%)'
  },
  
  // 그림자
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.4)',
    large: '0 8px 16px rgba(0, 0, 0, 0.5)',
    card: '0 4px 12px rgba(44, 24, 16, 0.3)',
    modal: '0 20px 40px rgba(0, 0, 0, 0.6)'
  },
  
  // 보더
  borders: {
    primary: '1px solid #8b4513',
    secondary: '1px solid #cd853f',
    light: '1px solid rgba(245, 245, 220, 0.2)',
    card: '1px solid rgba(139, 69, 19, 0.3)'
  },
  
  // 애니메이션
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
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
    primary: '"Crimson Text", "Times New Roman", serif',
    secondary: '"Playfair Display", "Georgia", serif',
    mono: '"Courier New", monospace'
  },
  
  // 특별 효과
  effects: {
    blur: 'blur(10px)',
    brightness: 'brightness(1.1)',
    contrast: 'contrast(1.2)',
    sepia: 'sepia(0.3)',
    vintage: 'sepia(0.3) contrast(1.2) brightness(0.9)'
  }
};