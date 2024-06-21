import React, { useRef } from 'react';
import { SlMagnifier } from 'react-icons/sl';

const SearchBtn = ({ setSearch }) => {
  const searchRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleButtonClick = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className="searchBtn">
      <input
        type="search"
        placeholder="Search for Anime"
        onChange={handleSearchChange}
        ref={searchRef}
      />
      <button onClick={handleButtonClick}>
        <SlMagnifier />
      </button>
    </div>
  );
};

export default SearchBtn;
