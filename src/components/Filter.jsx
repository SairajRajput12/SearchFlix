// Import necessary libraries
import React from 'react';
import './Filters.css';
import Button from '../UI/Button';

const Filters = ({submitFilter, filters, onChange }) => {
  return (
    <div className="filters-container">

      {/* Year Filter */}
      <div className="filter-group">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="year"
          value={filters.year || ''}
          onChange={(e) => onChange({ ...filters, year: e.target.value })}
          placeholder="e.g., 2023"
        />
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="10"
          step="0.1"
          value={filters.rating || ''}
          onChange={(e) => onChange({ ...filters, rating: e.target.value })}
          placeholder="e.g., 8.5"
        />
      </div>

      {/* Genre Filter */}
      <div className="filter-group">
        <label htmlFor="genre">Genre</label>
        <select
          id="genre"
          name="genre"
          value={filters.genre || ''}
          onChange={(e) => onChange({ ...filters, genre: e.target.value })}
        >
          <option value="">Select Genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>
      </div>

      {/* Actors Filter */}
      <div className="filter-group">
        <label htmlFor="actors">Title</label>
        <input
          type="text"
          id="actors"
          name="actors"
          value={filters.actors || ''}
          onChange={(e) => onChange({ ...filters, actors: e.target.value })}
          placeholder="e.g., Pushpa"
        />
      </div>

      <Button onClick={() => submitFilter(filters)} className='filter-button' >Apply</Button>
    </div>
  );
};

export default Filters;



