import React, {Comonent} from 'react';
import {View,
  Text,
  StyleSheet} from 'react-native';

var eventbriteAPI =  require('./api/EventbriteAPI')

module.exports = React.createClass({
  componentDidMount() {
    eventbriteAPI.searchEvents('hackathon');
  },
  render() {
    return(
      <View style={styles.container}>
        <Text>
          Main
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
