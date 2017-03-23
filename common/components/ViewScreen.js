import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

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
                <Text>Chatting with {params.exampleParam}...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 100
    }
});

module.exports = ViewScreen;
