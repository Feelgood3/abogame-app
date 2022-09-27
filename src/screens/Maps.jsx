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
          title='FUNDACION UNIVERSITARIA AGRARIA DE COLOMBIA UNIAGRARIA          '
          description='Carrera 54a No. 173-04 
          Cel:3202306645'
          coordinate={{latitude: 4.755770950746533, longitude: -74.05282294506428}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>


<Marker
          title='FUNDACION UNIVERSITARIA DEL AREA ANDINA          '
          description='Calle 70 No. 12 - 89 
          Cel: 317 671 88 55'
          coordinate={{latitude: 4.655997493894827, longitude: -74.06177430611676}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>


<Marker
          title='INSTITUCION UNIVERSITARIA DE COLOMBIA          '
          description='CARRERA 13 NO. 35 - 99 
          Tel: 4672827'
          coordinate={{latitude: 4.624289327297707, longitude: -74.06787699721372}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>


<Marker
          title='PONTIFICIA UNIVERSIDAD JAVERIANA          '
          description='Calle 34 No 15 -61 
          Tel: 3208320 ext 5236'
          coordinate={{latitude: 4.623120118420933, longitude: -74.07105164191766}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>

<Marker
          title='UNIVERSIDAD LA GRAN COLOMBIA          '
          description='Calle 12b No. 8-55  
          Tel: 3276999 ext. 2604'
          coordinate={{latitude: 4.600848111074194, longitude: -74.07573677451282}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>

<Marker
          title='UNIVERSIDAD MILITAR NUEVA GRANADA          '
          description='Carrera 11 No. 101-80  
          Tel: 650 00 00 ext 1239'
          coordinate={{latitude: 4.683869112688408, longitude: -74.04183230273622}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>

<Marker
          title='UNIVERSIDAD DEL ROSARIO          '
          description='CARRERA 5 # 15- 37  
          Tel: 29702 00 EXT. 4271'
          coordinate={{latitude: 4.601428676877127, longitude: -74.0718219521407}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>
<Marker
          title='UNIVERSIDAD LIBRE          '
          description='Carrera 5 #8-47  
          Tel: 3821000 ext 1086'
          coordinate={{latitude: 4.594979380638797, longitude: -74.07489420273623}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>

<Marker
          title='UNIVERSIDAD DE LOS ANDES          '
          description='direccioncj@uniandes.Edu.co (Sin sede actualmente) 
          Tel: 3394949 ext 2838'
          coordinate={{latitude: 4.601568718410089, longitude: -74.06629107588464}}
          onPress={(direction) => setDestination(direction.nativeEvent.coordinate)}/>

<Marker
          title='UNIVERSIDAD EXTERNADO DE COLOMBIA          '
          description='Calle 12 # 0-71  
          Tel: 344 25 00 ext 1190'
          coordinate={{latitude: 4.595655627651184, longitude: -74.06925331113027}}
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