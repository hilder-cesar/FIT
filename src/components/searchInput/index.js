/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';


export default function SearchInput({ navigation }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/images/left-arrow.png')} style={styles.backButton}/>
            </TouchableOpacity>
            <View style={styles.inputGroup}>
                <Image style={styles.icon} source={require('../../assets/images/search.png')} />
                <TextInput placeholder="Procurar" style={styles.input} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 16,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    backButton: {
        marginRight: '5%'
    },
    inputGroup:{
        position: 'relative', 
        flexGrow: 1
    },
    icon: {
        position: 'absolute', 
        bottom: 7
    },
    input: {
        borderBottomColor: '#FF217A', 
        borderBottomWidth: 1, 
        paddingVertical: 1, 
        paddingHorizontal: 25,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    }
})