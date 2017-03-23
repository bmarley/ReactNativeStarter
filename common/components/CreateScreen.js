import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HaikuTextInput from './HaikuTextInput';

class CreateScreen extends React.Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `Chat with ${state.params.exampleParam}`,
  };
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.view}>
        <HaikuTextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          syllables={5}
        />
        <HaikuTextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          syllables={7}
        />
        <HaikuTextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          syllables={5}
        />
        <Button
          onPress={onPressSubmitHaiku}
          title="Generate Haiku"
          color="#841584"
          accessibilityLabel="Generate a Haiku"
        />
      </View>
    );
  }
}

const onPressSubmitHaiku = () => {
  Alert.alert('Poetry in motion');
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    padding: 100
  }
});

module.exports = CreateScreen;
