import React, { Component } from 'react';
import { AppRegistry, Text, TextInput } from 'react-native';

class HaikuTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter ' + props.syllables + ' syllables' };
  }

  render() {
    return (
      <TextInput
        style={this.props.style}
        onChangeText={this.props.onChangeText}
        placeholder={this.state.text}
        placeholderTextColor='gray'
      />
    );
  }
}

// App registration and rendering
module.exports = HaikuTextInput;
