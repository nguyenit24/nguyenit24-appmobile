import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screen/Welcome';
import Login from './screen/Login';
import Register from './screen/Register';
import Flatlist from './screen/fastlist';
export default function App() {
  return (
   <View style={styles.content}>
      <Flatlist />
   </View>
  )
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
    marginTop: 20,
  }
});
