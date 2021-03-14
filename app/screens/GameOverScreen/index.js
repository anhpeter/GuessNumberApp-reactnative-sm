import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import BodyText from '../../components/BodyText';
import MainButton from '../../components/MainButton';
import Screen from '../../components/Screen';
import TitleText from '../../components/TitleText';
import Colors from '../../constants/Colors';

export default function GameOverScreen(props) {
    const imageUrl = 'https://i.pinimg.com/474x/5e/f9/44/5ef9441a04ec68229e2cf361aa2a9b47.jpg';
    return (
        <Screen style={styles.screen}>
            <TitleText>Game is over!</TitleText>
            <View style={styles.imageContainer}>
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
        borderRadius:150,
        borderWidth: 3,
        maxWidth: '80%',
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
