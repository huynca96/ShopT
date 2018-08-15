import React, { Component } from 'react';
import {
  View,Text,StyleSheet,
} from 'react-native';

export default class ChangePassword extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Đổi mật khẩu',
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Change Password</Text>
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
