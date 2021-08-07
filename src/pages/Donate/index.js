import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ScreenTitle from "../../components/ScreenTitle";
import { Card } from './styles'




import { styles } from "../Donate/styles";

export default function Donate({ navigation }) {
  return (
    <View style={styles.container} >
      <View  >
        <Text style={styles.title}>Oferte</Text>
      </View>
      <ScrollView >
        <Text style={styles.h2}>Veja o que Deus pode fazer através da sua generosidade.</Text>
        <Card >
          <Text style={styles.h2card}>Dízimos e Ofertas</Text>
          
        </Card>
        <View>
          <TouchableOpacity  style={styles.btn}>
            <Text style={styles.appButtonText}>COPIAR CÓDIGO DO QR CODE</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity  style={styles.btn}>
            <Text style={styles.appButtonText}>COPIAR CHAVE PIX</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
}