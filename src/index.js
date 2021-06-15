/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './pages/Login';
import Register from './pages/Register';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';

import SideBar from './components/sideBar';
import SearchInput from './components/searchInput';
import CustomHeader from './components/customHeader';

const HomeStack = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator drawerContent={(props) => <SideBar {...props} />}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            header: (props) => <CustomHeader title="Cadastro" {...props} />,
          }}
        />
        <Stack.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ header: (props) => <SearchInput {...props} /> }}
        />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
