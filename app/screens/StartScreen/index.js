import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Keyboard, Alert} from 'react-native';
import Card from '../../components/Card';
import MainButton from '../../components/MainButton';
import MyInput from '../../components/MyInput';
import NumberContainer from '../../components/NumberContainer';
import Screen from '../../components/Screen';
import Colors from '../../constants/Colors';

const ChosenNumber = (props)=>{
    return (
        <Card style={styles.chosenNumberCard}>
            <Text>You selected</Text>
            <NumberContainer style={styles.numberContainer}>{props.number}</NumberContainer>
            <MainButton onPress={props.onStartGame.bind(this, [props.number])}
                textStyle={{color: Colors.secondary, fontWeight: 'bold'}}>START</MainButton>
        </Card>
    );
};

export default function StartScreen(props) {
    const [inputNumber, setInputNumber] = useState(props.userNumber || '');
    const [chosenNumber, setChosenNumber] = useState('');

    const pressScreenHandler = ()=>{
        Keyboard.dismiss();
    };

    const showInvalidAlert = ()=>{
        Alert.alert('Invalid number', 'Number is between 1 and 99', [
            {
                text: 'Got it',
                style: 'destructive'
            }
        ]);
    };

    const changeInputTextHandler = (text)=>{
        if (text.trim()!==''){
            const number = parseInt(text);
            if (isNaN(number) || number<=0 || number > 99){
                pressResetButtonHandler();
                showInvalidAlert();
                return;
            }
        }
        setInputNumber(text.replace(/[^0-9]/, ''));
    };

    // buttons
    const pressResetButtonHandler = ()=>{
        setInputNumber('');
        setChosenNumber('');
    };

    const pressConfirmButtonHandler = ()=>{
        if (inputNumber){
            setChosenNumber(inputNumber);
            setInputNumber('');
        }else{
            showInvalidAlert();
        }
    };


    return (
        <Screen onPress={pressScreenHandler}>
            <Card style={styles.card}>
                <View style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <MyInput 
                        style={styles.input}
                        onChangeText={changeInputTextHandler}
                        value={inputNumber}
                        autoFocus
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        maxLength={2}
                        textAlign="center"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <MainButton onPress={pressResetButtonHandler}
                        textStyle={{color: Colors.secondary}}>Reset</MainButton>
                    <MainButton onPress={pressConfirmButtonHandler}
                        textStyle={{color: Colors.primary}}>Confirm</MainButton>
                </View>
            </Card>
            {
                chosenNumber !== ''
                    ? <ChosenNumber onStartGame={props.onStartGame}
                        number={chosenNumber} />
                    : null
            }
        </Screen>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    chosenNumberCard: {
        width: 200,
        maxWidth: '60%',
        alignItems: 'center',
        marginTop: 20,

    },
    buttonsContainer: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    inputContainer: {
        alignItems: 'center',
    },
    input: {
        width: 20,
    },
    numberContainer: {
        width: 50,
        alignItems: 'center'
    }
});