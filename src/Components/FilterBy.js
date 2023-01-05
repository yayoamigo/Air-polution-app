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
    <div className='filterDiv'>
    <p className='filterTitle'>Filter by continent</p>
     <select value={selected} onChange={handleChange} className="selectdiv">
      <option className='select' value="All"> All</option>
      <option className='select' value="Africa"> Africa</option>
      <option className='select' value="Europe"> Europe</option>
      <option className='select' value="North America"> North America</option>
      <option className='select' value="Asia"> Asia</option>
      <option className='select' value="South America"> South America</option>
      <option className='select' value="Oceania"> Oceania</option>
    </select>
    </div>
   
  )
}
