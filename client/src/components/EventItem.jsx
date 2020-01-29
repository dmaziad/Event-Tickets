import React from 'react';

const EventItem = ({ event }) => {
  // I do have some reservations about assigning "Date" variable
  // that may conflict with Date keyword, however I went this route
  // for the sake of uniformity
  const { Day, Date, Time, EventName, VenueName, MinPrice } = event;

  const adjustTime = time => {
    const hour = time.slice(0, 2);
    if (Number(hour) === 0) {
      return `12${time.slice(2, 5)} AM`;
    }
    if (Number(hour) === 12) {
      return `12${time.slice(2, 5)} PM`;
    }
    if (Number(hour) > 12) {
      const adjustedHour = Number(hour) - 12;
      return `${adjustedHour + time.slice(2, 5)} PM`;
    }
    if (Number(hour) > 12) {
      const adjustedHour = Number(hour) - 12;
      return `${time} AM`;
    }
  };

  const adjustedTime = adjustTime(Time);

  return (
    <tr className="event-item">
      <td className="event-date">
        {Day} {Date}
      </td>
      <td className="event-time">{adjustedTime}</td>
      <td className="event-name">
        {EventName} - {VenueName}
      </td>
      <td className="event-price">{MinPrice}</td>
    </tr>
  );
};

export default EventItem;
