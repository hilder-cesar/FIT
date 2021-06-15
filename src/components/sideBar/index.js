/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function SideBar({navigation}) {

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#FF217A', '#FF4D4D']} start={{ x: 0, y: 0 }} style={styles.head}>
                <Image style={styles.image} source={{ uri: 'https://picsum.photos/75' }} />
                <View>
                    <Text style={styles.userName}> Hilder Cesar </Text>
                    <Text style={styles.place}> São Paulo</Text>
                    <Text style={styles.buttonText} onPress={ () => navigation.navigate('Profile', {id: 1}) }> Editar </Text>
                </View>
            </LinearGradient>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    head: {
        height: '25%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        borderRadius: 100,
        width: 75,
        height: 75,
        marginRight: '5%',
    },
    userName: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
    },
    place: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        marginBottom: 5,
    },
    buttonText: {
        color: '#FF275B',
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        textTransform: 'uppercase',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 3,
        borderRadius: 24,
    },
})