import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, ScrollView
} from 'react-native';

import SlideShow from '../Home/SlideShow';
import ContentContainer from '../Home/ContentContainer';

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Trang chủ',
    header: null,
  });

  render() {
    const { userMaTV, typeProduct, gotoListPr } = this.props
    return (
      <ScrollView style={styles.container}>
        <SlideShow />
        <ContentContainer
          userMaTV={userMaTV}
          typeProduct={typeProduct}
          gotoListPr={gotoListPr}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
