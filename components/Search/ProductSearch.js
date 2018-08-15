import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TouchableOpacity, Image
} from 'react-native';

import GridView from 'react-native-super-grid';

export default class ProductSearch extends Component {

  exportData(item, matv){
    this.props.navigation.navigate('InfoProduct',{item: item, matv: matv});
  }

  createRows(item){
    const { userMaTV } = this.props
    return(
      <TouchableOpacity onPress={()=>{this.exportData(item, userMaTV)}}>
        <View style={{padding: 10, backgroundColor: '#fff', borderRadius: 2}}>
          <View style={{flex: 1}}>
            <Image source={{uri: item.HinhAnh}} style={{width: null, height: 150}} />
          </View>
          <View style={{height: 70, marginVertical: 5}}>
            <Text numberOfLines={3} style={styles.name}>{item.TenSP}</Text>
          </View>
          <Text style={styles.price}>Giá: {item.Gia}đ</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { searchArray } = this.props
    return (
      <View style={styles.container}>
        <GridView
          itemDimension={130}
          style={styles.container}
          items={searchArray}
          renderItem={item => this.createRows(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name:{
    color: '#001f23',
  },
  price:{
    color: '#fe5622',
    fontWeight: '500'
  }
});
