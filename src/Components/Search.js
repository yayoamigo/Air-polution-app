import React from 'react';
import { setSearch } from '../Redux/ducks/slices';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';


const Search = () => {
    const search = useSelector((state) => state.countries.search)
    const dispatch = useDispatch();
    const Input = useRef("")
    const handleSearch = () => {
    dispatch(setSearch(Input.current.value))
    }
    console.log(search)
  return (
    <div>
        <input
        ref={Input}
        type="text"
        placeholder='search...'
        onChange={handleSearch}
        value={search}
        />
    </div>
  )
}

export default Search;