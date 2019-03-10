import React from 'react';
import WeatherLocation from './WeatherLocations';
import PropTypes from 'prop-types';

const LocationsList = ({ cities }) =>{
  console.log(cities);
  return (
    <div>
      <WeatherLocation city='Buenos aires,ar' />
      <WeatherLocation city='Bogota,col' />
      <WeatherLocation city='Madrid,es' />
    </div>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationsList;
