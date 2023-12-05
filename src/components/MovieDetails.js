import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from './Api';

const MovieDetails = ({ match }) => {
  const { movieId } = match.params;
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const details = await getMovieDetails(movieId);
      const credits = await getMovieCredits(movieId);
      const movieReviews = await getMovieReviews(movieId);

      setMovieDetails(details);
      setCast(credits);
      setReviews(movieReviews);
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>

      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
