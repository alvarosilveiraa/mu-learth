import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigation from './App';
import {
  ModalComponent,
  ConnectionComponent
} from '../components';
import styles from './styles';

class Navigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const dispatch = this.props.dispatch;
    const navigation = addNavigationHelpers({
      dispatch,
      addListener: createReduxBoundAddListener('root'),
    });
    return (
      <View style={styles.flex}>
        <AppNavigation
          navigation={navigation}
          initialRouteName="Events"
          screenProps={{
            getModal: () => this._modal
          }}
        />
        <ConnectionComponent />
        <ModalComponent ref={ref => { this._modal = ref; }} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Navigation);
