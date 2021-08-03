import React from 'react';
import { View, Text, Button } from 'react-native';
import ScreenTitle from "../../components/ScreenTitle";
import { styles } from "../Settings/styles";
import ItemView from '../../components/ItemView';
import { Alert } from 'react-native';
import Linking from "react-native";

export default function Settings({ navigation }) {

  const openUrl = async (url) =>{
    const isSuported = await Linking.canOpenURL(url);
    if (isSuported){
      await Linking.openURL(url);
    }
    else{
      Alert.alert("ERROR: ${url}");
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.top} >
        <ScreenTitle name='Configurações'/>
      </View>
      <View style={styles.mid}>
        <Text style={styles.item}>
          WhatsApp
        </Text>
        <Text style={styles.item}>
          Instagram
        </Text>
        <Text style={styles.item} >
          Desenvolvedor
        </Text>
        <Text style={styles.item}>
          Versão do aplicativo
        </Text>
        <Button title="openURL" onPress= {openUrl('https://aboutreact.com')}  >

        </Button>
      </View>
    </View>
  );
}