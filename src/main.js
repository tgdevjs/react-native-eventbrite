import React, {Component} from 'react';
import {Navigator} from 'react-native';

import Events from './components/events';

const routes = {
  events: Events
}


module.exports = React.createClass({
  render() {
    return(
      <Navigator
        initialRoute={{name: 'events'}}
        renderScene={this.renderScene}
      />
    )
  },
  renderScene(route, navigator) {
    let Component = routes[route.name];
    return (
      <Component
        navigator={navigator}
      />
    )
  },
});
