import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,StatusBar,
} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#005662"
           barStyle="light-content"
         />
        <Image
          style={styles.backgroundImage}
          source={require('../images/splash.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});
