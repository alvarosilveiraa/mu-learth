import React from 'react';
import {
  onceNavigation
} from '../modules/navigation';
import {
  TabBarTop,
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import {
  EventsScreen
} from '../screens';
import { colors } from '../themes';

export const defaultStack = screens => {
  const initialRouteName = Object.keys(screens)[0];
  const Navigator = StackNavigator(
    { ...screens },
    {
      initialRouteName,
      headerMode: 'none'
    }
  );

  Navigator.router.getStateForAction = onceNavigation(Navigator.router.getStateForAction);

  return Navigator;
}

export const defaultTabs = (screens, options={}) => {
  const Navigator = TabNavigator(
    {
      ...screens
    },
    {
      ...options,
      tabBarComponent: TabBarTop,
      tabBarPosition: 'top',
      tabBarOptions: {
        scrollEnabled: true,
        upperCaseLabel: false,
        style: {
          backgroundColor: colors.light
        },
        labelStyle: {
          fontSize: 14
        },
        indicatorStyle: {
          borderColor: colors.primary,
          borderWidth: 2
        },
        inactiveTintColor: colors.secondary,
        activeTintColor: colors.primary
      },
      backBehavior: 'none'
    }
  );

  return Navigator;
}

const EventsStack = defaultStack(
  {
    Events: { screen: EventsScreen }
  }
);

export default RootStack = ({ initialRouteName, screenProps }) => {
  const Navigator = defaultStack(
    {
      Events: { screen: EventsStack }
    },
    { initialRouteName }
  )

  Navigator.router.getStateForAction = onceNavigation(Navigator.router.getStateForAction);

  return <Navigator screenProps={screenProps} />;
}
