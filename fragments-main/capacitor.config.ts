import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fragmentmystery.app',
  appName: 'Fragment of Mystery',
  webDir: 'build',
  server: {
    androidScheme: 'https'
    // 프로덕션 모드: Live Reload 설정 제거
  },
  plugins: {
    StatusBar: {
      style: 'light',
      overlaysWebView: false
      // backgroundColor는 App.tsx에서 동적으로 설정
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1a1a2e',
      androidSplashResourceName: 'splash',
      showSpinner: false
    },
    // AdMob: {
    //   appId: 'ca-app-pub-2644745250787584~8383662488',
    //   testingDevices: [],
    //   tagForChildDirectedTreatment: false,
    //   tagForUnderAgeOfConsent: false,
    //   maxAdContentRating: 'MA'
    // }
  }
};

export default config;
