import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser (email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($user: ID!, $apptId: ID, $rating: Int!, $content: String, $date: String!) {
    addReview (user: $user, apptId: $apptId, rating: $rating, content: $content, date: $date) {
        _id
        user {
          _id
          username
        }
        rating
        apptId
        content
        date
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation updateReview($reviewId: ID!, $user: ID!, $apptId: ID, $rating: Int!, $content: String) {
    updateReview(reviewId: $reviewId, user: $user, apptId: $apptId, rating: $rating, content: $content) {
      _id
      user {
        _id
        username
      }
      apptId
      rating
      content
      date
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($reviewId: ID!, $user: ID!) {
    deleteReview(reviewId: $reviewId, user: $user) {
      _id
      user {
        _id
        username
      }
      apptId
      rating
      content
      date
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($user: ID!, $services: [ID]!, $apptDate: String!, $requests: String, $artistId: ID!) {
    addAppointment(user: $user, services: $services, apptDate: $apptDate, requests: $requests, artistId: $artistId) {
      _id
      user {
        _id
      }
      services {
        _id
      }
      requests
      completed
      artist {
        _id
      }
      review {
        _id
      }
    }
  }
`;


export const DELETE_APPOINTMENT = gql`
  mutation deleteAppointment($apptId: ID!, $user: ID!) {
    deleteAppointment(apptId: $apptId, user: $user) {
      _id
      user {
        _id
      }
      services {
        _id
      }
      requests
      completed
      artist {
        _id
      }
      review {
        _id
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact($name: String!, $email: String!, $messageContent: String!) {
    addContact(name: $name, email: $email, messageContent: $messageContent) {
      name
      email
      messageContent
    }
  }
`
