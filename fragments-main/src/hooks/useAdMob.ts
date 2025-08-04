import { useState, useCallback } from 'react';
import { AdMob, RewardAdOptions } from '@capacitor-community/admob';

export const useAdMob = () => {
  const [isAdLoading, setIsAdLoading] = useState(false);
  const [isAdReady, setIsAdReady] = useState(false);

  const initialize = useCallback(async () => {
    try {
      console.log('AdMob 초기화 시작...');
      await AdMob.initialize({
        testingDevices: [],
        initializeForTesting: true, // 테스트 모드 활성화
      });
      console.log('AdMob 초기화 완료');
    } catch (error: any) {
      console.error('AdMob 초기화 실패:', error);
    }
  }, []);

  const loadRewardAd = useCallback(async () => {
    try {
      setIsAdLoading(true);
      console.log('리워드 광고 로드 시작...');
      
      const options: RewardAdOptions = {
        adId: 'ca-app-pub-3940256099942544/5224354917', // Google 테스트 광고 ID
      };

      await AdMob.prepareRewardVideoAd(options);
      setIsAdReady(true);
      console.log('리워드 광고 로드 완료');
    } catch (error: any) {
      console.error('리워드 광고 로드 실패:', error);
      setIsAdReady(false);
    } finally {
      setIsAdLoading(false);
    }
  }, []);

  const showRewardAd = useCallback(async (): Promise<boolean> => {
    try {
      console.log('리워드 광고 표시 시작...');
      
      const result = await AdMob.showRewardVideoAd();
      
      // result 자체가 보상 정보를 포함하는지 확인
      if (result) {
        console.log('리워드 광고 완료! 보상:', result);
        return true;
      } else {
        console.log('리워드 광고 사용자가 중간에 종료');
        return false;
      }
    } catch (error: any) {
      console.error('리워드 광고 표시 실패:', error);
      return false;
    } finally {
      setIsAdReady(false);
    }
  }, []);

  return {
    initialize,
    loadRewardAd,
    showRewardAd,
    isAdLoading,
    isAdReady,
  };
};