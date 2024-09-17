import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Header = () => {
  const navigation = useNavigation();
  const logOut = async () => {
    try {
      await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
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
