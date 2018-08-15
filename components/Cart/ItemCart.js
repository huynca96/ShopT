import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TouchableOpacity,Image,TouchableNativeFeedback,AsyncStorage,Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/FontAwesome';

import global from '../API/global';
import link from '../API/link';

const URL = `${link}capnhapgiohang.php`;

export default class ItemCart extends Component {

  incrMount(matv, masp, soluong){
    global.incrMount(masp)
    this.updateData(matv, masp, soluong+1, null)
  }

  decrMount(matv, masp, soluong){
    if(soluong > 1){
      global.decrMount(masp)
      this.updateData(matv, masp, soluong-1, null)
    } else {
      this.deleteItemCart(matv, masp);
    }
  }

  deleteDB(matv, masp){
    global.deleteItemCart(masp)
    this.updateData(matv, null, null, masp)
  }

  deleteItemCart(matv, masp){
    Alert.alert(
      'Xoá sản phẩm!',
      'Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?',
      [
        {text: 'Không', onPress: () => {}, style: 'cancel'},
        {text: 'Có', onPress: () => this.deleteDB(matv, masp) },
      ],
      { cancelable: false }
    )
  }

  updateData(matv, masp, soluong, maSPDL){
    if(matv !== null){
      fetch(URL, {
      method:'POST',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        MaTV: matv,
        MaSP: masp,
        SoLuong: soluong,
        MaSPDL: maSPDL
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData === 'Ok'){

      } else if (responseData === 'Deleted') {

      }
    })
    .catch((error)=>{
      console.error(error);
    })
    .done()
    }
  }

  render() {
    const { matv, masp, tensp, hinhanh, gia, soluong } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.boxImage}>
          <View style={{flex: 1}}>
            <Image source={{uri: hinhanh}}
              style={styles.image}
            />
          </View>

          <View style={{alignItems: 'flex-end',flex: 1}}>
            <View style={styles.boxCongTru}>
              <TouchableOpacity onPress={()=>{this.decrMount(matv, masp, soluong)}}>
                <Text style={styles.dau}>-</Text>
              </TouchableOpacity>

              <Text style={styles.soLuong}>{soluong}</Text>

              <TouchableOpacity onPress={()=>{this.incrMount(matv, masp, soluong)}}>
                <Text style={styles.dau}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <View style={styles.boxInfo}>
          <Text style={styles.name}>{tensp}</Text>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1,paddingVertical: 10}}>
              <Text style={styles.price}>{gia} đ</Text>
            </View>

            <View style={styles.boxOther}>

              <View style={styles.tuongtac}>
                <TouchableNativeFeedback onPress={()=>{alert('Yêu thích')}}>
                  <Ionicons name='heart' size={20} color='gray' />
                </TouchableNativeFeedback>
              </View>

              <View style={styles.tuongtac}>
                <TouchableNativeFeedback onPress={()=>{this.deleteItemCart(matv, masp)}}>
                  <Ionicons name='trash' size={20} color='gray' />
                </TouchableNativeFeedback>
              </View>

            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 6
  },
  boxImage:{
    flexDirection: 'row',
    padding: 10
  },
  image:{
    width: 100,
    height: 100,
  },
  boxInfo:{
    padding: 10
  },
  name:{
    fontSize: 16,
    color: '#001f23',
  },
  price:{
    color: '#fe5622',
    fontWeight: '500',
    fontSize: 20,
  },
  boxOther:{
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'flex-end',
  },
  tuongtac:{
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  boxCongTru:{
    width: 30,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 23
  },
  dau:{
    width: 25,
    height: 25,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fe5622',
    color: '#fff'
  },
  soLuong:{
    width: 25,
    height: 25,
    textAlign: 'center',
    fontSize: 18,
  }
});
