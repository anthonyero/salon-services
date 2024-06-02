import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_REVIEW } from '../utils/mutations';
import { GET_REVIEWS, GET_REVIEW } from '../utils/queries';

import Auth from '../utils/auth';

const reviewForm = () => {
  // Delete and modify for custom styling. By default, text was white and not visible 
  const styles = {
    button: {
      cursor: 'pointer',
      '--clr': '#F2C31C',
      color: "black"
    }
  }
  // When props are passed, the assumption is that we are passing a previous review and are thus using the `update` CRUD operation
 const [formState, setFormState] = useState({
    rating: '',
    content: '',
  });

 // After successful addition, we invoke the `GET_REVIEWS` query to populate the page with the updated list
  const [addReview, { error }] = useMutation(ADD_REVIEW,
    {
    refetchQueries: [
      GET_REVIEWS,
      'reviews']
    });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        const data = await addReview({
          variables: { user: Auth.getProfile().data._id, rating: parseInt(formState.rating), content: formState.content, date: String(Date.now()) },
      });


      setFormState({...formState, 'rating': '', 'content': ''}); // Place within one setFormState command. On two separate invocations, only the first will run

    } catch (err) {
       console.error(err);
      
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'rating') {
      setFormState({ ...formState, [name]: value });
    } else if (name == 'content') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h4>Tell us about your experience</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
           <div className="col-12 col-lg-9">
            <p>On a scale of 1-5, how would you rate your experience?</p>
            <input
              name='rating'
              type="number"
              min="1"
              max="5"
              placeholder="Please rate us 1-5"
              value={formState.rating}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="form col-12 col-lg-9">
            <textarea
              name='content'
              placeholder="Tell us about your visit!"
              value={formState.content}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit" style={styles.button}>
              <span>Submit Review</span><i></i>
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              <p>Please leave a rating 1-5 and leave a short message</p>
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

export default reviewForm;
