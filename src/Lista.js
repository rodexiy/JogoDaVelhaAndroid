import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Lista() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log("Alterou valor de contador")
    })

    useEffect(() => {
        console.log("Alterou valor de contador2")
    })

    const array = useMemo(() => {
        console.log("Passou pelo useMemo")
        const itens = [...Array(contador)];
        return (
            <View>
                {
                    itens.map((item, i) => {
                        console.log("Passou dentro do map")
                        return (
                            <View key={i}>
                                <Text>
                                    Item {i + 1}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }, [contador]);

    console.log("Antes do return")
    return (
        <View style={styles.container}>
            <Text>
                contador: {contador}
            </Text>
            <Button title="Click" onPress={() => setContador(contador + 1)}></Button>
            <Text>
                contator 2: {contador2}
            </Text>
            <Button title="Click 2" onPress={() => setContador2(contador2 + 1)}></Button>

            {array}
        </View>

    )
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
  