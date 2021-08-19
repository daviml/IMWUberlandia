import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: (StatusBar.currentHeight),
  },
  top: {
    flex: 0.3,
  },
  mid: {
    flex: 0.7,
  },
  item:{
    
    margin: 1,
    
    flexDirection:'row',
  },
  itemText:{
    margin: 20,
    fontWeight: "bold",
    fontSize: 18,
    
  }
})

