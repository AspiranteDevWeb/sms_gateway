import React,{useState} from "react";

import Display_pages from "../components/index";
import {StyleSheet, Text, View, TouchableOpacity, Float,SafeAreaView} from 'react-native'
import Card_user from "../components/cards/card_user"

export default function Main_page(){

    const [stateButtonStart,setStateButtonStart] = useState(false)
    

    function viewState_StartButton(){
        setStateButtonStart(true)
    }

    function viewState_StopButton(){
        setStateButtonStart(false)
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Display_pages 
                    stateButtonStart={stateButtonStart}
                    viewState_StartButton={viewState_StartButton}
                    viewState_StopButton={viewState_StopButton}
                />
            </View>

            <View style={styles.body}>
               {stateButtonStart && <Card_user/>}
            </View>
        </View>
       
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: 'black',
      //flexDirection:'column',
      //alignItems:'center',
      //justifyContent:'space-between'
     
    },
    header:{
        flex: 1,
       //backgroundColor:'blue',
       //alignItems: 'center'
       //marginTop:0,
    },
    body:{
        flex: 3,
       backgroundColor:'green',
       alignItems:'center'
       //marginTop: 20,
       
    },

  });