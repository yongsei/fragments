import { useMemo } from 'react';
import translations, { FragmentsTranslations } from '../i18n/translations';
import { useLanguage } from './useLanguage';

// Fragments 페이지 전용 번역 훅 - 기존 LanguageContext와 연동
export const useFragmentsTranslation = () => {
  const { language } = useLanguage(); // 기존 언어 컨텍스트 사용
  
  // 기존 시스템의 'kr'/'en'을 새 번역 시스템의 'ko'/'en'으로 변환
  const currentLang = useMemo(() => {
    return language === 'kr' ? 'ko' : 'en';
  }, [language]);
  
  const t = useMemo((): FragmentsTranslations => {
    return translations[currentLang];
  }, [currentLang]);
  
  return {
    t,
    currentLang,
    originalLang: language, // 기존 시스템 호환용
    isKorean: language === 'kr',
    isEnglish: language === 'en'
  };
};

export default useFragmentsTranslation;