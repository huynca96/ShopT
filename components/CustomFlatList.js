import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TouchableOpacity,FlatList,AsyncStorage,Alert
} from 'react-native';

import Ionicons from 'react-native-vector-icons/FontAwesome';

import Login from './Account/Login';

import global from './API/global';

export default class CustomFlatList extends Component {

  removeToken = async()=>{
    try {
      await AsyncStorage.removeItem("@Token:key")
    } catch (e) {
      console.log(e);
    }
  }

  onThisSignout(){
    this.removeToken();
    global.onSignout();
  }

  xuat(item){
    const { user, moveScreen } =this.props
    switch(item.key) {
        case "Cài đặt":
            moveScreen.navigate('Settings');
            break;
        case "Chính sách":
            moveScreen.navigate('Policy')
            break;
        case "Trợ giúp":
            moveScreen.navigate('Help')
            break;
        case "Thay đổi thông tin cá nhân":
            moveScreen.navigate('ChangeInfomation', {user: user})
            break;
        case "Tin nhắn":
            moveScreen.navigate('Message')
            break;
        case "Lịch sử mua hàng":
            moveScreen.navigate('OrderHistory')
            break;
        case "Thay đổi mật khẩu":
            moveScreen.navigate('ChangePassword')
            break;
        case "Đăng xuất":
            Alert.alert(
              'Đăng xuất!',
              'Bạn có muốn đăng xuất không?',
              [
                {text: 'Không', onPress: () => {}, style: 'cancel'},
                {text: 'Có', onPress: () => this.onThisSignout()},
              ],
              { cancelable: false }
            )
            break;
        default:
            alert(item.key);
    }
  }

  createRows(item){
    return(
      <TouchableOpacity onPress={()=>this.xuat(item)}>
        <View style={styles.rowItem}>
          <View style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name={item.icon} size={25} color='gray' />
          </View>
          <Text style={{marginHorizontal: 10}}>{item.key}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.props.dataF}
          renderItem={({item}) => this.createRows(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginVertical: 3
  },
  rowItem:{
    marginVertical: 0.5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
