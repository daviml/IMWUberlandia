import { StyleSheet,Dimensions } from 'react-native';
import { StatusBar } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

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

  btnGo: {    
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 135,
    height: 50,
    width: 75,
    backgroundColor: "#009688",
    height: 50,
    margin: 1,
    elevation: 4,
    borderRadius:5,
    justifyContent:'center',
    marginLeft:295
  },

  btnGoTxt:{
    margin: 30,
    fontWeight: "bold",
    color:"white",
    fontSize:20
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

