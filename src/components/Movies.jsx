import React, { useState } from 'react';
import './MoviesList.css'; // Ensure you style the component
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const movieD = {
  Title: "Re-Animator",
  Year: "1985",
  Rated: "Unrated",
  Released: "18 Oct 1985",
  Runtime: "84 min",
  Genre: "Comedy, Horror, Sci-Fi",
  Director: "Stuart Gordon",
  Writer: "H.P. Lovecraft, Dennis Paoli, William Norris",
  Actors: "Jeffrey Combs, Bruce Abbott, Barbara Crampton",
  Plot: "After an odd new medical student arrives on campus, a dedicated local and his girlfriend become involved in bizarre experiments centering around the re-animation of dead tissue.",
  Language: "English, German",
  Country: "United States",
  Awards: "4 wins & 4 nominations",
  Poster: "https://m.media-amazon.com/images/M/MV5BZGZhYzk5MDEtOTc2Yi00ZTAyLWI1MjctZDYzYzhmNzgyZThlXkEyXkFqcGc@._V1_SX300.jpg",
  Ratings: [
    { "Source": "Internet Movie Database", "Value": "7.2/10" },
    { "Source": "Rotten Tomatoes", "Value": "94%" },
    { "Source": "Metacritic", "Value": "73/100" },
  ],
};


export default function MoviesList({updateMovieData,searchQuery,userMovie,moviesDs}) {
  const navigate = useNavigate(); 
  
  

  let headerContent = ''; 
  
    if(searchQuery === ''){
      headerContent = `Here is new movies`; 
    }
    else{
      headerContent = `Here is recommended movies for ${searchQuery} `;
    }
  
  const viewMovie = (index,movie) => {
      navigate(`/movie/${index}`,{state:{movieData:movie}})
  }

  let movies = []; 

  console.log(userMovie); 
  if (userMovie && userMovie !== '') {
    movies.push(userMovie);
    updateMovieData(movies); 
  } else {
    movies = moviesDs;
    updateMovieData(moviesDs); 
  }
  

  console.log(movies); 

  return (
    <div className='movie-list'>
      <h1>{headerContent}</h1>
      <div className='card-container'>
        {movies.map((movie,index) => 
          {
            console.log(movie.Ratings); 

           return (
            <div  className='card' key={index}>
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
                <Button onClick={()=>viewMovie(index,movie)} className='view-movie'>View</Button>
              </div>
            </div>
          )
          }
        )}
      </div>
    </div>
  );
}
