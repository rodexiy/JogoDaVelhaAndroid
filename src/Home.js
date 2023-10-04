import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function Home({changeScreen, setJogoAtual}) {

  const handleJogoDaVelha = () => {
    changeScreen("PedirNomeDois")
    setJogoAtual("JogoDaVelha")
  }

  const handleJogoDaForca = () => {
    changeScreen("PedirPalavra")
    setJogoAtual("JogoDaForca")
  }

  const handleJogoDaMemoria = () => {
    changeScreen("JogoDaMemoria")
    setJogoAtual("JogoDaMemoria")
  }

  return (
    <View>
        <Button title='Jogo da velha' onPress={handleJogoDaVelha}></Button>
        <Button title='Jogo da forca' onPress={handleJogoDaForca}></Button>
        <Button title='Jogo da memória' onPress={handleJogoDaMemoria}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    width: "80%",
    height: "20",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },


});
