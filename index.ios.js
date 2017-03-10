/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './common/components/HomeScreen';
import ChatScreen from './common/components/ChatScreen';

const ReactNativeStarter = StackNavigator({
  Home: {screen: HomeScreen},
  Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
