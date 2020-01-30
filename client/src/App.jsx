import React, { useState, useEffect } from 'react';
import fetch from '../lib/fetch';
import Filter from './components/Filter';
import EventList from './components/EventList';

const App = () => {
  let [events, setEvents] = useState([]);
  let [locations, setLocations] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    fetch.getEvents().then(({ data }) => {
      setEvents(data);
    });
  };

  const getLocations = () => {
    fetch.getLocations().then(({ data }) => {
      data.sort();
      setLocations(data);
    });
  };

  const filterEvents = venue => {
    fetch.getEvents(venue).then(({ data }) => {
      setEvents(data);
    });
  };

  return (
    <div>
      <h1>Event Tickets</h1>
      <Filter
        getLocations={getLocations}
        locations={locations}
        filterEvents={filterEvents}
      />
      <EventList events={events} />
    </div>
  );
};

export default App;
