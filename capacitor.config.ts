import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hungrybirdscafe.app',
  appName: 'Hungry Birds Cafe',
  webDir: '.',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#fff7ee'
  }
};

export default config;
