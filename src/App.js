import React, { Component } from 'react';
import './App.css';
import LocationsList from './components/LocationsList';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Madrid,mx',
  'Lima,pe',
];

class App extends Component {
  handleSelectedLocation= city  => {
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    return (
      <div className = 'App'>
        <LocationsList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        >
        </LocationsList>
      </div>
    );
  }
}

export default App;
