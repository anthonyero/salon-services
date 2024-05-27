import { gql } from '@apollo/client';

export const GET_USER = gql`
	query user($userId: ID!) {
		user (userId: $userId) {
			_id 
			firstName
			lastName
			username
			email
			appointments {
				_id
				services {
					name
					price
					time
				}
			apptDate
			completed
			artist {
				_id
				firstName
				lastName
				username
			}
			review {
				_id
				apptId
				rating
				content
				date
			}
			}
		}
	}
`

export const GET_USERS = gql`
	query users {
		users {
			_id
			firstName
			lastName
			username
			email
			appointments {
				_id
			}
			reviews {
				_id
			}
		}
	}
`;

export const GET_ARTIST_USERS = gql`
	query artistUsers = {
		artistUsers {
			_id
			firstName
			lastName
			username
			email
			appointments {
				_id
			}
		}
	}
`

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
  query reviews {
    reviews {
      _id
      user {
      	_id
      	username
      }
      apptId
      rating
      content
      date
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

export const GET_SERVICES = gql`
	query services {
		services {
			_id
			name
			time
			price
			imagePath
			tags
		}
	}
`;


