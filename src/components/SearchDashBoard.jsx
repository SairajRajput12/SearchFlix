import React, { useState } from 'react';
import './SearchDashboard.css'; 
import Logo from './Logo';
import Input from '../UI/Input';
import Navbar from './Navbar';
import Filters, { dummyFilters, handleFiltersChange } from './Filter';
import MoviesList from './Movies';
import MovieComponent from './MovieComponent';
import { useLocation } from 'react-router-dom';


export default function SearchDashBoard({movieData}) {
  const [filters, setFilters] = useState(dummyFilters);
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || ''; 
  const userMovie = location.state?.data || ''; 
  console.log(searchQuery); 

  

  const updateFilters = (updatedFilters) => {
    setFilters(updatedFilters);
    handleFiltersChange(updatedFilters); // Log or process the updated filters
  };

  return (
    <div className='search-page'>

        {/* Navbar Component */}
        <Navbar className='navbar'>
            <Logo />
        </Navbar>

        {/* Filters Component */}
        <div className='filters-section'>
          <Filters filters={filters} onChange={updateFilters} />
        </div>

        {/* Movie List component */}
        <MoviesList userMovie={userMovie} searchQuery={searchQuery} />
        {/* <MovieComponent movie={movieData} /> */}
    </div>
  );
}
