import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  WebView,
  Linking,
  View,
  ImageBackground,
  Image,
  Alert
} from 'react-native';
import { ScreenOrientation } from 'expo';
import NativeButtonComponent from '../NativeButton';
import { icons } from '../../themes';
import styles from './styles';

class Video extends Component {
  static defaultProps = {
    height: 200
  };

  static propTypes = {
    uri: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    height: PropTypes.number,
    modal: PropTypes.object
  };

  _setOrientation = orientation => {
    ScreenOrientation.allow(ScreenOrientation.Orientation[orientation]);
  };

  _renderWebview = (uri, onError) => {
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        style={{ flex: 1, backgroundColor: '#000000' }}
        source={{ uri }}
        onNavigationStateChange={e => {
          if(e.url !== uri) {
            this.webview.stopLoading();
            if(!e.loading)
              Linking.openURL(e.url);
          }
        }}
        onError={onError}
        startInLoadingState
      />
    );
  };

  _handleError = () => {
    Alert.alert(
      'Ocorreu um erro inesperado',
      'Não foi possível reproduzir este vídeo!',
      [
        {
          text: 'OK',
          onPress: () => null
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { uri, height } = this.props;
    if(uri) {
      if(Platform.OS === 'android') {
        const { thumbnail } = this.props;
        return (
          <NativeButtonComponent
            style={styles.flex}
            onPress={() => {
              const { modal } = this.props;
              if(modal) {
                this._setOrientation('LANDSCAPE');
                modal.onClosed(() => this._setOrientation('PORTRAIT'));
                modal.open({
                  children: this._renderWebview(uri, err => {
                    modal.close();
                    this._handleError();
                  }),
                  dismiss: false,
                  padding: false
                });
              }else this._handleError();
            }}
          >
            {thumbnail && (
              <ImageBackground
                resizeMode="cover"
                source={{ uri: thumbnail }}
                style={[styles.playThumb, { height }]}
              >
                <Image
                  source={icons.play}
                  style={styles.playIcon}
                />
              </ImageBackground>
            )}
          </NativeButtonComponent>
        );
      }else {
        return (
          <View style={{ width: '100%', height }}>
            {this._renderWebview(uri, err => this._handleError())}
          </View>
        );
      }
    }else return null;
  }
}

export default Video;
