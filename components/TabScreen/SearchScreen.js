import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Keyboard,TouchableWithoutFeedback
} from 'react-native';

import BoxSearch from '../Search/BoxSearch';
import ProductSearch from '../Search/ProductSearch';

import global from '../API/global'

export default class SearchScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
      searchArray: []
    }
    global.onSearch = this.onSearch.bind(this)
  }

  onSearch(searchArray){
    this.setState({searchArray})
  }

  render() {
    const { searchArray } = this.state
    const { userMaTV } = this.props
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <BoxSearch />
          <ProductSearch searchArray={searchArray} userMaTV={userMaTV}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
