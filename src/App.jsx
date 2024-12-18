import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoadingComponent from './UI/Loading';
import NetflixStartingComponent from './components/NetflixStartingComponent';
import SearchDashBoard from './components/SearchDashBoard';
import MovieComponent from './components/MovieComponent';
import ErrorComponent from './UI/Error';
import './App.css'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 
  }, []);

  return (
    <HashRouter>
        {loading ? (
          <LoadingComponent />
        ) : (
          <Routes>
            <Route path="/" element={<NetflixStartingComponent />} />
            <Route path="/search/:names?" element={<SearchDashBoard />} />
            <Route path="/error" element={<ErrorComponent />} />
            <Route path="/movie/:id" element={<MovieComponent />} />
            <Route path='*' element={<ErrorComponent />} />
          </Routes>
        )}
    </HashRouter>
  );
}

export default App;
