const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  messageContent: {
    type: String, 
    required: true
  }
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;
