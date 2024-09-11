import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('@username');
      await AsyncStorage.removeItem('@password');
      console.log('removed credentials from storage');
      navigation.navigate('Login');
    } catch (e) {
      console.error('failed to remove credentials from storage', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Location</Text>
        <Text style={{fontWeight: 'bold'}}>Bitzen, Tanjungbali</Text>
      </View>
      <TouchableOpacity onPress={logOut}>
        <Image
          style={{width: 50, height: 50, borderRadius: 14}}
          source={require('../../../assets/images/profile.jpg')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
