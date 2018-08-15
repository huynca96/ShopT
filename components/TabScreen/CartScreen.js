import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TouchableOpacity,AsyncStorage
} from 'react-native';

import BoxCart from '../Cart/BoxCart';
import link from '../API/link';

export default class CartScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Giỏ hàng',
    header: null,
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });

  render() {
    const { userMaTV, cartArray } = this.props
    return (
      <View style={styles.container}>
        <BoxCart dataCart={cartArray} userMaTV={userMaTV}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCart:{
    fontSize: 24,
    color: '#fe5622',
    fontWeight: '500'
  }
});
