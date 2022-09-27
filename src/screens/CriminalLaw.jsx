import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BlurEffect from '../utilities/BlurEffect';
import { styles } from './styles';

export default function CriminalLaw () {

  return (
    <View style={styles.container}>
          <Text style={styles.title}>Tip of the day:</Text>
          <Text style={styles.body}>You are not obliged to declare against yourself, your husband/wife, permanent partner, or family within fourth degree of cosanguinity, second degree of affinity, or first civil degree.</Text>
      <StatusBar style="auto" />
    </View>
  );
}