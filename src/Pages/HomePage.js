import React, {useEffect} from 'react'
import { Nav } from '../Components/Nav';
import { FilterBy } from '../Components/FilterBy';
import { useSelector, useDispatch } from 'react-redux';
import { getValues } from '../Redux/ducks/slices';
import Countries from '../Components/Countries';
import Search from '../Components/Search';


export const HomePage = () => {
 const countriesArr = useSelector((state) => state.countries.countries);
 const isLoading = useSelector((state) => state.countries.isLoading);
 const selectedContinent = useSelector((state) => state.countries.selectedContinent)
 const { length} = countriesArr;
 const dispatch = useDispatch();
 useEffect(() => {
  if (length === 0) {
   dispatch(getValues())
  }
 }, [dispatch]);

 const filteredCountries = countriesArr.filter((country) => {
  return country.Continent === selectedContinent
})

  return (
   <div className='App'>
   <Nav/>
   <div className='filters'>
    <Search/>
    <FilterBy />
   </div>
   <div className='Box'>
   {isLoading ? (
  <p>Is loading</p>
) : (
  filteredCountries.map((country)=>(
    <Countries
    key={country.Name}
    name = {country.Name}
    aqi = {country.list[0].main.aqi}
    continent = {country.Continent}
    />
  ))
)}
   </div>
  </div>
  )
}
