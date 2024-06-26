import { formatDateTime } from '../utils/helpers'
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_APPOINTMENT } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Auth from '../utils/auth';

const AppointmentCard = (props) => {
	// Defined because by default the text was white and not visible. Delete when custom styling applied 
	const styles = {
		button: {
			color: "black"
		}
	}

	// Hooks 
   const [ deleteAppointment, { error, data }] = useMutation(DELETE_APPOINTMENT, {
 	refetchQueries: [
      GET_USER,
      'user']
   });

   const getUser = useQuery(GET_USER, {
		variables: {userId: Auth.getProfile().data._id} });

   const handleDeleteAppointment = async (apptId) => {
    const userId = Auth.getProfile().data._id

    try {
      const { data } = await deleteAppointment({
          variables: { apptId, user: userId}
        })

    } catch (err) {
      console.error(err)
    }
  }


	
	// To implement updating an appointment, include the following line to add a button in "card-body"
	// {props.upcoming ? <button className="update-button" type="button" style={styles.button} onClick="">Update</button> : <></> } 
	

	return (
	<div className="appointment-card card">
	  <div className="appointment-card-header">
	    {formatDateTime(parseInt(props.date))}
	  </div>
	  <ul className="list-group list-group-flush">
	    <li className="list-group-item"></li>
	    	<ul className="services-list-group list-group list-group-flush">
	    	{props.services.map((service) => <li className="list-group-item">{service.name}</li>)}
	    	</ul>
	    {props.isArtist 
	    ? (<li className="list-group-item">Customer: {props.user}</li>) 
	    : (<li className="list-group-item">Artist: {props.artist}</li>)
	  	}
	
	    {props.requests 
	    ? (<li className="list-group-item">Requests: {props.requests}</li>) 
			: (<></>)
			}
	  </ul>
	  <div className="card-body">
	   {props.upcoming ? <button className="btn delete-button"type="button" style={styles.button} onClick={() => handleDeleteAppointment(props.id)}><span>Cancel</span><i></i></button> : <></> } 
	  </div>
	</div>
	)
}

export default AppointmentCard;