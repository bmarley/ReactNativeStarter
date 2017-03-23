import React, { Component } from 'react';
import { 
    ListView, 
    Text 
} from 'react-native';

import Haiku from './Haiku.js';

class HaikuList extends React.Component {
    
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //replace with getHaikuList
        this.state = {
          haikuList: ds.cloneWithRows(
              [{
                line: 'dark lounges pondered',
                url: 'https://media.giphy.com/media/EDsTUVnDM9kLS/giphy.gif'
              }, {
                line: 'false flowers agreed warmly',
                url: 'https://media.giphy.com/media/Zk9mW5OmXTz9e/giphy.gif'
              }, {
                line: 'wet flowers agreed',
                url: 'https://media.giphy.com/media/11eZCNibwDFx6w/giphy.gif'
              }])
        };
    }
    
    render() {
        return (
          <ListView
            dataSource={this.state.haikuList}
            renderRow={(data) => <Haiku {...data} navigation={this.props.navigation}/>}
          />
        );
    }
}

module.exports = HaikuList;