import React, { useState, useEffect } from 'react';
import FilterItem from './FilterItem';
import fetch from '../../lib/fetch';

const Filter = ({ getLocations, filterEvents, locations }) => {
  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="filter">
      <label className="location-filter">
        <select id="city" onChange={e => filterEvents(e.target.value)}>
          <option value="">Select City</option>
          {locations.map(city => (
            <FilterItem key={city.name} city={city} />
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filter;
