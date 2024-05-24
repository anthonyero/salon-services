import React, { useEffect, useState } from 'react';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   // Fetch reviews from your backend API
  //   fetch('/api/reviews')
  //     .then(response => response.json())
  //     .then(data => setReviews(data))
  //     .catch(error => console.error('Error fetching reviews:', error));
  // }, []);

  return (
    <main>
      <h2>Reviews</h2>
      <ReviewList />
      <ReviewForm />
    </main>
  );
};

export default Reviews;
