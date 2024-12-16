import React from 'react';
import './MoviesList.css'; // Ensure you style the component
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const movieData = {
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
    { Source: "Internet Movie Database", Value: "7.2/10" },
    { Source: "Rotten Tomatoes", Value: "94%" },
    { Source: "Metacritic", Value: "73/100" },
  ],
};


export default function MoviesList({searchQuery}) {
  const navigate = useNavigate(); 
  const movies = [
    {
      id: 1,
      title: 'Inception',
      poster: '/inception.jpg',
      rating: 8.8,
      year: 2010,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      poster: '/dark_knight.jpg',
      rating: 9.0,
      year: 2008,
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: '/Interstellar.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 4,
      title: 'Pushpa',
      poster: '/pushpa.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 5,
      title: 'KGF 2',
      poster: '/KGF2.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 6,
      title: 'Avengers: End Game',
      poster: '/end_game.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 7,
      title: 'Iron Man',
      poster: '/iron_man.jpg',
      rating: 8.6,
      year: 2014,
    },
    {
      id: 8,
      title: 'KGF',
      poster: '/kgf.jpg',
      rating: 8.6,
      year: 2014,
    }
  ];

  let headerContent = ''; 
  
    if(searchQuery === ''){
      headerContent = `Here is new movies`; 
    }
    else{
      headerContent = `Here is recommended movies for ${searchQuery} `;
    }
  
  const viewMovie = (index) => {
      navigate(`/movie/${index}`,{state:{movieData:movieData}})
  }

  return (
    <div className='movie-list'>
      <h1>{headerContent}</h1>
      <div className='card-container'>
        {movies.map((movie,index) => (
          <div className='card' key={movie.id}>
            <img className='card-image' src={movie.poster} alt={movie.title} />
            <div className='card-content'>
              <h2 className='card-title'>{movie.title}</h2>
              <p className='card-rating'>Rating: {movie.rating}</p>
              <p className='card-year'>Year: {movie.year}</p>
              <Button onClick={()=>viewMovie(index)} className='view-movie'>View</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
