const axios = require('axios');

const getEvents = async venue => {
  if (venue) {
    return await axios.get(`/events/${venue}`);
  }
  return await axios.get('/events');
};

const getLocations = async () => {
  return await axios.get('/locations');
};

module.exports = {
  getEvents,
  getLocations
};
