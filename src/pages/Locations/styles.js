import { StyleSheet,Dimensions } from 'react-native';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: (StatusBar.currentHeight),
  },
  top: {
    top:20,
    
  },
  mid: {
    
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  footer: {
    position: "absolute",
    left: 5,
    right: 5,
    bottom: 5,
    backgroundColor: "#fff",
    
    height: 56,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },
  footerText: {
    fontWeight: "bold",
    justifyContent: "center",
    
  },
  
})

