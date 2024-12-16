import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieComponent from './components/MovieComponent';
import NetflixStartingComponent from './components/NetflixStartingComponent';
import SearchDashBoard from './components/SearchDashBoard';
import ErrorComponent from './UI/Error';
import LoadingComponent from './UI/Loading';

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

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<NetflixStartingComponent/> }></Route>
          <Route path='/search' element={<SearchDashBoard />}></Route>
          <Route path='/error' element={<ErrorComponent />} ></Route>
          <Route path='/loading' element={<LoadingComponent />} ></Route>
          <Route path='/movie:id' element={<MovieComponent />} ></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
