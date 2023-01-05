import React from 'react';
import { Link } from 'react-router-dom';

const Countries = ({name,aqi}) => {
  return (
    <div className='countries' key={name}>
      <h2>{name}</h2>
      <p>Air quality :{aqi}</p>
      <Link to={`/country/${name}`}  >
      <button>more...</button>
      </Link>
    </div>
  )
}

export default Countries;