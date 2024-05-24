import React, { useEffect, useState } from 'react';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from your backend API
    fetch('/api/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <main>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <ReviewCard key={review._id} review={review} />
      ))}
      <ReviewForm />
    </main>
  );
};

export default Reviews;
