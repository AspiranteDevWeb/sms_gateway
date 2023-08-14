import React from 'react'
import { View,Button } from 'react-native'
//import Start_button from './start_buttons'
//import Stop


export default function Main_Button ({title, onPress}){
    
  
    return(
        <View>
            <Button title={title} onPress={onPress}/>
        </View>
    )
}