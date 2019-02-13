import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocations';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <WeatherLocation city='Bogota,col'></WeatherLocation>
      </div>
    );
  }
}

export default App;
