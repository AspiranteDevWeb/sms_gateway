import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, {Component, useState, useEffect} from "react";
import DATA from "../../db/db";

export default function Card_user({navigation}){
    
    const [usuarios,setUsuarios]=useState()
    const [mensagem,setMensagem]=useState()
    console.log(mensagem, 'o usuario e mensagens')
        
    useEffect (()=>{
        setUsuarios(DATA)
    },[])

    const openMensageScreen= (item) =>{
        setMensagem(item)
       //navigation.navigate('mensage')
    }
    
    return(
            <View style={styles.container}>
                
                <FlatList
                    data={usuarios}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=> 
                        <View 
                        key={item.id}
                         onTouchEnd={()=>openMensageScreen(item)}
                         style={styles.containerUsers}
                         >
                            
                                    <Text style={styles.cards_components}>{item.nome}</Text>
                               
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
        paddingTop: 3,
        paddingBottom:3,
        backgroundColor:'#80bfff',
        height:60,
        width:250,
        margin:2,
        marginBottom:5,
        color:'black',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:5,
        
    },
    
    cards_components:{
        color:'black',
        fontSize:22,
        height:28,
       // width:250,
       alignItems:'center',
       justifyContent:'center',
       marginBottom:2,
    }
})