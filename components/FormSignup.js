import React, { Component } from 'react';
import {
  View,Text,StyleSheet,TextInput,TouchableOpacity,Keyboard
} from 'react-native';

import link from './API/link';

const URL = `${link}register.php`;

export default class FormSignup extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullname:'',
      email: '',
      pass: '',
      confirmpass:''
    }
  }

  userRegister(fullname, email, pass, confirmpass){
    fetch(URL, {
      method:'POST',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        Fullname: fullname,
        Email: email,
        Password: pass,
        Confirmpass: confirmpass,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData === 'Ok'){
        this.props.signuped.goBack();
        Keyboard.dismiss();
        alert('Đăng ký thành công!')
      } else {
        alert(responseData)
      }
    })
    .catch((error)=>{
      console.error(error);
    })
    .done()
  }

  render() {
    return (
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
          onChangeText={(pass) => this.setState({pass})}
          placeholder={'Mật khẩu'}
          underlineColorAndroid='rgba(0,0,0,0)'
          secureTextEntry={true}
          value={this.state.pass}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(confirmpass) => this.setState({confirmpass})}
          placeholder={'Nhập lại mật khẩu'}
          underlineColorAndroid='rgba(0,0,0,0)'
          secureTextEntry={true}
          value={this.state.confirmpass}
        />
        <TouchableOpacity onPress={()=>this.userRegister(this.state.fullname, this.state.email, this.state.pass, this.state.confirmpass)}>
          <Text style={styles.buttonSignup}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
