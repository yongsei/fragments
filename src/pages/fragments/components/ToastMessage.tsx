import React, { useEffect, useState } from 'react';

interface ToastMessageProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'hint';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 3000 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          onClose();
        }, 300); // 애니메이션 완료 후 닫기
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !isAnimating) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case 'success': return 'linear-gradient(45deg, #10b981, #34d399)';
      case 'error': return 'linear-gradient(45deg, #ef4444, #f87171)';
      case 'info': return 'linear-gradient(45deg, #3b82f6, #60a5fa)';
      case 'hint': return 'linear-gradient(45deg, #fbbf24, #fcd34d)';
      default: return 'linear-gradient(45deg, #6b7280, #9ca3af)';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      case 'hint': return '💡';
      default: return '💭';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '160px', // 상단 탭(130px) + 여유공간(30px)
      left: '50%',
      transform: `translateX(-50%) translateY(${isAnimating ? '0' : '-100px'})`,
      background: getBackgroundColor(),
      color: 'white',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      maxWidth: '90vw',
      minWidth: '300px',
      transition: 'all 0.3s ease-out',
      opacity: isAnimating ? 1 : 0,
      fontFamily: "'Noto Sans KR', sans-serif",
      fontSize: '0.95rem',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <span style={{ fontSize: '1.2rem' }}>{getIcon()}</span>
      <span style={{ flex: 1, lineHeight: 1.4 }}>{message}</span>
      <button
        onClick={() => {
          setIsAnimating(false);
          setTimeout(onClose, 300);
        }}
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        ×
      </button>
    </div>
  );
};

export default ToastMessage;