import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: (StatusBar.currentHeight),
    
  },
  top: {
    flex: 0,
    paddingBottom:40,
  },
  mid: {
    flex: 1,
    
  },
  h2: {
    color: "gray",
    fontSize: 20,
    paddingTop:0,
    paddingBottom:0,
    paddingLeft:12,
    paddingRight:12,
   
    paddingBottom:24,
    
  },
  h2card: {
    color: "#343a40",
    fontSize: 20,
    paddingTop:12,
    paddingLeft:16,
    fontWeight: "bold"
  },
  btn: {
    elevation: 4,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 14,
    margin:12,
    marginTop: 10,
    marginBottom:0,
    height:60,
  },
  appButtonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  title: {
    paddingTop:0,
    paddingBottom:0,
    paddingLeft:12,
    paddingRight:12,
    color: "#20232a",
    fontSize: 48,
    fontWeight: "bold",
    paddingTop: 12,
  }
})

export const Card = styled.View`
  elevation: 4;
  border-radius: 12px;
  border: 1px;
  border-color: #ced4da;
  height: 400px;
  margin: 12px;
  background-color: #e5e5e5;
`;
