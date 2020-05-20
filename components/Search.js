import React from 'react';
import { View, TextInput, Button } from 'react-native'
import style from '../Style'
import { StackNavigator} from 'react-navigation'

class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city : ''
        }
    };
    setCity(city) {
        this.setState({
            city: city
        })
    }

    render () {
        return (
            <View style={style.search}>
                <TextInput
                    style={style.textInput}
                    placeholder='Lille'
                    value={this.state.city}
                    onChangeText={text => this.setCity(text)}
                />
                <Button
                    style={{'margin':20}}
                    color='#EB6123'
                    title='rechercher'
                    onPress={() => Linking.openURL('http://www.petitvulcan.com')}
                />
            </View>
        );
    }    
};

export default StackNavigator({
    Search:{
        screen : Search
    },
    Result: {
        screen: Search
    }
})