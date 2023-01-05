import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../Redux/ducks/slices';

const Search = () => {
  const search = useSelector((state) => state.countries.search);
  const dispatch = useDispatch();
  const Input = useRef('');
  const handleSearch = () => {
    dispatch(setSearch(Input.current.value));
  };

  return (
    <div className="searchdiv">
      <input
        className="input"
        ref={Input}
        type="text"
        placeholder="search..."
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default Search;
