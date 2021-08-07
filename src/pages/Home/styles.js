import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: (StatusBar.currentHeight),
  },
  top: {
    flex: 0.1,
  },
  mid: {
    flex: 0.9,
  },
  card: {
    margin:20,
  },
  cardTitle: {
    fontWeight: "bold"
  },
})

