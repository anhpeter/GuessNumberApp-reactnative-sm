import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import FontFamily from '../../constants/FontFamily';

export default function BodyText(props) {
    return (
        <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: FontFamily.montserratMedium,
    }
});

