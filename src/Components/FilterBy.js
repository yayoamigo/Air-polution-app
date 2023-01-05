import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedContinent } from '../Redux/ducks/slices';

export const FilterBy = () => {
  const selected = useSelector((state) => state.countries.selectedContinent)
  const dispatch = useDispatch();

  const handleChange = (e) => {
   dispatch(setSelectedContinent(e.target.value))
  }

  return (
    <select value={selected} onChange={handleChange}>
      <option className='' value="All"> All</option>
      <option className='' value="Africa"> Africa</option>
      <option className='' value="Europe"> Europe</option>
      <option className='' value="North America"> North America</option>
      <option className='' value="Asia"> Asia</option>
      <option className='' value="South America"> South America</option>
      <option className='' value="Oceania"> Oceania</option>
    </select>
  )
}
