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
    },
    updateReview: async (parent, {reviewId, user, apptId, rating, content}, context) => {
    // if (context.user) {
      const review = Review.findOne({ _id: reviewId })

      if (user === review.user) {
        const updatedReview = Review.findOneAndUpdate({_id: reviewId },
        { apptId, rating, content },
        { new: true }
        );
      // const updatedUser = User.findByIdAndUpdate(reviewId,
      //   { $addToSet: { reviews: newReview._id } },
      //   { new: true, runValidators: true }
      //   )
      return updatedReview;
    // }
      }
      
    throw AuthenticationError;
  },

  deleteReview: async (parent, { reviewId, user }, context) => {
  // if (context.user) {
        const review = Review.findOne({ _id: reviewId })
        

        if (user === review.user) {
          const updatedReview = Review.findOneAndDelete({_id: reviewId },
          { new: true }
          );
        // const updatedUser = User.findByIdAndUpdate(reviewId,
        //   { $addToSet: { reviews: newReview._id } },
        //   { new: true, runValidators: true }
        //   )
        return updatedReview;
      }
        } 
      }
     } 


module.exports = resolvers;
