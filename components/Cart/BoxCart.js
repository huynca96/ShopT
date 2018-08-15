import React, { Component } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity
} from 'react-native';

import ItemCart from './ItemCart';
import BottomViewCart from './BottomViewCart';

export default class BoxCart extends Component {

  createRows(item, matv){
    return(
      <ItemCart
        matv={matv}
        masp={item.productCart.MaSP}
        tensp={item.productCart.TenSP}
        hinhanh={item.productCart.HinhAnh}
        gia={item.productCart.Gia}
        soluong={item.quantity}
      />
    );
  }

  render() {
    const { userMaTV, dataCart } = this.props
    const arrTotal = dataCart.map(item => item.productCart.Gia * item.quantity)
    const tongGia = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
    return (
      <View style={styles.container}>
        <FlatList
          data={dataCart}
          renderItem={({item}) => this.createRows(item, userMaTV)}
          keyExtractor={(item, index) => index.toString()}
        />

        <BottomViewCart tongGia={tongGia}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
