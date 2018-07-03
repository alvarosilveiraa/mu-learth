import React, { Component } from 'react';
import { AppLoading } from 'expo';
import cacheAssets from '../../modules/cacheAssets';
import notification from '../../modules/notification';
import PropTypes from 'prop-types';

export default class Loading extends Component {
  static propTypes = {
    onLoaded: PropTypes.func.isRequired,
  };

  startAsync = async () => {
    await notification.initialize();
    await cacheAssets.images();
    await cacheAssets.icons();
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
