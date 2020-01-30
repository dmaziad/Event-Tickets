import React from 'react';

const FilterItem = ({ venue }) => {
  return (
    <option key={venue} value={venue}>
      {venue}
    </option>
  );
};

export default FilterItem;
