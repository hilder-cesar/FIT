/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function Header({ onPress, searchPress }) {

    return (
        <View>
            <LinearGradient colors={['#FF217A', '#FF4D4D']} start={{ x: 0, y: 0 }} style={styles.container}>
                <View style={styles.rowHome} >
                    <TouchableOpacity onPress={onPress}>
                        <Image source={require('../../assets/images/menu.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerHome}> B <Text style={styles.headerTitle}> HERO </Text> </Text> 
                    <TouchableOpacity onPress={searchPress}>
                        <Image source={require('../../assets/images/magnifying-glass.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.rowProfessional}>
                    <View style={styles.professionalCounter}>
                        <View>
                            <Text style={styles.textNumber}>120966</Text>
                            <Text style={styles.textInfo}>Personal trainers</Text>
                        </View>
                        <TouchableOpacity style={styles.professionalButton} onPress={searchPress}>
                            <Text style={styles.professionalText}>BUSCAR PROFISSIONAL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40
    },
    rowHome: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    rowProfessional: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNumber: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        color: 'white'
    },
    textInfo: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        color: 'white'
    },
    professionalCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .12)',
        borderRadius: 8,
        padding: 16
    },
    professionalButton: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 24,
        marginLeft: 10
    },
    professionalText: {
        color: '#FF275B',
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase'
    },
    headerHome: {
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        textAlign: 'center'
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        textAlign: 'center'
    }
})