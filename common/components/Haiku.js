import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Haiku extends React.Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('View', { exampleParam: 'Jonathan' })}>
        <View 
          style={styles.container}>
          <Text style={styles.text}>
            {this.props.line}...
          </Text>
          <Image 
            source={{uri:this.props.url}}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    flex: 2,
    textAlign: 'center',
    color: '#5b5b5b',
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  image: {
    flex: 1,
    height: 100
  }
});

module.exports = Haiku;