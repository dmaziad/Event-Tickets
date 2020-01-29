import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Event</th>
        <th> </th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {events.map(event => (
        <EventItem key={event.EventId} event={event} />
      ))}
    </tbody>
  </table>
);

export default EventList;
