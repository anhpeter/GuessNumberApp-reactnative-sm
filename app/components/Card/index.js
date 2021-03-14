import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default function Card(props) {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        elevation: 3,
        borderRadius: 5,
    },
});