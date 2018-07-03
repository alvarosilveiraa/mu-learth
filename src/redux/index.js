import { combineReducers } from 'redux';
import { reducer as userReducer } from './data/User';
import { reducer as eventReducer } from './data/Event';
import { persistStore, persistReducer } from 'redux-persist';
import configureStore from './store';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  user: userReducer,
  event: eventReducer
});

const finalReducers = persistReducer({
  key: 'root',
  storage,
  blacklist: ['user', 'event']
}, reducers);

export default () => {
  const store = configureStore(finalReducers);
  const persistor = persistStore(store);
  if(module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);
    });
  }
  return { store, persistor };
}
