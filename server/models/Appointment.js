const { Schema, model } = require('mongoose');
const User = require('./User');
const Service = require('./Service');
const Review = require('./Review');

const appointmentSchema = new Schema({
      user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
      services: [
            {  
                  type: Schema.Types.ObjectId,
                  ref: 'Service',
                  required: true
            }
      ],
      apptDate: {
            type: Date, 
            required: true
      },
      completed: {
            type: Boolean,
            default: false,
            required: true
      },
      artist: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
      },
      review: {
            type: Schema.Types.ObjectId,
            ref: 'Review'
      }
});

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;
