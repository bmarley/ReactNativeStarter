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

import GiphyAPI from './common/services/giphy_api';

export default class ReactNativeStarter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gif_url: null
    };

    this.fetchGif();
  }

  fetchGif() {
    let thisRef = this;
    GiphyAPI.search('hack').then(data => {
      thisRef.setState({
        gif_url: data[0].images.original.url
      });
    });
  }

  render() {

    let imageUrl = this.state.gif_url;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native (w/ Giphy)
        </Text>
        {imageUrl ? (
            <Image source={{uri: imageUrl}}
                   style={{width: 300, height: 300}} />
          ) : null}
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
