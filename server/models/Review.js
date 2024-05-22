const { Schema, model } = require('mongoose');
const User = require('./User');
const Appointment = require('./Appointment');

const reviewSchema = new Schema({
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      apptId: {  
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
      },
      rating: {
      	type: Number,
      	min: 1,
      	max: 5,
      	required: true
      },
      content: {
      	type: String,
      	minLength: 10,
      	maxLength: 300
      }
});

const Review = model('Review', reviewSchema);

module.exports = Review;

      