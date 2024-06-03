import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { GET_USER } from '../utils/queries';

import Auth from '../utils/auth';
import AppointmentCard from '../components/AppointmentCard';
import ReviewCard from '../components/ReviewCard';

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
	// Sort upcoming in ascending order
	const sortedUpcomingAppointments = upcomingAppointments.sort((a, b) => parseInt(a.apptDate) - parseInt(b.apptDate));

  const previousAppointments = appointmentsArray.filter((appointment) => {
  	if ( parseInt(appointment.apptDate) < parseInt(Date.now())) {
  	 	return appointment;
  	 }
  	})
  // Sort previous in descending order
  const sortedPreviousAppointments = previousAppointments.sort((a, b) => parseInt(b.apptDate) - parseInt(a.apptDate))

  
  const reviews = data.user.reviews;
  // Need to define a copy of the reviews array that because reviews is read-only
  const reviewsCopy = reviews.map((review) => review);
 	// Sort reviews in descending order so that the most recent reviews come first
  const sortedReviews = reviewsCopy.sort((a, b) => parseInt(b.date) - parseInt(a.date))

	return (

		<main className='me-container'>
			<h1 className='me-h1'>Welcome, {data.user.firstName}!</h1>

			<h2>Upcoming appointments:</h2>
				{sortedUpcomingAppointments.map(appointment => (
					<AppointmentCard 
					key={appointment._id}
					id={appointment._id}
					isArtist={data.user.artist}
					date={appointment.apptDate}
					user={`${appointment.user.firstName} ${appointment.user.lastName}`}
					artist={`${appointment.artist.firstName} ${appointment.artist.lastName}`}
					services={appointment.services}
					requests={appointment.requests}
					upcoming
					/>
					))}

			<h2>Previous appointments:</h2>
				{sortedPreviousAppointments.map(appointment => (
					<AppointmentCard 
					key={appointment._id}
					id={appointment._id}
					isArtist={data.user.artist}
					date={appointment.apptDate}
					user={`${appointment.user.firstName} ${appointment.user.lastName}`}
					artist={`${appointment.artist.firstName} ${appointment.artist.lastName}`}
					services={appointment.services}
					requests={appointment.requests}
					previous
					/>
					))}

			<h2>Reviews:</h2>
				{sortedReviews.map(review => {
				return <ReviewCard
				key={review._id}
				_id={review._id}
				userId={Auth.getProfile().data._id}
				username={data.user.username}
				rating={review.rating}
				content={review.content}
				date={review.date}
				/>
			})}
		</main>
	)
}

export default Me;