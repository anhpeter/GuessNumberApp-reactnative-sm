import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView} from 'react-native';
import NumberContainer from '../../components/NumberContainer';
import Screen from '../../components/Screen';
import Card from '../../components/Card';
import MainButton from '../../components/MainButton';
import Colors from '../../constants/Colors';

const showLieAlert = (direction)=>{
    Alert.alert('Don\'t lie', `It's must be ${direction}!`, [
        {
            text: 'Okey',
            style: 'destructive',
        }
    ]);
};

const generateRandomNumber = (min, max, excludeList)=>{
    const randomNumber = Math.floor(Math.random()*(max-min)+min);
    if (excludeList.indexOf(randomNumber) >-1){
        generateRandomNumber(min, max, excludeList);
    }else{
        return randomNumber;
    }
};

const GuessItem = (props)=>{
    return (
        <View style={styles.scrollViewItem} >
            <Text style={{fontWeight: 'bold'}}>#{props.guessListLength - props.itemIndex}</Text>
            <Text>{props.item}</Text>
        </View> 

    );
};


export default function GameScreen(props) {
    const initialGuessValue = generateRandomNumber(1, 100, [props.userNumber]);
    const [currentGuess, setCurrentGuess] = useState(initialGuessValue);
    const [guessList, setGuessList] = useState([initialGuessValue]);

    useEffect(()=>{
        if (currentGuess === props.userNumber){
            props.onGameOver(guessList.length);
        }
    }, [currentGuess]);

    const currentHigh = useRef(99);
    const currentLow = useRef(1);
    // curren guess
    // user number
    // guess past []
    // currentHigh useRef
    // currentLow useRef


    const pressControlButtonHandler = (direction)=>{
        if (currentGuess === props.userNumber) return;
        // CHECK LIE
        if (direction === 'lower' && (currentGuess < props.userNumber)){
            showLieAlert('greater');
            return;
        } else if (direction === 'greater' && (currentGuess > props.userNumber)){
            showLieAlert('lower');
            return;
        }

        if (direction === 'lower'){
            currentHigh.current = currentGuess;
        }else if (direction === 'greater'){
            currentLow.current = currentGuess;
        }

        const nextGuess = generateRandomNumber(currentLow.current, currentHigh.current, guessList);
        setGuessList([nextGuess].concat(guessList));
        setCurrentGuess(nextGuess);
        
    };

    return (
        <Screen>
            <Text>Opponent's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonsContainer}>
                <MainButton onPress={pressControlButtonHandler.bind(this, 'lower')}
                    textStyle={styles.button}>LOWER</MainButton>
                <MainButton onPress={pressControlButtonHandler.bind(this, 'greater')}
                    textStyle={styles.button}>GREATER</MainButton>
            </Card>
            <ScrollView style={{width: '60%',}}
                contentContainerStyle={styles.scrollView}>
                {
                    guessList.map((item, index)=>{
                        return <GuessItem
                            key={index}
                            guessListLength={guessList.length}
                            itemIndex={index}
                            item={item} />;
                    })
                }
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    button: {
        fontWeight: 'bold',
        color: Colors.primary,
    },
    scrollView: {
        flexGrow: 1,
        width: '100%',

    },
    scrollViewItem: {
        backgroundColor: Colors.light,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 5
    }
});
