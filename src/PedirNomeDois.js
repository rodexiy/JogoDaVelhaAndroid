import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function PedirNomeDois({nomeJogador1, nomeJogador2, changeScreen, jogoAtual, setJogador1, setJogador2}) {



  const handleClick = (event) => {
    if (jogoAtual) {
        changeScreen(jogoAtual)
    }else{
        changeScreen("Home")
    }
    
  }



  return (
    <View style={styles.container}>

      <Text>Nome jogador 1: {nomeJogador1}</Text>
      <TextInput placeholder='Insira o nome' style={styles.input} onChangeText={setJogador1}></TextInput>
      <Text>Nome jogador 2: {nomeJogador2}</Text>
      <TextInput placeholder='Insira o nome' style={styles.input} onChangeText={setJogador2}></TextInput>


      <Button title="Continuar" onPress={handleClick}></Button>
      <Button title='Voltar' onPress={() => changeScreen("Home")}/>
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
