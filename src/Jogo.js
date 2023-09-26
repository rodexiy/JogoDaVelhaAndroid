import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button } from 'react-native';


export default function Jogo({changeScreen}) {

    const handleClick = () => {
        if (changeScreen) {
            changeScreen("Home")
        }
    }

    return (
        <View>
            <Text>
                Jogo       
            </Text>
            
            <Button title='Voltar' onPress={handleClick}/>
        </View>
    )
}