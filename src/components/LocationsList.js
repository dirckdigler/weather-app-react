import React from 'react';
import WeatherLocation from './WeatherLocations';
import PropTypes from 'prop-types';

const LocationsList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    onSelectedLocation(city);
  };

  const strComponents = cities => (
    cities.map( city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick = {() => handleWeatherLocationClick(city) }
      />
    ))
  );
  return (
    <div>
      {strComponents(cities)}
    </div>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationsList;
