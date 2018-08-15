import React, { Component } from 'react';
import {
  View,Text,StyleSheet,ImageBackground
} from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class CustomImage extends Component {
  render() {
    return (
      <ImageBackground source={this.props.imageSource}
        style={styles.banner}>
        <ImageOverlay
          header={this.props.header}
          paragraph={this.props.paragraph}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
