import React, { useState } from 'react';
import './SearchDashboard.css'; 
import Logo from './Logo';
import Input from '../UI/Input';
import Navbar from './Navbar';
import Filters, { dummyFilters, handleFiltersChange } from './Filter';
import MoviesList from './Movies';
import MovieComponent from './MovieComponent';
export default function SearchDashBoard({movieData}) {
  const [filters, setFilters] = useState(dummyFilters);

  const updateFilters = (updatedFilters) => {
    setFilters(updatedFilters);
    handleFiltersChange(updatedFilters); // Log or process the updated filters
  };

  return (
    <div className='search-page'>

        {/* Navbar Component */}
        {/* <Navbar className='navbar'>
            <Logo />
        </Navbar> */}

        {/* Filters Component */}
        {/* <div className='filters-section'>
          <Filters filters={filters} onChange={updateFilters} />
        </div> */}

        {/* Movie List component */}
        {/* <MoviesList /> */}
        <MovieComponent movie={movieData} />
    </div>
  );
}
