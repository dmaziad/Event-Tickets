import React from 'react';

const EventItem = ({ event }) => {
  // I do have some reservations about assigning "Date" variable
  // that may conflict with Date keyword, however I went this route
  // for the sake of uniformity
  const {
    Day,
    Date,
    EventName,
    IsDateTimeTBA,
    IsSellingFast,
    IsSoldOut,
    MinPrice,
    Time,
    TotalMaxDisplayTickets,
    VenueName
  } = event;

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

  const sellingFast = (
    <td className="selling-fast">
      Selling fast!
      <br />
      Only {TotalMaxDisplayTickets} tickets
    </td>
  );

  return (
    <tr className="event-item">
      <td className="event-date">
        {IsDateTimeTBA === false ? `${Day} ${Date}` : 'TBA'}
      </td>
      <td className="event-time">
        {event.IsDateTimeTBA === false ? adjustedTime : 'TBA'}
      </td>
      <td className="event-name">
        {event.EventName} @ {event.VenueName} <br /> {event.VenueCity}
      </td>
      {IsSellingFast ? sellingFast : <td>{null}</td>}
      <td className="event-price">
        {IsSoldOut === false ? MinPrice : 'SOLD OUT'}
      </td>
    </tr>
  );
};

export default EventItem;
