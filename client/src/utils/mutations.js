import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!) {
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