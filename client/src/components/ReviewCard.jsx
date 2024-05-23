import React from 'react';
import PropTypes from 'prop-types';


const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <h3>Review by {review.user?.username || 'Anonymous'}</h3>
        <span className="review-card-rating">Rating: {review.rating}/5</span>
      </div>
      <div className="review-card-body">
        <p>{review.content}</p>
      </div>
      <div className="review-card-footer">
        <span>{new Date(review.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
    rating: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

ReviewCard.defaultProps = {
  review: {
    user: {
      username: 'Anonymous',
    },
    rating: 0,
    content: 'No review content.',
    date: new Date().toISOString(),
  },
};

export default ReviewCard;
