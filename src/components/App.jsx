import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
