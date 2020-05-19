import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default class About extends React.Component {

    render() {
        return (
            <View>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.welcome}>A propos de AppMeteo</Text>
                <Text style={styles.instructions}>AppMeteo est une application React Native développée par PetitVulcan</Text>
                <Text style={styles.instructions}>Téléchargez d'autres applications sur www.petitvulcan.com</Text>
                <Button
                    title='petitvulcan.com'
                    color='#EB6123'
                    onPress={() => console.log(this.props.navigation)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});