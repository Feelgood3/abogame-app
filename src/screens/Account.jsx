import React, { useState } from 'react';
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
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';
import { useAuth } from '../context/Auth';

const AccountScreen = () => {
  const {height} = Dimensions.get('window');
  const navigateTo = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const { currentUser } = useAuth()

  const handleLogout = ({ navigation }) => {
    signOut(auth)
    .then(() => {
        navigateTo.navigate('LoginScreen')
    }).catch(error => {
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
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.body}>Are you {currentUser.email}? If not, please sign out.</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.signInButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Log out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AccountScreen;