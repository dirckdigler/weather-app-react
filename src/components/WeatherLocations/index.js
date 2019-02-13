import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import  { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Locations from './Locations';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import Testing from './WeatherData/Testing';


class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    const {city} = props;
    this.state = {
      city,
      data: null,
    };
  };

  componentDidMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    console.log(api_weather, 'api_weather');
    fetch(api_weather).then( resolve => {
      return resolve.json();
    }).then(data => {
      const newWeather = transformWeather(data);
      console.log(newWeather);
      this.setState({
        data: newWeather
      });
    });
  }

  render() {
    const { city, data} = this.state;
    return (
      <div className='weatherLocationCont'>
        <Testing name='edwin'/>
        <Locations city={city}></Locations>
        {data ?
          <WeatherData data={data}></WeatherData> :
          <CircularProgress size={50}/>
        }
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}

export default WeatherLocation;
