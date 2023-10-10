import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Home from './src/Home';
import JogoDaForca from './src/JogoDaForca';
import JogoDaVelha from './src/JogoDaVelha';
import PedirNomeDois from './src/PedirNomeDois';
import PedirPalavra from './src/PedirPalavra';
import JogoDaMemoria from './src/JogoDaMemoria';

export default function App() {

  const [screen, setScreen] = useState("Home"); 
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");
  const [jogoAtual, setJogoAtual] = useState("");
  const [palavra, setPalavra] = useState("");


  const setJogadores = (nome1, nome2) => {
    setJogador1(nome1)
    setJogador2(nome2)
  }

  const changeScreen = (_screen) => {
    setScreen(_screen)
  }

  const checkScreen = (_screen) => {
      return _screen === screen
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("Home") && <Home mudarNomeJogadores={setJogadores} changeScreen = {changeScreen} jogoAtual={jogoAtual} setJogoAtual={setJogoAtual}/>}
      {checkScreen("JogoDaVelha") && <JogoDaVelha changeScreen = {changeScreen} nomeJogador1 = {jogador1} nomeJogador2 = {jogador2} jogoAtual={jogoAtual}/>}
      {checkScreen("PedirPalavra") && <PedirPalavra changeScreen = {changeScreen} palavra={palavra} setPalavra={setPalavra} jogoAtual={jogoAtual}/>}
      {checkScreen("JogoDaForca") && <JogoDaForca changeScreen = {changeScreen} palavra={palavra} nomeJogador1 = {jogador1} nomeJogador2 = {jogador2} jogoAtual={jogoAtual}/>}
      {checkScreen("PedirNomeDois") && <PedirNomeDois changeScreen = {changeScreen} nomeJogador1 = {jogador1} nomeJogador2 = {jogador2} jogoAtual={jogoAtual} setJogador1={setJogador1} setJogador2={setJogador2} />}
      {checkScreen("JogoDaMemoria") && <JogoDaMemoria changeScreen = {changeScreen} nomeJogador1 = {jogador1} nomeJogador2 = {jogador2}/>}
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
