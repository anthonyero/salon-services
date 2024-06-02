import React, { useEffect, useState } from 'react';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import './Reviews.css';

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
      <h1 className='review-title'>Reviews</h1>
      <div className='review-main'>
        <div className='review-content'>
      <ReviewList />
      <ReviewForm />
      </div>
      </div>
    </main>
  );
};

export default Reviews;
