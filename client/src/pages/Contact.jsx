import { useState } from 'react';
import './Contact.css'

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
<div className='contact-page'>
<h1 className='contact-title'>Contact Us</h1>
<div className='contact-us-container'>
    <div className = 'contact-form-container'>
      <h4>Ask us anything, we can customize, personalize or just say hi!</h4>
      <form style={styles.form} name='contact' id='contact-form' onSubmit={handleFormSubmit}>
        <label htmlFor='personalName'>Name: </label>
        <input
        className='contact-input'
          value={personalName}
          name='personalName'
          onChange={handleInputChange}
          type='text'
          required

        />
        <label htmlFor='emailAddress'>Email Address: </label>
        <input 
        className='contact-input'
          value={emailAddress}
          name='emailAddress'
          onChange={handleInputChange}
          type='email'
          required
        />
        <label htmlFor='messageContent'>Message: </label>
        <textarea
        className='contact-input'
          value={messageContent}
          name='messageContent'
          onChange={handleInputChange}
          type='text'
          rows="8" 
          cols="50"
          required    
        />
        <button className='con-btn' type='submit' style={{'--clr': '#b447a2'}}><span>Submit</span><i></i></button>
      </form>
      {submittedState 
            ? (<div className="submit-message">
                Thank you for reaching out! We will get back to you as soon as we can!
              </div>)
            : (<></>)
            }
            </div>
            <div className='social-container'>
              <h4>Or check out our socials!</h4>
              <div>
                socials...
              </div>
            </div>
    </div>
    </div>

  ) 
}

export default ContactForm;
