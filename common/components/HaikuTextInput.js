import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

class HaikuTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter ' + props.syllables + ' syllables' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.props.onChangeText}
        placeholder={this.state.text}
        placeholderTextColor='black'
      />
    );
  }
}

// App registration and rendering
module.exports = HaikuTextInput;
