import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  }  
});

export default class DisplayAnImage extends Component {
  render() {
    return (      
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />   
    );
  }
}
