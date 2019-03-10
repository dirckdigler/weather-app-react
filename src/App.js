import React, { Component } from 'react';
import './App.css';
import LocationsList from './components/LocationsList';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de mexico,mx',
  'Madrid,mx',
  'Lima,pe',
];

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <LocationsList cities={cities}></LocationsList>
      </div>
    );
  }
}

export default App;
