const AppointmentCheckboxInput = (props) => {

return (
	<>
	<input 
	type="checkbox"
	key={props._id}
	id={props._id}
	name={props.name}
	onChange={props.onChange}
	price={props.price}
	time={props.time}
	value={props.value}
	/>
	<label htmlFor={props._id}/>{props.name}, {props.time} mins, ${props.price}
	</>
	)
}

export default AppointmentCheckboxInput;