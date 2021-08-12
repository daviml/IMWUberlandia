import { StyleSheet,Dimensions } from 'react-native';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: (StatusBar.currentHeight),
    
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  sv: {    
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 0,
    height: 130,
    
  },

  csv:{
    backgroundColor: "#fff",
    height: 50,
    margin: 1,
    elevation: 2,
    borderRadius:5,
    justifyContent:'center',
  },

  csvt:{
    margin: 20,
    fontWeight: "bold"
  }
  
})

