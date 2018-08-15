import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList
} from 'react-native';

import ListItem from './ListItem';

import GridView from 'react-native-super-grid';

export default class ListChild extends Component {

  createRows(item, userMaTV){
    return(
      <ListItem
        gotoListPr={this.props.gotoListPr}
        userMaTV={userMaTV}
        maLoaiCha={this.props.maLoaiCha}
        hinhAnh={item.HinhAnh}
        maloaiSP={item.MaLoaiSP}
        tenLoaiSP={item.TenLoaiSP}/>
    );
  }

  render() {
    const { userMaTV, typeProducts } = this.props
    return (
      <View style={styles.container}>
        <GridView
          itemDimension={130}
          style={styles.gridView}
          items={typeProducts}
          renderItem={item => this.createRows(item, userMaTV)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
  },
  gridView:{
    flex: 1,
  }
});
