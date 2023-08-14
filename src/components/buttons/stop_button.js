import React from "react";
import Main_Button from "./index.js";
import { View } from "react-native";


export default function Stop_button ({viewState_StopButton}){
      
    function onPress (){

        viewState_StopButton()
       
    }
    

    return(
        <View>
            <Main_Button title={'Stop'} onPress={onPress}/>
        </View>
    )
}