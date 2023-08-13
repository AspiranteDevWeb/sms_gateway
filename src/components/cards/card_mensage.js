import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card_mensage(){
    return (
        <View style={style.container}>
            <Text> Mensage List </Text>
        </View>
    )
}

const style= StyleSheet.create({
    container:{ 
        flex:1, 
        alignItems: 'center', 
        justifyContent:'center'
    }
})