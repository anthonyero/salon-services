import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { GET_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Me = () => {
  if (!Auth.loggedIn()) {
    return (
      <p>
          You need to be logged in to access your personal page. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
    )} 

	const { loading, data, error } = useQuery(GET_USER, {
		variables: {userId: Auth.getProfile().data._id} });
	 if (loading) return 'Loading...';
  	 if (error) return `Error! ${error.message}`;
  	 console.log(data)



	return (

		<main>
			<h1> </h1>



		</main>





	)
}

export default Me;