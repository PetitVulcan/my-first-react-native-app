import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import style from '../Style'

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
                    style={style.textInput}
                    value={this.state.city}
                    onChangeText={text => this.setCity(text)}
                />
            </View>
        );
    }    
};