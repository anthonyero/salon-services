import {useState} from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../utils/mutations';
import { GET_REVIEWS } from '../utils/queries';
import UpdateReviewForm from './UpdateReviewForm';

const ReviewCard = ( props ) => {
  // Hooks 
   const [ deleteReview, { error, data }] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      GET_REVIEWS,
      'reviews']
    });;

   const [editState, setEditState] = useState(false)

  const handleDeleteReview = async (reviewId) => {

    const userId = Auth.getProfile().data._id

    try {
      const { data } = await deleteReview({
          variables: { reviewId, user: userId}
        })

    } catch (err) {
      console.error(err)
    }
  }

  const handleUpdateReview = async (props) => {
    setEditState(!editState)
  }

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
        <span>{new Date(parseInt(props.date)).toLocaleDateString()}</span>
      </div>
      {Auth.loggedIn() && props.userId == Auth.getProfile().data._id 

      ? (<div> 
          <input type="button" value="Edit" onClick={() => handleUpdateReview(props)} />
          <input type="button" value="Delete" onClick={() => handleDeleteReview(props._id)} />
        </div>
        )
      : ( <></>)
    }

    { editState 

    ? (
    <>
    <p>Please update your review below</p>
    <UpdateReviewForm
    key={props._id}
    reviewId={props._id}
    user={props.id}
    rating={props.rating}
    content={props.content}
    date={props.date}
    />
    </>) 
    : (<></>)
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
