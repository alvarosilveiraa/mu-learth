import { createStore, applyMiddleware, compose } from 'redux';
import navigationMiddleware from './middleware/Navigation';

export default rootReducer => {
  const middleware = [];
  const enhancers = [];
  middleware.push(navigationMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  const createAppropriateStore = createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));
  return store;
}
