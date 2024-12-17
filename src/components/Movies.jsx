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
  const moviesDs = [
    {
      Id: 1,
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '16 Jul 2010',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
      Plot: 'A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to regain his old life.',
      Language: 'English, Japanese, French',
      Country: 'United States',
      Awards: '4 Oscars, 157 wins & 220 nominations',
      Poster: '/inception.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.8/10' },
        { Source: 'Rotten Tomatoes', Value: '87%' },
        { Source: 'Metacritic', Value: '74/100' },
      ],
    },
    {
      Id: 2,
      Title: 'The Dark Knight',
      Year: '2008',
      Rated: 'PG-13',
      Released: '18 Jul 2008',
      Runtime: '152 min',
      Genre: 'Action, Crime, Drama',
      Director: 'Christopher Nolan',
      Writer: 'Jonathan Nolan, Christopher Nolan, David S. Goyer',
      Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart',
      Plot: 'Batman sets out to dismantle the remaining criminal organizations in Gotham, but he soon faces the Joker, a criminal mastermind.',
      Language: 'English, Mandarin',
      Country: 'United States',
      Awards: '2 Oscars, 159 wins & 220 nominations',
      Poster: '/dark_knight.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '9.0/10' },
        { Source: 'Rotten Tomatoes', Value: '94%' },
        { Source: 'Metacritic', Value: '84/100' },
      ],
    },
    {
      Id: 3,
      Title: 'Interstellar',
      Year: '2014',
      Rated: 'PG-13',
      Released: '07 Nov 2014',
      Runtime: '169 min',
      Genre: 'Adventure, Drama, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Jonathan Nolan, Christopher Nolan',
      Actors: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
      Plot: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity\'s survival.',
      Language: 'English',
      Country: 'United States, United Kingdom',
      Awards: '1 Oscar, 44 wins & 144 nominations',
      Poster: '/Interstellar.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.6/10' },
        { Source: 'Rotten Tomatoes', Value: '72%' },
        { Source: 'Metacritic', Value: '74/100' },
      ],
    },
    {
      Id: 4,
      Title: 'Pushpa',
      Year: '2021',
      Rated: 'Not Rated',
      Released: '17 Dec 2021',
      Runtime: '179 min',
      Genre: 'Action, Crime, Drama',
      Director: 'Sukumar',
      Writer: 'Sukumar',
      Actors: 'Allu Arjun, Fahadh Faasil, Rashmika Mandanna',
      Plot: 'Story of Pushpa Raj, a red sandalwood smuggler, and his rise to power.',
      Language: 'Telugu, Hindi',
      Country: 'India',
      Awards: '10 wins & 20 nominations',
      Poster: '/pushpa.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '7.6/10' },
        { Source: 'Rotten Tomatoes', Value: '88%' },
      ],
    },
    {
      Id: 5,
      Title: 'KGF 2',
      Year: '2022',
      Rated: 'Not Rated',
      Released: '14 Apr 2022',
      Runtime: '168 min',
      Genre: 'Action, Drama, Thriller',
      Director: 'Prashanth Neel',
      Writer: 'Prashanth Neel',
      Actors: 'Yash, Sanjay Dutt, Raveena Tandon',
      Plot: 'Rocky continues his rise to power, facing bigger challenges and enemies along the way.',
      Language: 'Kannada, Hindi',
      Country: 'India',
      Awards: '5 wins & 14 nominations',
      Poster: '/KGF2.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.4/10' },
        { Source: 'Rotten Tomatoes', Value: '90%' },
      ],
    },
    {
      Id: 6,
      Title: 'Avengers: End Game',
      Year: '2019',
      Rated: 'PG-13',
      Released: '26 Apr 2019',
      Runtime: '181 min',
      Genre: 'Action, Adventure, Drama',
      Director: 'Anthony Russo, Joe Russo',
      Writer: 'Christopher Markus, Stephen McFeely, Stan Lee',
      Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
      Plot: 'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos\' snap.',
      Language: 'English',
      Country: 'United States',
      Awards: '1 Oscar, 70 wins & 122 nominations',
      Poster: '/end_game.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.4/10' },
        { Source: 'Rotten Tomatoes', Value: '94%' },
      ],
    },
    {
      Id: 7,
      Title: 'Iron Man',
      Year: '2008',
      Rated: 'PG-13',
      Released: '02 May 2008',
      Runtime: '126 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Jon Favreau',
      Writer: 'Mark Fergus, Hawk Ostby, Art Marcum',
      Actors: 'Robert Downey Jr., Gwyneth Paltrow, Terrence Howard',
      Plot: 'After being held captive, Tony Stark builds an armored suit to fight crime and terror.',
      Language: 'English',
      Country: 'United States',
      Awards: '2 Oscar nominations, 21 wins & 72 nominations',
      Poster: '/iron_man.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '7.9/10' },
        { Source: 'Rotten Tomatoes', Value: '94%' },
      ],
    },
    {
      Id: 8,
      Title: 'KGF',
      Year: '2018',
      Rated: 'Not Rated',
      Released: '21 Dec 2018',
      Runtime: '156 min',
      Genre: 'Action, Drama',
      Director: 'Prashanth Neel',
      Writer: 'Prashanth Neel',
      Actors: 'Yash, Srinidhi Shetty, Ramachandra Raju',
      Plot: 'Rocky, a young man, rises to power in the world of gold smuggling.',
      Language: 'Kannada',
      Country: 'India',
      Awards: '4 wins & 9 nominations',
      Poster: '/kgf.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.2/10' },
        { Source: 'Rotten Tomatoes', Value: '88%' },
      ],
    },
  ];
  

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
  } else {
    movies = moviesDs;
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
