import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../Style'


export default class Meteo extends React.Component{
    render(){
        return (
            <View>
                <Text style={style.welcome}>Météo du jour</Text>
                <Text style={style.instructions}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis semper ipsum aliquet euismod</Text>
                <Text style={style.instructions}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis semper ipsum aliquet euismod</Text>
            </View>
        );
    }    
};