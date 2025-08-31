import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  BackHandler,
  ToastAndroid,
  Platform,
  Alert
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { CONFIG } from './config';

const WEBSITE_URL = CONFIG.WEBSITE_URL;

export default function App() {
  const [canGoBack, setCanGoBack] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(WEBSITE_URL);
  const webViewRef = useRef(null);
  const exitApp = useRef(0);

  useEffect(() => {
    const backAction = () => {
      // Check if WebView can go back
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }

      // If we're at the root, handle double back press to exit
      if (currentUrl === WEBSITE_URL || !canGoBack) {
        setTimeout(() => {
          exitApp.current = 0;
        }, 2000); // Reset after 2 seconds

        if (exitApp.current === 0) {
          exitApp.current = 1;
          
          if (Platform.OS === 'android') {
            ToastAndroid.show(CONFIG.MESSAGES.EXIT_TOAST, ToastAndroid.SHORT);
          } else {
            Alert.alert('خروج', CONFIG.MESSAGES.EXIT_TOAST);
          }
          return true;
        } else if (exitApp.current === 1) {
          BackHandler.exitApp();
          return false;
        }
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [canGoBack, currentUrl]);

  const handleNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
    setCurrentUrl(navState.url);
  };

  const showToast = (message) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('اطلاع', message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        ref={webViewRef}
        source={{ uri: WEBSITE_URL }}
        style={styles.webview}
        onNavigationStateChange={handleNavigationStateChange}
        onError={(error) => {
          console.error('WebView Error:', error);
          showToast(CONFIG.MESSAGES.LOADING_ERROR);
        }}
        onHttpError={(error) => {
          console.error('HTTP Error:', error);
          showToast(CONFIG.MESSAGES.CONNECTION_ERROR);
        }}
        userAgent={CONFIG.USER_AGENT}
        {...CONFIG.WEBVIEW_SETTINGS}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  webview: {
    flex: 1,
  },
});
