import React from 'react';
import { View, StyleSheet, Text, TextInput} from 'react-native';
import Colors from '../../constants/Colors';

export default function MyInput(props) {
    return (
        <View style={{...styles.container, ...props.style}}>
            <TextInput
                selectionColor={Colors.black}
                {...props}
                style={{}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: Colors.black,
        borderBottomWidth: 1,
        
    }
});