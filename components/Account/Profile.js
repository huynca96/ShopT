import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, FlatList, AsyncStorage
} from 'react-native';

import { Avatar } from 'react-native-elements'

import CustomFlatList from '../CustomFlatList';

import global from '../API/global';

const DATA1 = [{key: 'Tin nhắn', icon: 'comments'},
              {key: 'Lịch sử mua hàng', icon: 'history'},
              {key: 'Thay đổi mật khẩu', icon: 'exchange'},
              {key: 'Thay đổi thông tin cá nhân', icon: 'info-circle'}]
const DATA2 = [{key: 'Cài đặt', icon: 'cog'},
              {key: 'Chính sách', icon: 'bookmark'},
              {key: 'Trợ giúp', icon: 'question-circle'},]
const DATA3 = [{key: 'Đăng xuất', icon: 'sign-out'}]

export default class Profile extends Component {

  checkAvatar(user){
    const avatarGuest = 'http://res.cloudinary.com/huyntqt/image/upload/v1524801823/ShopT/Avatar/avatarguest.jpg'
    if(user !== null){
      return user.HinhAnh ? user.HinhAnh : avatarGuest
    } else {
      return avatarGuest
    }
  }

  render() {
    const { user, moveScreen } = this.props
    const logoutJXS = (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.boxLogo}>
            <Image  style={{width: 88, height: 30, marginLeft: 10, marginTop: 10}}
                    source={require('../../images/logotext.png')}/>
            <Text style={{color: 'white', fontSize: 12, marginLeft: 10, marginTop: 5}}>Xin chào, {user ? user.TenTV : ''}.</Text>
          </View>
          <View style={styles.boxLogin}>
            <Avatar
              medium
              rounded
              source={{uri: this.checkAvatar(user)}}
              onPress={() => moveScreen.navigate('ChangeInfomation', {user: user})}
              activeOpacity={0.7}
            />
          </View>
        </View>

        <CustomFlatList
          dataF={DATA1}
          user={user}
          moveScreen={moveScreen}
        />

        <CustomFlatList
          dataF={DATA2}
          moveScreen={moveScreen}
        />

        <CustomFlatList
          dataF={DATA3}
        />

      </View>
    );

    const loginJXS = (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.boxLogo}>
            <Image  style={{width: 88, height: 30, marginLeft: 10, marginTop: 10}}
                    source={require('../../images/logotext.png')}/>
            <Text style={{color: 'white', fontSize: 12, marginLeft: 10, marginTop: 5}}>Xin chào, Chào mừng bạn.</Text>
          </View>
          <View style={styles.boxLogin}>
            <TouchableOpacity onPress={()=>{moveScreen.navigate('Login')}}>
              <View style={styles.btnLogin}>
                <Text style={styles.textLogin}>Đăng nhập / Đăng ký</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <CustomFlatList
          dataF={DATA2}
          moveScreen={moveScreen}
        />

      </View>
    );

    const mainJSX = user ? logoutJXS : loginJXS;

    return (
      <View style={styles.container}>
        {mainJSX}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection: 'row',
    backgroundColor: '#00838f',
    paddingBottom: 10,
    marginBottom: 3,
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxLogo:{
    flex: 1,
  },
  boxLogin:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
  },
  btnLogin:{
    backgroundColor: '#fe5622',
    padding: 8,
    alignItems: 'center'
  },
  textLogin:{
    color: '#fff',
    fontSize: 16
  }
});
