import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image
} from 'react-native';

import GridView from 'react-native-super-grid';

import link from '../API/link';

const URL = `${link}products/product.php`;

export default class ListProduct extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Sản phẩm',
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });

  constructor(props) {
    super(props);
      this.state ={
        productArray: [],
      }
  }

  loadData(){
    const { params } = this.props.navigation.state;
    fetch(URL, {
      method:'POST',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        MaLoaiSP: params.maloai,
        MaSP: null,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        productArray: responseData
      });
    })
    .catch((error)=>{
      console.error(error);
    })
    .done()
  }

  exportData(item, matv){
    this.props.navigation.navigate('InfoProduct',{item: item, matv: matv});
  }

  createRows(item){
    const { matv } = this.props.navigation.state.params;
    return(
      <TouchableOpacity onPress={()=>{this.exportData(item, matv)}}>
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
    const { productArray } = this.state
    return (
      <View style={styles.container}>
        <GridView
          itemDimension={130}
          style={styles.container}
          items={this.state.productArray}
          renderItem={item => this.createRows(item)}
        />
      </View>
    );
  }

  componentDidMount(){
    this.loadData()
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
