import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Image, Platform, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './app/components/Header';
import GameOverScreen from './app/screens/GameOverScreen';
import GameScreen from './app/screens/GameScreen';
import StartScreen from './app/screens/StartScreen';
import * as Font from 'expo-font';
import FontFamily from './app/constants/FontFamily';
import AppLoading from 'expo-app-loading';


const fetchFonts = ()=>{
    return Font.loadAsync({
        [FontFamily.montserratMedium]: require('./assets/fonts/Montserrat-Medium.ttf'),
        [FontFamily.montserratRegular]: require('./assets/fonts/Montserrat-Regular.ttf'),
        [FontFamily.montserratLight]: require('./assets/fonts/Montserrat-Light.ttf'),
        [FontFamily.montserratSemiBold]: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    });
};

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [userNumber, setUserNumber] = useState(null);
    const [rounds, setRounds] = useState(0);

    const onReset = ()=>{
        setUserNumber(null);
        setRounds(0);
    };


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

    if (isLoading){
        return (
            <AppLoading  
                startAsync={fetchFonts}
                onFinish={()=>{setLoading(false);}}
                onError={(e)=>{console.log(e); }}
            />
        ); 
    }



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
            userNumber={userNumber}
            onNewGame={onReset}/>;
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
