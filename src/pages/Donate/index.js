import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Card } from './styles'
import * as Clipboard from 'expo-clipboard';
import { styles } from "../Donate/styles";



export default function Donate({ navigation }) {

  function qrCopy(){
    Clipboard.setString('00020126360014br.gov.bcb.pix0114+55349991912305204000053039865802BR5910----------6010UBERLANDIA62070503***630415CD')
    Alert.alert("QR CODE copiado");
  }

  function cpCopy(){
    Clipboard.setString('(34)999191230')
    Alert.alert("Código PIX copiado");
  }

  return (
    <View style={styles.container} >
      <View  >
        <Text style={styles.title}>Oferte</Text>
      </View>
      <ScrollView >
        <Text style={styles.h2}>Veja o que Deus pode fazer através da sua generosidade.</Text>
        <Text style={styles.h2card}>Dízimos e Ofertas</Text>
        <Card >
          
          <Image
            style={styles.img}
            source={require('../../assets/images/qrcode.png')}
          />
        </Card>
        <View>
          <TouchableOpacity  
            onPress={qrCopy}
            style={styles.btn}
          >
            <Text style={styles.appButtonText}>COPIAR CÓDIGO DO QR CODE</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity  
            style={styles.btn}
            onPress={cpCopy}
          >
            <Text style={styles.appButtonText}>COPIAR CHAVE PIX</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
}