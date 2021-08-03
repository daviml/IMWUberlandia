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
    padding: 24,
  },

  title: {
    paddingVertical: 30,
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold"
  }
  
})