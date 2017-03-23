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
        style={this.props.style}
        onChangeText={this.props.onChangeText}
        placeholder={this.state.text}
        placeholderTextColor='black'
      />
    );
  }
}

// App registration and rendering
module.exports = HaikuTextInput;
