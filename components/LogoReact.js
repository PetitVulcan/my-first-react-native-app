import React from 'react';
import { Image } from 'react-native';
import style from '../Style'


export default class LogoReact extends Component {
  render() {
    return (      
        <Image
          style={style.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />   
    );
  }
}
