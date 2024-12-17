import React, { useState } from 'react';
import './SearchDashboard.css'; 
import Logo from './Logo';
import Input from '../UI/Input';
import Navbar from './Navbar';
import Filters from './Filter';
import MoviesList from './Movies';
import MovieComponent from './MovieComponent';
import { useLocation } from 'react-router-dom';



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

export default function SearchDashBoard() {
  const [filters, setFilters] = useState(
    {
      year: '',
      rating: '',
      genre: '',
      actors: ''
    }
  );

  const [movieData,setMovieData] = useState(moviesDs);
  
  const updateMovieData = (data) => {
      setMovieData(data); 
  }

  const location = useLocation();
  const searchQuery = location.state?.searchQuery || ''; 
  const userMovie = location.state?.data || ''; 
  console.log(searchQuery); 

  

  const updateFilters = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const sendToBackend = async ({ actors, genre, year }) => {
    console.log('Sending to backend:', actors, genre, year);
  
    try {
      const response = await fetch('http://localhost:3000/add_filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: actors,
          year: year,
        }),
      });
  
      if (!response.ok) throw new Error('Failed to fetch data from backend');
  
      const result = await response.json();
      console.log('Movies from backend:', result.data);
  
      return result.data; // Directly return the fetched data
    } catch (error) {
      console.error('Error in sendToBackend:', error);
      return []; // Return empty array on error
    }
  };
  
  // Cleaned up submitFilter
  const submitFilter = async (data) => {
    console.log('Filters applied:', data);
    const movies = await sendToBackend(data);
    console.log(movies); 
    if(movies){
      updateMovieData(movies);
    }
    // Update state with fetched movies
  };
  
  
  return (
    <div className='search-page'>

        {/* Navbar Component */}
        <Navbar className='navbar'>
            <Logo />
        </Navbar>

        {/* Filters Component */}
        <div className='filters-section'>
          <Filters submitFilter={submitFilter} filters={filters} onChange={updateFilters} />
        </div>

        {/* Movie List component */}
        <MoviesList  movieData={movieData} moviesDs={moviesDs} updateMovieData={updateMovieData} userMovie={userMovie} searchQuery={searchQuery} />
        {/* <MovieComponent movie={movieData} /> */}
    </div>
  );
}
