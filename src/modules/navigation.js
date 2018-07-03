import React from 'react';
import { NavigationActions } from 'react-navigation';

const resetNavigation = (name, params={}) => {
  return NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({
        routeName: name,
        params
      })
    ]
  });
}

const onceNavigation = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  if(
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) return null;
  else return getStateForAction(action, state);
}

const drawerNavigation = (routes, routeName) => {
  let route = routes[routes.length - 1];
  while(route && route.routes && route.routes.length)
    route = route.routes[route.routes.length - 1];
  return route.routeName === routeName
    ? 'unlocked'
    : 'locked-closed';
}

export {
  resetNavigation,
  onceNavigation,
  drawerNavigation
}
