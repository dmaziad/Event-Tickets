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

app.get('/events/:city', (req, res) => {
  const cityName = req.params.city.replace('%20', ' ');
  const eventsInCity = data.json.Items.filter(event => {
    if (event.VenueCity === cityName) {
      return event;
    }
  });
  res.send(eventsInCity);
});

app.get('/locations', (req, res) => {
  const locations = {};
  data.json.Items.map(({ VenueCity, MinPrice }) => {
    const city = VenueCity;
    if (!locations[city]) {
      locations[city] = MinPrice;
    } else if (locations[city] > MinPrice) {
      locations[city] > MinPrice;
    }
  });
  const locationList = Object.keys(locations);
  const locationInfo = [];
  for (let i = 0; i < locationList.length; i++) {
    let obj = { name: locationList[i], minPrice: locations[locationList[i]] };
    locationInfo.push(obj);
  }
  res.send(locationInfo);
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});
