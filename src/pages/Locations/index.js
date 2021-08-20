import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "./styles";
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";
import * as Linking from 'expo-linking';

const initialRegion = {
  latitude: -18.9293313189801,
  longitude: -48.26525187352714,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08
};

const getCurrentPosition = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
}
getCurrentPosition()

export default function Locations({ navigation }) {
  
  function activateBrasil(){
    setUrl('https://www.google.com/maps/place/Igreja+Metodista+Wesleyana+-+Uberl%C3%A2ndia/@-18.8931983,-48.2675748,17z/data=!3m1!4b1!4m5!3m4!1s0x94a445c130f9d417:0x846c98407643766e!8m2!3d-18.8931983!4d-48.2653861?authuser=0&hl=pt-BR')
    setMarkerCoordinate({
      latitude: -18.893056282245468,
      longitude: -48.265482229833026
    })
  }

  function activateSantaRosa(){
    setUrl('https://www.google.com/maps/place/Igreja+Metodista+Wesleyana/@-18.8832129,-48.2833386,17z/data=!3m1!4b1!4m5!3m4!1s0x94a4442a84eef551:0x8b7ed5c4ee8bc4f3!8m2!3d-18.8832129!4d-48.2811499?authuser=0&hl=pt-BR')
    setMarkerCoordinate({
      latitude: -18.883181164382712,
      longitude: -48.28115049195141
    })
  }

  function activateSegismundoPereira(){
    setUrl('https://www.google.com/maps/place/Igreja+Metodista+Wesleyana/@-18.9353203,-48.2322694,17z/data=!3m1!4b1!4m5!3m4!1s0x94a44ff01063fc81:0xda4637ff205b7350!8m2!3d-18.9353203!4d-48.2300807?authuser=0&hl=pt-BR')
    setMarkerCoordinate({
      latitude: -18.9352505033562, 
      longitude: -48.2300685117078
    })
  }

  function activateBelaVista(){
    setUrl('https://www.google.com/maps/place/Igreja+Metodista+Wesleyana/@-18.9343914,-48.2469683,17z/data=!3m1!4b1!4m5!3m4!1s0x94a4455c1bd5b235:0xc5b85f408b6b5b23!8m2!3d-18.9343192!4d-48.2447658?authuser=0&hl=pt-BR')
    setMarkerCoordinate({
      latitude: -18.933749417539612, 
      longitude: -48.24477590603893
    })
  }

  const [url, setUrl] = useState('https://www.google.com/maps/place/Igreja+Metodista+Wesleyana+-+Uberl%C3%A2ndia/@-18.8931983,-48.2675748,17z/data=!3m1!4b1!4m5!3m4!1s0x94a445c130f9d417:0x846c98407643766e!8m2!3d-18.8931983!4d-48.2653861?authuser=0&hl=pt-BR')

  const [markerCoordinate, setMarkerCoordinate] = useState({
    latitude: -18.893056282245468,
    longitude: -48.265482229833026
  });

  function goto(){
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={markerCoordinate}
        />  
      </MapView>

      <TouchableOpacity style={styles.btnGo} onPress={goto} >
        <Text style={styles.btnGoTxt} >
          Ir
        </Text>
      </TouchableOpacity>
        
      <ScrollView style={styles.sv} showsVerticalScrollIndicator={false} >
        <TouchableOpacity style={styles.csv} onPress={activateBrasil} >
          <Text style={styles.csvt}>
            Bairro - Brasil, Uberlândia
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.csv} onPress={activateSantaRosa} >
          <Text style={styles.csvt}>
          Bairro - Santa Rosa, Uberlândia
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.csv} onPress={activateSegismundoPereira} >
          <Text style={styles.csvt}>
            Bairro - Segismundo Pereira, Uberlândia
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.csv} onPress={activateBelaVista} >
          <Text style={styles.csvt}>
            Bairro - Bela Vista, Uberlândia
          </Text>
        </TouchableOpacity>            
      </ScrollView>
    </View>
  );
}

 