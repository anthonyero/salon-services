import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_REVIEWS } from '../utils/queries';
import ReviewCard from './ReviewCard';

function ReviewList() {
	const { loading, data, error } = useQuery(GET_REVIEWS);
	 if (loading) return 'Loading...';
  	 if (error) return `Error! ${error.message}`;
	// data is nested with review objects
  	 	//
	// data.reviews.map((review) => {
	// 	console.log(review);
	// 	console.log(review._id)

	// })

  	 // To render to the page, you must explicitly return the ReviewCard if we use {}
  	 	// We could also use () for an implicit return from arrow function
	return(	
	<div className='reviews-container'>
			{data.reviews.map((review) => {
				return <ReviewCard
				key={review._id}
				_id={review._id}
				user={review.user}
				rating={review.rating}
				content={review.content}
				date={review.date}
				/>
			})}
		</div>

	)
}

export default ReviewList;