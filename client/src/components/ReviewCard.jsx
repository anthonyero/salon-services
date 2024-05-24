import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/auth';


const ReviewCard = ( props ) => {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <h3>Review by {props.username || 'Anonymous'}</h3>
        <span className="review-card-rating">Rating: {props.rating}/5</span>
      </div>
      <div className="review-card-body">
        <p>{props.content}</p>
      </div>
      <div className="review-card-footer">
        <span>{new Date(props.date).toLocaleDateString()}</span>
      </div>
      {props.userId == Auth.getProfile().data._id 

      ? (<div> 
          <input type="button" value="Edit" />
          <input type="button" value="Delete" />
        </div>
        )
      : ( <></>)
    }
    </div>
  );
};

// ReviewCard.propTypes = {
//   review: PropTypes.shape({
//     user: PropTypes.shape({
//       username: PropTypes.string,
//     }),
//     rating: PropTypes.number.isRequired,
//     content: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//   }).isRequired,
// };

// ReviewCard.defaultProps = {
//   review: {
//     user: {
//       username: 'Anonymous',
//     },
//     rating: 0,
//     content: 'No review content.',
//     date: new Date().toISOString(),
//   },
// };

export default ReviewCard;
