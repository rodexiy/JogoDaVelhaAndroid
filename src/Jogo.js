import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import * as ReactDOM from 'react-dom';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export default function Jogo({changeScreen}) {
    const [Jogadas1, setJogadas1] = useState([]);
    const [Jogadas2, setJogadas2] = useState([]);

    const [b1, setB1] = useState(' ');
    const [b2, setB2] = useState(' ');
    const [b3, setB3] = useState(' ');
    const [b4, setB4] = useState(' ');
    const [b5, setB5] = useState(' ');
    const [b6, setB6] = useState(' ');
    const [b7, setB7] = useState(' ');
    const [b8, setB8] = useState(' ');
    const [b9, setB9] = useState(' ');
    const [vezJogada, setVezJogada] = useState('Jogador 1')
    
    const getMarcador = () => {
        let marcador = "X";
    
        if (vezJogada == "Jogador 2") {
            marcador = "O"
        }

        return marcador
    }

    const podeJogar = (id) => {

        console.log(id)
        console.log(Jogadas1)
        console.log(Jogadas2)

        for (let i = 0; i < Jogadas1.length; i++) {
            if (Jogadas1[i] == id) {
                return false
            }
        }

        for (let i = 0; i < Jogadas2.length; i++) {
            if (Jogadas2[i] == id) {
                return false
            }
        }

        return true
    }

    const patterns = [
        [1, 2, 3]
        [4, 5, 6]
        [7, 8, 9]

        [1, 4, 7]
        [2, 5, 8]
        [3, 6, 9]

        [1, 5, 9]
        [3, 5, 7]
    ]
    
    const verificarVencedor = () => {
        let venceu = false
        for (let r = 0; r < patterns.length; r++) {
   
            let encontrou = true
            for (let n = 0; n < patterns[r].length; n++) {
                let numero = patterns[r][n]
                
                if (!Jogadas1.includes(numero)) {
                    encontrou = false
                }
            }

            if (encontrou) {
                venceu = true
            }
        }

        //chamar venceu

        venceu = false
        for (let r = 0; r < patterns.length; r++) {
   
            let encontrou = true
            for (let n = 0; n < patterns[r].length; n++) {
                let numero = patterns[r][n]
                
                if (!Jogadas2.includes(numero)) {
                    encontrou = false
                }
            }

            if (encontrou) {
                venceu = true
            }
        }

                //chamar venceu

    }

    const handleSelect = (id, set) => {

        if (!podeJogar(id)) {
            return
        }

        let marcador = getMarcador()
        set(marcador)

        if (vezJogada == "Jogador 1") {
            Jogadas1.push(id)
            setVezJogada("Jogador 2")
        }else {
            Jogadas2.push(id)
            setVezJogada("Jogador 1")
        }
    }

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
            
            <Text>
                É a vez de Jogador {vezJogada}       
            </Text>

            <Button title='Voltar' onPress={handleClick}/>

            <View style={styles.tabuleiro}>
                <View style={styles.linha}>
                    <Button id='1' title={b1} onPress={() => handleSelect("1", setB1)}/>
                    <Button id='2' title={b2} onPress={() => handleSelect("2", setB2)}/>
                    <Button id='3' title={b3} onPress={() => handleSelect("3", setB3)}/>
                </View>
                <View style={styles.linha}>
                    <Button id='4' title={b4} onPress={() => handleSelect("4", setB4)}/>
                    <Button id='5' title={b5} onPress={() => handleSelect("5", setB5)}/>
                    <Button id='6' title={b6} onPress={() => handleSelect("6", setB6)}/>
                </View>
                <View style={styles.linha}>
                    <Button id='7' title={b7} onPress={() => handleSelect("7", setB7)}/>
                    <Button id='8' title={b8} onPress={() => handleSelect("8", setB8)}/>
                    <Button id='9' title={b9} onPress={() => handleSelect("9", setB9)}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    tabuleiro: {
        flexDirection: "column",
        alignSelf: "flex-start",
        width: "100px"
    },

    linha: {
        flexDirection: "row",
    },

});
  