import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { UPDATE_REVIEW } from '../utils/mutations';
import { GET_REVIEWS, GET_REVIEW } from '../utils/queries';

import Auth from '../utils/auth';

const UpdateReviewForm = (props) => {
  // When props are passed, the assumption is that we are passing a previous review and are thus using the `update` CRUD operation
 const [updateFormState, setUpdateFormState] = useState({
    rating: '',
    content: '',
  });

  const [updateReview, { error }] = useMutation(UPDATE_REVIEW,
    {
    refetchQueries: [
      GET_REVIEWS,
      'reviews']
    });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (updateFormState.rating && updateFormState.content != '') {
      try {
        const updateReviewData = await updateReview({
          variables: { reviewId: props.reviewId, user: Auth.getProfile().data._id, rating: parseInt(updateFormState.rating), content: updateFormState.content, date: String(Date.now()) }});
              
        setUpdateFormState({...updateFormState, 'rating': '', 'content': ''}); 

      } catch (err) {
        console.error(err);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'rating') {
      setUpdateFormState({ ...updateFormState, [name]: value });
    } else if (name == 'content') {
      setUpdateFormState({ ...updateFormState, [name]: value });
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
           <div className="col-12 col-lg-9">
            <input
              name='rating'
              type="number"
              min="1"
              max="5"
              placeholder={props.rating}
              value={updateFormState.rating}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-lg-9">
            <input
              name='content'
              placeholder={props.content}
              value={updateFormState.content}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Submit Updated Review
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to leave a review. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default UpdateReviewForm;
