import React from 'react';
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


export default function MoviesList({searchQuery,userMovie}) {
  const navigate = useNavigate(); 
  const movieDs = [
    {
      Id: 1,
      Title: 'Inception',
      Poster: '/inception.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2010,
    },
    {
      Id: 2,
      Title: 'The Dark Knight',
      Poster: '/dark_knight.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2008,
    },
    {
      Id: 3,
      Title: 'Interstellar',
      Poster: '/Interstellar.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2014,
    },
    {
      Id: 4,
      Title: 'Pushpa',
      Poster: '/pushpa.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2014,
    },
    {
      Id: 5,
      Title: 'KGF 2',
      Poster: '/KGF2.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2014,
    },
    {
      Id: 6,
      Title: 'Avengers: End Game',
      Poster: '/end_game.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2014,
    },
    {
      Id: 7,
      Title: 'Iron Man',
      Poster: '/iron_man.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2014,
    },
    {
      Id: 8,
      Title: 'KGF',
      Poster: '/kgf.jpg',
      Ratings: [
        {Source:'IMDB',Value:'9.0/10'}, 
        {Source:'Rotten Tomato',Value:'10/10'}
      ],
      Year: 2014,
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
      navigate(`/movie/${index}`,{state:{movieData:movieD}})
  }

  let movies = []; 

  console.log(userMovie); 
  if (userMovie && userMovie !== '') {
    movies.push(userMovie);
  } else {
    movies = movieDs;
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
                <Button onClick={()=>viewMovie(index)} className='view-movie'>View</Button>
              </div>
            </div>
          )
          }
        )}
      </div>
    </div>
  );
}
