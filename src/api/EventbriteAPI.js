import Geocoder from 'react-native-geocoder';
var config = require('../../config/config');
var SEARCH_URL = config.EVENTBRITE_SEARCH_URL;
var API_KEY = config.EVENTBRITE_TOKEN;
module.exports = {
  searchEvents: function(category, city, callback) {

    Geocoder.geocodeAddress(city).then(res => {

      let categoryStr = `q=${category}`;
      let position = res[0].position;
      let locationStr = `&location.latitude=${position.lat}&location.longitude=${position.lng}`;
      let FETCH_URL = `${SEARCH_URL}?${categoryStr}${locationStr}`;

      fetch(FETCH_URL, {
        method: 'GET',
        headers: {
          'Authorization': API_KEY
        },
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log('responseJSON', responseJSON);
        if( typeof callback === 'function' && callback !== undefined){
          callback(responseJSON)
        }
      })
    })

  }
};
