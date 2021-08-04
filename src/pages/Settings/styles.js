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
    
    borderColor: 'black',
    borderBottomWidth: 1,
    padding:12,

    fontSize: 20,
    fontWeight: "bold",
    
  },
  itemEnd:{
    
    textAlign:'right',
    backgroundColor:'gray',
  },
})

