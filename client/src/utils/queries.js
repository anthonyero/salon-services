import { gql } from '@apollo/client';

export const GET_REVIEW = gql`
	query review($reviewId: ID!) {
		review(reviewId: $reviewId) {
			 _id: ID
		    user: ID
		    apptId: ID
		    rating: Int
		    content: String
		    date: String
		}
	}
`;

export const GET_REVIEWS = gql`
	{
		reviews {
			_id
			user
			apptId
			rating
			content
			date: String
		}
	}
			
`

export const GET_USER_REVIEWS = gql`
	query usersReviews($userId: ID!) {
		usersReviews (userID: $userId) {
			_id
			user
			apptId
			rating
			content
			date: String
		}
	}
`;


