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
        <SafeAreaView>
            <View>
                <Display_pages 
                    stateButtonStart={stateButtonStart}
                    viewState_StartButton={viewState_StartButton}
                    viewState_StopButton={viewState_StopButton}
                />
            </View>

            <View>
               {stateButtonStart && <Card_user/>}
            </View>
        </SafeAreaView>
       
    )
}