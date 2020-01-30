import React from 'react';

const FilterItem = ({ city }) => {
  return (
    <option value={city.name}>
      {city.name} from {city.minPrice}
    </option>
  );
};

export default FilterItem;
