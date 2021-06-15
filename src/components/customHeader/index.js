/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


export default function CustomHeader({ navigation, title }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/images/left-arrow.png')} style={styles.backButton}/>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        width: '100%'
    },
    backButton: {
        marginRight: '5%'
    },
    title:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 18
    }
})