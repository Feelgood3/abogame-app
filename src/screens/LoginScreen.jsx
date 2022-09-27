import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
  Dimensions,
  Alert
} from 'react-native';
import BlurEffect from '../utilities/BlurEffect';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';
// import { useAuth } from '../context/Auth';

const SignIn = ({navigation}) => {
  const {height} = Dimensions.get('window');

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const { signUp } = useAuth()
  const navigateTo = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // const user = useContext(AuthContext);

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
              keyboardType='email-address'
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