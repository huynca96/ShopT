import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class SlideShow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 200}}>
          <Swiper style={styles.wrapper}
            loop={true}
            activeDotColor={'#fe5622'}
            autoplay={true}
            autoplayTimeout={3}
            >
            <View style={styles.slide}>
              <Image source={{uri: 'http://res.cloudinary.com/huyntqt/image/upload/v1523957158/ShopT/SlideShow/banner2a.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={{uri: 'http://res.cloudinary.com/huyntqt/image/upload/v1523956605/ShopT/SlideShow/bannerttnam2.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={{uri: 'http://res.cloudinary.com/huyntqt/image/upload/v1523957029/ShopT/SlideShow/bane_1496285164.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={{uri: 'http://res.cloudinary.com/huyntqt/image/upload/v1523957068/ShopT/SlideShow/giay-thoi-trang-banner-75.jpg'}} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={{uri: 'http://res.cloudinary.com/huyntqt/image/upload/v1523957042/ShopT/SlideShow/hmv-thoitrangnam.jpg'}} style={styles.image} />
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
  },
  slide: {
    flex: 1
  },
  image:{
    width: null,
    height: 200
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
