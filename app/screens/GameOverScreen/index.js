import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView} from 'react-native';
import BodyText from '../../components/BodyText';
import MainButton from '../../components/MainButton';
import Screen from '../../components/Screen';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/Colors';

const getResultText = (rounds) =>{
    let result;
    if (rounds > 10) result = 'You are crazy!!!';
    else if (rounds> 5) result = 'Oh, it\'s take time to guess';
    else result ='That\'s easy!';
    return result;
};

export default function GameOverScreen(props) {
    const imageUrl = 'https://i.pinimg.com/474x/5e/f9/44/5ef9441a04ec68229e2cf361aa2a9b47.jpg';
    const {width: deviceWidth} = Dimensions.get('window');
    const imageSize = deviceWidth * 0.8;
    const imageBoundaryStyle = {
        maxWidth: imageSize,
        maxHeight: imageSize,
        borderRadius: imageSize /2,
    };
    
    return (
        <ScrollView>
            <Screen style={styles.screen}>
                <TitleText>{getResultText(props.rounds)}</TitleText>
                <View style={[styles.imageContainer, imageBoundaryStyle]}>
                    <Image style={styles.image}
                        source={{uri: imageUrl}}/>
                </View>
                <BodyText>Number of round <BodyText style={styles.numberColor}>{props.rounds}</BodyText></BodyText>
                <BodyText>Number was <BodyText style={styles.numberColor}>{props.userNumber}</BodyText></BodyText>
                <MainButton onPress={props.onNewGame}
                    style={styles.button}
                    variant="contained"
                    color="primary"
                    bold >NEW GAME</MainButton>
            </Screen>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
    },
    numberColor: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderWidth: 3,
        overflow: 'hidden',
        borderColor: Colors.black,
        marginVertical: 10,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
        marginVertical: 20,
    }
});
