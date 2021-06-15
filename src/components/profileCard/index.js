/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native';

export default function ProfileCard({ profile, onPress, screen }) {

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>

            <Image style={styles.image} source={{uri: 'https://picsum.photos/75'}} />

            <View>
                <Text style={styles.userName}>{profile.name}</Text>
                <Text style={styles.place}>{profile.city}</Text>
                { screen === "Home" ?
                    <Text style={styles.buttonText}>{profile.showNumber ? profile.phone : 'Aguardando'}</Text>
                    :
                    <Text style={styles.buttonText}>{'Ver Perfil'}</Text>
                }
            </View>

            { profile.requested && <Text style={styles.requested}>Solicitado</Text> }

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: .2,
        borderColor: '#E3E3E3',
        padding: 16,
        marginBottom: 16
    },
    image: {
        borderRadius: 100,
        width: 75,
        height: 75,
        marginRight: '5%'
    },
    userName: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Montserrat-SemiBold'
    },
    place: {
        fontSize: 10,
        color: '#707070',
        marginBottom: 5,
        fontFamily: 'Montserrat-Medium'
    },
    buttonText: {
        backgroundColor: '#FF4C4D',
        borderRadius: 18,
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 18,
        paddingVertical: 5,
        fontFamily: 'Montserrat-Bold'
    },
    requested: {
        position:'absolute',
        top: 5,
        right: 0,
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        backgroundColor: '#FF215D',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2
    }
})