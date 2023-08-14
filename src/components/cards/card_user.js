import { FlatList, StyleSheet, Text, View } from "react-native";
import React, {Component, useState, useEffect} from "react";

export default function Card_user(){
    
    const [usuarios,setUsuarios]=useState([
                {id:2543 ,nome: 'Person 1'},
                {id: 475, nome: 'Person 7'},
                {id:7967, nome: 'Person 3'},
                {id:475, nome: 'Person 3'},
                {id: 475, nome: 'Person 2'}
     ] )
        
    
    
    return(
            <View style={styles.container}>
                <Text>Users List</Text>
                <FlatList
                    data={usuarios}
                    renderItem={({item})=> 
                        <View style={styles.containerUsers}>
                            <Text>{item.nome}</Text>
                        </View>
                    }
                />
            </View>
        )
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerUsers:{
        backgroundColor:'white',
        height:40,
        margin:2,
        color:'black',
        justifyContent: 'center',
        alignItems:'center'
    }
})