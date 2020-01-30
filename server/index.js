const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const data = require('../data/eventList');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/events', (req, res) => {
  res.send(data.json.Items);
});

app.get('/locations', (req, res) => {
  const locations = {};
  const locationList = [];
  data.json.Items.map(({ VenueName }) => {
    if (!locations[VenueName]) {
      locationList.push(VenueName);
      locations[VenueName] = true;
    }
  });
  res.send(locationList);
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});
