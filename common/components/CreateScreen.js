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
import firebase from '../services/firebase';
import GiphyAPI from '../services/giphy_api'

class CreateScreen extends React.Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `Chat with ${state.params.exampleParam}`,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <Image source={require('../../images/bg_create.jpg')} style={styles.backgroundImage}>
        <View style={styles.view}>
          <HaikuTextInput
            style={styles.text}
            onChangeText={(text) => this.setState({text1: text})}
            syllables={5}
          />
          <HaikuTextInput
            style={styles.text}
            onChangeText={(text) => this.setState({text2: text})}
            syllables={7}
          />
          <HaikuTextInput
            style={styles.text}
            onChangeText={(text) => this.setState({text3: text})}
            syllables={5}
          />
          <Button
            style={styles.button}
            onPress={this.onPressSubmitHaiku.bind(this)}
            title="Generate Haiku"
            color="#841584"
            accessibilityLabel='Generate a Haiku'
          />
        </View>
      </Image>
    );
  }

  onPressSubmitHaiku() {
    let state = this.state;
    if (!state.text1 || !state.text2 || !state.text3) {
      Alert.alert('Fill in all fields')
    } else {
      var gif1 = GiphyAPI.search(state.text1).then(data => {
        console.log(data[0].images.original.url);
      });
      var gif2 = GiphyAPI.search(state.text2).then(data => {
        console.log(data[0].images.original.url);
      });
      var gif3 = GiphyAPI.search(state.text3).then(data => {
        console.log(data[0].images.original.url);
      });


      // TODO get 3 gifs and call firebase.save(model,callback);
    }
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 30,
    width: null,
  },
  button: {
    alignItems: 'center',
    borderWidth: 0,
    height: 50,
    padding: 5,
    textAlign: 'center',
  },
  text: {
    alignItems: 'center',
    backgroundColor: '#FFFFFFDD',
    borderWidth: 0,
    height: 50,
    padding: 5,
    marginBottom: 30,
    textAlign: 'center',
  },
  view: {
    alignItems: 'center',
  }
});

module.exports = CreateScreen;
