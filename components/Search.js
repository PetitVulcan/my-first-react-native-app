import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'


export default class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city : 'Entrez la Ville'
        }
    };
    setCity(city) {
        this.setState({
            city: city
        })
    }

    render () {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    value={this.state.city}
                    onChangeText={text => this.setCity(text)}
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
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'red',
        borderWidth: 1,
        paddingHorizontal:20,
    }
});