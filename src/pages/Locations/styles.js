import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: (StatusBar.currentHeight),
  },
  top: {
    flex: 0.15,
    backgroundColor:'gray',
  },
  mid: {
    flex: 0.425,
    backgroundColor:'black',
  },
  bot: {
    flex: 0.425,
    backgroundColor:'red',
  },
  
})

