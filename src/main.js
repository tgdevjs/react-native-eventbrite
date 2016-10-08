import React, {Comonent} from 'react';
import {View,
  Text,
  StyleSheet} from 'react-native';

module.exports = React.createClass({
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
