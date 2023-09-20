import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  

  const handleClick = (event) => {
    alert("Click")
  }


  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text>Nome player1: {player1}</Text>
      <TextInput placeholder='player1' style={styles.input} onChangeText={setPlayer1}></TextInput>
      <Text>Nome player2: {player2}</Text>
      <TextInput placeholder='player2' style={styles.input} onChangeText={setPlayer2}></TextInput>

      <Button title="Botao" onPress={handleClick}></Button>
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
