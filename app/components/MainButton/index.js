import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BodyText from '../BodyText';
import Colors from '../../constants/Colors';
import FontFamily from '../../constants/FontFamily';

export default function MainButton(props) {
    // color
    const {variant = 'text', color= 'black', bold = false} = props;
    const colorCode = Colors[color];
    let textStyle = {};
    let containerStyle = {};
    if (variant === 'text'){
        textStyle.color = colorCode;
    }else if (variant === 'contained'){
        textStyle.color = Colors.white;
        containerStyle.backgroundColor = colorCode;
    }else if (variant === 'outlined'){
        textStyle.color = colorCode;
        containerStyle.borderColor = colorCode;
        containerStyle.borderWidth = 1;
    }

    // font weight
    if (bold) textStyle.fontFamily = FontFamily.montserratSemiBold;
    return (
        <TouchableOpacity 
            onPress={props.onPress}>
            <View style={[containerStyle, styles.container,props.style]}>
                <BodyText style={{...textStyle,...styles.text, ...props.textStyle}}>{props.children}</BodyText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    text: { 
        textAlign: 'center'
    }
});