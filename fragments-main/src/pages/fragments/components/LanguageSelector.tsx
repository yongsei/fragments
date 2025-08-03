import React from 'react';
import { useLanguage, SupportedLanguage } from '../hooks/useLanguage';

interface LanguageSelectorProps {
  className?: string;
  style?: React.CSSProperties;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className, style }) => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'kr' as SupportedLanguage, label: '한국어', flag: '🇰🇷' },
    { code: 'en' as SupportedLanguage, label: 'English', flag: '🇺🇸' }
  ];

  return (
    <div 
      className={className}
      style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        ...style
      }}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          style={{
            background: language === lang.code 
              ? 'linear-gradient(45deg, #ffd700, #ffed4e)' 
              : 'rgba(255, 255, 255, 0.1)',
            color: language === lang.code ? '#1a1a2e' : 'rgba(255, 255, 255, 0.8)',
            border: language === lang.code 
              ? '2px solid #ffd700' 
              : '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '6px 12px',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            minWidth: 'fit-content',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            if (language !== lang.code) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            if (language !== lang.code) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }
          }}
        >
          <span style={{ fontSize: '0.8rem' }}>{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;