import React, {useEffect} from 'react'
import { Nav } from '../Components/Nav';
import { FilterBy } from '../Components/FilterBy';
import { SearchBar } from '../Components/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { getValues } from '../Redux/ducks/slices';


export const HomePage = () => {
 const countriesArr = useSelector((state) => state.countries.countries);
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
    <SearchBar />
    <FilterBy />
   </div>
   <div>
   <p> {countriesArr.list[0].dt}</p>
   </div>
  </div>
  )
}
