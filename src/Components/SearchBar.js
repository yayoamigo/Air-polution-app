import React from 'react';
import {FiSearch} from 'react-icons/fi';

export const SearchBar = () => {
  return (
   
    <form className='search'>
    <FiSearch/>
    <input className='input'
    defaultValue=""
    placeholder='Search by country'
    />
    </form>
  )
}
