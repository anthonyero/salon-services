const { Schema, model } = require('mongoose');
const Tag = require('./Tag');

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
	tags: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Tag'
		}
	]
});

// A `tags` property could be useful for filtering. Would need to set up as an array of strings

const Service = model('Service', serviceSchema);

module.exports = Service;
