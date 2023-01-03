import React, {useEffect} from 'react'
import { Nav } from '../Components/Nav';
import { FilterBy } from '../Components/FilterBy';
import { useSelector, useDispatch } from 'react-redux';
import { getValues } from '../Redux/ducks/slices';
import Countries from '../Components/Countries';


export const HomePage = () => {
 const countriesArr = useSelector((state) => state.countries.countries);
 const isLoading = useSelector((state) => state.countries.isLoading);
 const { length} = countriesArr;
 const dispatch = useDispatch();
 useEffect(() => {
  if (length === 0) {
   dispatch(getValues())
  }
 }, [dispatch]);

  return (
   <div className='App'>
   <Nav/>
   <div className='filters'>
    <FilterBy />
   </div>
   <div className='Box'>
   {isLoading ? (
  <p>Is loading</p>
) : (
  countriesArr.map((country)=>(
    <Countries
    name = {country.Name}
    aqi = {country.list[0].main.aqi}
    />
  ))
)}
   </div>
  </div>
  )
}
