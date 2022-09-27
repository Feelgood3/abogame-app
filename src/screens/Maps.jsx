import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { key } from '@env'

export default function Maps () {

  const [origin, setOrigin] = useState({
    latitude: 4.629067,
    longitude: -74.073414,
  });

  const [destination, setDestination] = useState({
    });

  useEffect(() => {
    getLocationPermission();
  }, [])

  async function getLocationPermission() {
    let { status } = await Location.
    requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissions denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const currentLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    setOrigin(currentLocation);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mapTitle}>Find a Legal Clinic</Text>
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04}}
        >
          <Marker 
          coordinate={origin}
          draggable
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}/>
          <Marker
          title='Consultorio Juridico Universidad Nacional de Colombia'
          description='Calle 20 No 7-17 P.8 Tel: 6016042626'
          coordinate={{latitude: 4.606147, longitude: -74.071534}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>
          
          <Marker
          title='FUNDACION UNIVERSITARIA CERVANTES SAN AGUSTIN UNICERVANTES'
          description='Calle 209 No. 104-15 
          Tel: 439 9855 ext. 2008'
          coordinate={{latitude: 4.791716582071492, longitude: -74.0683215493657}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>

<Marker
          title='UNIVERSIDAD AUTONOMA DE COLOMBIA          '
          description='Calle 12c # 3 - 43 
          Tel: 341 2332'
          coordinate={{latitude: 4.598885956725555, longitude: -74.07053258739244}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>
          
          <Marker
          title='FUNDACION UNIVERSITARIA CERVANTES SAN AGUSTIN UNICERVANTES'
          description='Calle 209 No. 104-15 
          Tel: 439 9855 ext. 2008'
          coordinate={{latitude: 4.791716582071492, longitude: -74.0683215493657}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>


<Marker
          title='FUNDACION UNIVERSITARIA CERVANTES SAN AGUSTIN UNICERVANTES'
          description='Calle 209 No. 104-15 
          Tel: 439 9855 ext. 2008'
          coordinate={{latitude: 4.791716582071492, longitude: -74.0683215493657}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>


<Marker
          title='FUNDACION UNIVERSITARIA CERVANTES SAN AGUSTIN UNICERVANTES'
          description='Calle 209 No. 104-15 
          Tel: 439 9855 ext. 2008'
          coordinate={{latitude: 4.791716582071492, longitude: -74.0683215493657}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>


<Marker
          title='FUNDACION UNIVERSITARIA CERVANTES SAN AGUSTIN UNICERVANTES'
          description='Calle 209 No. 104-15 
          Tel: 439 9855 ext. 2008'
          coordinate={{latitude: 4.791716582071492, longitude: -74.0683215493657}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>



          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={key}
            strokeColor='green'
            strokeWidth={6}
            />
        </MapView>
    </View>
  );
}