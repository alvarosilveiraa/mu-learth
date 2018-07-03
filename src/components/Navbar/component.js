import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';
import { images } from '../../themes';
import styles from './styles';

class Navbar extends Component {
  _renderLeft = () => {
    const { left } = this.props;
    return left || null;
  };

  _renderCenter = () => {
    const { title, center } = this.props;
    if(title) return <Text style={styles.title} numberOfLines={1}>{title}</Text>;
    else return center || null;
  };

  _renderRight = () => {
    const { right } = this.props;
    return right || null;
  };

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={images.backgroundNavbar}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.leftComponent}>
            {this._renderLeft()}
          </View>
          <View style={styles.centerComponent}>
            {this._renderCenter()}
          </View>
          <View style={styles.rightComponent}>
            {this._renderRight()}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Navbar;
