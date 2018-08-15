import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image  style={{width: 200, height: 200}}
                source={require('../images/logo.png')}/>
        <Text style={styles.logotext}>Chào mừng bạn đến với ShopT...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logotext:{
    fontSize: 16,
    color: 'white'
  }
});
