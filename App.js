import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import About from './components/About';
import Meteo from './components/Meteo';
import Search from './components/Search';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './Style'

function HomeScreen() {
    return (
        <View style={style.container}>
            <Home />
        </View>
    );
}
function AboutScreen() {
    return (
        <View style={style.container}>
            <About />
        </View>
    );
}
function MeteoScreen() {
    return (
        <View style={style.container}>
            <Meteo />
        </View>
    );
}
function SearchScreen() {
    return (
        <View>
            <Search />
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting="true"
            activeColor="#f0edf6"
            inactiveColor="#464646"
            barStyle={{ backgroundColor: '#EB6123' }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Meteo"
                component={MeteoScreen}
                options={{
                    tabBarLabel: 'Météo',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="weather-partly-cloudy" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    ),
                }}
            />            
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="information-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>

    );
};