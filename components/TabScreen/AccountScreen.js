import React, { Component } from 'react';
import {
  View,Text,StyleSheet,
} from 'react-native';

import Profile from '../Account/Profile';

import global from '../API/global';

export default class AccountScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Tài khoản',
    header: null,
  });

  componentDidMount(){
    const { user } = this.props;
    global.onSignin(user)
  }

  render() {
    const { user, moveScreen, gotoLogin } = this.props
    return (
      <View style={styles.container}>
        <Profile
          moveScreen={moveScreen}
          user={user}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
