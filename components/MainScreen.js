import React, { Component } from 'react';
import {
  View,Text,StyleSheet,AsyncStorage
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';

import global from './API/global';
import saveCart from './API/saveCart';
import readCart from './API/readCart';
import link from './API/link';

import HomeScreen from './TabScreen/HomeScreen';
import ListScreen from './TabScreen/ListScreen';
import CartScreen from './TabScreen/CartScreen';
import SearchScreen from './TabScreen/SearchScreen';
import AccountScreen from './TabScreen/AccountScreen';

const URLR = `${link}checkToken.php`;
const URLC = `${link}giohang.php`;

export default class MainScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      selectedTab: 'home',
      typeParents: [],
      types: [],
      cartArray: [],
    }
    global.addProductToCart = this.addProductToCart.bind(this);
    global.incrMount = this.incrMount.bind(this);
    global.decrMount = this.decrMount.bind(this);
    global.deleteItemCart = this.deleteItemCart.bind(this);
    global.onSignin = this.onSignin.bind(this);
    global.onSignout = this.onSignout.bind(this);
  }

  onSignin(user){
    this.setState({
      user : user
    }, () => readCart(user ? user.MaTV : null).then(cartArray => this.setState({ cartArray })))
  }

  onSignout(){
    this.setState({
      user : null
    }, () => readCart(null).then(cartArray => this.setState({ cartArray })))
  }


  getToken = async()=>{
    try {
      var token = await AsyncStorage.getItem("@Token:key");
      this.readToken(token)
    } catch (e) {
      console.log(e);
    }
  }

  // Lay du lieu tu MySQL
  componentDidMount(){
    fetch(link, {method:'POST',body: null})
    .then((response) => response.json())
    .then((responseData) => {
      const { type_parent, type} = responseData
      this.setState({
        typeParents: type_parent,
        types: type,
      })
    })
    .catch((error)=>{
      console.error(error);
    })
    .done();
    this.getToken()
  }

  readCarts(matv, cartArray){
    if(cartArray.length === 0){
      this.checkCart(matv)
    } else {
      this.setState({ cartArray })
    }
  }

  readToken(token){
    fetch(URLR, {
      method:'POST',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        Token: token
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData !== "Error"){
        const { user } = responseData
        this.setState({
          user: user,
        }, () => readCart(user.MaTV).then(cartArray => this.readCarts(user.MaTV, cartArray)))
      } else {
        this.setState({
          user: null,
        }, () => readCart(null).then(cartArray => this.setState({ cartArray })))
      }
    })
    .catch((error)=>{
      console.error(error);
    })
    .done()
  }

  checkCart(matv){
      fetch(URLC, {
        method:'POST',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          MaTV: matv
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.length !== 0){
          const { MaSP, SoLuong } = responseData
          console.log(responseData);
        } else {
          console.log('Cart Null');
        }
      })
      .catch((error)=>{
        console.error(error);
      })
      .done()
  }

  // Them 1 san pham vao gio hang
  addProductToCart(productCart, quantity){
    const { user } = this.state
    const maTV = user ? user.MaTV : null
    // Kiem tra xem san pham da co trong gio hang chua, neu co roi thi tang so luong
    checkItemCart = this.state.cartArray.some(item => {
      return item.productCart.MaSP === productCart.MaSP
    })
    if(checkItemCart === true){
      const newCart = this.state.cartArray.map(item => {
        if(item.productCart.MaSP !== productCart.MaSP) return item;
        return { productCart: item.productCart, quantity: item.quantity += quantity }
      });
      this.setState({
        cartArray: newCart
      }, () => saveCart(this.state.cartArray, maTV));
    } else {
      this.setState({
        cartArray: this.state.cartArray.concat({productCart, quantity: quantity})
      }, () => saveCart(this.state.cartArray, maTV));
    }
  }

  // Tang so luong len 1 tu gio hang
  incrMount(masp){
    const { user } = this.state
    const maTV = user ? user.MaTV : null
    const newCart = this.state.cartArray.map(item => {
      if(item.productCart.MaSP !== masp) return item;
      return { productCart: item.productCart, quantity: item.quantity + 1 }
    });
    this.setState({
      cartArray: newCart
    }, () => saveCart(this.state.cartArray, maTV));
  }

  // Giam so luong xuong 1 tu gio hang
  decrMount(masp){
    const { user } = this.state
    const maTV = user ? user.MaTV : null
    const newCart = this.state.cartArray.map(item => {
      if(item.productCart.MaSP !== masp) return item;
      return { productCart: item.productCart, quantity: item.quantity - 1 }
    });
    this.setState({
      cartArray: newCart
    }, () => saveCart(this.state.cartArray, maTV));
  }

  // Xoa san pham trong gio hang
  deleteItemCart(masp){
    const { user } = this.state
    const maTV = user ? user.MaTV : null
    const newCart = this.state.cartArray.filter(item => item.productCart.MaSP !== masp) ;
    this.setState({
      cartArray: newCart
    }, () => saveCart(this.state.cartArray, maTV));
  }

  render() {
    const { user, selectedTab, typeParents, types, cartArray } = this.state
    const { navigation } = this.props
    const maTV = user ? user.MaTV : null
    const homeScreen = <HomeScreen
      userMaTV= {maTV}
      typeProduct={types}
      gotoListPr={navigation}/>
    const listScreen = <ListScreen
      userMaTV= {maTV}
      typeParent={typeParents}
      typeProduct={types}
      gotoListPr={navigation}/>
    const cartScreen = <CartScreen
      userMaTV= {maTV}
      cartArray={cartArray}/>
    const searchScreen = <SearchScreen
      userMaTV= {maTV}/>
    const accountScreen = <AccountScreen
      moveScreen={navigation}
      user={user}/>
    const colorIcon = '#005662';
    const colorSelectedIcon = '#fe5622'
    const arrQuantity = cartArray.map(item => item.quantity)
    const sumQuantity = arrQuantity.length ? arrQuantity.reduce((a, b) => a + b) : 0;
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === 'home'}
            title="Trang Chủ"
            renderIcon={() =>  <Ionicons name={'home'} size={22} color={colorIcon} />}
            renderSelectedIcon={() => <Ionicons name={'home'} size={22} color={colorSelectedIcon} />}
            titleStyle={{color: colorIcon}}
            selectedTitleStyle={{color: colorSelectedIcon}}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {homeScreen}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'list'}
            title="Danh mục"
            renderIcon={() => <Ionicons name={'th-list'} size={20} color={colorIcon} />}
            renderSelectedIcon={() => <Ionicons name={'th-list'} size={20} color={colorSelectedIcon} />}
            titleStyle={{color: colorIcon}}
            selectedTitleStyle={{color: colorSelectedIcon}}
            onPress={() => this.setState({ selectedTab: 'list' })}>
            {listScreen}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'cart'}
            title="Giỏ hàng"
            renderIcon={() => <Ionicons name={'shopping-cart'} size={20} color={colorIcon} />}
            renderSelectedIcon={() => <Ionicons name={'shopping-cart'} size={20} color={colorSelectedIcon} />}
            titleStyle={{color: colorIcon}}
            selectedTitleStyle={{color: colorSelectedIcon}}
            badgeText={sumQuantity}
            onPress={() => this.setState({ selectedTab: 'cart' })}>
            {cartScreen}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'search'}
            title="Tìm kiếm"
            renderIcon={() => <Ionicons name={'search'} size={20} color={colorIcon} />}
            renderSelectedIcon={() => <Ionicons name={'search'} size={20} color={colorSelectedIcon} />}
            titleStyle={{color: colorIcon}}
            selectedTitleStyle={{color: colorSelectedIcon}}
            onPress={() => this.setState({ selectedTab: 'search' })}>
            {searchScreen}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'account'}
            title="Tài khoản"
            renderIcon={() => <Ionicons name={'user'} size={20} color={colorIcon} />}
            renderSelectedIcon={() => <Ionicons name={'user'} size={20} color={colorSelectedIcon} />}
            titleStyle={{color: colorIcon}}
            selectedTitleStyle={{color: colorSelectedIcon}}
            onPress={() => this.setState({ selectedTab: 'account' })}>
            {accountScreen}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
