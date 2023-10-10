import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const cards = [
    { id: 1, value: "A" },
    { id: 2, value: "A" },
    { id: 3, value: "B" },
    { id: 4, value: "B" },
    { id: 5, value: "C" },
    { id: 6, value: "C" },
    { id: 7, value: "D" },
    { id: 8, value: "D" },
    { id: 9, value: "E" },
    { id: 10, value: "E" },
    { id: 11, value: "F" },
    { id: 12, value: "F" },
    { id: 13, value: "G" },
    { id: 14, value: "G" },
    { id: 15, value: "H" },
    { id: 16, value: "H" },
    { id: 17, value: "I" },
    { id: 18, value: "I" },
    { id: 19, value: "J" },
    { id: 20, value: "J" },
    { id: 21, value: "K" },
    { id: 22, value: "K" },
    { id: 23, value: "L" },
    { id: 24, value: "L" },
    { id: 25, value: "M" },
    { id: 26, value: "M" },
    { id: 27, value: "N" },
    { id: 28, value: "N" },
    { id: 29, value: "O" },
    { id: 30, value: "O" },
    { id: 31, value: "P" },
    { id: 32, value: "P" },
    { id: 33, value: "Q" },
    { id: 34, value: "Q" },
    { id: 35, value: "R" },
    { id: 36, value: "R" },
    { id: 37, value: "S" },
    { id: 38, value: "S" },
    { id: 39, value: "T" },
    { id: 40, value: "T" },
    { id: 41, value: "U" },
    { id: 42, value: "U" },
    { id: 43, value: "V" },
    { id: 44, value: "V" },
    { id: 45, value: "W" },
    { id: 46, value: "W" },
    { id: 47, value: "X" },
    { id: 48, value: "X" },
    { id: 49, value: "Y" },
    { id: 50, value: "Y" },
];



const embaralharArray = (array) => {
    const arrayEmbaralhada = [...array];
    for (let i = arrayEmbaralhada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayEmbaralhada[i], arrayEmbaralhada[j]] = [arrayEmbaralhada[j], arrayEmbaralhada[i]];
    }
    return arrayEmbaralhada;
};

const JogoDaMemoria = ({ changeScreen , nomeJogador1, nomeJogador2}) => {
    const [board, setBoard] = useState([]);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [matches, setMatches] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [points1, setPoints1] = useState(0)
    const [points2, setPoints2] = useState(0)

    useEffect(() => {
        iniciarTabuleiro();
    }, []);

    const iniciarTabuleiro = () => {
        const embaralhadas = embaralharArray(cards);
        setBoard(embaralhadas);
        setFlippedIndexes([]);
        setMatches([]);
    };

    const givePoints = () => {
        if (currentPlayer == 1) {
            setPoints1(points1 + 1)
        }else{
            setPoints2(points2 + 1)
        }
    }

    const getCurrentPlayerName = () => {
        console.log(nomeJogador1, nomeJogador2)
        return currentPlayer === 1 ? nomeJogador1 : nomeJogador2
    }
    
    const changePlayer = () => {
        if (currentPlayer == 1) {
            setCurrentPlayer(2);
        }else {
            setCurrentPlayer(1);
        }
    }

    const handleCardPress = (index) => {
        if (flippedIndexes.length === 2 || flippedIndexes.includes(index)) {
            return;
        }

        const newFlippedIndexes = [...flippedIndexes, index];
        setFlippedIndexes(newFlippedIndexes);

        if (newFlippedIndexes.length === 2) {
            const [firstIndex, secondIndex] = newFlippedIndexes;
            if (board[firstIndex].value === board[secondIndex].value) {
                setTimeout(() => {
                    setMatches([...matches, board[firstIndex].id, board[secondIndex].id]);
                    setFlippedIndexes([]);
                    givePoints()
                }, 1000);
            } else {
                setTimeout(() => {
                    setFlippedIndexes([]);
                    changePlayer()
                }, 1000);
            }
        }
    };

    const renderCards = (card, index) => {
        const isFlipped =
            flippedIndexes.includes(index) || matches.includes(card.id);
        const cardStyle = isFlipped ? styles.cardFlipped : styles.card;

        return (
            <TouchableOpacity
                key={index}
                style={cardStyle}
                onPress={() => handleCardPress(index)}
                disabled={isFlipped || flippedIndexes.length === 2}
            >
                {isFlipped && <Text style={styles.cardText}>{card.value}</Text>}
            </TouchableOpacity>
        );
    };

    const renderTabuleiro = () => {
        return (
            <View style={styles.board}>
                {board.map((card, index) => renderCards(card, index))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jogo da Memória</Text>
            <Text>Pontos {nomeJogador1}: {points1} </Text>
            <Text>Pontos {nomeJogador2}: {points2} </Text>
            <Text>Vez de: {getCurrentPlayerName()} </Text>
            {renderTabuleiro()}
            <TouchableOpacity
                style={styles.button}
                onPress={() => changeScreen("Home")}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0FFFF",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        marginBottom: 20,
    },
    board: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    card: {
        width: 80,
        height: 80,
        backgroundColor: "#010101",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    cardFlipped: {
        width: 80,
        height: 80,
        backgroundColor: "#FFFAFA ",
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    cardText: {
        fontSize: 30,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "black",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
    },
});

export default JogoDaMemoria;