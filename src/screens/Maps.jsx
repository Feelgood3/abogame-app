import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import MapView from 'react-native-maps';

export default function Maps () {

  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
    </View>
  );
}