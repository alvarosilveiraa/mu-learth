import React, { Component } from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const platformPropTypes = Platform.OS === 'android'
  ? TouchableNativeFeedback.propTypes
  : TouchableOpacity.propTypes;

class NativeButton extends Component {
  static propTypes = {
    ...platformPropTypes,
  };

  componentDidUpdate(prevProps) {
    const { disabled } = this.props;
    if(Platform.OS === 'ios' && disabled !== prevProps.disabled) {
      const opacity = disabled? 0.7: 1;
      this.touchable.setOpacityTo(opacity);
    }
  }

  render() {
    const { children, style, disabled } = this.props;
    if(Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          {...this.props}
          delayPressIn={0}
          useForeground
        >
          <View
            pointerEvents="box-only"
            style={[style, { opacity: disabled? 0.7: 1 }]}
          >
            {children}
          </View>
        </TouchableNativeFeedback>
      );
    }else {
      return (
        <TouchableOpacity
          ref={ref => { this.touchable = ref; }}
          activeOpacity={0.7}
          {...this.props}
          style={[style, { opacity: disabled ? 0.7 : 1 }]}
        />
      );
    }
  }
}

export default NativeButton;
