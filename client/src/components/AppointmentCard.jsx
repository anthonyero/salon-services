import { formatDateTime } from '../utils/helpers'
const AppointmentCard = (props) => {
	// Defined because by default the text was white and not visible. Delete when custom styling applied 
	const styles = {
		button: {
			color: "black"
		}
	}
	
	// To implement updating an appointment, include the following line to add a button in "card-body"
	// {props.upcoming ? <button className="update-button" type="button" style={styles.button} onClick="">Update</button> : <></> } 
	

	return (
	<div className="appointment-card card">
	  <div className="appointment-card-header card-header">
	    {formatDateTime(parseInt(props.date))}
	  </div>
	  <ul className="list-group list-group-flush">
	    <li className="list-group-item">Services:</li>
	    	<ul className="services-list-group list-group list-group-flush">
	    	{props.services.map((service) => <li className="list-group-item">{service.name}</li>)}
	    	</ul>
	    <li className="list-group-item">With: {props.artist}</li>
	    {props.requests 
	    ? (<li className="list-group-item">Requests: {props.requests}</li>) 
		: (<></>)
		}
	  </ul>
	  <div className="card-body">
	   {props.upcoming ? <button className="delete-button"type="button" style={styles.button} onClick="">Cancel</button> : <></> } 
	  </div>
	</div>
	)
}

export default AppointmentCard;