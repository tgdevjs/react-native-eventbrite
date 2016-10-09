import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

module.exports = React.createClass({
  render() {
    const {title, url, img, description} = this.props
    return (
      <View style={styles.container}>
        <Text>Event Detail</Text>
        <Text>{title}</Text>
        <Text>{url}</Text>
        <Text>{img}</Text>
        <Text>{description}</Text>
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
