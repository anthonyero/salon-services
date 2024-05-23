const { User, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, {username}) => {
      return User.findOne({ username }) 
    },
    review: async(parent, {reviewId}) => {
      return Review.findById(reviewId)
    },
    reviews: async() => {
      return Review.find()
    },
    usersReviews: async(parent, {userId}) => {
      return Review.find({ user: userId });
    }
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, username, password }) => {
      const user = await User.create({ firstName, lastName, email, username, password });
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      // User has been found by email, check password
      const correctPw = await user.isCorrectPassword(password); // Use `user`.isCorrectPassword for the variable, not `User` for the model

      const token = signToken(user);
      return { token, user };
    },
    addReview: async (parent, {user, apptId, rating, content, date}, context) => {
      if (context.user) {
        const newReview = Review.create({ user, apptId, rating, content, date});
        const updatedUser = User.findByIdAndUpdate(user,
          { $addToSet: { reviews: newReview._id } },
          { new: true, runValidators: true }
          )
        return newReview;
      }
      throw AuthenticationError;
    }
  }
};

module.exports = resolvers;
