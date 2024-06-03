# Polished Up - Salon Services 

## Description 

An web service application displaying an e-commerce nail salon service called "Polished Up". This application utilizes [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://react.dev/), [Node](https://nodejs.org/en), [GraphQL](graphql.org), and is deployed on [Render](https://render.com/).

**Features include**:

- Patrons can creat accounts that allow them to interface with the salon's offerings and services
- Registered users can submit appointment requests with their selected services, special requests, and a preferred time and date.
    - Users will also have access to a total cost and the anticipated length of the appointment tallied before submission 
- Registered users can submit reviews detailing their experiences with our business 
    - Users can also update both the rating and the review's text content
    - Users can delete previous reviews 
    - Users can submit multiple reviews that will be published 
- Users who are logged in will have acess to a 'Me' page detailing upcoming appointments and previous appointments with relevant information including:
    - The appointment's date and time
    - The selected services
    - Any special requests specified when requesting the appointment
    - The artist/employee who will be attending them
- Users have the opportunity cancel/delete an appointment 
- Artist/employee user's 'Me' page will be automatically populated with upcoming and previous appointments. 
    - They also have the opportunity to cancel appointments
-  A 'Services' page detailing manicure, pedicure, and nail options
- A gallery of previous work 
- A contact form to reach out to the salon
- Responsive design accommodating mobile and desktop aspect ratios and resolutions


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [Credits](#credits)
- [License](#license)

## Installation

N/A

## Usage

- Users can access the deployed page by utilizing the link in the section below

### Customer Users

- First-time users will need to create an account to request appointments and to submit reviews

- Customer users can submit an appointment request through the "Request Appointment" page. 
    - Users will be required to select one or more manicure/pedicure options and a date/time
- Customers can submit reviews through the "Reviews" page where they can provide a rating on a 1-5 scale and detail their experience
- Users can update/delete their reviews from either the 'Reviews' page or from their 'Me' page
    - Both of these operations contain their own buttons
    - After editing
- Users can view upcoming appointments, and delete them, from their 'Me' page

### Employee/Artist Users

- Employee users have access to all appointments they are assigned
    - Employee users also have the functionality to cancel appointments 
- Employee users have similar functionality as customer users and can schedule appointments for themselves and publish reviews as well

## Links

- [Link to the deployed webpage](https://salon-services.onrender.com/)

- [Link to the GitHub repository](https://github.com/anthonyero/salon-services)


The relevant JavaScript, HTML, and CSS files are located within this repository. 

JavaScript files include comments detailing changes implemented within them. 

Please refer to the commit history and branches within the repository for a tracked history of changes.

## Credits

This application was developed by: 

- [Caryn Behnke](https://github.com/Magicaryn)
- [Dennis Angelov](https://github.com/Youthfulmaster)
- [Martin Miller](https://github.com/mmiller1234321) 
- [Anthony Rodriguez-Ortiz](https://github.com/anthonyero)

This application utilizes `react`, `express`, `mongoose`, `graphql`, `vite`, `dotenv`, `concurrently`, `jwt-decode`, `gulp`, and other development npm packages. 

This application was deployed on Render.

## License

N/A

![Gif of live webpage](/assets/images/salon-services-deployed-demo.gif)
