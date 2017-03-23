import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';

var Carousel = require('react-native-carousel');

const tryAgainBtn_Click = () => {
  Alert.alert('Try Again Button has been pressed!');
};

// <TouchableOpacity onPress={tryAgainBtn_Click}>
//   <Text>Try Again</Text>
// </TouchableOpacity>

const saveBtn_Click = () => {
  Alert.alert('Save Button has been pressed!');
};

class ViewScreen extends React.Component {
    static navigationOptions = {
        // Nav options can be defined as a function of the navigation prop:
        title: ({ state }) => `Chat with ${state.params.exampleParam}`,
    };

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.view}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>Haiku Time!</Text>
                </View>
                <View style={styles.haikuContent}>
                  <ScrollView>
                      <View style={styles.haikuComponent}>
                        <Text>View 1</Text>
                      </View>
                      <View style={styles.haikuComponent}>
                        <Text>View 2</Text>
                      </View>
                      <View style={styles.haikuComponent}>
                        <Text>View 3</Text>
                      </View>
                  </ScrollView>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity onPress={saveBtn_Click}>
                    <Text>Save</Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        // alignItems: 'center',
        // padding: 10,
        // flexDirection: 'column',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'transparent',
    },
    header: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
      //fontSize: 26
    },
    headerText: {
      fontSize: 26,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
    },
    haikuContent: {
      flex: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
    },
    haikuComponent: {
      flex: 2
    },
    buttons: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

module.exports = ViewScreen;
