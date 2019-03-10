import React from 'react';
import WeatherLocation from './WeatherLocations';
import PropTypes from 'prop-types';

const strComponents = cities => (
  cities.map( city => <WeatherLocation key={city} city={city} /> )
)

const LocationsList = ({ cities }) => (
    <div>
      {strComponents(cities)}
    </div>
);

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationsList;
