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
    justifyContent:'center',
    
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
    paddingLeft:24,
    fontWeight: "bold"
  },
  btn: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 12,
    margin:12,
    marginTop: 10,
    height:60,
  },
  appButtonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export const Card = styled.View`
  border-radius: 12px;
  border: 1px;
  border-color: #ced4da;
  height: 400px;
  margin: 12px;
  background-color: #e5e5e5;
`;
