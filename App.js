import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screen/Welcome';
import Login from './screen/Login';

export default function App() {
  return (
   <View style={styles.content}>
    {/* <Welcome /> */}
      <Login />
   </View>
  )
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
  }
});