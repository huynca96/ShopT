import React, { Component } from 'react';
import {
  View,Text,StyleSheet,FlatList,TouchableOpacity
} from 'react-native';

import CustomImage from '../CustomImage';

export default class ContentContainer extends Component {

  gotoListProducts(maloaiSP, userMaTV){
    this.props.gotoListPr.navigate('ListProduct',{maloai: maloaiSP, matv: userMaTV});
  }

  render() {
    const { userMaTV, typeProduct } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.txtTitle}>
            Dành riêng cho bạn
          </Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={typeProduct}
            renderItem={({item}) =>
            <TouchableOpacity onPress={()=>{this.gotoListProducts(item.MaLoaiSP, userMaTV)}}>
              <View style={styles.contentBanner}>
                <CustomImage
                  imageSource={{uri: item.HinhAnh}}
                  header={item.TenLoaiSP}
                />
              </View>
            </TouchableOpacity>}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    paddingHorizontal: 5,
    marginTop: 20,
  },
  txtTitle:{
    paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: '500',
    color: '#fe5622'
  },
  content:{
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 5,
  },
  contentBanner:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});
