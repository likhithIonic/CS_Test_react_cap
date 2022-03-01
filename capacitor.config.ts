/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.ionic.starter',
    appName: 'reactcap',
    webDir: 'build',
    plugins: {
        SplashScreen: {
            launchShowDuration: 0,
        }
    },
};

export default config;