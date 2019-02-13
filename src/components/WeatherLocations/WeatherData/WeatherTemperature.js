import React from 'react';
import WeatherIconsx from 'react-weathericons';
import PropTypes from 'prop-types';

const icons = {
  sunny : 'day-sunny',
  fog : 'day-fog',
  cloudy : 'cloudy',
  rain: 'rain',
  snow: 'snow',
  windy: 'windy',
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
