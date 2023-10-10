import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import * as ReactDOM from 'react-dom';
import { TouchableOpacity } from 'react-native-web';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

export default function JogoDaVelha({changeScreen, nomeJogador1, nomeJogador2}) {
    const [Jogadas1, setJogadas1] = useState([]);
    const [Jogadas2, setJogadas2] = useState([]);

    const [drawArray, setDrawArray] = useState([
        "   ", "   ", "   ",
        "   ", "   ", "   ",
        "   ", "   ", "   ",
    ])

    const patterns = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],

        [1, 5, 9],
        [3, 5, 7],
    ]
    

    const [vezJogada, setVezJogada] = useState('Jogador 1')
    
    const getMarcador = () => {
        let marcador = " X ";
    
        if (vezJogada == "Jogador 2") {
            marcador = " O "
        }

        return marcador
    }

    const podeJogar = (id) => {
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

    const jogadorVenceu = (jogador) => {
        let nome = ' '

        if (jogador == "1") {
            nome = nomeJogador1
        }else {
            nome = nomeJogador2
        }

        alert(nome + " venceu!")
        changeScreen("Home")
    }

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

        if (venceu) {
            jogadorVenceu("1")
            return
        }

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

        if (venceu) {
            jogadorVenceu("2")
        }

        console.log(Jogadas1.length + Jogadas2.length)
        if (Jogadas1.length + Jogadas2.length == 9) {
            alert("Empate!")
            changeScreen("Home")
        }
    }

    const handleSelect = (id, set) => {

        if (!podeJogar(id)) {
            return
        }

        let marcador = getMarcador()
        drawArray[id] = marcador

        if (vezJogada == "Jogador 1") {
            Jogadas1.push(id)
            setVezJogada("Jogador 2")
        }else {
            Jogadas2.push(id)
            setVezJogada("Jogador 1")
        }

        verificarVencedor()

    }

    const handleClick = () => {
        if (changeScreen) {
            changeScreen("PedirNomeDois")
        }
    }

    const createButtons = (init) => {
        let buttons2 = []
        for (let i = init; i < init + 3; i++) {
            buttons2.push(
                <Button key={i} title={drawArray[i]} style={styles.botao} onPress={() => {handleSelect(i)}}>
                </Button>
              );          
        }
        return (
            <View style={styles.linha}>
              {buttons2}
            </View>
          );
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
                {createButtons(1)}
                {createButtons(4)}
                {createButtons(7)}
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

    botao: {
        width: "30px",
        height: "30px"
    }

});
  