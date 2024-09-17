import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const LoadingScreen = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const checkStarerShown = async () => {
    try {
      const value = await AsyncStorage.getItem('@getStartedDisplayed');
      return value !== null && value === 'true';
    } catch (error) {
      console.error('Error reading starter status:', error);
      return false;
    }
  };

  const checkOnboardingAndRedirect = async () => {
    if (!initializing) {
      if (!user) {
        navigation.replace('Login');
      } else {
        const hasSeenStarter = await checkStarerShown();
        if (!hasSeenStarter) {
          navigation.replace('Starting');
        } else {
          navigation.replace('Main');
        }
      }
    }
  };
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (!initializing) {
      checkOnboardingAndRedirect();
    }
  }, [initializing, user]);

  if (initializing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'#C67C4E'} />
      </View>
    );
  }
  return null;
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
