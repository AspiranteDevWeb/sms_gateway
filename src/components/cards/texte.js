import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import * as Notifications from 'expo-notifications'
import React from "react";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound:true,
      shouldSetBadge:true,
      shouldShowAlert:true,
    }),
  });
  
export default function AlowNotification(){

    async function handleCallNotification (){
        const {status}=await Notifications.getPermissionsAsync();
        if(status !== 'granted'){
          alert("voce recebera as notificacoes")
          //<lista de card/>
          return;
        }
        let token =(await Notifications.getExpoPushTokenAsync ()).data;
        console.log(token)
      }

    return(
        <View style={styles.container}>
        
            <Text>Open up App.js to start working on your app!</Text>
            <Text>OLA MUNDO !!!</Text>
            <Text>Nada facil</Text>
            <Button title='on..' onPress={handleCallNotification}/>
            <StatusBar style="auto" />
            
        </View>


    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
