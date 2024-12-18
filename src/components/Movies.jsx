import React, { useEffect, useState } from 'react';
import './MoviesList.css';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

export default function MoviesList({updateMovieData,movieData,searchQuery,userMovie,moviesDs}) {
  const navigate = useNavigate();

  let headerContent = '';
  if (searchQuery === '') {
    headerContent = `Here are new movies`;
  } else {
    headerContent = `Here are recommended movies for ${searchQuery}`;
  }

  useEffect(() => {
    if (userMovie && userMovie !== '') {
      console.log('Updating movie data with userMovie:', userMovie);
      updateMovieData([userMovie]); 
    }
  }, []);

  const viewMovie = (index, movie) => {
    navigate(`/movie/${index}`, { state: { movieData: movie } });
  };

  const movies = userMovie && userMovie !== '' ? [userMovie] : moviesDs;

  return (
    <div className='movie-list'>
      <h1>{headerContent}</h1>
      <div className='card-container'>
        {movieData.map((movie, index) => (
          <div className='card' key={index}>
            <img className='card-image' src={movie.Poster} alt={movie.Title} />
            <div className='card-content'>
              <h2 className='card-title'>{movie.Title}</h2>
              <p className='card-rating'>
                Ratings:
                {movie.Ratings && movie.Ratings.length > 0
                  ? movie.Ratings.map((rating, index) => (
                      <span key={index}>
                        <br />
                        {rating.Source}: {rating.Value}
                      </span>
                    ))
                  : ' No Ratings Available'}
              </p>
              <p className='card-year'>Year: {movie.Year}</p>
              <Button
                onClick={() => viewMovie(index, movie)}
                className='view-movie'
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
