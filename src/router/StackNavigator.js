import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import Card_user from '../components/cards/card_user'
import Card_mensage from '../components/cards/card_mensage'

import Main_page from '../pages/main_page'



const StackNavigator = ()=>{

    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Users" component={Main_page}/>
                <Stack.Screen name="mensage" component={Card_mensage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const style = StyleSheet.create({})