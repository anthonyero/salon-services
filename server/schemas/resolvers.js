const { User, Review, Service, Appointment } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { ObjectId } = require('mongoose').Types;

const resolvers = {
  Query: {
    user: async (parent, {userId}) => {
      return User.findOne({ _id: userId })
      .populate({path: 'appointments', populate: [ {path: 'user', model: 'User'}, { path: 'services', model: 'Service'}, { path: 'artist'}]})
      .populate('reviews');
    },
    users: async () => {
      return User.find().populate('appointments').populate('reviews');
    },
    artistUsers: async () => {
      return User.find({artist: true}).populate('appointments').populate('reviews');
    },
    review: async(parent, {reviewId}) => {
      return Review.findById(reviewId).populate('user')
    },
    reviews: async() => {
      return Review.find().populate('user').sort({ 'date': 'desc' })
    },
    usersReviews: async(parent, {userId}) => {
      return Review.find({ user: userId }).populate('user');
    },
    services: async() => {
      return Service.find();
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
        const newReview = await Review.create({ user, apptId, rating, content, date});
        const updatedUser = await User.findByIdAndUpdate(user,
          { $addToSet: { reviews: newReview._id } },
          { new: true, runValidators: true }
          )
        return newReview;
      }
      throw AuthenticationError;
    },
    updateReview: async (parent, {reviewId, user, apptId, rating, content}, context) => {
    if (context.user) {
      const review = await Review.findOne({ _id: reviewId })

      // Do not use strict equality `===` comparing a string to a objectID
      if (user == review.user) {
        const updatedReview =  await Review.findOneAndUpdate({_id: reviewId },
        { apptId, rating, content,$currentDate: {date: true }},
        { new: true, runValidators: true }
        );

      return updatedReview;
    }
      }
      
    throw AuthenticationError;
  },
  deleteReview: async (parent, { reviewId, user }, context) => {
    if (context.user) {
      const review =  await Review.findOne({ _id: reviewId })

      if (user == review.user) {
        const updatedReview = await Review.findOneAndDelete({_id: reviewId },
        { new: true }
        );
        const updatedUser = await User.findOneAndUpdate({_id: user},
          {$pull: {reviews: new ObjectId(reviewId) }}, // Want to use `new ObjectID` to pass the value. Perhaps because the review has already been deleted?
          { new: true, runValidators: true}
          )
      return updatedReview;
      } 
    } 
  },
  addAppointment: async (parent, { user, services, apptDate, requests, artistId }, context) => {
    if (context.user) {
      const appointment = await Appointment.create({ user, services, apptDate, requests, artist: artistId});
      const updateUser = await User.findOneAndUpdate(
        {_id: appointment.user},
        {$addToSet: {appointments: appointment._id}}
      );
      const updateArtist = await User.findOneAndUpdate(
        {_id: appointment.artist}, // Note, the property in the appointment model is `artist`, not `artistId`
        {$addToSet: {appointments: appointment._id}}
      )
      return appointment; 
    }

  },
  deleteAppointment: async (parent, { apptId, user }, context) => {
    // if (context.user) {
      const appointment =  await Appointment.findOne({ _id: apptId })

      if (user == appointment.user || user == appointment.artist ) { // If we would like the artist to have access to deleting and updating, may add logic such as (user == appointment.user || user == appointment.artist)
        const updatedAppointment = await Appointment.findOneAndDelete({_id: apptId },
        { new: true }
        );
        const updatedUser = await User.findOneAndUpdate({_id: user},
          {$pull: {appointments: new ObjectId(apptId) }}, 
          { new: true, runValidators: true}
          );
        const updatedArtist = await User.findOneAndUpdate({_id: new ObjectId(updatedAppointment.artist)},
          {$pull: {appointments: new ObjectId(apptId) }}, 
          { new: true, runValidators: true}
          );
      return updatedAppointment;
      } 
    // } 
  }

  }
} 


module.exports = resolvers;
