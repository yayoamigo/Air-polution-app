import React from 'react';
import { setSearch } from '../Redux/ducks/slices';
import { useDispatch, useSelector } from 'react-redux';


const Search = () => {
    const search = useSelector((state) => state.countries.search)
    const dispatch = useDispatch()
    const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
    }

    console.log(search)
  return (
    <div>
        <input
        type="text"
        placeholder='search...'
        onChange={handleSearch}
        value={search}
        />
    </div>
  )
}

export default Search;