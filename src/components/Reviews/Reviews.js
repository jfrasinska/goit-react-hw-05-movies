import React from 'react';

const Reviews = ({ reviews }) => (
  <div>
    <h2>Reviews</h2>
    {reviews.length > 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No reviews available for this movie.</p>
    )}
  </div>
);

export default Reviews;
