import React, { useState, useEffect } from 'react';
import fetch from '../lib/fetch';

const App = () => {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch.getEvents().then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
