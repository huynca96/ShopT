import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ImageBackground, ScrollView, Keyboard, TouchableWithoutFeedback,AsyncStorage
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import FormLogin from '../FormLogin';
import Logo from '../Logo';

export default class Login extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Đăng nhập',
    header: null,
  });

  render() {
    return (
       <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
         <View style={styles.container}>
           <Logo />
           <FormLogin logined={this.props.navigation} gotoSignup={this.props.navigation}/>
         </View>
       </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005662',
  },
});
