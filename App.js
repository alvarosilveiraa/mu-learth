import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createRedux from './src/redux';
import Navigation from './src/navigation';
import LoadingScreen from './src/screens/Loading';

const { store, persistor } = createRedux();

export default class App extends Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.1)');
  }

  render() {
    if(this.state.isReady) {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      );
    }else return <LoadingScreen onLoaded={() => this.setState({ isReady: true })} />
  }
}
