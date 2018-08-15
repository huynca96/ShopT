import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard
} from 'react-native';

export default class ChangeInfomation extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Quản lý tài khoản',
    headerStyle:{
      backgroundColor: '#00838f',
    },
    headerTintColor: "white"
  });

  constructor(props){
    super(props);
    const { TenTV, Email, DiaChi, NgaySinh, Sdt, GioiTinh, HinhAnh } = this.props.navigation.state.params.user;
    this.state = {
      fullname: TenTV,
      email: Email,
      address: DiaChi,
      birthday:NgaySinh,
      phone: Sdt,
      gender: GioiTinh,
      avatar: HinhAnh,
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            onChangeText={(fullname) => this.setState({fullname})}
            placeholder={'Tên đầy đủ'}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.fullname}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(email) => this.setState({email})}
            placeholder={'Email'}
            keyboardType='email-address'
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.email}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(address) => this.setState({address})}
            placeholder={'Địa chỉ'}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.address}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(birthday) => this.setState({birthday})}
            placeholder={'Ngày sinh'}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.birthday}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(phone) => this.setState({phone})}
            placeholder={'Số điện thoại'}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.phone}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(gender) => this.setState({gender})}
            placeholder={'Giới tính'}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.gender}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(avatar) => this.setState({avatar})}
            placeholder={'Link Avatar'}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={this.state.avatar}
          />
          <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.buttonSignup}>Cập nhập</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox:{
    width: 300,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  buttonSignup:{
    width: 300,
    backgroundColor: '#00838f',
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white'
  }
});
