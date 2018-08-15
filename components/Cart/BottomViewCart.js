import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TouchableOpacity
} from 'react-native';

export default class BottomViewCart extends Component {
  render() {
    const { tongGia } = this.props
    return (
      <View style={styles.bottomCart}>
        <View style={styles.tongGia}>
          <View style={{flex: 1}}>
            <Text style={{color: 'black', fontWeight: '500'}}>Tổng cộng</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: '#fe5622', fontSize: 20, fontWeight: '500',}}>{tongGia} đ</Text>
            <Text>Đã bao gồm VAT (nếu có)</Text>
          </View>
        </View>

        <View style={styles.btnThanhToan}>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.txtTT}>TIẾN HÀNH THANH TOÁN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomCart:{
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 1,
  },
  tongGia:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10
  },
  btnThanhToan:{
    backgroundColor: '#fe5622',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14
  },
  txtTT:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
