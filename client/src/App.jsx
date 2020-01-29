import React, { useState, useEffect } from 'react';
import fetch from '../lib/fetch';
import EventList from './components/EventList';

const App = () => {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch.getEvents().then(({ data }) => {
      setEvents(data);
    });
  };

  return (
    <div>
      <h1>Event Tickets</h1>
      <EventList events={events} />
    </div>
  );
};

export default App;
