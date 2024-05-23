const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
  }

  type Review {
    _id: ID
    user: ID
    apptId: ID
    rating: Int
    content: String
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User] 
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addReview(user: ID!, apptId: ID, rating: Int!, content: String, date: String!): Review
  }  
`;

module.exports = typeDefs;
