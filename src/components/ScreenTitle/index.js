import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ScreenTitle(props) {
  return(
    <View style={styles.container} >
      <Text style={styles.title} >{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingLeft: 12,
    paddingTop: 12,
  },

  title: {
    
    color: "#20232a",
    fontSize: 48,
    fontWeight: "bold"
  }
  
})