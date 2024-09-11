import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    checkStarerShown();
  }, []);

  const checkStarerShown = async () => {
    const value = await AsyncStorage.getItem('@getStartedDisplayed');
    if (value === 'true') {
      checkLoginStatus();
    } else {
      navigation.replace('Starting');
    }
  };
  checkStarerShown();
  const checkLoginStatus = async () => {
    const username = await AsyncStorage.getItem('@username');
    const password = await AsyncStorage.getItem('@password');
    if (username && password) {
      navigation.replace('Main');
    } else {
      navigation.replace('Login');
    }
  };

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'large'} color={'#C67C4E'} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
