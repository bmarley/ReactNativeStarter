/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import HistoryScreen from './common/components/HistoryScreen';
import CreateScreen from './common/components/CreateScreen';
import ViewScreen from './common/components/ViewScreen';

const ReactNativeStarter = StackNavigator({
  History: {screen: HistoryScreen},
  Create: {screen: CreateScreen},
  View: {screen: ViewScreen},
});

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
