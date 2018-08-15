import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FormSignup from '../FormSignup';

export default class Signup extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Đăng ký',
    header: null,
  });
  render() {
    return (
      <View style={styles.container}>
        <FormSignup signuped={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005662',
  },
});
