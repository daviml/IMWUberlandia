import React from "react";
import { View, Text, TouchableOpacity  } from 'react-native';
import ScreenTitle from "../../components/ScreenTitle";
import { Card } from './styles'




import { styles } from "../Donate/styles";

export default function Donate({ navigation }) {
  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <ScreenTitle name='Doe'/>
      </View>
      <View style={styles.mid}>
        <Text style={styles.h2}>Veja o que Deus pode fazer através da sua generosidade</Text>
        <Card >
          <Text style={styles.h2card}>Dízimos e Ofertas</Text>
          
        </Card>
        <View>
          <TouchableOpacity  style={styles.btn}>
            <Text style={styles.appButtonText}>DOE AGORA</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}