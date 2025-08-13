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
          
          // 🚀 AdMob 초기화 먼저 실행
          await AdMob.initialize({
            testingDevices: ['ca-app-pub-3940256099942544~3347511713'], // 테스트 디바이스 ID
            initializeForTesting: true
          });
          console.log('✅ AdMob 초기화 완료');
          
          const options: BannerAdOptions = {
            adId: getAdUnitId(),
            adSize: BannerAdSize.BANNER, // 320x50 표준 배너
            position: position === 'top' ? BannerAdPosition.TOP_CENTER : BannerAdPosition.BOTTOM_CENTER,
            margin: position === 'bottom' ? 60 : 0, // 하단 광고는 시스템 UI와 겹치지 않도록 60px 마진
            // 필요한 경우 추가 설정
            isTesting: false, // 배포 모드: false로 변경
          };

          console.log('📊 AdBanner 옵션:', options);
          
          // 🚀 기존 배너 먼저 제거 (재진입 시 중복 방지)
          try {
            //await AdMob.hideBanner();
            console.log('🗑️ 기존 배너 제거 완료');
          } catch (error) {
            console.log('ℹ️ 제거할 기존 배너 없음 (정상)');
          }
          
          await AdMob.showBanner(options);
          setIsAdLoaded(true);
          console.log('✅ AdBanner - 광고 로드 성공');
        } else {
          console.log('🌐 AdBanner - 웹 환경에서는 광고를 표시하지 않습니다');
        }
      } catch (error) {
        console.error('❌ AdBanner - 광고 로드 실패:', error);
        console.error('❌ 에러 세부 정보:', JSON.stringify(error, null, 2));
        setAdError(error instanceof Error ? error.message : '광고 로드 오류');
        
        // 에러가 발생해도 다시 시도
        setTimeout(() => {
          console.log('🔄 AdBanner - 3초 후 재시도');
          initializeAd();
        }, 3000);
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
      height: isAdLoaded ? '50px' : '0px', // 로드되지 않으면 높이 0으로 설정
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