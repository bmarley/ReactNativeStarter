import React, { Component } from 'react';
import {
  Alert,
  Button,
  Image,
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
      <Image source={require('../../images/bg_create.jpg')} style={styles.backgroundImage}>
        <View style={styles.view}>
          <HaikuTextInput
            style={styles.text}
            syllables={5}
          />
          <HaikuTextInput
            style={styles.text}
            syllables={7}
          />
          <HaikuTextInput
            style={styles.text}
            syllables={5}
          />
          <Button
            onPress={onPressSubmitHaiku}
            title="Generate Haiku"
            color="#841584"
            accessibilityLabel="Generate a Haiku"
          />
        </View>
      </Image>
    );
  }
}

const onPressSubmitHaiku = () => {
  Alert.alert('Poetry in motion');
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  text: {
    alignItems: 'center',
    borderColor: 'transparent',
    height: 40,
    padding: 5,
    textAlign: 'center'
  },
  view: {
    alignItems: 'center',
    padding: 30
  }
});

module.exports = CreateScreen;
