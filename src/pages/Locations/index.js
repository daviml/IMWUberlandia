import React from "react";
import { View, Text, Button } from 'react-native';
import ScreenTitle from "../../components/ScreenTitle";
import { styles } from "./styles";

export default function Locations({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenTitle name='Onde'/>
    </View>
    
  );
}