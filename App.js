import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/router/StackNavigator';

//import * as Notifications from 'expo-notifications'



export default function App() {

  


  return (
    
    
      
      <StackNavigator/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
