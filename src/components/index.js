import React from "react";
import Start_button from "./buttons/start_buttons";
import Stop_button from "./buttons/stop_button";
import { View,Text } from "react-native";
import Card_user from "./cards/card_user";



export default function Display_pages({stateButtonStart, viewState_StartButton, viewState_StopButton}){
    
    return(
       <View>
        { stateButtonStart === true ?  <Text>Currently listening</Text> : <Text>Not listening</Text>} 
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