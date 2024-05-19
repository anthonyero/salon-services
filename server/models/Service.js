const { Schema, model } = require('mongoose');

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
	}
});

// A `tags` property could be useful for filtering. Would need to set up as an array of strings

const Service = model('Service', serviceSchema);

module.exports = Service;
