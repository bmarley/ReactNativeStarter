import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image
} from 'react-native';

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
        title: ({ state }) => 'Haiku Time'
    };

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.view}>
                <View style={styles.haikuContent}>
                  <ScrollView style={styles.haikuScrollView} contentContainerStyle={{justifyContent: 'center',
                  alignItems: 'center'}}>
                      <View style={styles.haikuComponent}>
                        <Image style={styles.haikuImage}
                                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        />
                        <Text style={styles.haikuText}>View 1</Text>
                      </View>
                      <View style={styles.haikuComponent}>
                        <Image style={styles.haikuImage}
                                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        />
                        <Text style={styles.haikuText}>View 2</Text>
                      </View>
                      <View style={styles.haikuComponent}>
                        <Image style={styles.haikuImage}
                                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        />
                        <Text style={styles.haikuText}>View 3</Text>
                      </View>
                  </ScrollView>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity onPress={saveBtn_Click} style={styles.saveBtn}>
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
        backgroundColor: '#b3d6d2'
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
    haikuScrollView: {
      width: '100%',
      height: '100%'
    },
    haikuComponent: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    haikuImage: {
      width: 300,
      height: 200
    },
    haikuText: {
      width: 300,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      textAlign: 'center',
    },
    buttons: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveBtn: {
        backgroundColor: 'red'
    }
});

module.exports = ViewScreen;
