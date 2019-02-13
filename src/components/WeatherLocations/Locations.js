import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Locations = ({ city }) => (
    <div className='locationCont'>
      <h1>{ city }</h1>
    </div>
);

Locations.propTypes = {
  city:  PropTypes.string.isRequired,
};

export default Locations;
