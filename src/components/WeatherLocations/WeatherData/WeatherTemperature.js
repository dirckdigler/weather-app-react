import React from 'react';
import WeatherIconsx from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from './../../../constants/weather';

const icons = {
  [CLOUD] : 'cloud',
  [SUN] : 'day-sunny',
  [RAIN] : 'rain',
  [SNOW] : 'snow',
  [THUNDER] : 'day-thunderstore',
  [DRIZZLE] : 'day-showers',
};

const getWeatherIcon = weatherState =>  {
  const icon = icons[weatherState];
  const sizeIcon = '4x';

  if (icon) {
    return <WeatherIconsx className='wicon' name={icon} size={ sizeIcon } />
  }
  else {
    return <WeatherIconsx className='wicon' name={'day-sunny'} size={ sizeIcon } />
  }
}
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className='weatherTemperatureCont'>
    {
      getWeatherIcon(weatherState)
    }
    <span className='temperature'>{ `${temperature}`}</span>
    <span className='temperatureType'>{ `Cª` }</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
