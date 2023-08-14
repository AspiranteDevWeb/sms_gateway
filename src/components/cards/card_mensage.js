import { FlatList, StyleSheet, Text, View } from "react-native";
import React, {Component, useState, useEffect} from "react";

export default function Card_mensage(){

    const [message,setMessage]=useState([
        {id:0 ,message: 'asdfghj', time:'',date:''},
        {id: 1, nome: 'sdrtfgh',time:'',date:''},
        {id:2, nome: 'swvdybcfvgb',time:'',date:''},
        {id:3, nome: 'kjhfdxgbfa',time:'',date:''},
        {id:4, nome: 'sdrtfgh',time:'',date:''},
        {id:5, nome: 'swvdybcfvgb',time:'',date:''},
        {id:6, nome: 'kjhfdxgbfa',time:'',date:''}
] )


    return (
        <View style={style.container}>
            

            <FlatList
                    data={message}
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


