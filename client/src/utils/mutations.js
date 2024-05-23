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
        user
        rating
        apptId
        content
        date
    }
  }
`;