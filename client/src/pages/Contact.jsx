import { useState } from 'react';


// Queries and Mutations
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../utils/mutations';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  }
}

function ContactForm() {
  const [personalName, setPersonalName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [messageContent, setMessage] = useState('');
  const [submittedState, setSubmittedState] = useState(false);

  const [addContact] = useMutation(ADD_CONTACT);



  // Whenever a change is made to any of the fields, we would like to update its respective state variable
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'personalName':
        setPersonalName(value);
        break;
      case 'emailAddress':
        setEmail(value);
        break;
      case 'messageContent':
        setMessage(value);
        break;
    };

  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevents page refresh

    try {
      const contactResponse = await addContact({
        variables: { name: personalName, email: emailAddress, messageContent: messageContent}
      })

       setPersonalName('');
       setEmail('');
       setMessage('');
       setSubmittedState(true);
       return (`Thank you for reaching out!`)

    } catch (err) {
      console.error(err)
    }

  }


  return (
    <div className = 'contact-form-container'>
      <h2>Contact</h2> 
      <form  style={styles.form} name='contact' id='contact-form' onSubmit={handleFormSubmit}>
        <label htmlFor='personalName'>Name: </label>
        <input
          value={personalName}
          name='personalName'
          onChange={handleInputChange}
          type='text'
          required

        />
        <label htmlFor='emailAddress'>Email Address: </label>
        <input 
          value={emailAddress}
          name='emailAddress'
          onChange={handleInputChange}
          type='email'
          required
        />
        <label htmlFor='messageContent'>Message: </label>
        <textarea
          value={messageContent}
          name='messageContent'
          onChange={handleInputChange}
          type='text'
          rows="8" 
          cols="50"
          required    
        />
        <button type='submit'>Submit</button>
      </form>
      {submittedState 
            ? (<div className="submit-message">
                Thank you for reaching out! We will get back to you as soon as we can!
              </div>)
            : (<></>)
            }
    </div>
  ) 
}

export default ContactForm;
