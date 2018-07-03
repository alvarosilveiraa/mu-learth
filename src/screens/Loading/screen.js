import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import firebase from 'firebase';
import cacheAssets from '../../modules/cacheAssets';
import notification from '../../modules/notification';
import config from '../../fixtures/config';


export default class Loading extends Component {
  static propTypes = {
    onLoaded: PropTypes.func.isRequired,
  };

  startAsync = async () => {
    await notification.initialize();
    await cacheAssets.images();
    await cacheAssets.icons();
    await firebase.initializeApp(config.firebase);
  };

  render() {
    return (
      <AppLoading
        startAsync={this.startAsync}
        onFinish={() => this.props.onLoaded()}
      />
    );
  }
}
