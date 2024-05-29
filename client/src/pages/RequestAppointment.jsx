import { useState } from 'react';
import { Link } from 'react-router-dom';
import { minutesToHours } from '../utils/helpers'

// Queries and Mutations
import { useQuery, useMutation } from '@apollo/client';
import { GET_SERVICES, GET_ARTIST_USERS } from '../utils/queries';
import { ADD_APPOINTMENT } from '../utils/mutations';

import Auth from '../utils/auth';
import AppointmentCheckboxInput from '../components/AppointmentCheckboxInput';

const RequestAppointment = () => {
  const [formState, setFormState] = useState({
    // user: '',
    apptDate: '',
    requests: '',
    // artistId: ''
  });

  // Had trouble accessing a nested array within a state variable. Placed externally and will append in handleFormSubmit
  const [servicesState, setServicesState] = useState([])

  // Placing another query after conditional logic will lead to an error 'Rendered more hooks than during the previous render.'
    // Placed this query at the beginning without issue. Did not destructure to prevent `loading` etc. being declared multiple times
  const artistUsers = useQuery(GET_ARTIST_USERS);
  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  const { loading, data, error } = useQuery(GET_SERVICES);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const manicures = data.services.filter((service) => service.tags.includes('manicure'));
  const pedicures = data.services.filter((service) => service.tags.includes('pedicure'));


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleChangeCheckbox = (event) => {
    // The value contains the service's _id property
    const { name, value, checked } = event.target;
    // In order to withdraw values from custom attributes, we use `getAttribute()`. Can also use 'data-{custom}'
    const price = event.target.getAttribute('price')
    const time = event.target.getAttribute('time')

    if (checked) {
      setServicesState([
        ...servicesState, {name, serviceId: value, price, time}
      ])
    }

    if (!checked) {
      setServicesState(servicesState.filter( (element) => {
        return element.serviceId != value // Without the explicit return, this will clear the entire array 
      }))
    }

  }

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Retrieve the artist user ID
    const artistId = artistUsers.data.artistUsers[0]._id // Currently only have one artist, otherwise would not hardcode the value

    const serviceIds = servicesState.map(element => element.serviceId);
    // setFormState({...formState}) //, services: serviceIds, user: Auth.getProfile().data._id});
    // const userId = await Auth.getProfile().data._id;

    try {
      const appointmentData = await addAppointment({
        variables: { ...formState, services: serviceIds, user: Auth.getProfile().data._id, artistId},
      });
      // return appointmentData
      // Clear state variables
      setFormState({...formState, appptDate: '', requests: ''});
      setServicesState([]);
      // Have to manually clear the checkboxes. The state is cleared above, but the inputs are not
      const checkboxInputs = document.getElementsByTagName('input');
      for (var i = 0; i<checkboxInputs.length; i++) {
        if (checkboxInputs[i].type == 'checkbox') {
          checkboxInputs[i].checked = false;
        }
      }
      // This manually clears the date input which wasn't cleared by `setFormState`
      document.getElementById("apptDate").value = "";
      return (`Thank you for scheduling an appointment!`)

    } catch (e) {
      console.error(e);
    }

  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Request an Appointment </h4>
          <div className="card-body">
            {Auth.loggedIn() && data ? 
              (
              <form onSubmit={handleFormSubmit}>
              <h2>Services</h2>
              <h3>Manicure</h3>
               {manicures.map((service) => {
                return <AppointmentCheckboxInput
                className="form-input"
                key={service._id}
                _id={service._id}
                name={service.name}
                time={service.time}
                price={service.price}
                value={service._id}
                onChange={handleChangeCheckbox}/>
              })}
             
              <h3>Pedicure</h3>
               {pedicures.map((service) => {
                return <AppointmentCheckboxInput
                key={service._id}
                _id={service._id}
                name={service.name}
                time={service.time}
                price={service.price}
                value={service._id}
                onChange={handleChangeCheckbox}/>
              })}
                 <input
                  className="form-input"
                  placeholder="Please detail special requests here!"
                  name="requests"
                  type="text"
                  value={formState.requests}
                  onChange={handleChange}
                />
                <label htmlFor="apptDate">Please select a date and time. Working hours are 9am-5pm CST</label>
                <input
                  className="form-input"
                  id="apptDate"
                  name="apptDate"
                  type="datetime-local"
                  value={formState.date}
                  required
                  onChange={handleChange}
                />

              {servicesState.length > 0 

              ? (
                <>
                <p>Time: {minutesToHours(servicesState.reduce((total, current) => {
                  return total + parseInt(current.time);
                }, 0))}</p>
                <p>Cost: ${servicesState.reduce((total, current) => {
                  return total + parseInt(current.price);
                }, 0)} </p>

                <button
                className="btn btn-block btn-info"
                style={{ color: 'black', cursor: 'pointer' }}
                type="submit"
              >
                Submit your appointment request!
              </button>

                </>
                )

              : (
                <>
                </>
                )
              }
                
              </form>
            ) : (
              <p>
                You need to be logged in to request a appointment. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
              </p>
            )

            }

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RequestAppointment;
