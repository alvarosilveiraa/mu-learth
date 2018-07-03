import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  Easing,
  Text
} from 'react-native';
import NativeButtonComponent from '../NativeButton';
import network from '../../modules/network';
import styles from './styles';

class Connection extends Component {
  static defaultProps = {
    timer: 0
  };

  static propTypes = {
    timer: PropTypes.number,
  };

  componentWillMount() {
    this._animation = new Animated.Value(0);
    network(info => {
      if(info.type === 'none')
        this._animate(1);
      else this._animate(0);
    });
  }

  _animate = value => {
    Animated.timing(
      this._animation,
      {
        toValue: value,
        duration: 200,
        easing: Easing.ease
      }
    ).start(() => {
      const { timer } = this.props;
      if(value && timer) {
        setTimeout(() => {
          this._animate(0);
        }, timer);
      }
    });
  };

  render() {
    const showStyle = {
      opacity: this._animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      }),
      bottom: this._animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-40, 0]
      })
    }

    return (
      <Animated.View style={[showStyle, styles.container]}>
        <View style={[styles.flex, styles.height]}>
          <Text style={styles.text}>
            VOCÊ ESTÁ OFFLINE.
          </Text>
        </View>
        <NativeButtonComponent
          style={styles.height}
          onPress={() => this._animate(0)}
        >
          <Text style={styles.text}>OK</Text>
        </NativeButtonComponent>
      </Animated.View>
    );
  }
}

export default Connection;
