import React from 'react';
import { View, Text, Button } from 'react-native';
import ScreenTitle from "../../components/ScreenTitle";
import { styles } from "../Settings/styles";

export default function Settings({ navigation }) {

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
      </View>
    </View>
  );
}