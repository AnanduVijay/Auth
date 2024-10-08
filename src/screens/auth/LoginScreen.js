import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [user, SetUser] = useState();

  const handleLogin = async (username, password) => {
    setIsloading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        username,
        password,
      );
      SetUser(userCredential.user);
      console.log('credential details', userCredential.user);
      navigation.replace('Main', {user: user});
    } catch (e) {
      setIsloading(false);
      console.error('Login error', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Text style={{color: 'white', fontSize: 20}}>Company Logo</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text
          style={{
            color: 'black',
            marginBottom: 50,
            fontSize: 25,
          }}>
          Login
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Text style={{color: 'black', paddingTop: 10}}>Email</Text>
            <TextInput
              style={{color: 'grey', paddingLeft: 1}}
              placeholder="username"
              placeholderTextColor={'grey'}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.input}>
            <Text style={{color: 'black', paddingTop: 10}}>Password</Text>
            <TextInput
              style={{color: 'grey', paddingLeft: 1}}
              placeholder="password"
              placeholderTextColor={'grey'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLogin(username, password)}>
          {isLoading ? (
            <ActivityIndicator color={'#fff'} size={'small'} />
          ) : (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              Login
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={{color: 'black'}}>
            Don't have an account?{' '}
            <Text style={{fontWeight: 'bold'}}>sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#212121',
    padding: 5,
  },
  formContainer: {
    flex: 2,
    width: '100%',
    borderTopLeftRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    width: '80%',
    gap: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    color: 'grey',
    paddingLeft: 15,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 20,
    marginBottom: 130,
    width: '80%',
    height: 65,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
