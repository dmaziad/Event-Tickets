const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const data = require('../data/eventList');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log('Listening on port ', port);
});
