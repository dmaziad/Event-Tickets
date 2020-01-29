import React from 'react';

const EventItem = ({ event }) => {
  return (
    <tr className="event-item">
      <td className="event-date">
        {event.Day} {event.Date}
      </td>
      <td className="event-time">{event.Time}</td>
      <td className="event-name">
        {event.EventName} - {event.VenueName}
      </td>
      <td className="event-price">{event.MinPrice}</td>
    </tr>
  );
};

export default EventItem;
