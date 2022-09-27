import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Alert
} from 'react-native';
import BlurAccount from '../utilities/BlurAccount';
import { styles } from './stylesAccount';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseconfig';
import { useAuth } from '../context/Auth';
import * as Linking from 'expo-linking';

const AccountScreen = () => {
  const {height} = Dimensions.get('window');
  const navigateTo = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const { currentUser } = useAuth()

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
    }).catch(error => {
        console.log(error)
        Alert.alert(error.message)
    })
  }

  return (
    <>
      <BlurAccount />
      <View style={styles.appContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.body}>Are you {currentUser.email}? If not, please sign out.</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.kbButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Sign out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contacting}>
            <Text style={styles.contactBody}>
              Do you have any feedback about our app?  
            </Text> 
            <TouchableOpacity onPress={() => Linking.openURL('mailto:sergiomoncadao@gmail.com.com?subject=Aboga.me feedback form&body=Hello, my name is __________ and I want to make some feedback about Aboga.me')}>
              <Text style={styles.email}>
              contact us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AccountScreen;