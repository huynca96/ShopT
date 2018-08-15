import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

import global from '../API/global';

import ListParent from '../List/ListParent';
import ListChild from '../List/ListChild';

export default class ListScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Danh mục',
    header: null,
  });
  constructor(props){
    super(props);
    this.state = {
      maLoaiCha: null,
    }
    global.onChangeMaLoaiCha = this.onChangeMaLoaiCha.bind(this);
  }

  componentDidMount(){
    const { typeParent } = this.props
    this.setState({
      maLoaiCha: typeParent[0].MaLoaiCha,
    });
  }

  onChangeMaLoaiCha(newMaCha){
    this.setState({
      maLoaiCha: newMaCha
    });
  }

  render(){
    const { userMaTV, typeParent, typeProduct } = this.props
    const { maLoaiCha } = this.state
    const typeProductOfParent = typeProduct.filter(item => {
       return item.MaLoaiCha == maLoaiCha;
    })
    return (
      <View style={styles.container}>
        <ListParent dataListParent={typeParent}/>
        <ListChild
          userMaTV={userMaTV}
          typeProducts={typeProductOfParent}
          gotoListPr={this.props.gotoListPr}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});
