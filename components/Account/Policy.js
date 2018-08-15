import React, { Component } from 'react';
import {
  View,Text,StyleSheet,
} from 'react-native';

export default class Policy extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Chính sách',
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Policy</Text>
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
