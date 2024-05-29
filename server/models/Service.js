const { Schema, model } = require('mongoose');
// const Tag = require('./Tag');

const serviceSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	time: {
		type: Number, 
		required: true
	},
	price: {
		type: Number, 
		required: true
	},
	imagePath: {
		type: String
	},
	tags: [
		{
			type: String
		}
	]
});

// A `tags` property could be useful for filtering. Would need to set up as an array of strings
	// For the time being, will add service tags as a string of arrays 

const Service = model('Service', serviceSchema);

module.exports = Service;
