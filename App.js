import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/router/StackNavigator';

//import * as Notifications from 'expo-notifications'



export default function App() {

  


  return (
    
    
      
      <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='light-content'/>
        <StackNavigator/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
   
  },
});
