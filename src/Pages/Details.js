import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
 const {name} = useParams();
 const countriesArr = useSelector((state) => state.countries.countries);
 const isLoading = useSelector((state) => state.countries.isLoading);


  return (
    <div>
    <p>this is the page</p>
    </div>
  )
}

export default Details;