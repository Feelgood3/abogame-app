import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BlurEffect from '../utilities/BlurEffect';
import { styles } from './styles';

export default function Home () {
  const NavigateTo = useNavigation();

  return (
    <View style={styles.container}>
          <Text style={styles.kbTitle}>How can we assist?</Text>
          <TouchableOpacity onPress={() => NavigateTo.navigate('Constitutional Rights')} style={styles.kbButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Constitutional Rights</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NavigateTo.navigate('Civil Law')} style={styles.kbButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Civil Law</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NavigateTo.navigate('Criminal Law')} style={styles.kbButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Criminal Law</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NavigateTo.navigate('Work Law')} style={styles.kbButton}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Work Law</Text>
            </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}