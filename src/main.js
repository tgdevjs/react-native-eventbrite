import React, {Comonent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
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
    eventbriteAPI.searchEvents('hackathon', 'San Francisco');
  },
  renderRow(rowData) {
    return (
      <View>
        <Text>
          {rowData.name.text}
        </Text>
        <Text>
          {rowData.url}
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    marginTop: 40,
  },
  list: {
    flex: 1,
  }
});
