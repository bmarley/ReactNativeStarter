import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    ScrollView,
    Image
} from 'react-native';
import firebase from '../services/firebase';
import { NavigationActions } from 'react-navigation';

const tryAgainBtn_Click = () => {
  Alert.alert('Try Again Button has been pressed!');
};

// <TouchableOpacity onPress={tryAgainBtn_Click}>
//   <Text>Try Again</Text>
// </TouchableOpacity>

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
                                source={{uri: params.haiku.gif1}}
                        />
                        <Text style={styles.haikuText}>{params.haiku.text1}</Text>
                      </View>
                      <View style={styles.haikuComponent}>
                        <Image style={styles.haikuImage}
                                source={{uri: params.haiku.gif2}}
                        />
                        <Text style={styles.haikuText}>{params.haiku.text2}</Text>
                      </View>
                      <View style={styles.haikuComponent}>
                        <Image style={styles.haikuImage}
                                source={{uri: params.haiku.gif3}}
                        />
                        <Text style={styles.haikuText}>{params.haiku.text3}</Text>
                      </View>
                  </ScrollView>
                </View>
                <View style={styles.buttons}>
                  <Button
                    style={styles.button}
                    onPress={this.saveBtn_Click.bind(this)}
                    title="Save"
                    color="#841584"
                    accessibilityLabel='Save Haiku'
                  />
                </View>
            </View>
        );
    }

    saveBtn_Click() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        let model = {
            text1: params.haiku.text1 || null,
            text2: params.haiku.text1 || null,
            text3: params.haiku.text1 || null,
            gif1: params.haiku.gif1 || null,
            gif2: params.haiku.gif2 || null,
            gif3: params.haiku.gif3 || null,
        };

        const navigateAction = NavigationActions.navigate({

            routeName: 'Profile',

            params: {},

            action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
        });


        firebase.save(model, function() {
            Alert.alert('Saved!');
        });
    };
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
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
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
      textAlign: 'center',
      fontSize: 16,
      padding: 20
    },
    buttons: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      borderWidth: 0,
      height: 50,
      padding: 5,
      textAlign: 'center',
    },
    saveBtn: {
        backgroundColor: 'red',
        width: 120,
        height: 60
    }
});

module.exports = ViewScreen;
