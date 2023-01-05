import React, {useEffect} from 'react'
import { FilterBy } from '../Components/FilterBy';
import { useSelector, useDispatch } from 'react-redux';
import { getValues } from '../Redux/ducks/slices';
import Countries from '../Components/Countries';
import Search from '../Components/Search';


const HomePage = () => {
 const countriesArr = useSelector((state) => state.countries.countries);
 const isLoading = useSelector((state) => state.countries.isLoading);
 const selectedContinent = useSelector((state) => state.countries.selectedContinent)
 const search = useSelector((state) => state.countries.search)
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

const filterSearch = countriesArr.filter((country) => country.Name.toLowerCase().includes(search))

  return (
  <div className='App'>
    <div className='filters'>
    <Search/>
    <FilterBy />
    </div>
    <div className='Box'>
    { isLoading ? <div className="loading-container">
    <div className="loading-wheel"></div>
    <p className="loading-text">Please wait</p>
    </div> :  
    !isLoading && selectedContinent === 'All' && search === ""  ? countriesArr.map((country)=>(
    <Countries
    key={country.Name}
    name = {country.Name}
    aqi = {country.list[0].main.aqi}
    continent = {country.Continent}
    />
    )) : !isLoading && search === "" ? filteredCountries.map((country)=>(
    <Countries
    key={country.Name}
    name = {country.Name}
    aqi = {country.list[0].main.aqi}
    continent = {country.Continent}
    />
    )) :  !isLoading && filterSearch.length === 0 ? <p>Country not found</p> : filterSearch.map((country)=>(
    <Countries
    key={country.Name}
    name = {country.Name}
    aqi = {country.list[0].main.aqi}
    continent = {country.Continent}
    />
))}

    </div>
  </div>
)
}

export default HomePage;