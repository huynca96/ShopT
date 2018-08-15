import React, { Component } from 'react';
import {
  View,StatusBar,StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './components/MainScreen';
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import Settings from './components/Account/Settings';
import ChangeInfomation from './components/Account/ChangeInfomation';
import ChangePassword from './components/Account/ChangePassword';
import Message from './components/Account/Message';
import OrderHistory from './components/Account/OrderHistory';
import Policy from './components/Account/Policy';
import Help from './components/Account/Help';
import ListProduct from './components/List/ListProduct';
import InfoProduct from './components/List/InfoProduct';
import CartScreen from './components/TabScreen/CartScreen';

const StackMain = StackNavigator({
  MainScreen: { screen: MainScreen },
  Login: {screen: Login},
  Signup: {screen: Signup},
  Settings: {screen: Settings},
  ListProduct: {screen: ListProduct},
  InfoProduct: {screen: InfoProduct},
  ChangeInfomation: {screen: ChangeInfomation},
  ChangePassword: {screen: ChangePassword},
  Message: {screen: Message},
  OrderHistory: {screen: OrderHistory},
  Policy: {screen: Policy},
  Help: {screen: Help},
});

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#005662"
           barStyle="light-content"
         />
        <StackMain />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
