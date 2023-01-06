import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const { name } = useParams();
  const countriesArr = useSelector((state) => state.countries.countries);
  const isLoading = useSelector((state) => state.countries.isLoading);
  const filterCountry = countriesArr.filter((country) => country.Name === name);
  const { components } = filterCountry[0].list[0];

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-wheel" />
          <p className="loading-text">Please wait</p>
        </div>
      ) : (
        <div className="details">
          <h2>{filterCountry[0].Name}</h2>
          {Object.entries(components).map(([key, value]) => (
            <div key={key} className="components">
              <h3>{key}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
