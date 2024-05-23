import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; // Importing to use the `loggedIn` functionality
// import { useQuery } from '@apollo/client';
// import { QUERY_ } from '../utils/queries'; // Query of published reviews
import ReviewForm from '../components/ReviewForm';

const reviews = () => {

	return (
		<main>
			<ReviewForm />

		</main>
	)
};

export default reviews;
