	// About
	// Services
	// Gallery
	// Sign up / sign in
	// Booking link
	// Experiences and inspos
	// Social Media Links
	// Contact 
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; // Importing to use the `loggedIn` functionality
// import { useQuery } from '@apollo/client';
// import { QUERY_ } from '../utils/queries'; // Query of available services 

// import Nav from ''

const Home = () => {

	return (
		<main>
			<h2>Landing Page</h2>
			<h3> {Auth.loggedIn() ? `You are logged in!` : `You are not logged in!`}</h3>

		</main>
	)
};

export default Home;