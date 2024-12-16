import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieComponent from './components/MovieComponent';
import NetflixStartingComponent from './components/NetflixStartingComponent';
import SearchDashBoard from './components/SearchDashBoard';
import ErrorComponent from './UI/Error';
import LoadingComponent from './UI/Loading';


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<NetflixStartingComponent/> }></Route>
          <Route path='/search/:names?' element={<SearchDashBoard />}></Route>
          <Route path='/error' element={<ErrorComponent />} ></Route>
          <Route path='/loading' element={<LoadingComponent />} ></Route>
          <Route path='/movie/:id' element={<MovieComponent />} ></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
