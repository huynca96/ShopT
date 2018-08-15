import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';

import global from '../API/global';

export default class ListParent extends Component {

  onThisChangeMaLoaiCha(item){
    global.onChangeMaLoaiCha(item.MaLoaiCha)
  }

  createRows(item){
    return(
      <TouchableOpacity onPress={()=> this.onThisChangeMaLoaiCha(item)}>
        <View style={{flex: 1, paddingVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 11}}>{item.TenLoaiCha}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.dataListParent}
          renderItem={({item}) => this.createRows(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
});
