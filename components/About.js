import React from 'react';
import { Text, View, Button, Image, Linking } from 'react-native';
import style from '../Style'

export default class About extends React.Component {

    render() {
        return (
            <View>
                <View style={style.centerImg}>
                    <Image
                        style={style.tinyLogo}
                        source={require('../img/react-native-logo.png')}
                    />
                </View>
                <Text style={style.welcome}>A propos de AppMeteo</Text>
                <Text style={style.instructions}>AppMeteo est une application React Native développée par PetitVulcan</Text>
                <Text style={style.instructions}>Téléchargez d'autres applications sur :</Text>
                <Button
                    style={{'margin':20}}
                    color='#EB6123'
                    title='Ma page personnelle'
                    onPress={() => Linking.openURL('http://www.petitvulcan.com')}
                />
            </View>
        );
    }
};