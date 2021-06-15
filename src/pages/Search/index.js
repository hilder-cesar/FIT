/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image } from 'react-native';

import ProfileCard from '../../components/profileCard';

import styleSearch from './styles';

export default function Search({ navigation }) {

    const professionals = [
        { id: 1, requested: false, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: true },
        { id: 2, requested: false, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: false },
        { id: 3, requested: false, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: true },
        { id: 4, requested: false, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: false },
        { id: 5, requested: false, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: true },
        { id: 6, requested: false, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: false },
    ]

    return (
        <ScrollView>
            <View style={styleSearch.container}>
                {professionals.map((professional, i) => {
                    return <ProfileCard profile={professional} key={i} onPress={() => { navigation.navigate('Profile', professional ); }} />
                })}
            </View>
        </ScrollView>
    )
}