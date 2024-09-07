import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../assets/images/arrowback.png')}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            color: 'white',
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          Sign up
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Text style={{color: 'black', paddingTop: 10}}>Name</Text>
            <TextInput
              style={{color: 'grey', paddingLeft: 1}}
              placeholder="name"
              placeholderTextColor={'grey'}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.input}>
            <Text style={{color: 'black', paddingTop: 10}}>Email</Text>
            <TextInput
              style={{color: 'grey', paddingLeft: 1}}
              placeholder="email"
              placeholderTextColor={'grey'}
              value={email}
              onChangeText={setEmail}
              secureTextEntry
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
          <View style={styles.input}>
            <Text style={{color: 'black', paddingTop: 10}}>
              Confirm Password
            </Text>
            <TextInput
              style={{color: 'grey', paddingLeft: 1}}
              placeholder="confirmPassword"
              placeholderTextColor={'grey'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'black'}}>
            You have a account? <Text style={{fontWeight: 'bold'}}>Login</Text>
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 80,
    marginTop: 50,
    width: '85%',
  },

  formContainer: {
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    marginTop: 50,
    width: '85%',
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
    marginTop: 100,
    marginBottom: 20,
    width: '85%',
    height: 65,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
