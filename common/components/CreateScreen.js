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
import GiphyAPI from '../services/giphy_api';

class CreateScreen extends React.Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => 'Haiku Me',
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
    let navigate = this.props.navigate;

    if (!state.text1 || !state.text2 || !state.text3) {
      Alert.alert('Fill in all fields')
    } else {
      var gif1, gif2, gif3;

      // TODO: Promise library
      GiphyAPI.search(state.text1).then(data => {
        gif1 = data[0].images.original.url;
        console.log(gif1);

        GiphyAPI.search(state.text2).then(data => {
          gif2 = data[0].images.original.url;
          console.log(gif2);

          GiphyAPI.search(state.text3).then(data => {
            gif3 = data[0].images.original.url;
            console.log(gif3);

            let model = [
              { 'text1': state.text1, 'gif1': gif1 },
              { 'text2': state.text2, 'gif2': gif2 },
              { 'text3': state.text3, 'gif3': gif3 }
            ];

            console.log('All gifs have been received; generated model ' + JSON.stringify(model));

            // TODO: Pass model to view
            //navigate('View', { model: model });
          });
        });
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
