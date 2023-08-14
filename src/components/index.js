import React from "react";
import Start_button from "./buttons/start_buttons";
import Stop_button from "./buttons/stop_button";
import { View,Text, StyleSheet } from "react-native";
import Card_user from "./cards/card_user";



export default function Display_pages({stateButtonStart, viewState_StartButton, viewState_StopButton}){
    
    return(
       <View style={styles.container}>
        { stateButtonStart === true ?  <Text style={styles.positive}>Currently listening</Text> : <Text style={styles.negative}>Not listening</Text>} 
         <View>
            <Start_button viewState_StartButton={viewState_StartButton}/>
            <Stop_button viewState_StopButton={viewState_StopButton}/>
         </View>
         <View>
            ------------------------------
         </View>
       </View>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white',
    
   },
   positive:{
      backgroundColor:'green',
      color:'black',
   },
   negative:{
      backgroundColor:'red',
      color:'black',
   },
 });
 