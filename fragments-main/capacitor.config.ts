import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fragmentmystery.app',
  appName: 'Fragment of Mystery',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
