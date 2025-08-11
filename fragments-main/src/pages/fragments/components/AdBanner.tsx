import React, { useEffect, useState, useCallback } from 'react';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

interface AdBannerProps {
  position?: 'top' | 'bottom';
  adUnitId?: string;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  position = 'bottom', 
  adUnitId,
  className = '' 
}) => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [adError, setAdError] = useState<string | null>(null);

  // 🚀 useCallback으로 감싸서 의존성 문제 해결
  const getAdUnitId = useCallback(() => {
    if (adUnitId) return adUnitId;
    
    // 플랫폼별 테스트 광고 단위 ID
    if (Capacitor.getPlatform() === 'android') {
      return 'ca-app-pub-3940256099942544/6300978111'; // Android 테스트 배너 ID
    } else if (Capacitor.getPlatform() === 'ios') {
      return 'ca-app-pub-3940256099942544/2934735716'; // iOS 테스트 배너 ID
    }
    return 'ca-app-pub-3940256099942544/6300978111'; // 기본값
  }, [adUnitId]);

  useEffect(() => {
    const initializeAd = async () => {
      try {
        // 네이티브 플랫폼에서만 광고 로드
        if (Capacitor.isNativePlatform()) {
          console.log('🎯 AdBanner - 광고 초기화 시작');
          
          const options: BannerAdOptions = {
            adId: getAdUnitId(),
            adSize: BannerAdSize.BANNER, // 320x50 표준 배너
            position: position === 'top' ? BannerAdPosition.TOP_CENTER : BannerAdPosition.BOTTOM_CENTER,
            margin: 0,
            // 필요한 경우 추가 설정
            isTesting: false, // 개발 중에는 true, 배포시에는 false로 변경
          };

          await AdMob.showBanner(options);
          setIsAdLoaded(true);
          console.log('✅ AdBanner - 광고 로드 성공');
        } else {
          console.log('🌐 AdBanner - 웹 환경에서는 광고를 표시하지 않습니다');
        }
      } catch (error) {
        console.error('❌ AdBanner - 광고 로드 실패:', error);
        setAdError(error instanceof Error ? error.message : '광고 로드 오류');
      }
    };

    initializeAd();

    // 컴포넌트 언마운트 시 광고 제거
    return () => {
      if (Capacitor.isNativePlatform() && isAdLoaded) {
        AdMob.hideBanner().catch(error => {
          console.error('❌ AdBanner - 광고 제거 실패:', error);
        });
      }
    };
  }, [position, adUnitId, getAdUnitId, isAdLoaded]);

  // 웹 환경에서는 광고 대신 플레이스홀더 표시
  if (!Capacitor.isNativePlatform()) {
    return (
      <div className={`ad-placeholder ${className}`} style={{
        width: '100%',
        height: '50px',
        backgroundColor: '#ff0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        color: '#ffffff',
        border: '2px solid #ffffff',
        position: 'relative',
        zIndex: 1000,
        fontWeight: 'bold'
      }}>
        📱 광고 영역 (모바일 앱에서 AdMob 광고 표시됨)
      </div>
    );
  }

  // 네이티브 환경에서는 실제 광고가 표시되므로 빈 div 반환
  // (광고는 네이티브 레이어에서 오버레이로 표시됨)
  return (
    <div className={`ad-banner-space ${className}`} style={{
      width: '100%',
      height: isAdLoaded ? '50px' : '50px', // 다시 50px로 원복
      transition: 'height 0.3s ease-in-out',
      backgroundColor: isAdLoaded ? 'transparent' : '#00ff00', // 로드되지 않으면 초록색으로 표시
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      color: isAdLoaded ? 'transparent' : '#000000',
      border: isAdLoaded ? 'none' : '2px solid #000000'
    }}>
      {!isAdLoaded && (
        <div>
          🔍 AdMob 광고 로딩 중... (디버그 모드)
        </div>
      )}
      {adError && (
        <div style={{
          padding: '5px',
          fontSize: '10px',
          color: '#ff6b6b',
          textAlign: 'center',
          backgroundColor: '#ffffff'
        }}>
          광고 로드 오류: {adError}
        </div>
      )}
    </div>
  );
};

export default AdBanner;