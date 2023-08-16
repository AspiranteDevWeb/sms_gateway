import { FlatList, StyleSheet, Text, View } from "react-native";
import React, {Component, useState, useEffect} from "react";
import DATA from "../../db/db";
import { Button } from "react-native-elements";
export default function Card_mensage(){

    const [message,setMessage]=useState()

    useEffect(()=>{
        setMessage(DATA)
    },[])

    return (
        <View style={style.container}>
            <View>
                <View><Text>name</Text></View>           
               
            </View>

           
        </View>
    )
}

const style= StyleSheet.create({
    container:{ 
        flex:1, 
        alignItems: 'center', 
        justifyContent:'center'
    },
    containerMensage:{
        height:60,
        margin:2,
    }
})


