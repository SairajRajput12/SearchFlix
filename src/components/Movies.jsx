import React from 'react';
import './MoviesList.css'; // Ensure you style the component
import Button from '../UI/Button';

export default function MoviesList() {
  const movies = [
    {
      id: 1,
      title: 'Inception',
      poster: 'inception.jpg',
      rating: 8.8,
      year: 2010,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster: 'dark_knight.jpg',
      rating: 9.0,
      year: 2008,
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: 'Interstellar.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 4,
      title: 'Pushpa',
      poster: 'pushpa.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 5,
      title: 'KGF 2',
      poster: 'KGF2.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 6,
      title: 'Avengers: End Game',
      poster: 'end_game.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 7,
      title: 'Iron Man',
      poster: 'iron_man.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 8,
      title: 'KGF',
      poster: 'kgf.jpg',
      rating: 8.6,
      year: 2014,
    }
  ];

  return (
    <div className='movie-list'>
      <h1>We got your recommended movies</h1>
      <div className='card-container'>
        {movies.map((movie) => (
          <div className='card' key={movie.id}>
            <img className='card-image' src={movie.poster} alt={movie.title} />
            <div className='card-content'>
              <h2 className='card-title'>{movie.title}</h2>
              <p className='card-rating'>Rating: {movie.rating}</p>
              <p className='card-year'>Year: {movie.year}</p>
              <Button className='view-movie'>View</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
