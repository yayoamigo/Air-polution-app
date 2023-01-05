import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Countries = ({ name, aqi }) => (
  <div className="countries" key={name}>
    <h2>{name}</h2>
    <p>
      Air quality :
      {aqi}
    </p>
    <Link to={`/country/${name}`}>
      <button type="button">more...</button>
    </Link>
  </div>
);

Countries.propTypes = {
  name: PropTypes.string.isRequired,
  aqi: PropTypes.string.isRequired,
};

export default Countries;
