import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_REVIEW } from '../utils/mutations';

import Auth from '../utils/auth';

const reviewForm = () => {
 const [formState, setFormState] = useState({
    rating: '',
    content: '',
  });

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // To pass the user's id information I retrieve the token, decode it, and pass the embedded
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
            <input
              name='rating'
              type="number"
              min="1"
              max="5"
              placeholder="On a scale of 1-5, how would you rate your experience?"
              value={formState.rating}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-lg-9">
            <input
              name='content'
              placeholder="Tell us about your visit!"
              value={formState.content}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Submit Review
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

export default reviewForm;
