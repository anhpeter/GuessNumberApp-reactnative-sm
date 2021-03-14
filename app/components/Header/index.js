import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../constants/Colors';
import TitleText from '../TitleText';

export default function Header(props) {
    const isAndroid = Platform.OS === 'android';
    const statusBarHeight = StatusBar.currentHeight;
    return (
        <View style={[styles.container, {
            paddingTop: isAndroid ? statusBarHeight : 0,
            height: 60 + statusBarHeight,
        }]}>
            <TitleText style={styles.text}>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    text: {
        color: Colors.white,
    }
});