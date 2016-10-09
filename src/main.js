import React, {Comonent} from 'react';
import {View,
  Text,
  StyleSheet} from 'react-native';
import Geocoder from 'react-native-geocoder';

var eventbriteAPI =  require('./api/EventbriteAPI')

module.exports = React.createClass({
  componentDidMount() {
    eventbriteAPI.searchEvents('hackathon', 'San Francisco');
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
