/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

import ProfileInfo from '../../components/profileInfo';
import styleProfile from './styles';

export default function Profile({ navigation, route }) {

    const profile = route.params;

    function requestProfessional() {
        alert('Solicitado')
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styleProfile.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/back-button.png')} style={styleProfile.backButton} />
                </TouchableOpacity>
                <Text style={styleProfile.title}>{profile.name}</Text>
            </View>
            <ProfileInfo profile={profile} onPress={requestProfessional}/>
        </ScrollView>
    )
}