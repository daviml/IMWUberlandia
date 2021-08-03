import React from "react";
import { Feather , FontAwesome5, AntDesign, FontAwesome, Ionicons, Entypo, SimpleLineIcons, Fontisto } from '@expo/vector-icons'
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground, FlatList} from "react-native";
import ScreenTitle from "../../components/ScreenTitle";
import { styles } from "./styles";
import { ScrollView } from "react-native";

export default function Home({ navigation }) {

  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <ScreenTitle name='Início'/>
      </View>
      <View style={styles.mid}>
        
      </View>
      <View style={styles.bot}>
        
      </View>
      
      
    </View>
  );
}