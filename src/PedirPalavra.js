import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function PedirPalavra({mudarNomeJogadores, changeScreen, jogoAtual, palavra, setPalavra}) {


  const handleClick = (event) => {
    if (palavra.length < 3) {
        return alert("Insira uma palavra maior")
    }

    changeScreen(jogoAtual)
  }


  return (
    <View style={styles.container}>

      <TextInput placeholder='Insira uma palavra' style={styles.input} onChangeText={setPalavra}></TextInput>


      <Button title="Continuar" onPress={handleClick}></Button>
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
