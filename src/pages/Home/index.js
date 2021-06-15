/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import Header from '../../components/header';
import ProfileCard from '../../components/profileCard';

import styleHome from './styles';
export default function Home({ navigation }) {

    const [filter, setFilter] = useState('');

    const professionals = [
        { id: 1, requested: true, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: true },
        { id: 2, requested: true, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: false },
        { id: 3, requested: true, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: true },
        { id: 4, requested: true, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: false },
        { id: 5, requested: true, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: true },
        { id: 6, requested: true, name: 'Hilder Cesar', city: 'São Paulo', phone: '11 951468651', photo: 'https://picsum.photos/75', showNumber: false },
    ]

    return (
        <ScrollView>
            <Header title="Home" onPress={() => navigation.openDrawer()} searchPress={() => navigation.navigate('Search')}/>
            <View style={styleHome.container}>
                {professionals.map((professional, i) => {
                    return <ProfileCard profile={professional} key={i} screen="Home" onPress={() => { navigation.navigate('Profile', professional ); }} />
                })}
            </View>
            {/* <View style={styleHome.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter === 'all' ? styleHome.filterTextActived : styleHome.filterText }>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter === 'today' ? styleHome.filterTextActived : styleHome.filterText }>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter === 'month' ? styleHome.filterTextActived : styleHome.filterText }>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter === 'week' ? styleHome.filterTextActived : styleHome.filterText }>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={filter === 'year' ? styleHome.filterTextActived : styleHome.filterText }>Ano</Text>
                </TouchableOpacity>
            </View> */}

        </ScrollView>
    )

}