import React from "react";
import Start_button from "./buttons/start_buttons";
import Stop_button from "./buttons/stop_button";
import { View,Text, StyleSheet } from "react-native";
import Card_user from "./cards/card_user";



export default function Display_pages({stateButtonStart, viewState_StartButton, viewState_StopButton}){
    
    return(
       <View style={styles.container}>
        { stateButtonStart === true ?  <Text style={styles.positive}>Currently listening</Text> : <Text style={styles.negative}>Not listening</Text>} 
         <View style={styles.componentButton}>
            <Start_button viewState_StartButton={viewState_StartButton}/>
            <Stop_button viewState_StopButton={viewState_StopButton}/>
         </View>
         <View>
            <Text>Since 05/07/2023 -  11:32:09</Text>
         </View>
       </View>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white',
     
     alignItems:'center',
    
   },
   positive:{
      //backgroundColor:'green',
      color:'green',
   },
   negative:{
      //backgroundColor:'red',
      color:'red',
   },
   componentButton:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:1,
      marginBottom:4,
      backgroundColor:'white'
   }
 });
 