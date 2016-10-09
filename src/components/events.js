import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TextInput,
  TouchableOpacity,
  } from 'react-native';
import Geocoder from 'react-native-geocoder';

const eventbriteAPI =  require('../api/EventbriteAPI')
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});


module.exports = React.createClass({
  getInitialState() {
    console.log("EVENTS: getIntialState");
    return ({
      eventType: '',
      city: '',
      dataSource: ds.cloneWithRows([
        {
          name: {
            text: 'Event 1'
          },
          url: 'www.eventone.com'
        },
        {
          name: {
            text: 'Event 1'
          },
          url: 'www.eventone.com'
        },
        {
          name: {
            text: 'Event 1'
          },
          url: 'www.eventone.com'
        },
        {
          name: {
            text: 'Event 1'
          },
          url: 'www.eventone.com'
        },
        {
          name: {
            text: 'Event 1'
          },
          url: 'www.eventone.com'
        },
        {
          name: {
            text: 'Event 1'
          },
          url: 'www.eventone.com'
        },
      ]),
    });
  },
  componentDidMount() {
    this.searchEvents('hackathon','San Francisco');
  },
  searchEvents(eventType, city) {
    eventbriteAPI.searchEvents(eventType, city, (responseJSON) =>{
      this.setState({dataSource: ds.cloneWithRows(responseJSON.events)});
    });
  },
  renderText(text) {
    return text.length > 30 ? `${text.substring(0,30)}...` : text;
  },
  pushDetail(rowData) {
    this.props.navigator.push({
      name: 'eventDetail',
      title: rowData.name.text,
      description: rowData.description.text,
      url: rowData.url,
      img: rowData.logo.url,
    });
  },
  renderRow(rowData) {
    const defaultImg = 'https://pixabay.com/static/uploads/photo/2014/08/21/19/43/question-423604__180.png';
    let img = rowData.logo != null ? rowData.logo.url : defaultImg;

    return (
      <View style={styles.row}>
        <Image
          style={styles.rowLogo}
          source={{uri: img}}
        />
        <View style={styles.rowDetails}>
          <Text>
            {this.renderText(rowData.name.text)}
          </Text>
          <TouchableOpacity
            onPress={() => this.pushDetail(rowData)}
          >
            <Text style={styles.link}>
              more details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  },
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Eventbrite
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='kind of event...'
            onChangeText={(text) => this.setState({eventType: text})}
          />
          <TextInput
            style={styles.input}
            placeholder='city...'
            onChangeText={(text) => this.setState({city: text})}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.searchEvents(this.state.eventType,this.state.city)}
          >
            <Text style={styles.submitButtonText}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  form: {
    flex: 4
  },
  list: {
    flex: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  rowLogo: {
    flex: 1,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#000',
  },
  rowDetails: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    textAlign: 'center',
  },
  submitButton: {
    flex: 1,
    margin: 5,
  },
  submitButtonText: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#00F',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    color: '#00F',
    padding: 15,
  },
  link: {
    color: '#00F',
  }
});
