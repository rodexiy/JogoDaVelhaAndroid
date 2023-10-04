import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight, Image } from "react-native";

export default function JogoDaForca({ changeScreen , palavra}) {


  const replaceAt = (str, index, replacement) => {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
  }


  const [usedLetters, setUsedLetters] = useState([]);
  const [word, setWord] = useState(palavra)
  const [mostrarPalavra, setMotrarPalavra] = useState("")
  const [imgRender, setimgRender] = useState(require('/assets/JogoDaForca/0.png'))
  const [erros, setErros] = useState(0)

  const checkWin = () => {
    
    if (word == "") {
      return
    }
    if (word.toUpperCase() == mostrarPalavra.toUpperCase()) {
      alert("Acertou!")

      changeScreen("Home")
    }
  }

  useEffect(function () {
    setTimeout(function () {
      checkWin()
    }, 250)

    let novaPalavra = ""
    for (let i = 0; i < palavra.length; i++) {

        novaPalavra+= "□"
    }
    if (mostrarPalavra == "") {
        setMotrarPalavra(novaPalavra) 
    }
  })

  const errou = () => {
    setErros(erros + 1)

    setimgRender(require(`/assets/JogoDaForca/${erros}.png`))
    if (erros == 6) {
      alert("Perdeu")
      changeScreen("Home")
    }
  }

  const handleKeyboard = (letter) => {
    setUsedLetters([...usedLetters, letter])
    let novaPalavra = mostrarPalavra
    let pos = 0

    if (!checkIfHas(word.toUpperCase(), letter)) {
      errou()
    }

    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i).toUpperCase() == letter) {
        console.log(letter)
        novaPalavra = replaceAt(novaPalavra, pos, letter)
        console.log(novaPalavra)
      }
      pos++;
    }
    setMotrarPalavra(novaPalavra)

    checkWin()
  }

  const checkIfHas = (t, x) => {
    let has = false

    for (let i = 0; i < t.length; i++) {
      let y = t[i]

      if (y == x) {
        has = true
        break
      }
    }

    return has
  }

  const renderWord = () => {
    return (
      <View>
        <Text style={styles.mostrarPalavra}>{mostrarPalavra}</Text>
      </View>
    )
  }

  const renderKeyBoard = () => {
    const keysRows = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      [" ", "Z", "X", "C", "V", "B", "N", "M", " "]]
    return (
      <View style={styles.keyboard}>
      
        {keysRows.map((keys, rowIndex) => {
          return (
            <View key={rowIndex} style={styles.keyboardRow}>
              {keys.map((letter, index) => {
                if (letter == " ") {
                  return <Text key={index}> </Text>
                } else if (usedLetters.indexOf(letter) != -1) {

                  let inclui = false
                  for (let i = 0; i < word.length; i++) {
                    let letra = word.charAt(i)

                    if (letra.toLowerCase() == letter.toLocaleLowerCase()) {
                      inclui = true
                      break
                    }
                  }

                  if (inclui) {
                    return <View style={styles.keyItem} key={index}><Text key={index} style={styles.rightKey}>{letter}</Text></View>
                  } else {
                    return <View style={styles.keyItem} key={index}><Text key={index} style={styles.usedKey}>{letter}</Text></View>
                  }


                } else {
                  return <TouchableHighlight
                    onPress={() => handleKeyboard(letter)} style={styles.keyItem} key={index}><Text style={styles.letter}>{letter}</Text></TouchableHighlight>
                }
              })}
            </View>
          )
        })}
      </View>
    )
  }


  return (
    <View>
      <Image style={styles.forca} source={imgRender} />
      {renderWord()}
      {renderKeyBoard()}
    </View>
  )
}


const styles = StyleSheet.create({
  wordLine: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  forca: {
    width: 300,
    height: 300
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboard: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: "column"
  },
  keyboardRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,

  },
  usedKey: {
    color: "grey",
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    margin: 15
  },
  rightKey: {
    backgroundColor: "green",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15

  },
  letter: {
    color: "black",
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    margin: 15
  },

  mostrarPalavra: {
    textAlign: 'center',
    fontSize: 60
  }

});