/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/main';
var config =  require('./config/config');

console.log('config ',config);
console.log('config: ',config.EVENTBRITE_URL)

class RNEventbrite extends Component {
  render() {
    return (
      <Main />
    );
  }
}
AppRegistry.registerComponent('RNEventbrite', () => RNEventbrite);
