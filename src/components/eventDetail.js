import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';

module.exports = React.createClass({
  openUrl(url) {
    Linking.canOpenURL(url).then(supported => {
      if(supported) {
        Linking.openURL(url);
      }else {
        console.log(`Can't open: ${url}`);
      }
    })
  },
  render() {
    const {title, url, img, description} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigator.pop()}
          >
            <Text style={styles.link}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.openUrl(this.props.url)}
          >
            <Text style={styles.link}>FullDetails</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.detailImage}
            source={{uri: this.props.img}}
          />
          <Text style={styles.title}>{title}</Text>
          <ScrollView style={styles.descriptionScrollView}>
            <Text>{description}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  body: {
    flex: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#00F',
  },
  detailImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
  descriptionScrollView: {
    padding: 10
  },
});
