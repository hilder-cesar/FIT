/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../../components/buttons/button';


export default function ProfileInfo({ profile, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.profileRow}>
                <Image style={styles.image} source={{ uri: 'https://picsum.photos/75' }} />
                <View>
                    <View style={styles.profileInfo}>
                        <View style={{ marginRight: 29 }}>
                            <Text style={styles.infoTitle}>124</Text>
                            <Text style={styles.infoDesc}>Atendimentos</Text>
                        </View>
                        <View>
                            <Text style={styles.infoTitle}>Heart</Text>
                            <Text style={styles.infoDesc}>Save</Text>
                        </View>
                    </View>
                    <View style={styles.profileRequestRow}>
                        <View style={{ marginHorizontal: 26 }}>
                            <Text style={styles.profilePremium}>Premium</Text>
                        </View>
                        <View>
                            <Button onPress={onPress} title="Solicitar" />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ paddingVertical: 16 }}>
                <Text style={styles.profileCity}>{profile.city}</Text>
                <Text style={styles.profileText}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 4, 
        padding: 16
    },
    profileRow: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    profileInfo: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        marginBottom: 13 
    },
    infoTitle: {
        color: '#EF3D55', 
        fontFamily: 'Montserrat-Bold', 
        textAlign: 'center', 
        fontSize: 17
    },
    infoDesc: { 
        textAlign: 'center', 
        fontFamily: 'Montserrat-Regular', 
        fontSize: 9, 
        textTransform: 'uppercase' 
    },
    profileRequestRow: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    profilePremium: {
        color: '#EF3D55', 
        fontFamily: 'Montserrat-Regular', 
        textTransform: 'uppercase', 
        textAlign: 'center', 
        fontSize: 14
    },
    profileCity: {
        fontSize: 12, 
        marginBottom: 5, 
        fontFamily: 'Montserrat-Regular'
    },
    profileText: {
        fontSize: 12, 
        color: '#76848B', 
        fontFamily: 'Montserrat-Regular'
    },
    image: {
        borderRadius: 100,
        width: 80,
        height: 80,
        borderWidth: 2,
        borderColor: '#FF4D4D'
    },
})