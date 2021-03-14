import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Colors from '../../constants/Colors';

export default function NumberContainer(props) {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: 10,
    },
    text: {
        color: Colors.secondary,
        fontSize: 20,
    }
});
