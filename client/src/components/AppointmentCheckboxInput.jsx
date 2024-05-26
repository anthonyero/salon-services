const AppointmentCheckboxInput = (props) => {

return (
	<>
	<input 
	type="checkbox"
	key={props._id}
	id={props._id}
	name={props.name}
	onChange={props.onChange}
	value={props.value}
	/>
	<label htmlFor={props._id}/>{props.name}, {props.time} mins, ${props.price}
	</>
	)
}

export default AppointmentCheckboxInput;