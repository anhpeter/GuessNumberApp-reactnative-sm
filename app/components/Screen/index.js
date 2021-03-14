import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function Screen(props) {
    return (
        <TouchableWithoutFeedback onPress= {props.onPress}
        >
            <View style={{...styles.container, ...props.style}}>
                {props.children}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});