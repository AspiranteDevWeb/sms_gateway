import React from 'react'
import { View,Button,StyleSheet } from 'react-native'
//import Start_button from './start_buttons'
//import Stop


export default function Main_Button ({title, onPress}){
    
  
    return(
        <View style={style.buttonStyleComponent}>
            <Button style={style.buttonStyle} title={title} onPress={onPress}/>
        </View>
    )
}

const style= StyleSheet.create({
    buttonStyleComponent:{ 
        flexDirection:'row', 
        //alignItems: 'space-between',
       justifyContent:'space-between',
        
    },
    buttonStyle:{
        borderRadius:5,
    },
   
})
