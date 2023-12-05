import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast.js'));
const Reviews = lazy(() => import('./Reviews'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/movies/:movieId"
            element={
              <MovieDetails>
                <Route
                  index
                  element={<Navigate to="/movies/:movieId/cast" />}
                />
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </MovieDetails>
            }
          />
          {/* Przekierowanie do strony głównej */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
