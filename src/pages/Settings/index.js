import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import ScreenTitle from "../../components/ScreenTitle";
import { styles } from "../Settings/styles";
import Constants from "expo-constants"
import * as Linking from 'expo-linking';

function whatsapp(){
  Linking.openURL('https://wa.me/+553499191230')
}

function instagram(){
  Linking.openURL('https://www.instagram.com/wesleyanaudi/')
}

function developer(){
  Linking.openURL('https://wa.me/+553499931020')
}

export default function Settings({ navigation }) {

  
  return (
    <View style={styles.container} >
      
      <View style={styles.top} >
        <ScreenTitle name='Configurações'/>
      </View>
      <View style={styles.mid}>
        <TouchableOpacity style={styles.item} onPress={whatsapp} >
          <Text style={styles.itemText}>
           WhatsApp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={instagram} >
          <Text style={styles.itemText}>
            Instagram
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={developer}>
          <Text style={styles.itemText}>
            Desenvolvedor
          </Text>
        </TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            Versão do aplicativo
          </Text>
          <Text style={styles.itemText}>
            {Constants.manifest.version}
          </Text>
        </View>
      </View>
    </View>
  );
}