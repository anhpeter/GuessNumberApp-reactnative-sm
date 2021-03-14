import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function MainButton(props) {
    return (
        <TouchableOpacity style={props.style}
            onPress={props.onPress}>
            <Text style={{...styles.text, ...props.textStyle}}>{props.children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
    }
});