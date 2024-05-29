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

    // Retrieve a user's personal information 
	const { loading, data, error } = useQuery(GET_USER, {
		variables: {userId: Auth.getProfile().data._id} }); // Retrieves a particular user
	if (loading) return 'Loading...';
  	if (error) return `Error! ${error.message}`;

  	const appointmentsArray = data.user.appointments;

	// Don't have to convert the `apptDate` property using the Date method
	const upcomingAppointments = appointmentsArray.filter((appointment) => {
	 if ( parseInt(appointment.apptDate) > parseInt(Date.now())) {
	 	return appointment;
	 }
	})
	console.log(upcomingAppointments)
  	 
  	const previousAppointments = appointmentsArray.filter((appointment) => {
  	if ( parseInt(appointment.apptDate) < parseInt(Date.now())) {
  	 	return appointment;
  	 }
  	})

  	const reviews = data.user.reviews;

	return (

		<main>
			<h1>Welcome, {data.user.firstName}!</h1>

			<h2>Upcoming appointments:</h2>
				{upcomingAppointments.map(appointment => <li key={appointment._id}>{appointment.apptDate}</li>)}

			<h2>Previous appointments:</h2>
				{previousAppointments.map(appointment => <li key={appointment._id}>{appointment.apptDate}</li>)}
			<h2>Reviews:</h2>
				{reviews.map(review => <li key={review._id}>{review.date}</li>)}

		</main>
	)
}

export default Me;