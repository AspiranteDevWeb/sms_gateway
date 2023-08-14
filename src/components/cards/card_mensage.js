import { FlatList, StyleSheet, Text, View } from "react-native";
import React, {Component, useState, useEffect} from "react";
import DATA from "../../db/db";
export default function Card_mensage(){

    const [message,setMessage]=useState()

    useEffect(()=>{
        setMessage(DATA)
    },[])

    return (
        <View style={style.container}>
            

            <FlatList
                    data={message}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=> 
                        <View style={style.containerMensage}>
                            <Text>{item.message}</Text>
                        </View>
                    }
                />
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
        height:40,
        margin:2,
    }
})


