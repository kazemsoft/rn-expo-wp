// App Configuration
// This file contains default configuration that can be overridden by .env file

export const CONFIG = {
  // Default website URL - will be overridden by WEBSITE_URL in .env
  WEBSITE_URL: process.env.WEBSITE_URL || 'https://wordpress.com',
  
  // App name - will be overridden by APP_NAME in .env
  APP_NAME: process.env.APP_NAME || 'WordPress WebView App',
  
  // WebView settings
  WEBVIEW_SETTINGS: {
    javaScriptEnabled: true,
    domStorageEnabled: true,
    startInLoadingState: true,
    scalesPageToFit: true,
    mixedContentMode: 'compatibility',
    allowsBackForwardNavigationGestures: true,
  },
  
  // User Agent for WebView
  USER_AGENT: 'Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36',
  
  // Toast messages in Persian
  MESSAGES: {
    EXIT_TOAST: 'برای خروج دوباره کلیک کنید',
    LOADING_ERROR: 'خطا در بارگذاری صفحه',
    CONNECTION_ERROR: 'خطا در اتصال به سرور',
  }
};

export default CONFIG;
