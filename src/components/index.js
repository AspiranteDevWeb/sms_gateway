import React from "react";
import Start_button from "./buttons/start_buttons";
import Stop_button from "./buttons/stop_button";
import { View,Text, StyleSheet } from "react-native";
import Card_user from "./cards/card_user";



export default function Display_pages({stateButtonStart, viewState_StartButton, viewState_StopButton}){
    
    return(
       <View style={styles.container}>
         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        { stateButtonStart === true ?  <Text style={styles.positive}>Currently listening</Text> : <Text style={styles.negative}>Not listening</Text>} 
        </View>
         <View style={styles.componentButton}>
            <Start_button viewState_StartButton={viewState_StartButton}/>
            <Stop_button viewState_StopButton={viewState_StopButton}/>
         </View>
         <View style={styles.date}>
            <Text>Since 05/07/2023 -  11:32:09</Text>
         </View>
       </View>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 3,
     backgroundColor: 'white',
     justifyContent:'center',
     //alignItems:'center',
    
   },
   positive:{
      //backgroundColor:'green',
      color:'green',
      fontSize: 23,
      fontWeight:'bold',
      justifyContent:'center',
      alignItems:'center',
      
   },
   negative:{
      //backgroundColor:'red',
      color:'red',
      fontSize: 23,
      fontWeight:'bold',
      justifyContent:'center',
      alignItems:'center',
   },
   componentButton:{
      flex: 2,
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:1,
      marginBottom:2,
      backgroundColor:'white'
   },
   date:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
   }
 });
 