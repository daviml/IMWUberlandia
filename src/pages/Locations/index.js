import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "./styles";
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";

const initialRegion = {
  latitude: -18.893056282245468,
  longitude: -48.265482229833026,
  latitudeDelta: 0.03,
  longitudeDelta: 0.03
};

const getCurrentPosition = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
}
getCurrentPosition()

export default function Locations({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{
          latitude: -18.893056282245468,
          longitude: -48.265482229833026}}
          title="IMW Uberlândia"
        />  
      </MapView>
        
      <ScrollView style={styles.sv} showsVerticalScrollIndicator={false} >
        <TouchableOpacity style={styles.csv}>
          <Text style={styles.csvt}>
            R. Rio de Janeiro, 975 - Brasil, Uberlândia - MG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.csv}>
          <Text style={styles.csvt}>
            R. Rio de Janeiro, 975 - Brasil, Uberlândia - MG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.csv}>
          <Text style={styles.csvt}>
            R. Rio de Janeiro, 975 - Brasil, Uberlândia - MG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.csv}>
          <Text style={styles.csvt}>
            R. Rio de Janeiro, 975 - Brasil, Uberlândia - MG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.csv}>
          <Text style={styles.csvt}>
            R. Rio de Janeiro, 975 - Brasil, Uberlândia - MG
          </Text>
        </TouchableOpacity>             
      </ScrollView>
    </View>
  );
}

 