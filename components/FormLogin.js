import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, AsyncStorage,
} from 'react-native';

import global from './API/global';
import link from './API/link';

const URL = `${link}login.php`;

export default class FormLogin extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      pass: '',
      token: '',
    }
  }

  saveToken = async()=>{
    try {
      await AsyncStorage.setItem("@Token:key", this.state.token);
    } catch (e) {
      console.log(e);
    }
  }

  onThisSignin(user){
    this.saveToken();
    global.onSignin(user);
    this.props.logined.goBack();
  }

  userLogin(email, pass){
    fetch(URL, {
      method:'POST',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Password: pass,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      const { token, user } = responseData
      if(token === "ERROR"){
        alert('Đăng nhập thất bại!')
      } else {
        this.setState({
          token: token
        })
        this.onThisSignin(user)
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
          onChangeText={(email) => this.setState({email})}
          placeholder={'Email / Tên đăng nhập'}
          keyboardType='email-address'
          returnKeyType='next'
          underlineColorAndroid='rgba(0,0,0,0)'
          autoCorrect={false}
          onSubmitEditing={()=>this.password.focus()}
          value={this.state.email}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(pass) => this.setState({pass})}
          placeholder={'Password'}
          underlineColorAndroid='rgba(0,0,0,0)'
          secureTextEntry={true}
          ref={(input)=> this.password = input}
          value={this.state.pass}
        />
        <View style={styles.forgetPass}>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color: 'white', fontWeight: '500', marginTop: 10}}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>this.userLogin(this.state.email, this.state.pass)}>
          <Text style={styles.buttonLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.gotoSignup.navigate('Signup')}}>
          <Text style={styles.buttonLogin}>Tạo tài khoản mới</Text>
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
  forgetPass:{
    width: 300,
    alignItems: 'flex-end',
  },
  buttonLogin:{
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
