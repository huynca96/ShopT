import React, { Component } from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';

import { SearchBar } from 'react-native-elements'

import link from '../API/link'
import global from '../API/global'

export default class BoxSearch extends Component {

  constructor(props) {
    super(props);
    this.state={
      textSearch: '',
    }
  }

  onThisSearch(searchArray){
    global.onSearch(searchArray)
  }

  onSearchProduct(key){
    fetch(`${link}search.php?key=${key}`, { method:'POST',body: null })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData !== "Error"){
        this.onThisSearch(responseData)
      }
    })
    .catch((error)=>{
      console.error(error);
    })
    .done()
  }

  render() {
    return (
      <SearchBar
        lightTheme
        showLoading={true}
        platform="android"
        onChangeText={(textSearch) => this.setState({textSearch})}
        onClear={(textSearch) => this.setState({textSearch})}
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Tìm kiếm...'
        containerStyle={styles.search}
        onSubmitEditing={()=>{this.onSearchProduct(this.state.textSearch)}}
      />
    );
  }
}

const styles = StyleSheet.create({
  search:{
    backgroundColor: "#005662",
    marginTop: -1
  }
});
