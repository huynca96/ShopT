import React, { Component } from 'react';
import {
  View,Text,StyleSheet,
} from 'react-native';

import CustomFlatList from '../CustomFlatList';

const DATA = [{key: 'Tin nhắn', icon: 'comment'}, {key: 'Giao diện', icon: 'themeisle'}]

export default class Settings extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Cài đặt',
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });
  render() {
    return (
      <View style={styles.container}>
        <CustomFlatList dataF={DATA}/>
        <View style={styles.version}>
          <Text style={styles.txtVersion}>1.0.0</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3
  },
  version:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  txtVersion:{
    padding: 10
  }
});
