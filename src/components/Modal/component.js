import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
  BackHandler
} from 'react-native';
import styles from './styles';

class Modal extends Component {
  static defaultProps = {
    overlayColor: 'rgba(0, 0, 0, 0.8)'
  };

  static propTypes = {
    overlayColor: PropTypes.string
  };

  _onClosed = null;

  state = {
    visible: false,
    children: null,
    dismiss: false,
    padding: true
  };

  componentWillMount() {
    this._animation = new Animated.Value(0);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { visible } = this.state;
      if(visible) {
        this.close(false);
        return true;
      }else return false;
    });
  }

  componentDidUpdate() {
    const { visible } = this.state;
    StatusBar.setHidden(visible);
    if(visible) this._animate(true);
  }

  isVisible = () => {
    return this.state.visible;
  };

  open = state => {
    this.setState({ visible: true, ...state });
  };

  onClosed = onClosed => {
    if(typeof onClosed === 'function')
      this._onClosed = onClosed;
  };

  close = onClosed => {
    this.onClosed(onClosed);
    this._animate(false);
  };

  _animate = visible => {
    Animated.timing(this._animation, {
      toValue: visible? 1: 0,
      duration: 240
    }).start(() => {
      if(!visible) {
        this.setState({ visible: false });
        if(typeof this._onClosed === 'function') {
          this._onClosed();
          this._onClosed = null;
        }
      }
    });
  };

  render() {
    const opacityStyle = {
      opacity: this._animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      })
    }

    const scaleStyle = {
      transform: [
        {
          scale: this._animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1.1, 1],
          })
        }
      ]
    }

    const { visible, dismiss, padding, children } = this.state;
    if(visible) {
      const { overlayColor } = this.props;
      if(dismiss) {
        return (
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => this.close()}
          >
            <Animated.View style={[
                styles.container,
                opacityStyle,
                {
                  padding: padding? 24: 0,
                  backgroundColor: overlayColor
                }
            ]}>
              <Animated.View style={[
                styles.content,
                scaleStyle,
                padding
                  ? { maxHeight: '100%' }
                  : { height: '100%' }
              ]}>
                {this.props.children || children}
              </Animated.View>
            </Animated.View>
          </TouchableOpacity>
        )
      }else {
        return (
          <View style={styles.overlay}>
            <Animated.View style={[
                styles.container,
                opacityStyle,
                {
                  padding: padding? 24: 0,
                  backgroundColor: overlayColor
                }
            ]}>
              <Animated.View style={[
                styles.content,
                scaleStyle,
                padding
                  ? { maxHeight: '100%' }
                  : { height: '100%' }
              ]}>
                {this.props.children || children}
              </Animated.View>
            </Animated.View>
          </View>
        );
      }
    }else return null;
  }
}

export default Modal;
