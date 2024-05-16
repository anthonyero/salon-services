const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
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
  }  
`;

module.exports = typeDefs;
