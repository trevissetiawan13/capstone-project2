import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../store/apiSlice';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchNews({ query: searchTerm }));
  };
  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-600 rounded-l p-2 text-black"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white rounded-r px-4">Search</button>
    </form>
  );
};

export default SearchBar;