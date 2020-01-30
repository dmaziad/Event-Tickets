const axios = require('axios');

const getEvents = async () => {
  return await axios.get('/events');
};

const getLocations = async () => {
  return await axios.get('/locations');
};

module.exports = {
  getEvents,
  getLocations
};
