import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert
} from 'react-native';
import BlurEffect from '../utilities/BlurEffect';

import { useNavigation } from '@react-navigation/native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';

const SignIn = ({navigation}) => {
  const {height} = Dimensions.get('window');

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigateTo = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account created')
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in')
      const user = userCredential.user;
      console.log(user);
      navigateTo.navigate('Home')
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  return (
    <>
      <BlurEffect />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome to Aboga.me!</Text>
            <Text style={styles.body}>You are just one step away from legal help</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              autoCorrect={false}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={styles.registerButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 35,
    textAlign: 'center',
    color: '#353147',
  },
  body: {
    padding: 20,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: '#353147',
  },
  buttonsText: {
    fontWeight: '500',
    color: '#353147',
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff70',
    padding: 16,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
    marginHorizontal: 10,
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',

    backgroundColor: '#DFE3E630',
    marginTop: 40,
  },
  input: {
    backgroundColor: '#F7F7F7',
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: 'seagreen',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: '#FD6D6A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  registerButton: {
    backgroundColor: 'darkcyan',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: -10,
    shadowColor: '#FD6D6A',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
});