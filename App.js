import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Image, Platform, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './app/components/Header';
import GameOverScreen from './app/screens/GameOverScreen';
import GameScreen from './app/screens/GameScreen';
import StartScreen from './app/screens/StartScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [rounds, setRounds] = useState(0);

    useEffect(()=>{
        const backFn = ()=>{
            onReset();
            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', backFn.bind(this));
        return ()=>{
            BackHandler.removeEventListener('hardwareBackPress', backFn.bind(this));
        };
    }, []);


    const onReset = ()=>{
        setUserNumber(null);
        setRounds(0);
    };


    const onStartGame = (chosenNumber)=>{
        setUserNumber(parseInt(chosenNumber));
    };

    const onGameOver = (rounds)=>{
        setRounds(rounds);
    };
    
    let content = <StartScreen userNumber={userNumber}
        onStartGame={onStartGame} />;
    if (rounds > 0){
        content = <GameOverScreen rounds={rounds}
            userNumber={userNumber}/>;
    }else if (userNumber){
        content = <GameScreen userNumber={userNumber}
            onGameOver={onGameOver}/>;
    }
    
    return (
        <View style={styles.container}>
            <Header title="Guess a number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
