import React, { useState, useEffect } from 'react';
import FilterItem from './FilterItem';
import fetch from '../../lib/fetch';

const Filter = ({ getLocations, locations }) => {
  // let [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  // const getLocations = () => {
  //   fetch.getLocations().then(({ data }) => {
  //     data.sort();
  //     setLocations(data);
  //   });
  // };

  return (
    <div className="filter">
      <label className="venue-filter">
        <select id="venue">
          <option value="">Select Venue</option>
          {locations.map(venue => (
            <FilterItem venue={venue} />
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filter;
