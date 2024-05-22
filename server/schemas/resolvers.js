const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, {username}) => {
      return User.findOne({ username }) 
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, username, password }) => {
      const user = await User.create({ firstName, lastName, email, username, password });
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      // User has been found by email, check password
      const correctPw = await profile.isCorrectPassword(password);

      const token = signToken(profile);
      return { token, profile };
    }
  }
};

module.exports = resolvers;
