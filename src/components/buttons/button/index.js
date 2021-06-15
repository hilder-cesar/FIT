/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Button({ onPress, title }) {
    return (
        <TouchableOpacity style={styles.opacity} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    opacity: {
        width: '100%'
    },
    button: {
        backgroundColor: '#FF4A4E',
        paddingVertical: 5,
        paddingHorizontal: 17,
        borderRadius: 12
    },
    buttonText: {
        fontSize: 10,
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase'
    }
})