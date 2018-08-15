import React, { Component } from 'react';
import {
  View,Text,StyleSheet,ScrollView,TouchableOpacity,Image,AsyncStorage,Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/FontAwesome';

import global from '../API/global';
import link from '../API/link';

const URL = `${link}capnhapgiohang.php`;

export default class InfoProduct extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Chi tiết sản phẩm',
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });

  constructor(props) {
    super(props);
      this.state ={
        soLuongItem: 1,
        tongGia: 0,
      }
  }

  addThisProductToCart(){
    const { item, matv } = this.props.navigation.state.params
    global.addProductToCart(item, this.state.soLuongItem)
    this.saveCartDatabase(item, matv)
  }

  saveCartDatabase(item, matv){
    if(matv !== null){
      fetch(URL, {
      method:'POST',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        MaTV: matv,
        MaSP: item.MaSP,
        MaSPDL: null,
        SoLuong: this.state.soLuongItem,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData === 'Ok'){

      }
    })
    .catch((error)=>{
      console.error(error);
    })
    .done()
    }
  }

  increaseMount(){
    const { item } = this.props.navigation.state.params;
    const { tongGia, soLuongItem } = this.state
      if(soLuongItem < item.SoLuong){
      this.setState({
        soLuongItem: soLuongItem + 1,
        tongGia: parseInt(tongGia) + parseInt(item.Gia),
      })
    }
  }

  abatementMount(){
    const { item } = this.props.navigation.state.params;
    const { tongGia, soLuongItem } = this.state
    if(soLuongItem > 1){
      this.setState({
        soLuongItem: soLuongItem - 1,
        tongGia: parseInt(tongGia) - parseInt(item.Gia),
      })
    }
  }

  render() {
    const { item } = this.props.navigation.state.params;
    const { soLuongItem, tongGia } = this.state
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container}>

          <View style={styles.boxImage}>
            <Image source={{uri: item.HinhAnh}}
              style={styles.image}
            />
          </View>

          <View style={styles.boxInfo}>
            <Text style={styles.name}>{item.TenSP}</Text>
            <Text style={styles.price}>{item.Gia} đ</Text>
            <Text style={styles.amount}>Kho: {item.SoLuong}</Text>
          </View>

          <View style={styles.boxInfo}>
            <Text>{item.ThongTin}</Text>
          </View>

        </ScrollView>


        <View style={styles.viewBottom}>

          <View style={styles.boxCongTru}>
            <View style={styles.boxSoLuong}>
              <TouchableOpacity onPress={()=>{this.abatementMount()}}>
                <Ionicons name='minus' size={16} color='black' />
              </TouchableOpacity>
            </View>

            <View style={styles.boxSoLuong}>
              <Text style={styles.soLuong}>{soLuongItem}</Text>
            </View>

            <View style={styles.boxSoLuong}>
              <TouchableOpacity onPress={()=>{this.increaseMount()}}>
                <Ionicons name='plus' size={16} color='black' />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{color: 'black', paddingHorizontal: 4, fontSize: 16}}>{tongGia} đ</Text>
            </View>

          </View>

          <View style={styles.btnAddCart}>
            <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
              <Text style={styles.txtAdd}>THÊM VÀO GIỎ HÀNG</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
  componentDidMount(){
    const { item } = this.props.navigation.state.params;
    const { tongGia } = this.state
    this.setState({
      tongGia: item.Gia
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxImage:{
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 6
  },
  image:{
    width: 300,
    height: 300,
  },
  boxInfo:{
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 6
  },
  name:{
    fontSize: 16,
    color: '#001f23',
  },
  price:{
    color: '#fe5622',
    fontWeight: '500',
    fontSize: 28,
    paddingVertical: 8
  },
  amount:{
    fontSize: 14,
  },
  viewBottom:{
    flexDirection: 'row',
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnAddCart:{
    flex: 3,
    backgroundColor: '#fe5622',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14
  },
  boxCongTru:{
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxSoLuong:{
    flex: 1,
    alignItems: 'center',
  },
  txtAdd:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  soLuong:{
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    width: 30,
    textAlign: 'center',
  }
});
