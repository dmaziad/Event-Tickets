const axios = require('axios');

const getEvents = async () => {
  return await axios.get('/events');
};

module.exports = {
  getEvents
};
