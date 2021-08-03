import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ScreenTitle(props) {
  if (props.state != 'hidden'){
    return(
      <Text style={styles.item}>
        {props.name}
      </Text>
    )
  }
  else return null
}

const styles = StyleSheet.create({
  item:{
    
    borderColor: 'black',
    borderBottomWidth: 1,
    padding:12,

    fontSize: 20,
    
  },
})