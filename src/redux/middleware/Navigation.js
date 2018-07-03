import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default navigationMiddleware;
