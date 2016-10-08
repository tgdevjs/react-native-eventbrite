var config = require('../../config/config');
var SEARCH_URL = config.EVENTBRITE_SEARCH_URL;
var API_KEY = config.EVENTBRITE_TOKEN;
module.exports = {
  searchEvents: function(category) {
    const FETCH_URL = `${SEARCH_URL}?q=${category}/`;
    fetch(FETCH_URL, {
      method: 'GET',
      headers: {
        'Authorization': API_KEY
      },
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log('responseJSON', responseJSON);
    })
  }
};
