import React, { Component } from 'react';
import {
  View,Text,StyleSheet,
} from 'react-native';

export default class OrderHistory extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Lịch sử mua hàng',
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Order History</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
