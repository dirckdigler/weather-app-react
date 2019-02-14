import React from 'react';
import WeatherLocation from './WeatherLocations';

const LocationsList = () => (
    <div>
      <WeatherLocation city='Buenos aires,ar' />
      <WeatherLocation city='Bogota,col' />
      <WeatherLocation city='Madrid,es' />
    </div>
);

export default LocationsList;
