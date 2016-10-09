import React, {Comonent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  } from 'react-native';
import Geocoder from 'react-native-geocoder';

const eventbriteAPI =  require('./api/EventbriteAPI')
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});


module.exports = React.createClass({
  getInitialState() {
    return ({
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
    eventbriteAPI.searchEvents('hackathon', 'San Francisco', (responseJSON) =>{
      this.setState({dataSource: ds.cloneWithRows(responseJSON.events)});
    });
  },
  renderText(text) {
    return text.length > 30 ? `${text.substring(0,30)}...` : text;
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
          <Text>
            more details
          </Text>
        </View>
      </View>
    )
  },
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Main
        </Text>
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
});
