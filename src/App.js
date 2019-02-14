import React, { Component } from 'react';
import './App.css';
import LocationsList from './components/LocationsList';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <LocationsList></LocationsList>
      </div>
    );
  }
}

export default App;
