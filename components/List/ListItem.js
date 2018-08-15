import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TouchableOpacity, ImageBackground
} from 'react-native';

export default class ListItem extends Component {

  exportData(maloaiSP, userMaTV){
    this.props.gotoListPr.navigate('ListProduct',{maloai: maloaiSP, matv: userMaTV});
  }

  render() {
    const { userMaTV, maloaiSP, tenLoaiSP, hinhAnh } = this.props
    return (
      <ImageBackground source={{uri: hinhAnh}} style={styles.backgroundImage}>
        <TouchableOpacity onPress={()=>{this.exportData(maloaiSP, userMaTV)}}>
          <View style={styles.itemContainer}></View>
          <Text style={styles.itemText}>{tenLoaiSP}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'flex-end',
    padding: 10,
    height: 150,
    backgroundColor: 'black',
    opacity: 0.4
  },
  itemText:{
    padding: 20,
    color: 'white',
    fontSize: 20,
    position: 'absolute'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});
