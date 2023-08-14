import React from 'react'
import { View } from "react-native";
import Main_Button from './index';

export default function Start_button({viewState_StartButton}){
    
    function onPress (){
        viewState_StartButton()
        
    }
    

    return(
        <View>
            <Main_Button title={'Start'} onPress={onPress}/>
        </View>
    )

}