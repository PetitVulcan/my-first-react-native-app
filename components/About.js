import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import style from '../Style'

export default class About extends React.Component {

    render() {
        return (
            <View>
                <Image
                    source={{
                        url: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={style.welcome}>A propos de AppMeteo</Text>
                <Text style={style.instructions}>AppMeteo est une application React Native développée par PetitVulcan</Text>
                <Text style={style.instructions}>Téléchargez d'autres applications sur :</Text>
                <Button
                    style={style.button}
                    color='#EB6123'
                    title='petitvulcan.com'
                    onPress={() => console.log(this.props.navigation)}
                />
            </View>
        );
    }
};