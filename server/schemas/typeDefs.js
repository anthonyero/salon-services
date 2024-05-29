const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    artist: Boolean
    appointments: [Appointment]
    reviews: [Review]
  }

  type Review {
    _id: ID
    user: User
    apptId: ID
    rating: Int
    content: String
    date: String
  }

  type Service {
    _id: ID
    name: String
    time: Int
    price: Int
    imagePath: String
    tags: [String]
  }

  type Appointment {
    _id: ID
    user: User
    services: [Service]
    apptDate: String
    requests: String
    completed: Boolean
    artist: User
    review: Review
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    users: [User]
    artistUsers: [User]

    review(reviewId: ID!): Review
    reviews: [Review]
    usersReviews(userId: ID!): [Review]

    services: [Service]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addReview(user: ID!, apptId: ID, rating: Int!, content: String, date: String!): Review
    updateReview(reviewId: ID!, user: ID!, apptId: ID, rating: Int!, content: String): Review
    deleteReview(reviewId: ID!, user: ID!): Review
    addAppointment(user: ID!, services: [ID]!, apptDate: String!, requests: String, artistId: ID!): Appointment
    deleteAppointment(apptId: ID!, user: ID!): Appointment
  }  
`;

module.exports = typeDefs;
