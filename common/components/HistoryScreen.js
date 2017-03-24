import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HaikuList from './HaikuList.js';

class HistoryScreen extends React.Component {

  static navigationOptions = {
    title: 'Haiku History',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HaikuList navigation={this.props.navigation}/>
        <Button
          style={styles.create}
          onPress={() => navigate('Create', { exampleParam: 'Jonathan' })}
          title="Let's Hai-go!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3d6d2'
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
  create: {
    backgroundColor: '#e5e5e5'
  }
});

module.exports = HistoryScreen;
