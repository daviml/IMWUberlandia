import React from "react";
import { Feather , FontAwesome5, AntDesign, FontAwesome, Ionicons, Entypo, SimpleLineIcons, Fontisto } from '@expo/vector-icons'
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ScreenTitle from "../../components/ScreenTitle";
import { styles } from "./styles";
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';
import { Card } from './styles'

export default function Home({ navigation }) {
  
  return (
    <View style={styles.container} >
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          
          <View style={styles.card}>
            <YoutubePlayer 
              height={200}
              videoId={"FShPNO0cBIg"}
            />
            <Text style={styles.cardTitle}>
              Princípios Divinos, Universais e Eternos. Pt 04
            </Text>
            <Text>
              Pastor Jorge Luiz Perim
            </Text>
          </View>

          <View style={styles.card}>
            <YoutubePlayer 
              height={200}
              videoId={"Nk44PGSX6og"}
            />
            <Text style={styles.cardTitle}>
              Princípios Divinos, Universais e Eternos. Pt 03
            </Text>
            <Text>
              Pastor Jorge Luiz Perim
            </Text>
          </View>

          <View style={styles.card}>
            <YoutubePlayer 
              height={200}
              videoId={"L3AiuTEDY0o"}
            />
            <Text style={styles.cardTitle}>
              Princípios Divinos, Universais e Eternos. Pt 02
            </Text>
            <Text>
              Pastor Jorge Luiz Perim
            </Text>
          </View>

          <View style={styles.card}>
            <YoutubePlayer 
              height={200}
              videoId={"Demi9iH7LVk"}
            />
            <Text style={styles.cardTitle}>
              Princípios Divinos, Universais e Eternos. Pt 01
            </Text>
            <Text>
              Pastor Jorge Luiz Perim
            </Text>
          </View>

          <View style={styles.card}>
            <YoutubePlayer 
              height={200}
              videoId={"PIF4NANASWU"}
            />
            <Text style={styles.cardTitle}>
              Culto da Família | DOMINGO 11/07
            </Text>
            <Text>
              Pastor Manoel Palhares Neto
            </Text>
          </View>

          <View style={styles.card}>
            <YoutubePlayer 
              height={200}
              videoId={"bYXZZIXDfOQ"}
            />
            <Text style={styles.cardTitle}>
              Culto da Família | DOMINGO 04/07
            </Text>
            <Text>
              Pastor Jorge Luiz Perim
            </Text>
          </View>

          <View style={styles.card}>
            <YoutubePlayer 
              height={200}
              videoId={"S9yh0Li_Gko"}
            />
            <Text style={styles.cardTitle}>
              Culto da Família | DOMINGO 27/06
            </Text>
            <Text>
              Pastor Edgar Zattar Dominoni Neto
            </Text>
          </View>
          
        </ScrollView>
    </View>
  );
}
