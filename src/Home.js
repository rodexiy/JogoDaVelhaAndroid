import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Home({mudarNomeJogadores, changeScreen}) {

  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");



  const handleClick = (event) => {
    if (mudarNomeJogadores) {
        mudarNomeJogadores(jogador1, jogador2)
        changeScreen("Jogo")
    }
  }


  return (
    <View style={styles.container}>

      <Text>Nome jogador 1: {jogador1}</Text>
      <TextInput placeholder='Insira o nome' style={styles.input} onChangeText={setJogador1}></TextInput>
      <Text>Nome jogador 2: {jogador2}</Text>
      <TextInput placeholder='Insira o nome' style={styles.input} onChangeText={setJogador2}></TextInput>


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
