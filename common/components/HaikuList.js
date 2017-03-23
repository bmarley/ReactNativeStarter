import React, { Component } from 'react';
import { 
    ListView, 
    Text 
} from 'react-native';

import firebase from '../services/firebase';

import Haiku from './Haiku.js';

class HaikuList extends React.Component {
    
    constructor() {
        super();
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
          haikuList: this.ds.cloneWithRows([])
        };
      
        this.getHaikuList();
    }
  
    getHaikuList() {
      let that = this;
      firebase.getList(function(data) {
        that.setState({haikuList: that.ds.cloneWithRows(data)});
      });
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